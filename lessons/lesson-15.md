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












































# ACS 3320 - Advanced CSS - Exploring Web Components

## Why you should know this?

Web Components could be the most important new and emerging web technology. Many large companies are using web components right now and more could follow in the future. Libraries and frameworks built around web components are also emerging. 

The secret to Web components is that they are a core web technology, and require no extra libraries to make them work. 

## Learning Objectives 

1. Identify major features of Web Components
1. Create elements with JS
1. Style elements with JS
1. Build Web Components

## What are web components?

Read this article, it provides a great overview of web components: https://kinsta.com/blog/web-components/

## Lets talk about web components

Just like a lot of household objects, web pages are made up of component parts. For example a chair might be made up of some wheels, a frame, and a cushion. A web page might be made up of text blocks, navbars, buttons, and images.

We handle all of these things with HTML elements/tags. Some of these elements are very specialized and come with built in functionality.

For example, think about the `<input>` element. This can appear in many different forms and each form comes with special functions. Try these:

```HTML
<input type="text" />
<input type="checkbox" />
<input type="range" />
<input type="color" />
```

Some functionality doesn't exist in an HTML document. We have to make it work by creating a hierarchy of elements, styling those elements, and applying JavaScript to those elements. 

### Web component use case

For an example think about the carousel in BootStrap. The markup looks like this: 

```HTML
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
```

- https://getbootstrap.com/docs/4.0/components/carousel/

What does this have to do with web components? In a nutshell web components are new tags that you define,thse tags encapsulate new built-in functionality. 

Imagine creating the carousel above with a custom carousel tag like this: 

```HTML
<frmwrk-slides time="5000">
  <img src="./images/kitten-0.jpeg" width="259" height="194">
  <img src="./images/kitten-1.jpeg" width="257" height="196">
  <img src="./images/kitten-2.jpeg" width="259" height="194">
  <img src="./images/kitten-3.jpeg" width="275" height="183">
  <img src="./images/kitten-4.jpeg" width="275" height="183">
  <img src="./images/kitten-5.jpeg" width="275" height="183">
</frmwrk-slides>
```

Using a web component no extra markup is needed, and all of the styles are encapsulated. (See the code examples for todays lesson for an example of this web component carousel)

Here the tag `<frmwrk-slides>` defines the carousel, and all of the children become carousel items. The `time` attribute determines the time between slides. 

While the two examples are similar the second has less required markup and doesn't require that you add the correct class names in the correct places through out.

### Library of Web Components

Web pages could be created with a library of custom web components. Check out this library of web components: https://shoelace.style. This library is built around web components. Be sure to check the source code in the examples. 

When you are finished answer these questions: 

- How Components used? 
- What types of components are provided? 
- Do these components work with React or Vue? 
- Can you style these components? 

## What is a web component? 

Web Components are custom, reusable UI elements built from **four native browser technologies**. Web components are built on the following native features:

### **1. Custom Elements**

Define new HTML tags with lifecycle callbacks.
`customElements.define('my-element', class {...})`

### **2. Shadow DOM**

Encapsulates markup and styles.
`this.attachShadow({ mode: 'open' })`

### **3. HTML Templates**

Inert HTML/CSS that can be cloned into a component.
`template.content.cloneNode(true)`

### **4. Slots**

Let users insert their own content into a component.
`<slot></slot>`, `<slot name="header"></slot>`

## **CSS Tools for Styling Web Components**

* `:host` / `:host()` – style the custom element itself
* `::slotted()` – style user-provided slotted content
* `::part()` – expose internal parts for external styling

## **Other Features Often Used With Web Components**

* **CustomEvent** – communicate state (`dispatchEvent()`)
* **Constructable Stylesheets** – share CSS across components
* **Form-associated custom elements** – integrate with `<form>`
* **Declarative Shadow DOM** (optional)

### Shadow DOM
A core feature of web components is the Shadow DOM. The Shadow DOM is another DOM that is hidden from rest of your HTML document. Often you will need to add extra markup to support complex elements and interactions. The shadow DOM allows you to create these elements and hide them from the rest of the HTML document. 

The shadow DOM is in use by many existing HTML elements like the `<input>`. Inspect this for yourself. Create an HTML document with:

```HTML
<input type="text" />
<input type="checkbox" />
<input type="range" />
<input type="color" />
```

Using the inspector find the `shadow content` or `Shadow-Root`. You will first need to make this visible by checking `Show user agent Shadow DOM` in Chrome under Settings > Preference > Elements > `Show user agent Shadow DOM` . 

