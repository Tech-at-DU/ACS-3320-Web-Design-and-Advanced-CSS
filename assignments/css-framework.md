# CSS Framework

Imagine you’ve joined a small product team that needs a **drop-in CSS framework** for:

* marketing pages
* docs/blog content
* internal tools

The team wants:

* **Good defaults** for semantic HTML (headings, text, tables, forms, etc.).
* **No required classes** for basic pages (it should “just work” with plain HTML).
* A **design token system** so future Web Components and custom pages can plug into the same look & feel.

In the future we will expand this framework with components. 

## Learning Outcomes

By the end of this project you should be able to:

* Design a layered CSS architecture using `@layer`.
* Build a **classless base** that styles semantic HTML without extra markup.
* Use **CSS custom properties** as design tokens for colors, spacing, typography, and more.
* Ensure basic **accessibility** (contrast, focus styles, keyboard navigation).
* Ship a **small, documented CSS framework** that someone else can adopt.

## Project Scope

You are building **v1 of the framework**: the CSS file and demo page.

### 1. Core Requirements

#### 1.1 Architecture & Layers

Your framework must:

* Live in a single CSS file, e.g. `acsd.css`.
* Declare a layer structure at the top:

```css
@layer tokens, base, components, utilities, overrides;
```

Use these layers as follows:

* **tokens** – design tokens (colors, spacing, typography, radius, shadows, etc.). No raw element rules here!
* **base** – element selectors only (`body`, `h1`, `p`, `a`, `table`, `form`, etc.). No classes should defined here!
* **components** – optional component classes (e.g. `.btn`, `.card`, `.banner`).
* **utilities** – optional single-purpose helpers (e.g. `.text-center`, `.mt-2`).
* **overrides** – for developers integrating the framework (you may use this later).

#### 1.2 Classless Base Styling

Your framework must provide **sane, attractive defaults** for semantic HTML.

* It should style **all tags** in the demo HTML (see “Demo HTML” section) without requiring any extra classes or IDs.
* The result should look like a coherent, intentional design, not random browser defaults.

Minimum expectations in the **base** layer:

* `body`, `main`, `section`, `header`, `footer`
* `h1–h6`, `p`, `strong`, `em`, `blockquote`, `code`, `pre`, `q`
* `ul`, `ol`, `li`, `dl`, `dt`, `dd`
* `a` in all interactive states (`:link`, `:hover`, `:active`, `:visited`, `:focus-visible`)
* `table`, `thead`, `tbody`, `th`, `td`
* `figure`, `figcaption`, `img`
* `form`, `fieldset`, `legend`, `label`, `input`, `textarea`, `select`, `button`

#### 1.3 Design Tokens (Custom Properties)

All important values should come from **CSS custom properties** in the `tokens` layer:

```css
@layer tokens {
  :root {
    --font-family-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-size-body: 1rem;
    --font-size-h1: 2.25rem;
    --font-size-h2: 1.75rem;
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --radius-sm: 0.2rem;
    --radius-md: 0.5rem;

    --color-bg: oklch(0.97 0.02 250);
    --color-fg: oklch(0.20 0.03 250);
    --color-accent: oklch(0.65 0.12 260);
    --color-border: oklch(0.85 0.02 250);

    /* etc… */
  }
}
```

Then consume them everywhere else:

```css
@layer base {
  body {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-body);
    color: var(--color-fg);
    background-color: var(--color-bg);
    line-height: 1.5;
    margin: 0;
  }
}
```

**Rule of thumb:** if you type the same literal value more than once, it probably should be a token.

#### 1.4 Accessibility Requirements

Your framework must:

* Provide **visible focus states** for links, buttons, and form fields using your token system.
* Aim for **WCAG AA-level contrast** on text vs background.
* Preserve semantic structure (don’t suppress outlines or remove focus without giving something better in return).

You do **not** need to be a full a11y expert, but lazy anti-patterns (e.g. `outline: none` with no replacement) will cost you points!

### 2. Optional Enhancements (Pick **at least 2**)

These should live in the appropriate layers (`components` or `utilities`):

* **Custom form styling**
  Make inputs, selects, textareas, and buttons visually cohesive and clearly interactive.

