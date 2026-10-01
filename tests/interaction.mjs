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

  // Studio -> Review -> Rework -> Validation smoke using shared local workflow state.
  await page.goto('http://127.0.0.1:4173/studio.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  if (await page.locator('#module option').count() < 2) throw new Error('Studio did not load mapped modules.');
  await page.selectOption('#module', 'B01-M01');
  if (!(await page.locator('#moduleMeta').innerText()).includes('Source gap')) throw new Error('Studio source-gap state did not render.');
  await page.selectOption('#module', 'B01-M02');
  await page.locator('#work').fill('Audit the interface against usability principles and record evidence.');
  for (const id of ['screenshot','prototype','reflection']) await page.locator('#'+id).check();
  await page.locator('#submit').click();
  if (!(await page.locator('#notice').innerText()).includes('Submission saved')) throw new Error('Studio submission did not save.');
  const studioSubmission = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaStudioSubmission') || 'null'));
  if (!studioSubmission || studioSubmission.moduleId !== 'B01-M02' || studioSubmission.state !== 'Submitted') throw new Error('Studio submission persistence mismatch.');

  await page.goto('http://127.0.0.1:4173/review.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  if ((await page.locator('#moduleTitle').innerText()).indexOf('B01-M02') !== 0) throw new Error('Review did not load the Studio module.');
  if (!(await page.locator('#criteria').innerText()).includes('evidence')) throw new Error('Review criteria did not load from the shared scaffold.');

  await page.selectOption('#decision', 'rework');
  await page.locator('#preserveV1').check();
  await page.locator('#v2summary').fill('Increase hierarchy and verify accessibility measurements.');
  await page.locator('#feedback').fill('f1: modify — strengthen primary action hierarchy.');
  await page.locator('#note').fill('Evidence-based rework is required.');
  await page.locator('#apply').click();
  let reviewRecord = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaReview') || 'null'));
  if (!reviewRecord || reviewRecord.workflowState !== 'needs-rework' || reviewRecord.v1Preserved !== true) throw new Error('Needs Rework transition did not persist correctly.');
  if (await page.locator('#resubmit').count() !== 1 || await page.locator('#resubmit').isHidden()) throw new Error('Resubmit V2 control did not appear.');
  await page.locator('#resubmit').click();
  reviewRecord = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaReview') || 'null'));
  if (!reviewRecord || reviewRecord.workflowState !== 'resubmitted' || reviewRecord.rework.versions.length !== 2) throw new Error('Resubmitted state did not persist V1/V2 records.');

  await page.selectOption('#decision', 'ready-for-validation');
  await page.locator('#findingsResolved').check();
  await page.locator('#apply').click();
  reviewRecord = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaReview') || 'null'));
  if (!reviewRecord || reviewRecord.workflowState !== 'ready-for-validation') throw new Error('Ready-for-validation transition did not persist.');
  await page.locator('#validationNote').fill('Human review confirms the submitted evidence meets the defined validation gate.');
  await page.locator('#apply').click();
  reviewRecord = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaReview') || 'null'));
  if (!reviewRecord || reviewRecord.workflowState !== 'validated' || !reviewRecord.validation) throw new Error('Validated state did not persist.');
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('#content:not(.hidden)', { timeout: 3000 });
  const reloadedState = await page.locator('#state').innerText();
  const reloadedRecord = await page.evaluate(() => JSON.parse(localStorage.getItem('hacharaReview') || 'null'));
  if (!reloadedState.includes('Validated')) throw new Error('Validated state did not survive reload. UI state: '+reloadedState+'; stored state: '+(reloadedRecord?.workflowState||'missing'));

  await page.goto('http://127.0.0.1:4173/progress.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  if (await page.locator('#validatedCount').innerText() !== '1') throw new Error('Progress did not derive validated evidence from the shared review record.');
  if (await page.locator('#validatedPipeline').innerText() !== '1') throw new Error('Progress validated pipeline count is incorrect.');
  if ((await page.locator('#currentEvidence').innerText()).indexOf('B01-M02') === -1) throw new Error('Progress did not show the current module evidence.');
  if ((await page.locator('main').innerText()).includes('63') || (await page.locator('main').innerText()).includes('4 validated skills')) throw new Error('Progress retained stale hardcoded completion claims.');

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
  if (await page.locator('#detail .moduleCoverage').count() !== 1) throw new Error('Module practice/evidence coverage did not render.');
  const moduleCoverageText = await page.locator('#detail .moduleCoverage').innerText();
  if (!moduleCoverageText.includes('B01-M01')) throw new Error('B01 module coverage did not render.');
  if (!moduleCoverageText.includes('source-gap')) throw new Error('B01 source-gap state did not render.');
  const coverage = page.locator('#detail .coverage');
  if (await coverage.count() !== 1) throw new Error('Source lesson coverage did not render.');
  const lessonLink = coverage.locator('a').first();
  if (await lessonLink.count() !== 1) throw new Error('Bundle coverage did not expose an Open lesson link.');

  // Exercise the lesson link and browser Back path in the same tab.
  await lessonLink.evaluate(el => el.removeAttribute('target'));
  await lessonLink.click();
  await page.waitForLoadState('domcontentloaded');
  if (!page.url().includes('lesson-')) throw new Error('Open lesson did not navigate to the expected lesson page.');
  await page.goBack({ waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#bundles .bundle[data-id="B01"]');

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
