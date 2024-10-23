# FEW 2.2 Lesson 2 - Typography

## Review 

Look at the CSS Zen Garden markup. Find the nav tag with role="navigation". The list here contains li tags each with two anchors and the word "by". Imagine you need to style each of these differently.

The simplified markup looks like this: 

```HTML
<nav role="navigation">
	<ul>
		<li>
			<a class="design-name">Mid Century Modern</a> 
			by
			<a href="http://andrewlohman.com/" class="designer-name">Andrew Lohman</a>
		</li> 
	</ul>
</nav>
```

Style the design name color: tomato, font-size: 2rem, text-transform: uppercase. 

Style the word "by" as color: #333, font-size: 1.5rem

Style the designer name as color: cornflowerblue, font-size: 1rem, text-transform: capitalize

```CSS
/* Style the design name */

/* Style the deigner name */

/* Style the word "by" */

```

## Video Lecture: 

https://www.youtube.com/playlist?list=PLoN_ejT35AEhF_M9vBuZgW0E4PiDb19oX

Follow the videos for Lesson 2

## Explore type

Take a look at some pages that have good typography and explore the values they used. 

Take a look at these sites: 

- https://reactjs.org
- https://www.apple.com
- https://www.android.com
- https://www.nike.com
- https://github.com
- https://medium.com

Find some type you like and look at the properties used: 

- What is the Font family?
- What is the font size?
- What is the weight? 
- What is the line height?

## Fonts

Fonts come in a wide variety. Fonts give form and visual style to the ideas and message. 

A big part of choosing fonts is understanding your brand. While a brand includes lots of things beyond just type it will help to understand that brand. Watch this 3 min video describing brand identity: 

https://venngage.com/blog/brand-fonts/

Notice the type used in the examples websites above is all san serif. The letter forms are clean and easy to read. This gives an impression of being stable, and reliable. Good qualities to express to your customers. 

