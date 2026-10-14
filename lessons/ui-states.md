# Design Formulas: UI States & Motion

Designers usually hand off one picture of a button: the default state. Then the developer has to decide what it looks like on hover, focus, press, disable, and load. AI-generated UI almost always skips most of these. **States are where front-end developers add the most design value**, and the work is a checklist, not a talent.

## Why you should know this

- Missing states make apps feel broken: "Did my click work?" "Is this loading or stuck?" "Why can't I submit?"
- Missing focus states lock out keyboard and screen-reader users. That's an accessibility failure and often a legal one.
- Motion that ignores user preferences can make people physically ill.
- Interviewers love "what states does this component need?" It's an easy way to tell a junior from a mid-level developer.

## Learning Objectives

1. List the states every interactive component needs
2. Build a state matrix for a component before writing CSS
3. Style each state with the matching pseudo-class or attribute selector
4. Choose motion durations and easing with a formula
5. Respect `prefers-reduced-motion`

---

## Formula 1: The State Checklist

### Interaction states (every interactive element)

| State | When | Selector | Visual change |
|:--|:--|:--|:--|
| **Default** | At rest | — | — |
| **Hover** | Mouse over | `:hover` | Small: shade the background, underline |
| **Focus** | Keyboard focus | `:focus-visible` | **Obvious:** outline/ring, 3:1 contrast, 2px+ |
| **Active** | While pressed | `:active` | Darker, or `scale(0.97)` |
| **Disabled** | Can't be used | `:disabled`, `[aria-disabled="true"]` | Lower contrast, `cursor: not-allowed` |
| **Selected / current** | Chosen or current page | `:checked`, `[aria-selected="true"]`, `[aria-current="page"]` | Accent color, weight, indicator bar |

### Data states (anything that loads or lists data)

| State | Example | How |
|:--|:--|:--|
| **Loading** | Spinner, skeleton, "Saving..." | `[aria-busy="true"]` |
| **Empty** | "No projects yet. Create one →" | `:empty`, or a separate element |
| **Error** | "Couldn't load. Try again" | `:user-invalid`, `[aria-invalid="true"]` |
| **Success** | "Saved ✓" | class or attribute |

### Form states

| State | Selector |
|:--|:--|
| Invalid, after user interaction | `:user-invalid` (better than `:invalid`, which fires before the user types) |
| Required | `:required` |
| Placeholder showing | `:placeholder-shown` |
| A group containing an error | `.field:has(:user-invalid)` |

---

## Formula 2: The State Matrix

Before writing CSS for a component, fill out a matrix. Copy this into your notes or design log:

| State | Background | Text | Border / Ring | Other |
|:--|:--|:--|:--|:--|
| default | `--color-accent` | `--color-on-accent` | none | |
| hover | accent + 15% black | same | none | |
| focus-visible | same as default | same | 2px ring `--color-focus`, 2px offset | |
| active | accent − 0.1 L | same | none | `scale(0.97)` |
| disabled | `--gray-200` | `--gray-500` | none | `cursor: not-allowed` |
| loading | same as default | hidden | none | spinner, `aria-busy` |

Then implement it row by row:

```css
.button {
  --_bg: var(--color-accent);

  background: var(--_bg);
  color: var(--color-on-accent);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-lg);
  transition: background-color 150ms ease-out, transform 100ms ease-out;
}

.button:hover {
  --_bg: color-mix(in oklch, var(--color-accent), black 15%);
}

.button:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.button:active {
  --_bg: oklch(from var(--color-accent) calc(l - 0.1) c h);
  transform: scale(0.97);
}

.button:disabled,
.button[aria-disabled="true"] {
  --_bg: var(--gray-200);
  color: var(--gray-500);
  cursor: not-allowed;
  transform: none;
}
```

### Focus: the non-negotiable state

```css
/* ❌ Never do this */
button:focus { outline: none; }

/* ✅ Style keyboard focus clearly, and only for keyboard users */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

`:focus-visible` shows the ring for keyboard users and hides it for mouse clicks, so you never have a design reason to remove focus styles.

### Empty states are design

An empty list is often the **first thing a new user sees**. Don't leave a blank box.

```html
<ul class="project-list"></ul>
<p class="empty-message">No projects yet. <a href="/new">Create your first one →</a></p>
```

```css
.empty-message { display: none; }
.project-list:empty + .empty-message { display: block; }
```

---

## Formula 3: Motion

### Motion must have a job

Before animating anything, name its job:

| Job | Example |
|:--|:--|
| **Feedback** | Button presses down; checkbox ticks; "Saved ✓" fades in |
| **Orientation** | Panel slides in from the side it lives on; page transitions show where you went |
| **Attention** | New notification badge pulses once |
| **Delight** (optional) | Playful hover on a logo |

If you can't name the job, it's decoration. Keep it subtle or cut it.

### Duration and easing

| Size of change | Duration | Example |
|:--|:--|:--|
| Small feedback | 100–150ms | Hover color, button press |
| Standard | 200–300ms | Dropdown, toggle, tab change |
| Large / entering | 300–500ms | Modal, drawer, page transition |

Anything over 500ms feels slow in a UI.

| Motion | Easing |
|:--|:--|
| Entering / responding to the user | `ease-out` (fast start, gentle stop) |
| Leaving | `ease-in` |
| Moving from A to B on screen | `ease-in-out` |
| Never for UI | `linear` (fine for spinners and progress) |

Put them in tokens:

```css
:root {
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Animate cheap properties

`transform` and `opacity` are animated by the GPU and stay smooth. Animating `width`, `height`, `top`, `left`, or `margin` forces layout recalculation every frame and can stutter.

```css
/* ❌ */ .drawer { transition: left 300ms; }
/* ✅ */ .drawer { transition: transform 300ms var(--ease-out); }
```

### Reduced motion: required

Some users get dizzy or nauseous from motion (vestibular disorders). They turn on "Reduce motion" in their OS. Respect it.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is a safe global fallback. Better still: for important motion, swap movement for a fade instead of removing it entirely.

Test it in DevTools → Rendering → "Emulate CSS media feature prefers-reduced-motion."

---

## Using AI here

AI is genuinely useful for finding **missing states**. It's a checklist task, and models are good at checklists.

```
Here is the HTML and CSS for my [component].
Using this state checklist: default, hover, focus-visible, active, disabled,
selected/current, loading, empty, error. List which states are missing or
too weak to notice (e.g., focus ring under 3:1 contrast). Output a state
matrix table with what exists and what's missing. Don't write code yet.
```

Then fill in the matrix yourself and implement it. Verify focus by **actually pressing Tab**.

---

## In-class challenge (45 min)

1. Pick a button, a text input, and a nav link from the [transition examples](https://github.com/Tech-at-DU/transition-examples) or your Zen Garden page.
2. Write a state matrix for each one.
3. Implement every state. Use motion tokens for transitions.
4. Tab through all three. Is focus obvious every time?
5. Turn on reduced-motion emulation. Does everything still work?

## After Class

- Work on the [Microinteractions] assignment. Every element needs a full state matrix.

## Additional Resources

- [MDN: :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [MDN: :user-invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Material Design: Easing and duration](https://m3.material.io/styles/motion/easing-and-duration)
- [Val Head: Designing interface animation](https://valhead.com)
- [Transition](lesson-10.md) and [Animation](lesson-11.md) lessons

[Microinteractions]: ../assignments/microinteractions.md
