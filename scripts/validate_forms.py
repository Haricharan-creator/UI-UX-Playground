#!/usr/bin/env python3
"""Check learner-facing forms for labels, controls and basic submit affordances."""
from pathlib import Path
import re, sys
ROOT=Path(__file__).resolve().parents[1]
PAGES=['studio.html','review.html']
errors=[]; warnings=[]
for name in PAGES:
    p=ROOT/name
    if not p.exists(): errors.append(f'Missing page: {name}'); continue
    t=p.read_text(encoding='utf-8',errors='ignore')
    controls=re.findall(r'<(input|textarea|select)\b([^>]*)>',t,re.I)
    for tag,attrs in controls:
        if not re.search(r'\bid=["\']([^"\']+)',attrs,re.I) and not re.search(r'\baria-label=["\']([^"\']+)',attrs,re.I):
            errors.append(f'{name}: {tag} control missing id or aria-label')
        ident=re.search(r'\bid=["\']([^"\']+)',attrs,re.I)
        if ident and not re.search(r'<label\b[^>]*\bfor=["\']'+re.escape(ident.group(1))+r'["\']',t,re.I) and not re.search(r'aria-label=["\']',attrs,re.I):
            warnings.append(f'{name}: {tag} #{ident.group(1)} may lack an explicit label')
    if controls and not re.search(r'<button\b',t,re.I): warnings.append(f'{name}: form controls present without button')
print('HACHARA Form Validation')
print(f'Errors: {len(errors)}')
print(f'Warnings: {len(warnings)}')
for x in errors: print('ERROR:',x)
for x in warnings: print('WARN:',x)
sys.exit(1 if errors else 0)
