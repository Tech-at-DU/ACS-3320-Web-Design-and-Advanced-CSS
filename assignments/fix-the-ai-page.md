# Assignment: Fix the AI Page

## Overview

AI tools can produce a complete web page in seconds. The page usually works, looks "fine," and looks like every other AI-generated page. It often has real problems too: low contrast, missing focus states, random spacing, and layouts that break on a phone.

In this assignment you'll **generate a generic page with AI, critique it like a professional, and redesign it** using the design formulas from class. You'll produce a before/after comparison and a written critique you could show in an interview.

This is the most realistic project in the course. On the job, you'll often be the person who turns a rough draft (from AI, a template, or a teammate) into something polished and accessible.

## What You Will Learn

- Critique a page with the 7-pass checklist
- Write feedback as Observation → Impact → Fix
- Write a design brief that gives a product a distinct feel
- Apply the type, spacing, color, layout, and state formulas to a real page
- Use AI as an assistant while staying in charge of the design decisions
- Verify accessibility and responsiveness with real tools

## Before You Start

Review these lessons:

- [Type & Spacing](../lessons/design-type-spacing.md)
- [Color](../lessons/design-color.md)
- [Layout](../lessons/design-layout.md)
- [Critique & AI as a Design Assistant](../lessons/design-critique-ai.md)
- [Design Formulas cheat sheet](../lessons/design-formulas.md)

---

## Step 1: Generate the "Before" Page

Pick **one** product from this list (or propose your own to your instructor):

- A neighborhood tool-lending library
- A study-group finder for college students
- A minimalist blogging app for long-form writers
- A plant-watering reminder app
- An indie bookstore's events page
- A local food truck tracker
- A habit tracker for developers

Use any AI tool. Paste **exactly** this prompt, filling in your product:

```
Make a landing page for [product]. Single HTML file with embedded CSS.
Include a header with navigation, a hero section, a features section,
a section with a list or cards of items, a sign-up form, and a footer.
Make it look modern.
```

Don't edit the prompt and don't regenerate to "get a better one." The point is to start from the default.

Save the result as `before/index.html`. **Don't change this file again.** Take screenshots at **375px** and **1280px** wide and save them as `before/mobile.png` and `before/desktop.png`.

## Step 2: Critique It

Create `CRITIQUE.md`. Run all **7 passes** from the critique lesson on your "before" page.

Requirements:

- At least **12 critique points**, with at least one from **each** of the 7 passes
- Every point written as **Observation → Impact → Fix**
- At least **3 points** must include a measurement (a contrast ratio, a count of font sizes, a pixel width where the layout breaks, etc.)
- A list of the **"AI defaults"** you can spot (see Part 2 of the critique lesson)
- Start the file with **2 things that work well** on the page

Do the critique **yourself**. You may ask an AI to critique the page *after* you've written yours. If it finds something you missed, add it and mark it `(found by AI)`. That's allowed and honest.

## Step 3: Write a Design Brief

At the top of your `DESIGN-LOG.md` (see the [Design Log](design-log.md) template), write a design brief:

- **Product, audience, and job:** what's the one thing a visitor should do?
- **Feel:** 3 adjectives + an analogy from **outside** software ("it should feel like a well-organized hardware store," "like a library card catalog")
- **Avoid:** at least 4 AI defaults you're deliberately removing
- **Constraints:** at least 2 hard constraints you'll hold yourself to (e.g., "no border-radius," "one accent color," "serif headings")

## Step 4: Build Your Tokens

Create `after/tokens.css` with:

- A **type scale** (base + ratio, 5–7 sizes)
- A **spacing scale**
- A **color system** in OKLCH: neutral ramp, one accent, semantic colors as needed, and **role** tokens (`--color-bg`, `--color-fg`, `--color-fg-muted`, `--color-border`, `--color-accent`, ...)
- A **dark theme** using `light-dark()`
- **Motion** tokens (durations and easing)

## Step 5: Redesign

Create `after/index.html` and `after/styles.css` (link `tokens.css` too).

- You **may** change the HTML: fix semantics, remove clutter, reorder sections. Keep the same content sections (header, hero, features, list/cards, form, footer).
- Every value in `styles.css` should come from a token. Exceptions (like `1px` borders) are fine if they're intentional.
- Apply **every Fix** from your critique, or explain in the log why you decided against one.
- Use at least one layout pattern without media queries (`auto-fit`/`minmax()` or `clamp()`).
- Use at least one **container query**.
- Every interactive element needs default, hover, focus-visible, active, and disabled (where relevant) states.
- The form needs styled `:user-invalid` error states.
- Include `prefers-reduced-motion` handling.

**Using AI in this step:** allowed and encouraged, with conditions:

- Use the prompting techniques from the lesson: a brief, spec first, design vocabulary, small iterations.
- Log every significant prompt in your design log: what you kept, what you rejected, and why.
- You must be able to explain every line you submit. Your instructor may ask you to walk through any part of your CSS.

## Step 6: Verify

Complete the verification checklist in your design log. Take **after** screenshots at 375px and 1280px, in both light and dark mode:

- `after/mobile.png`, `after/desktop.png`, `after/desktop-dark.png`

Run Lighthouse → Accessibility on both pages. Record both scores in `CRITIQUE.md`.

---

## Submission

Submit your GitHub repo to Gradescope. It must contain:

```
before/
  index.html
  mobile.png
  desktop.png
after/
  index.html
  tokens.css
  styles.css
  mobile.png
  desktop.png
  desktop-dark.png
CRITIQUE.md
DESIGN-LOG.md
README.md        ← 1 paragraph: the product, your design direction, and a link to the live page
```

Publish the `after/` page with GitHub Pages and link it in your README.

**Stretch goals** (optional):

- Add a theme toggle that sets `data-theme` on `<html>`
- Add a `@view-transition` between the page and a second page
- Write a "before vs after" section in your README with the screenshots side by side, as a portfolio piece

---

## Rubric

| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** | **Points** |
|:--|:--|:--|:--|:--:|
| **Critique** | Fewer than 12 points, vague ("looks bad"), or missing passes. | 12+ points covering all 7 passes in Observation → Impact → Fix format, with 3+ measurements. | Sharp, specific critique. Measurements throughout, AI defaults clearly identified, and the fixes prioritized by impact. | /10 |
| **Brief & Tokens** | Brief missing or generic. Tokens incomplete, or values hard-coded in styles. | Brief has a clear feel, avoids, and constraints. Complete type, spacing, color (with roles and dark theme), and motion tokens. | Brief gives the page a distinct identity that clearly differs from the AI default. Tokens are thoughtful and consistently used. | /10 |
| **Redesign Quality** | Little visible improvement. Hierarchy, spacing, or alignment problems remain. | Clear hierarchy, consistent spacing, few edges, readable type, and a coherent color system. Critique fixes applied. | The page looks intentional and distinct. Each formula is visibly applied and the result follows the brief. | /15 |
| **Accessibility & Responsiveness** | Contrast failures, missing focus states, or broken layouts at mobile sizes. | AA contrast, visible focus, full state coverage, form errors, reduced motion, no overflow from 320 to 1440px, a container query used. | Lighthouse accessibility near 100, polished states, and layout that adapts gracefully at every width. | /10 |
| **Design Log & AI Use** | Missing, or lists changes with no reasons. AI use undisclosed. | Decisions linked to formulas or critique points. AI prompts logged with kept/rejected. Verification recorded. | The log shows real judgment: rejected ideas, reasoning, and changes made by hand. Reads like a professional case study. | /5 |

### Total Points: /50
