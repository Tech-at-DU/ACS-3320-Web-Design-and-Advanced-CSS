# Assignment: CSS Zen Garden

## Overview

Create your own original design for the [CSS Zen Garden](https://csszengarden.com) page using only CSS. You can't change the HTML.

This assignment does two things:

1. It sharpens your **selector** skills. You'll have to reach every element through the existing markup, the way you would on a real project where you can't (or shouldn't) change the HTML.
2. It's your first chance to use the **design formulas**: type scale, spacing scale, hierarchy, and a color system. You don't need to be a designer. Follow the formulas and the page will look intentional.

## What You Will Learn

- Write precise selectors using structure, attributes, pseudo-classes, and pseudo-elements
- Manage specificity without `!important`
- Apply a type scale and spacing scale with custom properties
- Create hierarchy with size, weight, color, and space
- Build an accessible color system in OKLCH
- Make a layout that works from 320px to 1440px
- Use AI as a critique partner, and decide for yourself what to change

## Requirements

### Rules

1. **Don't modify the HTML.** All styling comes from your CSS file.
2. **No `!important`** (except inside a `prefers-reduced-motion` block). Solve specificity problems with better selectors.

### Design system (from the formulas)

3. A `:root` block at the top of your CSS defining:
   - A **type scale** (base + ratio). Use no more than **6 font sizes** on the page.
   - A **spacing scale.** All margins, padding, and gaps come from it.
   - A **color system** in OKLCH: a neutral ramp, one accent, and role tokens (`--color-bg`, `--color-fg`, `--color-fg-muted`, `--color-accent`, `--color-border`).
4. **Readable body text:** at least 16px, line height 1.4–1.6, line length ≤ 75ch.
5. **Hierarchy:** headings, body, and secondary text (like the sidebar and footer) are clearly different. Your page passes the squint test.
6. **Contrast:** all text passes WCAG AA (4.5:1, or 3:1 for large text). Verify in DevTools.
7. **Focus:** links have a visible `:focus-visible` style.

### Selectors & CSS

8. Use at least **one** of each:
   - An attribute selector (e.g., `[role="article"]`)
   - A structural pseudo-class (`:nth-child()`, `:first-of-type`, etc.)
   - `::before` or `::after` with generated content or decoration
   - `:has()` or `:not()`
9. Layout with **grid or flex**. The page must work from **320px to 1440px** with no horizontal scroll.
10. Use at least one `background-image` (a gradient counts, or an image file).
11. Use the `.extra1`–`.extra6` divs or pseudo-elements for at least one decorative element.

### AI critique loop

12. Once you have a working first version:
    1. Take a screenshot at desktop width.
    2. Give the screenshot to an AI tool with this prompt:
       ```
       Critique this page design using these passes: hierarchy (what do you see first?),
       alignment, spacing consistency, typography, color and contrast.
       Write each point as Observation → Impact → Fix. List at most 8 points.
       Don't write code.
       ```
    3. Choose **at least 3** points to act on and **at least 1** to reject. Record all of them in your design log with your reasons.

### Documentation

13. Comment your CSS by section (header, intro, main, sidebar, footer). Briefly explain non-obvious choices.
14. Include a [Design Log](design-log.md) (`DESIGN-LOG.md`).

## Strategies

- **Start with type and spacing only.** No colors, no layout. Get the text readable and grouped first (see the [Type & Spacing lesson](../lessons/design-type-spacing.md)). This alone will make the page look 80% better.
- **Then color.** Add your color roles (see the [Color lesson](../lessons/design-color.md)). Mostly neutral, one accent.
- **Then layout.** Pick a pattern: centered column with the sidebar below, or a two-column sidebar layout (see the [Layout lesson](../lessons/design-layout.md)).
- **Then decoration.** Backgrounds, `.extra` divs, pseudo-elements, a little motion.
- **Work from general to specific.** Style tag selectors first (`h3`, `p`, `a`), then sections (`.preamble h3`), then individual elements.
- **Use DevTools constantly.** Inspect the structure, test selectors in the console with `document.querySelectorAll('...')`, and check contrast with the color picker.
- **Borrow ideas, not code.** Browse designs on csszengarden.com and note what you like ("big serif headings", "sidebar on the left"). Then implement those ideas yourself.

## Submission

Submit your GitHub repo to Gradescope with:

- Your CSS file and the Zen Garden HTML file linked to it
- Screenshots at **375px** and **1280px** wide
- `DESIGN-LOG.md`
- A `README.md` with a link to the live page (GitHub Pages)

## Resources

This is an outline view of the Zen Garden HTML page. It includes all of the tags, class, id, and other attributes. Nested elements are indented. This can be useful to figure out selectors and understand parent, child and sibling relations for things like flex and grid. 

```
body#css-zen-garden
  div.page-wrapper

    section.intro#zen-intro
      header[role=banner]
        h1 — "CSS Zen Garden"
        h2 — "The Beauty of CSS Design"
      div.summary#zen-summary[role=article]
        p — Introduction text
        p — Download links for HTML and CSS
      div.preamble#zen-preamble[role=article]
        h3 — "The Road to Enlightenment"
        p — Historical context paragraph
        p — Web standards and W3C
        p — Meditation and inspiration text

    div.main.supporting#zen-supporting[role=main]
      div.explanation#zen-explanation[role=article]
        h3 — "So What is This About?"
        p — Explanation of Zen Garden purpose
        p — Encouragement for creativity with CSS
      div.participation#zen-participation[role=article]
        h3 — "Participation"
        p — Details on participation requirements
        p — Encouragement to use the CSS Resource Guide
        p — Submission instructions
      div.benefits#zen-benefits[role=article]
        h3 — "Benefits"
        p — Reasons to participate and share designs
      div.requirements#zen-requirements[role=article]
        h3 — "Requirements"
        p — CSS standards and compatibility
        p — Browser testing and compatibility guidance
        p — Copyright and content guidelines
        p - Guidelines
        p[role=contentinfo] — Author credits and sponsor links

      footer
        a.zen-validate-html[href="http://validator.w3.org/check/referer"] — HTML validator link
        a.zen-validate-css[href="http://jigsaw.w3.org/css-validator/check/referer"] — CSS validator link
        a.zen-license[href="http://creativecommons.org/licenses/by-nc-sa/3.0/"] — License information
        a.zen-accessibility[href="http://mezzoblue.com/zengarden/faq/#aaa"] — Accessibility information
        a.zen-github[href="https://github.com/mezzoblue/csszengarden.com"] — GitHub link

    aside.sidebar[role=complementary]
      div.wrapper
        div.design-selection#design-selection
          h3.select — "Select a Design:"
          nav[role=navigation]
            ul
              li
                a.design-name — Design title link
                a.designer-name — Designer name link
              (Repeat for each design)
        div.design-archives#design-archives
          h3.archives — "Archives:"
          nav[role=navigation]
            ul
              li.next
                a — Next designs link
              li.viewall
                a — View all designs link
        div.zen-resources#zen-resources
          h3.resources — "Resources:"
          ul
            li.view-css
              a — Link to view current CSS
            li.css-resources
              a — CSS resources link
            li.zen-faq
              a — FAQ link
            li.zen-submit
              a — Submit design link
            li.zen-translations
              a — Translations link

  div.extra1[role=presentation]
  div.extra2[role=presentation]
  div.extra3[role=presentation]
  div.extra4[role=presentation]
  div.extra5[role=presentation]
  div.extra6[role=presentation]
```


Here are some resources to help you with styling the CSS Zen Garden page:

- **[Design Formulas cheat sheet](../lessons/design-formulas.md)**: every rule from class on one page.

- **CSS Tricks**: [CSS Tricks](https://css-tricks.com/) has a wealth of articles and tutorials on various CSS techniques and properties.
- **MDN Web Docs**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS) provides comprehensive documentation on CSS, including examples and best practices.
- **Color**: [oklch.com](https://oklch.com) for picking OKLCH colors and [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) for verifying contrast.
- **Typography**: Check out [Google Fonts](https://fonts.google.com/) for a variety of free fonts you can use in your designs.

---

## Rubric

| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** | **Points** |
|:--|:--|:--|:--|:--:|
| **Selectors & Requirements** | HTML modified, `!important` used, or required selector types missing. | All rules followed; required selector types used correctly; specificity under control. | Elegant, precise selectors; creative use of `:has()`, pseudo-elements, and `.extra` divs. | /10 |
| **Type & Spacing System** | Values hard-coded or random; more than 6 font sizes; text hard to read. | Type and spacing scales defined and used throughout; body text readable; Inside < Between applied. | Spacing and type create a clear rhythm; fluid type with `clamp()`; the page passes the squint test easily. | /10 |
| **Color & Accessibility** | Contrast failures; random colors; no focus styles. | OKLCH color system with roles; all text passes AA; visible focus states. | Restrained, intentional palette; dark theme or other enhancements; accessibility clearly considered. | /10 |
| **Layout & Hierarchy** | Layout breaks on mobile or has no clear structure. | Clear hierarchy and alignment; works from 320 to 1440px without overflow. | Distinctive, well-aligned layout that adapts gracefully; few edges, one clear focal point. | /10 |
| **Design Log & Code Quality** | No log, or the AI critique loop is missing; CSS disorganized. | Log covers decisions and the AI critique loop (3 kept, 1 rejected, with reasons); CSS commented by section. | Log shows clear reasoning tied to formulas; CSS is clean and easy to follow. | /10 |

### Total Points: /50