Would you use GitHub if their font was [Comic Sans](https://en.wikipedia.org/wiki/Comic_Sans)?

### Serif vs San Serif

Fonts can be classified into broad groups. The two most popular fonts used for web design fall into these groups: Serif and Sans Serif. 

![Serif vs San Serif](images/Serif-vs-San-Serif.png)

What's the difference? Serif fonts have a serif, which are the little details at the extents of the letter shapes. Sans Serif fonts don't have serifs! 

What's the significance? Sans Serif fonts are generally easier to read on the screen. While Serif Fonts read better in print. 

- Serif 
	- Reads better in print
	- Tends to look "old school", respectable, and formal
- San Serif
	- Looks modern and youthful
	- Reads better on screen

### How to choose a font? 

Without a brand, as a guide, you can think of choosing a font in more general terms. Ask yourself what fonts are available? You can only display fonts that are installed on any computer. 

_While we migth want our apps to use fonts that we like it's often best to make our apps look like they belong by matching the font to a font used by the operating system._ 

Q: What fonts are installed?

A: It depends on the system and version!

In the old days we had these: 

- Arial
- Helvetica
- Verdana
- Times
- Times New Roman
- Courier New
- Courier
- Georgia
- Palatino
- Garamond
- BookmanComic Sans
- Trebuchet MS
- Arial Black
- Impact

These didn't exist on all systems: Linux, Mac, and Windows. Here is a list that is common to all systems: 

- Arial
- Courier New
- Georgia
- Times New Roman
- Trebuchet MS
- Verdana

You can split these fonts between serif and sans serif:

- Serif - Courier New, Georgia, Times New Roman
- San Serif - Arial, Verdana, Trebuchet MS

It's hard to choose a font that works on every system. 

And these fonts are a little meh (not so great).

Luckily there are a few more options if you are willing to use different fonts on different systems! In some ways this is can be a better choice because it will allow your app to look "native" on any system.  

#### Font Stack

The font stack is a list of fonts from which the browser will choose the first it from the list is available. 

For example, you might want to use Helvetica but it's not available on Windows in which case you'll settle for Arial. Your font stack might look like this: 

```CSS
body {
	font-family: Helvetica, Arial;
}
```

The system also provides a couple extra font options named: `serif` and `sans-serif`. These options choose the default system serif or san serif font. 

For example, if you wanted to use the default system sans serif font if Helvetica and Arial were not available, your font stack might become: 

```CSS
body {
	font-family: Helvetica, Arial, sans-serif;
}
```

But wait, there's more! 

#### UI System Fonts 

These UI-specific fonts are newer and more up-to-date than the standard system fonts. These work especially well for mobile since mobile devices tend not to use the same fonts available on the desktop. 

Here is a chart of current systems, the version, and the default font. 

| OS | Version | Font name |
|:---------|:-------------------------|:---------------|
| Mac OS X | El Capitan 10.11 | San Francisco |
| Mac OS X | Yosemite 10.10 | Helvetica Neue |
| Mac OS X | Mavericks 10.9 | Lucida Grande |
| Windows | Vista | Segoe UI |
| Windows | XP | Tahoma | 
| Windows | 3.1 to ME | Microsoft Sans Serif |
| Android | Ice Cream Sandwich (4.0)+ | Roboto |
| Android | Cupcake (1.5) to Honeycomb (3.2.6) | Droid Sans |
| Ubuntu | All versions | Ubuntu |

Wow, so the system font changes for different versions of the operating system!

Along with this comes a few new keywords for these new system fonts. 

| Font | Device Targeted |
|:-----------------------------------|:----------------------------------------|
| -apple-system (San Francisco) | iOS Safari, macOS Safari, macOS Firefox |
| BlinkMacSystemFont (San Francisco) | macOS Chrome |
| sans-serif | Any |

But what font stacks do professional apps use? 

#### What are common font Stacks? 

Let's take a look at common font stacks used by professional projects. 

GitHub

```CSS
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

Medium and WordPress

```CSS
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
```

Explore some more font stacks: 

- https://css-tricks.com/snippets/css/font-stacks/
- https://www.cssfontstack.com

### Custom fonts

You can also use fonts that are not available on the user's computer but you'll need to load the fonts first! 

This also brings up issues of copyright. Sharing a font means you need to have the right to share it. 

Without going too far into the issue of fonts and copyright, let's start with Google fonts. Google provides hundreds of fonts and allows us to share them. 

https://fonts.google.com

Looks like Google has a library of 1455 fonts! That's a lot to wade through. Google Fonts has a great search feature. You can search by categories and other features. 

Here is a site that has curated their top 40 Google Fonts: 

https://www.typewolf.com/google-fonts

#### How to load a custom font?

Use: `@font-face`. 

https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face

```CSS
@font-face {
	font-family: "Open Sans";
	src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
	url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}

body {
	font-family: "Open Sans";
}
```

When using Google Fonts rules like these are included in the stylesheet you link to.

https://fonts.google.com

## Font Style strategies
Here are a couple ideas that you should always use!

1. Set a base font style on the `body`. Why? This styles all of the text on the page, it's easier than styling elements individually, its DRY! 
	- Set the `font-family`. You should probably be using one of the system font stacks above, unless you have some special plan. 
	- Set the `font-size`. All elements will pick up this font size, and headings will be a multiple of this size, for example `h1` will be 1.5em. 
	- ALWAYS set your `line-height`! The default line height is too small. Start with `line-height: 1.5` and adjust from there. Longer lines need more line height.
2. Set the background and fore ground colors. These are: `background-color` and `color`. Check the contrast with: https://webaim.org/resources/contrastchecker/ This will guarantee that your site is accessible. 
3. Now look at the headings. You can adjust the `font-size` of each (h1-6). Use `rem` to do this. Something like: 
	- `h1 { font-size: 3rem }`
	- `h2 { font-size: 2.5rem }`
	- `h3 { font-size: 2rem }`
	- etc. 
	- Your heading DO NOT have to graduate in size in a mathematical progression! (3, 2.5, 2, 1.5, 1, 0.5 etc.) You can adjust these by eye and decide what looks best. There is no rule that says a subsequent heading must be smaller than the previous heading! 
4. Elements like: h1-6, p, blockquote, ul, ol all have some margin at the top and bottom. This is what is creating the vertical space between these elements. You should adjust this! Try this: 
	- Remove the margins on everything with `* { margin: 0; }` Now you will have to set all margins yourself! 
	- Start by giving all elements a margin on the bottom with something like: `h1, h2, ..., p, blockquote, ul, ol, ... { margin-bottom: 1rem; }` With this everything should have a reasonable margin on the bottom and no margin on the top. From here you can adjust things until they look good. You can also modify specific elements later. 

With these ideas in place you will have styled a majority of your text content. You may need to now style individual items. 

- https://www.wearetonic.uk/articles/choosing-typography-and-line-height-sizes-in-web-design

### Line height and line length
The `line-height` property controls the vertical space between lines. 

Try it here: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

Longer lines of type are harder to read, and when lines are longer the space between lines needs to be increased. 

Watch this video: https://pimpmytype.com/line-length-line-height/

Setting `line-height` depends on your font choice and line length. A good starting point is 1.5. This is the same as 150%. (`line-height` is one of few properties that doesn't require a unit!)

### Pairing Fonts
The creative process of using type has a lot to do with putting two fonts side by side usually with one font as headings titles and the other body text. 

Here are some strategies for pairing fonts:

- Use Font weight: Heavy vs Light font. Use the same type face but chnage the weight for body and headings. 
- Serif against Sans Serif. Contrast two different font families in the body and headings. 
- Styles use a display font for headings. Display fonts are fonts that are meant to be used at a larger size: https://fonts.google.com/knowledge/glossary/display.

Explore this site for font pairs. Look for combinations described above:

https://www.fontpair.co

## Type Hierarchy
**A majority of your content is text.** Your text needs to look good and read well. An important part of communication is the order in which you say things.

**Design your type to control the order in which your content is read**.
This image explains it all.

- http://visual.ly/10-building-blocks-visual-hierarchy

You can use these design elements to create hierarchy in your type:

- Color
- Position
- Size
- Type Contrast 
- Weight

### Identify Hierarchy in the wild
Take a look at websites that you use every day and ask yourself what you read first and why you see that item first?

Since we're just working with type for now concentrate on the following properties: 

- `font-size`
- `font-weight` (be sure to experiment with `font-weight: lighter`)
 - Note: You can use a value with `font-weight` from 100-900 but this only works if the font supports these weights. Look at: [Roboto](https://fonts.google.com/specimen/Roboto)
- `color`
- `font-family`

### CSS Units 
CSS has the amazing ability to use a wide variety of units. To be a master of CSS you must understand these units!

**Absolute Units**

| Unit | Name | Equivalent to |
|:-----|:--------------------|:---------------------|
| `cm` | Centimeters | 1cm = 38px = 25/64in |
| `mm` | Millimeters | 1mm = 1/10th of 1cm |
| `Q` | Quarter-millimeters | 1Q = 1/40th of 1cm |
| `in` | Inches | 1in = 2.54cm = 96px |
| `pc` | Picas | 1pc = 1/6th of 1in |
| `pt` | Points | 1pt = 1/72th of 1in |
| `px` | Pixels | 1px = 1/96th of 1in |

These units are always the same size on any screen! 

**Relative Units**

| Unit | Relative to |
|:----|:------------|
| `em` | Font size of the parent, in the case of typographical properties like font-size, and font size of the element itself, in the case of other properties like width. |
| `ex` | x-height of the element's font. |
| `ch` | The advance measure (width) of the glyph "0" of the element's font. |
| `rem` | Font size of the root element. |
| `lh` | Line height of the element. |
| `vw` | 1% of the viewport's width. |
| `vh` | 1% of the viewport's height. |
| `vmin` | 1% of the viewport's smaller dimension. |
| `vmax` | 1% of the viewport's larger dimension. |

These units change! They are relative to something else. 

While we're on the discussion fonts and typography let's focus on em and rem. These two units relate directly to fonts. Sizing elements on the page based on the size of your type makes your pages work more harmoniously! 

#### em and rem
An em is equal to the font size of the parent element, while rem is equal to the font size of the **root** element. 

Here is an example from the ZenGarden page.

```CSS
<body id="css-zen-garden">
	<div class="page-wrapper">

		<section class="intro" id="zen-intro">
			<header role="banner">
				<h1>CSS Zen Garden</h1>
			<h2>The Beauty of <abbr title="Cascading Style Sheets">CSS</abbr> Design</h2>
		</header>

		<div class="summary" id="zen-summary" role="article">
			<p>A demonstration of what can be accomplished through <abbr title="Cascading Style Sheets">CSS</abbr>-based design. Select any style sheet from the list to load it into this page.</p>
			<p>Download the example <a href="/examples/index" title="This page's source HTML code, not to be modified.">html file</a> and <a href="/examples/style.css" title="This page's sample CSS, the file you may modify.">css file</a></p>
		</div>
		...
	</div>
	...
</body>
```

Imagine this CSS:

```CSS
body {
	font-size: 22px; /* Sets base font size for everything! */
} 

/* Everything in .summary will be 33px (22 * 1.5) */
.summary {
	font-size: 1.5em; 
}

.summary > p: nth-child(1) {
	font-size: 2rem; /* 44px (22 * 2) */

	/* If this were sized with em we get 66px (33 * 2) bog difference! */
	/* font-size: 2em;  */
}
```

## Challenges 
Improve your typography follow these steps: 

- Decide on a font
	- Choose a system font or a custom font
	- Define your font stack
- Set the base font size. This is important!
	- Set the base font size in px on the body element. 
	- Set the base line-height on the body. Start with 1.5  and adjust from there. 
- Set the font size for all of your headings. 
	- When setting the size for all of the headings use rem For example: `h1: 2rem`. 
Set margins for paragraphs and headings. 
	- Set the top margins to 0 
	- Start with bottom margin to 1rem. Adjust this if necessary. You can set this for all elements with: `p, h1, h2, h3 { ... }`

## After Class 

Submit your work to GradeScope!

- Complete the challenges from lesson 1: [CSS Diner CSS ZenGarden Type](lesson-01.md#after-class)

## Resources

- [CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Visual Hierarchy](https://visual.ly/community/Infographics/business/10-building-blocks-visual-hierarchy)
- [Brand](https://www.youtube.com/watch?v=Z3JR6mEWEEo)
