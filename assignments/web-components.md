# Assignment: Web Components for Your CSS Framework

## Overview

Modern design systems ship **CSS tokens + Web Components**. [Web Awesome](https://webawesome.com) (formerly Shoelace), Material Web, and GitHub's Primer all work this way: one CSS file of tokens, plus custom HTML tags that use them.

You'll add **two Web Components** to your CSS framework. They should look like official parts of it: same tokens, same naming prefix, same look and feel.

**Due:** Tue, Dec 8

## What You Will Learn

- Build custom elements with templates, shadow DOM, and slots
- Connect components to a design system through custom properties
- Use attributes, lifecycle callbacks, and events to build interactive components
- Make components keyboard accessible
- Document components for other developers

## Where it lives

Add the components to your **CSS Framework** repo:

```
framework.css
elements/
  fw-badge.js        ← Component 1 (use your prefix)
  fw-toggle.js       ← Component 2
web-components.html  ← demo page
```

Load each component with `<script type="module" src="elements/...">`, and test with Live Server (module scripts don't load from `file://`).

## Vanilla or Lit?

You may build your components with **vanilla Web Components** (`class extends HTMLElement`) or with **[Lit](https://lit.dev)**, a small library that removes most of the boilerplate. See the [Lit lesson](../lessons/lit-element.md). **Component 1 must be vanilla**, so you understand what the platform does.

---

## Component 1: A Static Component

Built in [Web Components Part 1](../lessons/lesson-15.md). A component with **no interactivity**, only structure and style.

Examples: `<fw-badge>`, `<fw-callout>`, `<fw-avatar>`, `<fw-logo>`, or a card.

**Must have:**

- [ ] Vanilla JS: `class extends HTMLElement`
- [ ] A template and a shadow DOM
- [ ] At least one slot (default or named)
- [ ] Styles that use only your framework's **tokens**
- [ ] At least one **variant** set by an attribute and styled with `:host([...])`

## Component 2: An Interactive Component

Built after [Web Components Part 2](../lessons/lesson-16.md). A component the user **interacts with**, which keeps track of its own state.

Examples: a toggle switch, an accordion or disclosure panel, a counter or stepper, a dismissible alert, or tabs.

**Must have:**

- [ ] Event listeners (click, keydown, etc.)
- [ ] `connectedCallback()` to add listeners, and `disconnectedCallback()` to remove them
- [ ] At least one attribute the user can set, watched with `observedAttributes` (e.g., `open`, `value`, `checked`)
- [ ] A `CustomEvent` that tells the page when the state changes
- [ ] Keyboard support: it works with Tab, and Enter or Space
- [ ] Every state from your state matrix: hover, focus-visible, active, disabled if relevant, and the component's own states (e.g., open and closed)

---

## Requirements for both components

- **Your prefix:** `<ember-badge>`, not `<fw-badge>`. Replace `fw` with your framework's name.
- **Your tokens:** colors, spacing, radius, type, and motion all come from your framework's custom properties. No raw values.
- **No flash of unstyled content:** hide `:not(:defined)` components in your framework's components layer.
- **Documented:** a usage example for each component in your README:
  ```html
  <ember-badge variant="success">Paid</ember-badge>
  ```

## Demo page

`web-components.html` links your framework and shows **every component in every variant and state**. Put a short heading and usage example above each one, like a real design system's docs.

## Submission

Submit your **CSS Framework** repo to Gradescope, containing:

1. `elements/` with your two component files
2. `web-components.html`
3. A **Web Components** section in your README. For each component: what it does, a usage example, and its attributes, slots, and events.
4. Your `DESIGN-LOG.md` with a **state matrix** for Component 2 and the AI prompts you used

## Stretch challenges

- **A third, "smart" component:** a carousel, countdown timer, toast manager, character counter, or theme switcher. It uses a timer, animation, or measurement, and handles `prefers-reduced-motion`.
- **`::part()`:** let developers style one inner element from outside.
- **Form-associated:** make Component 2 work inside a `<form>`.
- **Publish:** put the demo page on GitHub Pages.

## Using AI on this project

AI tools are good at Web Component boilerplate and bad at making components that fit **your** design system. Use them to:

- Explain lifecycle and shadow DOM behavior you don't understand
- Review a component against the state checklist and for keyboard accessibility
- Debug errors from the console

Write the styling yourself with your tokens, and be able to explain every line. Log the prompts you use in your design log.

## Rubric

| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** | **Points** |
|:--|:--|:--|:--|:--:|
| **Component 1: Static** | Missing, or missing a template, shadow DOM, slot, or variant. | Vanilla, with a template, shadow DOM, slot, and an attribute variant. | Several well-designed variants and slots; feels like a finished library component. | /10 |
| **Component 2: Interactive** | Missing, or missing events, lifecycle, attributes, or a CustomEvent. | Listeners added and removed in lifecycle callbacks, observed attributes, and a CustomEvent. | Robust: state stays in sync with attributes, and the component cleans up after itself. | /15 |
| **Design System Integration** | Hard-coded styles; components don't match the framework. | Only tokens; the components match the framework, and the prefix is used. | Changing a token or switching to dark mode updates every component with no other changes. | /10 |
| **States & Accessibility** | Not keyboard usable, or no focus states. | Keyboard accessible, visible focus, appropriate ARIA, and a full state matrix for Component 2. | Thoughtful focus handling and announcements; reduced motion handled. | /10 |
| **Demo, Docs & Design Log** | No demo page or usage docs. | The demo shows every component and variant; the README documents attributes, slots, and events; the log has a state matrix and AI use. | Reads like a real design system's documentation; published live. | /5 |

### Total Points: /50
