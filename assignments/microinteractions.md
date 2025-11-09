# Assignment 3 – Microinteractions: Interactive Icon or Button Set

## Overview

In this assignment, you will design and build a set of **three interactive or animated interface elements** using CSS. These small animations — called *microinteractions* — enhance user experience by providing feedback, delight, and visual cues during interaction. You will explore how to use CSS animations, transitions, and keyframes to make web interfaces feel more alive and responsive.

## What You Will Learn

By completing this assignment, you will learn to:

* Create and control animations using **CSS keyframes**.
* Apply **CSS transitions** to smooth changes between hover and active states.
* Use **timing functions**, **delays**, and **iterations** to fine-tune animation behavior.
* Combine **interactivity** and **motion design** principles for a more engaging UI.
* Develop confidence using animation tools in CSS for real-world interface design.

## Requirements

You will create **three animated elements**, each demonstrating a different type of microinteraction:

1. **Logo or Progress Timer** – A looping keyframe animation that repeats continuously (e.g., a rotating logo, pulsing icon, or circular progress indicator).
2. **Button, Icon, or Link** – An interactive element that visually responds to both **hover** and **active (click)** states using transitions and transforms.
3. **Triggered or Timed Animation** – An animation that plays from **start to finish** (e.g., a loading bar that fills, a notification that appears and fades, or a reveal animation).

Additional Requirements:

* Use only **HTML and CSS** — no JavaScript.
* Include at least one **`@keyframes`** animation.
* Include at least one **`transition`** with custom duration and easing (`timing-function`).
* Keep your code clean, organized, and well-documented with comments.
* Each element should be distinct and demonstrate a unique interaction or animation concept.

Bonus challenge: Incorporate all of the requirements into a form with animated elements. You can use `:focus` and `:checked` to trigger motion effects. See these examples for ideas: 
- https://codepen.io/dsenneff/pen/2d338b0adf97472ebc5d473cf1fa910b
- https://www.npmjs.com/login
- https://codepen.io/Mr_Dzi/pen/WpeYNQ
- https://codepen.io/jakegilesphillips/pen/MveNLe (not a form but could be...)

## Strategies

* **Plan First** – Sketch or storyboard your three interactions before coding. Think about *how the user triggers* each one (hover, click, or automatic).
* **Start Simple** – Begin with color, scale, or rotation changes. Then layer on complexity using transforms, opacity, or timing functions.
* **Think about Structure** – Consider the elements you will need. Will you need an extra div or can you use `::before` and `::after` pseudo elements? 
* **Which Selectors?** – Think about which selectors you will need, this is related to structure. Will you need a nested selector or a parent selector? Is motion triggered from the parent, or a child? This is probably the most important question on this list. If you are unclear what it is asking study the lesson example files: https://github.com/Tech-at-DU/transition-examples
* **Use Pseudo-Classes** – Try combining `:hover`, `:active`, and `:focus` to handle interaction states. 
* **Experiment with Timing** – Play with `animation-duration`, `animation-delay`, and `cubic-bezier()` easing to give your animations personality.
* **Keep It Purposeful** – Each animation should reinforce usability or provide feedback — not distract from it.
* **Test in Multiple Browsers** – Confirm your animations behave consistently across Chrome, Firefox, and Safari.

## What to Include

Your submission should include:

* **Three separate animated elements** (logo/timer, button/icon, triggered animation).
* **HTML and CSS files** with clear class names and comments.
* **At least one looping animation** and one triggered animation.
* **At least one hover/active interaction**.
* **A brief description** (in comments or a separate text file) explaining what each element demonstrates.

## Document Your Work

Use comments in your CSS to describe:

* The purpose of each animation.
* Key properties or techniques used.
* Any challenges you faced or creative choices made.

## Resources

* **MDN Web Docs** – [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation), [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition), [Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes).
* **CSS Tricks** – [A Complete Guide to CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/), [A Complete Guide to CSS Animation](https://css-tricks.com/almanac/properties/a/animation/).
* **Easings.net** – [Easing Functions](https://easings.net/) for inspiration on timing curves.
* **CodePen** – Search for “CSS Microinteractions” for examples of interactive buttons and icons.

---

### Microinteractions Assignment Rubric

| **Criteria**                                      | **Does Not Meet**                                                  | **Meets Expectations**                                                      | **Exceeds Expectations**                                                                         | **Points** |
| ------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------- |
| **Adherence to Requirements**                     | Fails to include all three required animations or uses JavaScript. | All three animations included and function as intended using CSS only.      | All requirements met with polish, clear distinction, and thoughtful execution of each animation. | /10        |
| **Effective Use of CSS Animation and Transition** | Animations are abrupt or poorly implemented.                       | Uses CSS keyframes and transitions effectively to create smooth animations. | Demonstrates mastery of timing, easing, and motion for fluid, professional animations.           | /10        |
| **Interactivity and Feedback**                    | Limited interactivity or unclear user feedback.                    | Interactions respond appropriately to hover and click states.               | Interactions feel dynamic, intuitive, and delightful, showing attention to user experience.      | /10        |
| **Creativity and Design Quality**                 | Animations are generic, repetitive, or lack visual appeal.         | Animations are well-designed, balanced, and visually appealing.             | Animations are highly creative, expressive, and elevate the visual experience.                   | /10        |
| **Code Quality and Documentation**                | CSS is disorganized and lacks comments.                            | Code is mostly clean and partially documented.                              | Code is well-structured, commented, and demonstrates best practices.                             | /10        |

### Total Points: /50
