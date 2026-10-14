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

Build your tokens with the design formulas from earlier in the term:

* **Type:** a type scale (base + ratio) from [Type & Spacing](../lessons/design-type-spacing.md)
* **Spacing:** the spacing scale from the same lesson
* **Color:** a neutral ramp + one accent in OKLCH, exposed as **role** tokens (`--color-bg`, `--color-surface`, `--color-fg`, `--color-fg-muted`, `--color-border`, `--color-accent`, `--color-on-accent`, `--color-focus`), from [Color](../lessons/design-color.md)
* **Motion:** duration and easing tokens from [UI States & Motion](../lessons/ui-states.md)

Components and base styles use **role** tokens, never raw ramp values. That's what makes theming work.

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

Use the provided **Web Developer’s Roadmap** HTML as your primary test page.

* Link your CSS framework in the `<head>`:

```html
<link rel="stylesheet" href="acsd.css">
```

* You may add **additional layout-only styles** in the `<style>` tag inside the document if needed, but this should be minimal. Anything that feels like a reusable pattern (spacing, typography, colors, buttons, form patterns) should move into the framework.

Goal:

* The page should look “nice” with **just your framework linked**.
* The inline `<style>` is reserved for project-specific layout or tweaks a developer might add on top.

### 4. Submission Instructions

Submit via Gradescope:

Your repository must contain:

1. `acsd.css` (or similar) – your framework file with layers and tokens.
2. `demo.html` – the provided roadmap HTML, linked to your CSS.
3. `README.md` containing:

* A one-paragraph description of the framework’s purpose.
* How to use it (link tag, expected markup).
* A short explanation of your layer structure and token system.
* Any optional features you implemented (themes, utilities, components, etc.).

4. `DESIGN-LOG.md`: see the [Design Log](design-log.md) template. Include your token decisions and a **state matrix** for the button component.

## Using AI on this project

A framework is a great place to use AI **for the tedious parts**, as long as you stay in charge of the design decisions:

* **Audit:** "List every literal value in this CSS that should be a token. Output selector | property | value | suggested token."
* **Coverage:** "Here is the demo HTML and my base layer. Which elements are still using browser defaults?"
* **States:** "For my button, card, and alert components, list missing states using this checklist: hover, focus-visible, active, disabled, selected."
* **Docs:** "Write a usage example for each component class in this file." (Then check that the examples are correct!)

Avoid asking AI to "write a CSS framework." You'll get a generic Bootstrap clone that doesn't use your tokens, and you won't be able to explain it. Log the prompts you use in your design log.

## Homework

Now that your framework has:

* a **tokens** layer
* a **base** layer that styles default HTML elements

…it’s time to add a **components** layer.
This is where your framework becomes something real — reusable UI building blocks that other developers can drop into any project.

Your components **must** follow:

* your chosen naming convention (BEM, SUIT, etc.)
* your layer structure (`@layer components`)
* your tokens (no hard-coded values)

### Required Components

These are common to nearly every modern UI framework.
Your framework must implement **all four**:

#### 1. Button Component

Your button system should include:

* a base button class
* at least **two color variants** (e.g., primary, secondary, danger)
* at least **one size variant** (e.g., small or large)
* a visible, accessible **focus state**
* a functional **disabled** state
* support for an optional internal label or icon

This is fundamental — if a framework can't deliver a robust button system, nothing else will feel consistent.

#### 2. Card Component

Your card should support:

* a base card container class
* token-driven spacing, background, and radius
* optional sub-components:

  * header
  * body/content
  * footer
  * image area (optional but encouraged)
* at least **one visual variant** (dark, elevated, bordered, etc.)

Cards test layout, spacing, typography, and composition.

#### 3. Alert / Message Component

Your alert system should include:

* a base `alert` class
* at least **two variants** (recommended: `info`, `warning`, `success`, `danger`)
* an internal icon or title area (optional but useful)
* accessible color contrast and focus/hover behavior (if interactive)

Alerts force you to think about tone, color meaning, and usability.

#### 4. Badge / Tag / Chip Component

The meaning of Badge/Tag/Chip are interpreted differently in different frameworks. Look these up in existing frameworks like: Bootstrap, Material, and Tailwind. 

A small inline component used for labeling.

Requirements:

* base badge class
* at least **two variants** (primary/neutral, success/danger, etc.)
* should be usable inside text, cards, and buttons
* must be token-driven (padding, radius, color)

## Optional Components (Choose at least 2)

These components are more challenging.
Pick **any two** (or more, if you want extra credit).

Choose components based on your interest and your naming system.

### A. Navbar

A horizontal header/navigation bar.
Should style:

* container
* links
* active/selected state
* optional variants (light/dark)

### B. Tabs

A tabbed interface with:

* tab list
* tab items
* selected tab state
* tab panel area

Excellent practice for states and borders.

### C. Accordion

You may style:

* your own structure
  **or**
* built-in `<details>/<summary>` elements

Great for nested spacing and open/closed states.

### D. Modal (Styling Only)

Implement:

* backdrop
* dialog box
* title, body, footer
* token-driven size and spacing

*No JavaScript required — focus on appearance.*

### E. Table Variants

