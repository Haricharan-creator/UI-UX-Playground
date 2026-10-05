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

  // Academy learning entry points: catalog filters must work and lesson links must resolve to real pages.
  await page.goto('http://127.0.0.1:4173/academy.html', { waitUntil: 'networkidle' });
  if (!(await page.getByText('HACHARA Academy', { exact: false }).count())) throw new Error('Academy landing page did not render.');
  const academyOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  if (academyOverflow) throw new Error('Academy landing page has horizontal overflow.');

  await page.goto('http://127.0.0.1:4173/academy-lesson-catalog.html', { waitUntil: 'networkidle' });
  const allLessons = page.locator('.lesson');
  const allCount = await allLessons.count();
  if (!allCount) throw new Error('Lesson catalog contains no lessons.');
  for (const filter of ['foundation','visual','ux','systems','practice']) {
    await page.locator(`button[data-filter="${filter}"]`).click();
    const visible = await page.locator('.lesson:visible').count();
    if (!visible) throw new Error(`Lesson catalog filter produced no visible lessons: ${filter}`);
    if (!(await page.locator(`button[data-filter="${filter}"]`).evaluate(el => el.classList.contains('active')))) throw new Error(`Lesson catalog filter did not activate: ${filter}`);
  }
  await page.locator('button[data-filter="all"]').click();
  if (await page.locator('.lesson:visible').count() !== allCount) throw new Error('Lesson catalog All filter did not restore all lessons.');

  const lessonLinks = await page.locator('.lesson a').evaluateAll(as => as.map(a => a.getAttribute('href')).filter(Boolean));
  for (const href of [...new Set(lessonLinks)]) {
    const response = await page.request.get(`http://127.0.0.1:4173/${href}`);
    if (!response.ok()) throw new Error(`Lesson entry point does not resolve: ${href}`);
  }

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

  // Playground: Play → Create → Use must generate usable, copyable, and savable outputs.
  await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'networkidle' });
  await page.locator('nav button[data-view="playground"]').evaluate(el => el.click());
  await page.locator('#playIntent').fill('Improve onboarding for first-time users.');
  await page.locator('#playContext').fill('Mobile product; evidence is still incomplete; validate before deciding.');
  await page.locator('#playOutputType').selectOption('framework');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  const framework = await page.locator('#playOutput').innerText();
  if (!framework.includes('HACHARA UX THINKING FRAMEWORK')) throw new Error('Play framework output did not render.');
  if (!framework.includes('Improve onboarding for first-time users.')) throw new Error('Play output did not preserve user intent.');

  await page.evaluate(() => {
    const store = { value: '', writes: 0 };
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
      writeText: async value => { store.value = value; store.writes++; },
      readText: async () => store.value
    }});
    window.__hacharaClipboard = store;
  });
  await page.getByRole('button', { name: 'Copy / Use externally' }).click();
  await page.waitForTimeout(100);
  const playClipboard = await page.evaluate(() => window.__hacharaClipboard);
  if (!playClipboard?.writes || playClipboard.value !== framework) throw new Error('Play output did not copy for external use.');

  await page.getByRole('button', { name: 'Save to Playground' }).click();
  if (!(await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaPlayOutputs') || '[]').length > 0))) throw new Error('Play output did not save locally.');

  for (const type of ['prompt', 'workflow', 'artifact']) {
    await page.locator('#playOutputType').selectOption(type);
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    const output = await page.locator('#playOutput').innerText();
    if (!output.trim()) throw new Error(`Play output was empty for type: ${type}`);
  }

  // Create entry points must lead to an actual workspace rather than a placeholder alert.
  await page.locator('button.btn.primary', { hasText: '+ Create' }).click();
  if (await page.locator('#workspace').evaluate(el => el.classList.contains('hidden'))) throw new Error('Create entry point did not open Project Workspace.');
  const workspaceNameFields = page.locator('#workspace #pwName');
  if (await workspaceNameFields.count() !== 1) throw new Error('Classic Project Workspace project-name field is missing.');
  if (!(await workspaceNameFields.isVisible())) throw new Error('Classic Project Workspace project-name field is not visible.');

  // Play Builder: create each supported output mode, persist it, copy it for external use, then clear it.
  await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'networkidle' });
  await page.locator('nav button[data-view="playground"]').evaluate(el => el.click());
  await page.locator('#playIntent').fill('Improve onboarding for first-time users.');
  await page.locator('#playContext').fill('Mobile product, limited evidence, accessibility required.');
  await page.evaluate(() => {
    const store = { value: '', writes: 0 };
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
      writeText: async value => { store.value = value; store.writes++; },
      readText: async () => store.value
    }});
    window.__hacharaClipboard = store;
  });

  for (const type of ['prompt','framework','workflow','artifact']) {
    await page.locator('#playOutputType').selectOption(type);
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    const output = await page.locator('#playOutput').innerText();
    if (!output.trim() || output.includes('Your created output will appear here')) throw new Error(`Play Builder did not create ${type} output.`);
    if (type === 'framework' && !output.includes('HACHARA UX THINKING FRAMEWORK')) throw new Error('Framework output is incorrect.');
    if (type === 'workflow' && !output.includes('HACHARA ACTION WORKFLOW')) throw new Error('Workflow output is incorrect.');
    if (type === 'artifact' && !output.includes('HACHARA ARTIFACT STARTER')) throw new Error('Artifact output is incorrect.');
    if (type === 'prompt' && !output.includes('WORKING RULES')) throw new Error('Prompt output is missing controlled-work rules.');
    await page.getByRole('button', { name: 'Copy / Use externally' }).click();
    await page.waitForTimeout(100);
    const copied = await page.evaluate(() => window.__hacharaClipboard?.value || '');
    if (copied !== output) throw new Error(`Play Builder copy mismatch for ${type} output.`);
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaPlayBuilder') || '{}'));
    if (saved.type !== type || saved.output !== output) throw new Error(`Play Builder persistence failed for ${type} output.`);
  }

  await page.getByRole('button', { name: 'Save to Playground' }).click();
  const savedOutputs = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaPlayOutputs') || '[]'));
  if (!savedOutputs.length) throw new Error('Play Builder save did not persist an output.');
  await page.getByRole('button', { name: 'Clear', exact: true }).click();
  if (await page.locator('#playIntent').inputValue() !== '' || await page.locator('#playContext').inputValue() !== '') throw new Error('Play Builder clear did not clear inputs.');
  if (!(await page.locator('#playOutput').innerText()).includes('Your created output will appear here')) throw new Error('Play Builder clear did not reset output.');

  // End-to-end learning evidence loop: Studio → Review → Rework → Resubmit → Ready → Human Validate → Progress/Evidence.
  await page.goto('http://127.0.0.1:4173/studio.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  const studioModuleValue = await page.evaluate(async () => {
    const data = await fetch('data/module-practice-evidence-integration-v1.json').then(r => r.json());
    return (data.modules || []).find(m => m.mappingStatus === 'mapped' && m.practiceStatus === 'defined')?.moduleId || '';
  });
  if (!studioModuleValue) throw new Error('Studio did not expose a mapped, defined practice module.');
  await page.locator('#module').selectOption(studioModuleValue);
  if (!(await page.locator('#challengeTitle').innerText()).trim()) throw new Error('Studio challenge did not render.');
  await page.locator('#work').fill('Create a clearer first-run onboarding flow and document the design decision.');
  for (const id of ['screenshot','prototype','reflection']) await page.locator('#'+id).check();
  await page.getByRole('button', { name: 'Save submission' }).click();
  if (!(await page.locator('#state').innerText()).includes('Submitted')) throw new Error('Studio submission did not reach Submitted state.');
  await page.getByRole('link', { name: 'Open Review' }).click();
  await page.waitForLoadState('networkidle');
  if (await page.locator('#content').evaluate(el => el.classList.contains('hidden'))) throw new Error('Review did not load the Studio submission.');

  await page.locator('#decision').selectOption('rework');
  await page.locator('#note').fill('Strengthen the primary onboarding action and reduce competing emphasis.');
  await page.locator('#v2summary').fill('Reworked hierarchy and CTA emphasis while preserving the original V1 submission.');
  await page.locator('#feedback').fill('F-01: clarify primary action; A-01: rework hierarchy.');
  await page.locator('#preserveV1').check();
  await page.getByRole('button', { name: 'Record Rework & Resubmit' }).click();
  if (!(await page.locator('#state').innerText()).includes('Needs Rework')) throw new Error('Review did not record Needs Rework.');
  if (await page.locator('#resubmit').evaluate(el => el.classList.contains('hidden'))) throw new Error('Resubmit V2 action did not appear after rework.');
  const reviewAfterRework = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaReview') || 'null'));
  if (!reviewAfterRework?.v1Preserved || reviewAfterRework?.rework?.versions?.[0]?.version !== 'V1') throw new Error('V1 preservation was not recorded.');

  await page.locator('#v2summary').fill('V2 improves onboarding hierarchy and CTA emphasis; V1 remains preserved for comparison.');
  await page.getByRole('button', { name: 'Resubmit V2' }).click();
  if (!(await page.locator('#state').innerText()).includes('Resubmitted')) throw new Error('V2 resubmission did not record.');
  const reviewAfterResubmit = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaReview') || 'null'));
  if (reviewAfterResubmit?.workflowState !== 'resubmitted' || reviewAfterResubmit?.rework?.versions?.length !== 2) throw new Error('V2 rework record is incomplete.');

  await page.locator('#decision').selectOption('ready-for-validation');
  await page.locator('#findingsResolved').check();
  await page.locator('#note').fill('Rework evidence reviewed; findings are resolved for human validation.');
  await page.getByRole('button', { name: 'Move to Validation' }).click();
  if (!(await page.locator('#state').innerText()).includes('Ready for Validation')) throw new Error('Review did not reach Ready for Validation.');
  await page.locator('#validationNote').fill('Human validation confirms the submitted evidence supports the documented design decision and rework.');
  await page.getByRole('button', { name: 'Validate Evidence' }).click();
  if (!(await page.locator('#state').innerText()).includes('Validated')) throw new Error('Human validation did not reach Validated state.');
  const finalReview = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaReview') || 'null'));
  if (finalReview?.workflowState !== 'validated' || finalReview?.validation?.validatedBy !== 'human-review') throw new Error('Validated review record is incomplete.');

  await page.goto('http://127.0.0.1:4173/progress.html', { waitUntil: 'networkidle' });
  if (!(await page.locator('#validatedCount').innerText()).match(/1/)) throw new Error('Progress did not reflect validated evidence.');
  await page.goto('http://127.0.0.1:4173/capability-evidence.html', { waitUntil: 'networkidle' });
  if (!(await page.locator('#workflow').innerText()).includes('Validated')) throw new Error('Capability Evidence did not reflect validated workflow state.');

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
