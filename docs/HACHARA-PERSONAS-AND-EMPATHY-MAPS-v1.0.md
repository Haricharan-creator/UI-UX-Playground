# HACHARA Personas & Empathy Maps v1.0

**Status: PROVISIONAL HYPOTHESES — not validated user research.**  
These personas are planning tools derived from the product intent and learning workflow. They must not be represented as interview findings or measured audience segments. Validate them with actual learners before major prioritization.

## Research questions to validate
1. Who is the primary learner: beginner, career-switcher, practicing designer, developer, or mixed?
2. What triggers learning: job transition, project need, confidence gap, portfolio, or tool skill?
3. Where do learners get stuck: terminology, deciding what to do, practicing, tool setup, critique, or consistency?
4. What evidence can they realistically produce (screenshots, prototypes, links, observations, test results)?
5. How much structure vs autonomy do they want?
6. What access constraints exist: device, bandwidth, time, language, disability, software access, privacy?
7. What makes feedback trustworthy and useful?
8. What does success mean to learners and employers/clients?

## Persona A — The Structured Beginner
**Provisional primary persona candidate**

- **Situation:** New to UX/UI, understands isolated terms but has little end-to-end practice.
- **Goal:** Learn the process and create a first defensible project.
- **Jobs to be done:** “When I face a design task, help me understand the next step, why it matters, and what a good result looks like.”
- **Motivators:** Visible progress, examples, manageable challenges, confidence, clear next action.
- **Pain hypotheses:** Too many new terms; courses feel disconnected from practice; blank canvas anxiety; unclear quality bar; uncertain whether work is “good enough.”
- **Behaviours to test:** Skips long theory; copies examples when unsure; may confuse lesson completion with skill mastery; needs checkpoints.
- **Needs:** Plain-language explanations, worked examples, small practice, independent challenge, rubric, rework guidance and a coherent case study.
- **Risks:** Over-scaffolding can discourage independent judgement; excessive badges can imply mastery without evidence.
- **Success signals:** Can explain a decision, produce a usable artifact, identify limitations and improve after feedback.
- **Design implications:** One clear objective per lesson, “why this matters,” example → attempt → evidence, transparent criteria and an obvious next step.

### Empathy map (hypothesis)
| Says | Thinks |
|---|---|
| “Where do I start?” “Can I see an example?” “How do I know this is correct?” | “Everyone else seems to know the process.” “I might be missing a rule.” “I need proof that I can do this.” |
| Does | Feels |
| Watches/read lessons, searches for examples, tries tools, pauses when the task is open-ended, revises after feedback | Curious but overloaded; motivated when progress is visible; anxious when criteria are vague |

**Evidence needed:** moderated usability sessions, think-aloud observations, beginner task completion, confidence ratings and examples of submitted work.

## Persona B — The Career Switcher / Portfolio Builder
- **Situation:** Has adjacent experience or self-taught skills and needs a credible, explainable portfolio.
- **Goal:** Turn learning into portfolio-quality case studies and interview-ready reasoning.
- **Job:** “Help me show not only what I designed, but the user problem, evidence, trade-offs, iterations and outcome.”
- **Pain hypotheses:** Tutorials yield similar-looking work; case studies lack research or validation; feedback is vague; progress is hard to demonstrate.
- **Needs:** Cumulative project checkpoints, decision log, before/after comparisons, evidence-linked critique, usability-test record and exportable case-study outline.
- **Risks:** Polished visuals may be mistaken for proven UX; fabricated metrics or invented research damage trust.
- **Success signals:** Can present problem framing, constraints, process, rejected alternatives, test evidence, iteration and limitations.
- **Design implications:** Project workspace should connect user problem → task/journey → design decision → prototype → test → rework → outcome; label simulated data clearly.

### Empathy map (hypothesis)
| Says | Thinks |
|---|---|
| “Will this case study stand up in an interview?” “What should I include in my portfolio?” | “I need differentiation.” “I need evidence, not just attractive screens.” |
| Does | Feels |
| Collects inspiration, builds a prototype, edits portfolio narrative, seeks critique and compares iterations | Time pressure, ambition, uncertainty about industry expectations |

