# CSS Framework 1: Layers, Tokens, and a Classless Base

Today you start the [CSS Framework] project. It's different from the earlier assignments: instead of a page, you're building a **tool other developers use to build pages**. By the end of class you'll have the start of v0.1: a layered CSS file with your tokens and your first text styles.

## Today

| Time | What |
|:--|:--|
| 45 min | **Show and tell:** present your Microinteractions |
| 15 min | **Warm-up:** see what a framework does |
| 20 min | **Part 1: Concepts** |
| 10 min | Break |
| 60 min | **Part 2: Challenges** (self-paced) |
| 15 min | **Wrap up:** what's due for v0.1 |

## Learning Objectives

1. Explain what a classless CSS framework is and who it's for
2. Use `@layer` to control which styles win, regardless of specificity
3. Explain why unlayered CSS beats every layer
4. Organize tokens as private ramps and public role tokens
5. Style semantic HTML with element selectors only

---

## Show and tell (45 min)

Each person gets about **2 minutes**:

1. Show your three microinteractions.
2. For one of them, name its **job** and show its **reduced-motion** version.

**Listeners:** write down one timing or easing choice you'd like to borrow.

---

## Warm-up: What a framework does (15 min)

**Goal:** see the finished product before you build one.

1. Create a new repo for the [CSS Framework] project. Copy the [css-framework-starter](../assignments/css-framework-starter/) folder into it.
2. Open `demo.html` in your browser. It's about 45 HTML elements with **browser defaults only**.
3. In `demo.html`, change the `<link>` to each of these in turn, and reload after each one:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
   <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.min.css">
   ```
4. Change the `<link>` back to `framework.css`.

The HTML never changed, and there isn't a single class in it. Each framework is just a CSS file that styles elements. **That's what you're building.** Yours will be built from your own tokens and have your own look.

**Done when:** you can answer in one sentence, "What's the difference between styling a page and building a framework?"

---

## Part 1: Concepts (20 min)

### 1. Layers: order beats specificity

The cascade decides which rule wins when several rules match the same element. Layers sit **above** specificity: a rule in a later layer beats a rule in an earlier layer, however specific the earlier selector is.

```css
@layer A, B;   /* B is declared last, so B wins */

@layer A {
  button.btn { color: red; }   /* specificity 0-1-1 */
}

@layer B {
  .btn { color: blue; }        /* specificity 0-1-0, but in the later layer */
}
```

**The button is blue.** Layer B wins even though its selector is less specific.

A framework needs this. A developer using your framework should be able to override a component with a simple class, without fighting your selectors or reaching for `!important`.

### 2. Your framework's layers

```css
@layer tokens, base, components, utilities, overrides;
```

| Layer | Contains | Why it's in this position |
|:--|:--|:--|
| `tokens` | Custom properties only | Everything else reads them |
| `base` | Element selectors: `h1`, `p`, `a`, `table` | The classless defaults, with the least power |
| `components` | Opt-in classes: `.button`, `.card` | Beats base, so `.button` can restyle a `<button>` |
| `utilities` | One-job classes: `.text-center` | Beats components, so a utility can adjust a component |
| `overrides` | Empty | For developers who use your framework |

### 3. The gotcha: unlayered CSS beats every layer

CSS that **isn't** inside a `@layer` beats all of your layers, whatever its specificity:

```css
@layer base {
  body { background: var(--color-bg); }
}

