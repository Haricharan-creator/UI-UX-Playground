#!/usr/bin/env python3
"""Run lightweight structural checks on learner-facing HTML pages."""
from pathlib import Path
import re, sys
ROOT=Path(__file__).resolve().parents[1]
PAGES=['bundle-dashboard.html','studio.html','review.html','progress.html']
errors=[]
for name in PAGES:
    p=ROOT/name
    if not p.exists():
        errors.append(f'Missing page: {name}'); continue
    t=p.read_text(encoding='utf-8',errors='ignore').lower()
    checks=[('<!doctype html>' in t,'missing doctype'),('<html' in t,'missing html element'),('<head' in t,'missing head'),('<meta charset=' in t,'missing charset'),('<meta name="viewport"' in t,'missing viewport'),('<body' in t,'missing body'),('</html>' in t,'missing closing html')]
    for ok,msg in checks:
        if not ok: errors.append(f'{name}: {msg}')
    if t.count('<script') != t.count('</script>'): errors.append(f'{name}: unbalanced script tags')
    if t.count('<style') != t.count('</style>'): errors.append(f'{name}: unbalanced style tags')
    ids=re.findall(r'\bid=["\']([^"\']+)',t)
    if len(ids)!=len(set(ids)): errors.append(f'{name}: duplicate DOM ids')
print('HACHARA HTML Structure Validation')
print(f'Errors: {len(errors)}')
for e in errors: print('ERROR:',e)
sys.exit(1 if errors else 0)
