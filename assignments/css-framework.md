# Assignment: CSS Framework

## Overview

So far you've built pages. This time you'll build a **tool other developers use to build pages**.

A CSS framework is a single CSS file. A developer adds one `<link>` tag, and their plain HTML looks good with **no classes**. When they need more, such as a button or a card, they add a class from your framework.

You've used tools like this. [Pico](https://picocss.com), [Water.css](https://watercss.kognise.dev), and [Simple.css](https://simplecss.org) are classless frameworks: same HTML, different `<link>`, completely different look. Tailwind and Bootstrap work the same way, with more classes. You're building a small one of your own.

**Your users are other developers.** That changes what "done" means:

- It works on HTML **you didn't write**, not just your demo page.
- It's built from **tokens**, so a developer can re-theme it by changing a few values.
- It has a **README** that explains how to use it.

## What You Will Learn

- Organize CSS into cascade layers with `@layer`
- Build a design token system with type, spacing, color role, and motion tokens
- Write a classless base that styles semantic HTML
- Design opt-in components and utilities that use the tokens
- Document a tool so someone else can use it

## Starter Files

Copy the [css-framework-starter](css-framework-starter/) folder into a new repo:

- [`demo.html`](css-framework-starter/demo.html): a test page with about 45 HTML elements, one section per group. **Don't add classes or a `<style>` tag to it.**
- [`framework.css`](css-framework-starter/framework.css): a skeleton with the layers declared and a comment for each group of elements. Rename it to your framework's name, for example `ember.css`, and update the `<link>` in `demo.html`.

## Releases

You'll ship the framework in three versions. Each one builds on the last. Commit each one with the version in the message, for example `git commit -m "v0.1: tokens and text"`.

| Version | Due | What it contains |
|:--|:--|:--|
| **v0.1** | Thu, Nov 19 | Layers, tokens, and text styles |
| **v0.2** | Tue, Nov 24 | The complete classless base |
| **v1.0** | Tue, Dec 1 | Components, utilities, the real-world test, and the README. **Submit this one.** |

v0.1 and v0.2 are checkpoints: show them in class. Only v1.0 is graded.

---

## v0.1: Layers, Tokens, and Text (due Thu, Nov 19)

### Layers

Keep the layer order from the starter:

```css
@layer tokens, base, components, utilities, overrides;
```

| Layer | Contains | Example |
|:--|:--|:--|
| `tokens` | Custom properties only | `--space-md: 1rem;` |
| `base` | Element selectors only, no classes | `h1 { ... }` |
| `components` | Opt-in classes for UI pieces | `.button { ... }` |
| `utilities` | Single-purpose classes | `.text-center { ... }` |
| `overrides` | Left empty. It's for developers who use your framework. | |

### Tokens

Start from the `tokens.css` you built for Fix the AI Page. Paste it into the `tokens` layer and fill in any gaps:

- **Type:** a type scale (base + ratio), in `rem`
- **Spacing:** a spacing scale
- **Color:** a neutral ramp and one accent in OKLCH, exposed as **role** tokens: `--color-bg`, `--color-surface`, `--color-fg`, `--color-fg-muted`, `--color-border`, `--color-accent`, `--color-on-accent`, `--color-focus`
- **Radius, borders, and shadows**, if you use them
- **Motion:** durations and easing

**Everything outside the tokens layer uses role tokens, never raw ramp values.** That's what makes re-theming work: change `--color-accent` and every button, link, and focus ring follows.

### Text

In the `base` layer, style the **Typography** and **Links** sections of `demo.html`: `body`, `h1`–`h6`, `p`, the inline text elements, `blockquote`, `q`, and `a` in every state (`:link`, `:visited`, `:hover`, `:active`, `:focus-visible`).

**v0.1 is done when:** the first two sections of `demo.html` look intentional with only your framework linked, and every value comes from a token.

---

## v0.2: The Complete Classless Base (due Tue, Nov 24)

Style **every element** in `demo.html`, in the `base` layer, with no classes. Work through the page one section at a time, using the comments in the starter file:

- Lists: `ul`, `ol`, `li`, `dl`, `dt`, `dd`
- Code: `code`, `pre`, `kbd`, `samp`
- Media: `img`, `figure`, `figcaption`, `hr`
- Tables: `table`, `caption`, `th`, `td`, `thead`, `tbody`, `tfoot`
- Forms: `fieldset`, `legend`, `label`, `input`, `select`, `textarea`, `button`
- Misc: `details`, `summary`, `::selection`

**Accessibility, built in:**

- Visible `:focus-visible` on every link, button, and form field
- WCAG AA contrast for all text
- No horizontal scroll from 320px to 1440px
- Buttons have default, hover, focus-visible, active, and disabled states

**v0.2 is done when:** nothing on `demo.html` uses browser default styling. Check it at 375px and 1280px.

---

