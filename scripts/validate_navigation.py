#!/usr/bin/env python3
"""Validate the Academy -> Studio -> Review -> Progress navigation contract."""
from pathlib import Path
import json, re, sys
ROOT=Path(__file__).resolve().parents[1]
errors=[]
try:
    contract=json.loads((ROOT/'data/navigation-contract.json').read_text(encoding='utf-8'))
except Exception as e:
    print('Navigation contract error:',e); sys.exit(1)
expected={'academy':'bundle-dashboard.html','studio':'studio.html','review':'review.html','progress':'progress.html'}
for item in contract.get('surfaces',[]):
    sid=item.get('id'); entry=item.get('entry')
    if sid in expected and entry != expected[sid]: errors.append(f'{sid}: expected {expected[sid]}, found {entry}')
    if entry and not (ROOT/entry).exists(): errors.append(f'{sid}: missing entry {entry}')
flow=contract.get('flow',[])
if flow != ['academy','studio','review','progress']: errors.append(f'Unexpected flow: {flow}')
for sid,entry in expected.items():
    p=ROOT/entry
    if not p.exists(): continue
    text=p.read_text(encoding='utf-8',errors='ignore')
    for target in expected.values():
        if target in text and not (ROOT/target).exists(): errors.append(f'{entry}: references missing {target}')
print('HACHARA Navigation Validation')
print(f'Errors: {len(errors)}')
for e in errors: print('ERROR:',e)
sys.exit(1 if errors else 0)
