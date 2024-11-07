# Media Queries 

Media queries are used to modify your styles based on the general type and or specific characteristics of a device. 

Most often media queries are used to create responsive web pages. 

Media types are: 

- all
- print
- screen

Take a look at the [media types list](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types). 

Media Types: 
- all
- print
- screen

This list was longer in the past and you might see types like: `tty`, `tv`, `projection`, and `handheld`. These were dropped, and have been replaced with the Media Queries 4 spec. These should not be used, and have been replaced with three types above and the Media Features below! 

Media Features describe the characteristics of the output device or environment. You can test for the presensce, value and range of a feature.

Media features are: 
- any-hover
- any-point 
- aspect-ratio
- color
- color-gamut
- color-index
- device-aspect-ratio
- device-height
- device-width
- display-mode
- dynamic-range
- forced-colors
- grid
- height
- hover
- inverted-colors
- monchrome
- orientation
- overflow-block
- overflow-inline
- pointer
- prefers-color-scheme
- prefers-contrast
- prefers-reduced-motion
- resolution
- scripting
- video-dynamic-range
- width

Take a few minutes and explore [this list](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features). 

What did you see? 

Why so many features? 

## 

CSS media features are used in media queries to apply styles conditionally, based on factors like screen size, resolution, orientation, or even reduced motion preference. Here are some examples:

### 1. Responsive Design with `min-width` and `max-width`
```css
/* Style for screens 600px and wider */
@media (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* Style for screens narrower than 600px */
@media (max-width: 599px) {
  body {
    background-color: lightcoral;
  }
}
```

### 2. Adjust Layout Based on Orientation
```css
/* Style for landscape orientation */
@media (orientation: landscape) {
  .container {
    flex-direction: row;
  }
}

/* Style for portrait orientation */
@media (orientation: portrait) {
  .container {
    flex-direction: column;
  }
}
```

### 3. Adjust for High-Resolution Screens
```css
/* Style for devices with high-resolution screens (Retina displays, etc.) */
@media (min-resolution: 2dppx) {
  img {
    width: 50%;
  }
}
```

### 4. User Preference: Reduced Motion
```css
/* Reduce animations if the user has enabled reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
  }
}
```

These examples all query the device for a media feature, check the repesence, values, and or range of values of the feature on that device. If the feature exists and the values are in the range, the styles within the `@media` block are applied.

## Using Media Queries

The basic syntax for a media query looks like this: 

```CSS
@media <media-query-list> {
  <stylesheet>
}
```

Here's an example: 

```CSS
@media print {
	/* These styles only apply to print */
  body {
    font-size: 10pt;
  }
}

@media screen {
	/* These styles only apply to screen */
  body {
    font-size: 13px;
  }
}

@media screen, print {
	/* These apply to both screen and print */
  body {
    line-height: 1.2;
  }
}

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
	/* Applies to screen when the width is between 320px and 480px, and the resolution is 150dpi */
  body {
    line-height: 1.4;
  }
}
```

Why would you use this? Imagine you need to change your stylesheet when your app is viewed on a smaller screens. This is how you make your site "responsive". 

**Important**

The new styles you add in a media query use the same rules that apply to all styles. When you have two styles that set the same property CSS has to make a decision which rule to apply. 

Follow this guide: 

1. Later rules override earlier rules
2. Rules with a higher selector weight override rules with a lower weight. 
3. Rules marked !important will override other rules. 

```CSS
body {
	font-size: 16px;
}

/* later rules override earlier rule! */
body {
	font-size: 18px;
}
```

Rules that have more specific selectors will override rules with less specific selectors. 

```CSS
/* This rule overrides the rules below */
.intro h1 { /* most specific selector */
	font-size: 1.5rem;
}

h1 { /* least specific selector */
	font-size: 3rem;
}
```

The first rule uses a class name which has a higher weight than tag name in the second rule, so it overrides the second rule. 

## CSS Specificity
CSS specificity determines which styles apply to an element when multiple rules could be applied. Specificity is calculated based on the types of selectors used, and the rule with higher specificity overrides others with lower specificity. Here’s a breakdown of examples with explanations:

### 1. Inline Styles (Highest Specificity)
```html
<div style="color: red;">This text will be red.</div>
```
**Explanation**: Inline styles have the highest specificity (higher than any selector), so `color: red` is applied directly to this element, overriding any external or internal CSS.

### 2. ID Selector
```css
#header {
  color: blue;
}
```
```html
<div id="header">This text will be blue.</div>
```
**Explanation**: ID selectors (`#header`) are highly specific and will override class, attribute, or tag selectors. They’re used sparingly due to their high specificity.

