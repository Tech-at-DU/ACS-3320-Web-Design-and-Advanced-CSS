# CSS Framework 2: Components and Utilities

Your framework's base layer makes plain HTML look good. Today you add the **opt-in** parts: **components** (`.btn`, `.card`, `.alert`) for UI pieces that need more than one element or more than one look, and **utilities** (`.text-center`) for small one-off adjustments. These are the classes other developers will type, so their names are your framework's **public API**.

## Today

| Time | What |
|:--|:--|
| 30 min | **Show and tell:** your framework v0.1 |
| 15 min | **Part 1: Choose a naming convention** |
| 15 min | **Part 2: Concepts** |
| 10 min | Break |
| 75 min | **Part 3: Challenges** (self-paced) |
| 20 min | **Wrap up:** plan v0.2 |

## Learning Objectives

1. Decide whether a style belongs in base, components, or utilities
2. Name components consistently with a naming convention
3. Build variants by changing local custom properties
4. Give every component its full set of states
5. Write single-purpose, token-driven utilities

---

## Show and tell (30 min)

Each person gets about **1 minute**:

1. Show `demo.html` with your framework v0.1 linked.
2. Name **one token decision**: your type ratio, your accent hue, or your fonts. Why that one?

---

## Part 1: Choose a naming convention (15 min)

