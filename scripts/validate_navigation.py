#!/usr/bin/env python3
"""Validate the Academy -> Studio -> Review -> Progress navigation contract."""
from pathlib import Path
import json, sys

ROOT=Path(__file__).resolve().parents[1]
errors=[]

try:
    contract=json.loads((ROOT/'data/navigation-contract.json').read_text(encoding='utf-8'))
except Exception as e:
    print('Navigation contract error:',e)
    sys.exit(1)

expected={
    'academy':'bundle-dashboard.html',
    'studio':'studio.html',
    'review':'review.html',
    'progress':'progress.html',
}

entries=contract.get('primaryNavigation',[])
if not isinstance(entries,list):
    errors.append('primaryNavigation is missing or is not a list.')
    entries=[]

by_id={item.get('id'):item for item in entries if isinstance(item,dict)}
for sid, expected_entry in expected.items():
    item=by_id.get(sid)
    if not item:
        errors.append(f'{sid}: missing from primaryNavigation')
        continue
    actual=item.get('path')
    if actual != expected_entry:
        errors.append(f'{sid}: expected {expected_entry}, found {actual}')
    if actual and not (ROOT/actual).exists():
        errors.append(f'{sid}: missing entry {actual}')

nav_flow=[item.get('id') for item in entries if isinstance(item,dict)]
if nav_flow != ['academy','studio','review','progress']:
    errors.append(f'Unexpected navigation order: {nav_flow}')

try:
    integration=json.loads((ROOT/'data/integration-manifest.json').read_text(encoding='utf-8'))
    flow=integration.get('flow',[])
    if flow != ['academy','studio','review','progress']:
        errors.append(f'Unexpected integration flow: {flow}')
except Exception as e:
    errors.append(f'Integration manifest error: {e}')

for sid,entry in expected.items():
    p=ROOT/entry
    if not p.exists():
        continue
    text=p.read_text(encoding='utf-8',errors='ignore')
    for target in expected.values():
        if target in text and not (ROOT/target).exists():
            errors.append(f'{entry}: references missing {target}')

print('HACHARA Navigation Validation')
print(f'Errors: {len(errors)}')
for e in errors:
    print('ERROR:',e)
sys.exit(1 if errors else 0)
