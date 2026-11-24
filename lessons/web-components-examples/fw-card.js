// <fw-card>: a card component for the framework.
//
// Usage:
//   <fw-card variant="elevated">
//     <h3 slot="header">Title</h3>
//     <p>Body text goes in the default slot.</p>
//     <span slot="footer">Footer text</span>
//   </fw-card>

const template = document.createElement('template');

template.innerHTML = `
  <style>
    /* :host is the <fw-card> element itself. Custom elements
       are inline by default, so make it a block. */
    :host {
      display: block;
      /* Tokens are custom properties, and custom properties
         inherit INTO the shadow DOM. This is how the component
         matches the framework. */
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      overflow: hidden;
    }

    /* An attribute on the element switches the variant. No JavaScript. */
    :host([variant="elevated"]) {
      border-color: transparent;
      box-shadow: var(--shadow-md);
    }

    header { padding: var(--space-md) var(--space-lg) 0; }

    /* Less padding at the bottom: the slotted <p> brings its own
       bottom margin from the framework. */
    .body  { padding: var(--space-sm) var(--space-lg) var(--space-sm); }

    footer {
      padding: var(--space-md) var(--space-lg);
      border-top: 1px solid var(--color-border);
      font-size: var(--font-size-sm);
      color: var(--color-fg-muted);
    }

    /* ::slotted() styles elements the page put in a slot.
       It's a FALLBACK: if the page's CSS sets the same property,
       the page wins. (The framework's h3 margin beats any ::slotted
       margin.) Use it for properties the framework doesn't set. */
    ::slotted([slot="footer"]) { font-weight: 600; }
  </style>

  <header><slot name="header"></slot></header>
  <div class="body"><slot></slot></div>
  <footer><slot name="footer"></slot></footer>
`;

class FwCard extends HTMLElement {
  constructor() {
    super();
    // The shadow root is the component's private DOM.
    this.attachShadow({ mode: 'open' });
    // Clone the template so every card gets its own copy.
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define('fw-card', FwCard);
