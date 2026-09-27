#!/usr/bin/env python3
"""Check core HACHARA data contracts for duplicate identifiers and broken cross-references."""
from pathlib import Path
import json, sys
ROOT=Path(__file__).resolve().parents[1]
DATA=ROOT/'data'
errors=[]

def load(name):
    try:return json.loads((DATA/name).read_text(encoding='utf-8'))
    except Exception as e:
        errors.append(f'{name}: {e}'); return {}

skill=load('skill-taxonomy.json')
skills=skill.get('skills',[])
skill_ids=[x.get('id') for x in skills]
if len(skill_ids)!=len(set(skill_ids)): errors.append('Duplicate skill IDs detected')
known=set(skill_ids)
challenge=load('challenge-schema.json')
# Schema itself contains no instances; this check protects the taxonomy vocabulary if challenge fixtures are later added.
for fixture_name in ('challenge-fixtures.json','evidence-fixtures.json'):
    p=DATA/fixture_name
    if p.exists():
        try:
            items=json.loads(p.read_text(encoding='utf-8'))
            if isinstance(items,dict): items=items.get('items',[])
            for item in items:
                for sid in item.get('skillIds',item.get('skills',[])):
                    if sid not in known: errors.append(f'{fixture_name}: unknown skill ID {sid}')
        except Exception as e: errors.append(f'{fixture_name}: {e}')

workflow=load('workflow-state-machine.json')
states=set(workflow.get('states',[]))
for src,dests in workflow.get('transitions',{}).items():
    if src not in states: errors.append(f'Unknown source state: {src}')
    for dst in dests:
        if dst not in states: errors.append(f'Unknown destination state: {dst}')

print('HACHARA Identifier Validation')
print(f'Errors: {len(errors)}')
for e in errors: print('ERROR:',e)
sys.exit(1 if errors else 0)
