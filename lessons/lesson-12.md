# FEW 2.2 - Advanced CSS - CSS Preprocessors

Preprocessors intro

<!-- ## Review

```HTML
<div class="product">
	<div class="price">9</div>
</div>
```

Given the markup above make it look like the picture below using only CSS! 

![challenge 12](images/class-12-challenge.png)

Hints: 

- The box is `100px` by `100px`
- The circle is `30px` by `30px`;
- Use `relative` and `absolute` position to position the circle
- Use `::before` to add the `$` -->

## What are preprocessors?

A preprocessor processes code *before* it is used. A CSS preprocessor processes your CSS before it's used by the browser. 

How does the preprocessor work? You write code in a language that is *similar to* standard CSS. The preprocessor reads this code and outputs standard CSS. 

The language we will use in these lessons is SASS. You'll also use sass in the terminal to process your SASS code into CSS. 

Read more about SASS from the source: https://sass-lang.com

There are several CSS preprocessors; the two most popular are LESS and SASS. 

NOTE! SASS has two versions SASS and SCSS. These are similar and compiled the same. 
- SASS uses a syntax closer to Python where the indentation matters. 
- SCSS uses a syntax that is closer to regular CSS. 
We are going to use SCSS for these lessons. 

Any CSS code you write is compatible with SCSS. Using SCSS you can write the regular CSS that you already know and use the extra features of SASS covered below. 

## Why Learn SASS

All large production apps process code for a variety of reasons. Expect to see SASS in any production environment. 

You may also like the features that SASS offers and want to use them in your work to boost your productivity! 

## Video Lesson

You can follow this lesson in Video here: 

https://www.youtube.com/playlist?list=PLoN_ejT35AEhF_M9vBuZgW0E4PiDb19oX

Follow: lesson 12 for the SASS discussion. You can catch up with a review of animation by following lesson 11. 

## SASS Intro

You can use desktop and commandline apps to process your SASS code:

[Koala](http://koala-app.com) is a free desktop app for processing SASS. 

In this lesson you'll use the SASS command line tool. 

You can follow the instructions here: https://sass-lang.com/install

tl;dr 

```
npm install -g sass
```

### Try out SASS

SASS is a language that contains the CSS language. Any valid CSS code can be written in SASS. SASS adds new features that are not available in the CSS language! 

Create a new folder where you can work.

Open a terminal window and navigate to this folder. 

Create a new file: `styles.scss`

The `.scss` file extension is used for SASS files! 

**Note! You can not load `.scss` into a browser! This file must be processed and output to a `.css` file first!**

Add some code to `styles.css`:

```SCSS
body {
	font-size: 18px;
	font-family: Helvetica;
	color: #333;
	background-color: #eee;
}
```

Run the SASS processor. In the terminal: 

```
sass --watch styles.scss styles.css
```

This command says: run `sass`, watch `styles.scss` for changes, when there is a change process and output to file: `styles.css`. 

It should automatically create two new files: `styles.css` and `styles.css.map`. The first is your CSS file. You can ignore the second file it is used for debugging. 

Looking at `styles.css` you'll see it's almost identical to `styles.scss`. That's because the code in `styles.scss` needed no processing to create valid CSS code. 

So what does SASS do for us? SASS adds features not available to standard CSS. 

We will cover some of the features of SASS in this lesson you can look at the SASS documentation for a full list of everything in the language: https://sass-lang.com/documentation

### Syntax

SASS is a language that compiles to vanilla CSS. It uses the same syntax as the CSS language. This means anything that works in normal CSS is okay in SASS. 

### SASS Features

SASS adds some new rules. 
Read about the nesting rules here: https://sass-lang.com/documentation/style-rules

Properties can be declared using operators allowing SASS to perform typical math operations on expressions: https://sass-lang.com/documentation/style-rules/declarations

In SASS you can define variables. This helps keep your code DRY. 

SASS variables are NOT the same as CSS custom properties! https://sass-lang.com/documentation/variables

SASS also supports flow control. These are features you find in other languages such as conditional logic, and loops. SASS also supports expressions. 

## After Class

Assignment 1: 

Follow the videos here for lessons 11 and 12. Complete the example created there, it looks like an animated flower. Solve the SASS problems. Feel free to apply your own ideas to this exercise, Submit it to GradeScope.  

## Additional Resources

- https://sass-lang.com/guide
- https://sass-lang.com/documentation
	- https://sass-lang.com/documentation/variables
	- https://sass-lang.com/documentation/operators
	- https://sass-lang.com/documentation/at-rules
	- https://sass-lang.com/documentation/style-rules


<!-- ## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:15      | Overview                  |
| 0:20        | 0:45      | In Class Activity I       |
| 1:05        | 0:10      | BREAK                     |
| 1:15        | 0:45      | In Class Activity II      |
| TOTAL       | 2:00      |                           | -->
