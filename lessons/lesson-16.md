# ACS 3320 — Advanced CSS

## Web Components, Part 2: Lifecycle, Attributes & Slots

### Why this lesson matters

Now that you’ve met the core ideas behind Web Components, it’s time to deepen your understanding. Modern custom elements have lifecycle events, attribute APIs, and slotting features that allow you to build real UI widgets—not just decorative demos.

This lesson builds directly on your Part 1 work and prepares you to build components that cooperate cleanly with your CSS framework.

## Warm-Up Review

Before continuing, make sure these ideas feel familiar:

* A Web Component = **a custom HTML tag** you define with `customElements.define()`.
* Custom elements **must include a hyphen** in the name.
* Every custom tag is backed by a **class** that extends `HTMLElement`.
* Elements may create a **shadow root** that encapsulates markup and CSS.
* The **light DOM** is your page’s main document; the **shadow DOM** is internal to the component.

**Challenge:**
In pairs:
Explain to each other why a `<input type="range">` needs hidden internal DOM to function.
Then inspect one in DevTools.

# 1. Lifecycle Methods

Every custom element has lifecycle callbacks—hooks that let you run code when the element appears on the page or disappears from it.

```js
class MyComponent extends HTMLElement {
  constructor() {
    super();
    // Runs when the instance is created (not yet in the DOM)
  }

  connectedCallback() {
    // Runs when inserted into the DOM (rendering begins)
  }

  disconnectedCallback() {
    // Runs when removed from the DOM (cleanup time)
  }
}
```

### When to use which?

| Method                   | Use for                                               |
| ------------------------ | ----------------------------------------------------- |
| `constructor()`          | Base initialization, create shadow root, set defaults |
| `connectedCallback()`    | Start timers, attach listeners, measure layout        |
| `disconnectedCallback()` | Stop timers, remove listeners, release resources      |

### Active Challenge

Open: `01-simple-component/04-blink-text`

* Read the comments.
* Implement the blinking behavior using timers and lifecycle methods.

# 2. Working with Attributes

Attributes allow the outside world to configure your element:

```html
<blink-text time="1000" min="0.2" max="1"></blink-text>
```

To make attributes *reactive*, a component declares which ones it observes:

```js
static get observedAttributes() {
  return ['time', 'min', 'max'];
}

attributeChangedCallback(name, oldValue, newValue) {
  // Decide what to update based on name
}
```

> Note! A static method is a method owned by the class, not by an instance.

### Key Rules

* Only attributes listed in `observedAttributes` trigger `attributeChangedCallback()`.
* Attribute values come in as **strings**, so you must convert them when necessary.
* If an attribute controls timing, listeners, or layout, you will update internal state.

### Active Challenge

Open: `01-simple-component/05-blink-text-2`

* Add support for `min` and `max` attributes.
* Make the blink fade between these values.

# 3. Slots: Placing User Content Inside Your Component

Slots allow your component to render user-provided content inside a template.

### Example Structure (you’ll see this in the exercises)

```html
<slot></slot>                <!-- default slot -->
<slot name="title"></slot>   <!-- named slot -->
```

### Why slots matter

* They allow **content projection**, similar to React children or Vue slots.
* They allow your component to control layout, while the user controls content.
* They work beautifully with templates.

### Active Challenge

Open: `03-simple-components-slots`.

1. Inspect the HTML and match each visible part of `<fancy-box>` to the slots.

2. Open `fancy-box.js` and identify:

   * Template
   * Named slot
   * Unnamed slot
   * Styles using `:host`

3. Modify the component:

   * Add a new named slot (e.g., `<slot name="footer">`).
   * Update the HTML demo to supply content for it.
   * Change styles to confirm your edits appear on the page.

# 4. Shadow DOM vs Light DOM

Choosing whether to use Shadow DOM is one of the biggest design decisions in Web Components.

### Shadow DOM Pros

* Encapsulated markup + styles
* No CSS leakage (your framework won’t accidentally style internal elements)
* Predictable internal structure

### Shadow DOM Cons

* Harder to override internal styles from the outside
* More boilerplate for templates + styling
* You may need `::part()` if you want to expose stylable pieces

### Light DOM Pros

* Simpler
* Internal elements inherit global styles
* Works well for components that want to fully integrate with your CSS framework

### Light DOM Cons

* Global CSS can break your internal structure
* No encapsulation

### Active Challenge

Open: `02-simple-components-template/04-simple-slides-template`.

There are **two slideshow components**:

* One using a shadow root
* One using the light DOM

Try this:

1. Add a CSS rule to the HTML page:

   ```css
   img { border: 5px solid red; }
   ```
2. Observe which slideshow is affected.
3. Explain why.

# **5. Putting It All Together**

By now, you’ve seen:

* Lifecycle methods
* Attribute handling
* Slots
* Shadow vs light DOM
* Templates

All of these tools will come together when you build a component that integrates with your CSS framework.

# Homework

Work through the component challenges in the repo:

**01-simple-component**

* 01-hello-world
* 02-rainbow-text
* 03-ransom-note
* 04-blink-text
* 05-blink-text-2

**02-simple-component-template**

* 01-company-logo
* 02-toggle-tag
* 03-counter-template

**03-simple-components-slots**

* fancy-box + extensions

Focus on internalizing:

* lifecycle callbacks
* attributes → internal state
* templates + slots
* shadow vs light DOM tradeoffs
