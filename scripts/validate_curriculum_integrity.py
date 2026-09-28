#!/usr/bin/env python3
"""Protect the authoritative 117-lesson curriculum reconciliation contract."""
from pathlib import Path
import json, sys
ROOT=Path(__file__).resolve().parents[1]
p=ROOT/'data/curriculum-source-reconciliation.json'
errors=[]
try:
    c=json.loads(p.read_text(encoding='utf-8'))
except Exception as e:
    print('HACHARA Curriculum Integrity Validation')
    print('ERROR:',e)
    sys.exit(1)
cur=c.get('curriculum',{}); src=c.get('sourceIntegrity',{}); latest=c.get('latestCandidate',{})
if cur.get('extendedLessons') != 117: errors.append('Extended curriculum must remain 117 lessons')
if cur.get('learningStatus') != '117/117 complete': errors.append('Learning status must remain 117/117 complete')
if src.get('registryLessons') != 117: errors.append('Registry must contain 117 lessons')
if src.get('embeddedMasterRecords') != 93: errors.append('Embedded master record count changed unexpectedly')
if src.get('explicitSourceGaps') != 51: errors.append('Explicit source-gap count changed unexpectedly')
if src.get('gapRanges') != ['29-55','91-114']: errors.append('Source-gap ranges changed unexpectedly')
if latest.get('lessonRecords') != '117/117 retained': errors.append('Latest candidate no longer records 117/117 retained')
if latest.get('sectionsPerLesson') != 29: errors.append('Structured lesson section count changed unexpectedly')
if c.get('bundleMapping',{}).get('status') != 'ready-for-authoritative-mapping': errors.append('Bundle mapping status changed unexpectedly')
print('HACHARA Curriculum Integrity Validation')
print(f'Errors: {len(errors)}')
for e in errors: print('ERROR:',e)
sys.exit(1 if errors else 0)
