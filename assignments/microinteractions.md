# Assignment: Microinteractions

## Overview

Design and build a set of **three interactive or animated interface elements** using CSS. These small animations, called *microinteractions*, give users feedback ("your click worked"), orientation ("this panel came from over there"), and occasionally delight.

Good microinteractions are mostly invisible. Users don't notice them, but they notice when they're missing. That's why this assignment cares as much about **states** and **purpose** as it does about animation technique.

## What You Will Learn

- Create and control animations with `@keyframes` and `animation`
- Use `transition` to smooth changes between states
- Choose durations and easing with the motion formula
- Plan components with a **state matrix**
- Trigger motion from parents, siblings, and form state with `:hover`, `:focus-visible`, `:checked`, and `:has()`
- Respect `prefers-reduced-motion`

## Before You Start

Review:

- [UI States & Motion](../lessons/ui-states.md)
- [Transition](../lessons/lesson-10.md)
- [Animation](../lessons/lesson-11.md)
- Example code: https://github.com/Tech-at-DU/transition-examples

## Requirements

Create **three animated elements**, each showing a different type of microinteraction:

1. **Looping animation:** a logo, loading indicator, or progress timer built with `@keyframes` that repeats.
2. **Interactive control:** a button, icon button, toggle, or link that responds to **hover, focus-visible, active, and disabled** states using transitions and transforms.
3. **Triggered animation:** something that plays from start to finish when triggered: a notification that slides in and fades, a checkbox that animates its check, a form field that shakes on error, an accordion that opens.

### For every element

- **State matrix:** include a state matrix (see the [UI States lesson](../lessons/ui-states.md#formula-2-the-state-matrix)) in your design log listing every state and what changes.
- **Motion has a job:** in a comment, name the job: feedback, orientation, attention, or delight.
- **Motion tokens:** durations and easing come from custom properties (e.g., `--duration-fast`, `--ease-out`), following the motion formula.
- **Cheap properties:** animate `transform` and `opacity` wherever possible.

### Overall

- **HTML and CSS only.** No JavaScript.
- At least one `@keyframes` animation and at least one `transition` with custom duration and easing.
- At least one interaction triggered from a **parent or sibling** (e.g., `.card:hover .icon`, `input:checked + label`, `.field:has(:user-invalid)`).
- Visible `:focus-visible` styles on everything interactive.
- A `@media (prefers-reduced-motion: reduce)` block that removes or replaces motion. Looping animations must stop or become a gentle fade.
- Use your design tokens (or create a small set) for color and spacing.
- Include a [Design Log](design-log.md).

### Bonus challenge

Build all three inside a **form**: an animated sign-up or login form. Use `:focus-visible`, `:checked`, `:user-invalid`, and `:has()` to trigger motion. Ideas:

- https://codepen.io/dsenneff/pen/2d338b0adf97472ebc5d473cf1fa910b
- https://www.npmjs.com/login
- https://codepen.io/Mr_Dzi/pen/WpeYNQ
- https://codepen.io/jakegilesphillips/pen/MveNLe (not a form, but could be)

## Strategies

- **State matrix first.** Fill in the table before writing CSS. It tells you exactly which selectors you need.
- **Which selectors?** Is the motion triggered by the element itself, its parent, or a sibling? This is the most important question on this list. If it's unclear, study the [transition examples](https://github.com/Tech-at-DU/transition-examples).
- **Structure.** Do you need an extra element, or can `::before` and `::after` do the job?
- **Start subtle.** Small changes in scale (0.97–1.05), short durations (150–250ms), and `ease-out` feel professional. Big, slow, bouncy motion feels like a toy, unless that's the goal.
- **Parameterize.** Custom properties for durations, distances, and colors keep it DRY and make tuning fast.
- **Test reduced motion** in DevTools → Rendering → "Emulate CSS media feature prefers-reduced-motion."
- **AI tip:** ask an AI to review your component against the state checklist and list missing states. Don't ask it to "make a cool animation." You'll get something generic and you won't learn the timing yourself.

## Submission

Submit your GitHub repo to Gradescope with:

- HTML and CSS files
- `DESIGN-LOG.md` with a state matrix for each element
- `README.md` with a link to the live page (GitHub Pages)

## Resources

- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation), [Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition), [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Easings.net](https://easings.net/) and [cubic-bezier.com](https://cubic-bezier.com) for timing curves
- CodePen: search "CSS microinteractions"

---

## Rubric

| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** | **Points** |
|:--|:--|:--|:--|:--:|
| **Requirements** | Missing an element, uses JavaScript, or no parent/sibling trigger. | All three elements work with CSS only; keyframes, transition, and parent/sibling trigger present. | Each element is distinct and polished; bonus form attempted. | /10 |
| **Motion Quality** | Abrupt, sluggish, or animates expensive properties for no reason. | Durations and easing follow the motion formula and come from tokens; mostly transform/opacity. | Timing feels natural and refined; easing chosen deliberately for entering, leaving, and moving. | /10 |
| **States & Accessibility** | Missing focus or disabled states; no reduced-motion handling. | Full state coverage per the matrix; visible focus; reduced motion handled. | States are clear and consistent; reduced motion swaps in thoughtful alternatives instead of just turning motion off. | /10 |
| **Purpose & Design** | Motion is decorative or distracting; visually generic. | Every animation has a named job and supports usability; visually cohesive. | Interactions feel intuitive and delightful without getting in the way. | /10 |
| **Code Quality & Design Log** | Disorganized; no state matrices. | Clean, commented CSS; state matrix and job for each element in the log. | Very readable, DRY code; log explains timing decisions and what was tried and rejected. | /10 |

### Total Points: /50
