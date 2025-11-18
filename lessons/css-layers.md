# A CSS Framework

## What are layers? 

CSS cascade layers (`@layer`) give you structural control over the cascade.
They let you group styles by purpose and define **which groups override which** without specificity hacks.

Get the sample files here. 

## What is “the cascade”?

The cascade is how CSS decides which rule wins when multiple rules match the same element:

1. **Origin & layer** (browser vs user vs author, plus layer order)
2. **Specificity** (IDs > classes > elements)
3. **Source order** (later rules win)

Layers let you control the **first step**—the most powerful one—so your framework behaves predictably and is easy to override.

## Key principle: Layer order beats specificity

A less specific selector in a **later layer** beats a more specific selector in an **earlier layer**.

```css
/* Two layers: A and B. B comes later. */
@layer A, B;

@layer A {
  /* Specificity 0-2 (element + class) */
  button.btn {
    color: red;
  }
}

@layer B {
  /* Specificity 0-1 (class only), but in the later layer */
  .btn {
    color: blue;
  }
}
```

**Result**: The button is blue. Layer B wins, even though its selector is less specific.

**Challenge 1**: Change the order at the top to `@layer B, A;`. What happens? Explain why.
**Challenge 2**: Move the `.btn` rule into `@layer A` instead of `@layer B`. What happens now? Explain why.

> The main takeaway: **the order of layers controls override power**.

---

## Why Use Layers in a Framework?

A framework needs:

* **Predictability** – rules in later layers always beat earlier layers.
* **Low specificity** – no need for `!important` wars or hacky selectors.
* **Reliable overrides** – users of your framework can easily customize styles.
* **Clear architecture** – the cascade is explicit and documented.

Modern design systems do exactly this:

* **Tailwind**: `@layer base`, `@layer components`, `@layer utilities`
* **Bootstrap 5.3+**: tokens + layering
* **USWDS, Shoelace, Material**: heavy use of tokens and layered organization

Your framework will follow the same pattern.

---

## Defining Layers

Start by defining your layers in a single line:

```css
@layer tokens, base, components, utilities, overrides;
```

### Layer meanings

| Layer          | Purpose                                                        |
| -------------- | -------------------------------------------------------------- |
| **tokens**     | Values (colors, spacing, typography). Only custom properties.  |
| **base**       | Element selectors: `body`, `h1`, `p`, `a`, forms, etc.         |
| **components** | Reusable patterns: `.btn`, `.card`, `.navbar`, `.alert`, etc.  |
| **utilities**  | Single-purpose helpers: `.mt-1`, `.text-center`, `.flex`, etc. |
| **overrides**  | Project-specific or user overrides of the above.               |

Example:

```css
@layer tokens {
  :root {
    --base-font-size: 16px;
    --color-bg: #eee;
    --color-fg: #111;
    --color-primary: tomato;
    --color-secondary: cornflowerblue;
    --color-tertiary: gold;
  }
}

@layer base {
  body {
    font-size: var(--base-font-size);
    color: var(--color-fg);
    background-color: var(--color-bg);
  }

  a {
    color: var(--color-primary);
  }
}
```

### Architecture Challenge

1. Create a new CSS file called `<framework-name>.css`.

2. Add your layer definition at the top:

   ```css
   @layer tokens, base, components, utilities, overrides;
   ```

