# HACHARA Repository Source of Truth v1.0

## Audit date
2026-09-29

## Decision
`Haricharan-creator/UI-UX-Playground` is the active source-of-truth repository for the HACHARA UI/UX Playbook and learning/capability build.

## Repository audit
| Repository | Status | Decision |
|---|---|---|
| `Haricharan-creator/UI-UX-Playground` | Active, populated, ongoing HACHARA commits | **AUTHORITATIVE** |
| `Haricharan-creator/Heuristics-Evaluation` | Private, currently size 0, no usable repository content identified during this audit | **DO NOT MERGE** |

## Correct curriculum-source statement
The UI/UX project has its **own** curriculum and lesson inventory. It must not inherit lesson counts, lesson content, numbering, or curriculum records from the separate **A Grammar Playbook by GSR** project.

The current UI/UX repository registry records **63 lesson files** (including the lesson template). This is a repository file count, **not yet a deduplicated curriculum-topic count**. Several topic overlaps remain candidates for content-level review. Existing files are preserved while that reconciliation is performed.

## Authoritative UI/UX sources
- `CURRICULUM-BUNDLE-MASTER.md` — authoritative UI/UX learning architecture and 17 bundle definitions.
- `LESSON-REGISTRY.md` — authoritative inventory of existing UI/UX lesson files and their reconciliation status.
- Bundle/data contracts — implementation schemas for the learning workflow.

## Latest authoritative architectural commitments
- Lessons remain the authoritative UI/UX knowledge units.
- Bundles organize existing UI/UX lessons; they do not recreate or duplicate them.
- Mapping uncertainty becomes an explicit source/mapping gap rather than a guess.
- Required progression: Bundle → Module → Existing Lessons → Skill → Practice → Real UX Challenge → Figma/Framer Task → Evidence → Review → Rework → Validation → Capability Progress.
- V1 is preserved; V2 changes remain traceable.
- `CURRICULUM-BUNDLE-MASTER.md` defines the UI/UX learning architecture.
- `LESSON-REGISTRY.md` defines the UI/UX source-file inventory.

## Cross-project isolation rule
The **A Grammar Playbook by GSR** curriculum is a separate project and must remain isolated. No Grammar Playbook lesson, count, numbering scheme, or curriculum structure may be imported into HACHARA UI/UX unless the user explicitly requests a separate, justified integration.

## Cross-repository adoption rule
No content from another repository is to be copied into the authoritative repository merely because its name is related. Adoption requires identifiable, non-duplicative, compatible source material and a preservation/QA check.

## Current audit result
No additional usable implementation/content was found in `Heuristics-Evaluation` that should be adopted. It remains untouched.

## Safe-build rule
Do not create a second competing HACHARA repository. Future work should update this authoritative repository unless a new repository is explicitly approved for a separate product/component.
