/* HACHARA runtime continuity layer — additive; preserves the baseline application. */
(function(){
  window.extra_topics = Array.isArray(window.extra_topics) ? window.extra_topics : [];

  const KEY = 'hacharaProjectContext';
  const FIELD_IDS = ['uxcProject','uxcScreen','uxcPhase','uxcVersion','uxcGoal','uxcUsers'];

  function readContext(){
    const out = {};
    FIELD_IDS.forEach(id => {
      const el = document.getElementById(id);
      if(el) out[id] = el.value || '';
    });
    return out;
  }

  function storedContext(){
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; }
    catch(e) { return {}; }
  }

  function writeContext(){
    const ctx = readContext();
    if(Object.values(ctx).some(v => String(v).trim())){
      localStorage.setItem(KEY, JSON.stringify({...storedContext(), ...ctx, updatedAt:new Date().toISOString()}));
    }
    updateContextBadge();
  }

  function restoreContext(){
    const ctx = storedContext();
    FIELD_IDS.forEach(id => {
      const el = document.getElementById(id);
      if(el && ctx[id] && !el.value) el.value = ctx[id];
    });
    updateContextBadge();
  }

  function updateContextBadge(){
    const strip = document.querySelector('.identity-strip');
    if(!strip) return;
    let badge = document.getElementById('hacharaContextBadge');
    if(!badge){
      badge = document.createElement('span');
      badge.id = 'hacharaContextBadge';
      badge.style.cssText = 'margin-left:auto;padding:4px 9px;border:1px solid rgba(255,255,255,.22);border-radius:999px;background:rgba(255,255,255,.08);font-size:11px;cursor:pointer;';
      badge.title = 'Saved project context. Click to open Unified UX Context.';
      strip.appendChild(badge);
      badge.addEventListener('click', function(){
        const section = document.getElementById('unified_ux_context');
        if(section){
          document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
          section.classList.remove('hidden');
          section.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    }
    const ctx = storedContext();
    const project = (ctx.uxcProject || '').trim();
    const phase = (ctx.uxcPhase || '').trim();
    badge.textContent = project ? `Context: ${project}${phase ? ' · '+phase : ''}` : 'Context: not set';
  }

  function boot(){
    restoreContext();
    FIELD_IDS.forEach(id => {
      const el = document.getElementById(id);
      if(el) el.addEventListener('input', writeContext);
      if(el) el.addEventListener('change', writeContext);
    });
    updateContextBadge();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();

  window.HACHARA_CONTEXT = {
    version: '0.2.0',
    key: KEY,
    get: storedContext,
    save: writeContext,
    restore: restoreContext,
    clear: function(){ localStorage.removeItem(KEY); updateContextBadge(); }
  };

  window.HACHARA_RUNTIME = {
    version: '0.2.0',
    bootstrap: 'safe',
    continuity: 'enabled'
  };

  function loadReviewFlow(){
    if(document.querySelector('script[data-hachara-review-flow]')) return;
    const s=document.createElement('script');
    s.src='design-review-flow-runtime.js';
    s.async=true;
    s.dataset.hacharaReviewFlow='1';
    document.head.appendChild(s);
  }
  loadReviewFlow();
})();
