# Assignment 3 – Parameterize Your Picture

## Overview

In this assignment, you will revisit your **CSS Picture** from Week 2 and refactor it to use **CSS custom properties** (variables). You’ll define and apply reusable variables for colors, sizes, and positions so your artwork can be easily modified or themed by changing only a few values. This project emphasizes writing **flexible, maintainable, and scalable CSS** — essential skills for professional front-end development.

## What You Will Learn

By completing this assignment, you will learn to:

* Define and use **CSS custom properties** to manage design variables such as colors, sizes, and layout values.
* Understand how **scope** and **inheritance** affect custom properties.
* Create a **themeable** design system that can change with minimal edits.
* Write **cleaner, more maintainable CSS** by eliminating repetitive values.
* Think like a developer who designs for flexibility and reuse.

## Requirements

1. **Refactor Your Previous CSS Picture**

   * Start with your completed “Create a Picture with CSS” project.
   * Convert repeated values into **CSS custom properties**.

2. **Define Variables at the Top of Your File**

   * Create a `:root` selector containing custom properties for:

     * Colors (background, primary, accent, etc.)
     * Sizes (widths, heights, spacing)
     * Positions or offsets (top, left, rotation, etc.)

3. **Apply Variables Throughout Your CSS**

   * Replace hard-coded values (like `#f00`, `200px`, `30deg`) with variable references (e.g., `var(--accent-color)`, `var(--box-size)`, `var(--angle)`).

4. **Make It Themeable**

   * Include **at least two themes** (for example, light/dark or day/night).
   * Demonstrate theme switching by defining another group of variables in a class such as `.dark-theme` or `.alt-theme`.

5. **Submission**

   * Submit your updated HTML and CSS files, along with screenshots showing both themes.

## Strategies

* **Start with Repetition** – Identify values that appear multiple times (like colors or sizes). Those are your best candidates for variables.
* **Group Related Variables** – Use naming conventions to keep variables organized, e.g., `--sky-color`, `--sun-color`, `--mountain-color`.
* **Use Scope** – Remember that variables inherit. You can define theme overrides inside a class or selector for flexibility.
* **Experiment with Theme Switching** – Apply an alternate class on the `<body>` to change your entire picture’s palette or mood.
* **Comment Generously** – Add comments near your variable declarations explaining what each one controls.
* **Test Adjustments** – Try changing just a few variables at the top — your entire design should update smoothly.

## What to Include

* **A refactored version** of your CSS picture from Week 2.
* **A `:root` block** containing all main custom properties.
* **At least two themes**, each changing multiple visual aspects.
* **Clean, well-commented CSS** demonstrating your understanding of variable scope and usage.

## Document Your Work

In comments at the top of your CSS file:

* List your main custom properties.
* Describe what each theme represents (e.g., “Sunset Theme” vs “Midnight Theme”).
* Note any challenges you encountered during refactoring.

## Resources

* **MDN Web Docs** – [Using CSS Custom Properties (Variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* **CSS Tricks** – [A Complete Guide to Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)
* **CodePen** – Explore examples under “CSS Variables Theme” for inspiration.
* **Coolors** – [Color Palette Generator](https://coolors.co/) to experiment with new themes.

---

### Parameterize Your Picture Assignment Rubric

| **Criteria**                             | **Does Not Meet**                                                    | **Meets Expectations**                                      | **Exceeds Expectations**                                                                   | **Points** |
| ---------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------- |
| **Use of CSS Custom Properties**         | Few or no variables used; values are still hard-coded.               | Variables are used for key colors, sizes, and positions.    | Variables are used extensively and effectively to control all major aspects of the design. | /10        |
| **Code Organization and Readability**    | Code is cluttered, unclear, or missing comments.                     | Code is mostly organized with some commenting.              | Code is well-structured, easy to follow, and thoroughly commented.                         | /10        |
| **Theme Implementation**                 | Only one theme or minimal visual difference between themes.          | Two distinct, functional themes with clear visual contrast. | Multiple themes or advanced theming using scoped variables or mode toggles.                | /10        |
| **Design Consistency and Functionality** | Design breaks when variable values change; inconsistent application. | Design updates correctly when variables change.             | Design adapts seamlessly to different themes, showing thoughtful variable design.          | /10        |
| **Creativity and Refinement**            | Minimal visual creativity or reuse of original picture.              | Visuals are consistent and improved through theming.        | Creative themes and thoughtful refinements elevate the original design.                    | /10        |

### Total Points: /50
