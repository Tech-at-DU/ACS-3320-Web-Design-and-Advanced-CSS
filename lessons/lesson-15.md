# Web Components 1: Build Your First Component

Your CSS framework gives developers classes like `.card`. A **Web Component** goes one step further: it gives them a whole new HTML tag, like `<fw-card>`, that brings its own structure and styles. Web Components are built into the browser. They need no library, and they work in plain HTML, React, Vue, or anywhere else.

Today you'll build a card component step by step, connect it to your framework's tokens, and then start your own component for the [Web Components] assignment.

## Today

| Time | What |
|:--|:--|
| 30 min | **Show and tell:** your framework v0.2 |
| 15 min | **Part 1: Concepts** |
| 70 min | **Part 2: Build-along** (self-paced) |
| 10 min | Break |
| 40 min | **Part 3: Start your Component 1** |

## Learning Objectives

1. Define a custom element with JavaScript
2. Give it a private shadow DOM, built from a template
3. Put the page's content inside it with slots
4. Style it with your framework's tokens, and explain what crosses the shadow boundary
5. Create a variant with an attribute and `:host()`

---

## Show and tell (30 min)

Each person gets about **1 minute**: show `demo.html` with your framework v0.2. Scroll to the **forms** section. Which element was hardest to style?

---

## Part 1: Concepts (15 min)

### See it first

Open [web-components-examples/index.html](web-components-examples/index.html) with **Live Server** (see "Loading a component" below). It shows a finished `<fw-card>`. Open DevTools → **Elements** and expand a card: you'll see a `#shadow-root` inside it.

### The four pieces

| Piece | What it does | You'll write |
|:--|:--|:--|
| **Custom element** | Registers a new tag name | `customElements.define('fw-card', FwCard)` |
| **Shadow DOM** | A private DOM inside the element. Page CSS can't reach in, and the component's CSS can't leak out. | `this.attachShadow({ mode: 'open' })` |
| **Template** | The component's HTML and CSS, written once and copied into every instance | `template.content.cloneNode(true)` |
| **Slot** | A hole in the template where the page's content shows up | `<slot></slot>`, `<slot name="header"></slot>` |

### What crosses the shadow boundary

This is the most important idea today. It decides how your component connects to your framework.

| From the page into the component | Crosses? |
|:--|:--|
| Your framework's rules: `h3 { ... }`, `.btn { ... }` | ❌ No. They can't reach elements inside the shadow DOM. |
| **Custom properties**: `--color-accent`, `--space-md` | ✅ **Yes.** They inherit into the shadow DOM. |
| Inherited properties: `font-family`, `color`, `line-height` | ✅ Yes, through the host element |
| **Slotted content**: the page's own elements, shown in a slot | Stays in the page's DOM, so **your framework still styles it** |

So a component matches your framework by using your **tokens** inside its own CSS:

```css
/* inside the component's template */
:host {
  background: var(--color-surface);   /* your framework's token */
  padding: var(--space-lg);
}
```

Change a token in your framework, and every component follows.

### Loading a component

Each component lives in its own JavaScript file. Load it as a **module**:

```html
<link rel="stylesheet" href="framework.css">
<script type="module" src="elements/fw-card.js"></script>
```

**Module scripts don't load from `file://` URLs.** Open your page with **Live Server** in VS Code. If your component does nothing and the console shows a CORS error, this is why.

### Naming

Custom element names **must contain a hyphen**: `fw-card` works, `card` doesn't. Use your framework's name as the prefix, for example `<ember-card>`. Today's examples use `fw-`. Replace it with yours.

---

## Part 2: Build-along (70 min)

Build `<fw-card>` one step at a time. Each step ends with **Done when**. If you get stuck, compare with [fw-card.js](web-components-examples/fw-card.js).

### Setup (5 min)

In your **CSS Framework** repo:

1. Create a folder `elements/` and an empty file `elements/fw-card.js` (use your prefix).
2. Create `web-components.html`:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Web Components</title>
     <link rel="stylesheet" href="framework.css">
     <script type="module" src="elements/fw-card.js"></script>
   </head>
   <body>
     <fw-card>
       <h3>Cordless drill</h3>
       <p>Borrow it for up to 7 days.</p>
     </fw-card>
   </body>
   </html>
   ```
3. Change `framework.css` and `fw-card` to your file name and prefix. Open the page with **Live Server**.

**Done when:** the page opens from an `http://` address (not `file://`) and shows the heading and paragraph, styled by your framework.

### Step 1: Define the element (10 min)

Right now `<fw-card>` is an unknown tag. The browser shows its content but knows nothing about it. Register it in `elements/fw-card.js`:

```js
class FwCard extends HTMLElement {
  connectedCallback() {
    // Runs when the element is added to the page
    console.log('fw-card connected');
  }
}

customElements.define('fw-card', FwCard);
```

**Done when:** the console shows `fw-card connected`. Add a second `<fw-card>` to the page: the message appears twice, once per card.

### Step 2: Add a shadow DOM and a slot (15 min)

1. Above the class, create a template:
   ```js
   const template = document.createElement('template');
   template.innerHTML = `
     <div class="card">
       <p>This text is inside the shadow DOM.</p>
     </div>
   `;
   ```
2. Replace the class with one that attaches a shadow root and copies the template into it:
   ```js
   class FwCard extends HTMLElement {
     constructor() {
       super();
       this.attachShadow({ mode: 'open' });
       this.shadowRoot.append(template.content.cloneNode(true));
     }
   }
   ```
