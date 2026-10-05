import { chromium } from 'playwright';
import { spawn } from 'node:child_process';

const server = spawn('python3', ['-m', 'http.server', '4173'], { stdio: 'ignore' });
const wait = ms => new Promise(r => setTimeout(r, ms));
await wait(1000);
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

try {
  await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Every primary Classic navigation target must exist and become visible when selected.
  const navTargets = await page.locator('nav button[data-view]').evaluateAll(btns => btns.map(b => b.dataset.view));
  if (!navTargets.length) throw new Error('Classic navigation did not render data-view controls.');
  for (const view of navTargets) {
    await page.locator(`nav button[data-view="${view}"]`).evaluate(el => el.click());
    const target = page.locator(`#${view}`);
    if (await target.count() !== 1) throw new Error(`Navigation target missing: ${view}`);
    if (await target.evaluate(el => el.classList.contains('hidden'))) throw new Error(`Navigation target remained hidden: ${view}`);
  }

  // Project handoff: generate -> copy -> clear -> clipboard paste.
  await page.locator('nav button[data-view="workspace"]').evaluate(el => el.click());
  await page.getByRole('button', { name: /Open Project Records & Handoff/ }).evaluate(el => el.click());
  await page.locator('textarea#handoffScript').fill('');
  await page.getByRole('button', { name: 'Generate handoff script' }).click();
  const handoff = await page.locator('#handoffScript').inputValue();
  if (!handoff.includes('HACHARA UI/UX PROJECT HANDOFF')) throw new Error('Handoff generation did not produce the expected package.');
  if (!handoff.includes('Do not invent missing information')) throw new Error('Handoff did not preserve the controlled-work rule.');

  await page.evaluate(() => {
    const store = { value: '', writes: 0 };
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
      writeText: async value => { store.value = value; store.writes++; },
      readText: async () => store.value
    }});
    window.__hacharaClipboard = store;
  });
  await page.getByRole('button', { name: 'Copy handoff script' }).click();
  await page.waitForTimeout(100);
  const clipboardState = await page.evaluate(() => window.__hacharaClipboard);
  if (!clipboardState?.writes || clipboardState.value !== handoff) throw new Error('Handoff copy did not write the generated package.');

  await page.getByRole('button', { name: 'Clear' }).click();
  if (await page.locator('#handoffScript').inputValue() !== '') throw new Error('Handoff clear did not clear the text area.');

  await page.getByRole('button', { name: 'Paste from clipboard' }).click();
  await page.waitForTimeout(100);
  if (await page.locator('#handoffScript').inputValue() !== handoff) throw new Error('Handoff paste did not restore clipboard content.');

  // Project portability: export produces a downloadable JSON file with the expected format.
  await page.locator('nav button[data-view="portability"]').click();
  const portableDownload = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export Project' }).click();
  const portablePath = await portableDownload;
  if (portablePath.suggestedFilename() !== 'UI_UX_Playground_Project.json') throw new Error('Portable export filename is incorrect.');

  // Project data export produces its expected downloadable snapshot.
  await page.locator('nav button[data-view="datahub"]').click();
  const snapshotDownload = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export project data' }).click();
  const snapshotPath = await snapshotDownload;
  if (snapshotPath.suggestedFilename() !== 'UI_UX_Playground_Project_Snapshot.json') throw new Error('Project snapshot export filename is incorrect.');

  // Learning interaction: lesson feedback and completion must work and persist.
  await page.goto('http://127.0.0.1:4173/tool-training-lesson.html', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: /Use Auto Layout with spacing and padding/ }).click();
  if (!(await page.locator('#feedback').innerText()).includes('Correct')) throw new Error('Tool lesson correct-answer feedback did not render.');
  if ((await page.locator('#fill').evaluate(el => el.style.width)) !== '70%') throw new Error('Tool lesson progress did not advance after correct answer.');
  await page.getByRole('button', { name: 'Mark lesson complete' }).click();
  if (!(await page.locator('#status').innerText()).includes('Lesson complete')) throw new Error('Tool lesson completion state did not render.');
  await page.reload({ waitUntil: 'networkidle' });
  if (await page.evaluate(() => localStorage.getItem('hacharaToolTrainingFigmaAutoLayout')) !== 'complete') throw new Error('Tool lesson completion did not persist.');

  // Tool shortcut tabs must switch content and remain usable.
  await page.goto('http://127.0.0.1:4173/tool-shortcuts.html', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Framer' }).click();
  if (!(await page.locator('#framer').evaluate(el => el.classList.contains('active')))) throw new Error('Framer shortcut tab did not activate.');
  await page.getByRole('button', { name: 'iOS / Android' }).click();
  if (!(await page.locator('#mobile').evaluate(el => el.classList.contains('active')))) throw new Error('Mobile shortcut tab did not activate.');

  // Workspace selector + Modern presentation: selection must persist and route correctly.
  await page.goto('http://127.0.0.1:4173/ui-options.html', { waitUntil: 'networkidle' });
  await page.getByRole('radio', { name: /Modern Workspace/ }).check();
  await page.getByRole('button', { name: 'Continue with selected UI' }).click();
  await page.waitForURL('**/modern.html');
  if (await page.evaluate(() => localStorage.getItem('hacharaUI')) !== 'modern') throw new Error('Modern workspace preference did not persist.');
  if (!(await page.locator('text=WELCOME TO HACHARA').count())) throw new Error('Modern workspace did not render the expected hero.');

  // Modern workspace responsive gate.
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : width === 768 ? 1024 : 1000 });
    await page.reload({ waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    if (overflow) throw new Error(`Modern workspace has horizontal overflow at ${width}px width.`);
  }

  // Bundle dashboard: filters, card activation and keyboard activation must remain functional.
  await page.goto('http://127.0.0.1:4173/bundle-dashboard.html', { waitUntil: 'networkidle' });
  const firstBundle = page.locator('.bundle[data-id]').first();
  await firstBundle.click();
  if (await page.locator('#detail').evaluate(el => el.classList.contains('hidden'))) throw new Error('Bundle detail did not open.');
  await page.getByRole('button', { name: 'Validated' }).click();
  if (!(await page.getByRole('button', { name: 'Validated' }).evaluate(el => el.classList.contains('active')))) throw new Error('Bundle filter did not activate.');
  const filtered = page.locator('.bundle[data-id]').first();
  if (await filtered.count()) {
    await filtered.focus();
    await filtered.press('Enter');
    if (await page.locator('#detail').evaluate(el => el.classList.contains('hidden'))) throw new Error('Bundle keyboard activation did not open detail.');
  }

  // Key user-facing standalone pages must render with no console/page errors.
  for (const path of [
    'academy.html',
    'academy-lesson-catalog.html',
    'bundle-dashboard.html',
    'studio.html',
    'review.html',
    'progress.html',
    'capability-evidence.html',
    'tool-practice.html',
    'tool-training.html'
  ]) {
    await page.goto(`http://127.0.0.1:4173/${path}`, { waitUntil: 'networkidle' });
    if (await page.locator('body').count() !== 1) throw new Error(`${path} body did not render.`);
    if (await page.title() === '') throw new Error(`${path} title is empty.`);
  }

  // Responsive overflow gate for the primary Classic workspace at mobile/tablet/desktop widths.
  await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'networkidle' });
  for (const viewport of [
    { name: 'mobile', width: 390, height: 844 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 1000 }
  ]) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.reload({ waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    if (overflow) throw new Error(`Classic workspace has horizontal overflow at ${viewport.name} width.`);
  }

  if (errors.length) throw new Error('Browser console/page errors: ' + errors.join(' | '));
  console.log(JSON.stringify({
    ok: true,
    interaction: 'user-facing-navigation-copy-paste-export-learning',
    checks: [
      'Classic navigation targets',
      'project handoff generation/copy/paste/clear',
      'portable export download',
      'project snapshot export download',
      'tool lesson feedback/completion/persistence',
      'tool shortcut tabs',
      'standalone page render smoke',
      'Classic responsive overflow'
    ]
  }, null, 2));
} finally {
  await browser.close();
  server.kill();
}
