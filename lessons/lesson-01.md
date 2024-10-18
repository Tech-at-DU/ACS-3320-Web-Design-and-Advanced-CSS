# ACS 3320 Web Design and Advanced CSS

This class will cover two main topics. 

- CSS - We will review CSS you already knew and continue into some CSS that you may not be familiar with. We will cover animation, position, 3D, and more. 
- Web Components - Web components are a native components that allow you to create your own custom tags that are backed up by JS functionality. 

# ACS 3320 Lesson 1 - CSS Review

CSS Review 

## Why should you know this?

Understanding CSS the language and the syntax is the gateway to using CSS. CSS is a powerful tool that lets you determine the appearance of anything in the browser. 

Note! You can also use CSS selectors with JavaScript! Things like `querySelector()` and `matches()` both use a CSS selector! The selector language is a foundational part of the system!

### Disclaimer: 

This may seem like a class about design and creative visual ideas, and you may feel like you don't have any of these. If this is the case I want you to find ideas that you see on the web and try and recreate these in your projects for this class. 

## Review 

How much CSS do you know?

## Using CSS

### Where can you put CSS?

- CSS can be written in external files with the .css file extension.
- CSS can be written in the style tag anywhere in an HTML document. 
- CSS styles can be applied to any HTML element using the style attribute 

#### Using CSS files 

Link to a file using the link tag. 

```HTML
<!-- index.html -->
<!-- Link to an external stylesheet with the link tag -->
<link rel="stylesheet" href="style.css">
```

```CSS 
/* style.css */
/* Your CSS code here... */
/* Code here applies styles to everthing on the page */
```

#### Using the Style tag
Anywhere in an HTML document. 

```HTML
<style>
	/* Everything here is written in the CSS language */
	/* ... */
	/* Code here applies styles to everything on the page */
</style>
```

#### Using Inline styles 
Inline styles are added to any tag, these styles style that tag. 

```HTML
<h1 style="color: red">Inline Styles</h1>
<p style="color:maroon; font-size:1.2em">Separate each style rule with a semicolon!</p>
<!-- The style rule above only applies to the element! -->
```

#### Styling with JS
You can style elements with JS. All elements have a style property. All CSS properties exist on the style property using a camelcase name.

```JS
const el = document.querySelector('#my-input')
el.style.fontSize = '1rem' // names are camelcase
el.style.padding = '0.5rem' // use the same values 
el.style.border = '1px solid' // if it isn't a number use quotes
```

This will show up as an inline style! 

```HTML
<input 
	id="my-input"
	style="font-size: 1rem; padding: 0.5rem; border: 1px solid"
>
```

### Writing CSS
The CSS language is written blocks we call **Rules**. Each rule begins with a selector and contains a list of properties and values. 

The properties and values are the styles applied to the element identified by the selector.

```CSS
h1 {
	font-size: 32px; 
	color: red;
}
```

The rule above selects all h1 tags and makes them `32px` and `red`. 

#### Selectors
Review your selectors by playing this game: https://flukeout.github.io

I expect you to know all of these selectors! You've looked at this before but I'm sure you don't remember them, time to review! 

