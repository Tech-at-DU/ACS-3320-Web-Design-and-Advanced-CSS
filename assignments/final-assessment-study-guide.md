# ACS 3320 Final Assessment Study Guide

## Format: Critique & Fix

The final assessment is a hands-on version of what you've done all term. You'll get a small web page (HTML + CSS) that has **design, accessibility, and CSS architecture problems**. Your job is to find them, name them, and fix them.

- **When:** the last class session, for the full class period
- **Open notes:** your own repos, the course lessons, the [Design Formulas cheat sheet](../lessons/design-formulas.md), and MDN
- **No AI tools, and no communicating with other people.** This assessment measures *your* judgment, the skill you've been building every time you reviewed and rejected AI output this term.

### Part 1: Critique (about 45 minutes, 30%)

Run the 7-pass critique on the page. Write **at least 10** problems in **Observation → Impact → Fix** format, in a file named `CRITIQUE.md`. Include measurements where you can (contrast ratios, number of font sizes, width at which the layout breaks).

### Part 2: Fix (about 90 minutes, 60%)

Refactor the CSS to fix the problems you found. You'll typically need to:

- Create tokens (type scale, spacing scale, color roles) and replace hard-coded values
- Fix contrast failures
- Add missing states, especially `:focus-visible`
- Fix a layout that breaks on small screens
- Untangle a specificity problem without `!important`
- Organize the CSS into `@layer`s
- Add `prefers-reduced-motion` handling

You may change the HTML only to fix semantics (e.g., a `div` that should be a `button`).

### Part 3: Explain (about 15 minutes, 10%)

Short written answers: pick your three most important fixes and explain why each one matters to users. You may also get one or two concept questions from the topic list below.

### Rubric

| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** | **Points** |
|:--|:--|:--|:--|:--:|
| **Critique** | Fewer than 10 problems, or vague. | 10+ problems in O → I → F format across most of the 7 passes. | Precise, measured, and prioritized; catches subtle issues. | /15 |
| **Design Fixes** | Few visible improvements. | Type and spacing on scales, clear hierarchy, aligned layout, AA contrast. | The page is transformed: clean, consistent, and intentional. | /15 |
| **CSS Architecture & Accessibility** | Hard-coded values remain; no focus states; layout still breaks. | Tokens and layers used; specificity fixed; focus states and reduced motion added; works 320–1440px. | Clean, well-organized CSS a teammate could maintain. | /15 |
| **Explanation** | Missing or unclear. | Explains why the fixes matter to users. | Clear, concise, and uses course vocabulary correctly. | /5 |

### Total Points: /50

## Practice

A practice page is in [final-practice/](final-practice/). It has **at least 15** planted problems. Do it under real conditions: set a timer for 2.5 hours, no AI, open notes only. Then compare critiques with a classmate.

---

## Topics to Review

### Design formulas

- **Spacing:** the scale, Inside < Between, heading spacing, `gap`
- **Type:** the scale (base × ratio), body size/line height/line length, heading line height, number of sizes and families
- **Hierarchy:** the four levers (size, weight, color, space), three levels of text, the squint test
- **Color:** neutrals + one accent, role tokens, OKLCH (L, C, H), contrast rules (4.5:1, 3:1), `light-dark()`, `color-mix()`
- **Layout:** the patterns (column, sidebar, grid, split, stack, cluster), few edges, one focal point, `auto-fit`/`minmax()`, `clamp()`, container queries
- **States:** the state checklist and state matrix, `:focus-visible`, `:disabled`, `:user-invalid`, `[aria-current]`
- **Motion:** duration and easing formula, cheap properties, `prefers-reduced-motion`
- **Critique:** the 7 passes, Observation → Impact → Fix

### CSS

- **Selectors:** combinators, attribute selectors, structural pseudo-classes, `:has()`, `:not()`, `:is()`, `:where()`, pseudo-elements
  - Practice: [CSS Diner](https://flukeout.github.io)
- **Specificity:** calculate it; fix conflicts without `!important`; `:where()` for zero specificity
- **Cascade layers:** `@layer` order, how layered styles compare to unlayered styles
- **Custom properties:** scope, inheritance, fallbacks, overriding in a theme or component
- **Layout:** flex and grid
  - Practice: [Flexbox Froggy](https://flexboxfroggy.com), [Grid Garden](https://cssgridgarden.com)
- **Position, transform, gradients, clip-path**
- **Transitions and animations:** `transition`, `@keyframes`, `animation` properties
- **Web Components styling:** `:host`, `::part()`, `::slotted()`, custom properties crossing the shadow boundary

### Sample concept questions

1. Which wins: `#nav a` or `.nav .link:hover`? Why?
2. A rule in `@layer base` has higher specificity than an unlayered rule. Which applies?
3. Why use `:focus-visible` instead of `:focus`?
4. Body text is `oklch(0.7 0 0)` on `oklch(0.98 0 0)`. Will it pass AA? How would you check?
5. Your framework sets `--color-accent` on `:root`. How does a Web Component with a shadow root use it?
6. Why animate `transform` instead of `left`?
7. A card grid overflows at 320px. Name two likely causes.
