# Adding components

From Base to Components: Patterns for Designing Reusable UI

## Lesson Goal

Build a **structured, scalable components layer** using:

* `@layer components`
* tokens (colors, spacing, typography, radii)
* low specificity selectors
* consistent class naming
* component architecture that mirrors real design systems

# 1. Why Components?

* All modern systems (Bootstrap, Tailwind, Shoelace, USWDS, Material) define reusable components: buttons, alerts, cards, navbars, tabs, etc.
* This is where frameworks differentiate—they stop being classless resets and become actual tools.

# 2. Component Requirements

A good component:

* has a clear API (a class name)
* is reusable across pages
* uses tokens, never raw values
* supports variants (e.g., color or size variants)
* works across light/dark themes
* has visible focus states (accessibility)
* degrades cleanly when tokens change
* is not hard-coupled to markup structure unless you explicitly design it that way (e.g., `.card > header`)

## Review of Token & Base Layers

* Quick check:

  * Are tokens controlling colors, spacing, radii, and typography?
  * Base styles apply to every element in your demo page?

**Base:**
Styling element selectors (no classes).

**Components:**
Reusable blocks with one or more class names.

**Utilities:**
Single-purpose helpers (alignment, spacing, display, etc.).

Use direct examples:

* `button` styling belongs in **base**.
* `.btn` belongs in **components**.
* `.btn-primary` is a component **variant**.
* `.btn-lg` is either a component variant **or** a utility depending on your architecture.
* `.mt-2` (margin-top 2 units) is a utility.
* `.card` is a **component**.
* `.text-center` is a utility.
* `blockquote` styling in base.
* `.quote-card` (a card with a blockquote) would be a **component**.

## Components

### Explore Real World Components

Take a look at some real world components. 

- https://m3.material.io/components
- https://tailwindcss.com/plus/ui-blocks
- https://getbootstrap.com/docs/5.3/getting-started/introduction/

### Name some components

Take a few minutes and think of the class names you would use for the following components.

For each component, imagine it has:

- variants – different visual styles of the same component
- sub-components – parts inside the component that may need their own styles
- state classes – conditions like “disabled,” “active,” “warning,” etc.
 
Your job is to create the class names you would naturally use, based on your own instincts.

Write class names for these components:

1. **Button** - Create names for:
  - a base button
  - two variants: large and outline
  - a disabled state
  - a sub-component: the inner label/text

Hints: Buttons often have size variations, color/style variations, and internal text/icons.

2. **Card** - Create names for:
  - a base card
  - one variant: dark
  - three sub-components:
  - header
  - footer
  - image area

Hints: Cards typically group multiple semantic regions. Think about naming in a way that keeps these parts related.

3. **Alert** - Create names for:
  - a base alert
  - two variants: warning and info
  - a sub-component: an icon within the alert

Hints: Alerts communicate meaning. Variants often express tone or severity.

### Naming Conventions

