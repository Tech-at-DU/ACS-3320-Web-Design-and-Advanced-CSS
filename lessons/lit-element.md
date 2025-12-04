# ACS 3320 — Introduction to LitElement

## Why Learn LitElement?

LitElement is a lightweight library from Google that makes it easier to build **Web Components**—custom HTML elements with their own encapsulated structure and styles.

You already know the core Web Components APIs (`customElements.define`, `shadowRoot`, templates, attributes, etc.). Lit builds on these and solves several pain points:

* Rendering HTML is easier
* Styles are easier to organize
* Properties are reactive
* You write far less boilerplate
* Components stay small, fast, and framework-agnostic

Lit is used in real products (Google, Adobe, Shoelace UI, Ionic, Vaadin), and understanding it gives you a strong foundation in modern component design.

Get the examples: https://github.com/Tech-at-DU/LitElement-Examples

## What Is LitElement?

LitElement is a base class you extend to create custom elements.

A Lit component looks like this:

```js
import { LitElement, html, css }
  from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class MyElement extends LitElement {
  static properties = {
    message: { type: String }
  };

  constructor() {
    super();
    this.message = "Hello from Lit!";
  }

  static styles = css`
    p { color: hotpink; }
  `;

  render() {
    return html`<p>${this.message}</p>`;
  }
}

customElements.define('my-element', MyElement);
```

Then in HTML:

```html
<my-element></my-element>
```

Lit takes care of:

* Creating and updating the shadow DOM
* Re-rendering when properties change
* Efficient DOM updates
* Scoping styles
* Mapping attributes ↔ properties

## Key LitElement Concepts

### 1. Reactive Properties

Declare properties in the `static properties` object:

```js
static properties = {
  count: { type: Number, reflect: true }
};
```

Reactive means:
→ When you update `this.count`, Lit automatically re-renders.

`reflect: true` also mirrors the value into the element’s attribute.

### 2. The `render()` Function

Your component’s UI is defined in a template literal wrapped with the `html` tag:

```js
render() {
  return html`
    <button @click=${this._increment}>+</button>
    <span>${this.count}</span>
  `;
}
```

Lit updates only what changes—no full DOM rebuild.

### 3. Component Styles

Use the `css` tagged template:

```js
static styles = css`
  :host { display: inline-block; }
  button { padding: 0.5rem; }
`;
```

Styles apply inside the shadow DOM only.

Custom properties DO cross from the light to the shadow DOM. Look for this in the examples! 

### 4. Events With `@event` Syntax

```js
<button @click=${this._increment}>+</button>
```

Lit automatically binds `this`.

### 5. Lifecycle Methods

You can use normal Web Component lifecycle hooks:

* `connectedCallback()`
* `disconnectedCallback()`

Lit also adds:

* `firstUpdated()` → runs after first render
* `updated()` → runs after a reactive update

# Lit Example

```js
class LitToggle extends LitElement {
  static properties = {
    on: { type: Boolean, reflect: true }
  };

  constructor() {
    super();
    this.on = false;
  }

  static styles = css`
    .toggle {
      padding: 0.5rem 1rem;
      border-radius: 6px;
      cursor: pointer;
      background: lightgray;
    }
    .on {
      background: limegreen;
      color: white;
    }
  `;

  render() {
    return html`
      <div class="toggle ${this.on ? 'on' : ''}"
           @click=${this._toggle}>
        ${this.on ? "ON" : "OFF"}
      </div>
    `;
  }

  _toggle() {
    this.on = !this.on;
  }
}

customElements.define('lit-toggle', LitToggle);
```

## Try It Now

### Exercise 1 — Make Your Own Lit Component

Create a new Lit component called `<lit-greeting>` that:

* Has a reactive `name` property
* Displays “Hello, NAME!”
* Updates when you change the attribute `<lit-greeting name="Sam"></lit-greeting>`

### Exercise 2 — Style With Custom Properties

Update your component so the user can style the text color:

```css
:host {
  --color: blue;
  color: var(--color);
}
```

Try overriding in HTML:

```html
<lit-greeting name="Sam" style="--color: tomato;"></lit-greeting>
```

### Exercise 3 — Add Interactivity

Add a button inside the component that changes the greeting when clicked.

# Takeaways

By mastering LitElement, you get:

* Clean, modern component design
* A bridge between “vanilla Web Components” and full frameworks
* Reusable elements that work in any app (React, Vue, Svelte, plain HTML)
* A pattern very similar to professional design systems

This is your first step toward building a real component library that complements your CSS framework.


