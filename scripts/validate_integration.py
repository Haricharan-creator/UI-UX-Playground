#!/usr/bin/env python3
"""Validate HACHARA learning-engine contracts and local integration references."""
from __future__ import annotations
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
REQUIRED = [
    "curriculum-manifest.json", "skill-taxonomy.json", "skill-evidence-schema.json",
    "review-rubric.json", "progress-model.json", "bundle-progress-schema.json",
    "challenge-schema.json", "rework-schema.json", "workflow-state-machine.json",
    "navigation-contract.json", "integration-manifest.json"
]
HTML = ["bundle-dashboard.html", "studio.html", "review.html", "progress.html"]
errors=[]; warnings=[]

def load(name):
    p=DATA/name
    if not p.exists():
        errors.append(f"Missing data contract: {name}"); return None
    try: return json.loads(p.read_text(encoding="utf-8"))
    except Exception as e:
        errors.append(f"Invalid JSON {name}: {e}"); return None

for n in REQUIRED: load(n)
for n in HTML:
    p=ROOT/n
    if not p.exists(): errors.append(f"Missing integration surface: {n}")
    elif "<html" not in p.read_text(encoding="utf-8", errors="ignore").lower(): warnings.append(f"Basic HTML marker missing: {n}")

state=load("workflow-state-machine.json")
if state:
    states=set(state.get("states",[])); transitions=state.get("transitions",{})
    for src, dests in transitions.items():
        if src not in states: errors.append(f"Unknown workflow source state: {src}")
        for d in dests:
            if d not in states: errors.append(f"Unknown workflow destination state: {d}")

nav=load("navigation-contract.json")
if nav and nav.get("primaryEntry") != "academy": warnings.append("Navigation primaryEntry is not academy")

integration=load("integration-manifest.json")
if integration:
    for surface in integration.get("surfaces",[]):
        entry=ROOT/surface.get("entry","")
        if not entry.exists(): errors.append(f"Missing surface entry: {surface.get('entry')}")
    for contract in integration.get("contracts",[]):
        if not (ROOT/contract).exists(): errors.append(f"Missing referenced contract: {contract}")

print("HACHARA Integration Validation")
print(f"Errors: {len(errors)}")
print(f"Warnings: {len(warnings)}")
for x in errors: print("ERROR:",x)
for x in warnings: print("WARN:",x)
raise SystemExit(1 if errors else 0)
