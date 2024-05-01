# FEW 2.2 - Advanced CSS - Styling form Controls

Styling controls like buttons and form elements provide some extra challenges and opportunities.

## Why you should know this?

Form elements and controls are points of interaction in your applications. These need to be extra engaging. Hard to use and confusing forms risk losing potential users for application and customers for your business.

## Learning Objectives

1. Style form elements
1. Style elements according to state
1. Use attribute selector
1. Use parent element to control the layout of children

## Review 

- 

### Form elements 

Form elements are `input`, `textarea`, radio button, and checkbox. Your goal today is to style these elements. 

Add the markup below to your style example: 

```HTML
<form>
  <label for="name">Name</label>
  <input id="name" type="text" placeholder="enter name" />
  <label for="email">email</label>
  <input id="email" type="email" placeholder="enter email" />
  <label for="password">password</label>
  <input id="password" type="password" placeholder="enter password" />
  <label for="notes">Notes</label>
  <textarea id="notes" placeholder="enter notes"></textarea>
  <input type="submit">
</form>
```

These are only a few of the input types. There are also input types for: 

- number
- date
- color
- and more...

You'll just style these for now. 

## Styling Inputs

Selectors: 

```CSS
input[type=text], 
input[type=email], 
input[type=password], 
input[type=number], 
textarea {
  /* Your styles here */
}
```

Why these form elements? `<input type="button">` is a thing, it creates a button. Also `<input type="radio">` and `<input type="checkbox">` exist. The inputs listed above all create a single line text input. Though these act differently they all appear as a single line of text entry. 

When styling your inputs use these properties: 

- Typography
  - `font-size`
  - `font-weight` 
  - `color`
- Box 
  - `border-style`
  - `border-width`
  - `border-radius`
  - `border-color`
  - `background-color`
  - `padding`
  - `margin`
  - `box-shadow` (can have multiple, can be inset)

Let's talk about focus. An input has focus when the keyboard can enter text. You can style the input in its focussed state. 

```CSS
input[type=text]:focus, 
input[type=email]:focus, 
input[type=password]:focus, 
input[type=number]:focus,
textarea:focus {
  /* Your styles here */
}
```

What about that outline? The accessibility outline is very important. 

https://a11yproject.com/posts/never-remove-css-outlines/

`outline: none !important;`

Many people don't like the outline. If you don't like this replace it with your own style. Don't remove it!

## Challenge 

Style the form inputs and `textarea`. Use the properties listed above to make good-looking form inputs. 

Think about readability by looking closely at padding and `font-size`. 

Use the `:focus` pseudo-selector to style form elements in their focussed state.

Here are a few ideas: 

- Set a consistent border for all elements 
- Use padding to give some space around the text and the border
- Set the font size, the default font is too small

```CSS
input[type=text], 
input[type=email], 
input[type=password], 
textarea {
  padding: 1em;
  font-size: 1em;
  border: 3px solid var(--dark-gray); /* use a custom property! */
  /* Removing the outline! */
  outline: none !important;
  /* Animate changes */
  transition: 300ms;
}
```

If you've removed the outline be sure to Style the `:focus` state for these elements!

```CSS
input[type=text]:focus, 
input[type=email]:focus, 
input[type=password]:focus, 
textarea:focus {
  border-color: var(--selected-color); /* Use a custom property! */
}
```

## Labels and Selectors

Form elements should always have labels. A label must be associated with its form input. Why? 

- Used by screen readers and accessibility helpers
- Clicking a label activates the form element

A label can be associated with a form element in one of two ways: 

Using an `id` and `for` attributes:

```HTML
<label for="name">Your name</label>
<input id="name">
```
Or wrap the input in the label: 

```HTML
<label for="name">
  Your name
  <input id="name">
</label>
```

Each of these methods has its pros and cons. You should choose one style to use for your framework. This is how developers using your framework will need to write markup when using for elements. 

## Challenge: inputs

Define some styles for form elements in your framework. Use Bootstrap or one of the other frameworks we looked at earlier as a guide. 

Take a look at these:

https://getbootstrap.com/docs/5.0/forms/overview/#overview

These styles are not complicated but they do look better than the default styles. 

Add style for the input elements to your framework. The input can represent the test inputs like text, email, password, and number. An `input` can also be a button, radio button, and checkbox. These have a vastly different style. Here you want to style: text, email, password, and number. 

Use the guide above and be sure to consider the following: 

- font family
- font size
- color
- border
- padding

Also, style the label element. Labels are used to label form elements! Usually, a form element will have a label. 

## Forms 

Forms are groups of inputs. Forms are important to your applications. If people aren't willing to enter their information your websites are not going to go very far. Good-looking easy to use forms encourage people to use them. 

By default form elements are inline. This means they line up like words in a paragraph. More often you'll want forms to arrange themselves in a column. 

The form element can arrange it's children using flex. Using flex-direction. Here are some styles to get you started: 

```CSS
form {
  display: flex;
  flex-direction: column;
}
```

Style the labels. They might look better with a little margin: 

```CSS
label {
  margin: 1em
}
```

Usually, the submit button will be at the bottom and often on the left. 

```CSS
input[type=submit], button[type=submit] {
  align-self: flex-end;
}
```

## Challenge: Forms

Style your form. You want to set the basic layout without doing everything. The goal is to get enough style to make things look good while not doing so much that your forms can't be customized.

Add style for form layout to your framework. Use flexbox. You probably want form elements to default to a column. 

## Checkboxes and radio buttons

Checkboxes and radio buttons are special inputs. These do not provide much that you can style. They also appear different in different browsers. 

