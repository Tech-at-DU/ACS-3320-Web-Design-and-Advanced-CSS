# Design Formulas: Layout

Layout feels open-ended, but almost every screen on the web is built from five or six patterns. In this lesson you'll learn those patterns, the alignment rules that make them look clean, and the modern CSS (grid, `clamp()`, container queries) that makes them responsive with very few media queries.

## Why you should know this

Layout bugs are the ones users actually notice: content that overflows on a phone, a sidebar that crushes the main column, a card grid with one orphan floating in the last row. Front-end developers own these problems, and a designer's mockup usually shows only two screen sizes. You'll be the one deciding what happens at the other 1,400.

## Learning Objectives

1. Choose a layout pattern that fits the content
2. Align a page to a small number of edges
3. Build responsive grids without media queries using `auto-fit` and `minmax()`
4. Use `clamp()` for fluid widths, spacing, and type
5. Make components respond to their container with container queries
6. Test layouts at the sizes that matter

## Warm-up (10 min)

Open any two sites you like. For each one, sketch the layout as boxes on paper (no detail, just rectangles). Then label each box with one of these: **column, sidebar, grid, split, stack**.

Most pages are just a few of these patterns nested inside each other.

---

## Formula 1: Pick a Pattern

| Pattern | Use for | Core CSS |
|:--|:--|:--|
| **Centered column** | Articles, forms, settings, docs | `max-width` + `margin-inline: auto` |
| **Sidebar** | Docs, dashboards, filters | `grid-template-columns: minmax(12rem, 16rem) 1fr` |
| **Card grid** | Products, projects, search results | `repeat(auto-fit, minmax(16rem, 1fr))` |
| **Split** | Hero sections, sign-up pages | `grid-template-columns: 1fr 1fr` |
| **Stack** | Everything inside a component | `display: flex; flex-direction: column; gap` |
| **Cluster** | Tags, buttons, nav links | `display: flex; flex-wrap: wrap; gap` |

### Centered column

```css
.container {
  width: min(100% - 2 * var(--space-md), 72rem);
  margin-inline: auto;
}

.prose {
  max-width: 65ch;   /* reading width, from the Type formula */
}
```

`min()` gives a full-width layout with a gutter on phones and caps the width on big screens, all in one line.

### Card grid (no media queries)

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  gap: var(--space-xl);
}
```

Read it as: "fit as many columns as you can, each at least 16rem, and stretch them to fill the row." The inner `min(16rem, 100%)` prevents overflow on very narrow screens.

### Sidebar

```css
.with-sidebar {
  display: grid;
  gap: var(--space-xl);
}

@media (width >= 48rem) {
  .with-sidebar {
    grid-template-columns: 16rem 1fr;
  }
}
```

### Stack and cluster

```css
.stack   { display: flex; flex-direction: column; gap: var(--space-md); }
.cluster { display: flex; flex-wrap: wrap; gap: var(--space-sm); align-items: center; }
```

These two utilities handle most of the layout *inside* components.

---

## Formula 2: Few Edges

Draw vertical lines down the page wherever content starts. **Fewer lines = cleaner design.**

```
 Messy (7 edges)              Clean (2 edges)
 |  Logo         Nav |        | Logo          Nav |
 |    Heading        |        | Heading           |
 |  Text text text   |        | Text text text    |
 |      [Button]     |        | [Button]          |
 |   Card  Card      |        | Card   Card  Card |
```

Rules:
- **One container width** for the whole page. Header, sections, and footer all use the same `.container`.
- **Left-align text.** Centered paragraphs are hard to read because every line starts at a different spot. Center only short items: a hero headline, a single button, an empty-state message.
- **Line up the insides too.** Card text should start where the card's title starts. Form labels should line up with their inputs.

Check alignment in DevTools: select the grid or flex container and turn on the grid/flex overlay. Or temporarily add:

```css
* { outline: 1px solid rgb(255 0 0 / 0.3); }
```

---

## Formula 3: One Focal Point

Every screen should have **one** thing that's clearly most important. Usually it's the main heading or the primary action.

- **One primary button per view.** Other actions are secondary (outline) or tertiary (text link).
- If two things compete for attention, make one of them smaller, lighter, or quieter.

```
 Competing                       Clear
 [ Sign up ] [ Learn more ]      [ Sign up ]  Learn more →
   (solid)     (solid)             (solid)     (text link)
