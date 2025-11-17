# CSS Framework

Imagine you’ve joined a small product team that needs a **drop-in CSS framework** for:

* marketing pages
* docs/blog content
* internal tools

The team wants:

* **Good defaults** for semantic HTML (headings, text, tables, forms, etc.).
* **No required classes** for basic pages (it should “just work” with plain HTML).
* A **design token system** so future Web Components and custom pages can plug into the same look & feel.

In the future we will expand this framework with components. 

## Learning Outcomes

By the end of this project you should be able to:

* Design a layered CSS architecture using `@layer`.
* Build a **classless base** that styles semantic HTML without extra markup.
* Use **CSS custom properties** as design tokens for colors, spacing, typography, and more.
* Ensure basic **accessibility** (contrast, focus styles, keyboard navigation).
* Ship a **small, documented CSS framework** that someone else can adopt.

## Project Scope

You are building **v1 of the framework**: the CSS file and demo page.

### 1. Core Requirements

#### 1.1 Architecture & Layers

Your framework must:

* Live in a single CSS file, e.g. `acsd.css`.
* Declare a layer structure at the top:

```css
@layer tokens, base, components, utilities, overrides;
```

Use these layers as follows:

* **tokens** – design tokens (colors, spacing, typography, radius, shadows, etc.). No raw element rules here!
* **base** – element selectors only (`body`, `h1`, `p`, `a`, `table`, `form`, etc.). No classes should defined here!
* **components** – optional component classes (e.g. `.btn`, `.card`, `.banner`).
* **utilities** – optional single-purpose helpers (e.g. `.text-center`, `.mt-2`).
* **overrides** – for developers integrating the framework (you may use this later).

#### 1.2 Classless Base Styling

Your framework must provide **sane, attractive defaults** for semantic HTML.

* It should style **all tags** in the demo HTML (see “Demo HTML” section) without requiring any extra classes or IDs.
* The result should look like a coherent, intentional design, not random browser defaults.

Minimum expectations in the **base** layer:

* `body`, `main`, `section`, `header`, `footer`
* `h1–h6`, `p`, `strong`, `em`, `blockquote`, `code`, `pre`, `q`
* `ul`, `ol`, `li`, `dl`, `dt`, `dd`
* `a` in all interactive states (`:link`, `:hover`, `:active`, `:visited`, `:focus-visible`)
* `table`, `thead`, `tbody`, `th`, `td`
* `figure`, `figcaption`, `img`
* `form`, `fieldset`, `legend`, `label`, `input`, `textarea`, `select`, `button`

#### 1.3 Design Tokens (Custom Properties)

All important values should come from **CSS custom properties** in the `tokens` layer:

```css
@layer tokens {
  :root {
    --font-family-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-size-body: 1rem;
    --font-size-h1: 2.25rem;
    --font-size-h2: 1.75rem;
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --radius-sm: 0.2rem;
    --radius-md: 0.5rem;

    --color-bg: oklch(0.97 0.02 250);
    --color-fg: oklch(0.20 0.03 250);
    --color-accent: oklch(0.65 0.12 260);
    --color-border: oklch(0.85 0.02 250);

    /* etc… */
  }
}
```

Then consume them everywhere else:

```css
@layer base {
  body {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-body);
    color: var(--color-fg);
    background-color: var(--color-bg);
    line-height: 1.5;
    margin: 0;
  }
}
```

**Rule of thumb:** if you type the same literal value more than once, it probably should be a token.

#### 1.4 Accessibility Requirements

Your framework must:

* Provide **visible focus states** for links, buttons, and form fields using your token system.
* Aim for **WCAG AA-level contrast** on text vs background.
* Preserve semantic structure (don’t suppress outlines or remove focus without giving something better in return).

You do **not** need to be a full a11y expert, but lazy anti-patterns (e.g. `outline: none` with no replacement) will cost you points!

### 2. Optional Enhancements (Pick **at least 2**)

These should live in the appropriate layers (`components` or `utilities`):

* **Custom form styling**
  Make inputs, selects, textareas, and buttons visually cohesive and clearly interactive.

* **Theming support**
  Use tokens to define at least two themes (e.g. light/dark) using a theme class on `html` or `body` (e.g. `.theme-dark`). All colors should switch via custom properties.

* **Print stylesheet**
  Add `@media print` rules to produce a clean print layout with simplified colors and no extraneous chrome.

* **Micro-interactions**
  Add minimal transitions for hover/focus/active states (e.g. for buttons, links, cards) without going overboard.

### 3. Demo HTML

Use the provided **Web Developer’s Roadmap** HTML (unchanged) as your primary test page.

* Link your CSS framework in the `<head>`:

```html
<link rel="stylesheet" href="acsd.css">
```

* You may add **additional layout-only styles** in the `<style>` tag inside the document if needed, but this should be minimal. Anything that feels like a reusable pattern (spacing, typography, colors, buttons, form patterns) should move into the framework.

Goal:

* The page should look “nice” with **just your framework linked**.
* The inline `<style>` is reserved for project-specific layout or tweaks a developer might add on top.

### 4. Submission Instructions

Submit via Gradscope:

Your repository must contain:

1. `acsd.css` (or similar) – your framework file with layers and tokens.
2. `demo.html` – the provided roadmap HTML, linked to your CSS.
3. `README.md` containing:

* A one-paragraph description of the framework’s purpose.
* How to use it (link tag, expected markup).
* A short explanation of your layer structure and token system.
* Any optional features you implemented (themes, utilities, components, etc.).

### 6. Grading Rubric (50 pts)

| **Criteria**                       | **Does Not Meet**                                                                                               | **Meets Expectations**                                                                                             | **Exceeds Expectations**                                                                                                                | **Pts** |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| **Base HTML Styling**              | Many elements from the demo HTML are unstyled or obviously using browser defaults. Visual hierarchy is unclear. | Most elements are styled with a coherent look. Hierarchy and spacing are mostly intentional; minor rough edges.    | All elements are styled with a clear, consistent visual system. The page feels like a small, polished design system.                    | /15     |
| **Tokens & Layers**                | Little or no use of custom properties. `@layer` is missing or misused. Tokens are inconsistent or unused.       | `@layer` is correctly declared. Tokens exist for key values and are used in base styles. Some duplication remains. | Thoughtful token system (colors, spacing, typography, radii, etc.) with clean use across layers. Layer roles are clearly separated.     | /15     |
| **Accessibility & Responsiveness** | Poor contrast, missing focus states, or layout breaks on mobile. Keyboard navigation is painful.                | Contrast is generally acceptable. Focus styles exist. Layout works on mobile and desktop with only small issues.   | Strong contrast choices, clear focus states, and robust behavior across a range of viewport sizes. Accessibility is clearly considered. | /10     |
| **Enhancements (2+ chosen)**       | Fewer than 2 enhancements, or enhancements are broken / poorly integrated.                                      | At least 2 enhancements implemented and working (e.g., theming, form styling, print, micro-interactions).          | Enhancements are polished, well integrated, and clearly documented. They demonstrate extra care and real-world thinking.                | /5      |
| **Documentation**   | README is missing or unhelpful. File structure is confusing.                                                    | README explains what the framework is, how to use it, and what features exist. Repo is reasonably organized.       | README is clear and professional, with examples and notes about limitations. Repo is clean, with logical structure and naming.          | /5      |

**Total: /50**
