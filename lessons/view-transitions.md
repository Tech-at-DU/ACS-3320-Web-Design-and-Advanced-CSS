# Introduction to View Transitions

Modern browsers now support **View Transitions**, a feature that allows smooth animated changes when navigating between pages or updating content. Historically, transitions like this required JavaScript-heavy single-page apps. With the View Transitions API, even simple multi-page sites can animate between documents using just CSS.

A View Transition works by taking a snapshot of the **old page**, then a snapshot of the **new page**, and animating between those two layers. Once enabled, the browser applies a default fade between pages—but with a few CSS rules, you can override that behavior and create custom transitions.

This lesson uses **multi-page (MPA) examples**, so you can see exactly how the browser handles document-to-document transitions without extra tooling or JavaScript.

## Key Concepts

### **`@view-transition`**

This CSS at-rule enables navigation transitions.
When you write:

```css
@view-transition {
  navigation: auto;
}
```

you’re telling the browser:

> “Whenever this page navigates to another page on the same origin, create a view transition between them.”

Without this rule, *no* transitions occur—even if your custom animation code is valid.

### **`::view-transition-old(root)`**

When a transition begins, the browser creates temporary layers that represent:

* the outgoing page → **old(root)**
* the incoming page → **new(root)**

`::view-transition-old(root)` is a pseudo-element representing a **snapshot of the entire document before navigation**.

You can style it like this:

```css
::view-transition-old(root) {
  animation: none;
}
```

This lets you control **how the old page disappears**.
Disabling the default fade is often the first step in creating your own transition.

There is a matching pseudo-element:

```css
::view-transition-new(root)
```

for animating the incoming page.

### **`view-transition-name: picture`**

To animate a specific element across pages, both pages must mark that element with the same **transition name**.

For example:

```css
img {
  view-transition-name: picture;
}
```

This tells the browser:

> “Match this `<img>` on page A with the `<img>` on page B and animate them as a pair.”

Then you can customize each part of that animation:

```css
::view-transition-old(picture) { … }
::view-transition-new(picture) { … }
```

This is how you animate *just the image* independently of the rest of the page.

## About the Examples in This Repo

### **Example 1 — Default Transition**

* Enables view transitions using `@view-transition`.
* Uses the browser’s default fade.
* Helps you verify your environment supports cross-document transitions.

### **Example 2 — Custom Transitions**

* Removes the default fade on the old page.
* Adds a wipe-in animation for the new page using `clip-path`.
* Gives an `<img>` element its own `view-transition-name` so it can fade independently.

Together, these examples show both the basic activation step and the first layer of customization.

