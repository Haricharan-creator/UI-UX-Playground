/* HACHARA Design DNA runtime — additive visual binding layer. */
(function(){
  'use strict';

  const KEY = 'hacharaDesignDNA';
  const DEFAULTS = {
    viewport: 390,
    type: 'HACHARA recommended',
    typeScale: 'Standard',
    primary: '#6D5DFC',
    surface: '#FFFFFF',
    ink: '#172033',
    muted: '#667085',
    spacing: 16,
    radius: 14,
    padding: 16,
    margin: 24,
    border: '1px',
    shadow: 'Subtle',
    grid: 8,
    responsive: 'HACHARA recommended'
  };

  function stored(){
    try { return {...DEFAULTS, ...(JSON.parse(localStorage.getItem(KEY) || '{}') || {})}; }
    catch(e){ return {...DEFAULTS}; }
  }

  function save(data){
    const next = {...stored(), ...data, updatedAt:new Date().toISOString()};
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch(e){}
    return next;
  }

  function val(id, fallback){
    const el = document.getElementById(id);
    return el && String(el.value).trim() ? String(el.value).trim() : fallback;
  }

  function selectedLabel(id, fallback){
    const el = document.getElementById(id);
    if(!el || !el.options || !el.options[el.selectedIndex]) return fallback;
    return el.options[el.selectedIndex].textContent.trim() || fallback;
  }

  function numberVal(id, fallback){
    const n = parseFloat(val(id, ''));
    return Number.isFinite(n) ? n : fallback;
  }

  function viewportValue(label, fallback){
    const m = String(label).match(/(375|390|820|1440)/);
    return m ? Number(m[1]) : fallback;
  }

  function spacingValue(label, fallback){
    const m = String(label).match(/(4|8|12|16|24|32)pt/);
    if(m) return Number(m[1]);
    return fallback;
  }

  function radiusValue(label, fallback){
    if(String(label).startsWith('0')) return 0;
    const m = String(label).match(/(8|12|16|24)px/);
    if(m) return Number(m[1]);
    return fallback;
  }

  function collect(){
    const old = stored();
    const primaryLabel = selectedLabel('dnaPrimary', 'Mobile · 390 × 844');
    const spacingLabel = selectedLabel('dnaSpacing', 'HACHARA recommended');
    const radiusLabel = selectedLabel('dnaRadius', 'HACHARA recommended');
    const colourMode = selectedLabel('dnaColourMode', 'HACHARA recommended');
    const typeLabel = selectedLabel('dnaType', 'HACHARA recommended');
    const typeScale = selectedLabel('dnaTypeScale', 'Standard');
    const gridLabel = selectedLabel('dnaGrid', 'HACHARA responsive');
    const responsiveLabel = selectedLabel('dnaResponsive', 'HACHARA recommended');

    let primary = old.primary;
    if(colourMode.includes('Professional')) primary = '#2563EB';
    if(colourMode.includes('Creative')) primary = '#D946EF';
    if(colourMode.includes('Minimal')) primary = '#475569';
    if(colourMode.includes('Accessible')) primary = '#0F766E';

    return {
      ...old,
      viewport: viewportValue(primaryLabel, old.viewport),
      type: typeLabel,
      typeScale,
      primary,
      spacing: spacingValue(spacingLabel, old.spacing),
      radius: radiusValue(radiusLabel, old.radius),
      padding: numberVal('dnaPadding', old.padding),
      margin: numberVal('dnaMargin', old.margin),
      border: val('dnaBorder', old.border),
      shadow: selectedLabel('dnaShadow', old.shadow),
      grid: gridLabel.includes('4 / 8 / 12') ? 8 : (gridLabel.includes('Fluid') ? 0 : old.grid),
      responsive: responsiveLabel
    };
  }

  function fontFamily(type){
    const t = String(type).toLowerCase();
    if(t.includes('brand') || t.includes('custom')) return 'inherit';
    if(t.includes('serif')) return 'Georgia,serif';
    if(t.includes('inter')) return 'Inter,ui-sans-serif,system-ui,sans-serif';
    return 'Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';
  }

  function shadowValue(label){
    const t = String(label).toLowerCase();
    if(t.includes('none')) return 'none';
    if(t.includes('medium')) return '0 12px 30px rgba(30,38,70,.12)';
    return '0 8px 24px rgba(30,38,70,.07)';
  }

  function apply(data){
    const root = document.documentElement;
    const vars = {
      '--dna-primary': data.primary,
      '--dna-surface': data.surface,
      '--dna-ink': data.ink,
      '--dna-muted': data.muted,
      '--dna-space': data.spacing+'px',
      '--dna-radius': data.radius+'px',
      '--dna-padding': data.padding+'px',
      '--dna-margin': data.margin+'px',
      '--dna-grid': data.grid+'px',
      '--canvas-pad': data.padding+'px',
      '--uispace': data.spacing+'px',
      '--uiradius': data.radius+'px',
      '--uisurface': data.surface,
      '--dna-font-family': fontFamily(data.type)
    };
    Object.keys(vars).forEach(k => root.style.setProperty(k, vars[k]));

    document.body.style.fontFamily = fontFamily(data.type);
    document.body.style.color = data.ink;

    document.querySelectorAll('.wireframeCanvas,.uiBuilderCanvas,.respViewport').forEach(el => {
      el.style.width = Math.min(Number(data.viewport) || 390, 1440)+'px';
      el.style.maxWidth = '100%';
      el.style.padding = data.padding+'px';
      el.style.borderRadius = data.radius+'px';
      el.style.color = data.ink;
      el.style.background = data.surface;
      el.style.boxShadow = shadowValue(data.shadow);
    });

    document.querySelectorAll('.wf-block,.uiComp').forEach(el => {
      el.style.marginBottom = data.spacing+'px';
      el.style.borderRadius = data.radius+'px';
      el.style.padding = data.padding+'px';
    });

    document.querySelectorAll('.wf-button,.uiBtn').forEach(el => {
      el.style.borderRadius = data.radius+'px';
    });

    document.querySelectorAll('.uiBtn').forEach(el => {
      el.style.background = data.primary;
    });

    updateSummary(data);
    updateBadge(data);
  }

  function updateSummary(data){
    const el = document.getElementById('dnaSummary');
    if(!el) return;
    const items = [
      ['Viewport', data.viewport+'px'],
      ['Typography', data.type],
      ['Scale', data.typeScale],
      ['Primary', data.primary],
      ['Spacing', data.spacing+'px'],
      ['Radius', data.radius+'px'],
      ['Padding', data.padding+'px'],
      ['Section gap', data.margin+'px'],
      ['Responsive', data.responsive]
    ];
    el.innerHTML = items.map(([k,v]) => '<div class="mini"><b>'+escapeText(k)+'</b><div class="muted">'+escapeText(v)+'</div></div>').join('');
  }

  function escapeText(s){
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
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
      badge.addEventListener('click', () => {
        const dna = document.getElementById('dna');
        if(dna && typeof window.go === 'function') window.go('dna');
      });
    }
    badge.textContent = 'DNA: '+data.viewport+'px · '+data.spacing+'px · '+data.radius+'px';
  }

  function bind(){
    const data = collect();
    save(data);
    apply(data);

    ['dnaPrimary','dnaType','dnaTypeScale','dnaColourMode','dnaSpacing','dnaGrid','dnaRadius','dnaResponsive','dnaPadding','dnaMargin','dnaBorder','dnaShadow']
      .forEach(id => {
        const el = document.getElementById(id);
        if(!el || el.dataset.hacharaDnaBound) return;
        el.dataset.hacharaDnaBound = '1';
        const handler = () => { const next = collect(); save(next); apply(next); };
        el.addEventListener('input', handler);
        el.addEventListener('change', handler);
      });
  }

  function boot(){
    bind();
    window.HACHARA_DNA = {
      version:'0.2.0',
      key:KEY,
      get:stored,
      collect,
      apply,
      save,
      refresh:bind
    };
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
