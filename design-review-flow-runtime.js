/* HACHARA Design Review Flow runtime — additive, local-first, preserves existing review data. */
(function(){
  'use strict';

  const KEY = 'hacharaDesignReviewFlow';
  const IMG_MAX = 1200;

  function read(){
    try { return JSON.parse(localStorage.getItem(KEY) || '[]') || []; }
    catch(e){ return []; }
  }
  function write(items){
    try { localStorage.setItem(KEY, JSON.stringify(items)); }
    catch(e){ console.warn('HACHARA review flow storage limit reached', e); }
  }
  function uid(prefix){ return prefix + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,7); }
  function esc(v){ return String(v == null ? '' : v).replace(/[&<>\"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c])); }
  function get(id){ const el=document.getElementById(id); return el ? el.value : ''; }
  function set(id,v){ const el=document.getElementById(id); if(el) el.value=v == null ? '' : v; }

  function currentScreen(){
    return {
      screen:get('screenName'), task:get('screenTask'), observation:get('screenObs'),
      impact:get('screenImpact'), principle:get('screenPrinciple'),
      recommendation:get('screenChange'), testPlan:get('screenTest')
    };
  }

  function selectedFinding(){
    const items=read();
    const id=get('drfFindingSelect');
    return items.find(x=>x.id===id) || items[0] || null;
  }

  function render(){
    const host=document.getElementById('drfRoot');
    if(!host) return;
    const items=read();
    const selected=selectedFinding();
    const findings=items.filter(x=>x.type==='finding');
    const corrections=items.filter(x=>x.type==='correction');
    const tests=items.filter(x=>x.type==='test');
    const before=selected && selected.beforeImage;
    const after=selected && selected.afterImage;

    host.innerHTML = `
      <div class="card drf-card">
        <div class="drf-head"><div><span class="badge">TRACEABLE REVIEW LOOP</span><h2>Finding → Correction → Before / After → Test</h2><p class="muted">Keep the observation, change, visual evidence and validation connected. Existing HACHARA review records remain untouched.</p></div><div class="drf-kpis"><span><b>${findings.length}</b> findings</span><span><b>${corrections.length}</b> corrections</span><span><b>${tests.length}</b> tests</span></div></div>

        <div class="drf-stage">
          <div class="drf-step active"><b>1 · Finding</b><small>What did we observe?</small></div>
          <div class="drf-step"><b>2 · Correction</b><small>What will change?</small></div>
          <div class="drf-step"><b>3 · Before / After</b><small>What changed visually?</small></div>
          <div class="drf-step"><b>4 · Test</b><small>Did it improve the task?</small></div>
        </div>

        <div class="drf-grid">
          <div class="drf-panel">
            <h3>1. Capture finding</h3>
            <p class="muted">The fields below start from the existing Screen Review so you do not re-enter the same information.</p>
            <label>Screen</label><input id="drfScreen" value="${esc(selected ? selected.screen : currentScreen().screen)}" placeholder="Screen / flow name">
            <label>Observation</label><textarea id="drfObservation" placeholder="Visible evidence, without judging it.">${esc(selected ? selected.observation : currentScreen().observation)}</textarea>
            <label>Impact / risk to investigate</label><textarea id="drfImpact" placeholder="How could this affect the user's task?">${esc(selected ? selected.impact : currentScreen().impact)}</textarea>
            <label>Principle / basis</label><input id="drfBasis" value="${esc(selected ? selected.principle : currentScreen().principle)}" placeholder="Heuristic, accessibility rule, design-system rule, research evidence..."><div class="toolbar"><button class="btn primary" id="drfAddFinding">Save finding</button></div>
          </div>

          <div class="drf-panel">
            <h3>2. Define correction</h3>
            <label>Finding to correct</label><select id="drfFindingSelect">${findings.length ? findings.map(x=>`<option value="${esc(x.id)}" ${selected&&selected.id===x.id?'selected':''}>${esc(x.screen||'Untitled')} — ${esc((x.observation||'').slice(0,55))}</option>`).join('') : '<option value="">Create a finding first</option>'}</select>
            <label>Proposed correction</label><textarea id="drfCorrection" placeholder="Describe the smallest design change and why it addresses the finding.">${esc(selected && selected.correction || '')}</textarea>
            <label>Decision / status</label><select id="drfCorrectionStatus"><option>Proposed</option><option>Implemented</option><option>Needs review</option><option>Rejected — evidence did not support the change</option></select>
            <div class="toolbar"><button class="btn primary" id="drfSaveCorrection" ${selected?'':'disabled'}>Save correction</button></div>
          </div>
        </div>

        <div class="drf-grid">
          <div class="drf-panel">
            <h3>3. Before / After evidence</h3>
            <label>Before image</label><input id="drfBefore" type="file" accept="image/*">
            <label>After image</label><input id="drfAfter" type="file" accept="image/*">
            <div id="drfCompare" class="drf-compare">${before||after ? `<div><small>Before</small>${before?`<img src="${before}" alt="Before design">`:'<div class="drf-empty">No before image</div>'}</div><div><small>After</small>${after?`<img src="${after}" alt="After design">`:'<div class="drf-empty">No after image</div>'}</div>` : '<div class="drf-empty">Upload both images to create a comparison record.</div>'}</div>
            <div class="toolbar"><button class="btn primary" id="drfSaveEvidence" ${selected?'':'disabled'}>Save before / after</button></div>
          </div>

          <div class="drf-panel">
            <h3>4. Test the change</h3>
            <label>Validation question</label><textarea id="drfTestQuestion" placeholder="What are we trying to learn from the test?">${esc(selected && selected.testQuestion || currentScreen().testPlan)}</textarea>
            <label>Method / evidence</label><input id="drfTestMethod" placeholder="Usability task, heuristic check, accessibility check, analytics, stakeholder review...">
            <label>Result</label><textarea id="drfTestResult" placeholder="What happened? Record evidence, not just a conclusion."></textarea>
            <label>Decision</label><select id="drfTestDecision"><option>Keep the correction</option><option>Iterate again</option><option>Revert / investigate</option><option>Insufficient evidence — test again</option></select>
            <div class="toolbar"><button class="btn primary" id="drfSaveTest" ${selected?'':'disabled'}>Save test result</button></div>
          </div>
        </div>

        <div class="drf-panel"><h3>Trace history</h3><div id="drfHistory">${renderHistory(items)}</div></div>
      </div>`;

    bind();
  }

  function renderHistory(items){
    if(!items.length) return '<p class="muted">No review-flow records yet. Start with a finding.</p>';
    return `<div class="tableWrap"><table class="table"><tr><th>Stage</th><th>Screen / finding</th><th>Status</th><th>Updated</th></tr>${items.slice(0,30).map(x=>`<tr><td><span class="badge">${esc(x.type)}</span></td><td>${esc(x.screen||x.findingId||'—')}<br><small class="muted">${esc((x.observation||x.correction||x.result||'').slice(0,100))}</small></td><td>${esc(x.status||x.decision||'Recorded')}</td><td>${esc(x.time||'')}</td></tr>`).join('')}</table></div>`;
  }

  function bind(){
    const add=document.getElementById('drfAddFinding');
    if(add) add.onclick=()=>{
      const observation=get('drfObservation').trim();
      if(!observation){ alert('Add the observable evidence first.'); return; }
      const s=currentScreen();
      const item={id:uid('finding'),type:'finding',screen:get('drfScreen').trim()||s.screen||'Untitled screen',task:s.task,observation,impact:get('drfImpact').trim(),principle:get('drfBasis').trim()||s.principle,recommendation:s.recommendation,testPlan:s.testPlan,time:new Date().toLocaleString()};
      const items=read(); items.unshift(item); write(items); render();
    };
    const select=document.getElementById('drfFindingSelect');
    if(select) select.onchange=render;
    const saveCorrection=document.getElementById('drfSaveCorrection');
    if(saveCorrection) saveCorrection.onclick=()=>{
      const finding=selectedFinding(); if(!finding)return;
      const items=read();
      const correction=get('drfCorrection').trim();
      if(!correction){alert('Describe the correction first.');return;}
      const i=items.findIndex(x=>x.id===finding.id);
      if(i>=0){items[i]={...items[i],correction,status:get('drfCorrectionStatus'),correctionUpdatedAt:new Date().toLocaleString()};items.unshift({id:uid('correction'),type:'correction',findingId:finding.id,screen:finding.screen,correction,status:get('drfCorrectionStatus'),time:new Date().toLocaleString()});write(items);render();}
    };
    const saveEvidence=document.getElementById('drfSaveEvidence');
    if(saveEvidence) saveEvidence.onclick=async()=>{
      const finding=selectedFinding(); if(!finding)return;
      const beforeFile=document.getElementById('drfBefore').files[0];
      const afterFile=document.getElementById('drfAfter').files[0];
      if(!beforeFile && !afterFile){alert('Choose a before or after image first.');return;}
      try{
        const before=beforeFile?await imageData(beforeFile):finding.beforeImage||'';
        const after=afterFile?await imageData(afterFile):finding.afterImage||'';
        const items=read(); const i=items.findIndex(x=>x.id===finding.id);
        if(i>=0){items[i]={...items[i],beforeImage:before,afterImage:after,evidenceUpdatedAt:new Date().toLocaleString()};items.unshift({id:uid('evidence'),type:'before-after',findingId:finding.id,screen:finding.screen,status:'Captured',time:new Date().toLocaleString()});write(items);render();}
      }catch(e){alert('The image could not be processed. Please try a smaller image.');}
    };
    const saveTest=document.getElementById('drfSaveTest');
    if(saveTest) saveTest.onclick=()=>{
      const finding=selectedFinding(); if(!finding)return;
      const result=get('drfTestResult').trim(); if(!result){alert('Record the observed test result first.');return;}
      const items=read();
      items.unshift({id:uid('test'),type:'test',findingId:finding.id,screen:finding.screen,testQuestion:get('drfTestQuestion').trim(),method:get('drfTestMethod').trim(),result,decision:get('drfTestDecision'),status:'Recorded',time:new Date().toLocaleString()});
      write(items); render();
    };
  }

  function imageData(file){
    return new Promise((resolve,reject)=>{
      const img=new Image(); const reader=new FileReader();
      reader.onerror=reject; reader.onload=()=>{img.onload=()=>{const scale=Math.min(1,IMG_MAX/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));const ctx=c.getContext('2d');ctx.drawImage(img,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',.78));};img.onerror=reject;img.src=reader.result;}; reader.readAsDataURL(file);
    });
  }

  function mount(){
    const section=document.getElementById('screenreview');
    if(!section || document.getElementById('drfRoot')) return;
    const root=document.createElement('div'); root.id='drfRoot'; root.className='section';
    section.appendChild(root);
    const style=document.createElement('style');
    style.textContent=`
      .drf-card{border:1px solid var(--line)}.drf-head{display:flex;justify-content:space-between;gap:18px;align-items:flex-start}.drf-kpis{display:flex;gap:8px;flex-wrap:wrap}.drf-kpis span{padding:9px 11px;border:1px solid var(--line);border-radius:12px;background:#F8FAFC;font-size:12px}.drf-kpis b{font-size:18px;display:block}.drf-stage{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:18px 0}.drf-step{padding:12px;border:1px solid var(--line);border-radius:12px;background:#F8FAFC}.drf-step.active{background:#EEF2FF;border-color:#6D5DFC}.drf-step small{display:block;color:var(--muted);margin-top:4px}.drf-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}.drf-panel{padding:16px;border:1px solid var(--line);border-radius:16px;background:#fff}.drf-panel h3{margin-bottom:8px}.drf-compare{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.drf-compare>div{min-height:180px;padding:8px;border:1px dashed #CBD5E1;border-radius:12px;background:#F8FAFC}.drf-compare small{display:block;font-weight:800;margin-bottom:6px}.drf-compare img{width:100%;max-height:360px;object-fit:contain;border-radius:8px;background:#fff}.drf-empty{min-height:160px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:12px;text-align:center}.tableWrap{overflow:auto}@media(max-width:800px){.drf-head,.drf-grid{grid-template-columns:1fr;display:grid}.drf-stage{grid-template-columns:1fr 1fr}.drf-compare{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
    render();
  }

  function boot(){
    if(document.getElementById('screenreview')) mount();
    else document.addEventListener('DOMContentLoaded', mount, {once:true});
  }

  window.HACHARA_REVIEW_FLOW={version:'0.1.0',key:KEY,read,render,mount};
  boot();
})();