* **Theming support**
  Use tokens to define at least two themes (e.g. light/dark) using a theme class on `html` or `body` (e.g. `.theme-dark`). All colors should switch via custom properties.

* **Print stylesheet**
  Add `@media print` rules to produce a clean print layout with simplified colors and no extraneous chrome.

* **Micro-interactions**
  Add minimal transitions for hover/focus/active states (e.g. for buttons, links, cards) without going overboard.

### 3. Demo HTML

Use the provided **Web Developer’s Roadmap** HTML (unchanged) as your primary test page.

* Link your CSS framework in the `<head>`:

```html
<link rel="stylesheet" href="acsd.css">
```

* You may add **additional layout-only styles** in the `<style>` tag inside the document if needed, but this should be minimal. Anything that feels like a reusable pattern (spacing, typography, colors, buttons, form patterns) should move into the framework.

Goal:

* The page should look “nice” with **just your framework linked**.
* The inline `<style>` is reserved for project-specific layout or tweaks a developer might add on top.

### 4. Submission Instructions

Submit via Gradscope:

Your repository must contain:

1. `acsd.css` (or similar) – your framework file with layers and tokens.
2. `demo.html` – the provided roadmap HTML, linked to your CSS.
3. `README.md` containing:

* A one-paragraph description of the framework’s purpose.
* How to use it (link tag, expected markup).
* A short explanation of your layer structure and token system.
* Any optional features you implemented (themes, utilities, components, etc.).

### 6. Grading Rubric (50 pts)

| **Criteria**                       | **Does Not Meet**                                                                                               | **Meets Expectations**                                                                                             | **Exceeds Expectations**                                                                                                                | **Pts** |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| **Base HTML Styling**              | Many elements from the demo HTML are unstyled or obviously using browser defaults. Visual hierarchy is unclear. | Most elements are styled with a coherent look. Hierarchy and spacing are mostly intentional; minor rough edges.    | All elements are styled with a clear, consistent visual system. The page feels like a small, polished design system.                    | /15     |
| **Tokens & Layers**                | Little or no use of custom properties. `@layer` is missing or misused. Tokens are inconsistent or unused.       | `@layer` is correctly declared. Tokens exist for key values and are used in base styles. Some duplication remains. | Thoughtful token system (colors, spacing, typography, radii, etc.) with clean use across layers. Layer roles are clearly separated.     | /15     |
| **Accessibility & Responsiveness** | Poor contrast, missing focus states, or layout breaks on mobile. Keyboard navigation is painful.                | Contrast is generally acceptable. Focus styles exist. Layout works on mobile and desktop with only small issues.   | Strong contrast choices, clear focus states, and robust behavior across a range of viewport sizes. Accessibility is clearly considered. | /10     |
| **Enhancements (2+ chosen)**       | Fewer than 2 enhancements, or enhancements are broken / poorly integrated.                                      | At least 2 enhancements implemented and working (e.g., theming, form styling, print, micro-interactions).          | Enhancements are polished, well integrated, and clearly documented. They demonstrate extra care and real-world thinking.                | /5      |
| **Documentation**   | README is missing or unhelpful. File structure is confusing.                                                    | README explains what the framework is, how to use it, and what features exist. Repo is reasonably organized.       | README is clear and professional, with examples and notes about limitations. Repo is clean, with logical structure and naming.          | /5      |

**Total: /50**



































# Assignment: CSS Framework

## Assignment Title: Build a Classless CSS Framework

### Objective:
Your goal is to create a minimal CSS framework that styles standard HTML elements without the need for custom class names. The focus will be on clean, accessible, and aesthetically pleasing designs that work out-of-the-box for semantic HTML.

## Assignment Outline:

### 1. Requirements:
- **Style default HTML elements:** Provide consistent and responsive styles for standard HTML tags. Your stylesheet should style all of the tags in the sample HTML document below.
- **Focus on simplicity:** Avoid requiring extra classes or IDs. All styling should be applied to default elements.
- **Maintain accessibility:** Ensure good color contrast, focus styles, and screen reader-friendly elements.
- **Typography and layout:** Establish a clear visual hierarchy with appropriate spacing, line heights, and font sizes.
- **Global reset or normalization:** Use a CSS reset or normalize styles to ensure cross-browser consistency.
- **Use CSS custom properties:** Define all of the important values as CSS custom properties. This will allow the framework to easily modified, and allow different "themes" to be provided (see notes below). 

