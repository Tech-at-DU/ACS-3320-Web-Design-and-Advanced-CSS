# View Transitions in Single-Page Apps (SPAs)

In multi-page examples, the browser handled view transitions automatically whenever the user followed a link. In a Single-Page App (SPA), the page never reloads — instead JavaScript updates the DOM. Because there is no navigation event, the browser won’t create a view transition on its own.

To animate between UI states inside an SPA, we use:

```js
document.startViewTransition(callback)
```

This function tells the browser:
	1.	Snapshot the current DOM (the “old” view).
	2.	Run your callback → make whatever DOM changes you want.
	3.	Snapshot the updated DOM (the “new” view).
	4.	Animate from old → new using your CSS rules.

This is the SPA equivalent of what `@view-transition { navigation: auto; }` does in an MPA.

## The Basic Pattern

```js
document.startViewTransition(() => {
  // Any DOM updates inside this callback
  // will be animated as a view transition.
  showPanel("settings");
});
```

As long as the mutation happens inside the callback, the browser can animate between the two states.

If startViewTransition is not supported, your code should simply apply the DOM change without animation.

## Styling SPA Transitions

The same pseudo-elements used in MPA transitions apply here:
	•	`::view-transition-old(root)` — snapshot before the update
	•	`::view-transition-new(root)` — snapshot after the update

A simple example:

```css
/* Old UI slides left */
::view-transition-old(root) {
  animation: slide-out 0.3s ease-in forwards;
}

/* New UI slides in */
::view-transition-new(root) {
  animation: slide-in 0.3s ease-out forwards;
}

@keyframes slide-out {
  from { transform: translateX(0); }
  to   { transform: translateX(-40px); opacity: 0; }
}

@keyframes slide-in {
  from { transform: translateX(40px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
```

Unlike MPAs, you don’t need `@view-transition { navigation: auto; }` because you’re controlling when transitions happen.

## A Minimal Example

```html
<button data-view="home">Home</button>
<button data-view="about">About</button>

<div id="home" class="view is-active">Home view</div>
<div id="about" class="view">About view</div>

<script>
  const views = document.querySelectorAll('.view');

  function activate(id) {
    views.forEach(v => v.classList.toggle('is-active', v.id === id));
  }

  document.addEventListener("click", e => {
    if (!e.target.matches("[data-view]")) return;

    const target = e.target.dataset.view;

    // Fallback if View Transitions aren’t supported
    if (!document.startViewTransition) {
      activate(target);
      return;
    }

    // Animate the DOM change
    document.startViewTransition(() => activate(target));
  });
</script>
```

The important part is that the DOM mutation happens inside the transition callback.

## When to Use View Transitions in SPAs

Use them when:
	•	You change “screens” (e.g., dashboard → settings)
	•	You reveal or replace significant UI sections
	•	You want continuity without turning your SPA into a full animation engine

Avoid them for:
	•	Tiny updates (e.g., toggling a class)
	•	Rapid-fire changes (frequent list updates, typing, etc.)

## Summary
	•	MPAs use `@view-transition { navigation: auto; }`
	•	SPAs use `document.startViewTransition(callback)`
	•	The callback must contain all DOM updates you want animated
	•	You style transitions using `::view-transition-old(root)` and `::view-transition-new(root)`
