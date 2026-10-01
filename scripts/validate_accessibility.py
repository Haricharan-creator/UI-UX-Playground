#!/usr/bin/env python3
"""Lightweight accessibility smoke checks for learner-facing pages."""
from pathlib import Path
import re, sys
ROOT=Path(__file__).resolve().parents[1]
PAGES=['bundle-dashboard.html','studio.html','review.html','progress.html']
errors=[]; warnings=[]
for name in PAGES:
    p=ROOT/name
    if not p.exists(): errors.append(f'Missing page: {name}'); continue
    t=p.read_text(encoding='utf-8',errors='ignore')
    low=t.lower()
    if '<meta name="viewport"' not in low: errors.append(f'{name}: missing viewport')
    if not re.search(r'<html[^>]+lang=["\'][^"\']+["\']',t,re.I): errors.append(f'{name}: missing html lang')
    if not re.search(r'<title>\s*[^<]+\s*</title>',t,re.I): errors.append(f'{name}: missing meaningful title')
    for tag in re.findall(r'<img\b([^>]*)>',t,re.I):
        if not re.search(r'\balt=["\']',tag,re.I): errors.append(f'{name}: image without alt attribute')
    for tag in re.findall(r'<input\b([^>]*)>',t,re.I):
        if not re.search(r'\bid=["\']',tag,re.I) and not re.search(r'\baria-label=["\']',tag,re.I): warnings.append(f'{name}: input without id/aria-label')
    if '<button' in low and 'cursor:pointer' not in low: warnings.append(f'{name}: buttons may need explicit interaction affordance review')
    if name == 'bundle-dashboard.html' and 'class="bundle"' in low:
        if 'tabindex="0"' not in low or 'role="button"' not in low: errors.append(f'{name}: interactive bundle cards must be keyboard focusable and expose button semantics')
        if "addEventListener('keydown'" not in low or "e.key==='enter'" not in low or "e.key===' '" not in low: errors.append(f'{name}: interactive bundle cards must support Enter and Space keyboard activation')
print('HACHARA Accessibility Smoke Validation')
print(f'Errors: {len(errors)}')
print(f'Warnings: {len(warnings)}')
for x in errors: print('ERROR:',x)
for x in warnings: print('WARN:',x)
sys.exit(1 if errors else 0)