## Getting Started with Web Components

Work through the challenges here: https://github.com/Tech-at-DU/simple-component

Follow this by studying the guide here:

- https://javascript.info/webcomponents-intro
- https://javascript.info/custom-elements
- https://javascript.info/shadow-dom

The goal is to create a custom element/web component that will be included 
with your CSS framework.

Anyone using your web CSS framework would get a set of styles. Adding your JS they will also be able to use your custom elements.

These components are fairly simple. You'll be tackling more complex components next week.

Read about how GitHub is using web components: https://github.blog/2021-05-04-how-we-use-web-components-at-github/

### Naming custom elements

When creating web components you are creating new tags. It's possible that the names can clash with existing names. For this reason, custom element names must use a hyphen (-). 

- `my-component` good
- `frmwork-blink` good
- `mycomponent` bad
- `blink` bad

When using custom tags you must use a closing tag, even if the tag is empty. 

- `<my-component></my-component>` good
- `<frmwrk-blink></frmwrk-blink>` better
- `<my-component />` bad
- `<frmwrkblink>` worse

It's a good idea to prefix all of your names with the name of your framework. For example, if Bootstrap used web components all of their tags could start with `bs-`:

```html
<bs-carousel></bs-carousel>
```

### Extend HTMLElement and define a new tag

Extend HTMLElement and call super in the constructor. 

Call `customElements.define()` with the name of your new tag and the class that will provide the JS for the new tag.

```JS 
// Create a class that backs the new element
class MyElement extends HTMLElement {
  constructor() {
    super()
      ...
    }
  ...
}

// Define the new element
customElements.define('my-element', MyElement)
```

### Property names 

Since you are extending HTMLElement you'll need to be careful about overriding properties that exist in HTMLElement. 

Best practice: Use an underscore in front of all of the property names you define. 

```JS 
this._name = 'widget' // good
this.name = 'wonky' // bad
```

### Shadow Root 

Create a shadow root in your constructor. Probably a good idea to store this in a property. 

This attaches a shadow root and stores it in a property: `_shadowRoot`

```JS 
...
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
      ...
    }
 ...
```

## Lifecycle Methods 

Use lifecycle methods to initialize and deinitialize your web component. 

The **connectedCallback()** method is called when the component is added to the DOM. Use this to start timers, set initial property values or measure the size of the component. 

The **disconnectedCallback()** method is called when the component is removed from the DOM. Use this to clean up. Do things like stop timers, and free resources that you may be using. 

```JS
class BlinkText extends HTMLElement {
  constructor() {
    super();
    ...
  }

  connectedCallback() {
    // When the component is added to the DOM
  }

  disconnectedCallback() {
    // When the component is removed from the DOM
  }
}

customElements.define('blink-text', BlinkText);
```

## handling attributes 

Attributes appear in tags like this: 

```html
<my-element time="1000" min="0" max="5">
  ...
</my-element>
```

The attributes are: time, min, and max above. 

Attributes allow us to pass data into our custom elements. 

Internally the custom element needs to define what attributes it observes. Some attributes don't need to be observed for example: class, and id. 

```JS
class BlinkText extends HTMLElement {
  constructor() {
    super();
    ...
  }


  // Name the observed attribues 
  static get observedAttributes() {
    return ['time', 'min', 'max'];
  }  

  // Handle changes to observed attributes
  attributeChangedCallback(name, oldValue, newValue) {
    
  }
}

customElements.define('blink-text', BlinkText);
```

Handle changes to attributes by looking at the name to see which attribute has changed, then compares the old and new values to decide how to change the attribute. 

```JS
attributeChangedCallback(name, oldValue, newValue) {
  // If the attribute changed was named time
  if (name === 'time') {
    // parse the new value, we want a number
    const time = parseInt(newValue)
    if (isNanN(time)) {
      // If it's not a number stop!
      return
    }
    // If it is a number use that new value
    this._time = time
    this._clearTimer()
    this._addTimer()
  }
}
```

## Homework

Your goal is to solve the web component problems here: 

https://github.com/Tech-at-DU/simple-component

Solve the first three examples in folder 01, and 02. 

- 01-simple-component
  - 01-hello-world
  - 02-rainbow-text
  - 03-ransome-note
- 02-simple-component-template
  - 01-company-logo
  - 02-toggle-tag
  - 03-counter-template

