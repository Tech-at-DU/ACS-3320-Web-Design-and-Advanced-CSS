# ACS 3320 Web Design and Advanced CSS

## Course Description

This course is a deep exploration of CSS and practical visual design for developers. You'll learn the CSS that professional front-end engineers use every day: selectors and the cascade, custom properties, motion, cascade layers, design tokens, and Web Components. You'll also learn a set of **design formulas**, repeatable rules for type, spacing, color, layout, and UI states, that let you produce clean, accessible interfaces without needing to think of yourself as a "designer."

You'll also learn to work with AI as a design assistant: writing design briefs, steering AI tools away from generic output, and, most importantly, **critiquing and verifying** what they produce.

### Why learn this?

AI tools can generate a working page in seconds. What they can't do reliably is judge it. They miss low contrast, broken mobile layouts, missing focus states, and generic, forgettable design. The developers who stand out are the ones who can look at an interface, say precisely what's wrong, and fix it, by hand or by directing AI. That's what this course teaches.

## Schedule

**Course Dates:** October 19 – December 11, 2026

**Class Times:** Tuesday, Thursday at 4:00 PM PT – 6:45 PM PT

**Location:** Online

| Class | Date | Topics | Assigned | Due |
|:-----:|:----:|:-------|:---------|:----|
| - | **Week 1** | **Selectors & Design Foundations** | | |
| 1 | Tue, Oct 20 | Course intro, [Selectors & Specificity], [Type & Spacing] | [CSS Zen Garden] | - |
| 2 | Thu, Oct 22 | [Color], [Pseudo-elements], [Background Images] | - | - |
| - | **Week 2** | **Drawing with CSS & Custom Properties** | | |
| 3 | Tue, Oct 27 | [Position], transform, gradient, clip-path, shadows | [CSS Picture] | - |
| 4 | Thu, Oct 29 | [Custom Properties], theming, `light-dark()` | - | [CSS Zen Garden] |
| - | **Week 3** | **Layout & Critique** | | |
| 5 | Tue, Nov 3 | [Layout]: grid, `clamp()`, container queries | [Fix the AI Page] | - |
| 6 | Thu, Nov 5 | [Critique & AI as a Design Assistant] | - | [CSS Picture] |
| - | **Week 4** | **Motion & UI States** | | |
| 7 | Tue, Nov 10 | [UI States & Motion], [Transition] | [Microinteractions] | - |
| 8 | Thu, Nov 12 | [Animation], reduced motion | - | [Fix the AI Page] |
| - | **Week 5** | **CSS Framework** | | |
| 9 | Tue, Nov 17 | [CSS Layers], design tokens - [CSS Framework Notes] | [CSS Framework] | - |
| 10 | Thu, Nov 19 | [CSS Components], utilities | - | [Microinteractions] |
| - | **Week 6** | **Web Components** | | |
| 11 | Tue, Nov 24 | [Web Components Part 1] | [Web Components] | - |
| - | Thu, Nov 26 | **Thanksgiving Holiday – No Class** | - | - |
| - | **Week 7** | **Web Components** | | |
| 12 | Tue, Dec 1 | [Web Components Part 2] | - | [CSS Framework] |
| 13 | Thu, Dec 3 | [Styling Web Components], [Lit Element] | - | - |
| - | **Week 8** | **Wrap Up** | | |
| 14 | Tue, Dec 8 | [View Transitions], final review | - | [Web Components] |
| 15 | Thu, Dec 10 | **[Final Assessment]** | - | - |

## Assignments

| Assignment | Focus | Assigned | Due |
|:--|:--|:--|:--|
| [CSS Zen Garden] | Selectors, type & spacing, color, AI critique loop | Oct 20 | Oct 29 |
| [CSS Picture] | Position, transforms, gradients, custom properties, theming | Oct 27 | Nov 5 |
| [Fix the AI Page] | Critique, design brief, tokens, redesign, verification | Nov 3 | Nov 12 |
| [Microinteractions] | Transitions, animation, UI states, reduced motion | Nov 10 | Nov 19 |
| [CSS Framework] | `@layer`, design tokens, components, utilities | Nov 17 | Dec 1 |
| [Web Components] | Custom elements that use your framework's tokens | Nov 24 | Dec 8 |

Every assignment includes a **[Design Log]**, a short record of your decisions, your AI use, and how you verified your work.

## Design Formulas

The [Design Formulas cheat sheet] puts every design rule from this class on one page. Use it on every project and bring it to the final.

- [Type & Spacing]
- [Color]
- [Layout]
- [UI States & Motion]
- [Critique & AI as a Design Assistant]

