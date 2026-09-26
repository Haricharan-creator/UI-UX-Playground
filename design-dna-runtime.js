/* HACHARA Design DNA runtime — additive visual binding layer. */
(function(){
  'use strict';

  const KEY = 'hacharaDesignDNA';
  const DEFAULTS = {
    canvasWidth: '100%',
    canvasPad: 16,
    space: 16,
    radius: 14,
    fontSize: 16,
    lineHeight: 1.5,
    primary: '#6D5DFC',
    surface: '#FFFFFF',
    ink: '#172033',
    muted: '#667085',
    grid: 12
  };

  function readStored(){
    try { return {...DEFAULTS, ...(JSON.parse(localStorage.getItem(KEY) || '{}') || {})}; }
    catch(e){ return {...DEFAULTS}; }
  }

  function save(data){
    try { localStorage.setItem(KEY, JSON.stringify({...readStored(), ...data, updatedAt:new Date().toISOString()})); }
    catch(e){}
  }

  function firstField(keys){
    const fields = Array.from(document.querySelectorAll('input,select,textarea'));
    return fields.find(el => {
      const hay = ((el.id||'')+' '+(el.name||'')+' '+(el.getAttribute('aria-label')||'')).toLowerCase();
      return keys.some(k => hay.includes(k));
    });
  }

  function numberFromField(keys, fallback){
    const el = firstField(keys);
    const n = el ? parseFloat(el.value) : NaN;
    return Number.isFinite(n) ? n : fallback;
  }

  function valueFromField(keys, fallback){
    const el = firstField(keys);
    return el && String(el.value).trim() ? String(el.value).trim() : fallback;
  }

  function collect(){
    const old = readStored();
    return {
      ...old,
      canvasWidth: valueFromField(['canvaswidth','viewportwidth','framewidth','artboardwidth','width'], old.canvasWidth),
      canvasPad: numberFromField(['canvaspad','canvaspadding','padding'], old.canvasPad),
      space: numberFromField(['spacing','space','gutter'], old.space),
      radius: numberFromField(['radius','cornerradius'], old.radius),
      fontSize: numberFromField(['fontsize','type size','typescale'], old.fontSize),
      lineHeight: numberFromField(['lineheight','leading'], old.lineHeight),
      primary: valueFromField(['primarycolor','primary','brandcolor','accentcolor'], old.primary),
      surface: valueFromField(['surfacecolor','surface'], old.surface),
      ink: valueFromField(['textcolor','inkcolor','ink'], old.ink),
      muted: valueFromField(['mutedcolor','muted'], old.muted),
      grid: numberFromField(['grid','column'], old.grid)
    };
  }

  function apply(data){
    const root = document.documentElement;
    const vars = {
      '--dna-primary': data.primary,
      '--dna-surface': data.surface,
      '--dna-ink': data.ink,
      '--dna-muted': data.muted,
      '--dna-space': data.space+'px',
      '--dna-radius': data.radius+'px',
      '--dna-font-size': data.fontSize+'px',
      '--dna-line-height': data.lineHeight,
      '--dna-grid': data.grid+'px',
      '--canvas-pad': data.canvasPad+'px',
      '--uispace': data.space+'px',
      '--uiradius': data.radius+'px',
      '--uisurface': data.surface
    };
    Object.keys(vars).forEach(k => root.style.setProperty(k, vars[k]));

    document.querySelectorAll('.wireframeCanvas,.uiBuilderCanvas,.respViewport').forEach(el => {
      el.style.maxWidth = data.canvasWidth;
      el.style.padding = data.canvasPad+'px';
      el.style.borderRadius = data.radius+'px';
      el.style.color = data.ink;
      el.style.fontSize = data.fontSize+'px';
      el.style.lineHeight = String(data.lineHeight);
    });

    document.querySelectorAll('.wf-block,.uiComp').forEach(el => {
      el.style.marginBottom = data.space+'px';
      el.style.borderRadius = data.radius+'px';
    });

    document.querySelectorAll('.wf-button,.uiBtn').forEach(el => {
      el.style.borderRadius = data.radius+'px';
    });

    document.querySelectorAll('.uiBtn').forEach(el => {
      el.style.background = data.primary;
    });

    updateBadge(data);
  }

  function updateBadge(data){
    const strip = document.querySelector('.identity-strip');
    if(!strip) return;
    let badge = document.getElementById('hacharaDNABadge');
    if(!badge){
      badge = document.createElement('span');
      badge.id = 'hacharaDNABadge';
      badge.style.cssText = 'padding:4px 9px;border:1px solid rgba(255,255,255,.22);border-radius:999px;background:rgba(255,255,255,.08);font-size:11px;cursor:pointer;';
      badge.title = 'Design DNA is driving the wireframe/UI canvas.';
      strip.appendChild(badge);
    }
    badge.textContent = 'DNA: '+data.space+'px space · '+data.radius+'px radius';
  }

  function bind(){
    const data = collect();
    save(data);
    apply(data);
    document.querySelectorAll('input,select,textarea').forEach(el => {
      const handler = () => { const next = collect(); save(next); apply(next); };
      el.addEventListener('input', handler);
      el.addEventListener('change', handler);
    });
  }

  function boot(){
    bind();
    window.HACHARA_DNA = {
      version:'0.1.0',
      get:readStored,
      collect,
      apply,
      save
    };
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
