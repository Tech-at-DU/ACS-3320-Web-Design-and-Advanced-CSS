# Assignment: Themeable CSS Picture

## Overview

Create an original picture or illustration using **only HTML and CSS**: no images, no SVG. Build it with **custom properties from the start** so the whole picture can be re-themed by changing a handful of variables.

This assignment is a fast, fun way to master the parts of CSS that are hard to learn from layout work alone: positioning, transforms, gradients, `clip-path`, shadows, and stacking. It also builds the habit that drives every design system: **put the decisions in variables, not in the rules.**

Keep it small. A strong picture with 8–15 shapes is better than an ambitious one you can't finish in a week.

Inspiration:

- [Diana Smith's pure CSS paintings](https://diana-adrianne.com/purecss-francine/)
- Search CodePen for "CSS art" or "single div CSS"
- [How I started drawing CSS images](https://blog.prototypr.io/how-i-started-drawing-css-images-3fd878675c89)

## What You Will Learn

- Use `position: relative`/`absolute` to place elements precisely
- Use `transform` to rotate, scale, skew, and translate
- Create shapes with `border-radius`, `clip-path`, and pseudo-elements
- Create shading and texture with `linear-`, `radial-`, and `conic-gradient()`
- Use `box-shadow` for depth
- Define and scope custom properties for theming
- Use `light-dark()` or theme classes to switch palettes
- Apply the color formula: a small palette defined by roles

## Requirements

### The picture

1. **Original artwork** using only HTML and CSS: a scene, character, object, logo, or abstract composition.
2. **No images and no SVG.**
3. At least **8 distinct shapes** arranged with positioning.
4. At least **two** different `transform` functions.
5. At least **two** gradients (two different gradient types for bonus points).
6. At least **one** `clip-path` shape.
7. At least **one** shape made with `::before` or `::after`.
8. `box-shadow` or `filter: drop-shadow()` for depth somewhere.

### The variables

9. A `:root` block at the top of your CSS with custom properties for:
   - **Colors**, named by role in the picture (`--sky`, `--ground`, `--accent`, `--shadow`), not by color name (`--blue`)
   - **Sizes**: at least one master size (e.g., `--size: 300px`) that other sizes are calculated from with `calc()`, so the whole picture scales
   - At least one **angle** or **position** value
10. Use `var()` with **fallback values** for at least three properties, e.g., `var(--sky, skyblue)`.
11. **Two or more themes** (e.g., day/night, seasons, moods):
    - Use `light-dark()` with `color-scheme`, **or** a theme class/attribute like `[data-theme="night"]` that overrides your color variables
    - Each theme must change at least **4** colors
    - **No rule other than the theme block** should change when you switch themes. If you have to edit a shape's CSS to make a theme work, your variables aren't set up right yet.
12. Changing `--size` scales the whole picture proportionally.

### Design

13. Limit each theme to a palette of **5–7 colors**. Use the [Color lesson](../lessons/design-color.md) as a guide: build related colors by changing OKLCH lightness instead of picking random hex values.
14. Include a short [Design Log](design-log.md) (this one can be brief: 3–5 decisions).

## Strategies

- **Sketch first.** Draw the picture as simple shapes on paper: circles, rectangles, triangles. Each shape becomes a `div` or a pseudo-element.
- **Build back to front.** Background shapes first, then forward. `z-index` only matters inside a stacking context. When something won't layer the way you expect, that's why.
- **One container, everything absolute inside it.** Give the picture a `position: relative` container with a fixed aspect ratio (`aspect-ratio: 1`), then position every shape inside it with percentages.
- **Use percentages for positions.** Combined with a master `--size`, the picture scales cleanly.
- **Variables first.** Before writing any color, add it to `:root`. Don't plan to "parameterize later." That's the slow way.
- **Nudge in DevTools.** Edit values live in the Styles pane, then copy them back to your file.
- **AI tip:** AI is good at explaining *how* to make a specific shape ("How do I make a crescent moon with one div and a box-shadow?"). It's bad at composing a whole picture. Ask for techniques, not the picture. Log what you asked.

## Submission

Submit your GitHub repo to Gradescope with:

- `index.html` and `styles.css`
- Screenshots of **each theme**
- `DESIGN-LOG.md`
- A `README.md` with a link to the live page (GitHub Pages)

---

## Rubric

| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** | **Points** |
|:--|:--|:--|:--|:--:|
| **CSS Drawing Techniques** | Fewer than 8 shapes, or missing transforms, gradients, clip-path, or pseudo-elements. | All required techniques used correctly to build a complete picture. | Techniques combined skillfully; shading, depth, and detail show real control of CSS rendering. | /10 |
| **Custom Properties & Scaling** | Few variables; values still hard-coded; picture doesn't scale. | Colors, sizes, and angles in variables with fallbacks. `--size` scales the whole picture. | Variables are well named by role, `calc()` is used throughout, and the system is clean enough that someone else could re-theme it. | /10 |
| **Theming** | One theme, or switching themes requires editing shape rules. | Two+ themes that each change 4+ colors, switched only by variables. | Themes are distinct and polished, using `light-dark()` or several well-structured theme blocks. | /10 |
| **Composition & Color** | Unbalanced, unfinished, or palette is random. | Complete, balanced picture with a limited, cohesive palette in each theme. | Expressive and polished; palettes are clearly built as systems (related lightness steps). | /10 |
| **Code Quality & Design Log** | Disorganized, no comments, no log. | Organized CSS with comments by section; log covers key decisions. | Very readable CSS; log clearly explains techniques, decisions, and anything rejected. | /10 |

### Total Points: /50