Selectors are important! If you can't define a selector for something you can't style it! (except with an inline style but you don't want to be forced to use these all the time!)

If you understand selectors you can generate a selector that can identify any element or group of elements in a document. 

The selector language is powerful. Think of it as a language that allows you to traverse the document tree and identify elements within that tree. 

Besides being used for CSS styles the selector language is also useful with JavaScript to give your code access to elements on the page. 

There are many selectors. Too many to cover them all here. Here are a few that you should know: 

**Name** selector - uses the tag

```CSS
h1 { /* selects all h1 tags */ }
p { /* selects all p tags */ }
div { /* selects all div tags */ }
```

**Class** selector - begins with a dot `.` followed by the class name.

```HTML
<!-- index.html -->
<div class="container"></div>
<p class="card dark"></p>
<p class="card"></p>
<p class="card"></p>
```

```CSS
.container { /* selects all elements with the class name contianer */ }
.card { /* selects all elements with the class name card */ }
.dark { /* selects all elements with the class name dark */ }
```

**id** selector = begins with `#` followed by the id name. id names should be unique and only appear once per page! 

```HTML
<!-- index.html -->
<div id="main"></div>
<p id="display"></p>
<div id="alert"></div>
```

```CSS
#main { /* selects all elements with the id name main */ }
#display { /* selects all elements with the id name display */ }
#alert { /* selects all elements with the id name alert */ }
```

**Wild card** selector - Selects all elements use the `*`. 

```CSS 
* { /* Selects every tag on the page! */ }
```

This selector gets more useful when combined with the selectors, see below! 

**Compound selectors:** 

**Child** selector - Selects the child element of another selector use the `>`.

```HTML
<p>Not selected</p>
<div>
	<p>Selected!</p>
</div>
<div>
	<aside>
		<p>Not selected</p>
	</aside>
</div>
<div class="card">
	<h3>Selected</h3>
	<p>Selected</p>
	<div> <!-- selected -->
		<button>Not selected</button>
	</div>
</div>
```

```CSS
div > p { /* Selects only p tags that are children of div tags */ }
.card > * { /* Selects all of the children of class 'card' */ }
.container > #main { /* Selects the element with id 'main' in a thing with class name 'container' */ }
```

**Descendant** selector - Select all descendants of another selector use the space ` `.

```HTML
<p>Not selected</p>
<div>
	<p>Selected!</p>
</div>
<div>
	<aside>
		<p>Selected!</p>
	</aside>
</div>
```

```CSS
div p { /* Selects only p tags that are descedents of div tags */ }
#main * { /* Selects ALL descendants of #main */ }
.card div > img {}
div#main {/* div with the ID main */}
div.card { /* div with class card */ }
```

**Pseudo** selectors: There are lots of pseudo-selectors they all begin with a colon `:`.

`:nth-child()` selector - Selects an element by it's index use: `:nth-child(1)`. This selector has several different ways it can be used!

```HTML
<ul class="menu">
	<li>
		<ul>
			<li></li>
		</ul>
	</li>
</ul>
<ul class="options">
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

```CSS
.options li:nth-child(1) { /* Selects the first li tag */ }
ul.menu > li:nth-child(3) { /* Selects the third li tag */ }
li:nth-child(2n) { /* Selects every second element */ }
li:nth-child(4n) { /* Selects every fourth element */ }
li:nth-child(3n+1) { /* Selects every third element offset by 1 */ }
li:nth-child(even) { /* Selects all even indexed elements */ }
li:nth-child(odd) { /* Selects all odd indexed elements */ }
```

Did you get all that? This has more than a few options!

Don't memorize the options! Instead, know that nth-child will select an element by it's index. Look up the options when you need them. 

**Attribute Selector**: The attribute selector targets an element based on its attributes. Remember an attribute is the `name="value"` pairs that defined inside the opening tag. For example: 

```HTML
<div class="summary" id="zen-summary" role="article">...</div>
```

In this example `class`, `id`, and `role` are attributes. 

The ZenGarden page doesn't offer a lot of interesting opportunities for using the attribute selector. In other cases the attribute selector can be more useful. 

```HTML
<form>
	<input type="text">
	<input type="checkbox">
	<input type="color">
	<button type="submit">Submit</button>
</form>
```

Consider the markup above. We could target various elements by their attributes. 

```CSS
/* Select all inputs with type */
input[type] { ... }
/* Select only the input with type="color" */
input[type="color"] { ... }
/* Select the element with an attribute that contains 'c' */
input[type*="c"] { ... }
/* Select the elements ending with 't' */
input[type$="t"] { ... }
```

#### Properties
properties are always written in the form:

```CSS
name: value;
```

You need to have the semicolon before starting a new property! Missing the semicolon is probably the most common CSS syntax error ever!

```CSS
name: value;
name: value;
name: value;
etc.
```

## CSS Zen Garden

The CSS Zen Garden is a website developed for the sole purpose of showing off what can be done with CSS. 

Visit the site and click through some of the designs. 

http://www.csszengarden.com

What is this? Every one of these pages is using the same markup. The only thing that changes from page to page is the CSS. You're not allowed to change the markup! 

How are these pages looking so different if you can't change the markup? That's the power of CSS! 

## Typography

One of the most powerful modes of communication is the written word. Typography gives form to the message. Beyond the words, you use the shape and style of the characters to become part of the message. 

CSS provides a wide range of control over the character on a page. Let's look at a few of the properties available to us: 

- color 
- font-size
- font-family
- font-weight
- line-height

## Style the Zen Garden Page

Your Goal style the CSS ZenGarden Markup. You can not change the markup! You can only add a stylesheet. 

- Download the CSS Zen Garden markup here: http://www.csszengarden.com/examples/index
- Create a new file named: `style.css` put this file in the same folder as your HTML file. 
- Add your styles!

Look at the mark-up closely. You can use the tag names, class names, and other features along with the selectors covered in the CSS Diner to apply your styles. 

What to syle? This first assignment focus on typography. Use these properties: 

- font-family
- font-size
- font-weight
- color
- line-height

**What to do?**

- Style the Zen Garden page focussing on typography. 
- Use all of the properties listed above. 
- Submit your work to Gradescope.

### Challenges: 

Use the Selectors covered earlier. You can't change the Zen Garden markup. You must use selectors creatively to target elements on the page. 

For some elements: `body` and `h1` these tags appear only once on the page you can use select them using their names. 

```CSS
/* Properties applied ot the body */
body { ... }
/* Properties appied to the h1 */
h1 { ... }
```

The page is divided into sections and each section has a class name. Using you can use these class names to provide a blanket style for everything in the section. 

```CSS
/* Applies to the element with class intro */
.intro { ... }
/* Applies to the element with class summary */
.summary { ... }
/* Applies to the element with class preamble */
.preamble { ... }
```

To call out individual items in a section use the child or descendent selectors. 

```CSS 
/* Applies to the h2 that is immediate child of class intro */
.intro > h2 { ... }
/* Applies to p tags that are immediate children of class summary */
.summary > p { ... }
/* Applies to the a tags inside a class preamble */
.preamble a { ... }
/* Applies to all a tags in the class design-selection */
.design-selection a { ... }
```

Combining the ideas above you can add the `:nth-child()` selector to access individual elements that don't appear to have any other way to select them. 

```CSS
/* Selects the first paragraph in summary */
div > p:nth-child(1) { ... }
/* Selects the second p in each div */
div > p:nth-child(2) { ... }
/* Selects every other a tag that is a child of a list */
ul > li:nth-child(even) > a { ...}
```

Solve these challenges: 

- Use the following CSS properties: 
	- `font-family`
	- `font-size`
	- `font-weight`
	- `color`
	- `line-height`
- Set a font family for all elements. Use the `body`
	- Set the color and background color for the page. Use the `body`
- Style the headings in each section. 
	- The page has a heading: "CSS Zen Garden" Give this a unique style. 
	- Under the page heading is a subheading: "The Beauty of CSS Design". Style this so it compliments the page heading. 
	- Each section has its heading, these are: "The Road to Enlightenment", "So What is This About?", "Participation", "Benefits", "Requirements", and "Select a Design" style these. 
- Style the links
- Give the links in the lists: Select a Design, Archives, and Resources a different style from the links in the body of the text. 
- Style the links in the footer
- Use your selectors! Be sure to use the following selectors in some way: 
	- name/tag selector
	- class name selector
	- child selector
	- descendent selector
	- `:nth-child()`

### What are these properties good for? 

The font face adds character and sets the tone for your message. Your sites are seen on the screen making the type easy to read facilitates your message. 

The default font: Times New Roman not very good. You can do better! 

The size of the text has a large effect on legibility. It also controls the order the message is delivered and points out what is important on the page. 

The `font-weight` adds weight to the message. Points out what is important, and emphasizes what is said. 

Color and contrast are important to legibility. 

Dense blocks of type are hard to read. Adding space between lines makes them easier to read. The longer a line is the more space between lines is needed. 

## After Class

- Solve the CSS Diner problems: https://flukeout.github.io
- [Start assignment 1](../assignments/assignment-01.md)

Assess your work

| Expectations | Does not meet              | Meets                 | Exceeds                          |
|:-------------|:---------------------------|:----------------------|:---------------------------------|
| Completion   | Your Zen Garden Page only some of these styles: font-family, font-size, font-weight, color, line-height | Your Zen Garden page styles all of these properties: font-family, font-size, font-weight, color, line-height | You have carefully consoidered your styles, gotten feedback and acted on that feedback improving your work through iteration |
| Quality      | Your typography does not help convey the message of the page content. | Your typography creates a hierarchy that helps convey the message of the page. | Your styles leads us visually through the content of the page enhacning the message. |
| Comprehension| You're not sure what the style properties you use are doing and would have a hard time making changes. | You can expalain the styles you used to someone else. | You feel you could apply the concepts here to future projects. |
| CSS Selectors | You modified the Zon Garden Markup | You were able to apply define selectors that can modify any element on the Zen Garden Page. | You can think mulitple selectors that could be used to select any element of the Zen Garden Page. |

## Resources

- [CSS Diner](https://flukeout.github.io)
- [CSS Zen Garden](http://www.csszengarden.com)
- [Typography for Developers](https://css-tricks.com/typography-for-developers/)
- [CSS Typography](https://www.webfx.com/blog/web-design/css-typography-01/)
- [CSS Reference Typography](https://cssreference.io/typography/)
- [Web Typography](https://www.internetingishard.com/html-and-css/web-typography/)