## v1.0: Components, Utilities, and the Real Test (due Tue, Dec 1)

### Components (in `@layer components`)

Build these **three**:

| Component | Must have |
|:--|:--|
| **Button** | A base class, 2 color variants (e.g., primary and secondary), 1 size variant, and every state from your state matrix |
| **Card** | A base class, a header/body/footer structure, and 1 visual variant (e.g., elevated or bordered) |
| **Alert** | A base class and 2 variants (e.g., info and warning) with AA contrast |

Plus **one** of these:

- **Badge:** a small inline label that works inside text, cards, and buttons
- **Navbar:** a container, links, and a current-page state (`[aria-current="page"]`)
- **Accordion:** styled `<details>` and `<summary>`, open and closed states
- **Table variant:** `.table-striped` or `.table-compact`
- **Form group:** label + input + help text + error message, with `:user-invalid`
- **Progress bar:** a track, a fill, and 1 variant

Use one **naming convention** for every class (see the [Components lesson](../lessons/css-components.md)).

### Utilities (in `@layer utilities`)

Create **4 utilities** in at least **2 categories**: display, spacing, text, or color. Each one does exactly one thing, uses a token, and is a single class:

```css
@layer utilities {
  .text-center { text-align: center; }
  .text-muted  { color: var(--color-fg-muted); }
  .mt-lg       { margin-top: var(--space-lg); }
  .flex        { display: flex; }
}
```

### One enhancement

Pick **one**:

- **Dark theme** with `light-dark()` that passes AA contrast in both themes
- **Motion:** transitions on interactive states, with `prefers-reduced-motion` handled
- **Fluid type:** headings and spacing scale with `clamp()`
- **Print styles:** a `@media print` block that produces a clean printout

### The real-world test

A framework has to work on pages you didn't design for it.

1. Take `before/index.html` from your Fix the AI Page project.
2. Delete its `<style>` block and link your framework instead.
3. Save it as `test.html`, and take a screenshot: `test.png`.
4. In your README, write **3 sentences**: what worked, what broke, and what you changed in your framework because of it.

### README

Write it for a developer who has never seen your framework:

- **What it is:** one paragraph, including its look and feel
- **Install:** the `<link>` tag
- **Tokens:** the 5–10 most important tokens, and how to re-theme by changing them
- **Components:** each class, with a short HTML example
- **Utilities:** a list
- A screenshot of `demo.html`, and a link to the live page on GitHub Pages

### Design log

`DESIGN-LOG.md` (see the [template](design-log.md)) with your token decisions, a **state matrix** for the button, and your AI use.

## Submission

Submit your repo to Gradescope. It must contain:

```
your-framework.css
demo.html
test.html
test.png
README.md
DESIGN-LOG.md
```

## Using AI on this project

AI is useful for the **tedious parts**, as long as you make the design decisions:

- **Audit:** "List every literal value in this CSS that should be a token. Output selector | property | value | suggested token."
- **Coverage:** "Here is demo.html and my base layer. Which elements still use browser defaults?"
- **States:** "For my button component, list missing states from this checklist: hover, focus-visible, active, disabled."
- **Docs:** "Write a usage example for each class in this file." Then check that the examples are correct.

Don't ask AI to "write a CSS framework." You'll get a generic Bootstrap clone that doesn't use your tokens, and you won't be able to explain it. Log the prompts you use in your design log.

## Rubric

| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** | **Pts** |
|:--|:--|:--|:--|:--:|
| **Classless Base** | Many demo elements still use browser defaults, or the hierarchy is unclear. | Every element in `demo.html` is styled with no classes. Readable type, and spacing follows Inside < Between. | The plain HTML page looks like a polished, intentional design. | /10 |
| **Tokens & Layers** | Few tokens, or `@layer` is missing or misused. | Layer order declared and respected. Type, spacing, color role, and motion tokens are used throughout, with no raw ramp values outside tokens. | Changing a few tokens re-themes everything, with no other edits. | /10 |
| **Components & Utilities** | Required components missing, or values hard-coded. | Button, card, alert, plus 1 optional component, and 4 utilities. All token-driven, one naming convention. | Components have complete states and variants, and utilities complement them cleanly. | /10 |
| **Accessibility** | Contrast failures, missing focus states, or the layout breaks on mobile. | AA contrast, visible focus everywhere, full button state matrix, no overflow from 320 to 1440px. | Accessibility is designed in: keyboard-friendly components and contrast checked in every variant. | /10 |
| **Real-World Test & Enhancement** | `test.html` missing, or the enhancement is missing or broken. | `test.html` works and the README reflection is honest. One enhancement works. | The test led to real framework improvements, and the enhancement is polished. | /5 |
| **README & Design Log** | README or log missing or unhelpful. | README explains install, tokens, components, and utilities with examples. Log has token decisions, a state matrix, and AI use. | A developer could adopt the framework from the README alone. | /5 |

**Total: /50**
