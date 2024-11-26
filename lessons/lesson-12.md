Here’s an improved version of your introduction:
# FEW 2.2 - Advanced CSS: CSS Preprocessors

## What Are CSS Preprocessors?
A **preprocessor** is a tool that processes code *before* it is used. In the case of CSS preprocessors, they process your stylesheets before the browser renders them. This allows you to write more dynamic, maintainable, and reusable code, saving time and reducing repetitive tasks.

Imagine needing to write a series of repetitive class definitions. A CSS preprocessor can simplify this process by enabling features like loops, variables, and mixins, making your stylesheets both more powerful and efficient.

### How Do CSS Preprocessors Work?
You write your styles in a language that looks similar to CSS but includes additional features like variables, nesting, and functions. The preprocessor then compiles this code into standard CSS that browsers understand.

### Popular CSS Preprocessors
While there are several CSS preprocessors, the two most widely used are **LESS** and **SASS**. In this lesson, we’ll focus on **SASS**, a robust and feature-rich preprocessor. 

You can learn more about SASS from the official site: [sass-lang.com](https://sass-lang.com).

### SASS vs. SCSS: Which Syntax Are We Using?
SASS offers two syntaxes:
- **SASS**: Uses a clean, minimal syntax where indentation is significant (similar to Python).
- **SCSS**: Uses a syntax similar to standard CSS, with curly braces and semicolons.

In this course, we’ll use **SCSS** because it aligns closely with the CSS you already know, making it easier to adopt while still gaining access to the powerful features of SASS.

### Why SCSS?
The beauty of SCSS is that it’s fully compatible with regular CSS. You can write plain CSS in an SCSS file and add advanced SASS features as needed. This means you can transition smoothly from standard CSS to SCSS without completely overhauling your current workflow.

## Video Lesson

Follow this lesson in video format here:  
[**CSS Preprocessors and SASS Video Series**](https://www.youtube.com/playlist?list=PLoN_ejT35AEhF_M9vBuZgW0E4PiDb19oX)

## Getting Started with SASS
### Processing SASS Code
You can process your SASS code using either desktop applications or command-line tools:

1. **Desktop App**:  
   [**Koala**](http://koala-app.com) is a free, beginner-friendly desktop app for compiling SASS into CSS. It’s a great option if you prefer a graphical interface.

2. **Command-Line Tool**:  
   In this lesson, we’ll focus on using the SASS command-line tool, which provides flexibility and integrates easily into development workflows.

### Installing SASS
You can follow the official installation guide here: [SASS Installation Guide](https://sass-lang.com/install)

#### **Quick Install (via npm)**
If you have Node.js installed, you can quickly install SASS globally by running the following command:

```bash
npm install -g sass
```

Once installed, you can start compiling your SASS files into CSS with ease. Detailed usage instructions will follow in the lesson.

### Using SASS

SASS is a superset of CSS, meaning it fully supports all CSS code while adding powerful new features to streamline your workflow and enhance your stylesheets. This allows you to write valid CSS in a SASS file, while also taking advantage of additional tools like variables, nesting, and mixins.

### Setting Up Your SASS Project
1. **Create a Workspace**:  
   Start by creating a new folder where you’ll store your SASS files.

2. **Navigate to the Folder**:  
   Open a terminal and navigate to your project folder.

3. **Create a SASS File**:  
   Create a new file in the folder and name it `styles.scss`.  
   The `.scss` file extension indicates this file contains SCSS code.

### Important Note
Browsers **do not understand `.scss` files** directly. To use them on a webpage, you must first compile `.scss` files into `.css` files.

### Writing Your First SASS File
Add the following code to `styles.scss`:

```scss
body {
	// sass allows this style of comment!
  font-size: 18px;
  font-family: Helvetica, Arial, sans-serif;
  color: #333;
  background-color: #eee;
}
```

This code is valid CSS, so it doesn't use any special SASS features yet, but it should compile to vanilla CSS. 

### Compiling SASS to CSS

Run the SASS processor by typing the following command in your terminal:

```bash
sass --watch styles.scss styles.css
```

Here’s what this command does:
- **`sass`**: Executes the SASS compiler.
- **`--watch`**: Monitors the `styles.scss` file for changes.
- **`styles.scss`**: Specifies the input file.
- **`styles.css`**: Specifies the output file.

### What Happens Next?

After running the command:
1. **SASS generates two files** in your folder:
   - `styles.css`: The compiled CSS file you can use in your project.
   - `styles.css.map`: A file used for debugging. You can ignore this for now.

2. Open `styles.css`. You’ll notice it looks almost identical to your original `styles.scss` file. Why? Because your current code doesn't use any special SASS features—it simply compiles valid CSS.

### Why Use SASS?
The real power of SASS lies in the extra features it brings to the table, such as:
- **Variables**: Store reusable values like colors or font sizes.
- **Nesting**: Write CSS rules in a structured and logical hierarchy.
- **Partials and Imports**: Modularize your stylesheets.
- **Mixins**: Create reusable code snippets.
- **Functions**: Perform calculations or generate dynamic styles.

### Learn More
We’ll cover some of these features in this lesson. For a complete reference, explore the official [SASS Documentation](https://sass-lang.com/documentation).

### 1. Getting Started
In this section, you will set up the HTML file and connect it to a SASS-generated CSS file. This will serve as the foundation for the rest of the project.

### Example: Setting Up the Project
1. **Create the Folder Structure**:
   - Create a project folder named `sass-profile-showcase`.
   - Inside this folder, create the following:
     - `index.html`
     - `scss/` (a folder for your SASS files)
     - `css/` (a folder for your compiled CSS files)

2. **Write the HTML File**:
   Add the following starter content to `index.html`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Profile Card Showcase</title>
     <link rel="stylesheet" href="css/styles.css">
   </head>
   <body>
     <header class="hero">
       <h1>Welcome to the Profile Card Showcase</h1>
       <p>Create stunning designs using SASS!</p>
     </header>

     <main class="profile-grid">
       <article class="profile-card">
         <img src="https://via.placeholder.com/150" alt="Profile Picture">
         <h2>John Doe</h2>
         <p>Web Developer</p>
         <button class="btn">Contact</button>
       </article>
     </main>
   </body>
   </html>
   ```

   > **Note:** This file includes a header (`hero` section) and a placeholder for the profile cards you’ll design in upcoming challenges.

3. **Set Up SASS**:
   - Open a terminal in your project folder.
   - Navigate to the `scss/` folder:  
     ```bash
     cd scss
     ```
   - Create a new file named `styles.scss`:  
     ```bash
     touch styles.scss
     ```

4. **Link SASS to CSS**:
   - Compile `styles.scss` into `css/styles.css` using the `sass` command:
     ```bash
     sass --watch scss/styles.scss css/styles.css
     ```
   - This command will:
     - Watch for changes in `styles.scss`.
     - Output the compiled CSS to `css/styles.css`.

5. **Add Base Styles**:
   Add this starter code to `scss/styles.scss`:

   ```scss
   body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #f9f9f9;
     color: #333;
   }

   .hero {
     text-align: center;
     padding: 2rem;
     background-color: #3498db;
     color: white;
   }
   ```

6. **Test Your Setup**:
   - Save your files and open the webpage in your browser.
   - You should see the header styled with a blue background and white text.

---

### Challenge: Create a Second Profile Card
Now it’s your turn! Add a second profile card to your `index.html` file and ensure it appears below the first one.

#### Steps:
1. Add the following HTML inside the `profile-grid` `<main>`:
   ```html
   <article class="profile-card">
     <img src="https://via.placeholder.com/150" alt="Profile Picture">
     <h2>Jane Smith</h2>
     <p>UI/UX Designer</p>
     <button class="btn">Contact</button>
   </article>
   ```
2. Add some base styles for `.profile-card` in `scss/styles.scss`:
   - Set the background to white.
   - Add padding and a shadow.
   - Center-align the content.

#### Hint:
Here’s an example of what a `profile-card` could look like:
```scss
.profile-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 1rem;
}
```

--- 

### 2. Variables*

In this section, you will learn how to use SASS variables to make your stylesheets easier to manage and more consistent. Variables allow you to store reusable values like colors, fonts, and spacing, making it easy to update your design in one place.

---

### Example: Using SASS Variables

1. **Define Variables**:  
   Open your `scss/styles.scss` file and define variables for colors, fonts, and spacing at the top of the file:

   ```scss
   // Variables
	 // sass var names always begin with a $
	 // almost anything can be a value
   $primary-color: #3498db;
   $secondary-color: #2ecc71;
   $bg-color: #f9f9f9;
   $text-color: #333;
   $font-stack: Arial, sans-serif;
   $spacing: 16px;
   ```

	 Unlike CSS custom properties, sass vars CAN be defined outside of other rules.

2. **Use Variables**:  
   Replace hardcoded values in your styles with these variables. Update the existing styles for `body` and `.hero`:

   ```scss
   body {
		 // use a var by placing it anywhere you want to insert the value
     font-family: $font-stack;
     margin: 0;
     padding: 0;
     background-color: $bg-color;
     color: $text-color;
   }

   .hero {
     text-align: center;
		 // sass allows standard math operators, in most locations
     padding: $spacing * 2;
     background-color: $primary-color;
     color: white;
   }
   ```

3. **Test Your Changes**:  
   Save the file, let the SASS compiler update your CSS, and refresh your browser. Your webpage should look the same, but now it’s easier to manage and update the design by simply changing variable values.

---

### Challenge: Add Variables to the Profile Card

Now, it's your turn to practice using variables. Apply the same approach to the `.profile-card` styles by replacing hardcoded values with variables.

#### Steps:
1. Update your `.profile-card` styles to use:
   - `$bg-color` for the card background.
   - `$spacing` for padding and margins.
   - `$text-color` for the card text.

2. Add a new variable called `$card-shadow` for the box shadow and update the `.profile-card` styles to use it.

#### Hint:
Here’s an example of what your updated `.profile-card` might look like:
```scss
$card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

.profile-card {
  background-color: $bg-color;
  padding: $spacing;
  border-radius: 8px;
  box-shadow: $card-shadow;
  text-align: center;
  margin: $spacing;
  color: $text-color;
}
```

3. Save your changes and check the results in your browser.

---

### Stretch Challenge: Add New Variables

1. Define a variable for `$secondary-text-color` (e.g., a lighter gray) and use it for the `<p>` text inside `.profile-card`.
2. Create a variable for `$button-bg` and apply it to your `.btn` styles. Add hover behavior to slightly darken the button color.

--- 

### 3. Nesting

In this section, you will learn how to use SASS nesting to write cleaner and more structured styles. Nesting allows you to write styles in a way that mirrors the hierarchy of your HTML, making your code easier to read and maintain.

---

### Example: Nesting Styles
1. **Refactor Your Styles with Nesting**:  
	Open your `scss/styles.scss` file. Find the styles for `.profile-card` and rewrite them to use nesting for its child elements.

	```scss
	.profile-card {
		background-color: $bg-color;
		padding: $spacing;
		border-radius: 8px;
		box-shadow: $card-shadow;
		text-align: center;
		margin: $spacing;

		img {
			border-radius: 50%;
			// sass vars allow math operators!
			margin-bottom: $spacing / 2;
		}

		h2 {
			font-size: 1.25rem;
			margin: $spacing / 2 0;
		}

		p {
			color: $text-color;
			margin-bottom: $spacing;
		}

		.btn {
			background-color: $primary-color;
			color: white;
			padding: $spacing / 2 $spacing;
			border: none;
			border-radius: 4px;
			cursor: pointer;

			&:hover {
				// the darken function darkens a color
				background-color: darken($primary-color, 10%);
			}
		}
	}
	```
	The `darken()` function darkens a color. Sass has a lot of built in functions. Check them out here: https://sass-lang.com/documentation/modules/

2. **Test Your Changes**:  
	Save the file and let the SASS compiler update your CSS. Refresh your browser and ensure the `.profile-card` and its child elements are styled as expected.

---

### Challenge: Add Nesting to the Hero Section

Now, it's your turn to practice nesting. Refactor the `.hero` styles to use nesting for its child elements.

#### Steps:
1. Add styles for the `<h1>` and `<p>` inside `.hero`:
	- Set a larger font size for the `<h1>` and add some margin.
	- Add a smaller font size and lighter text color for the `<p>`.

2. Use the `&` operator to add a hover effect to the `.hero` background color when the user hovers over the entire section.

#### Hint:
Here’s an example of what your nested `.hero` styles might look like:
```scss
.hero {
  text-align: center;
  padding: $spacing * 2;
  background-color: $primary-color;
  color: white;

  h1 {
    font-size: 2.5rem;
    margin-bottom: $spacing / 2;
  }

  p {
    font-size: 1.25rem;
		// sass has many functions that don't exist in css
    color: lighten($text-color, 70%);
  }

  &:hover {
    background-color: darken($primary-color, 5%);
  }
}
```

---

### Stretch Challenge: Add Hover Effects to Profile Cards

1. Use the `&` operator to add a hover effect to `.profile-card`:
   - Slightly scale the card on hover using `transform: scale()`.
   - Add a smooth transition for the scale effect.

#### **Hint**:
```scss
.profile-card {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}
```

---

### 4. Partials and Imports

In this section, you will learn how to organize your styles into smaller, reusable pieces using SASS partials and imports. This approach helps keep your styles modular and easier to maintain, especially as your project grows.

---

### Example: Splitting Styles into Partials

1. **Create Partials**:  
	A partial is a SASS file that starts with an underscore (`_`) in its name. These files won’t compile into separate CSS files—they are meant to be imported into other SASS files.

	- Inside the `scss/` folder, create the following files:
		- `_variables.scss`: For storing variables.
		- `_reset.scss`: For a CSS reset.
		- `_components.scss`: For reusable component styles like `.btn`.
		- `_layout.scss`: For layout-specific styles like `.hero` and `.profile-grid`.

2. **Move Styles into Partials**:
	- Open `_variables.scss` and move all your variable definitions there:
		```scss
		// _variables.scss
		$primary-color: #3498db;
		$secondary-color: #2ecc71;
		$bg-color: #f9f9f9;
		$text-color: #333;
		$font-stack: 'Arial, sans-serif';
		$spacing: 16px;
		$card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		```

   - Open `_reset.scss` and add a basic CSS reset:
		```scss
		// _reset.scss
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		```

   - Open `_components.scss` and move your `.btn` styles there, remove these styles from `styles.scss`:
		```scss
		// _components.scss
		.btn {
			background-color: $primary-color;
			color: white;
			padding: $spacing / 2 $spacing;
			border: none;
			border-radius: 4px;
			cursor: pointer;

			&:hover {
				background-color: darken($primary-color, 10%);
			}
		}
		```

	- Open `_layout.scss` and move your `.hero` and `.profile-card` styles there:
		```scss
		// _layout.scss
		.hero {
			text-align: center;
			padding: $spacing * 2;
			background-color: $primary-color;
			color: white;

			h1 {
				font-size: 2.5rem;
				margin-bottom: $spacing / 2;
			}

			p {
				font-size: 1.25rem;
				color: lighten($text-color, 70%);
			}

			&:hover {
				background-color: darken($primary-color, 5%);
			}
		}

		.profile-card {
			background-color: $bg-color;
			padding: $spacing;
			border-radius: 8px;
			box-shadow: $card-shadow;
			text-align: center;
			margin: $spacing;

			img {
				border-radius: 50%;
				margin-bottom: $spacing / 2;
			}

			h2 {
				font-size: 1.25rem;
				margin: $spacing / 2 0;
			}

			p {
				color: $text-color;
				margin-bottom: $spacing;
			}

			&:hover {
				transform: scale(1.05);
				transition: transform 0.3s ease;
			}
		}
		```

3. **Import Partials into `styles.scss`**:
	Replace the content of `styles.scss` with the following:
	```scss
	// Import partials
	@import 'variables';
	@import 'reset';
	@import 'components';
	@import 'layout';
	```

4. **Test Your Changes**:  
	Save all the files and refresh your browser. The webpage should look the same, but now your styles are modular and easier to work with.

---

### Challenge: Add a New Partial for Colors

1. Create a new partial named `_colors.scss` and move all color-related variables into it:
   ```scss
   // _colors.scss
   $primary-color: #3498db;
   $secondary-color: #2ecc71;
   $bg-color: #f9f9f9;
   $text-color: #333;
   ```

2. Update `styles.scss` to import `_colors.scss` before `_variables.scss`:
   ```scss
   @import 'colors';
   @import 'variables';
   @import 'reset';
   @import 'components';
   @import 'layout';
   ```

3. Save your changes and verify everything still works in your browser.

---

### Stretch Challenge: Add a New Component

1. Add a new component partial called `_footer.scss` and create styles for a footer section.
2. Update `index.html` to include the footer:
   ```html
   <footer class="footer">
     <p>© 2024 Profile Showcase. Built with SASS.</p>
   </footer>
   ```
3. Import `_footer.scss` into `styles.scss`.

---

### **5. Mixins**

In this section, you will learn how to use SASS mixins to create reusable blocks of CSS. Mixins are especially helpful for styles that need to be applied in multiple places, such as buttons, shadows, or responsive layouts.

---

### Example: Creating and Using a Mixin

1. **Define a Mixin**:  
   Open `_components.scss` (or create it if you haven't already). Add the following mixin for reusable button styles:

   ```scss
   // _components.scss
   @mixin button($bg-color, $text-color) {
     background-color: $bg-color;
     color: $text-color;
     padding: $spacing / 2 $spacing;
     border: none;
     border-radius: 4px;
     cursor: pointer;

     &:hover {
       background-color: darken($bg-color, 10%);
     }
   }
   ```

2. **Use the Mixin**:  
   Update your `.btn` styles to use the mixin:
   ```scss
   .btn {
     @include button($primary-color, white);
   }
   ```
	 
	 Be sure to define the `@mixin` *above* the `.btn` definition. 

	 Notice that you removed all of the properties that are provided by the mixin!

3. **Add a New Button Style**:  
   Use the mixin to create a secondary button with a different color scheme:
   ```scss
   .btn-secondary {
     @include button($secondary-color, white);
   }
   ```

4. **Update the HTML**:  
   Add a secondary button to one of your profile cards in `index.html`:
   ```html
   <button class="btn btn-secondary">Message</button>
   ```

	 The styles for this new button are created by the mixin with little work by you! 

5. **Test Your Changes**:  
   Save the files, refresh your browser, and check the updated button styles.

---

### Challenge: Create a Mixin for Shadows

1. Add a mixin for box shadows in `_components.scss`:
   ```scss
   @mixin box-shadow($shadow-color, $opacity) {
     box-shadow: 0 4px 6px rgba($shadow-color, $opacity);
   }
   ```

2. Update the `.profile-card` styles to use the `box-shadow` mixin:
   ```scss
   .profile-card {
     @include box-shadow(#000, 0.5); // Replace your hardcoded shadow
   }
   ```

3. Apply a stronger shadow to the `.hero` section using the mixin:
   ```scss
   .hero {
     @include box-shadow(#000, 0.5);
   }
   ```

4. Save your changes and verify the shadows in your browser.

---

### Stretch Challenge: Add a Responsive Mixin

1. Create a mixin in `_layout.scss` for media queries to make layouts responsive:
   ```scss
   @mixin responsive($breakpoint) {
     @if $breakpoint == small {
       @media (max-width: 600px) {
         @content;
       }
     } @else if $breakpoint == medium {
       @media (max-width: 1024px) {
         @content;
       }
     }
   }
   ```

2. Use the mixin to make the `.profile-grid` responsive:
   ```scss
   .profile-grid {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: $spacing;

     @include responsive(small) {
       grid-template-columns: 1fr;
     }
   }
   ```

3. Save your changes and test the responsiveness by resizing your browser.

---

### Final Thoughts on Mixins

Mixins allow you to avoid repetition and keep your styles DRY (Don't Repeat Yourself). 
By completing this section, you've added reusable styles for buttons, shadows, and 
responsiveness, making your webpage more flexible and easier to maintain.

### SASS Mixins: Description and Use Cases

#### What Are Mixins?
In SASS, mixins are reusable blocks of code that allow you to write CSS styles that can 
be included in multiple places with customizable parameters. They are particularly useful 
for avoiding repetition and maintaining consistency across your stylesheets.

---

### How Are Mixins Different from Functions?

| Feature                | Mixins                                          | Functions                                      |
|------------------------|------------------------------------------------|-----------------------------------------------|
| **Purpose**            | Output reusable CSS rules/styles.              | Perform a calculation or return a single value. |
| **Output**             | Generates CSS code directly in the stylesheet. | Returns a value (e.g., a color, size, or number) that can be used in styles. |
| **Includes CSS Rules** | Yes, mixins can output multiple CSS rules.      | No, functions cannot directly generate CSS rules. |
| **Use Case**           | Use when you need reusable CSS blocks or complex rules. | Use when you need a computed value (e.g., color adjustments, math). |

---

### When to Use Mixins
Mixins are ideal for styles that are:
- **Reusable**: You have the same set of styles applied in multiple places (e.g., button designs).
- **Customizable**: You want to apply similar styles but with slight variations (e.g., button colors).
- **Dynamic**: You want to generate CSS that depends on specific parameters (e.g., 
responsive designs or custom box shadows).

---

### Typical Use Cases for Mixins

1. **Reusable Component Styles**
   - Example: Buttons
   ```scss
   @mixin button($bg-color, $text-color) {
     background-color: $bg-color;
     color: $text-color;
     padding: 10px 20px;
     border-radius: 4px;
     border: none;
     cursor: pointer;

     &:hover {
       background-color: lighten($bg-color, 10%);
     }
   }

   .primary-btn {
     @include button(#3498db, white);
   }

   .secondary-btn {
     @include button(#2ecc71, white);
   }
   ```

2. **Media Queries for Responsiveness**
   - Example: Creating a mixin to handle breakpoints
   ```scss
   @mixin responsive($breakpoint) {
     @if $breakpoint == small {
       @media (max-width: 600px) {
         @content;
       }
     } @else if $breakpoint == medium {
       @media (max-width: 1024px) {
         @content;
       }
     }
   }

   .profile-grid {
     display: grid;
     grid-template-columns: repeat(3, 1fr);

     @include responsive(small) {
       grid-template-columns: 1fr;
     }
   }
   ```

3. **Adding Vendor Prefixes**
   - Example: Ensuring cross-browser compatibility
   ```scss
   @mixin transform($value) {
     -webkit-transform: $value;
     -ms-transform: $value;
     transform: $value;
   }

   .rotated {
     @include transform(rotate(45deg));
   }
   ```

4. **Theming and Customization**
   - Example: Dynamic border radius and box shadow
   ```scss
   @mixin theme-card($radius, $shadow-color) {
     border-radius: $radius;
     box-shadow: 0 4px 6px $shadow-color;
   }

   .card {
     @include theme-card(10px, rgba(0, 0, 0, 0.2));
   }
   ```

---

### When to Use Functions Instead
- **Perform Calculations**: When you need to calculate values (e.g., converting `px` to `rem` or adjusting colors).
- Example:
  ```scss
  @function calculate-rem($px) {
    @return $px / 16px * 1rem;
  }

  body {
    font-size: calculate-rem(18px);
  }
  ```

- **Manipulate Colors**: When you want to dynamically adjust colors.
- Example:
  ```scss
  @function adjust-color($color, $amount) {
    @return lighten($color, $amount);
  }

  h1 {
    color: adjust-color(#3498db, 20%);
  }
  ```

---

### Key Takeaway
Use mixins for **generating reusable blocks of CSS**, and functions for 
**returning single values** like calculated numbers, colors, or measurements. 
Together, they make SASS a powerful tool for creating dynamic and maintainable styles.

## Follow up: Apply SASS to your CSS Framework
Use the idea above, especially partials in your CSS Framework. This will allow you 
to divide your style sheet into separate managable files, which will be compiled 
into a single stylesheet for publication. 

Mixins, and some of the other features of SASS might also be useful. Look for 
opportunities to use these features as you work. 

SASS has many more features not covered here. For example lists and loops. 

Here is an example that creates a list of colors in tints and shades as CSS custom properties. 

```SCSS

$colors: (
	'gray': rgb(128, 128, 128),	
	'primary': #007bff,
	'info': #17a2b8,
	'success': #28a745,
	'danger': #dc3545,
	'callout': #ffa107,
	'secondary': #ffcd07,
	'other': #ca5ae1,
	'alternate': #a45ae1
);

:root {
	@each $key, $value in $colors {
		/* Tints */
		@for $i from 4 through 1 {
			--color-#{$key}-lighter-#{$i}: #{lighten($value, 12% * $i)};
		}

		--color-#{$key}: #{$value};

		/* Shades */
		@for $i from 1 through 4 {
			--color-#{$key}-darker-#{$i}: #{darken($value, 10% * $i)};
		}
	}

	/* **** base Color names **** */
  --color-background: var(--color-gray-lighter-4);
  --color-foreground: var(--color-gray-darker-4);
  --color-dark: var(--color-gray-darker-2);
  --color-light: var(--color-gray-lighter-2);

  --color-md-light: var(--color-gray);
  --color-md-dark: var(--color-gray-darker-1);

	--color-lightest: var(--color-gray-lighter-4);
}
```

Points of interest in this code snippet. 
- The variables at the top are defined in SASS, these don't exist after this file is processed. 
- The SASS vars at the top are in a list `$colors: ( .... )`
- `@each $key, $value in $colors { ... }` loops over each item in the list as key and value. 
- `@for $i from 4 through 1 { ... }` repeats with a count from 4 to 1.
- You can write custom properties and concatenate theit names using `#{}`. For example: `--color-#{$key}-lighter-#{$i}` creates a customproperty with a name like `--color-gray-lighter-1`
- `lighten($value, 12% * $i)` is a SASS function that takes in a color and a % and returns a color that % lighter. 
  - Note! SASS recommends using `color.scale()` instead of `lighten()` as the changes are more "proportional"
  - Challenge! change the code above to work with `scale()` https://sass-lang.com/documentation/modules/color/#scale
  