Enhance default table styling with:

* `.table` class
* `.table--striped` or `.table--compact`
* consistent spacing and borders

Useful for real-world data layouts.

### F. Form Groups & Input Groups

Create visually consistent wrappers for:

* label + input
* input + icon
* input + button

Focus on spacing, alignment, and accessibility.

### G. Progress Bar

Simple but instructive:

* base progress container
* filled track
* optional success/warning variants
* token-driven width, height, colors

### H. Avatar or Avatar Group

Practice shape, object-fit, borders, and small-size design.

### I. Custom Check box and Radio buttons

Note! customizing these can cause problems for accessiblity! If you choose this option be sure to not hide the input element, this will cause screen reads to miss it. Instead set it's opacity to transparent. 

## Utility Classes

Utility classes are **single-purpose, low-specificity helpers** that apply one specific style. They don’t define components or structure — they give developers quick, targeted control without writing custom CSS.

Common examples in modern frameworks:

* display helpers: `.flex`, `.grid`, `.block`
* spacing helpers: `.mt-2`, `.p-sm`, `.gap-md`
* text helpers: `.text-center`, `.text-sm`
* layout helpers: `.container`, `.stack`

### Why utilities matter

* Developers can adjust layout **without modifying your components**.
* Utilities prevent repetitive one-off selectors.
* Because utilities sit later in the cascade (in `@layer utilities`), they override components predictably without `!important`.

Utilities should always be:

* **token-driven** (no magic numbers!)
* **consistent in naming**
* **specific in purpose**
* **low specificity** (`.utilityName` only — no chaining)

## **Example Utility Classes**

These examples demonstrate the structure your framework should follow.
Each uses your design tokens so they adapt to themes and future changes.

### **Display Utilities**

```css
@layer utilities {
  .flex { display: flex; }
  .grid { display: grid; }
  .block { display: block; }
}
```

### **Spacing Utilities**

Using your spacing tokens:

```css
@layer utilities {
  .mt-sm { margin-top: var(--space-sm); }
  .mb-lg { margin-bottom: var(--space-lg); }
  .p-md  { padding: var(--space-md); }
}
```

### **Text Utilities**

```css
@layer utilities {
  .text-center { text-align: center; }
  .text-right  { text-align: right; }
  .text-muted  { color: var(--color-muted); }
}
```

### **Layout Utilities**

A constrained content container:

```css
@layer utilities {
  .container {
    max-width: 60ch;
    margin-inline: auto;
    padding-inline: var(--space-md);
  }
}
```

## **Takeaway**

You don’t need dozens of utilities.
Create a **small, deliberate set** of helpers that:

* use your tokens
* complement your components
* solve predictable layout needs

Utilities should feel like a tool belt.

## Homework: Add Utility Classes to Your Framework

In addition to your components, your framework must include a small set of **utility classes**. Utilities are single-purpose helpers that apply one specific style (e.g., spacing, alignment, display). They allow developers to adjust layout or presentation **without modifying component CSS**.

### Requirements

Create at least **six** utility classes total, covering **at least three** different categories.
All utilities must:

* be placed inside `@layer utilities`
* use your design tokens (no hard-coded values)
* use low-specificity, single-class selectors
* follow your chosen naming convention

### Suggested Categories

Choose from:

* **Display utilities** (e.g., `.flex`, `.grid`, `.block`)
* **Spacing utilities** (e.g., `.mt-sm`, `.p-md`)
* **Text utilities** (e.g., `.text-center`, `.text-muted`)
* **Layout utilities** (e.g., `.container`, `.stack`)
* **Sizing utilities** (e.g., `.w-100`, `.h-auto`)
* **Color utilities** (e.g., `.bg-primary`, `.fg-muted`)

## Rubric

| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** | **Pts** |
| :-- | :-- | :-- | :-- | :--: |
| **Base HTML Styling** | Many elements unstyled or on browser defaults; unclear hierarchy. | All demo elements styled coherently; readable type; spacing follows Inside < Between. | The plain HTML page looks like a polished, intentional design system. | /10 |
| **Tokens & Layers** | Few tokens; `@layer` missing or misused. | `@layer` order declared and respected; type, spacing, color-role, and motion tokens used throughout. | Thoughtful token system built from the formulas; switching `--hue` or theme re-skins everything with no other changes. | /10 |
| **Components & Utilities** | Required components missing or hard-coded. | All 4 required components + 2 optional, plus 6+ utilities in 3 categories, all token-driven and consistently named. | Components have complete states and variants; utilities complement them cleanly. | /10 |
| **Accessibility & Responsiveness** | Contrast failures, missing focus, or breaks on mobile. | AA contrast, visible focus states, full button state matrix, works from 320 to 1440px. | Accessibility clearly designed in (reduced motion, dark theme contrast checked, keyboard-friendly components). | /10 |
| **Enhancements** | Fewer than 2 enhancements, or broken. | At least 2 enhancements working. | Enhancements polished and documented. | /5 |
| **Documentation & Design Log** | README or log missing or unhelpful. | README explains purpose, usage, layers, and tokens; log records decisions and AI use. | Professional README with examples; log shows clear reasoning and verification. | /5 |

**Total: /50**