(Best practice: avoid id names for CSS, save these for JS.)

### 3. Class Selector vs. Tag Selector
```css
p {
  color: green;
}
.text {
  color: purple;
}
```
```html
<p class="text">This text will be purple.</p>
```
**Explanation**: Class selectors (`.text`) have higher specificity than tag selectors (`p`), so the `color: purple` from the `.text` class is applied, overriding the `color: green` from the `p` tag selector.

### 4. Attribute Selector with Class and Tag
```css
a[href] {
  color: orange;
}
a.button {
  color: pink;
}
```
```html
<a href="#" class="button">This link will be pink.</a>
```
**Explanation**: The combination of a class and tag (`a.button`) is more specific than just an attribute selector (`a[href]`), so `color: pink` overrides `color: orange`.

### 5. Combining Specificity with Descendant Selectors
```css
/* Less specific */
.section p {
  color: brown;
}

/* More specific */
.section .highlight p {
  color: black;
}
```
```html
<div class="section">
  <div class="highlight">
    <p>This text will be black.</p>
  </div>
</div>
```
**Explanation**: The rule `.section .highlight p` is more specific than `.section p`, so `color: black` takes precedence over `color: brown`.

### Specificity Order
1. Inline styles: `style=""` in HTML have the highest specificity.
2. IDs: `#id` (e.g., `#header`) are next.
3. Classes, attributes, and pseudo-classes: `.class`, `[type="text"]`, `:hover`.
4. Tag selectors: `p`, `div`, `span`.
   
Specificity helps CSS decide which styles to apply in case of conflicts, ensuring the most relevant styles override less specific ones.

Generally speaking more "detailed" selectors will have a higher specificity but, you must keep the rules in mind. For example consider the previous example.  

```CSS
div.highlight { ... }

.highlight { ... }

div .hightlight { ... }
```

1. **`div.highlight`** – This is the most specific because it combines a tag selector (`div`) and a class selector (`.highlight`). Specificity score: **0-1-1** (one class and one tag).

2. **`.highlight`** – This selector only has a class, so it's less specific than `div.highlight`. Specificity score: **0-1-0** (one class).

3. **`div .highlight`** – This is the least specific because it's a descendant selector, where `div` is an ancestor of `.highlight`. It only has a single class and a space-separated tag, so it has the lowest specificity among these. Specificity score: **0-1-1** (one class and one tag, but separated).

### Explanation
Even though `div .highlight` also has a class and tag, they are separated, which reduces the overall specificity compared to `div.highlight` where both are combined directly.

Last, order always matters! Rules that come later in your stylesheet will overwrite rules that came earlier with the same specificty!

Read about the [rules of specificity here](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). 

CSS specificity is scored based on the types of selectors used in a rule, according to a four-part system:

1. **Inline styles** (inside an element’s `style=""` attribute) score highest with **1-0-0-0**.
2. **ID selectors** (`#id`) score **0-1-0-0**.
3. **Class selectors** (`.class`), **attribute selectors** (`[type="text"]`), and **pseudo-classes** (`:hover`) score **0-0-1-0**.
4. **Tag selectors** (like `div`, `p`, `h1`) and **pseudo-elements** (`::before`) score lowest with **0-0-0-1**.

Add up the specificity scores for each part of the selector to determine the total score. Higher scores take precedence over lower ones.

Here are some specificity problems to solve! 

### Problem 1
Score the specificity of each selector and determine which one has the highest specificity.

1. `#header .nav-item.active`
2. `.header .nav-item.active:hover`
3. `ul li a.nav-link`

**Questions**:  
- Which selector is the most specific?
- What are the specificity scores for each selector?

### Problem 2
Determine the specificity scores and order the selectors from most to least specific.

1. `section .content p.title`
2. `#main .content`
3. `article[data-type="feature"] .highlight`
4. `div p span`

**Questions**:  
- Which selector will apply if there’s a conflict?
- What are the specificity scores for each selector?

### Problem 3
Score the specificity for these selectors, then determine which style would apply if each were targeting the same element.

1. `#primary-header`
2. `header .logo img`
3. `header.logo img`
4. `img.logo`

**Questions**:  
- Which rule will apply if there is a style conflict on an `<img>` element with a class of `logo` inside a header?
- What are the specificity scores for each selector?

### Problem 4
Analyze the specificity of these selectors and explain which one will take precedence.

1. `body .main-content #unique-section h2`
2. `#container .main-content h2`
3. `.main-content h2`
4. `h2`

