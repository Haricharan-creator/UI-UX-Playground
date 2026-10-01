#!/usr/bin/env python3
"""Validate the additive Module -> Practice -> Evidence integration layer."""
from __future__ import annotations
import json, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
errors: list[str] = []
warnings: list[str] = []

def load(name: str):
    path = DATA / name
    if not path.exists():
        errors.append(f"Missing integration contract: {name}")
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        errors.append(f"Invalid JSON {name}: {exc}")
        return {}

scaffold = load("module-practice-evidence-scaffold-v2.json")
integration = load("module-practice-evidence-integration-v1.json")
bundle_contract = load("bundle-engine-contract.json")
bundle_map = load("bundle-module-map.json")
lesson_map = load("provisional-lesson-module-map-v1.json")

modules = scaffold.get("modules", [])
integration_modules = integration.get("modules", [])
contract_gates = set(bundle_contract.get("requiredGates", []))
contract_tools = set(bundle_contract.get("toolModes", []))
module_map = {
    item.get("moduleId"): item
    for item in integration_modules
    if item.get("moduleId")
}

if len(modules) != 28:
    errors.append(f"Expected 28 scaffold modules; found {len(modules)}")
if len(module_map) != len(integration_modules):
    errors.append("Duplicate or missing integration module IDs")

scaffold_ids = {m.get("moduleId") for m in modules}
integration_ids = set(module_map)
if scaffold_ids != integration_ids:
    errors.append("Scaffold and integration module ID sets differ")

for m in integration_modules:
    mid = m.get("moduleId")
    mapping = m.get("mappingStatus")
    gates = {
        m.get("practiceStatus"),
        m.get("evidenceStatus"),
        m.get("reviewStatus"),
        m.get("validationStatus"),
    }
    if mapping == "mapped" and gates != {"defined"}:
        errors.append(f"{mid}: mapped module does not have all required gates defined")
    if mapping == "source-gap" and not m.get("gaps"):
        errors.append(f"{mid}: source-gap module must document its gap")
    if m.get("toolMode") not in contract_tools:
        errors.append(f"{mid}: unsupported toolMode {m.get('toolMode')!r}")

mapped = [m for m in integration_modules if m.get("mappingStatus") == "mapped"]
source_gaps = [m for m in integration_modules if m.get("mappingStatus") == "source-gap"]
if len(mapped) != 25:
    errors.append(f"Expected 25 mapped modules; found {len(mapped)}")
if len(source_gaps) != 3:
    errors.append(f"Expected 3 source-gap modules; found {len(source_gaps)}")

lesson_mappings = lesson_map.get("lessonMappings", [])
mapped_lesson_ids = {
    row[0] for row in lesson_mappings
    if len(row) >= 5 and row[4] == "mapped"
}
integration_lesson_ids = {
    lesson_id
    for m in mapped
    for lesson_id in m.get("lessonIds", [])
}
if mapped_lesson_ids - integration_lesson_ids:
    errors.append("Some mapped lessons are absent from module integration")
if integration_lesson_ids - mapped_lesson_ids:
    errors.append("Module integration references lessons not marked mapped")

for m in mapped:
    if not m.get("sourceRefs"):
        errors.append(f"{m.get('moduleId')}: mapped module has no sourceRefs")
    if not m.get("lessonIds"):
        errors.append(f"{m.get('moduleId')}: mapped module has no lessonIds")
    if not m.get("skillIds"):
        warnings.append(f"{m.get('moduleId')}: no skillIds recorded")

expected_bundles = {
    item.get("bundleId")
    for item in bundle_map.get("bundles", [])
    if item.get("moduleIds")
}
actual_bundles = {m.get("bundleId") for m in integration_modules}
if expected_bundles != actual_bundles:
    errors.append("Module-bearing bundle IDs in integration do not match bundle-module map")

validation = integration.get("validation", {})
if validation.get("sourceLessonChanges") != 0:
    errors.append("Integration reports source lesson changes")

preservation = integration.get("preservation", {})
for key in ("lessonContentChanged", "lessonFilesDeleted", "lessonFilesRenamed", "lessonFilesMerged"):
    if preservation.get(key) not in (False, 0):
        errors.append(f"Preservation gate failed: {key}={preservation.get(key)!r}")

if not contract_gates:
    errors.append("Bundle engine contract has no required gates")

print("HACHARA Module/Practice/Evidence Integration Validation")
print(f"Modules: {len(integration_modules)}")
print(f"Mapped modules: {len(mapped)}")
print(f"Source-gap modules: {len(source_gaps)}")
print(f"Errors: {len(errors)}")
print(f"Warnings: {len(warnings)}")
for item in errors:
    print("ERROR:", item)
for item in warnings:
    print("WARN:", item)
sys.exit(1 if errors else 0)