body { background: white; }   /* not in a layer: this wins */
```

That's why `demo.html` has no `<style>` tag. A stray unlayered rule, in your file or in the page, will override your framework, and you'll waste an hour wondering why. If a style "isn't working," check that it's inside a layer.

(`!important` reverses the layer order. Your framework shouldn't need it.)

### 4. Tokens: ramps and roles

You already built tokens for Fix the AI Page. A framework organizes them in two levels:

```css
@layer tokens {
  :root {
    /* Ramps: the raw palette. Only used inside this layer. */
    --gray-50:    oklch(0.98 0.005 250);
    --gray-900:   oklch(0.18 0.02 250);
    --accent-500: oklch(0.55 0.18 250);

    /* Roles: what everything else uses */
    --color-bg:     var(--gray-50);
    --color-fg:     var(--gray-900);
    --color-accent: var(--accent-500);
  }
}
```

The **base**, **components**, and **utilities** layers use **only role tokens**. Then re-theming is easy: point `--color-accent` at a different ramp, and every link, button, and focus ring updates.

For building ramps with `oklch()`, `color-mix()`, and relative colors, see the [Color lesson](design-color.md) and `colors.html` in the [CSS Framework Notes](https://github.com/Tech-at-DU/css-framework-notes).

**Token names:** the starter's tokens layer lists the names used in every course example: `--font-size-md`, `--space-lg`, `--color-fg-muted`, `--radius-md`, `--duration-fast`, and so on. These are the same names from the Type & Spacing and Color lessons. **Keep the names and change the values.** Then any example you copy from a lesson works in your framework.

### 5. The classless base

The `base` layer styles **elements, not classes**. A developer writes plain, semantic HTML and it looks right:

```css
@layer base {
  body {
    font-family: var(--font-sans);
    font-size: var(--font-size-md);
    line-height: var(--line-height-body);
    color: var(--color-fg);
    background: var(--color-bg);
  }

  h1 { font-size: var(--font-size-3xl); }
  h2 { font-size: var(--font-size-2xl); }

  a { color: var(--color-accent); }
  a:hover { text-decoration-thickness: 3px; }
  a:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 3px; }
}
```

Every value is a token. If you type the same literal value twice, make it a token.

---

## Part 2: Challenges (60 min)

Work in your framework repo. Each challenge ends with **Done when**. If you're stuck for 10 minutes, ask a classmate or your instructor.

### Challenge 1: Prove the layer order (10 min)

1. In `framework.css`, add `button { background: red; }` inside `@layer base`, and `button { background: blue; }` inside `@layer components`.
2. Predict the color of the buttons in `demo.html`, then reload.
3. Swap the two layer names in the `@layer` line at the top. Predict, then reload.
4. Add `button { background: green; }` at the very bottom of the file, outside any layer. Predict, then reload.
5. Delete all three test rules and restore the layer line.

**Done when:** your three predictions matched, or you can explain why one didn't.

### Challenge 2: Move in your tokens (15 min)

The starter already has a working tokens layer with placeholder values. Make it **yours**:

1. Open the `tokens.css` from your Fix the AI Page project.
2. For each token in the starter, replace the placeholder **value** with your value. **Keep the starter's names**, so lesson examples keep working.
3. Your file may have tokens the starter doesn't, such as an extra font or a second accent. Add them under the matching comment.
4. Make sure type sizes use `rem`, not `px`.
5. Reload `demo.html`. Nothing is styled yet, but the page should have no errors in the console.

**Done when:** the tokens layer uses your fonts, colors, and scales, and has no rules except `:root`.

### Challenge 3: Page and headings (15 min)

In the `base` layer:

1. Style `body` with your font, base size, line height, and the `--color-fg` and `--color-bg` roles.
2. Give `h1`–`h6` sizes from your type scale. Make each level visibly smaller than the one above it.
3. Give headings more space **above** than below, so each heading belongs to the text that follows it (from [Type & Spacing](design-type-spacing.md)).

**Done when:** the **Typography & Headings** section of `demo.html` has a clear hierarchy, and every value comes from a token.

### Challenge 4: Text and links (20 min)

1. Style `p`, `strong`, `em`, `small`, `mark`, `blockquote`, and `q`.
2. Style `a` in every state: `:link`, `:visited`, `:hover`, `:active`, and `:focus-visible`.
3. Press **Tab** through the links. Is focus obvious every time?

**Done when:** the **Typography** and **Links** sections look intentional, and the focus ring is visible on every link.

**That's v0.1.** Commit it: `git commit -m "v0.1: tokens and text"`.

### Stretch

- Start v0.2: style the **Lists** and **Code** sections. Use the [base layer recipes](#base-layer-recipes-for-v02) below.
- Check contrast for `--color-fg-muted` and `--color-accent` on `--color-bg` with WAVE or the DevTools contrast checker.
- Re-theme test: change `--color-accent` to a different hue. Does every link and focus ring change with it?

---

## Wrap up (15 min)

- **v0.1** (layers, tokens, and text) is due **Thursday, Nov 19**. Bring it to class.
- **v0.2** (the complete classless base) is due **Tuesday, Nov 24**. There's no class time for it, so use the recipes below.
- Read the full [CSS Framework] assignment. Note the three releases: v0.1, v0.2, and v1.0.
- Thursday's lesson: [Components and utilities](css-components.md).

---

## Base layer recipes (for v0.2)

Most of the base layer is **your design**: your fonts, spacing, and colors. But some elements have browser quirks that everyone has to fix the same way. These recipes handle the quirks. Put them in `@layer base`, then make them look like yours.

### Reset the box model and media

```css
*, *::before, *::after { box-sizing: border-box; }

