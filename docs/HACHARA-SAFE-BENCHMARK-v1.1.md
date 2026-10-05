# HACHARA UI/UX Playground — SAFE BENCHMARK v1.1

**Status:** LOCKED BASELINE  
**Purpose:** Version the current validated implementation without rewriting or invalidating the protected v1.0 benchmark.

## 1. Benchmark identity

- Product: HACHARA UI/UX Playground
- Baseline branch: `main`
- Benchmark commit: `9e58fc6b1ef7e183672192624b3b07685706308a`
- Previous protected benchmark: `docs/HACHARA-SAFE-BENCHMARK-v1.0.md`
- Architecture master: `CURRICULUM-BUNDLE-MASTER.md`
- Curriculum manifest: `data/curriculum-manifest.json`
- Legacy/file registry: `LESSON-REGISTRY.md`
- Automation rules: `docs/AUTOMATION-PLAYBOOK.md`

## 2. Versioning decision

v1.0 remains preserved as the historical protected benchmark at commit `ad758b0b5cd763ee966d07d2cbef4d1493da2f5a`.

v1.1 is the current implementation benchmark because the repository has progressed from v1.0 to commit `9e58fc6b1ef7e183672192624b3b07685706308a`, with the intervening work validated through the repository's automated validation and browser/integration workflows.

This is a benchmark reconciliation only. It does not authorize deletion, merging, renumbering, or silent rewriting of curriculum content.

## 3. What remains protected

The benchmark protects the accumulated curriculum, lesson content, existing application shell, Classic/Modern workspace direction, bundle architecture, practical-learning model, Figma/Framer practice, review/rework concept, accessibility coverage, examples, knowledge assets and automation safeguards.

**No restart. No destructive migration. No silent deletion.**

## 4. Current architecture

Architecture remains **HACHARA ARCHITECTURE LOCK v1.0**.

No architecture migration is introduced by this benchmark update. The existing primary loop remains:

**Learn → Understand → Analyse → Practice → Build → Submit → Review → Rework → Validate → Reflect → Progress**

The learner/designer remains responsible for important UX decisions. Automation may assist with repetitive work, validation, reporting and regression checks but must not silently replace learner decisions.

## 5. Current curriculum/inventory rule

The repository continues to distinguish physical lesson files from curriculum lesson units.

Current controlled inventory remains:

- 96 physical lesson files
- 95 curriculum learning units + 1 reference/template
- 17 bundles

These counts must not be conflated with module, skill, evidence or capability counts.

No lesson deletion, merge, renumbering or filename-based deduplication is authorized by this benchmark.

## 6. Validation baseline

The current implementation benchmark is supported by the repository validation stack, including:

- playground validation
- curriculum integrity validation
- integration validation
- browser smoke validation
- interaction/regression coverage
- responsive overflow checks
- keyboard-focus smoke checks
- console/page-error checks
- maintenance/runtime safeguards

The latest controlled QA evidence for the benchmark commit recorded successful GitHub Actions runs for browser smoke, playground validation, integration validation and maintenance.

Automated responsive checks do not constitute physical-device acceptance. Real iOS Safari, Android and other physical-device visual acceptance remains a separately evidenced activity.

## 7. Change-control rule

Future major changes must:

1. Read the current benchmark and lock index.
2. Preserve existing approved assets unless explicitly approved otherwise.
3. Make the smallest safe change.
4. Run relevant automated validation.
5. Run relevant functional/browser/regression checks.
6. Record the resulting commit.
7. Create a new explicitly versioned benchmark when the implementation baseline materially advances.

## 8. Safe-stop conditions

Stop and request human input if:

- two lessons may be duplicates but their learning objectives are unclear;
- a change could remove or materially rewrite existing knowledge;
- a migration would alter the approved workspace architecture;
- a curriculum numbering conflict cannot be resolved from repository evidence;
- automated validation reports a blocking regression;
- a proposed change would permanently alter user data or history;
- a benchmark or architecture lock would need to be replaced rather than versioned.

## 9. Non-goals

Do not restart the curriculum. Do not discard existing lesson files merely because a better bundle structure exists. Do not turn HACHARA into a large multi-agent system before the core learning/review/studio loop is stable.

## 10. Acceptance statement

v1.1 is the current implementation benchmark. v1.0 remains a preserved historical benchmark and is not overwritten.

Future work proceeds incrementally from v1.1.
