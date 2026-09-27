#!/usr/bin/env python3
"""Check local href/src references in learner-facing HTML files."""
from pathlib import Path
import re, sys
ROOT=Path(__file__).resolve().parents[1]
files=[ROOT/n for n in ("bundle-dashboard.html","studio.html","review.html","progress.html")]
errors=[]
pattern=re.compile(r'''(?:href|src)=["']([^"'#?]+)''', re.I)
for f in files:
    if not f.exists():
        errors.append(f"Missing page: {f.name}"); continue
    text=f.read_text(encoding="utf-8",errors="ignore")
    for ref in pattern.findall(text):
        if ref.startswith(("http://","https://","mailto:","javascript:","data:")): continue
        target=(f.parent/ref).resolve()
        try: target.relative_to(ROOT.resolve())
        except ValueError:
            errors.append(f"Path escapes repository: {f.name} -> {ref}"); continue
        if not target.exists(): errors.append(f"Broken local reference: {f.name} -> {ref}")
print("HACHARA Local Link Validation")
print(f"Errors: {len(errors)}")
for e in errors: print("ERROR:",e)
sys.exit(1 if errors else 0)