### 2. Optional Enhancements (Choose 2 or more):
- **Custom form field styling:** Make inputs, selects, and buttons visually cohesive and intuitive without extra markup.
- **Theming support:** Use CSS variables to enable light/dark themes or color schemes.
- **Print-friendly styles:** Include a basic print stylesheet that adapts the layout for printing.
- **Minimal animations or transitions** for hover and focus states.

### 3. Submission Instructions:
- Submit a GitHub repository containing the framework files.
- Include a demo page showcasing all the styled elements in action (e.g., a simple webpage with headings, forms, tables, lists, and images).
- Provide a README file with instructions on how to integrate the framework into any project by linking the CSS file.

### 4. Assessment Criteria:
- **Styling completeness:** Default HTML elements are styled appropriately without needing class names.
- **Responsiveness:** Framework adapts smoothly to various screen sizes.
- **Code Quality:** Clean, well-organized CSS following best practices.
- **Accessibility:** Good color contrast, focus styles, and keyboard navigation.
- **Documentation:** Clear instructions for using the framework, plus a demo page that visually demonstrates the framework's features.

### 5. Naming conventions:
You'll be creating custom properties and class names, a good naming convention will help! There are a few established naming conventions used with CSS: BEM, OOCSS, SUIT CSS, and SMACSS. Read about them here: https://www.frontendmentor.io/articles/understanding-css-naming-conventions-bem-oocss-smacss-and-suit-css-V6ZZUYs1xz

