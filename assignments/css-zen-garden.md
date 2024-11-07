# Assignment 1 - CSS Zen Garden

## Overview

In this assignment, you will create your own original style for the CSS Zen Garden page. This project focuses on the creative application of CSS, allowing you to explore various design techniques without needing to be a professional designer. 

## What You Will Learn

By completing this assignment, you will learn to:

- Apply CSS styling techniques to enhance the visual presentation of an HTML page.
- Understand how to work within an existing HTML structure without modification.
- Develop skills in creating layouts, utilizing color schemes, and applying typography.
- Experiment with responsive design principles to ensure your styles work across different devices.

## Requirements

1. **Original Style**: You must create a unique CSS stylesheet that styles the CSS Zen Garden page. You are encouraged to experiment with different layouts, colors, and typographic choices.
   
2. **No HTML Modifications**: You **must not** modify the provided HTML structure of the Zen Garden page. Your styles should only be applied through your CSS file.

3. **Use of CSS**: Utilize various CSS properties, including but not limited to:
   - Color and background properties
   - Typography (font families, sizes, weights)
   - Box model (margins, padding, borders)
   - Flexbox or Grid for layout
   - Transitions and animations (if applicable)

4. **Submission**: Submit your CSS file along with a screenshot of the styled Zen Garden page.

## Strategies

- **Analyze the HTML Structure**: Before starting, take some time to explore the provided HTML structure. Understand how elements are nested and how CSS selectors can be applied effectively.

- **Sketch Your Design**: Consider creating rough sketches of your design ideas. Think about the overall layout, color palette, and typography before you start coding.

- **Use Browser DevTools**: Use the browser's Developer Tools to inspect elements on the Zen Garden page. This can help you test styles in real-time and see how changes affect the layout.

- **Iterate and Test**: Start with a few basic styles, then gradually build upon them. Test your styles frequently to ensure everything looks as intended across different browsers and devices.

- **Start with Type**: Start by styling the type. Choose a font, or fonts, and set the size and line height. 

- **Work from general to specific**: Work from general to specific. Start by styling general elements using the type (tag name) selector. Work your way to more detailed, and then specific elements. 

## What to Style

When styling the CSS Zen Garden page, consider focusing on:

- **Header**: Style the header section, including the title and any navigation links.
- **Main Content Area**: Apply styles to the main content, including text elements, images, and any other visual components.
- **Footer**: Create a visually appealing footer that complements your overall design.
- **Typography**: Experiment with font styles, sizes, line heights, and letter spacing for better readability and aesthetic appeal.
- **Color Scheme**: Develop a cohesive color palette that enhances the visual hierarchy of the page.

## Document your work
Use comments to document your work. 
- **Identify what is being styled**: Use comments to identify what is being styled. 
- **Explain your choices**: In a few words to explain your choices for styles.

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

- **CSS Tricks**: [CSS Tricks](https://css-tricks.com/) has a wealth of articles and tutorials on various CSS techniques and properties.
- **MDN Web Docs**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS) provides comprehensive documentation on CSS, including examples and best practices.
- **Color Palettes**: Use tools like [Coolors](https://coolors.co/) or [Adobe Color](https://color.adobe.com/) to create or explore color palettes.
- **Typography**: Check out [Google Fonts](https://fonts.google.com/) for a variety of free fonts you can use in your designs.

---

### CSS Zen Garden Styling Assignment Rubric

| **Criteria**                            | **Does Not Meet**                            | **Meets Expectations**                         | **Exceeds Expectations**                      | **Points** |
|------------------------------------------|----------------------------------------------|-----------------------------------------------|------------------------------------------------|------------|
| **Adherence to Requirements** | Multiple requirements are not met, including modifications to the HTML structure or failure to use CSS effectively. | Most requirements are met, including no modifications to the HTML. Styles are applied as specified, with minor oversights. | All requirements are thoroughly met, including no modifications to the HTML. Styles are applied effectively throughout the project. | /10 |
| **Effective Use of CSS** | CSS is poorly applied, lacking organization, clarity, and best practices. Styles do not enhance the visual presentation. | CSS is applied effectively with some organization. Most styles are clear and functional, enhancing the visual presentation. | CSS is expertly applied, demonstrating a strong understanding of best practices. Styles are well-organized, clear, and significantly enhance the visual presentation. | /10 |
| **Typography and Color Scheme** | Typography and color choices are inappropriate or poorly applied, leading to a lack of readability or visual appeal. | Typography and color choices are mostly appropriate and enhance readability, though some areas may need improvement. | Typography and color choices are highly effective, contributing to excellent readability and visual harmony throughout the design. | /10 |
| **Overall Layout and Structure** | The overall layout is confusing or poorly structured. Elements do not align properly, and the design lacks cohesion. | The overall layout is functional and mostly well-structured. Elements are aligned appropriately, creating a cohesive design. | The overall layout is expertly structured, with a clear hierarchy and alignment. The design flows seamlessly, creating an engaging user experience. | /10 |
| **Documentation and Clarity** | Little or no documentation is provided. It is difficult to understand the design choices or how to apply the styles. | Adequate documentation is provided, explaining some design choices and how to apply the styles. Clarity may be lacking in certain areas. | Thorough and clear documentation is provided, offering detailed explanations of design choices and CSS usage. It enhances the understanding of the project. | /10 |

### Total Points: /50
