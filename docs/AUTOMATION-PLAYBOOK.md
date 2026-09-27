# HACHARA UI/UX Playground — Automation Playbook

## Purpose
Accelerate repetitive project work without sacrificing learner content, existing functionality, or human approval for important design decisions.

## Automation principles

1. Never delete or overwrite existing curriculum content as part of an automated routine.
2. Prefer metadata, mapping, validation and generated indexes over manual editing.
3. Human approval remains required for curriculum changes, merging conceptual duplicates, major UI changes and design-quality decisions.
4. Every automated change must be testable and reversible through Git history.
5. Existing Classic/legacy functionality remains protected.
6. Do not treat filename similarity as proof of duplication.
7. Do not count supporting files as separate learner progress when they map to the same curriculum topic.

## Automation layers

### A. Repository validation
Run on pushes and pull requests:
- validate HTML structure at a basic level
- detect broken local file references where practical
- detect duplicate curriculum IDs in the manifest
- detect missing lesson references
- report lesson/bundle counts
- check that required curriculum fields exist

### B. Curriculum indexing
The manifest becomes the machine-readable source for:
- bundle navigation
- module navigation
- lesson lookup
- skill mapping
- practice requirements
- evidence requirements
- tool references
- progress calculation

### C. Generated reporting
Generate machine-readable reports for:
- lesson inventory
- bundle coverage
- unmapped lessons
- overlap candidates
- missing practice
- missing evidence requirements
- tool coverage

### D. Safe build loop
`Change → Validate → Report → Review → Commit`

Automation may prepare or validate work, but it must not silently make important curriculum or design decisions.

## High-value future automations

- automatic lesson inventory from repository files
- automatic bundle coverage report
- automatic shortcut index generation
- automatic tool cross-reference index
- automatic challenge checklist generation
- automatic lesson navigation/index generation
- automatic accessibility checklist injection for relevant lessons
- automatic link/reference validation
- automatic regression smoke checks
- automatic build-status report after each major commit

## Human checkpoints

Stop for explicit review before:
- deleting or merging content
- changing curriculum meaning
- changing the core navigation model
- changing learner progress rules
- changing review criteria
- changing the visual identity substantially

## Safe-stop rule

If an automated validation detects an unexpected structural change, report it and stop the affected automation path. Do not repair by deleting or overwriting content automatically.
