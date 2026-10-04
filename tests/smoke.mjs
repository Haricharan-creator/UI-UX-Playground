import { chromium } from 'playwright';
import { spawn } from 'node:child_process';

const server = spawn('python3', ['-m', 'http.server', '4173'], { stdio: 'ignore' });
const wait = ms => new Promise(r => setTimeout(r, ms));
await wait(1500);
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

try {
  await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  const checks = {
    title: await page.title(),
    body: await page.locator('body').count(),
    dnaRuntime: await page.evaluate(() => !!window.HACHARA_DNA),
    reviewRuntime: await page.evaluate(() => !!window.HACHARA_REVIEW_FLOW),
    contextRuntime: await page.evaluate(() => !!window.HACHARA_CONTEXT),
    workflowRuntime: await page.evaluate(() => !!window.HACHARA_WORKFLOW),
    workspaceRuntime: await page.evaluate(() => !!window.HACHARA_WORKSPACE),
    workflowControl: await page.locator('#hwoButton').count(),
    contextBadge: await page.locator('#hacharaContextBadge').count(),
  };

  if (checks.body !== 1) throw new Error('Application body did not render.');
  for (const [key, value] of Object.entries(checks)) {
    if (['title','body'].includes(key)) continue;
    if (!value) throw new Error(`Smoke check failed: ${key}`);
  }
  // HACHARA UI preference surface smoke: selector must preserve local work and route correctly.
  await page.goto('http://127.0.0.1:4173/ui-options.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  if (await page.locator('input[name="ui"]').count() !== 2) throw new Error('UI preference selector did not render both workspace choices.');
  await page.locator('input[value="modern"]').check();
  await page.locator('#continue').click();
  await page.waitForLoadState('networkidle');
  if (!page.url().endsWith('/modern.html')) throw new Error('Modern workspace selection did not navigate correctly.');
  if (await page.locator('.hacharaFooter').count() !== 1) throw new Error('Modern HACHARA signature footer is missing.');
  if ((await page.locator('body').innerText()).indexOf('Turn Ideas into Impact') === -1) throw new Error('Modern workspace hero did not render.');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: 'networkidle' });
  const modernOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  if (modernOverflow) throw new Error('Modern workspace has horizontal overflow at mobile width.');
  if ((await page.locator('body').innerText()).indexOf('HACHARA') === -1) throw new Error('Modern workspace lost HACHARA identity at mobile width.');

  // Return to Classic and verify the preference is persisted without touching project stores.
  await page.goto('http://127.0.0.1:4173/ui-options.html', { waitUntil: 'networkidle' });
  await page.locator('input[value="classic"]').check();
  await page.locator('#continue').click();
  await page.waitForLoadState('networkidle');
  if (!page.url().endsWith('/index.html')) throw new Error('Classic workspace selection did not navigate correctly.');
  if (await page.locator('.hacharaUiSwitch').count() !== 1) throw new Error('Classic HACHARA UI switch is missing.');
  if (await page.locator('.hacharaClassicFooter').count() !== 1) throw new Error('Classic HACHARA signature footer is missing.');

  if (errors.length) throw new Error('Browser console/page errors: ' + errors.join(' | '));
  console.log(JSON.stringify({ ok: true, checks, uiPreference: 'classic↔modern', modernMobileOverflow: false }, null, 2));
} finally {
  await browser.close();
  server.kill();
}