## AI Policy

AI tools (Claude, ChatGPT, Copilot, v0, etc.) are part of professional front-end work, and you're encouraged to use them on **assignments** in this course, as long as you follow these rules:

1. **Disclose it.** Log significant prompts in your [Design Log]: what you kept, what you rejected, and why.
2. **Decide for yourself.** AI can propose; you choose. Your design decisions and reasons are what's graded.
3. **Verify it.** Check contrast, keyboard access, responsiveness, and reduced motion yourself. AI is often wrong about these.
4. **Explain it.** You must be able to explain every line you submit. Your instructor may ask you to walk through any part of your code.

Some assignments limit AI use for specific steps (for example, writing your own critique before asking an AI). Those instructions take precedence.

The **[Final Assessment]** is done **without AI tools**. It's open notes and measures your own judgment.

## Prerequisites

- [ACS 1700 Web Foundations](https://github.com/Tech-at-DU/ACS-1700-WEB-Web-Foundations)

## Course Specifics

**Course Delivery**: online | 8 weeks | 15 sessions

**Course Credits**: 3 units | 37.5 Seat Hours | 75 Total Hours

## Learning Outcomes

Students by the end of the course will be able to:

1. Select and style any element using selectors, specificity, and cascade layers
1. Apply repeatable formulas for type, spacing, hierarchy, and layout to produce clean, readable interfaces
1. Build color systems in OKLCH that meet WCAG AA contrast, with light and dark themes
1. Build responsive layouts with grid, flexbox, `clamp()`, and container queries
1. Design and implement complete UI states and purposeful motion that respect user preferences
1. Architect a token-driven CSS framework with `@layer` and custom properties
1. Build and style Web Components that consume design tokens
1. Critique an interface with a structured process, direct AI tools to improve it, and verify the results

## Evaluation

To pass this course you must meet the following requirements:

- Pass 70% of projects according to each project's rubric
- Pass the final assessment according to its rubric
    - See the [study guide][Final Assessment] for the format, rubric, and a practice page
- Actively participate in class and abide by the attendance policy
- Make up all classwork from all absences

## Reference Lessons

These lessons aren't on the schedule but cover background material you can use at any time:

- [CSS Review](lessons/lesson-01.md)
- [Typography: fonts, font stacks, loading fonts](lessons/lesson-02.md)
- [Box Model & Flexbox](lessons/lesson-03.md)
- [CSS Grid](lessons/lesson-05.md)
- [Navbars & Layout](lessons/lesson-08.md)
- [Styling Form Controls](lessons/lesson-09.md)
- [Media Queries](lessons/media-queries.md)
- [3D CSS](lessons/3d-css.md) and the [3D Mini Hackathon](https://github.com/Tech-at-DU/3d-css) (optional warm-ups)
- [View Transitions in SPAs](lessons/view-transitions-spa.md)

<!-- Lessons -->
[Selectors & Specificity]: lessons/specificity.md
[Type & Spacing]: lessons/design-type-spacing.md
[Color]: lessons/design-color.md
[Layout]: lessons/design-layout.md
[Critique & AI as a Design Assistant]: lessons/design-critique-ai.md
[UI States & Motion]: lessons/ui-states.md
[Design Formulas cheat sheet]: lessons/design-formulas.md
[Pseudo-elements]: lessons/lesson-pseudo-elements.md
[Background Images]: lessons/lesson-04.md
[Position]: lessons/lesson-position.md
[Custom Properties]: lessons/custom-properties.md
[Transition]: lessons/lesson-10.md
[Animation]: lessons/lesson-11.md
[CSS Layers]: lessons/css-layers.md
[CSS Framework Notes]: https://github.com/Tech-at-DU/css-framework-notes
[CSS Components]: lessons/css-components.md
[Web Components Part 1]: lessons/lesson-15.md
[Web Components Part 2]: lessons/lesson-16.md
[Styling Web Components]: lessons/styling-web-components.md
[Lit Element]: lessons/lit-element.md
[View Transitions]: lessons/view-transitions.md

<!-- Assignments -->
[CSS Zen Garden]: assignments/css-zen-garden.md
[CSS Picture]: assignments/css-picture.md
[Fix the AI Page]: assignments/fix-the-ai-page.md
[Microinteractions]: assignments/microinteractions.md
[CSS Framework]: assignments/css-framework.md
[Web Components]: assignments/web-components.md
[Design Log]: assignments/design-log.md
[Final Assessment]: assignments/final-assessment-study-guide.md
