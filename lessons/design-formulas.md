# Design Formulas Cheat Sheet

You don't need to be a "designer" to make clean, readable interfaces. Most good-looking UI follows a small set of rules. This page collects the rules we use in this class. Use it on every assignment, and bring it to the final assessment.

Each formula has a full lesson:

- [Type & Spacing](design-type-spacing.md)
- [Color](design-color.md)
- [Layout](design-layout.md)
- [UI States & Motion](ui-states.md)
- [Critique & AI as a Design Assistant](design-critique-ai.md)

---

## 1. Spacing

**Use a scale. Never invent a number.**

| Token | Value |
|:--|:--|
| `--space-xs`  | 0.25rem (4px) |
| `--space-sm`  | 0.5rem (8px) |
| `--space-md`  | 1rem (16px) |
| `--space-lg`  | 1.5rem (24px) |
| `--space-xl`  | 2rem (32px) |
| `--space-2xl` | 3rem (48px) |
| `--space-3xl` | 4rem (64px) |
| `--space-4xl` | 6rem (96px) |

- **Inside < Between.** Space inside a group must be smaller than space between groups. (Proximity)
- **A heading belongs to what follows it.** Space above a heading > space below it.
- When in doubt, **add more space**, then go one step bigger.

## 2. Type

- **One font family** (two max: one for headings, one for body).
- **Size scale with ratio 1.25:** `0.8, 1, 1.25, 1.563, 1.953, 2.441, 3.052rem`. Use 5–6 sizes total.
- **Body:** `1rem`–`1.125rem`, `line-height: 1.5`, line length `max-width: 65ch`.
- **Headings:** `line-height: 1.1–1.25`, weight 600–700, `text-wrap: balance`.
- **Hierarchy order:** size → weight → color → space. Change one or two, not all four.
- **Three text colors only:** primary, secondary (muted), and accent/link.

## 3. Color

- **Mostly neutrals + one accent.** Neutrals do 90% of the work. Accent = "click here / look here."
- **Semantic colors only for meaning:** success, warning, danger, info.
- **Build in OKLCH:** keep hue and chroma, step the lightness.
- **Contrast rule of thumb (OKLCH lightness gap):** text vs. background `ΔL ≥ 0.45`; borders, icons, focus rings `ΔL ≥ 0.35`. **Always verify** in DevTools.
- **WCAG AA:** 4.5:1 body text, 3:1 large text (24px+ or 19px+ bold), 3:1 UI components and focus indicators.
- **Dark mode:** flip the lightness ramp with `light-dark()`. Don't just invert.

## 4. Layout

- **Pick a pattern, don't invent one:** centered column, sidebar, card grid, split, or stack.
- **Few edges.** Everything aligns to as few vertical lines as possible. One container width for the whole page.
- **Left-align text.** Center only short things (a hero headline, a button label).
- **One focal point per screen.** One primary button per view.
- **Responsive without breakpoints where possible:** `repeat(auto-fit, minmax(16rem, 1fr))`, `clamp()`, container queries.
- **Test at 320px and 1440px.** No horizontal scroll, ever.

## 5. UI States

Every interactive thing needs:

| State | CSS |
|:--|:--|
| default | — |
| hover | `:hover` |
| focus | `:focus-visible` (never remove without replacing) |
| active / pressed | `:active`, `[aria-pressed="true"]` |
| disabled | `:disabled`, `[aria-disabled="true"]` |
| current / selected | `[aria-current]`, `[aria-selected="true"]`, `:checked` |

Data-driven components also need: **loading, empty, error, success.**

## 6. Motion

- **Durations:** 100–150ms small feedback, 200–300ms standard, 300–500ms large/entering.
- **Easing:** `ease-out` for things entering or responding, `ease-in` for leaving, `ease-in-out` for moving across.
- **Animate `transform` and `opacity`** whenever possible.
- **Motion must mean something:** feedback, orientation, or attention. If it's decoration, it's optional.
- **Always** provide `@media (prefers-reduced-motion: reduce)`.

## 7. Critique Checklist (the 7 passes)

1. **Squint:** what do you see first? Is that the most important thing?
2. **Alignment:** count the vertical edges. Fewer is better.
3. **Spacing:** every value on the scale? Inside < between?
4. **Type:** how many sizes, weights, families? Line length ≤ 75ch?
5. **Color:** how many colors? Does each one mean something? Contrast passes?
6. **States & access:** tab through it. Visible focus? Works at 200% zoom? Reduced motion?
7. **Responsive:** 320px, 768px, 1440px. Anything break, overflow, or float alone?

Write each problem as **Observation → Impact → Fix**:

> *Observation:* The card titles and body text are both 16px regular.
> *Impact:* No hierarchy; users can't scan the cards.
> *Fix:* Titles to `--font-size-lg` and weight 600.

## 8. Prompting AI for Design

```
Product:     what it is
Audience:    who uses it
Job:         the one thing a user does here
Feel:        3 adjectives + "it should feel like ___" (something outside software)
Avoid:       the defaults you don't want
Constraints: my tokens, fonts, layout rules
Output:      a written design spec first. No code yet.
```

Then iterate using the vocabulary on this page ("tighten the spacing inside the card to `--space-md`, increase the space between cards to `--space-xl`"), not "make it pop."
