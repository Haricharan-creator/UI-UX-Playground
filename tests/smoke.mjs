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
  if (errors.length) throw new Error('Browser console/page errors: ' + errors.join(' | '));
  console.log(JSON.stringify({ ok: true, checks }, null, 2));
} finally {
  await browser.close();
  server.kill();
}
