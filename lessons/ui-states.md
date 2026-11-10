# UI States, Transitions & Microinteractions

Designers usually hand off one picture of a button: the default state. The developer decides what it looks like on hover, focus, press, and disabled, and how it moves between them. AI-generated UI skips most of this. **States are where front-end developers add the most design value**.

## Today

| Time | What |
|:--|:--|
| 45 min | **Show and tell:** present your Fix the AI Page work |
| 20 min | **Part 1: Concepts.** Read and try the examples |
| 10 min | Break |
| 60 min | **Part 2: In-class challenges** (self-paced) |
| 30 min | **Part 3: Start the homework** |

## Learning Objectives

1. List the states every interactive component needs
2. Plan a component with a state matrix before writing CSS
3. Use `transition` with duration and easing from tokens
4. Trigger a change from a parent or sibling with `:hover`, `:focus-visible`, and `:has()`
5. Respect `prefers-reduced-motion`

---

## Show and tell (45 min)

1. Show your **before** page and your **after** page side by side.
2. Name **one problem** you fixed and the tool that found it (WAVE, contrast checker, CSS Overview, keyboard).
3. Show the **section you redesigned** and say which word in your brief it matches.

**Listeners:** for each presenter, write down one idea you could use on your own page.

---

## Part 1: Concepts (20 min)

### See it first

Open these two pages side by side. They have **the same HTML**:

- [default.html](ui-states-examples/default.html): no CSS, only browser defaults
- [custom.html](ui-states-examples/custom.html): every state styled

On each page: press **Tab** through everything, hover over everything, click the buttons, and submit the form empty. What does the browser give you for free? What's missing?

> Clone or download the course repo to open these. GitHub shows the code, not the page.

### 1. The state checklist

Every *interactive* element needs these states:

| State | When | Selector | Visual change |
|:--|:--|:--|:--|
| **Default** | At rest | — | — |
| **Hover** | Mouse over | `:hover` | Small: shade the background, thicken the underline |
| **Focus** | Keyboard focus | `:focus-visible` | **Obvious:** a 2–3px ring with 3:1 contrast |
| **Active** | While pressed | `:active` | Darker, or `scale(0.97)` |
| **Disabled** | Can't be used | `:disabled` | Lower contrast, `cursor: not-allowed` |
| **Current / checked** | Chosen or current page | `:checked`, `[aria-current="page"]` | Accent color, weight, indicator bar |

Forms need two more:

| State | Selector |
|:--|:--|
| Invalid, after the user has typed | `:user-invalid` (better than `:invalid`, which is red before the user types anything) |
| A field that contains an error | `.field:has(:user-invalid)` |

Apps that load data also need **loading**, **empty**, **error**, and **success** states. You won't need them this week, but remember the list.

### 2. The state matrix

Plan a component **before** writing CSS. List each state and what changes:

| State | Background | Text | Border / ring | Motion |
|:--|:--|:--|:--|:--|
| default | accent | white | none | |
| hover | accent, 15% darker | same | none | color fades, 150ms |
| focus-visible | same as default | same | 3px ring, 3px offset | |
| active | same as hover | same | none | `scale(0.97)` |
| disabled | light gray | gray | none | none |

Each row becomes one CSS rule. See the `BUTTONS` section of [custom.html](ui-states-examples/custom.html).

### 3. Focus is non-negotiable

```css
/* ❌ Never do this. Keyboard users can't see where they are. */
button:focus { outline: none; }

/* ✅ One rule for everything interactive */
:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}
```

The browser decides when `:focus-visible` matches. It always matches for keyboard focus. For buttons and links it usually doesn't match on a mouse click, but for **text inputs it does**, because the user is about to type. That's expected, not a bug.

### 4. Transitions

A transition makes a property **change over time** instead of instantly:

```css
.button {
  background-color: var(--color-accent);
  transition: background-color 150ms ease-out;   /* on the BASE rule */
}

.button:hover {
  background-color: color-mix(in oklch, var(--color-accent), black 15%);  /* now takes 150ms */
}
```

- Put `transition` on the **base rule**, not on `:hover`. Then it runs in both directions.
- The shorthand is `transition: property duration easing delay`.
- Transition several properties with commas: `transition: background-color 150ms ease-out, transform 100ms ease-out;`
- **Animate cheap properties:** `transform` and `opacity` stay smooth. Animating `width`, `height`, `top`, `left`, or `margin` makes the browser re-render the page layout every frame and can stutter.
- Some values can't transition: `display`, `font-family`, `grid-template-areas`. They just jump.

