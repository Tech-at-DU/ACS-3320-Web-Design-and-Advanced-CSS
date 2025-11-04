# CSS Custom Properties

CSS Custom Properties — also known as CSS variables — let you store reusable values directly in your CSS. Unlike variables in preprocessors such as SASS or LESS, custom properties are native to the browser, live in the cascade, and can be updated dynamically (even at runtime with JavaScript).

Custom properties turn your CSS into a more flexible, themeable, and maintainable system — they’re the foundation of modern design tokens and component libraries.

## Why You Should Know This

Modern web design systems use CSS custom properties to manage themes, color palettes, spacing, and typography in one place.
Learning them will help you:

- Reduce repetition in your CSS
- Quickly restyle or theme entire projects
- Use math and logic directly in CSS (calc(), clamp(), etc.)
- Create dynamic effects that react to user interaction or system preferences (like dark mode)
- Integrate with JavaScript to change styles in real time

Custom properties make CSS smarter and more powerful — and once you start using them, you’ll never want to go back.

## Learning Objectives

By the end of this lesson, you should be able to:

- Describe what CSS Custom Properties are, how they differ from preprocessor variables, and how they fit into the cascade and inheritance model.
- Use CSS Custom Properties to define reusable colors, sizes, and layout values in real-world projects.
- Perform CSS math operations with functions like calc(), min(), max(), and clamp().
- Apply a CSS Reset to normalize browser defaults for consistent cross-browser styling.
- Build a themeable button component that uses CSS custom properties for color, size, and hover effects.

Perfect — here’s a complete rewrite of your **“Styling Buttons”** section.
It keeps your original flow but improves clarity, student engagement, and structure — with a more design-thinking tone that encourages exploration before coding.

# Styling Buttons (with custom properties!)

Before we start using **CSS Custom Properties**, we’ll focus on a practical and familiar example: **button**.

Buttons are one of the most common interactive elements in web design. They’re small, simple, and perfect for learning how to apply design tokens and custom properties.

## What Makes a Button a Button?

Before you jump into the CSS, think like a designer.

Ask yourself:

* What **does** a button do?
* When should you use a `<button>` vs an `<a>` tag?
* How do users recognize something *as* a button?

Take a minute to explore what other designers have done:

* [Bootstrap Buttons](https://getbootstrap.com/docs/4.5/components/buttons/)
* [Foundation Buttons](https://get.foundation/sites/docs/button.html)
* [Material Design Buttons](https://material.io/components/buttons)

Then discuss or note down:

* What **properties** do these buttons share? (size, color, shape, spacing, etc.)
* How do they communicate **importance** (primary vs secondary)?
* What **states** do they have? (hover, focus, active, disabled)

This quick visual research helps you understand both the function and feel of your button design.

## Base Button Styles

Let’s start simple — a basic button with padding, a border, and a hover effect.

```css
button {
  padding: 0.5em 0.75em;
  background-color: #fff;
  border: 1px solid;
  color: cornflowerblue;
  border-radius: 0.5em;
  font-size: 1em;
  transition: 300ms;
}

button:hover {
  background-color: cornflowerblue;
  color: #fff;
}
```

```html
<button>Hello World</button>
```

This works, but it’s not very flexible. What if you want to change colors or themes later?
That’s where **Custom Properties** come in.

## Refactoring with Custom Properties

Let’s define variables for the background and foreground colors so you can easily reuse and swap them.

```css
button {
  --bg-color: #fff;
  --fg-color: cornflowerblue;

  padding: 0.5em 0.75em;
  background-color: var(--bg-color);
  border: 1px solid;
  color: var(--fg-color);
  border-radius: 0.5em;
  font-size: 1em;
  transition: 300ms;
}

button:hover {
  background-color: var(--fg-color);
  color: var(--bg-color);
}
```

Now, your color logic lives in two variables at the top of the rule.

Change `--fg-color` once, and it updates both the base and hover states.

## 🎛️ Button Variants with Custom Properties

Buttons often come in different styles: success, warning, dark, etc.
Custom properties make that incredibly simple.

```css
button.success {
  --fg-color: white;
  --bg-color: seagreen;
}

button.warning {
  --fg-color: white;
  --bg-color: tomato;
}

button.dark {
  --fg-color: white;
  --bg-color: #222;
}
```

```html
<button class="success">Save</button>
<button class="warning">Delete</button>
<button class="dark">Cancel</button>
```

This approach gives you a reusable **button API** — a pattern you’ll build on later when you start your own CSS framework.

## Inverted (Outline) Buttons

What if you want an *inverted* or *outline* style — where the colors swap on hover?

You can create a modifier class that reuses your existing custom properties.

```css
button.invert {
  color: var(--bg-color);
  background-color: var(--fg-color);
}

button.invert:hover {
  background-color: var(--bg-color);
  color: var(--fg-color);
}
```

```html
<button class="warning invert">Delete</button>
```

Notice that `.invert` doesn’t define new colors — it just reverses where the existing ones are applied.
That’s the power of composability.

## Inline Customization

You can even override button colors **inline** using custom properties.
This is a great trick when you want a one-off color without writing new CSS.

```html
<button style="--bg-color: violet; --fg-color: #fff;">Use Location</button>
```

Because inline styles have high specificity, these custom values override any defaults — but only for this one element.

Bootstrap 5.x takes this approach. Take a look at all of the custom properties here: https://getbootstrap.com/docs/5.0/customize/css-variables/

Notice that they give all of their custom properties a developer prefix: `bs`.

## Thinking Ahead

You’ve now built a small but flexible button system:

* Base button with hover state
* Variant buttons (success, warning, dark)
* Inverted style modifier
* Inline customization

In the next section, we’ll take these ideas further:

* Add global design tokens (using `:root`)
* Apply sizing and spacing with math functions
* Learn to manage and update properties dynamically with JavaScript

Excellent — here’s a rewritten and modernized version of your **“CSS Custom Properties”** section.
This version flows naturally from the “Styling Buttons” lesson, introducing variables clearly, connecting them to real design use, and correcting technical details. It’s ready for direct classroom or LMS use.

# CSS Custom Properties

Now that we’ve seen how CSS variables can simplify button design, let’s dive deeper into **how they work** and **why they’re special**.

## What Are Custom Properties?

CSS Custom Properties let you define reusable **variables** right in your CSS — but they’re more than simple placeholders.
They live in the **CSS cascade**, can be **inherited**, and can even be **updated dynamically** in real time.

Think of them like named constants in your design system — colors, sizes, or numbers that can change across your whole site.

## Defining a Custom Property

A custom property name **must start with `--`**, followed by any valid CSS identifier (usually written in kebab-case).

Custom properties **must** be defined inside a selector block — never at the top level.

```css
/* ❌ Invalid */
--color-primary: cornflowerblue;

/* ✅ Valid */
body {
  --color-primary: cornflowerblue;
}
```

The **scope** of a property depends on where it’s defined:

* If defined on `:root`, it’s **global** (available everywhere).
* If defined inside an element, it applies **only to that element and its descendants**.

```css
:root {
  --font-size: 16px;     /* global */
  --primary-color: navy; /* global */
}

article {
  --font-size: 18px;     /* local override */
}
```

## What’s `:root`?

The `:root` pseudo-class represents the **root element** of the document — in HTML, that’s `<html>`.

Why use it?
Because it gives your custom properties **global scope** and a slightly higher **specificity** than using `html { ... }`.

It’s the perfect place to store global design tokens like colors, typography, or spacing.

```css
:root {
  --color-primary: cornflowerblue;
  --color-success: seagreen;
  --color-danger: tomato;

  --font-base: 16px;
  --font-large: 1.5rem;

  --border-radius: 0.5rem;
}
```

## Using Custom Properties

To access a custom property, use the `var()` function:

```css
button {
  background-color: var(--color-primary);
  font-size: var(--font-base);
  border-radius: var(--border-radius);
}
```

Now, every element using these properties automatically updates when you change the values in `:root`.

## Fallback Values

If a custom property isn’t defined, you can provide a **fallback** value as a second argument to `var()`:

```css
p {
  color: var(--text-color, black);
}
```

If `--text-color` is missing, the paragraph text will default to black.

You can even use other variables as fallbacks:

```css
:root {
  --accent: var(--primary-color, tomato);
}
```

### leveraging Fallback values

Fallback values have secret super powers. Imagine you have defined some custom properties. It is possible define these values with other custom properties and fallbacks. For example: 

```CSS
:root {
  --color-bg: var(--my-color-bg, white);
  --color-fg: var(--my-color-fg, #222);
  --color-accent: var(--my-color-accent, cornflowerblue);
  --radius: var(--my-radius, 0.5rem);
  --padding: var(--my-padding, 1em);
}
```

Here the properties like `--mycolor-bg` don't exist and have nto been defined anywhere. In this case, fallback colors here are used. 

Later if you added another stylesheet that defined these missing custom properties, those values would be used. For example, imagine this exists in another style sheet. 

```CSS
:root {
  --my-color-bg: rgb(42, 42, 42);
  --my-color-fg: #e0e0e0;
  --my-color-accent: tomato;
  --my-radius: 0.25rem;
  --my-padding: 1em;
}
```

This is a simple and powerful way to create a theming system for your styles. The first black of code contains the default values, the second, if used, contains theme values that overwrite the defaults. 

## ⚙️ Any CSS Value Works

You can store **any valid CSS value** inside a custom property — not just colors or numbers.

```css
:root {
  --golden-ratio: 1.618;         /* number */
  --font-body: system-ui;        /* font name */
  --bg-color: #333;            /* color */
  --spacing-unit: 1rem;          /* length */
  --border-style: dashed;        /* keyword */
}
```

When using these values, `var()` just drops them into the CSS as if they were typed there directly.

## Using Custom Properties with Math

Custom properties can also be used inside CSS math functions like `calc()`:

```css
:root {
  --size: 16px;
  --scale: 1.5;
}

h1 {
  font-size: calc(var(--size) * var(--scale));
}
```

This makes your values **dynamic and flexible**.
Change `--scale` and the size automatically adjusts everywhere it’s used.

We’ll explore more math functions (like `clamp()`, `min()`, and `max()`) later in this lesson.

## Key Idea: They Inherit!

Most CSS properties (like `margin` or `background`) don’t inherit by default — but **custom properties do**.
That means if you define a variable on an ancestor, its children can automatically use it.

```css
.container {
  --text-color: darkslategray;
}

.container p {
  color: var(--text-color);
}
```

This makes custom properties ideal for **themes**, **nested components**, and **context-aware design**.

## Quick Recap

| Concept         | Description                                       | Example                             |
| --------------- | ------------------------------------------------- | ----------------------------------- |
| **Definition**  | Declare inside a selector, name starts with `--`. | `:root { --color: red; }`           |
| **Usage**       | Access with `var()` anywhere in CSS.              | `color: var(--color);`              |
| **Scope**       | Limited to where defined (inherits to children).  | `body { --size: 20px; }`            |
| **Fallback**    | Provide a backup if not found.                    | `color: var(--title, black);`       |
| **Value Types** | Any valid CSS value works.                        | numbers, strings, colors, gradients |
| **Dynamic**     | Can change via JS or user input.                  | Live theming, sliders, toggles      |

## In Practice

Here’s a quick example combining everything we’ve covered:

```css
:root {
  --color-bg: white;
  --color-fg: #222;
  --color-accent: cornflowerblue;
  --radius: 0.5rem;
  --padding: 1em;
}

.card {
  background-color: var(--color-bg);
  color: var(--color-fg);
  border-radius: var(--radius);
  padding: var(--padding);
  border: 1px solid var(--color-accent);
}
```

```html
<div class="card">
  <h2>Custom Property Magic ✨</h2>
  <p>Change a few variables and the entire theme updates!</p>
</div>
```

✅ **Coming up next:** we’ll explore how to **update these properties dynamically with JavaScript**, and how to **apply them to reusable components** like buttons and cards.



---



# Using Custom Properties with JavaScript

CSS Custom Properties aren’t just static values — they’re **live**, and you can read or change them directly from JavaScript.

This makes them a powerful bridge between **your app’s logic** and **your design system** — perfect for theme toggles, dynamic sizing, or interactive UI components. Programming dymanic UI elements gain a lot from custom properties!

## Setting Regular CSS Properties with JS

Every HTML element has a `.style` object that lets you set or get CSS properties.

```js
const box = document.getElementById('box');

box.style.width = '200px';
box.style.backgroundColor = 'lightblue';
```

JavaScript property names use **camelCase**, not kebab-case (`backgroundColor` instead of `background-color`).

## Setting Custom Properties

Because custom property names begin with `--`, they can’t be accessed directly as object keys (`box.style.--size` won’t work).
Instead, use the `setProperty()` method:

```js
const box = document.getElementById('box');

box.style.setProperty('--primary-color', 'tomato');
box.style.setProperty('--size', '200px');
```

This directly updates the inline styles on the element — and your CSS immediately reacts to those new values.

## Getting Custom Property Values

To **read** a custom property’s value, use `getComputedStyle()`.
This gives you the resolved (final) styles after all inheritance, cascade, and rules have been applied.

```js
const box = document.getElementById('box');
const styles = getComputedStyle(box);

const size = styles.getPropertyValue('--size');
const color = styles.getPropertyValue('--primary-color');

console.log(size, color);
```

> 🧠 Note: Reading from `box.style.getPropertyValue('--size')` only returns **inline** styles — not values set in your CSS file. Use `getComputedStyle()` to get the *actual* computed value.

## Example: Live Theme Switcher

Here’s a simple dark/light mode toggle using JavaScript and CSS variables.

```css
:root {
  --bg-color: white;
  --text-color: black;
}

[data-theme="dark"] {
  --bg-color: #111;
  --text-color: #eee;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
  transition: background 300ms, color 300ms;
}
```

```html
<button id="theme-toggle">Toggle Theme</button>
```

```js
const root = document.documentElement; // the <html> element
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
});
```

✅ **Result:**
Click the button, and the `data-theme` attribute changes — instantly swapping CSS variable values across your entire page.

## Example: Dynamic Interaction

You can also make variables respond to user input — for example, adjusting a color, size, or animation speed.

```html
<div id="box"></div>
<input id="slider" type="range" min="50" max="300" value="150">
```

```css
#box {
  --size: 150px;
  width: var(--size);
  height: var(--size);
  background: cornflowerblue;
  transition: width 0.3s, height 0.3s;
}
```

```js
const slider = document.getElementById('slider');
const box = document.getElementById('box');

slider.addEventListener('input', () => {
  const value = `${slider.value}px`;
  box.style.setProperty('--size', value);
});
```

Now the square smoothly grows and shrinks as you drag the slider — all through **CSS variables**.

## Why This Is Powerful

CSS Custom Properties can be updated live without recalculating or reloading stylesheets.
This gives you:

* **Smooth theme changes** (light/dark, user settings)
* **Dynamic layouts** (resize cards, grid columns, etc.)
* **Interactive animations** driven by JS input
* **Performance benefits** — no DOM rewrites or class toggling needed

## Quick Summary

| Action                 | Code                                                            | Description                         |
| ---------------------- | --------------------------------------------------------------- | ----------------------------------- |
| **Set** a property     | `element.style.setProperty('--name', 'value')`                  | Changes inline CSS for that element |
| **Get inline value**   | `element.style.getPropertyValue('--name')`                      | Reads value set directly on element |
| **Get computed value** | `getComputedStyle(element).getPropertyValue('--name')`          | Reads the resolved CSS value        |
| **Update global vars** | `document.documentElement.style.setProperty('--color', 'blue')` | Changes a variable everywhere       |

✅ **Next Up:**
You’ll learn how to combine JavaScript, custom properties, and CSS math functions like `calc()` and `clamp()` to make your designs **responsive, scalable, and themeable** — all without extra classes or frameworks.

















Custom properties part 2

@property

min() clamp() etc. 



# Math in CSS with `calc()`

CSS can do math! Use it to size, space, and scale elements without hardcoding values—or to turn design tokens into dynamic layouts.

## Core ideas

* `calc()` does `+ - * /` and can **mix units** (e.g., `px` + `%`).
* Custom properties plug right into math functions.
* `@property` lets you **type** a custom property so it can animate smoothly.

## 1) `calc()` + custom properties (unit mixing)

```css
:root {
  --base: 16px;
  --scale: 1.25;         /* unitless multiplier */
  --pad: 1rem;
  --gap: 12px;
}

.card {
  /* font-size = 16px * 1.25 = 20px */
  font-size: calc(var(--base) * var(--scale));

  /* mix units: 1rem + 12px is valid */
  padding: calc(var(--pad) + var(--gap));
}
```

**Tip:** If a variable is unitless but you need a length, multiply by a unit:

```css
.box {
  --n: 100;              /* unitless */
  width: calc(var(--n) * 1px);   /* → 100px */
}
```

## 2) Responsive sizing with `clamp()`

The `clamp(min, val, max)` function clamps a value between a range of values determined by a minimum and maximum value. 

`clamp(min, preferred, max)` is perfect for fluid type and blocks:

```css
:root { --step-3: clamp(1.5rem, 1rem + 5vw, 3rem); }

h1 { font-size: var(--step-3); }
```

* **min**: never smaller than `1.5rem`
* **preferred**: scales with `vw`
* **max**: never larger than `3rem`

## 3) Fit containers with `min()` and `max()`

```css
.container {
  width: min(90vw, 68ch);   /* keep lines readable */
}
.button-row {
  gap: max(0.5rem, 1vw);    /* never let gap get too tiny */
}
```

## 4) Typed, animatable variables with `@property`

Plain custom properties are token strings. To **animate** a variable (e.g., a number), register it with `@property`.

### Example: a reveal animation driven by a typed variable

```css
/* 1) Register a typed custom property */
@property --reveal {
  syntax: '<number>';   /* This property acts as a number */
  inherits: false;
  initial-value: 0;
}

.card {
  --reveal: 0;

  /* Slide a mask from top to bottom as --reveal goes 0 → 1 */
  clip-path: inset(calc((1 - var(--reveal)) * 100%) 0 0 0);

  /* Animate the variable itself */
  transition: --reveal 450ms cubic-bezier(.2,.8,.2,1);
}
.card.is-visible { --reveal: 1; }
```

### Example: a scale variable that affects multiple properties

```css
@property --scale {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}

.tile {
  --scale: 1;
  /* scale font and padding consistently */
  font-size: calc(1rem * var(--scale));
  padding: calc(.75rem * var(--scale)) calc(1rem * var(--scale));
  transition: --scale 250ms ease;
}
.tile:hover { --scale: 1.08; }
```

> Why `@property`? It tells the browser the **type** and **initial value** so it can interpolate smoothly (instead of jumping).

## 5) Layout math: columns & grids from tokens

```css
:root { --cols: 4; --gap: 1rem; }

.grid {
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(var(--cols), 1fr);
}

/* Override per section or component */
.featured .grid { --cols: 3; --gap: 1.25rem; }
```

## 6) Motion-safe math

Respect users who prefer reduced motion; keep your math but damp animations.

```css
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0.001ms !important; animation-duration: 0.001ms !important; }
}
```

## 7) Bonus: geometry & trig (for fancy layouts)

Modern CSS supports functions like `sin()` and `cos()` (browser support varies). Great for circular UI/visuals.

```css
:root { --count: 8; }

.dot {
  --i: 0;                              /* set per element: 0..7 */
  --angle: calc(2 * pi * var(--i) / var(--count));
  transform: translate(
    calc(cos(var(--angle)) * 6rem),
    calc(sin(var(--angle)) * 6rem)
  );
}
```

## 8) Putting it together: fluid button sizing API

```css
/* Typed control for a button scale */
@property --btn-scale {
  syntax: '<number>';
  inherits: true;        /* inherit so groups can set it once */
  initial-value: 1;
}

:root {
  --btn-pad-y: .625rem;  --btn-pad-x: 1rem;
  --btn-fs: 1rem;
}

.button {
  --btn-scale: 1;

  font-size: calc(var(--btn-fs) * var(--btn-scale));
  padding: calc(var(--btn-pad-y) * var(--btn-scale))
           calc(var(--btn-pad-x) * var(--btn-scale));
  border-radius: calc(.5rem * var(--btn-scale));
  transition: --btn-scale 180ms ease, background-color 180ms ease, color 180ms ease;
}

.button.button--sm { --btn-scale: .9; }
.button.button--lg { --btn-scale: 1.15; }
.button:active      { --btn-scale: .98; }  /* subtle press */
```

## Common pitfalls (and how to avoid them)

* **Missing units**: `calc()` can combine units, but each term must be valid. Multiply unitless numbers by a unit when needed (`* 1px`).
* **Invalid at computed time**: If `var(--x)` resolves to something invalid *in context*, the whole declaration becomes invalid unless you provide a **fallback**: `var(--x, 10px)`.
* **Animation won’t run**: Custom properties don’t animate unless the browser knows how to interpolate them—register with `@property` for numbers, lengths, etc.























## Styling buttons 
The examples presented will apply custom properties to the design of buttons. Before we start styling buttons we need to answer these questions:

- What's a button? 
- When do we use them? 
- What do they look like? 

Before you start to design your buttons it's good to take a look at what other people are doing. Take a look at these: 

- https://getbootstrap.com/docs/4.5/components/buttons/
- https://get.foundation/sites/docs/button.html
- https://material.io/components/buttons

Now answer these questions:
- What properties do you see here? 
- What different styles are offered?

## CSS Custom Properties
CSS Custom Properties let you define variables in CSS. Unlike variables in other programming languages custom properties act like properties in CSS, and just like properties if the value of a custom property changes, the page updates to reflect that change. 

### Defining a custom property
Properties names must begin with `--`, rest of the name can be anything that would normally work in CSS (think: kabob-case). 

CSS Custom properties must be defined in a block. 

```CSS
--color_primary: rgba(123, 37, 44, 1.0); /* BAD! */


body {
  --color_primary: rgba(123, 37, 44, 1.0); /* Good! */
}
```

The block where a custom property is defined determines the scope of that property. 

```CSS 
body {
  /* Accessible to body and it's descendants */
  --color-primary: rgba(123, 37, 44, 1.0); 
  --font-size: 18px;

}

h1 {
  /* Available to all h1 and their descendants */
  --font-size: 2em;

}
```

Assigning a value is like setting the value of a property in CSS.`:root` is a special selector that represents the root of your CSS scope. All other elements are descendants `:root`. Defining variables here make them accessible to all other elements. Think of this as **global scope**. 

```CSS
:root {
  --color: red;
  --primary-color: rgba(123, 37, 44, 0.7);
  --size: 121px;
  --base-font-size: 16px;
  --large-font-size: 1.85em;
  --number-of-columns: 4;
  --golden-ratio: 1.618;
}
```

Using custom properties like this is like defining global constants. 

### Values 
Any value that would work in CSS can be assigned to a property. 

```CSS
:root { 
  /* Define custom properties on :root */
  --golden-ratio: 1.618; /* number no unit */
  --base-font-size: 16px; /* number with a unit */
  --bg-color: #333; /* Color */
  --base-font: Helvetica; /* Name or string */
}
```

## What's `:root`?
`:root` is a pseudo-element that matches the root element of the document tree. This is identical to the `<html>` element. `:root` has a higher [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/:root).

By declaring custom properties on `:root` they become global and available everywhere. 

Otherwise declaring a custom property on an element makes it available to that element and inherited by the element's descendants, but unavailable to it's ancestors. 

### Accessing custom property values
To access the value of a custom property use the `var()` function.

```CSS
.some-class {
  width: var(--size);
  color: var(--color);
  background-color: var(--bg-color);
}
```

For example, you might define some values in `:root` then use those values throughout the rest of your stylesheet. 

```CSS
:root {
  --golden-ratio: 1.618;
  --base-font-size: 16px;
  --large-font-size: 1.85em;
  ...
}

.main {
  --number-of-columns: 4;
  ...
  grid-template-columns: repeat(var(--number-of-columns), 1fr);
}

.alert {
  --color: red;
  --size: 121px;
  ...
  color: var(--color);
  width: var(--size);
  ...
}
```

The var function can also take a **fallback** value that is used if the custom property is not found. Here is an example: 

```CSS
:root {
  --color: var(--undefined-var, tomato);
}
```

In the example above `--color` is given the value `tomato` assuming that that the custom property `--undefined-var` is not defined. 

### Design a Button 
The default button style is not very interesting and the text is too small. Giving the button some color and making it a little larger will make it easier to use. 

```css
button {
  padding: 0.5em 0.75em;
  background-color: #fff;
  border: 1px solid;
  color: cornflowerblue;
  border-radius: 0.5em;
  font-size: 1em;
  transition: 300ms;
}

button:hover {
  background-color: cornflowerblue;
  color: #fff;
}
```

Here you have a button with a base style and a simple hover. 

```html
<button>Hello World</button>
```

Some custom properties will make this easier to manage. The button uses the same color for the background and foreground but switches these on hover. 

```css
button {
  --bg-color: #fff;
  --fg-color: cornflowerblue;

  padding: 0.5em 0.75em;
  background-color: var(--bg-color);
  border: 1px solid;
  color: var(--fg-color);
  border-radius: 0.5em;
  font-size: 1em;
  transition: 300ms;

  &:hover {
    background-color: var(--fg-color);
    color: var(--bg-color);
  }
}
```

Now the colors can be edited in one location. 

You'll often want buttons with different colors for different purposes. Look at the [button styles in Bootstrap](https://getbootstrap.com/docs/4.0/components/buttons/). Your goal is to emulate some of these. 

To change the colors and other styles of buttons using custom properties become very flexible. 

Using a class name: 

```css
button.warning {
  --fg-color: tomato; /* Red button */
}

button.action {
  --fg-color: yellowgreen; /* Green button */
}
```

```html
<button>Login</button>
<button class="warning">Delete</button>
<button class="action">Buy Now!</button>
```

**In your button example create classes for:**

- Success 
- Alert 
- Dark

What if you want to have an inverted style for your buttons? Using custom properties you can add a class that switches where the colors are applied. 

Here the `.invert` class just sets the `color` and `background-color` properties but swaps which color is used where. **These rules override the other since a selector with the class is more specific.**

```css
button.invert {
  color: var(--bg-color);
  background-color: var(--fg-color);
}

button.invert:hover {
  background-color:var(--bg-color);
  color: var(--fg-color);
}
```

```html
<button class="warning invert">Delete</button>
```

**Add an inverted style to your button styles**

What if you want to customize the color of the button? You could write another class or you could set color properties inline.

```html
<button style="--bg-color: violet; --fg-color: #fff">Use Locaton</button>
```

If your code defines colors as a theme you can use those inside your buttons by assigning their value to the properties used by the button. 

```css
:root {
  --primary-color: cornflowerblue;
  --foreground-color: #fff;
}

button {
  --bg-color: var(--foreground-color);
  --fg-color: var(--primary-color);

  ...
}
```

Now you can change the colors of all buttons and other elements that use the `--primary-color`, or change the color of any button by changing it's `--bg-color`. 

### Challenges

For all of the challenges here add an example and sample code to your CSS framework sample. 

Take a look at the buttons defined in Bootstrap. They have 9 styles: 

- Primary
- Secondary
- Success
- Danger
- Warning
- Info
- Light
- Dark
- Link (this is not a button)

Your goal is to define a style for all of these using custom properties. You'll need to define colors for each and think of a style. Don't overthink this. It's more important to get this done than it is to create new and innovative button styles. If you're having trouble thinking of styles copy Bootstrap! 

Your buttons should have the following features: 

- hover 
- transition
- Uses custom properties
- Has an inverted or outline class/style

**Stretch Challenge**

Take a look at the Bootstrap button it has a large and small size. 

https://getbootstrap.com/docs/4.0/components/buttons/#sizes

Implement large and small button sizes in your CSS framework. 

Sometimes buttons are disabled. Bootstrap does this. 

https://getbootstrap.com/docs/4.0/components/buttons/#disabled-state

Implement a disabled state in your framework. 

### Example with Custom properties

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <style>
    :root {
      /* Custom property names must begin with --

      Defining custom proeprties in :root makes them available 
      everywhere like global constants

      Anything can be a value for a cusom property */

      --color-action: tomato;
      --font-size: 20px;
      --number: 2;
      --size: 200px;
      --easing: cubic-bezier(0.075, 0.82, 0.165, 1);
      --font-stack: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
      --color-primary: cadetblue;
      --color-light: white;
    
    }

    body {
      /* Access the value of a custom property with var() */
      font-family: var(--font-stack);
      font-size: var(--font-size);
    }

    a {
      color: var(--color-primary);
    }
  </style>

  <p>Custom <a href="">properties</a>.</p>
  
  <style>
    button {
      background-color: var(--color-action);
      width: var(--size);
      font-size: var(--font-size);
    }
  </style>

  <button>Button 1</button>


  <p>This button uses the class "blue" which changes cascades a new 
    value for --color-action. The button uses the color cornflowerblue instead.</p>
  <style>
    .blue {
      --color-action: cornflowerblue;
    }
  </style>

  <button class="blue">Blue Button</button>

  <p>If a property might not be defined you can supply a fallback value.</p>

  <style>
    h1 {
      /* color: var(--not-defined, gold); */
    }
  </style>

  <h1>Uses undefined var</h1>

  <style>
    .button {
      /* Create a localy scoped var from some global vars */
      /* Notice these have fallbacks to set a default */

      --fg-color: var(--button-fg-color, var(--color-primary));
      --bg-color: var(--button-bg-color, var(--color-light));

      display: inline-block;
      color: var(--fg-color);
      background-color: var(--bg-color);
      border:1px solid;
      border-radius: 0.5rem;
      padding: 1rem;
      text-decoration: none;
    }

    .button:hover {
      /* Here we use the local vars again */

      background-color: var(--fg-color);
      color: var(--bg-color);
    }
  </style>

  <a class="button" href="#">Anchor tag</a>

  <p>You can override the default colors in a few ways.</p>

  <style>
    .warning {
      /* Use a class to set the fg and bg colors */

      --button-fg-color: gold;
      --button-bg-color: rgb(32, 154, 142);
    }

    .danger {
      --button-fg-color: white;
      --button-bg-color: tomato;
    }
  </style>

  <a class="button warning" href="#">Anchor tag</a>
  <a class="button danger" href="#">Anchor tag</a>

  <!-- Use an inline style -->
  <a 
    class="button" 
    style="--button-fg-color: purple; --button-bg-color: yellowgreen" 
    href="#">Anchor tag</a>

  <!-- It is also possible to override the default colors in other 
   ways using the rules of selectors. -->

   <style>
    .card {
      --fg-color: var(--some-color, #333);
      --bg: var(--some-bg, #eee);

      color: var(--fg-color);
      background: var(--bg);

      padding: 2rem;
      margin: 1rem;
      display: inline-block;
    }


    .dark {
      --fg-color: #eee;
      --bg: #333;
    }

    .grad {
      --fg-color:#333;
      --bg: linear-gradient(#eee, #ccc);
    }

    .grad.dark { /* 0 0 2 0 */
      --fg-color:#eee;
      --bg: linear-gradient(#333, #666);
    }
   </style>

   <div class="card">
    <h1>Hello</h1>
    <p>This is an example card</p>
  </div>

  <div class="card dark">
    <h1>World</h1>
    <p>This is an example card</p>
  </div>

  <div class="card grad">
    <h1>Foo</h1>
    <p>This is an example card</p>
  </div>

  <div class="card grad dark">
    <h1>Foo</h1>
    <p>This is an example card</p>
  </div>

</body>
</html>
```

### Math with CSS calc()
CSS supports basic math through the `calc()` method. You can use `+`, `-`, `*`, and `/`. 

```CSS
.heading {
  font-size: calc(16px * 1.85);
}

.input[type=text] {
  padding: calc(1em * 1.5);
}

.alert {
  margin: calc(1em + 5px);
}
```

The beauty of `calc()` is the ability to mix units! It may not seem like much but ask yourself what you would need to do to make this calculation: 

```CSS
calc(1em * 1.5px + 2%)
```

This is more complicated than it looks. Before you could solve the math above you need to convert all values to a common unit! With `calc()` this happens automatically, like magic!

Custom properties work with `calc()`. 

```CSS
.heading {
  --size: 16px;
  font-size: calc(var(--size) * 1.85);
}

.input[type=text] {
  --scale: 1.5;
  padding: calc(1em * var(--scale));
}
```

Pro tip! If you have a value that is just a number without a unit you can convert it to a number using `calc()` like this:

```CSS
.box {
  --size: 100;
  height: calc(var(--size) * 1px);
}
```

The code sample above changes the value of `--size` from a unitless value of `100` into `100px`.

CSS now has more math functions. [See the list here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions). This includes: `min()`, `max()`, `clamp()`, `round()`, `mod()`, `rem()`, `sin()`, `cos()`, `tan()`, `atan()`, `asin()`, `acos()`, `atan2()`, `pow()`, `sqrt()`, `hypot()`, `log()`, `exp()`, `abs()`, and `sign()`. 

## Setting Custom properties with JS
With JS you can set any CSS property on an element. 

```JavaScript
const box = document.getElementById('box')
box.style.width = '100px'
```

All CSS properties work here. Names are converted to camelcase. 

```JavaScript
box.style.borderWidth = '1em' // border-wdth
box.style.borderColor = 'red' // border-color
```

An alternate method is to use: `element.setProperty()`

```JavaScript
const box = document.getElementById('box')
box.setProperty('width', '100px')
box.setProperty('border-width', '1em')
box.setProeprty('border-color', 'red')
...
```

Custom properties don't exist in the standard JS world and even if they did you couldn't use the `--` in the name. So `element.style.--size` is not going to work. Use `element.setProperty()` for setting custom properties. 

```JavaScript
const box = document.getElementById('box')
box.setProperty('--primary-color', '#ff8844')
box.setProperty('--size', '230px')
box.setProeprty('--font-family', 'Helvetica')
```

You can also get the value of a custom property, or any property via JS. 

```JavaScript
const box = document.getElementById('box')
const size = box.getProperty('--size') // get a custom property
const color = box.getProperty('color') // get a standard property
```

## Reset CSS

The reason HTML that you write looks the way it does is because the browser applies default CSS styles to elements. 

These styles are not always consistent across browsers. While the [W3C](https://www.w3.org) defines the standards for the web it's browser makers that implement those standards. There are a lot of moving pieces and things are not always consistent across browsers and platforms. 

This can be a problem for you as a web developer. You want your products to look consistent across browsers where quirks and inconsistencies create small but sometimes important differences. 

A good strategy to eliminate some problems is to eliminate some or all of the default styles applied by the browser.

Take a look at the default styles used by browsers: 

https://bitsofco.de/a-look-at-css-resets-in-2018/

Read the article above and discuss it with your pair. 

Q: Why use a reset style sheet?
Q: How would you apply this to your work? 
Q: What are the differences between these different resets?

Choose one of the stylesheets and apply it to the example code. 

## Apply CSS Custom properties to your work

Take your CSS logo and move all of the values into CSS custom properties. Anything that is a value can be a property. Move these to a location in your code where it makes them easier to access. 

Is this an improvement? 

Take it a step further. Look at the cade and find values that are calculated from other values. Use `calc()` and custom properties to figure these values. 

Discussion: 

Q: What happened here? 
Q: Was it useful? 
Q: Does this make a better CSS code?

## Homework: Start your Framework - Fonts 

The goal of this assignment is to start your CSS Framework. This assignment will continue through the next few classes. You'll be adding features with each new assignment until it is complete. 

[Start your Framework: Fonts ](../Assignments/assignment-05-framework-fonts.md) 
Clarify what you are doing by looking at what other people are doing who are doing the same thing. Check out this awesome list of CSS Frameworks. 

- https://github.com/troxler/awesome-css-frameworks

## Additional Resources

1. https://www.sitepoint.com/css-theming-custom-properties-javascript/
1. https://codeburst.io/css-variables-explained-with-5-examples-84adaffaa5bd
1. https://css-tricks.com/css-custom-properties-theming/
1. https://github.com/troxler/awesome-css-frameworks