img, svg, video {
  display: block;
  max-width: 100%;   /* images never overflow their container */
  height: auto;
}
```

### Code blocks

Long code lines must scroll inside their box, not push the page sideways:

```css
pre {
  overflow-x: auto;
  padding: var(--space-md);
  background: var(--color-surface);
  border-radius: var(--radius-md);
}

pre code { padding: 0; background: none; }   /* undo your inline code style inside blocks */
```

### Tables

```css
table {
  width: 100%;
  border-collapse: collapse;   /* one border between cells, not two */
}

caption { text-align: start; font-weight: 600; }

th, td {
  padding: var(--space-sm);    /* keep it small: wide padding overflows at 320px */
  text-align: start;
  border-bottom: var(--border-width) solid var(--color-border);
}
```

### Forms

Form controls **don't inherit fonts**. Without this line they use the browser's small system font:

```css
input, select, textarea, button { font: inherit; color: inherit; }
```

Text-like inputs should fill the width. Leave checkboxes, radios, color, range, and buttons alone:

```css
input:not([type="checkbox"], [type="radio"], [type="range"], [type="color"],
          [type="submit"], [type="reset"], [type="button"]),
select,
textarea {
  display: block;
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  background: var(--color-surface);
  border: var(--border-width) solid var(--color-border-strong);   /* 3:1 contrast */
  border-radius: var(--radius-md);
}
```

One line colors checkboxes, radios, and range sliders in your accent color:

```css
input[type="checkbox"], input[type="radio"], input[type="range"] {
  accent-color: var(--color-accent);
}
```

A label that **wraps** a checkbox or radio should sit on one line with it:

```css
label:has(> input[type="checkbox"], > input[type="radio"]) {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}
```

### Buttons in the base

The base `button` is the **plain default**: one look, with all its states (hover, focus-visible, active, disabled). Variants like secondary or large come later, as **component** classes. Style `input[type="submit"]`, `[type="reset"]`, and `[type="button"]` the same as `button`.

### Print (if you choose the print enhancement)

```css
@media print {
  body { color: black; background: white; max-width: none; }
  nav, form { display: none; }
  a[href^="http"]::after { content: " (" attr(href) ")"; }   /* show link URLs on paper */
  pre, blockquote, table, figure { break-inside: avoid; }
}
```

Test it with File → Print → Preview, or DevTools → Rendering → "Emulate CSS media type" → `print`.

### Check v0.2

- Scroll `demo.html` top to bottom. Does anything still look like browser defaults?
- Drag from 320px to 1440px. Nothing should scroll sideways.
- Press Tab through the whole form. Is focus visible on every control?

## Resources

- [CSS Framework Notes](https://github.com/Tech-at-DU/css-framework-notes): `layers.html`, `headings.html`, and `colors.html` for practice
- [MDN: @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [Classless frameworks to study](https://github.com/dbohdan/classless-css): a list with live demos
- [Pico CSS](https://picocss.com), [Simple.css](https://simplecss.org), [Water.css](https://watercss.kognise.dev)

[CSS Framework]: ../assignments/css-framework.md