**Questions**:  
- Which selector has the highest specificity and why?
- If all these selectors target the same `<h2>` element, which style will apply?

### Problem 5
Calculate the specificity scores and explain which style will be applied if all of these target the same element.

1. `a:focus`
2. `a.button:hover`
3. `#menu a.button:hover`
4. `nav .menu a.button:hover`

**Questions**:  
- What are the specificity scores for each selector?
- Which selector has the highest specificity?

### Problem 6
Each selector below targets a `p` element. Order them by specificity from highest to lowest, and explain why.

1. `.content p.special`
2. `#main p`
3. `body div p`
4. `p.special`
5. `#main .content p`

**Questions**:  
- What are the specificity scores?
- Which selector is the least specific, and why?






## Strategies

Usually most of your styles are good everywhere. Define them like you always do. 

Use media queries to define the situation where styles should change and those styles that changed. 

Here's a simple example: 

```CSS
body {
	color: tomato;
	background-color: lightgray;
	font-size: 16px;
}

@media print {
  body {
    color: black;
		background-color: white;
  }
}
```

The first rule sets the color to tomato with a background color of lightgray, and font-size of 16px. These styles apply everywhere. 

When the media is print the styles in the media query apply. These overwrite the color and background-color to black and white. 

**Note!** Browser often override CSS styles for print to suppress things like background color and images becuase this would waste printer ink. You may have to do more work to get your print styles working! 

[Read more about print styles here](https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/). 

Here is a more practical strategy that rearranges the grid when the screen is smaller. 

```CSS
/* Set up a grid */
.wrapper {
	display: grid;
	grid-template-areas: "h h h"
	                     "m m s"
											 "f f f";
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;
}

/* Assign elements to grid */
.header {
	grid-area: h;
}

.main {
	grid-area: m;
}

.side-bar {
	grid-area: s;
}

.footer {
	grid-area: f;
}

/* Add media query that applies when the screen is 1000px or smaller */
@media (max-width: 1000px) {
	.wrapper {
		grid-template-areas: "h h h"
		                     "s s s"
	                       "m m m"
											   "f f f";
	}
}
```

Code above shows .main and .side-bar side by side when the screen is larger than 1000px, it places the .side-bar above .main and makes both take up the full width when the screen is 1000px or smaller. 

### Mobile First vs Desktop first design

Mobile first is a design strategy where you would prioritize designing for a mobile environments. 

Desktop first is the strategy where you would prioritize for the desktop first. 

Today 54% of traffic is on mobile devices. Many applications might benfit from a a good user experience and design on mobile! 

For many products it can be better to design for mobile first. The alternative is desktop first design. 

For responsive projects your goal would be to develop the design of your project so that it displays the way you intend on mobile or desktop first.

Then add media queries to fix and improve display problems on other types of displays. 

**Don't design for both at the same time!** 

#### Break points

The general strategy to create responsive designs is to look at the screen width to determine the type of device. 

| Device Category | Breakpoint width |
|:----------------|:-----------------|
| Mobile portrait | 320px - 414px    |
| Mobile landscape | 568px - 812px   |
| Tablet portrait | 768px - 834px    |
| Tablet landscape | 1024px - 1112px |
| Laptop          | 1366px - 1440px  |
| Desktop         | 1680px - 1920px  | 

The idea of break points is to apply styles at the points where the width if the screen "breaks" to a new screen size. 

You can apply breakpoints against the min-width or the max-width. 

```CSS
/* Min-width breakpoints */
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { ... }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }
```

```CSS
/* Max width break points */
@media (max-width: 575.98px) { ... }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { ... }

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { ... }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { ... }
```

- Screens smaller than 576px = mobile phone in portrait
- Screens larger than 576px = mobile phone in landscape
- Screens larger than 768px = tablet
- Screens larger than 992px = desktop
- Screens larger than 1200px = large desktop screen

Resources: 

- https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/
- https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp
- https://kinsta.com/blog/responsive-web-design/

## Challenges

Make your site responsive. 

If you designed your site for desktop add some media queries at the bottom of your stylesheet or in a new stylesheet. Start with one new breakpoint from the list and define some styles to fix styles and make the page look good at that break point.

If you started desktop first start designing for mobile phones. Otherwise use the other extreme. 

Use the responsive designmode in your browser!

- Safari: https://thesweetsetup.com/use-responsive-design-mode-safari/
- Chrome: https://developer.chrome.com/docs/devtools/device-mode/
- Firefox: https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/

Once you've got both extremes working test sizes inbetween like landscape phones and tablets. If you need some adjustments add a new media query for that breakpoint and apply some styles. 

