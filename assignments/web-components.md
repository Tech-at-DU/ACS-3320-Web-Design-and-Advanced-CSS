# Homework: Build Three Web Components for Your CSS Framework

### *The Future of Your Framework Starts Here*

Modern design systems increasingly ship **CSS tokens + Web Components** instead of giant JavaScript frameworks.
Shoelace, Material Web, FAST, Adobe Spectrum Web Components, Ionic, GitHub’s Primer Elements—all follow this model.

This assignment asks you to take a step into that future.

You will design **three Web Components** that complement the CSS framework you built earlier in the semester. These components should be visually aligned with your design system, use your design tokens, and feel like “official” parts of your UI library.

# Goals

* Practice building Web Components that are **practical**, not ornamental
* Integrate components with your existing **CSS design tokens**
* Use templates, attributes, lifecycle callbacks, and (if appropriate) shadow DOM
* Think like a **design system author**, not just a JS implementer

# Requirements

You must build **three web components**, each meeting specific constraints:

## Component 1 — A Visual, Static Component

A component with **no interactivity** beyond markup and style.
Examples (choose one or invent your own):

* `<frmwk-card>` (uses slots for header, body, footer)
* `<frmwk-badge>`
* `<frmwk-avatar>`
* `<frmwk-callout>`
* `<frmwk-logo>`

**Must use:**

* Template
* Optional shadow DOM
* Your framework’s spacing, colors, and typography variables
* At least one slot (named or default)

## Component 2 — An Interactive Component

A component with **user interaction**, event handling, and internal state.
Examples:

* Toggle switch (like `<frmwk-toggle>`)
* Tabs (`<frmwk-tabs>` + `<frmwk-tab>`)
* Accordion / disclosure panel
* Counter / stepper
* Tooltip
* `<frmwk-alert dismissible>`

**Must use:**

* Event listeners (click, change, etc.)
* `connectedCallback()` + `disconnectedCallback()`
* Attributes that users can pass in (e.g., `open`, `value`, `variant`)
* Dispatch a CustomEvent to communicate changes outward

## Component 3 — A “Smart” Component

A component that **does something dynamic**, such as animation, timers, or layout logic.
Think of this as a “rich widget” built from scratch.

Examples:

* Image carousel / slideshow
* Countdown timer
* Toast notification manager
* Progress bar that animates
* Character counter that updates as you type
* Animated number ticker
* “Theme switcher” that toggles CSS variables on `<html>`

**Must use:**

* Attributes that control behavior (e.g., `time`, `transition`, `paused`)
* At least one internal method (`_next()`, `_update()`, etc.)
* Shadow DOM strongly recommended
* A timer OR animation OR DOM measurement OR auto-advancing behavior

# Integration Requirements (for all components)

All three components must:

### ✓ Use your existing CSS framework

Your colors, spacing, radii, typography, shadows, etc.
You can import them, or expose internal parts using `::part()`.

### ✓ Use your naming prefix

For example:
`<aurora-card>`, `<aurora-tabs>`, `<aurora-carousel>`
(Replace *aurora* with your framework name.)

### ✓ Be documented

Each component should include **basic usage examples** in HTML:

```html
<frmwk-card variant="info">
  <h3 slot="header">Account Status</h3>
  <p>Everything looks good.</p>
</frmwk-card>
```

### ✓ Be accessible

Doesn’t need to be perfect, but consider:

* Keyboard accessibility for interactive parts
* ARIA attributes where appropriate
* Focus handling
* Visible states (focus, hover, pressed)

# Submission Expectations

Submit:

1. **Three component `.js` files**
2. An **HTML demo page** showing each component in use
3. A short **write-up** (1–2 paragraphs each) describing

   * The problem each component solves
   * Why it belongs in your design system
   * How it uses your framework’s styles
   * Any future improvements you would make

# Stretch Challenges (Optional, Highly Recommended)

* Use `::part()` to allow external styling
* Add a “variant” attribute (outline, solid, danger, etc.)
* Expose CustomEvents with `detail` objects
* Make one component form-associated
* Add dark-mode support by switching CSS variables
* Publish your components publicly (GitHub Pages, Netlify, Vercel)

# **The Big Picture**

This assignment is more than practice:
you’re creating the beginnings of a **design system**.

Your CSS framework + your Web Component library together form a complete **UI toolkit**—something real teams ship, maintain, and evolve.
