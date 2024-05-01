# Pseudo Elements 

## Objectives 

- Create Elements with CSS
- Use the ::before and ::after pseudo elements
- Use absolute and relative position
- Create custom UI form controls 

## Pseudo elements

> 1. supposed or purporting to be but not really so; false; not genuine "pseudonym"
> 2. resembling or imitating. 

Pseudo means resembling or imitating and comes from the Greek word pseudès meaning False. 

In CSS selectors that begin with `:` or `::` are called "pseudo selectors". We use these to represent situations or elements that don't have a concrete definition. 

## ::before and ::after

These elements create content that is added before or after the existing content of an element. 

Use `::before` and `::after` like this: 

```CSS
element::before {
	content: "this content appears before...";
	color: tomato;
}

element::after {
	content: "...this content appears after";
	color: cornflowerblue;
}
```

Note! These pseudo elements can be styled! By default these elements are inline. You can make them `display: block` if you like! 

## What can you do with ::before and ::after? 

You can add elements that might be needed but aren't part of the markup. This should be kept strictly to presentational elements and not used to add content to a page! 

Here are a few examples: 

- make custom blockquotes
- make custom UI controls
- Display presentational elements that are not possible with other CSS. Imagine a todo list where elements need to display a checkmark if they are completed. You could easily display the checkmark with a style and a class name.

You can also display images and SVG

### What are the limits?

If you need more than two elements you're out of luck. 

### Read more about ::before and ::after

https://css-tricks.com/almanac/selectors/a/after-and-before/

### basic examples

This examples adds the words "hello" and "world" to an empty div. This just shows how to use ::before and ::after. 

```html
<div class="example-1"></div>
<style>
	/* Example 1 */
	/* Notice the div is empty but we can add content with 
	::before and ::after */
	.example-1 {
		border: 1px solid;
	}

	.example-1::before {
		content: "Hello"; /* Adds hello before */
	}

	.example-1::after {
		content: "World"; /* adds world after */
	}
</style>
```

In this example the target div contains "***", the purpose of this example is to prove that ::before places content before existing content and ::after places content after existing content! 

```HTML
<div class="example-2">***</div>
<style>
	/* Example 2 */
	/* Besides adding content we can style that content */
	
	.example-2 {
		border: 1px solid;
	}

	.example-2::before {
		content: "Hello";
		font-size: 22px;
		color: tomato;
	}

	.example-2::after {
		content: "World";
		font-size: 36px;
		color: cornflowerblue;
		font-family: Helvetica;
		font-weight: bold;
	}

	/* Notice the ::before element is created BEFORE
	the existing content and the ::after element
	is created AFTER the existing content!  */
</style>
```

### Make a fancy blockquote

This is first of the practical examples. This examples adds some presentional elements to the blockquote element to make it look fancy. This method doesn't require images and is handled with CSS alone so it can be easily edited or modified in the future. 

```html
<blockquote class="example-3">It always seems impossible until it's done.</blockquote>
<style>
	/* Example 3 */
	/* Elements can be declared display: block!  */
	
	.example-3 {
		background-color: rgb(0, 156, 222);
		color: #fff;
		font-size: 2rem;
		padding: 4rem;
		border-radius: 1rem;
		/* Set this element as the positioning context! */
		position: relative;
	}

	.example-3::before {
		content: open-quote; /* Display a curly quotation mark */
		font-size: 6rem;
		font-weight: bold;
		display: block; /* Display as a block */
		position: absolute; /* Use absolute position */
		color: rgb(124, 196, 227);
		left: 10px;
		top: 0;
	}

	.example-3::after {
		content: "";
		display: block;
		position: absolute;
		/* Here we draw a triangle and position it */
		border-width: 30px;
		border-style: solid;
		border-color: rgb(0, 156, 222) transparent transparent transparent;
		right: 60px;
		bottom: -30px;
		transform: rotate(135deg);
	}
</style>
```

### Make a close button with an X

This will draw a "fancy" close button with an X. For this we need two elements...

```html
<div class="example-4">
	A close button! <button>Foo</button>
</div>
<style>
	/* Example 4 make a close button 
	Here you needs two extra divs. Instead of adding 
	them to the markup we can add them in CSS. */
	.example-4 {

	}

	.example-4 > button {
		width: 40px;
		height: 40px;
		border: 1px solid;
		border-radius: 10px;
		border-color: #000;
		position: relative;
		background-color: #fff;
		color: transparent;
	}

	.example-4 > button::before {
		content: "";
		display: block;
		position: absolute;
		width: 30px;
		height: 6px;
		background-color: #000;
		left: 4.5px;
		top: 16px;
		transform: rotate(45deg);
	}

	.example-4 > button::after {
		content: "";
		display: block;
		position: absolute;
		width: 30px;
		height: 6px;
		background-color: #000;
		left: 4.5px;
		top: 16px;
		transform: rotate(-45deg);
	}
</style>
```

### Fancy checkbox/switch

