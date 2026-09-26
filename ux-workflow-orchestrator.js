/* HACHARA UX Workflow Orchestrator — additive guidance layer over existing modules. */
(function(){
  'use strict';
  const CTX='uiuxPlaygroundUnifiedUXContext', REVIEW='hacharaDesignReviewFlow', DNA='hacharaDesignDNA';
  const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k)||'null')||f}catch(e){return f}};
  const esc=v=>String(v==null?'':v).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));
  const context=()=>read(CTX,{}), records=()=>Array.isArray(read(REVIEW,[]))?read(REVIEW,[]):[], dna=()=>read(DNA,{});
  function state(){
    const c=context(),r=records(),d=dna();
    const hasProject=!!String(c.project||c.uxcProject||'').trim(),hasScreen=!!String(c.screen||c.uxcScreen||'').trim();
    const findings=r.filter(x=>x.type==='finding'),corrections=r.filter(x=>x.type==='correction'),evidence=r.filter(x=>x.type==='before-after'),tests=r.filter(x=>x.type==='test');
    let next='context';
    if(hasProject&&hasScreen)next='dna';
    if(next==='dna'&&d&&(d.viewport||d.spacing||d.radius))next='review';
    if(next==='review'&&findings.length)next='correction';
    if(next==='correction'&&corrections.length)next='evidence';
    if(next==='evidence'&&evidence.length)next='test';
    if(next==='test'&&tests.length)next='iterate';
    return {next,hasProject,hasScreen,findings,corrections,evidence,tests};
  }
  const steps=[
    ['context','1','Set Project Context','unified_ux_context','Define project, screen, phase, version, goal and users.'],
    ['dna','2','Set Design DNA','dna','Set viewport, typography, spacing, radius and responsive rules.'],
    ['review','3','Run Screen Review','screenreview','Capture observable UX findings and supporting evidence.'],
    ['correction','4','Define Correction','screenreview','Convert a finding into a proposed, reviewable design change.'],
    ['evidence','5','Capture Before / After','screenreview','Record visual evidence of the implemented change.'],
    ['test','6','Test the Change','screenreview','Record method, observed result and decision.'],
    ['iterate','7','Iterate / Close Loop','screenreview','Use the test evidence to keep, iterate or investigate the correction.']
  ];
  function section(id){const el=document.getElementById(id);if(!el)return null;document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));el.classList.remove('hidden');el.scrollIntoView({behavior:'smooth',block:'start'});return el;}
  function open(){style();let o=document.getElementById('hwoOverlay');if(!o){o=document.createElement('div');o.id='hwoOverlay';o.innerHTML='<div class="hwo"><div class="hwoHead"><div><span class="badge">HACHARA WORKFLOW</span><h2>UX Workflow Orchestrator</h2><p class="muted">A guided path through the existing HACHARA modules. It recommends the next step; it does not make the important UX decision for you.</p></div><button id="hwoClose" class="btn">Close</button></div><div id="hwoBody"></div></div>';document.body.appendChild(o);o.addEventListener('click',e=>{if(e.target===o)close()});document.getElementById('hwoClose').onclick=close;}refresh();}
  function refresh(){
    const body=document.getElementById('hwoBody');if(!body)return;const s=state(),current=steps.find(x=>x[0]===s.next)||steps[0];
    const complete=s.tests.length>0;
    body.innerHTML=`<div class="hwoNext"><div><div class="hwoLabel">${complete?'Workflow loop has recorded a test':'Recommended next workspace action'}</div><h3>${esc(complete?'Review the test evidence and decide whether to iterate':current[2])}</h3><p>${esc(complete?'The next decision remains with the designer. HACHARA will not auto-approve the change.':current[4])}</p></div><button id="hwoGo" class="btn primary">${complete?'Open review':'Open step'}</button></div><div class="hwoSteps">${steps.map(x=>{const done=(x[0]==='context'&&s.hasProject&&s.hasScreen)||(x[0]==='dna'&&s.next!=='dna'&&s.next!=='context')||(x[0]==='review'&&s.findings.length)||(x[0]==='correction'&&s.corrections.length)||(x[0]==='evidence'&&s.evidence.length)||(x[0]==='test'&&s.tests.length)||(x[0]==='iterate'&&s.tests.length);return `<div class="hwoStep ${x[0]===s.next?'current':''} ${done?'done':''}"><span>${x[1]}</span><div><b>${esc(x[2])}</b><small>${esc(done?'Recorded / completed in local trace':x[4])}</small></div></div>`}).join('')}</div><div class="hwoStats"><span>Findings <b>${s.findings.length}</b></span><span>Corrections <b>${s.corrections.length}</b></span><span>Evidence <b>${s.evidence.length}</b></span><span>Tests <b>${s.tests.length}</b></span></div>`;
    document.getElementById('hwoGo').onclick=()=>{section('screenreview');close()};
  }
  function close(){const o=document.getElementById('hwoOverlay');if(o)o.remove();}
  function inject(){const strip=document.querySelector('.identity-strip');if(!strip||document.getElementById('hwoButton'))return;const b=document.createElement('button');b.id='hwoButton';b.textContent='Workflow';b.title='Open HACHARA UX Workflow Orchestrator';b.style.cssText='margin-left:8px;padding:4px 9px;border:1px solid rgba(255,255,255,.22);border-radius:999px;background:rgba(255,255,255,.08);color:inherit;font-size:11px;cursor:pointer';b.onclick=open;strip.appendChild(b);}
  function style(){if(document.getElementById('hwoStyle'))return;const s=document.createElement('style');s.id='hwoStyle';s.textContent=`#hwoOverlay{position:fixed;inset:0;background:rgba(15,20,38,.48);backdrop-filter:blur(3px);z-index:100000;display:flex;align-items:flex-start;justify-content:center;padding:5vh 18px;overflow:auto}.hwo{width:min(980px,96vw);background:#fff;border:1px solid #e6e8ef;border-radius:24px;box-shadow:0 30px 80px rgba(0,0,0,.22);padding:24px;color:#172033}.hwoHead{display:flex;justify-content:space-between;gap:18px}.hwoNext{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:18px;margin-top:16px;border:1px solid #dfe3f0;border-radius:16px;background:#f8f9ff}.hwoLabel{font-size:11px;text-transform:uppercase;letter-spacing:.05em;font-weight:900;color:#5748dd}.hwoNext h3{margin:5px 0}.hwoSteps{display:grid;gap:8px;margin-top:14px}.hwoStep{display:grid;grid-template-columns:34px 1fr;gap:10px;align-items:start;padding:11px;border:1px solid #e6e8ef;border-radius:12px}.hwoStep>span{width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#f1f3f7;font-weight:900}.hwoStep.current{border-color:#6d5dfc;background:#f6f4ff}.hwoStep.done>span{background:#e8f5ed}.hwoStep small{display:block;color:#667085;margin-top:3px}.hwoStats{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}.hwoStats span{padding:7px 10px;border:1px solid #e6e8ef;border-radius:999px;font-size:11px}.hwoStats b{font-size:14px}@media(max-width:700px){.hwoNext{display:grid}}`;
    document.head.appendChild(s)
  }
  function boot(){inject();window.HACHARA_WORKFLOW={version:'0.2.0',state,open,close,refresh};}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
