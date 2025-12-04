# Styling Web Components: `:host` and `::part()`

When you create a Web Component with a shadow DOM, its internal styles are **encapsulated** — meaning the outside page cannot reach inside and style internal elements.

This is good for isolation…
…but what if you *want* the user to style certain parts of your component?

Two core CSS tools help you manage this:

# 1. `:host` — Styling the Custom Element Itself

Inside a component’s shadow DOM, you *cannot* select the custom element using its tag name (`my-button`).
So Lit / Web Components give you a special selector:

```css
:host {
  display: inline-block;
  color: var(--btn-color, black);
}
```

**`:host` styles the element *from within its own shadow DOM*.**

Example:

```css
:host {
  border-radius: 6px;
  padding: 0.5rem 1rem;
}
```

These styles apply to:

```html
<my-button></my-button>
```

### `:host()` for conditional styling

You can style your component based on attributes or classes on the *element itself*:

```css
:host([variant="primary"]) {
  background: blue;
  color: white;
}

:host(.danger) {
  background: red;
}
```

So:

```html
<my-button variant="primary"></my-button>
<my-button class="danger"></my-button>
```

Both change appearance **without exposing internal markup**.

# 2. `::part()` — Allowing Users to Style Internal Elements

Shadow DOM normally prevents external CSS from reaching internal nodes.

But sometimes you *want* users to customize specific pieces of your component—like buttons, labels, icons, or counters.

**`::part()` is how you safely expose internal elements for styling.**

Inside your template:

```html
<div part="button">Click me</div>
```

Now, **outside the component**, the user can do:

```css
my-counter::part(button) {
  background: var(--color-primary);
  padding: 0.5rem;
}
```

This is the *only* selector that crosses the shadow boundary **on purpose**.

### Why use `::part()`?

* lets you preserve full shadow DOM encapsulation
* but still allow the user to customize specific elements
* without breaking your internal structure
* and without requiring utility classes or global CSS hacks

**Design systems (Shoelace, FAST, Adobe Spectrum) rely heavily on `::part()`.**

# Example Connecting Both Concepts

Inside your component:

```html
<div part="label">Count: </div>
<span part="value">0</span>
```

Inside shadow DOM CSS:

```css
:host {
  display: inline-flex;
  align-items: center;
}
```

Outside styles (user land):

```css
my-counter::part(label) {
  font-weight: bold;
  color: gray;
}

my-counter::part(value) {
  font-size: 2rem;
}
```

# Summary

**`:host`**

* Styles the custom element itself.
* Use `:host([attr])` for attribute-based variants.

**`::part(name)`**

* Lets *external* CSS style *internal* shadow-DOM elements.
* Only works if you explicitly expose parts using `part="..."`.

# Try it yourself

Add both selectors to your existing Web Component:

**1. Inside your shadow DOM template:**

```html
<div part="button">+</div>
<div part="display">0</div>
```

**2. Inside your component’s stylesheet:**

```css
:host([variant="outline"]) {
  border: 1px solid currentColor;
}
```

**3. Outside (in your test HTML page):**

```css
my-counter::part(button) {
  background: rebeccapurple;
  color: white;
}
```

Observe what changes — and what doesn’t.

## Do CSS Variables Work in Shadow DOM? Yes — and Here’s the Rule

CSS custom properties **do** pass into a shadow root, and the rule is simple:

### Custom properties inherit downward—from the page → the host element → into the shadow DOM.

That means if you define:

```css
:root {
  --brand-color: hotpink;
}
```

or even:

```html
<lit-counter style="--brand-color: hotpink"></lit-counter>
```

Then *anything* inside the component’s shadow DOM can use:

```css
color: var(--brand-color);
```

This works because CSS variables behave like normal inherited CSS properties.

## What *does NOT* cross the boundary

### ❌ Regular CSS selectors cannot style inside shadow DOM.

You cannot do:

```css
lit-counter button { color: red; }   /* won’t work */
```

The shadow DOM blocks selectors — not variables.

### ❌ Variables defined *inside* the shadow root do NOT leak outward.

```css
:host {
  --internal-color: blue;
}
```

Light DOM can’t use `var(--internal-color)` unless you expose it through `::part`.

## **The mental model**

Think of it like this:

```
Page styles (including :root)
        ↓
<my-component>  ← the host element
        ↓  (variables inherit)
Shadow DOM styles
```

Custom properties flow **into** the component.
They never flow **out** of it.

## **Why this matters**

This is how design systems theme components:

* Shadow DOM keeps internal structure safe and private
* Custom properties allow easy external theming
* You get encapsulation *and* flexibility

**Shadow DOM keeps the markup private.
Custom properties keep the styling open.**
