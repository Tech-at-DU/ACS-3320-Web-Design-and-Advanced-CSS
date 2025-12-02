# ACS 3320 — Advanced CSS

## Intro to Web Components

### Why this matters

Web Components are **native browser technology** for building reusable UI elements.
They’re already used in real systems and work without extra libraries. Because they’re built into the platform, they’re unusually portable—usable in plain HTML, or inside React, Vue, Svelte, etc.

An official MDN overview summarizes them as a suite of technologies that let you create reusable, encapsulated custom elements. ([MDN Web Docs][1])

---

## Learning objectives

By the end of today, you should be able to:

1. Name the core Web Components technologies
2. Build a basic custom element with JavaScript
3. Style it, encapsulate it, and slot content inside it
4. Understand how a Web Component could fit into the CSS framework you’re building

---

## Big picture: components ≈ reusable pieces

Think of a web page like a stack of reusable parts—buttons, cards, navbars, tooltips, forms. Browser HTML gives you some pieces out of the box, like `<input>` in many flavors. But when you need a new kind of widget, you often build it from scratch with lots of markup, CSS, and JS.

Web Components let you define **your own tags** that bundle structure, behavior, and style into a single reusable element.

Example: instead of the long Bootstrap carousel markup, imagine a single tag:

```html
<frmwrk-slides time="5000">
  <img src="kitten-0.jpeg">
  <img src="kitten-1.jpeg">
  <!-- more images -->
</frmwrk-slides>
```

That single tag carries everything needed—your component code knows how to render, slide, and style the images, so the page author writes far less markup.

---

## Before you build: quick exploration task

**Hands‑on:** open the Shoelace Web Components demo page. 

https://shoelace.style

* Look at the kinds of components provided.
* Try to use one example in a blank HTML page.
* Answer these in a few sentences:

  1. What types of components are provided?
  2. Do these appear usable inside React or Vue?
  3. Can you style them? How easy does it seem?

*This gives context: production Web Components are already out there.*

---

## Core tech you need to know

Web Components come from four native browser features.

### 1. Custom Elements

Define a new tag and its behavior in JavaScript.

```js
customElements.define('my-element', class extends HTMLElement { ... });
```

Custom elementsd include lifecycle callbacks such as `connectedCallback`, `attributeChangedCallback`, etc.

### 2. Shadow DOM

Encapsulates an element’s internal markup and styles so they don’t leak out—or get overridden—by the page’s global styles.

```js
this.attachShadow({ mode: 'open' });
```

### 3. HTML Templates

Reusable, inert fragments of HTML and CSS. They don’t render until you clone and insert them.

```js
const template = document.createElement('template');
template.innerHTML = `...`;
const clone = template.content.cloneNode(true);
```

### 4. Slots

Points where user‑provided content is projected inside your component.

```html
<slot></slot>
<slot name="header"></slot>
```

---

## Styling tools you’ll use inside components

* `:host` / `:host()` — style the custom element itself from inside its shadow DOM
* `::slotted()` — style content supplied by whoever uses your component
* `::part()` — allow external styles to target specific internal parts, when you choose to expose them

---

## Optional but useful additions you’ll see in real components

* **CustomEvent** to communicate state outward, e.g. `dispatchEvent(new CustomEvent('change', ...))`
* **Constructable Stylesheets** to share CSS across many components
* **Form‑associated custom elements** when integrating with forms
* **Declarative Shadow DOM** (emerging, optional)

These aren’t strictly required today, but good to know they exist and may show up in examples or future work.

---

## Examples

Your goal is to work through the examples here: https://github.com/Tech-at-DU/simple-component

- 01 Simple Component - These examples show the basics of custom elements and shadow DOM
  - 01 Hello World - Open this example in the browser, read the comments and solve the challenge problems you find there. 
  - 02 Rainbow Text - Read the comments and solve the challenge problems you find there. 
- 02 Simple Component Templates - These examples illustrate the use of templates. 
  - 01 Company logo - Open the example in your broswer. Read the comments in the source code and solve the challenge problems you find there. 
  - 02 Toggle Tag - Read the comments, and solve the challenge problems. 

---

## Active learning exercises

Use these right after the demo or as homework during class.

### Exercise A — Inspect native inputs

Open a page with `<input>` elements. Inspect them using DevTools.

* Notice whether they have a shadow root or some internal structure.
* Think: why does the browser need a hidden inner structure to build a native widget?

### Exercise B — Build a tiny component

In pairs or small groups, sketch a component idea for your framework—something basic, like:

* `<theme-toggle>`
* `<mini-alert>`
* `<badge>`

For each idea, answer:

1. What slots or content might it need?
2. What attribute(s) control behavior or appearance?
3. What styles should come from your framework’s tokens?

Later in the week, you’ll pick one of these and implement it.

### Exercise C — Reading & reflection

After working through a short tutorial or demo file, write one sentence on each:

* What was easiest to understand?
* What was most confusing?
* What question would you ask the instructor or a teammate?

---

## Practical notes for your own code

### Naming custom elements

* Names must contain a hyphen, so they don’t collide with standard tags.

  * Good: `my-component`, `frmwrk-blink`
  * Bad: `mycomponent`, `blink`
* Using a prefix tied to your framework or project reduces collisions, e.g., `<frmwrk-*>`.

### Typical structure of a simple component

1. Extend `HTMLElement`
2. Create a shadow root in the constructor
3. Clone and append a template into that shadow root
4. Add event listeners in `connectedCallback`
5. Clean up in `disconnectedCallback`
6. Use `attributeChangedCallback` if needed to react to attribute changes

---

## What to do next

**Homework:**
Work through the basic Web Component examples in the repository
(hello world, rainbow text, logo, toggle, and counter examples). Aim to finish at least the first few today.
Links, tutorials, and guides are provided in the repo and the class page.
