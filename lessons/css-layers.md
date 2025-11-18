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

# Color in CSS

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
* **h** – hue, as an angle from `0deg` to `360deg`
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

Use `headings.html` to experiment until your headings:

* form a smooth visual progression
* don’t jump too aggressively between levels
* still work on small screens

---

## 3. 3-Hour Lesson Plan (Active Learning)

Here’s a concrete plan for a single 3-hour block using the lesson above.

### 0:00–0:15 — Setup & Motivation

* **Goal slide**: “By the end of today, you’ll have the skeleton of your own CSS framework: layers + tokens + first base styles.”
* Quick discussion:

  * “Who has used Bootstrap/Tailwind/etc.?”
  * “What annoys you when customizing them?”
* Show a tiny example of:

  * same HTML
  * browser default vs your minimal framework

**Micro-task**:
Students skim your project page for 3 minutes and underline/highlight the words “tokens”, “layers”, and “themeable”.
Ask 2–3 students to paraphrase each term.

---

### 0:15–0:40 — Cascade & Layers (Guided Demo)

* Short explanation of cascade, then jump into **live coding** using your simplified `@layer` example.
* Show:

  * Rule in `layer A` vs rule in `layer B`
  * How changing layer order flips the result.

**In-class challenge** (paired):

* Give them a CodePen/stackblitz with:

  * prewritten HTML with `.btn` and `button.btn`
  * two layers declared
* Tasks:

  1. Make the button red using only layer order.
  2. Make it blue using only **selectors** (no `!important`).
  3. Explain which one feels easier to maintain in a framework.

Debrief: “This is why we’re using layers for the framework.”

---

### 0:40–1:10 — Framework Skeleton Lab

Students:

1. Create `<framework-name>.css`.

2. Add:

   ```css
   @layer tokens, base, components, utilities, overrides;
   ```

3. Add a minimal `tokens` and `base` example (body text color, bg color).

4. Link it to a provided `sample.html` (or `colors.html`/`headings.html`).

**Instructor walk-around**:
Check that everyone has the file wired up and the layer line correct.

**Mini exit check before break**:
Ask three students: “Which layer should be the least powerful?” → `tokens`.

---

### 1:10–1:20 — Break

---

### 1:20–1:45 — Color System Mini-Lecture + Guided Practice

* Show OKLCH briefly: one slide, one example.
* Show `color-mix()` and/or relative syntax with **one** ramp as example.
* Emphasize the outcome, not the math: “We want systematic tints/shades.”

**Guided coding (follow-along)**:

* Start from:

  ```css
  @layer tokens {
    :root {
      --primary: oklch(0.6 0.15 250);
    }
  }
  ```

* Students add `--primary-light` and `--primary-dark` with you.

* Quickly preview in `colors.html`.

---

### 1:45–2:20 — Color System Lab (Core Challenge)

Students work on:

> **3 tints + 3 shades for each of 5 main colors**, all in `tokens`.

Scaffold:

* Provide a list of suggested semantic names: `primary`, `secondary`, `accent`, `neutral`, `danger` OR similar.
* Require a consistent naming scheme (e.g. `-1` … `-7`).

**Checkpoints**:

* At 10 minutes: they must have chosen their 5 base colors.
* At 20 minutes: at least one full ramp is visible in `colors.html`.

Optional: have them swap laptops with a neighbor and answer: “Can you tell which color is primary/secondary/etc. just by the naming?”

---

### 2:20–2:50 — Base Layer Typography & Links

* Very short explanation: browser defaults are ugly, we’ll replace them.
* Students use their tokens to style:

  * `body`, `p`
  * `h1–h3` (at least) with a type scale
  * `a`, including `:hover` and `:focus-visible`

Prompt them to use **only** token variables for:

* font sizes
* colors
* spacing

**Micro-challenge**:
Ask them to search their CSS for raw numbers (`16px`, `1.5rem`, etc.).
Any repeated value should be turned into a token.

---

### 2:50–3:00 — Wrap-up & Exit Ticket

* Quick gallery walk: have 3–4 students show their heading scales.
* Exit ticket (written or verbal):

  1. “In one sentence, what does `@layer` give you that specificity does not?”
  2. “Name one token you defined today and where you used it.”

---

## 4. Assignment Framing (Suggested Text)

Right now you have “See the assignment description here.” but nothing concrete in this doc. Here’s a terse version you can paste into Canvas/Notion and link from this lesson.

---

### Assignment: CSS Framework — Layers & Tokens (Week X)

**Goal**:
Start your own CSS framework with:

* a clear **layer architecture**
* a robust **color token system**
* basic **typography & link** styles

**Requirements (for this checkpoint)**

1. **Framework file**

   * A single CSS file named `<framework-name>.css`.
   * `@layer tokens, base, components, utilities, overrides;` declared at the top.

2. **Tokens layer**

   * At least **5 base colors** (e.g., primary, secondary, accent, neutral, danger).
   * For each base color, at least **3 tints** and **3 shades** using `color-mix()` and/or relative colors.
   * Tokens for:

     * base font size
     * 4+ spacing values (`--space-xs` … `--space-lg`)
     * at least 3 border radii (`--radius-sm`, `--radius-md`, `--radius-lg`)

3. **Base layer**

   * Styles for `body`, `p`, `h1–h6`, `a`, `code`, `pre`, `blockquote`, `strong`, `em`.
   * Headings use a consistent modular scale.
   * All colors, sizes, and radii come from tokens (no magic numbers except one base size).

4. **Demo HTML**

   * At least one sample page (`typography.html` or similar) that imports your framework and shows:

     * headings
     * paragraphs
     * links (including hover & focus)
     * code and blockquote

**Grading focus**

* Does your layer structure make sense?
* Are your tokens reused consistently?
* Does your color system look intentional and coherent?
* Can I change a few tokens and see the theme update?
