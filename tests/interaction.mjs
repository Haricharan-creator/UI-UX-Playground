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
  await page.waitForTimeout(1000);

  // Seed only the local trace stores used by the workflow orchestrator.
  await page.evaluate(() => {
    localStorage.setItem('uiuxPlaygroundUnifiedUXContext', JSON.stringify({project:'Smoke Project',screen:'Checkout',phase:'Review',version:'1.0'}));
    localStorage.setItem('hacharaDesignDNA', JSON.stringify({viewport:'Desktop',spacing:'8pt',radius:'12px'}));
    localStorage.setItem('hacharaDesignReviewFlow', JSON.stringify([
      {id:'f1',type:'finding',screen:'Checkout',observation:'Primary action is visually unclear'},
      {id:'c1',type:'correction',findingId:'f1',screen:'Checkout',correction:'Increase CTA hierarchy',status:'Implemented'},
      {id:'e1',type:'before-after',findingId:'f1',screen:'Checkout',status:'Captured'},
      {id:'t1',type:'test',findingId:'f1',screen:'Checkout',result:'Task completed without clarification',decision:'Keep the correction'}
    ]));
  });

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  if (await page.locator('#hwoButton').count() !== 1) throw new Error('Workflow control missing.');
  await page.locator('#hwoButton').click();
  await page.waitForSelector('#hwoOverlay');

  const overlayText = await page.locator('#hwoOverlay').innerText();
  if (!overlayText.includes('UX Workflow Orchestrator')) throw new Error('Workflow overlay did not render.');
  if (!overlayText.includes('Review the test evidence and decide whether to iterate')) throw new Error('Workflow completion state missing.');
  if (!overlayText.includes('Findings')) throw new Error('Workflow trace statistics missing.');

  await page.locator('#hwoGo').click();
  await page.waitForTimeout(300);
  const reviewVisible = await page.locator('#screenreview').evaluate(el => !el.classList.contains('hidden'));
  if (!reviewVisible) throw new Error('Workflow Open review did not navigate to Screen Review.');

  if (errors.length) throw new Error('Browser console/page errors: ' + errors.join(' | '));
  console.log(JSON.stringify({ ok:true, interaction:'workflow-open-completion-state-navigation', checks:['workflow control','overlay','completion state','trace stats','open review navigation'] }, null, 2));
} finally {
  await browser.close();
  server.kill();
}
