# Design Log

Every project in this course includes a design log. It's a short Markdown file (`DESIGN-LOG.md`) in the root of your repo that records **what you decided, why, and how you checked it.**

## Why?

- Your design thinking becomes visible. A grader, teammate, or interviewer can see *why* the page looks the way it does.
- It turns AI use into a skill you can show. Anyone can paste a prompt. Choosing what to keep, rejecting what doesn't fit, and verifying the result is the actual work.
- Writing down a reason forces you to have one.

**Keep it short.** Bullet points are fine. Aim for 5–10 entries per project. Update it as you work, not the night it's due.

## Template

Copy this into `DESIGN-LOG.md`:

```markdown
# Design Log: [Project Name]

## Brief
- **Product / page:** 
- **Audience:** 
- **Job:** (the one thing a user does here)
- **Feel:** (3 adjectives + "it should feel like ___")

## Tokens
- Type scale: base ___, ratio ___
- Spacing scale: ___
- Colors: hue ___, accent ___, neutrals ___
- (link to the file where the tokens live)

## Decisions

### 1. [Short title, e.g., "Increased section spacing"]
- **What:** 
- **Why:** (which formula or critique point? e.g., "Inside < Between: cards and sections had the same spacing")
- **Verified:** (how you checked it: screenshot, DevTools contrast, Tab test, 320px test)

### 2. ...

## AI Use

### Prompt 1
- **Tool:** 
- **Prompt:** (paste it, or summarize if very long)
- **Kept:** 
- **Rejected and why:** 
- **What I changed by hand:** 

### Prompt 2
...

(If you didn't use AI, write "No AI used.")

## Verification Checklist
- [ ] All text passes WCAG AA contrast (checked in DevTools / Lighthouse)
- [ ] Every interactive element has a visible `:focus-visible` style
- [ ] No horizontal scroll from 320px to 1440px
- [ ] Works at 200% zoom
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Spacing and font sizes come from tokens
- [ ] I can explain every line of CSS in this project

## Reflection
2–4 sentences: What are you most proud of? What would you change with more time?
```

## Grading

Each assignment rubric includes the design log. A strong log:

- Connects decisions to specific formulas or critique points
- Shows at least one thing you **rejected** (from AI, from a classmate, or your own first idea) and why
- Shows real verification, not just checked boxes

A weak log only lists what was done ("Changed font to Georgia") with no reasons.

## Example Entry

> ### 3. Card titles
> - **What:** Card titles went from 16px/400 to `--font-size-lg`/600. Card descriptions changed to `--color-fg-muted`.
> - **Why:** Squint test: titles and descriptions blurred together (Hierarchy formula, levers 1, 2, and 3).
> - **Verified:** Before/after screenshots blurred at 4px. Titles now read first. Muted text contrast is 6.2:1 in DevTools.

> ### AI Prompt 2
> - **Tool:** Claude
> - **Prompt:** "Give me 3 accent colors in OKLCH for a calm, focused writing app. Avoid purple."
> - **Kept:** The muted green, `oklch(0.52 0.09 160)`.
> - **Rejected:** The terracotta option. It looked warm but was the same hue family as the warning color, which caused confusion.
> - **Changed by hand:** Dropped chroma from 0.12 to 0.09. At 0.12 the links felt too loud next to the long body text.