```

---

## Formula 4: Fluid with `clamp()`

`clamp(min, preferred, max)` lets a value grow with the viewport between two limits.

```css
.section {
  padding-block: clamp(var(--space-2xl), 8vw, var(--space-4xl));
}

.hero h1 {
  font-size: clamp(2rem, 1.25rem + 3vw, 3.052rem);
}
```

Use it for section padding, hero type, and gaps. Fewer media queries means fewer awkward in-between sizes.

---

## Formula 5: Components Respond to Their Container

A card in a wide main column and the same card in a narrow sidebar need different layouts. Media queries only know the **viewport**. Container queries know the **space the component actually has**.

```css
.card-wrapper {
  container-type: inline-size;
}

.card {
  display: grid;
  gap: var(--space-md);
}

/* When the card's container is at least 30rem wide, put the image beside the text */
@container (width >= 30rem) {
  .card {
    grid-template-columns: 10rem 1fr;
  }
}
```

**Rule of thumb:** media queries for **page** layout, container queries for **component** layout. This matters a lot when you build your CSS framework and Web Components later in the term: components shouldn't care where they're placed.

---

## Formula 6: Test the Sizes That Matter

Open DevTools device mode and drag the width slowly from **320px to 1440px**. Watch for:

- **Horizontal scroll:** never acceptable. Usually a fixed `width`, a long URL, or an image without `max-width: 100%`.
- **Orphans:** one card alone on the last row of a grid
- **Crushed columns:** text squeezed into 3 words per line
- **Huge line lengths** on wide screens
- **Touch targets** smaller than about 44×44px on mobile

Also test **200% browser zoom**. It's an accessibility requirement and catches the same bugs.

A good base reset prevents half of these bugs:

```css
*, *::before, *::after { box-sizing: border-box; }
img, svg, video { max-width: 100%; height: auto; display: block; }
body { margin: 0; }
```

---

## Using AI here

**Prompt: layout options in words first**

```
Here is my page content as an outline:
[paste headings and a one-line description of each section]

The main job of this page is [job]. Propose 3 different layout approaches
using only these patterns: centered column, sidebar, card grid, split, stack.
For each, describe the layout at 375px and at 1280px in words, and say what
it prioritizes. No code.
```

Choosing between three described options is much faster than choosing between three blobs of generated code, and it keeps you in charge of the decision.

**Prompt: find responsive bugs**

```
Here is my CSS. List anything likely to cause horizontal overflow or
crushed layouts between 320px and 1440px wide: fixed widths, missing
min-width: 0 on grid/flex children, images without max-width, etc.
Point to the selector and the line.
```

Then confirm each one by actually resizing the page. AI can't see your rendered page unless you give it a screenshot, and even then it can miss things.

---

## In-class challenge (45 min)

Starting from your Zen Garden page:

1. Wrap your layout in a single `.container` width (you may need to target existing wrappers like `.page-wrapper`, since you can't edit the HTML).
2. Pick a pattern for the main content and the sidebar. Implement it with grid.
3. Count your vertical edges at 1280px. Get it to 3 or fewer.
4. Drag from 320px to 1440px. Fix every overflow.
5. Replace at least one media query with `clamp()` or `auto-fit`.

## After Class

- Read the [Fix the AI Page] assignment. You'll use every formula so far.
- Review [CSS Grid](lesson-05.md) and [Media Queries](media-queries.md) if grid syntax is rusty.

## Additional Resources

- [Every Layout](https://every-layout.dev): layout primitives (stack, cluster, sidebar, switcher) explained brilliantly
- [MDN: Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [MDN: clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Grid by Example](https://gridbyexample.com)
- [CSS Grid Garden](https://cssgridgarden.com), a game for practicing grid

[Fix the AI Page]: ../assignments/fix-the-ai-page.md
