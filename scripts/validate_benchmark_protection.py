#!/usr/bin/env python3
"""Protect versioned HACHARA benchmark and lock documents from accidental replacement."""
from pathlib import Path
import hashlib, json, subprocess, sys

ROOT=Path(__file__).resolve().parents[1]
manifest=ROOT/'data'/'safe-benchmark.json'
errors=[]

if not manifest.exists():
    print('HACHARA Safe Benchmark Validation')
    print('ERROR: data/safe-benchmark.json is missing')
    sys.exit(1)

try:
    cfg=json.loads(manifest.read_text(encoding='utf-8'))
except Exception as e:
    print(f'ERROR: invalid safe-benchmark.json: {e}')
    sys.exit(1)

for rel in cfg.get('protectedFiles', []):
    p=ROOT/rel
    if not p.exists():
        errors.append(f'Protected file missing: {rel}')

for rel,expected in cfg.get('gitBlobSha', {}).items():
    p=ROOT/rel
    if not p.exists():
        continue
    try:
        actual=subprocess.check_output(
            ['git','hash-object',str(p)],
            cwd=ROOT,
            text=True,
        ).strip()
    except Exception as e:
        errors.append(f'Could not calculate Git blob SHA for {rel}: {e}')
        continue
    if actual != expected:
        errors.append(f'Protected file changed: {rel}')

# Backward-compatible content hash support for future manifests.
for rel,expected in cfg.get('sha256', {}).items():
    p=ROOT/rel
    if not p.exists():
        continue
    actual=hashlib.sha256(p.read_bytes()).hexdigest()
    if actual != expected:
        errors.append(f'Protected file SHA-256 changed: {rel}')

print('HACHARA Safe Benchmark Validation')
print(f'Protected files: {len(cfg.get("protectedFiles", []))}')
print(f'Errors: {len(errors)}')
for e in errors:
    print('ERROR:',e)
sys.exit(1 if errors else 0)
