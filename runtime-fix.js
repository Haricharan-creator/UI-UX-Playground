/* HACHARA runtime continuity layer — additive; preserves the baseline application. */
(function(){
  window.extra_topics = Array.isArray(window.extra_topics) ? window.extra_topics : [];

  const KEY = 'uiuxPlaygroundUnifiedUXContext';
  const FIELD_IDS = ['uxcProject','uxcScreen','uxcPhase','uxcVersion','uxcGoal','uxcUsers'];

  function storedContext(){
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; }
    catch(e) { return {}; }
  }
  function readContext(){
    const out = {...storedContext()};
    FIELD_IDS.forEach(id => { const el=document.getElementById(id); if(el) out[id]=el.value||''; });
    return out;
  }
  function writeContext(){
    const c=readContext();
    if(c.project||c.uxcProject){
      localStorage.setItem(KEY,JSON.stringify({...c,updatedAt:new Date().toISOString()}));
      localStorage.setItem('uiuxPlaygroundCurrentScreenContext',JSON.stringify(c));
    }
    updateContextBadge();
  }
  function restoreContext(){
    const c=storedContext();
    const map={uxcProject:c.project||c.uxcProject,uxcScreen:c.screen||c.uxcScreen,uxcPhase:c.phase||c.uxcPhase,uxcVersion:c.version||c.uxcVersion,uxcGoal:c.goal||c.uxcGoal,uxcUsers:c.users||c.uxcUsers};
    FIELD_IDS.forEach(id=>{const el=document.getElementById(id);if(el&&map[id]&&!el.value)el.value=map[id]});
    updateContextBadge();
  }
  function updateContextBadge(){
    const strip=document.querySelector('.identity-strip'); if(!strip)return;
    let badge=document.getElementById('hacharaContextBadge');
    if(!badge){badge=document.createElement('span');badge.id='hacharaContextBadge';badge.style.cssText='margin-left:auto;padding:4px 9px;border:1px solid rgba(255,255,255,.22);border-radius:999px;background:rgba(255,255,255,.08);font-size:11px;cursor:pointer;';badge.title='Saved Unified UX Context. Click to open it.';strip.appendChild(badge);badge.addEventListener('click',function(){const section=document.getElementById('unified_ux_context');if(section){document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));section.classList.remove('hidden');section.scrollIntoView({behavior:'smooth',block:'start'})}})}
    const c=storedContext(),project=String(c.project||c.uxcProject||'').trim(),screen=String(c.screen||c.uxcScreen||'').trim();
    badge.textContent=project?`Context: ${project}${screen?' · '+screen:''}`:'Context: not set';
  }
  function boot(){restoreContext();FIELD_IDS.forEach(id=>{const el=document.getElementById(id);if(el){el.addEventListener('input',writeContext);el.addEventListener('change',writeContext)}});updateContextBadge()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
  window.HACHARA_CONTEXT={version:'0.3.0',key:KEY,get:storedContext,save:writeContext,restore:restoreContext,clear:function(){localStorage.removeItem(KEY);localStorage.removeItem('uiuxPlaygroundCurrentScreenContext');updateContextBadge()}};
  window.HACHARA_RUNTIME={version:'0.4.0',bootstrap:'safe',continuity:'enabled',unifiedContext:'connected'};
  function loadScript(src,attr){if(document.querySelector(`script[${attr}]`))return;const s=document.createElement('script');s.src=src;s.async=true;s.setAttribute(attr,'1');document.head.appendChild(s)}
  loadScript('design-review-flow-runtime.js','data-hachara-review-flow');
  loadScript('project-workspace-runtime.js','data-hachara-workspace');
})();