**Evidence needed:** portfolio reviews, interview preparation tasks, artifact audits and interviews with learners at career transition.

## Persona C — The Practicing Designer Seeking Better Judgement
- **Situation:** Can use design tools and ship interfaces but wants stronger UX reasoning, accessibility, consistency and QA.
- **Goal:** Detect issues earlier, make better trade-offs and validate implementation.
- **Job:** “Help me critique and improve real work systematically without taking away my authorship.”
- **Pain hypotheses:** Review feedback is subjective; small states and edge cases are missed; design-to-build drift is hard to document; quality checks happen late.
- **Needs:** Structured heuristic/accessibility/interactions rubric, component-state checks, evidence confidence, responsive QA, severity/impact prioritization and regression checks.
- **Risks:** A rubric can become checkbox theatre; AI may overstate uncertain findings.
- **Success signals:** Findings are reproducible, prioritized and resolved or explicitly accepted with rationale; fewer regressions after iteration.
- **Design implications:** Keep observation separate from interpretation; ask for evidence; allow disagree/needs-investigation; require retesting after changes.

### Empathy map (hypothesis)
| Says | Thinks |
|---|---|
| “Show me the evidence.” “What is the user impact?” “Did the fix create a regression?” | “I need a consistent review process, not another opinion.” |
| Does | Feels |
| Audits screens, checks states, compares versions, logs defects and retests | Skeptical of generic advice; values precision and speed |

**Evidence needed:** design critique sessions, review consistency tests, issue prioritization tasks and real before/after QA records.

## Persona D — The Tool-Blocked Learner (cross-cutting segment)
- **Situation:** Understands the goal but is blocked by Figma/Framer setup, unfamiliar UI, device limits or platform-specific steps.
- **Goal:** Complete the learning task without losing momentum to tool friction.
- **Job:** “Tell me exactly how to do the required tool operation, then bring me back to the design objective.”
- **Pain hypotheses:** Tool instructions are version-specific; shortcuts differ by OS; links open the wrong page; troubleshooting lacks context.
- **Needs:** Task-oriented tool guides, platform labels, expected result, recovery steps and a return link to the original challenge.
- **Design implications:** Tool help must be contextual, versioned where possible and focused on completing a learning outcome—not a disconnected encyclopedia.

### Empathy map (hypothesis)
| Says | Thinks |
|---|---|
| “Where is this setting?” “Why does mine look different?” | “I understand the idea but cannot complete the step.” |
| Does | Feels |
| Searches tutorials, switches tabs, retries steps, screenshots the issue | Frustrated; relieved by exact, visual, recoverable guidance |

## Accessibility and inclusion overlays (not separate stereotypes)
For every persona, investigate differences in language proficiency, literacy, disability, neurodiversity, age, device, connectivity, available time, financial/tool access and comfort sharing work. Do not infer these from demographic labels. Ask only for information needed to improve the experience, and allow private/local learning where feasible.

## Validation protocol
1. Recruit representative learners across the hypotheses; do not recruit only project insiders.
2. Run 30–45 minute sessions with consent; collect only necessary data.
3. Ask participants to complete a real task (find a lesson, submit evidence, interpret a review, rework and find progress).
4. Observe behaviour before asking for explanations; record quotes separately from interpretation.
5. Capture frequency and severity of friction without pretending a small sample is statistically representative.
6. Update persona fields with confidence and source; remove unsupported assumptions.
7. Re-test the highest-risk journey after design changes.

## Evidence record template
For each claim record: `claim_id`, persona, observation/quote, context, date, source/consent, confidence, alternative explanation, design implication, validation status and follow-up question.

## Decision rule
Personas describe needs and context; they do not dictate one fixed UI. Prioritize by observed user impact, frequency, severity, product strategy and implementation cost. Revisit this document after research; version it rather than silently rewriting history.