Read this article before class:
[https://www.frontendmentor.io/articles/understanding-css-naming-conventions-bem-oocss-smacss-and-suit-css-V6ZZUYs1xz](https://www.frontendmentor.io/articles/understanding-css-naming-conventions-bem-oocss-smacss-and-suit-css-V6ZZUYs1xz)

You will choose **one** naming convention and use it consistently throughout your CSS framework.

Pick one:

* **BEM**
* **OOCSS**
* **SUIT CSS**
* **SMACSS**
* or a clearly defined **Minimalist** system of your own (if you do this you must be consistent!)

> Your naming convention becomes the “public API” for your framework. Think carefully—changing it later will be painful.

**Challenge**: Design the Class Names for Your Framework Components

You are **not writing CSS** yet.
Your job is to design the *names* you’ll use in your components layer later.

For each component below, define:

* a **base component class**
* any **parts/slots** needed
* at least **two variants**
* any **state classes** that make sense (disabled, error, checked, etc.)

Your names **must follow the rules** of the naming system you chose!

### **Example**

```text
Naming system: SUIT CSS

Button:
  .Button
  .Button--primary
  .Button--large
  .Button-label
```

### What these class names mean

* **`.Button`** —
  The **base component class**.
  This defines the default appearance and behavior of all buttons in the system: padding, border, typography, background, etc. Every other variant builds on this class.

* **`.Button--primary`** —
  A **modifier variant**.
  Modifiers change *how* the component looks (color, emphasis, tone) but do not change its structure. Variants like `--primary`, `--secondary`, or `--warning` let you theme the same component for different purposes.

* **`.Button--large`** —
  A **size modifier**.
  Modifiers can express any kind of variation: size, shape, tone, emphasis. This one increases spacing, font-size, etc. Notice that both color and size modifiers use the same naming pattern.

* **`.Button-label`** —
  A **descendant / sub-part** of the component.
  This is an internal part of the Button component—useful if your system needs to style the text, add icons, or control spacing between elements inside the button.
  (BEM calls this an “element,” SUIT calls it a “descendant.”)

### Why this matters

Each naming system (BEM, SUIT, SMACSS, OOCSS) expresses these ideas differently:

* **BEM** uses `block__element--modifier`
* **SUIT** uses `ComponentName-descendant` and `ComponentName--modifier`
* **SMACSS/OOCSS** tend to simplify component names and emphasize reusable patterns

What matters is not the exact syntax—it’s that:

* you can identify the **base component**,
* you can express **variants**,
* you can express **sizes or states**,
* and you can refer to **component parts**,
  all using a **consistent naming API**.

## **Stub these Components**

Your turn, choose a naming system, and stub the component names for the components listed below.  

For each component, think about:

* What’s the base class?
* What internal parts does this component need?
* What variants or themes are common?
* What states must you express?
* How would another developer understand this API?

**Note**: There isn’t one “perfect” answer, but there are clearly better and worse ones. Your goal is to design names that another developer could understand and use without a long explanation. Be consistent with your chosen naming system, and assume your class names are part of a public API that your future teammates will have to live with.

### **1. Button**

Hints:

* Needs at least two color variants
* Needs at least one size variant
* Should have a disabled state
* Might need a label/inner element

### **2. Checkbox**

Hints:

* You will style the checkbox later, so plan its structure
* Likely requires:
  * a wrapper component
  * a visual box with a checkmark
  * a label or text node
  * a checked/selected state
  * a disabled state (optional)

### **3. Card**

Hints:

* Cards usually contain structural regions
* Common parts:
  * header
  * body
  * footer
* Consider whether you need variants (highlighted, featured, etc.)

### **4. Alert**

Hints:

* Alerts almost always have variants:
  * success
  * warning
  * danger
  * info
* Consider whether you need parts like an icon, title, or message
* Alerts need clear semantic meaning—naming should reflect that

## **Goal**

By the end of this activity:

* You’ll have a **consistent naming strategy**
* Your components layer will be easier to build
* Your Web Components (later) will have predictable structure
* You’ll avoid the chaos of switching naming systems mid-project

## Example Components

### Button Component

Build a **button component** with:

* a base button class
* variants
* size modifiers
* disabled state
* focus/hover/active transitions

Use only tokens. No raw colors.
Keep specificity low: `.btn` should never need `!important`.

Show:

```css
@layer components {
  .btn {
    --btn-bg: var(--color-accent);  /* Important! Extracting the token values */
    --btn-fg: var(--color-bg);      /* here into local vars allows for easier */
    --btn-radius: var(--radius-md); /* theming and variants! */
    --btn-pad-y: var(--space-xs);
    --btn-pad-x: var(--space-sm);

    display: inline-block;
    padding: var(--btn-pad-y) var(--btn-pad-x);
    border-radius: var(--btn-radius);
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    border: 1px solid var(--btn-bg);
    background-color: var(--btn-bg);
    color: var(--btn-fg);
    transition: background-color 150ms, color 150ms;
  }

  .btn:hover,
  .btn:focus-visible {
    background-color: var(--btn-fg);
    color: var(--btn-bg);
  }

  .btn--outline {
    background-color: transparent;
    color: var(--btn-bg);
  }

  .btn--small {
    --btn-pad-y: var(--space-xxs);
    --btn-pad-x: var(--space-xs);
    font-size: var(--font-size-small);
  }
}
```

Critical point: **token reassignments inside components** unlock variants and themes.

### Card Component

Show a two-part component:

```css
.card {
  border-radius: var(--radius-md);
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.card > header {
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.card > footer {
  margin-top: var(--space-sm);
  font-size: var(--font-size-small);
  color: var(--color-muted);
}
```

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