### 5. Duration and easing

| Size of change | Duration | Example |
|:--|:--|:--|
| Small feedback | 100–150ms | Hover color, button press |
| Standard | 200–300ms | Toggle, dropdown, card hover |
| Large / entering | 300–500ms | Modal, drawer |

Anything over 500ms feels slow in a UI.

| Motion | Easing |
|:--|:--|
| Entering, or responding to the user | `ease-out` (fast start, gentle stop) |
| Leaving | `ease-in` |
| Moving from A to B | `ease-in-out` |
| Spinners and progress bars only | `linear` |

- ms = millisecond or 1/1000 of a second. 
- s = sec. 1s = 1000ms

Keep these values in **motion tokens**:

```css
:root {
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 6. Triggers: what starts the change?

The most important question for any microinteraction: **which element is hovered, focused, or checked, and which element changes?**

```css
/* The element itself */
.button:hover { ... }

/* A parent: hover the card, move the arrow inside it */
.card:hover .arrow { transform: translateX(0.5rem); }

/* A parent, for keyboard users: the card HAS a focused link */
.card:has(a:focus-visible) .arrow { transform: translateX(0.5rem); }

/* A sibling: style the label right after a checked input */
input:checked + label { font-weight: 600; }

/* A parent based on its child's state */
.field:has(:user-invalid) label { color: var(--color-error); }
```

`transform` doesn't work on inline elements like `<span>`. Give them `display: inline-block`.

### 7. Hover on touch screens

On phones, a tap can leave `:hover` "stuck" on. Wrap hover effects so only mouse users get them:

```css
@media (hover: hover) {
  .button:hover { ... }
}
```

### 8. Reduced motion is required

Some people get dizzy or nauseous from motion and turn on **Reduce motion** in their OS settings. Respect it by **replacing** movement with a change that doesn't move. Don't just delete the feedback:

```css
@media (prefers-reduced-motion: reduce) {
  /* The arrow no longer slides. The border color still shows the hover. */
  .card:hover .arrow { transform: none; }

  /* The knob jumps instead of sliding. The color still fades. */
  .switch input::before { transition: none; }
}
```

Test it: DevTools → ⋮ → More tools → **Rendering** → "Emulate CSS media feature prefers-reduced-motion" → `reduce`.

---

## Part 2: In-class challenges (60 min)

**Goal:** turn the default page into a fully styled one, state by state. Work at your own pace. Each challenge ends with **Done when...**.

**Try each challenge yourself first.** If you're stuck for 10 minutes, look at the matching section of [custom.html](ui-states-examples/custom.html), then close it and write your own version.

### Setup (5 min)

1. Create a new repo for the homework, named `microinteractions`.
2. Copy [default.html](ui-states-examples/default.html) into it as `practice.html`.
3. Add a `<style>` tag in the `<head>`, with these tokens:
   ```css
   :root {
     --color-accent: oklch(50% 0.13 155);
     --color-on-accent: white;
     --color-focus: oklch(50% 0.2 260);
     --color-error: oklch(50% 0.19 25);
     --radius: 0.5rem;
     --duration-fast: 150ms;
     --duration-base: 250ms;
     --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
   }
   ```
   You can swap in your own colors later.

**Done when:** `practice.html` opens in your browser, and the tokens are in the `<style>` tag.

### Challenge 1: Focus everywhere (5 min)

Add one `:focus-visible` rule that gives every interactive element a visible ring (see concept 3).

**Done when:** you can press Tab through the whole page and **always** see where you are.

### Challenge 2: The button (20 min)

1. In your `DESIGN-LOG.md`, copy the state matrix from concept 2. Change it if you want a different look.
2. Write one CSS rule per row: default, `:hover`, `:active`, `:disabled`. (Focus is done.)
3. Add a `transition` to the **base** rule using your motion tokens.
4. Style `.secondary` as an outlined button.

**Done when:**

- [ ] Hovering fades the color smoothly. It doesn't snap.
- [ ] Pressing the button makes it visibly press down.
- [ ] The disabled button looks disabled and doesn't react to hover or press.

### Challenge 3: Hover the parent (15 min)

Make the **arrow** in the card slide to the right when you hover **anywhere on the card**.

1. Give `.arrow` `display: inline-block` and a `transition` on `transform`.
2. Write a `.card:hover .arrow` rule that moves it with `translateX()`.
3. Add `.card:has(a:focus-visible) .arrow` to the same rule so keyboard users see it too.

**Done when:** the arrow slides when you hover the card **and** when you Tab to the card's link.

### Challenge 4: Reduced motion (10 min)

1. Turn on reduced-motion emulation (see concept 8).
2. Add a `@media (prefers-reduced-motion: reduce)` block. Stop the button's press-down and the arrow's slide. Keep the color changes, because they don't move.

**Done when:** with emulation on, nothing on the page **moves**, but every state still **looks** different.

### Stretch challenges

- **Nav:** style the current page link (`[aria-current="page"]`) with an accent bar, and give the other links a hover bar.
- **Switch:** restyle the checkbox as a toggle switch using `appearance: none` and `::before`, with a sliding knob.
- **Form errors:** use `.field:has(:user-invalid)` to turn the label and border red and show the hidden error message.
- **Touch:** wrap all your hover rules in `@media (hover: hover)`.

---

## Part 3: Homework: Microinteractions

**Due:** Thursday, Nov 19. Start it in class.

### What to build

Build **three microinteractions** with HTML and CSS only (no JavaScript):

1. **An interactive control.** A button, toggle, or link with **default, hover, focus-visible, active, and disabled** states and transitions. You can start from your Challenge 2 button.
2. **A parent or sibling trigger.** Something that changes when its **parent** or **sibling** changes state. Examples: a card that moves an icon on hover, a switch, a form field that turns red with `:has(:user-invalid)`, an accordion built with `<details>`.
3. **A looping animation.** A loading spinner, a pulsing badge, or an animated logo built with `@keyframes`. We cover `@keyframes` on Thursday in [Animation](lesson-11.md).

### Requirements

- [ ] A **state matrix** for each element in `DESIGN-LOG.md`
- [ ] A CSS comment naming each element's **job**: feedback, orientation, attention, or delight
- [ ] Durations and easing come from **motion tokens**
- [ ] Movement uses `transform` and `opacity`
- [ ] A visible `:focus-visible` style on everything interactive
- [ ] A `prefers-reduced-motion` block that **replaces** motion, not just deletes it. The looping animation must stop or become a gentle fade.
- [ ] Published on GitHub Pages, with the link in `README.md`

**Bonus:** build all three into one animated sign-up form.

### Rubric

| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** | **Points** |
|:--|:--|:--|:--|:--:|
| **Requirements** | An element is missing, it uses JavaScript, or there's no parent/sibling trigger. | All three elements work in CSS only. | Each element is distinct and polished, or the bonus form is attempted. | /10 |
| **States & Accessibility** | Missing focus or disabled states, or no reduced-motion handling. | Every state in the matrix is styled, focus is visible, and reduced motion is handled. | Reduced motion swaps in thoughtful alternatives instead of turning motion off. | /10 |
| **Motion Quality** | Abrupt or sluggish, or animates layout properties. | Durations and easing follow the formula and come from tokens. | Timing feels natural, and easing is chosen deliberately. | /10 |
| **Design Log** | No state matrices. | A state matrix and a job for each element. | The log explains timing decisions and what was tried and rejected. | /10 |

### Total Points: /40

**Submit** your repo to Gradescope.

---

## Using AI here

AI is good at finding **missing states**, because that's a checklist task:

```
Here is the HTML and CSS for my [component]. Using this checklist:
default, hover, focus-visible, active, disabled, checked/current,
list which states are missing or too weak to notice (e.g., a focus
ring under 3:1 contrast). Output a state matrix table. No code.
```

Then write the CSS yourself, and check focus by actually pressing Tab. Don't ask AI to "make a cool animation": you'll get something generic, and you won't learn the timing.

## Resources

- [Transition lesson](lesson-10.md): more detail and 10 CodePen examples to study
- [Transition examples repo](https://github.com/Tech-at-DU/transition-examples)
- [MDN: :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [MDN: :user-invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)
- [MDN: Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [cubic-bezier.com](https://cubic-bezier.com) for designing easing curves
