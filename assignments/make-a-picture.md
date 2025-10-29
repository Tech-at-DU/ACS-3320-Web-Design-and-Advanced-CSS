# Assignment 2 - Create a Picture with CSS

## Overview

In this assignment, you will create an original picture or illustration made entirely with CSS — no images allowed! The goal is to explore the expressive and creative potential of CSS by combining shapes, colors, gradients, and layout techniques. You’ll experiment with positioning, transforms, and other properties to bring your design to life while building a deeper understanding of how CSS renders elements on the page.

Here are some articles that will give you an idea of what you will be doing: 

- https://blog.prototypr.io/how-i-started-drawing-css-images-3fd878675c89
- https://medium.com/@juliet.brown/creative-coding-learning-to-draw-with-css-96a49bccd7a5

## What You Will Learn

By completing this assignment, you will learn to:

* Use **positioning** (relative / absolute) to arrange elements precisely on a page.
* Apply **CSS transforms** to rotate, scale, skew, or move elements.
* Utilize **gradients, borders, and clip-paths** to create shapes and visual effects.
* Develop a deeper understanding of how the **box model** and **stacking context** affect layout.
* Combine multiple CSS techniques to create cohesive, layered designs.

## Requirements

1. **Original Artwork**

   * Create a unique picture or scene using only HTML + CSS. You may represent anything you like — a landscape, character, object, logo, or abstract composition.

2. **No Images or SVGs**

   * You may not use raster or vector images. Every visual element must be created with CSS properties (e.g., shapes, colors, gradients).

3. **Use of CSS Techniques**

   * Your design should demonstrate a variety of CSS properties and techniques, such as:

     * `position: absolute` and `relative` for layout
     * `transform` (`translate`, `rotate`, `scale`, `skew`)
     * `clip-path` for creating complex shapes
     * Gradients (`linear`, `radial`, `conic`) for shading or texture
     * Borders, `border-radius`, and `box-shadow` for dimension

4. **Code Organization and Comments**

   * Structure your CSS clearly and use comments to describe major parts of your drawing and explain your design choices.

5. **Submission**

   * Submit your HTML and CSS files to Gradescope.

## Strategies

* **Start Simple** – Begin by sketching your idea on paper or planning your layout. Identify the main shapes and how they can be built with basic divs, pseudo-elements, and transforms.
* **Build in Layers** – Use `position: absolute` to stack and align elements precisely. Start with background shapes and work forward.
* **Use Gradients Creatively** – Gradients can be used not just for backgrounds, but also to simulate shading, highlights, or subtle color transitions.
* **Experiment with Clip-Path** – Try using `clip-path: polygon()` to cut complex shapes out of simple rectangles.
* **Iterate and Refine** – Make frequent use of DevTools to nudge positions and tweak colors. Small adjustments can greatly improve your design.
* **Keep Your Code Organized** – Group related shapes with classes and comments so your structure remains easy to understand.

## What to Include

Your CSS picture should include:

* **At least 5 distinct elements** arranged using positioning.
* **At least one use of transform** (`rotate`, `scale`, `translate`, or `skew`).
* **At least one gradient** (linear, radial, or conic).
* **At least one custom shape** created with `clip-path`, border-radius, or similar.
* A **balanced composition** that demonstrates thoughtful use of color, proportion, and alignment.

## Document Your Work

Use comments to explain:

* What each section of CSS is responsible for.
* Why you made certain design or color choices.
* Any interesting techniques or challenges you encountered.

## Resources

* **MDN Web Docs** – [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform), [Clip-Path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path), [Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient).
* **CSS Tricks** – [All About Clip-Path](https://css-tricks.com/almanac/properties/c/clip-path/), [Working with Transforms](https://css-tricks.com/almanac/properties/t/transform/).
* **CodePen** – Search for “CSS Art” or “Pure CSS Illustrations” for inspiration.
* **Coolors** – Use [Coolors](https://coolors.co/) to generate harmonious color palettes.

---

### Create a Picture with CSS Assignment Rubric

| **Criteria**                            | **Does Not Meet**                                                                  | **Meets Expectations**                                                                 | **Exceeds Expectations**                                                                              | **Points** |
| --------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| **Adherence to Requirements**           | Fails to meet several requirements or includes prohibited elements such as images. | Meets most requirements; CSS is correctly used to create a picture without images.     | All requirements are met; demonstrates a creative, fully CSS-based design.                            | /10        |
| **Effective Use of CSS Techniques**     | Limited use of CSS properties; picture lacks variety or precision.                 | Demonstrates several techniques (positioning, transforms, gradients) used effectively. | Expertly combines multiple CSS techniques to produce a polished and visually engaging result.         | /10        |
| **Creativity and Composition**          | Composition lacks balance or creativity; minimal visual impact.                    | Design is thoughtful and visually appealing; good use of color and space.              | Design is highly creative, expressive, and cohesive, showcasing exceptional attention to composition. | /10        |
| **Code Organization and Documentation** | CSS is disorganized or lacks comments.                                             | CSS is mostly organized and partially documented.                                      | CSS is well-structured, clearly commented, and easy to understand.                                    | /10        |
| **Overall Execution and Presentation**  | Picture is incomplete or poorly rendered; technical errors present.                | Picture is complete, cleanly rendered, and functional across devices.                  | Picture is polished, visually consistent, and demonstrates mastery of CSS rendering.                  | /10        |

### Total Points: /50
