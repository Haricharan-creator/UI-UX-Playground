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

  // Seed only the local trace stores used by the existing HACHARA workflow.
  await page.evaluate(() => {
    localStorage.setItem('uiuxPlaygroundUnifiedUXContext', JSON.stringify({
      project:'Smoke Project', screen:'Checkout', phase:'Review', version:'1.0',
      goal:'Validate checkout flow', users:'Test users'
    }));
    localStorage.setItem('hacharaDesignDNA', JSON.stringify({
      viewport:'Desktop', spacing:'8pt', radius:'12px'
    }));
    localStorage.setItem('hacharaDesignReviewFlow', JSON.stringify([
      {id:'f1',type:'finding',screen:'Checkout',observation:'Primary action is visually unclear',impact:'Task completion may be delayed',principle:'Visibility'},
      {id:'c1',type:'correction',findingId:'f1',screen:'Checkout',correction:'Increase CTA hierarchy',status:'Implemented'},
      {id:'e1',type:'before-after',findingId:'f1',screen:'Checkout',status:'Captured'},
      {id:'t1',type:'test',findingId:'f1',screen:'Checkout',testQuestion:'Can users find the primary action?',method:'Usability task',result:'Task completed without clarification',decision:'Keep the correction'}
    ]));
  });

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  if (await page.locator('#hwoButton').count() !== 1) throw new Error('Workflow control missing.');
  await page.locator('#hwoButton').click();
  await page.waitForSelector('#hwoOverlay');

  const overlay = page.locator('#hwoOverlay');
  const overlayText = await overlay.innerText();
  if (!overlayText.includes('UX Workflow Orchestrator')) throw new Error('Workflow overlay did not render.');
  if (!overlayText.includes('Review the test evidence and decide whether to iterate')) throw new Error('Workflow completion state missing.');
  for (const label of ['Findings', 'Corrections', 'Evidence', 'Tests']) {
    if (!overlayText.includes(label)) throw new Error(`Workflow trace statistic missing: ${label}`);
  }
  if (!overlayText.includes('1') ) throw new Error('Workflow trace counts did not render.');

  await page.locator('#hwoGo').click();
  await page.waitForTimeout(300);
  const reviewVisible = await page.locator('#screenreview').evaluate(el => !el.classList.contains('hidden'));
  if (!reviewVisible) throw new Error('Workflow Open review did not navigate to Screen Review.');

  // Confirm the local trace survived the navigation/reload boundary.
  const trace = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaDesignReviewFlow') || '[]'));
  const counts = ['finding','correction','before-after','test'].map(type => trace.filter(x => x.type === type).length);
  if (counts.join(',') !== '1,1,1,1') throw new Error(`Trace persistence mismatch: ${counts.join(',')}`);

  // Bundle Dashboard interaction smoke: filters -> bundle -> coverage -> lesson -> repeat.
  await page.goto('http://127.0.0.1:4173/bundle-dashboard.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  if (await page.locator('#bundles .bundle').count() !== 17) throw new Error('Bundle Dashboard did not render all 17 bundles.');

  await page.locator('[data-filter="not-started"]').click();
  if (await page.locator('#bundles .bundle').count() !== 17) throw new Error('Not-started filter did not retain the expected bundles.');

  await page.locator('[data-filter="all"]').click();
  const b01 = page.locator('#bundles .bundle[data-id="B01"]');
  await b01.press('Enter');
  await page.waitForTimeout(250);

  if (await page.locator('#detail.hidden').count() !== 0) throw new Error('Bundle Dashboard keyboard activation did not open bundle detail.');
  const coverage = page.locator('#detail .coverage');
  if (await coverage.count() !== 1) throw new Error('Source lesson coverage did not render.');
  const lessonLink = coverage.locator('a').first();
  if (await lessonLink.count() !== 1) throw new Error('Bundle coverage did not expose an Open lesson link.');

  const lessonPage = await page.waitForEvent('popup', () => lessonLink.click());
  await lessonPage.waitForLoadState('domcontentloaded');
  if (!lessonPage.url().includes('lesson-')) throw new Error('Open lesson did not open the expected lesson page.');
  await lessonPage.close();

  await page.locator('[data-filter="all"]').click();
  await page.locator('#bundles .bundle[data-id="B01"]').press(' ');
  await page.waitForTimeout(250);
  if (await page.locator('#detail.hidden').count() !== 0) throw new Error('Space keyboard activation did not reopen bundle detail.');

  if (errors.length) throw new Error('Browser console/page errors: ' + errors.join(' | '));
  console.log(JSON.stringify({
    ok:true,
    interaction:'workflow-open-completion-state-navigation',
    checks:['workflow control','overlay','completion state','trace stats','open review navigation','trace persistence'],
    traceCounts:{findings:counts[0],corrections:counts[1],evidence:counts[2],tests:counts[3]}
  }, null, 2));
} finally {
  await browser.close();
  server.kill();
}
