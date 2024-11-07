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

