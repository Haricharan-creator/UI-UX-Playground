# HACHARA Repository Source of Truth v1.0

## Audit date
2026-09-29

## Decision
`Haricharan-creator/UI-UX-Playground` is the active source-of-truth repository for the HACHARA UI/UX Playbook and learning/capability build.

## Repository audit
| Repository | Status | Decision |
|---|---|---|
| `Haricharan-creator/UI-UX-Playground` | Active, public, populated, ongoing HACHARA commits | **AUTHORITATIVE** |
| `Haricharan-creator/Heuristics-Evaluation` | Private, currently size 0, no usable repository content identified during this audit | **DO NOT MERGE** |

## Evidence for the authoritative repository
The active repository contains the locked UI/UX learning benchmark, the 117-lesson curriculum integrity work, bundle-engine preservation gates, the authoritative lesson-to-bundle mapping framework, workflow/data contracts, learner-facing surfaces, and automated QA work.

## Latest authoritative architectural commitments
- Lessons remain the authoritative knowledge units.
- Bundles organize existing lessons; they do not recreate or duplicate them.
- Mapping uncertainty becomes an explicit source/mapping gap rather than a guess.
- Required progression: Bundle → Module → Existing Lessons → Skill → Practice → Real UX Challenge → Figma/Framer Task → Evidence → Review → Rework → Validation → Capability Progress.
- V1 is preserved; V2 changes remain traceable.
- The locked learning benchmark is the source of truth for future curriculum/bundle implementation.

## Cross-repository adoption rule
No content from another repository is to be copied into the authoritative repository merely because its name is related. Adoption requires identifiable, non-duplicative, compatible source material and a preservation/QA check.

## Current audit result
No additional usable implementation/content was found in `Heuristics-Evaluation` that should be adopted. It remains untouched.

## Safe-build rule
Do not create a second competing HACHARA repository. Future work should update this authoritative repository unless a new repository is explicitly approved for a separate product/component.
