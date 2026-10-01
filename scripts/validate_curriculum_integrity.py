#!/usr/bin/env python3
"""Validate the current HACHARA UI/UX Playground curriculum inventory contract.

This validator is intentionally aligned to the current UI/UX source of truth:
96 physical lesson files = 95 curriculum lesson units + 1 reference/template.
It does not invent or enforce a curriculum-topic count, module assignment, or proficiency state.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "LESSON-REGISTRY.md"
MANIFEST = ROOT / "data" / "curriculum-manifest.json"
POLICY = ROOT / "data" / "curriculum-mapping-policy.json"
OVERLAP = ROOT / "docs" / "LESSON-OVERLAP-RECONCILIATION-v1.0.md"
MAPPING_AUDIT = ROOT / "docs" / "CURRICULUM-MAPPING-AUDIT-v1.0.md"

EXPECTED_PHYSICAL_FILES = 96
EXPECTED_CURRICULUM_UNITS = 95
EXPECTED_BUNDLES = 17


def lesson_files() -> list[Path]:
    return sorted(ROOT.glob("lesson*.html"))


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []
    files = lesson_files()

    if len(files) != EXPECTED_PHYSICAL_FILES:
        errors.append(
            f"Expected {EXPECTED_PHYSICAL_FILES} physical lesson files; found {len(files)}."
        )

    if not REGISTRY.exists():
        errors.append("Authoritative LESSON-REGISTRY.md is missing.")
    else:
        registry = REGISTRY.read_text(encoding="utf-8", errors="replace")
        if "File-level lesson count: 96" not in registry:
            errors.append("LESSON-REGISTRY.md does not declare the current 96-file inventory.")
        if "96 physical lesson files" not in registry:
            errors.append("LESSON-REGISTRY.md is missing the current physical inventory statement.")
        if "95 curriculum lesson units" not in registry:
            warnings.append("Registry does not explicitly state the 95 curriculum-unit distinction.")

    if not POLICY.exists():
        errors.append("Current curriculum mapping policy is missing.")
    else:
        try:
            policy = json.loads(POLICY.read_text(encoding="utf-8"))
            source = str(policy.get("sourceOfTruth", ""))
            if "96 physical lesson files" not in source:
                errors.append("Mapping policy does not identify the current 96-file source of truth.")
            if "95 curriculum lesson units" not in source:
                warnings.append("Mapping policy does not explicitly state the 95-unit distinction.")
        except json.JSONDecodeError as exc:
            errors.append(f"Curriculum mapping policy JSON is invalid: {exc}")

    if not MANIFEST.exists():
        errors.append("Curriculum manifest is missing.")
    else:
        try:
            manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
            bundles = manifest.get("bundles", [])
            if len(bundles) != EXPECTED_BUNDLES:
                errors.append(
                    f"Expected {EXPECTED_BUNDLES} master bundles; found {len(bundles)}."
                )
            ids = [b.get("id") for b in bundles]
            if len(ids) != len(set(ids)):
                errors.append("Duplicate bundle IDs found in curriculum manifest.")
            if "B01" not in ids or "B17" not in ids:
                errors.append("Bundle range B01–B17 is incomplete.")
        except json.JSONDecodeError as exc:
            errors.append(f"Curriculum manifest JSON is invalid: {exc}")

    if not OVERLAP.exists():
        warnings.append("Lesson overlap reconciliation artifact is missing.")
    if not MAPPING_AUDIT.exists():
        warnings.append("Provisional curriculum mapping audit is missing.")

    print("HACHARA Curriculum Integrity Validation")
    print(f"Physical lesson files: {len(files)}")
    print(f"Expected curriculum units: {EXPECTED_CURRICULUM_UNITS} (reported separately; not inferred from filenames)")
    print(f"Errors: {len(errors)}")
    print(f"Warnings: {len(warnings)}")
    for item in errors:
        print(f"ERROR: {item}")
    for item in warnings:
        print(f"WARNING: {item}")

    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
