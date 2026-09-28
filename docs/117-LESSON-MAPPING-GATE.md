# 117-Lesson Mapping Gate v1.0

## Objective
Move the completed 117-lesson curriculum into Bundle → Module organization without changing the source curriculum.

## Release gates
1. Registry integrity — exactly 117 stable lesson records.
2. Sequence integrity — lesson numbers remain 1–117 with no duplicates.
3. Content preservation — source content is never rewritten by mapping.
4. Source-gap preservation — unresolved source gaps remain explicitly marked.
5. Bundle mapping — every verified lesson receives a bundle assignment.
6. Module mapping — every mapped lesson receives a module assignment or an explicit mapping-review status.
7. Completion preservation — existing completion state remains unchanged.
8. Skill mapping — skills are additive metadata, not replacements for lessons.
9. Auditability — every mapping change is traceable.
10. Regression — existing learner entry points remain intact.

## Stop conditions
Stop and request human input only when:
- two bundle/module mappings are equally plausible;
- source material conflicts across authoritative records;
- a mapping would require changing lesson content;
- a source gap would need invented content;
- a protected benchmark artifact would be modified.

## Build rule
Do not wait for perfect source recovery to build the engine. Build the mapping infrastructure first, populate only verified records, and keep unresolved records visible as source-gap/pending-reconciliation.