## Resources:
- Examples of minimalist, classless frameworks like [MVP.css](https://andybrewer.github.io/mvp/), [Sakura](https://oxal.org/projects/sakura/), [Simple.css](https://simplecss.org/), and [Tacit](https://github.com/yegor256/tacit).
- [A11y Project](https://www.a11yproject.com/) for accessibility resources.

## Demo HTML
Use the HTML below as a place to test your framework. 

Link your framework at the top. You may need to add some styles outside of your framework, place these in the style tag. Anything you place in the style tag is something a developer would have write themselves. 

You want to cover as much this with your framework as you can but also recognize that developers need some room to customize page to fit their ideas. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Developer's Roadmap</title>
  <link rel="stylesheet" href="link to your css framework here!">
  <style>
    /* Insert your custom styles here.
    This area should contain styles not covered by your framework!
    Things like layout. */
  </style>
</head>
<body>

  <header>
    <h1>Web Developer's Roadmap</h1>
    <p>Your journey to becoming a proficient web developer starts here. Stay curious, keep coding, and build something amazing!</p>
  </header>

  <section>
    <h2>1. Getting Started with HTML & CSS</h2>
    <p><strong>HTML</strong> and <strong>CSS</strong> are the foundation of every website. Start by mastering these two technologies to create well-structured and visually appealing web pages. <a href="#resources">Check out our recommended resources</a> for more.</p>
    <blockquote>“The best way to learn is to build. Start small, then build bigger.”</blockquote>
    <pre>
      <code>
      &#x3C;!-- Sample HTML structure --&#x3E;
        &#x3C;html&#x3E;
          &#x3C;head&#x3E;
            &#x3C;title&#x3E;My First Web Page&#x3C;/title&#x3E;
          &#x3C;/head&#x3E;
          &#x3C;body&#x3E;
            &#x3C;h1&#x3E;Welcome to My Website&#x3C;/h1&#x3E;
          &#x3C;/body&#x3E;
        &#x3C;/html&#x3E;Foo &#xA9; bar &#x1D306; baz &#x2603; qux
      </code>
    </pre>
  </section>

  <section>
    <h2>2. JavaScript: Making Web Pages Interactive</h2>
    <p>Once you're comfortable with HTML and CSS, it’s time to learn <strong>JavaScript</strong>, the language that brings your web pages to life. Whether you’re building games, apps, or interactive websites, JavaScript is essential.</p>

    <h3>Key Concepts to Master:</h3>
    <ul>
      <li>Variables and Data Types</li>
      <li>Functions and Scope</li>
      <li>DOM Manipulation</li>
      <li>Asynchronous Programming (Promises, Async/Await)</li>
    </ul>

    <h3>JavaScript Tools and Libraries:</h3>
    <ol>
      <li><strong>React</strong> – For building powerful user interfaces</li>
      <li><strong>Node.js</strong> – For building server-side applications</li>
      <li><strong>jQuery</strong> – For simplifying DOM manipulation</li>
    </ol>
  </section>

  <section>
    <h2 id="resources">3. Study Resources & Tips</h2>
    <p>There’s a wealth of online resources that can help you improve your programming skills. Here are some of the best places to learn and grow:</p>

    <h3>Recommended Study Platforms:</h3>
    <dl>
      <dt>1. FreeCodeCamp</dt>
      <dd>Offers free tutorials and coding challenges that take you from beginner to advanced.</dd>

      <dt>2. MDN Web Docs</dt>
      <dd>A comprehensive resource for all things web development, maintained by Mozilla.</dd>

      <dt>3. CSS-Tricks</dt>
      <dd>A great site for learning advanced CSS techniques and design patterns.</dd>
    </dl>

    <h3>Study Tips:</h3>
    <ul>
      <li>Build projects as you learn. Nothing beats hands-on experience.</li>
      <li>Join online communities like Stack Overflow and GitHub.</li>
      <li>Keep up with the latest trends, but focus on mastering the basics first.</li>
    </ul>
  </section>

  <section>
    <h2>4. Working in Teams: Collaboration and Version Control</h2>
    <p>In the real world, you’ll often be working on projects with other developers. Learning <strong>Git</strong> and <strong>version control</strong> is crucial for managing code changes and collaborating effectively.</p>

    <table>
      <thead>
        <tr>
          <th>Collaboration Tool</th>
          <th>Purpose</th>
          <th>Why It Matters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Git</td>
          <td>Version control</td>
          <td>Track changes in code and collaborate with others</td>
        </tr>
        <tr>
          <td>GitHub</td>
          <td>Code hosting platform</td>
          <td>Share your projects, contribute to open-source projects</td>
        </tr>
        <tr>
          <td>Trello</td>
          <td>Project management</td>
          <td>Organize tasks, track progress with your team</td>
        </tr>
      </tbody>
    </table>

    <h3>Git Commands to Remember:</h3>
    <ul>
      <li><code>git init</code> – Initialize a new Git repository</li>
      <li><code>git clone</code> – Clone an existing repository</li>
      <li><code>git commit</code> – Commit changes to your repository</li>
      <li><code>git push</code> – Push your changes to GitHub</li>
    </ul>
  </section>

  <section>
    <h2>5. Building Your First Web Project</h2>
    <p>Nothing beats the excitement of seeing your first web project live on the internet! Whether it’s a personal blog, portfolio site, or a simple web app, deploying your code is a huge milestone.</p>
    <button>Start a New Project</button>
    <button style="--bg-color: darkblue; --fg-color: white;">Launch Project</button>
  </section>

  <section>
    <h2>6. Visualizing Your Progress</h2>
    <p>It’s important to celebrate your growth as a web developer. Here are some milestones you’ll pass on your learning journey:</p>

    <figure>
      <img src="https://via.placeholder.com/300x200" alt="Milestone 1">
      <figcaption>Day 1: Writing your first “Hello, World” program.</figcaption>
    </figure>

    <figure>
      <img src="https://via.placeholder.com/300x200" alt="Milestone 2">
      <figcaption>Milestone: Deploying your first live website!</figcaption>
    </figure>
  </section>

  <section>
    <h2>7. Feedback & Continuous Improvement</h2>
    <form>
      <fieldset>
        <legend>Share Your Feedback</legend>

        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name">

        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email">

        <label for="message">Feedback:</label>
        <textarea id="message" name="message" placeholder="What did you think of this guide?"></textarea>

        <label for="rating">Rate Your Experience:</label>
        <select id="rating" name="rating">
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>
        </select>

        <fieldset>
          <legend>Would you recommend this guide?</legend>
          <label><input type="radio" name="recommend" value="yes"> Yes</label>
          <label><input type="radio" name="recommend" value="no"> No</label>
        </fieldset>

        <button type="submit">Submit Feedback</button>
      </fieldset>
    </form>
  </section>

</body>
</html>
```

## Custom properties
Your framework should use CSS custom properties! You will use these to define all of the important values used in your framework. 

### Define values on :root
Define your values on the `:root` element. 

NOTE! All custom property names must begin with the double hyphen: `--` 

```CSS 
:root {
  --font-family: /* Your font family here */;
  --bg-color: /* your background color */;
  --fg-color: /* Your foreground color */;
}
```

Access custom properties with `var()`

```CSS
body {
  font-family: var(--font-family);
  color: var(--fg-color);
  background-color: var(--bg-color)
}
```

### Design a Button
This example shows how to design a button using CSS custom properties. 

The default button style is not very interesting it's also pretty small. Giving the button some color and making it a little larger will make it easier to use. 

```css
button {
  padding: 0.5rem 0.75rem; /* Push the border away from the label */
  background-color: #fff; 
  border: 1px solid;     /* Set the border */
  color: cornflowerblue; /* Set the color */
  border-radius: 0.5rem; /* Round the corners */
  font-size: 1rem;       /* Match the base font size */
  transition: 300ms;     /* Add an animation */
}

button:hover {
  /* Invert the foreground and backgroud color on hover */
  background-color: cornflowerblue; 
  color: #fff;
}
```

Here you have a button with a base style and a simple hover. 

```html
<button>Hello World</button>
```

Some custom properties will make this easier to manage. The button uses the same color for the background and foreground but switches these on hover.

```css
button {
  /* Define some custom properties for foreground and background colors */
  --bg-color: #fff;
  --fg-color: cornflowerblue;

  padding: 0.5rem 0.75rem;
  background-color: var(--bg-color); /* Background color */
  border: 1px solid;
  color: var(--fg-color); /* Foreground color */
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: 300ms;
}

button:hover {
  /* Invert the colors on hover */
  background-color: var(--fg-color);
  color: var(--bg-color);
}
```

Now the colors can be edited in one location. 

You'll often want buttons with different colors for different purposes. Look at the button styles in Bootstrap. You can emulate some of these. 

To change the colors and other styles using custom properties is very flexible. 

**Using a class name**: When a button as the class name `warning` the color is red (tomato). When a button has the class name `action` the color is green (yellowgreen). 

```css
button.warning {
  --fg-color: tomato; /* Red button */
}

button.action {
  --fg-color: yellowgreen; /* Green button */
}
```

Use these new classes like this. 

```html
<button>Login</button>
<button class="warning">Delete</button>
<button class="action">Buy Now!</button>
```

**In your button example create classes for:**

- Success 
- Alert 
- Dark

What if you want to have an inverted style for your buttons? Using custom properties you can add a class that switches where the colors are applied. 

Here the `.invert` class just sets the `color` and `background-color` properties but swaps which color is used where. **These rules override the other since a selector with the class is more specific.**

```css
button.invert {
  color: var(--bg-color);
  background-color: var(--fg-color);
}

button.invert:hover {
  background-color:var(--bg-color);
  color: var(--fg-color);
}
```

```html
<button class="warning invert">Delete</button>
```

**Add an inverted style to your button styles**

What if you want to customize the color of the button? You could write another class or you could set color properties inline. Using this technique devs using your framework could easily customize the appearance. 

```html
<button style="--bg-color: violet; --fg-color: #fff">Use Locaton</button>
```

If your code defines colors as a theme you can use those inside your buttons by assigning their value to the properties used by the button. 

```css
:root {
  --primary-color: cornflowerblue;
  --foreground-color: #fff;
}

button {
  --bg-color: var(--foreground-color);
  --fg-color: var(--primary-color);

  ...
}
```

This example shows how to use custom properties to create a button. Your goal is to expand this idea to all aspects of your frameowrk! 





## Cascading Varsity example

```CSS
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <style>
    :root {
      /* Custom property names must begin with --

      Defining custom proeprties in :root makes them available 
      everywhere like global constants

      Anything can be a value for a cusom property */

      --color-action: tomato;
      --font-size: 20px;
      --number: 2;
      --size: 200px;
      --easing: cubic-bezier(0.075, 0.82, 0.165, 1);
      --font-stack: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body {
      /* Access the value of a custom property with var() */
      font-family: var(--font-stack);
      font-size: var(--font-size);
    }
  </style>

  <p>Custom properties.</p>
  
  <style>
    button {
      background-color: var(--color-action);
      width: var(--size);
      font-size: var(--font-size);
    }
  </style>

  <button>Button 1</button>


  <p>This button uses the class "blue" which changes cascades a new 
    value for --color-action. The button uses the color cornflowerblue instead.</p>
  <style>
    .blue {
      --color-action: cornflowerblue;
    }
  </style>

  <button class="blue">Blue Button</button>

  <p>If a property might not be defined you can supply a fallback value.</p>

  <style>
    h1 {
      color: var(--not-defined, gold);
    }
  </style>

  <h1>Uses undefined var</h1>

  <style>
    .button {
      /* Create a localy scoped var from some global vars */
      /* Notice these have fallbacks to set a default */

      --fg-color: var(--button-fg-color, cadetblue);
      --bg-color: var(--button-bg-color, white);

      display: inline-block;
      color: var(--fg-color);
      background-color: var(--bg-color);
      border:1px solid;
      border-radius: 0.5rem;
      padding: 1rem;
      text-decoration: none;
    }

    .button:hover {
      /* Here we use the local vars again */

      background-color: var(--fg-color);
      color: var(--bg-color);
    }
  </style>

  <a class="button" href="#">Anchor tag</a>

  <p>You can override the default colors in a few ways.</p>

  <style>
    .warning {
      /* Use a class to set the fg and bg colors */

      --button-fg-color: tomato;
      --button-bg-color: rgb(251, 251, 216);
    }
  </style>

  <a class="button warning" href="#">Anchor tag</a>

  <!-- Use an inline style -->
  <a class="button" style="--button-fg-color: purple; --button-bg-color: yellowgreen" href="#">Anchor tag</a>

  <!-- It is also possible to override the default colors in other 
   ways using the rules of selectors. -->

</body>
</html>
```






---

### CSS Framework Assignment Rubric

| **Criteria**                            | **Does Not Meet**                            | **Meets Expectations**                         | **Exceeds Expectations**                      | **Points** |
|------------------------------------------|----------------------------------------------|-----------------------------------------------|------------------------------------------------|------------|
| **HTML Element Styling**                 | Many key HTML elements are missing or lack proper styling. The styles applied are inconsistent or incomplete. | Most required HTML elements are styled appropriately with consistent, functional designs. Minor inconsistencies may exist but overall, the styles are visually appealing. | All default HTML elements are styled comprehensively and consistently. The styles are advanced, polished, and show creativity, enhancing the user experience. | /10        |
| **Uses CSS Custom Properties**           | CSS custom properties are either not implemented or incorrectly applied. Defaults are unclear or customization is difficult. | CSS custom properties are used effectively with reasonable default values that can be overridden. Most elements can be customized easily. | Extensive and thoughtful use of CSS custom properties, with all default values easily customizable. The framework is highly flexible, allowing for a wide range of customizations. | /10        |
| **Code Quality & Organization**          | CSS is disorganized, inefficient, and difficult to read. Best practices are not followed, and the code lacks comments or structure. | CSS is organized and follows most best practices. Code is readable, with some use of comments and efficient selectors. Minor areas could be improved. | CSS is clean, highly organized, and demonstrates excellent use of best practices. Code is easy to read, well-commented, and selectors are used efficiently throughout. | /10        |
| **Optional: Component Classes**          | (Optional) Component classes are missing, poorly implemented, or do not work well with the framework. | (Optional) Component classes are implemented and functional, though they may not be fully reusable or well-integrated with the framework. | (Optional) Component classes are well-designed, reusable, and follow a clear naming convention. They work harmoniously with the framework and significantly enhance its functionality. | /10        |
| **Documentation & Clarity**              | Little to no documentation is provided, or the documentation is incomplete and unclear, making it difficult to understand how to use the framework. | Adequate documentation is provided, explaining how to use the framework and customize it with CSS custom properties. Some parts may lack detail. | Thorough and clear documentation is provided, offering detailed instructions for using the framework and customizing it with CSS custom properties. The documentation enhances user understanding. | /10        |

### **Total Points: /50**