3. Look at how real frameworks organize their layers (Tailwind's `base/components/utilities`, Bootstrap, USWDS).

4. Decide if you want extra layers such as `reset`, `themes`, or `animations`.

Your framework **must** include at least:

* `tokens`
* `base`
* `components`
* `utilities`

---

# Defining a Color Palette

A framework needs a consistent, reusable color system.
We’ll use **modern color tools** to build one.

## Color formats to know

* **Hex:** `#rrggbb`, `#rrggbbaa` (red, green, and blue as hexidecimal 0 to F)
* **RGB:** `rgb(255 0 0 / 0.5)` (red, green, and blue, as 0 to 255)
* **HSL:** `hsl(210 50% 40%)` (hue (0 to 360), saturation, and lightness)
* **OKLCH:** `oklch(l c h)` — perceptually uniform, great for ramps (lightness, chroma, and hue)

We’ll prefer **OKLCH** for tokens because it makes tints and shades more predictable.

---

## OKLCH 

OKLCH describes a color with three main values:

* **l** – lightness, from 0 (black) to 1 (white)
* **c** – chroma (intensity), from gray to vivid
* **h** – hue, as an angle from `0deg` to `360deg` (or a number from 0 to 1)
* **(optional)** alpha for transparency

Why use it?

* Adjusting lightness or chroma behaves more like human perception.
* You can keep contrast stable while changing hue.
* It supports a wider range of colors than legacy sRGB.

Example:

```css
/* Red-ish color in OKLCH */
background-color: oklch(0.628 0.258 29.23);
```

---

## `color-mix()`

`color-mix()` creates a new color by mixing two others, in a given color space.

```css
color-mix(<colorspace>, <color1> <percent1>, <color2> <percent2>);
```

Example with OKLCH:

```css
/* Base color token */
--primary: oklch(0.6 0.15 250);

/* Tint: mix 80% primary with white */
--primary-light: color-mix(in oklch, var(--primary) 80%, white);

/* Shade: mix 70% primary with black */
--primary-dark: color-mix(in oklch, var(--primary) 70%, black);
```

---

## Relative Colors

Relative colors let you define a new color **based on an existing one** by tweaking its channels.

Relative colors work with all of the color models (rgb, hsl, lab, ...), here you will focus on oklch. 

You can:

* make a color lighter or darker
* increase or reduce its chroma
* shift its hue
* keep some channels unchanged

Example with OKLCH:

```css
--primary: oklch(0.628 0.258 29.23);

/* Lighter and darker variants derived from --primary */
--primary-light: oklch(from var(--primary) calc(l + 0.15) c h);
--primary-dark:  oklch(from var(--primary) calc(l - 0.10) c h);
```

What happens:

* The browser extracts `l`, `c`, and `h` from `--primary`.
* It changes only `l` (lightness) using `calc()`.
* Chroma (`c`) and hue (`h`) stay the same.

You can repeat this pattern to create a whole palette of colors:

```css
--secondary-3: oklch(0.7 0.12 250);

/* Shades */
--secondary-2: oklch(from var(--secondary-3) calc(l - 0.12) c h);
--secondary-1: oklch(from var(--secondary-3) calc(l - 0.24) c h);

/* Tints */
--secondary-4: oklch(from var(--secondary-3) calc(l + 0.12) c h);
--secondary-5: oklch(from var(--secondary-3) calc(l + 0.24) c h);
```

### Why use relative colors in a framework?

* All variants stay aligned to the same hue.
* Tints and shades are consistent across the design.
* You can adjust the base token and the whole palette shifts with it.
* Themes become trivial: change a handful of base colors, and everything else updates.

---

## Challenge: Build a Color System

Using either `color-mix()` or relative OKLCH colors (or both):

1. Choose **5 main colors** (e.g., gray, primary, secondary, success, warning).
2. Generate **3 tints** and **3 shades** for each main color.
3. Put all of these in the `tokens` layer.
4. Test the colors in `colors.html`.

Focus on naming:

* Neutral ramp: `--gray-1` … `--gray-7`
* Main ramps:

  * `--primary-1` … `--primary-7`
  * `--secondary-1` … `--secondary-7`
  * etc.

Look at how Bootstrap and Tailwind name their palettes, then design yours intentionally.

---

# What to Style?

Once your `tokens` layer exists, start the `base` layer.

Your framework should provide sane defaults for **basic elements**, replacing the browser’s user-agent stylesheet without being heavy-handed.

Use the sample documents to guide you. For each element, ask: *“Does this look deliberate?”*

### Base Text

* Document text: `color`, `background-color`
* Font stack, base `font-size`, `line-height`
* Margins for block elements

Elements to handle:

* Headings: `h1`–`h6`
* Paragraphs: `p`
* Code: `code`, `pre`
* Quotes: `blockquote`
* Inline semantics: `strong`, `em`, `q`
* Selection: `::selection`

### Links

* `a` base style
* States: `:link`, `:hover`, `:active`, `:visited`, `:focus-visible`
* Make sure focus is visible and accessible.

### Buttons

* Base button styling: padding, border radius, background, color.
* Variants: `.btn-primary`, `.btn-secondary` (in the **components** layer).
* States: `:hover`, `:active`, `:focus-visible`, `:disabled`.

### Forms

* Text inputs: `input[type="text"]`, `textarea`
* Checkboxes, radios (optionally custom-styled)
* Focus states using your tokens
* Ensure good contrast and touch targets.

Components and utilities will come later; for now your goal is a solid **tokens + base** foundation.

---

# Using Tokens

Any value you expect to reuse should be a token in the `tokens` layer:

```css
color: var(--color-fg);
border-radius: var(--radius-md);
padding: var(--space-md);
font-size: var(--font-size-2);
```

> If you type the same literal value more than once, consider promoting it to a token.

---

# Headings & Type Scale

Style `h1–h6` using a type scale instead of arbitrary sizes.

Choose a modular ratio (e.g., `1.25`, `1.333`, `1.5`, or `1.618`) and:

* Define a base font size (e.g., `var(--font-size-0)` for body).
* Calculate heading sizes based on that ratio.

```CSS
:root {
  --font-base-size: 16px;
  --font-ratio: 1.5;
}

h5 {
  /* 24px */
  font-size: calc(var(--font-base-size) * var(--font-ratio));
}
```

Use `headings.html` to experiment until your headings:

Explore these ideas and get started with your CSS framework here: https://github.com/Tech-at-DU/css-framework-notes
