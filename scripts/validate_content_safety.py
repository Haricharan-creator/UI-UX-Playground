#!/usr/bin/env python3
"""Check required learning surfaces for preservation markers and accidental destructive patterns."""
from pathlib import Path
import re,sys
ROOT=Path(__file__).resolve().parents[1]
errors=[];warnings=[]
required=['bundle-dashboard.html','studio.html','review.html','progress.html']
for name in required:
    p=ROOT/name
    if not p.exists(): errors.append(f'Missing required surface: {name}'); continue
    t=p.read_text(encoding='utf-8',errors='ignore')
    if not re.search(r'<title>\s*[^<]+</title>',t,re.I): errors.append(f'{name}: missing title')
    if len(t.strip()) < 200: errors.append(f'{name}: unexpectedly small file')
# Warn on obviously destructive repository-wide patterns in newly maintained scripts.
for p in (ROOT/'scripts').glob('*.py'):
    t=p.read_text(encoding='utf-8',errors='ignore')
    if re.search(r'\b(?:unlink|rmtree|delete_file)\s*\(',t): warnings.append(f'{p.name}: destructive filesystem operation requires human review')
print('HACHARA Preservation/Safety Validation')
print(f'Errors: {len(errors)}')
print(f'Warnings: {len(warnings)}')
for x in errors: print('ERROR:',x)
for x in warnings: print('WARN:',x)
sys.exit(1 if errors else 0)