Here the switch starts with a input/checkbox. The secret here is to hide the input since it can't be styled in comprehensive way, in other words input doesn't support a full range of style properties. The label on the other hand does support a full range of styles. 

Here the switch you see is the label. The circle that slides left and right is a pseudo element. 

To change the state you will use the `:checked` pseudo class. This selector applies rules when the checkbox has a check and doesn't apply when when it doesn't have the check mark. 

The structure of the HTML elements matters here! The selector: `input[type=checkbox]` applies to elements with the type attribute and value of "checkbox". In other words tags that look like this: `<input type="checkbox">`. The `+` selector, for example in: `input[type=checkbox] + label.switch`, is the [Adjacent Sibling Combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator), it separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent. This examples works on the concept that the label will immediately follow the input!

```html
<div class="example-5">
	<form>
		<p>Has Dog: 
			<input type="checkbox" id="dog">
			<label class="switch" for="dog"></label>
		</p>
		<p>Has Cat:
			<input type="checkbox" id="cat">
			<label class="switch" for="cat"></label>
		</p>
		<p>Has Lizard: 
			<input type="checkbox" id="lizard">
			<label class="switch" for="lizard"></label>
		</p>
	</form>
</div>
<style>
	/* Switch */
	/* Here the label is used as the switch. 
	The input is hidden. The circle within the switch
	is created through the ::before pseudo element. */

	input[type=checkbox] {
		display: none;
	}

	input[type=checkbox] + label.switch {
		width: 50px;
		height: 30px;
		display: inline-block;
		background-color: #ddd;
		border-radius: 30px;
		position: relative;
		transition: 200ms;
	}

	input[type=checkbox] + label.switch::before {
		content: "";
		display: block;
		position: absolute;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background-color: #fff;
		left: 2px;
		top: 2px;
		transition: 200ms;
	}

	input[type=checkbox]:checked + label.switch::before {
		left: 22px;
	}

	input[type=checkbox]:checked + label.switch {
		background-color: rgb(14, 188, 14);
	}
</style>
```

### Custom radio buttons 

Again the input/radio button doesn't support many style properties so it is hidden and the label is styled to replace it while the input is hidden. 

This example works on the same principals and uses similar selectors used in the checkbox examples above. 

```html
<div>
	<form>
		<input type="radio" id="vans" name="choice">
		<label class="radio" for="vans">Vans</label>
		
		<input type="radio" id="converse" name="choice">
		<label class="radio" for="converse">Converse</label>
		
		<input type="radio" id="nike" name="choice">
		<label class="radio" for="nike">Nike</label>
	</form>
</div>

<style>
	input[type=radio] {
		display: none;
	}

	input[type=radio] + label.radio {
		position: relative;
		padding-left: 28px;
		height: 24px;
		display: flex;
		align-items: center;
		margin: 0.25rem 0 0.25rem 0;
	}

	input[type=radio] + label.radio::before {
		content: "";
		width: 22px;
		height: 22px;
		border: 2px solid;
		display: inline-block;
		border-radius: 50%;
		position: absolute;
		left: 0;
		transition: 200ms;
	}

	input[type=radio] + label.radio::after {
		content: "";
		width: 18px;
		height: 18px;
		background-color: transparent;
		border-radius: 50%;
		position: absolute;
		left: 4px;
		transition: 200ms;
	}

	input[type=radio]:checked + label.radio::before {
		border-color: tomato;
	}

	input[type=radio]:checked + label.radio::after {
		background-color: tomato;
	}

	.choice-container {
		display: flex;
		flex-direction: column;
	}
</style>
```

## Challenges 

This is an open ended challenge. Use the form below as a starting point. Your goal is to styles the form elements. Use the concepts above to create custom radio buttons and chack boxes. 

Borrow ideas from these articles: 

- https://moderncss.dev/pure-css-custom-checkbox-style/
- https://www.sliderrevolution.com/resources/css-checkbox/

```HTML
<!DOCTYPE html>
<html>
	<head>
		<title>Form Elements</title>

		<style>

		</style>
	</head>
	<body>

		<form>
			<h1>Personality Assessment</h1>

			<h2>Name</h2>

			<input type="text">

			<h2>Pet prefernces</h2>
			<input type="checkbox" id="canine">
			<label class="switch" for="canine">Canine</label>

			<input type="checkbox" id="feline">
			<label class="switch" for="feline">Feline</label>

			<input type="checkbox" id="pscine">
			<label class="switch" for="pscine">Pscine</label>
			
			<h2>Shoe Style</h2>
			<input type="radio" id="vans" name="choice">
			<label class="radio" for="vans">Vans</label>
			
			<input type="radio" id="converse" name="choice">
			<label class="radio" for="converse">Converse</label>
			
			<input type="radio" id="nike" name="choice">
			<label class="radio" for="nike">Nike</label>
			
			<p><button>Submit</button></p>
		</form>

	</body>
</html>
```

## After class

Continue working in the current assignment. 