3. Reload. **Your heading and paragraph disappeared.** Once an element has a shadow root, its own children only show where the shadow DOM has a `<slot>`.
4. Add `<slot></slot>` inside `.card` in the template. Reload.

**Done when:** your heading and paragraph are back, and in DevTools you can see `#shadow-root` containing the slot.

### Step 3: Style it with your tokens (15 min)

Add a `<style>` element at the top of the template string:

```js
template.innerHTML = `
  <style>
    :host {
      display: block;   /* custom elements are inline by default */
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: var(--space-lg);
    }
  </style>
  <div class="card">
    <slot></slot>
  </div>
`;
```

`:host` means "the `<fw-card>` element itself."

Then try two experiments:

1. Change `--color-surface` or `--hue` in your framework's tokens. Does the card change? (It should. Tokens cross the boundary.)
2. Add `<h3>Inside the template</h3>` to the template, next to the slot. Does your framework's `h3` style apply to it? Compare it with the `<h3>` you put in the page.

**Done when:** the card uses only tokens (no raw colors or sizes), and you can explain why the two `<h3>` elements look different.

<details>
<summary>Answer to experiment 2</summary>

The `<h3>` typed into the template is inside the shadow DOM, so your framework's `h3` rule can't reach it. It only inherits `color` and `font-family` from the host, and it gets the browser's default size. The `<h3>` in the page is **slotted**: it stays in the page's DOM, so your framework still styles it. Remove the template `<h3>` before you move on.
</details>

### Step 4: Named slots (15 min)

A card has places for different content. Give each place a named slot:

```html
<header><slot name="header"></slot></header>
<div class="body"><slot></slot></div>
<footer><slot name="footer"></slot></footer>
```

The page chooses a slot with the `slot` attribute. Anything without a `slot` attribute goes into the unnamed (default) slot:

```html
<fw-card>
  <h3 slot="header">Cordless drill</h3>
  <p>Borrow it for up to 7 days.</p>
  <span slot="footer">Available now</span>
</fw-card>
```

Move the padding from `:host` to `header`, `.body`, and `footer` in the template's style, and give the footer a top border and `--color-fg-muted` text.

`::slotted(selector)` styles slotted elements from inside the component, but **the page's CSS wins** if both set the same property. Use it only for properties your framework doesn't set.

**Done when:** the header, body, and footer each show in their own area, and the footer looks quieter than the body.

### Step 5: A variant from an attribute (10 min)

`:host([attribute])` matches the element when it has that attribute. Variants need no JavaScript:

```css
:host([variant="elevated"]) {
  border-color: transparent;
  box-shadow: var(--shadow-md);
}
```

Add a second card with `variant="elevated"`.

**Done when:** the two cards look different, and the only difference in the HTML is the attribute.

### Step 6: No flash of unstyled content (5 min)

Until the script loads, the browser shows `<fw-card>` as an unknown inline element. In your framework's `components` layer, hide undefined components:

```css
@layer components {
  fw-card:not(:defined) { visibility: hidden; }
}
```

**Done when:** reloading never shows a flash of unstyled card. Your `fw-card.js` should now look like the [finished example](web-components-examples/fw-card.js).

---

## Part 3: Start your Component 1 (40 min)

The [Web Components] assignment asks for two components. **Component 1 is a static component**, built exactly the way you just built the card. Start it now.

1. Choose one:
   - `<fw-badge>`: a small label, with a `variant` attribute for color
   - `<fw-callout>`: a highlighted note with an icon slot and a message slot
   - `<fw-avatar>`: an image or initials in a circle, with a `size` attribute
   - `<fw-logo>`: your framework's logo, with a `size` attribute
   - Your own idea. It should be **static**: no clicks or timers yet.
2. Create `elements/fw-yourname.js` and add it to `web-components.html`.
3. Build it with a template, a shadow DOM, at least one slot, your tokens, and one attribute variant with `:host()`.
4. Add a usage example to your README:
   ```html
   <fw-badge variant="success">Paid</fw-badge>
   ```

**Done when:** your component shows on `web-components.html` in at least two variants, uses only tokens, and changes when you change a token in your framework.

### Stretch

- Expose an inner element with `part="label"`, then style it from the page with `fw-badge::part(label)`. ([Styling Web Components](styling-web-components.md) covers this on Thursday, Dec 3.)
- Switch your OS to dark mode. Does your component follow your framework's `light-dark()` tokens?
- More practice: the examples in the [simple-component repo](https://github.com/Tech-at-DU/simple-component).

---

## After Class

- Finish **Component 1**. It's part of the [Web Components] assignment, due **Tue, Dec 8**.
- **CSS Framework v1.0** is due **Tue, Dec 1**.
- Next class, [Web Components Part 2](lesson-16.md), covers lifecycle, attributes, and events: everything you need for Component 2, the interactive one.

## Using AI here

- **Explain:** "Explain what this line does: `this.shadowRoot.append(template.content.cloneNode(true))`."
- **Debug:** "My custom element shows nothing and the console says [paste the error]. Here's my HTML and JS."
- **Review:** "Here's my component. Does it use any hard-coded values that should be tokens?"

Don't ask AI to write the component. You need to understand every line for Component 2.

## Resources

- [MDN: Using custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [MDN: Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [MDN: Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
- Real component libraries to explore: [Web Awesome](https://webawesome.com) (formerly Shoelace), [Material Web](https://material-web.dev)

[Web Components]: ../assignments/web-components.md
