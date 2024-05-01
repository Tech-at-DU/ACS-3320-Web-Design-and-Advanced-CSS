# FEW 2.2 Final Assessment 

Your job is to style the color.fun website. Use your CSS framework as a starting point. You don't have to write all of the styles from scratch!

Feel free to modify the HTML markup on the page in any way that you wish. You must not break the functionality! Two things happen here: 

1. Color swatches are generated in `div.swatches`. 
2. Clicking swatches adds colors to the cart. 

Use your CSS framework! Your framework styles should cover much of the problems here. You will have to write some CSS to fill in some details.

Some problems will not be covered by your framework for these you will need to write your own styles. 

## 1 Page structure

The page is structured as: 

- main
	- section#nav
	- section#banner
	- section#about
	- section#popular
	- section#swatches
	- section#cart
	- section#contact

Each section should have a `min-height` equal to the height of the window. Some sections might need to be larger. So `min-height` would be the best coice. 

**What to do**: Give each section a `min-height` of 100vh;

The nav bar doesn't need to follow this and any other section that you think doesn't work with this can be a size that you think works better. 

## 2 Typography

Set the font style for text and headings. All fonts on the page should be styled. **I should not see the default Times New Roman anywhere!** 

**What do to** Style the text content. This includes: text (paragraphs etc.) headings, and links. None of these elements should have the default HTML appearance. 

## 3 Style The Navbar 

Style the navbar and links. The navbar should include the links and the page title.

**What to do:** Create a navbar along the top of the page. It should be a horizontal bar containing the links in `section#nav`

**Extra credit:** Make the navbar sticky. A sticky navbar always stays at the top of the page even when the page scrolls. 

## 4 Style cards 

These cards have an image and text. **The cards should sit in a horizontal row.** 

**What to do:** In `section#popular` there are three divs each containing an image and a paragraph. Style these so that they look like cards. The cards should be arranged in a horizontal row, use flex. 

There is an image in each card. Style these images so they look nice and fit the card. 

## 5 Style Colors

The `section#swatches` contains 100 `div.swatch` elements. Each of these is a color that is for sale! Currently each swatch looks like a red box. You'll give each one of these a color in the next step. 

Clicking a swatch will add it to the shopping cart. 

**What to do:** Arrange the color divs in the #swatches section in a grid. Change the size of the swatches. The current style makes each swatch is 100px by 100px. They can be any other size! 

### 6 Genereate 100 colors

There are 100 color swatches but all 100 are red. You need to generate 100 unique colors and display each color in a swatch. You can do this in any way you like. 

Possible solutions for this problem would be to use JS or SASS. 

1) JS solution would need to assign an inline color to each color swatch. 

2) The SASS solution would require using a loop to generate style rules for all 100 color properties. Notice that each color has a class name of `color-#` where # is the color number. Your SASS code could generate something like:  

```CSS
.color-0 { background-color: red; }
.color-1 { background-color: green; }
.color-2 { background-color: blue; }
```

**What to do:** Generate 100 colors. Make sure each color swatch has a unique color. 

Make sure each swatch displays a different color! 

NOTE! Each swatch needs to keep the class name: `add-to-cart` or it will break the shopping cart system! 

## 7 Shopping cart 

Clicking a color swatch adds it to the shopping cart. The cart is a list and each row is made up of some text, buttons, and an input. **You should style these.**

In this step, your goal is to style the form elements that show up in the shopping cart. 

The cart displays when you click a swatch. You won't see it unless you click a swatch to add a swatch to the cart! 

If you need to change the structure of the shopping cart list item you can. Look for it in the script tag at the bottom of the page, there is a comment calling it out. 

**What to do:** Style the shopping cart. There is text, input, and three buttons here. All three of these things should have a style! 

Be sure to style all of the form elements: buttons and inputs!

## 8 Style the contact form

At the bottom of the page is a contact form. Your goal is to style this. 

**None of the elements should use the default styles.**

**What to do:** Style the form elements. There are several inputs and a button, style all of these.

## 9 Center the content of each section

Center the content of each section. I'll leave this up to you to how you handle it. generally the content should be centered. Especially for the banner, card, and contact sections. For other sections you may decide otherwise. 

**What to do**: Arrange the content in each section. Use flex to place the content in the center of a section or arrange it another way.

## 10 Ticker Tape 

Create a web component that animates the text inside with a ticker-tape effect. Use the ticker tape component at the top of the page to animate the text: `<h1>...Color.com is awesome...</h1>`. 

The ticker tape should move the text across the screen. You can take one of two approaches. 

1) Manipulate the string content. Use a timer to take the first character of the string and move it to the end of the string. Doing this over time you'll end up with: 

- Hello
- elloH
- lloHe
- loHel
- oHell
- Hello

2) Create an inner element containing the text. Transform this element from right to left. At the end of the animation Move it back to the right and start over again.

Taking this approach it would be easiest to use `@keyframes`. To do this in a web component you'll want to define this in a template. See the example [here](https://github.com/Tech-at-DU/simple-component). Note the styles are in a string in a `<style>` tag. You could define your `@keyframes` block here along with other animation styles.

Notice that all of the styles here are defined in a template and the template is used in the component. 

```js
const tempNode = template.content.cloneNode(true)
this._shadowRoot = this.attachShadow({ mode: 'open' });
this._shadowRoot.appendChild(tempNode)
```

## Submit your work

Submit your work on GradeScope. 