What can you do? You can style the label! Remember that clicking on the label is the same as clicking on the input it is associated with! 

The label can be styled extensively. 

Follow the example here and create a customized check box and radio button. 

https://www.w3schools.com/howto/howto_css_custom_checkbox.asp

With only the label element to work there is a limit to what you can draw. Luckily CSS provides to special elements: 

- `::before` (adds a first child element)
- `::after` (add a last child element)

The `::before` and `::after` pseudo elements generate a DOM elements that are added before and after the content of the target element! 

We can also use the `:checked` pseudo selector to apply styles 
when an element is checked. This applies to radio buttons and checkboxes. 

- `:checked` (is active when the element is selected)

These can be used to add elements that don't exist in your source markup. You can use them with the check box to add the checkmark. 

Use the content property to set the content of the new pseudo-element. 

Follow the custom checkbox example. Here `:after` is used to add the checkmark. This checkmark is a box with a border on two sides, that has been rotated 45 degrees. 

The `:checked` pseudo-class applies when a check box or a radio button is currently selected. 

## After Class

Keep working on your CSS framework. You should have all of the base styles covered. To make your CSS framework useful it also needs to style form elements. Form elements have some of the worst styles by default. Your framework needs to provide a solid set of styles for all of the standard form elements out of the box with little effort from your users. 

- Add styles for input elements to your framework. See [Challenges: Input](#challenge-inputs)
- Add form layout styles. See [Challenges: Forms](#challenge-forms)
- Add add radio and checkbox styles. [See notes above](#Check-boxes-and-radio-buttons)

Here is a checklist of what I'm expecting to see: 

- [ ] Styled inputs type: text, number, email, password. 
  - [ ] Font is a good size (form elements are only 0.75em by default this usually too small!)
  - [ ] Has a border or other style that clues us in that you can enter a value. 
  - [ ] Has some padding. Usually the border crowds the text of these elements making them awkward to work with and harder to read. 
  - [ ] Has a focus style. We need to know which field we are entering text into. Think about the default outline and consider if you need to replace this. [See my notes above](#styling-inputs)
- [ ] Style Radio button and check boxes
  - [ ] make a custom style for these. [See my notes](#checkboxes-and-radio-buttons) and the [resources](#additional-resources)
  - [ ] Think about adding a transition
  - [ ] Is this selected state clear? Can I tell which radio button is selected or whether a checkbox is selected? 
- [ ] The form element will contain form elements. Consider giving this a style with `display: flex` and `flex-direction: column`. You might also create a class name that arranges the form elements. 
- [ ] Stretch challenge: Style input type file. This should look like a button and hide the input element with the label displayed as a button! 
- [ ] Stretch Challenge: Make a "close box". The type of button that sits in the upper right corner with x. Use before and after to add the X to a normal button. 

## Additional Resources

1. https://css-tricks.com/the-checkbox-hack/
1. https://moderncss.dev/pure-css-custom-styled-radio-buttons/
1. https://www.sliderrevolution.com/resources/styling-radio-buttons/

Here are some ideas for styling custom radion buttons and checkboxes:

```HTML
<!DOCTYPE html>
<html>
	<head>
		<title>Form Elements</title>

		<style>
			.box {
				width: 100px;
				height: 100px;
				border: solid 1px;
				position: relative;
				background-color: #fff;
			}

			.box::before {
				content: "";
				width: 80px;
				height: 10px;
				background-color: #000;
				transform: translate(10px, 45px) rotate(45deg);
				position: absolute;
				transition: 400ms;
			}

			.box::after {
				content: "";
				width: 80px;
				height: 10px;
				background-color: #000;
				transform: translate(10px, 45px) rotate(-45deg);
				position: absolute;
				transition: 400ms;
			}

			.box:hover::before {
				transform: translate(10px, 55px) rotate(0deg);
				position: absolute;
			}

			.box:hover::after {
				transform: translate(10px, 35px) rotate(0deg);
				position: absolute;
			}





			/* Close button */
			button.close-button {
				width: 40px;
				height: 40px;
				border-width: 1px;
				border-color: #000;
				border-radius: 5px;
				background-color: #fff;
				display: inline-block;
				position: relative;
			}

			button.close-button::after {
				content: "";
				width: 30px;
				height: 6px;
				background-color: #000;
				position: absolute;
				left: 0;
				top: 0;
				transform: translate(4px, 12px) rotate(0);
				transition: 150ms;
			}

			button.close-button::before {
				content: "";
				width: 30px;
				height: 6px;
				background-color: #000;
				position: absolute;
				left: 0;
				top: 0;
				transform: translate(4px, 22px) rotate(0);
				transition: 150ms;
			}

			button.close-button:hover::after {
				transform: translate(4px, 17px) rotate(45deg);
			}

			button.close-button:hover::before {
				transform: translate(4px, 17px) rotate(-45deg);
			}

			button.close-button:active {
				background-color: #000;
			}

			button.close-button:active::after {
				background-color: #fff;
			}

			button.close-button:active::before {
				background-color: #fff;
			}


			/* Switch */

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



			/* Radio */

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

	</head>
	<body>

		<div class="box"></div>

		<!-- 40px 40px -->
		<button class="close-button"></button>

		<button>Hello</button>


		<input type="checkbox" id="checky">
		<label class="switch" for="checky"></label>
		
		<div class="choice-container">

			<input type="radio" id="vans" name="choice">
			<label class="radio" for="vans">Vans</label>

			<input type="radio" id="converse" name="choice">
			<label class="radio" for="converse">Converse</label>

			<input type="radio" id="nike" name="choice">
			<label class="radio" for="nike">Nike</label>

		</div>

	</body>
</html>
```