Components have **parts** (a card's header), **variants** (a secondary button), and **states** (disabled). A naming convention gives each of these a predictable spelling, so another developer can guess your class names.

| Convention | Base | Part | Variant |
|:--|:--|:--|:--|
| **BEM** | `.card` | `.card__header` | `.card--elevated` |
| **SUIT CSS** | `.Card` | `.Card-header` | `.Card--elevated` |
| **Minimal** (your own rules) | `.card` | `.card-header` | `.card-elevated` |

States use attributes or pseudo-classes, not new names: `:disabled`, `:focus-visible`, `[aria-current="page"]`, `[aria-disabled="true"]`.

The examples in this lesson use **BEM**. For background, skim [Understanding CSS naming conventions](https://www.frontendmentor.io/articles/understanding-css-naming-conventions-bem-oocss-smacss-and-suit-css-V6ZZUYs1xz).

**Do:** pick one convention. In your README, add a **Naming** section and write the class names you'll use for:

- **Button:** the base, 2 color variants, 1 size variant
- **Card:** the base, header, body, footer, image, 1 variant
- **Alert:** the base, a title, 2 variants

**Done when:** your README lists every class name above, all following one convention. Another developer could guess the class for a "large button" without asking you.

---

## Part 2: Concepts (15 min)

### 1. Base, component, or utility?

| Style | Layer | Why |
|:--|:--|:--|
| `button { ... }` | base | The plain default for every button |
| `.btn--secondary { ... }` | components | An opt-in variant |
| `blockquote { ... }` | base | An element |
| `.card { ... }` | components | A pattern made of several elements |
| `.text-center { ... }` | utilities | One property, one job |

The base `button` and the `.btn` component work together. The base gives **every** button a decent look with all its states. `.btn` adds variants and sizes, and works on links too: `<a class="btn">` looks like a button. The components layer comes later, so `.btn` rules beat `button` rules without any extra specificity.

### 2. Variants: change local custom properties

Define a component's changeable values as **local custom properties** at the top of the base class. A variant then changes only those properties:

```css
@layer components {
  .btn {
    --btn-bg: var(--color-accent);
    --btn-fg: var(--color-on-accent);
    --btn-pad-y: var(--space-sm);
    --btn-pad-x: var(--space-lg);

    padding: var(--btn-pad-y) var(--btn-pad-x);
    color: var(--btn-fg);
    background: var(--btn-bg);
    /* ...the rest of the rules use the local properties too */
  }

  .btn--secondary {
    --btn-bg: transparent;
    --btn-fg: var(--color-accent);
  }

  .btn--small {
    --btn-pad-y: var(--space-xs);
    --btn-pad-x: var(--space-md);
    font-size: var(--font-size-sm);
  }
}
```

The variant doesn't repeat any rules. It just changes the inputs. This is the same pattern as the button in [UI States](ui-states.md).

### 3. Parts: give them names

A card has parts. Name them with your convention instead of relying on HTML structure:

```css
/* ✅ Works with any HTML: <header>, <div>, or <section> */
.card__header { ... }

/* ⚠️ Breaks if a developer uses <div> instead of <header> */
.card > header { ... }
```

### 4. States are part of the component

Every interactive component needs the states from [UI States](ui-states.md): default, hover, focus-visible, active, and disabled. Two details matter for a framework:

- `<a class="btn">` can't be `:disabled`. Support `[aria-disabled="true"]` too.
- Put the disabled rule **last**, so it beats hover and active.

### 5. Utilities: one job each

A utility sets **one** property (or one closely related pair) from a token. Because the `utilities` layer comes after `components`, a utility always wins:

```html
<div class="card text-center">   <!-- the utility centers the card's text -->
```

Keep the set small. A framework with 4 good utilities is better than one with 40 random ones.

---

## Part 3: Challenges (75 min)

Each challenge ends with **Done when**. Try each one yourself first. If you're stuck for 10 minutes, open the **Answer**, read it, close it, and write your own version.

### Setup (5 min)

`demo.html` has no classes, so you need a second test page for components. Create `components.html` next to it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Components</title>
  <link rel="stylesheet" href="framework.css">
</head>
<body>
  <h2>Buttons</h2>
  <p>
    <button class="btn">Primary</button>
    <button class="btn btn--secondary">Secondary</button>
    <button class="btn btn--small">Small</button>
    <a class="btn" href="#">Link</a>
    <button class="btn" disabled>Disabled</button>
    <a class="btn" aria-disabled="true">Disabled link</a>
  </p>

  <h2>Cards</h2>
  <article class="card">
    <img class="card__image" src="https://placehold.co/600x300" alt="">
    <header class="card__header"><h3>Cordless drill</h3></header>
    <div class="card__body"><p>Borrow it for up to 7 days.</p></div>
    <footer class="card__footer">Available now</footer>
  </article>

  <h2>Alerts</h2>
  <div class="alert alert--info">
    <p class="alert__title">Heads up</p>
    <p>Your plot renews next month.</p>
  </div>
  <div class="alert alert--warning">
    <p class="alert__title">Warning</p>
    <p>Only 2 spots left.</p>
  </div>
</body>
</html>
```

Change the class names to match **your** naming convention, and the `<link>` to match your framework's file name. Keep this page: it's the test page for your components, and you'll screenshot it for your README.

**Done when:** `components.html` opens and shows unstyled buttons, a card, and two alerts.

### Challenge 1: Button (25 min)

In `@layer components`, build the button:

1. A base class with local custom properties (concept 2). Include `text-decoration: none` so `<a class="btn">` isn't underlined, and `font: inherit`.
2. Hover, focus-visible, and active states. Use your motion tokens for the transition.
3. A **secondary** variant (outlined) and a **small** size variant.
4. A disabled rule for `:disabled` **and** `[aria-disabled="true"]`, placed last.
5. In `DESIGN-LOG.md`, write the button's **state matrix** (from [UI States](ui-states.md#2-the-state-matrix)).

**Done when:**

- [ ] The link and the button look identical.
- [ ] Every variant has a visible hover, focus ring, and press.
- [ ] Both disabled buttons look disabled and don't react to hover.
- [ ] The variants change only custom properties, not repeated rules.

<details>
<summary>Answer</summary>

```css
@layer components {
  .btn {
    --btn-bg: var(--color-accent);
    --btn-fg: var(--color-on-accent);
    --btn-border: var(--color-accent);
    --btn-pad-y: var(--space-sm);
    --btn-pad-x: var(--space-lg);

    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);              /* room for an icon + label */
    padding: var(--btn-pad-y) var(--btn-pad-x);
    font: inherit;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    color: var(--btn-fg);
    background: var(--btn-bg);
    border: var(--border-width) solid var(--btn-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition:
      background-color var(--duration-fast) var(--ease-out),
      scale var(--duration-fast) var(--ease-out);
  }

  .btn:hover {
    --btn-bg: color-mix(in oklch, var(--color-accent), black 15%);
    --btn-border: var(--btn-bg);
  }

  .btn:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 3px;
  }

  .btn:active { scale: 0.97; }

  .btn--secondary {
    --btn-bg: transparent;
    --btn-fg: var(--color-accent);
  }

  .btn--secondary:hover {
    --btn-bg: color-mix(in oklch, var(--color-accent), transparent 88%);
    --btn-border: var(--color-accent);
  }

  .btn--small {
    --btn-pad-y: var(--space-xs);
    --btn-pad-x: var(--space-md);
    font-size: var(--font-size-sm);
  }

  /* Last, so it beats hover and active */
  .btn:disabled,
  .btn[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}
```
</details>

### Challenge 2: Card (15 min)

1. Style the card container: surface background, border, radius, and `overflow: hidden` so the image follows the rounded corners.
2. Style each part: image, header, body, and footer. Use spacing tokens, and make the footer quieter with `--color-fg-muted`.
3. Add one **variant**, such as `--elevated` (a shadow instead of a border) or `--accent` (an accent border).

**Done when:** the card looks finished, its image has rounded top corners, and your variant looks clearly different.

<details>
<summary>Answer</summary>

```css
@layer components {
  .card {
    display: flex;
    flex-direction: column;
    background: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .card__image  { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
  .card__header { padding: var(--space-md) var(--space-lg) 0; }
  .card__header > * { margin: 0; font-size: var(--font-size-lg); }
  .card__body   { padding: var(--space-sm) var(--space-lg) var(--space-lg); flex: 1; }
  .card__body > :last-child { margin-bottom: 0; }
  .card__footer {
    padding: var(--space-md) var(--space-lg);
    border-top: var(--border-width) solid var(--color-border);
    font-size: var(--font-size-sm);
    color: var(--color-fg-muted);
  }

  .card--elevated {
    border-color: transparent;
    box-shadow: var(--shadow-md);
  }
}
```
</details>

### Challenge 3: Alert (15 min)

Alerts use the **semantic** color tokens: `--color-info`, `--color-success`, `--color-warning`, `--color-danger`.

1. Give the base `.alert` a local `--alert-color` property, and use it for a left border and a light background tint.
2. Keep the **text** in `--color-fg`. Light tints of a color are hard to read text on, but easy to read dark text on.
3. Each variant sets only `--alert-color`.

**Done when:** you have at least 2 variants, each one changes only `--alert-color`, and the text passes AA contrast (check with WAVE).

<details>
<summary>Answer</summary>

```css
@layer components {
  .alert {
    --alert-color: var(--color-info);

    padding: var(--space-md) var(--space-lg);
    border-inline-start: 4px solid var(--alert-color);
    border-radius: var(--radius-sm);
    background: color-mix(in oklch, var(--alert-color) 12%, var(--color-surface));
    color: var(--color-fg);
  }

  .alert__title { margin: 0 0 var(--space-xs); font-weight: 700; }
  .alert > :last-child { margin-bottom: 0; }

  .alert--info    { --alert-color: var(--color-info); }
  .alert--success { --alert-color: var(--color-success); }
  .alert--warning { --alert-color: var(--color-warning); }
  .alert--danger  { --alert-color: var(--color-danger); }
}
```
</details>

### Challenge 4: Utilities (10 min)

In `@layer utilities`, write **4 utilities** in at least **2 categories**: display, spacing, text, or color. Each one is a single class, sets one property, and uses a token. Try one on a component in `components.html`, for example `<article class="card text-center">`.

**Done when:** your 4 utilities work, and one of them visibly overrides a component style.

<details>
<summary>Example</summary>

```css
@layer utilities {
  .text-center { text-align: center; }
  .text-muted  { color: var(--color-fg-muted); }
  .mt-lg       { margin-top: var(--space-lg); }
  .flex        { display: flex; }
}
```
</details>

### Stretch

- **Optional component:** start the one you'll submit (badge, navbar, accordion, table variant, form group, or progress bar). See the [assignment](../assignments/css-framework.md#components-in-layer-components).
- **Danger button:** add a variant that uses `--color-danger`. Only change custom properties.
- **Dark mode:** switch your OS to dark mode. Do the components still pass contrast?
- **Icon button:** put an inline SVG or a badge inside a button. Does `gap` space it correctly?

---

## Wrap up (20 min)

- **v0.2** (the complete classless base) is due **Tuesday, Nov 24**. There's no class time for it, so use the [base layer recipes](css-layers.md#base-layer-recipes-for-v02) for forms, tables, and code.
- **v1.0** is due **Tuesday, Dec 1**: the three components, one optional component, 4 utilities, one enhancement, the real-world test, and the README. See the [assignment](../assignments/css-framework.md#v10-components-utilities-and-the-real-test-due-tue-dec-1).
- Before you leave, write your v0.2 plan in your README or design log: which sections of `demo.html` you'll style on which day.

## Using AI here

- **States:** "Here is my button component. List missing states from this checklist: hover, focus-visible, active, disabled (including aria-disabled). No code."
- **Naming review:** "Here are my component class names and my naming convention. List any names that break the convention."
- **Docs:** "Write a short HTML usage example for each class in this file." Then check that each example actually works in `components.html`.

## Resources

- Real-world components to study: [Material 3](https://m3.material.io/components), [Bootstrap](https://getbootstrap.com/docs/5.3/components/buttons/), [Open Props](https://open-props.style)
- [Understanding CSS naming conventions](https://www.frontendmentor.io/articles/understanding-css-naming-conventions-bem-oocss-smacss-and-suit-css-V6ZZUYs1xz)
- [BEM quick start](https://getbem.com/introduction/)
- [CSS Framework assignment](../assignments/css-framework.md)
