#!/usr/bin/env python3
"""Safe, dependency-free validation for the HACHARA UI/UX Playground.

This script reports structural issues; it does not modify repository content.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "data" / "curriculum-manifest.json"


def lesson_files() -> list[Path]:
    return sorted(ROOT.glob("lesson*.html"))


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []
    files = lesson_files()

    if MANIFEST.exists():
        try:
            manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            errors.append(f"Manifest JSON is invalid: {exc}")
            manifest = {}
    else:
        warnings.append("Curriculum manifest does not exist yet.")
        manifest = {}

    if manifest:
        bundles = manifest.get("bundles", [])
        seen_ids: set[str] = set()
        seen_paths: set[str] = set()
        for bundle in bundles:
            bid = bundle.get("id")
            if not bid:
                errors.append("Bundle without an id found.")
            lessons = bundle.get("lessons", [])
            for lesson in lessons:
                lid = lesson.get("id")
                path = lesson.get("path")
                if lid in seen_ids:
                    errors.append(f"Duplicate curriculum lesson id: {lid}")
                if lid:
                    seen_ids.add(lid)
                if path:
                    if path in seen_paths:
                        errors.append(f"Duplicate lesson path in manifest: {path}")
                    seen_paths.add(path)
                    if not (ROOT / path).exists():
                        errors.append(f"Manifest lesson path missing: {path}")

    # Basic HTML sanity checks for lesson pages.
    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        lower = text.lower()
        if "<!doctype html>" not in lower:
            warnings.append(f"No HTML doctype: {path.relative_to(ROOT)}")
        if "<html" not in lower or "</html>" not in lower:
            errors.append(f"Incomplete HTML document: {path.relative_to(ROOT)}")
        if "<title" not in lower:
            warnings.append(f"Missing title: {path.relative_to(ROOT)}")

    print("HACHARA Playground validation")
    print(f"Lesson HTML files: {len(files)}")
    print(f"Errors: {len(errors)}")
    print(f"Warnings: {len(warnings)}")
    for item in errors:
        print(f"ERROR: {item}")
    for item in warnings:
        print(f"WARNING: {item}")

    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
