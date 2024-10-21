# Assignment 1 - CSS Zen Garden

Your goal for this assignment is to style the CSS Zen Garden page. 

The trick to this assignment is that you can not edit the HTML file. You must apply all of your styles using the existing HTML. 

## What will you learn?

The goal is not to make the most amazing looking page, though you can do that if you want. The real goal is to learn to apply styles to the elements on the page by using a wide range of selectors. 

Since you can't change the page to add new class or id names, or rearrange the markup to fit your ideas you will forced to find ways to implement your ideas using the CSS language alone. 

But why do that? The CSS language is powerful. To understand it you must use it in new ways. Doing this asssignment will force you to use a wider range of selectors and look for new ways to apply CSS properties. 

## Reuirements 

You will style the CSS Zen Garden page. You can not edit the HTML. 

### Strategies 

You may be thinking but I'm not a deigner how will I do this? Here are two strategies you can choose: 

1. Make the page read well and present it's information as best it can. Don't think about art or design, don't try and page look fancy, just worry about how well it reads. Imagine that CSS Zen garden is a product and you are trying to inform people about this product. 

Try borrowing ideas and styles from pages like these: 

- https://reactjs.org
- https://www.fedex.com/en-us/home.html
- https://github.com
- https://www.nytimes.com
- https://www.apple.com

None of these is very "arty" don't worry about it. Just make the information read well. Look at what the Zen Garden page says, read the text. Think about how it's organized. Then work with the goal of making those ideas easy to understand. 

2. You feel inspired and want to express your creative ideas. Go for it! Do whtever you like.

## Challenge!

You must use at least 10 different selector types! The goal of this lesson is to explore selectors. You can't change the markup of the Zen Garden HTML page, so you must get creative with selectors to style the various elements that are there! They do provide many class and id names but there is no challenge in using those, you need to learn and apply new selectors that you are not familiar with! 

## Challenges 

- You must use 10 different CSS selectors. For example: 
	1. `*` wild card selector 
	2. class name
	3. id name 
	4. `>` child selector
	5. ` ` descendent selector
	6. `:nth-child()` nth child 
	7. `[]` attribute selector
	8. `first-of-type` first of type 
	9. `last-of-type` last of type
	10. `:has()` has selector
- You must use CSS Grid
- You must use background-images
	- Note! You can use gradients as background images without the need for actual image files. For example try this: `body { background-image: linear-gradient(red, yellow); }`

## Resources

- [Style the CSS Zen Garden page](#style-the-zen-garden-page)
	- http://www.csszengarden.com
	- [CSS Zen Garden HTML Source](http://www.csszengarden.com/examples/index)
	- Follow Lesson 01 1-3 in this video playlist: https://www.youtube.com/playlist?list=PLoN_ejT35AEhF_M9vBuZgW0E4PiDb19oX

## What to style?

You should style everything! That's too much, where do I start? Look at the page and think about what is there. You should style each of these things. Here is a rough outline: 

- Page heading and title
- Major sections: 
	- The Road to Enlightenment
	- So what is this all about?
	- Participation
	- Benefits 
	- Requirements
	- Footer (this might be hard to spot try and find it)
	- Select a Design
	- Archives
	- Resources

Within each of the sections the content usually starts with a heading followed by one or more paragraphs. 

Some sections could use special consideration and be treated in different ways. 

### Page header and title section

The page header and title section has two headings followed by teo paragraphs. The second paragraph contains links to the HTML and CSS files.

### Footer

This doesn't really seem to be a footer but it's wrapped in the footer tag. It lists HTML, CSS, CC, A11y, and GH. These are links to things like the W3C validator. 

While these can be links they might benefit from being displayed as larger icons or buttons. 

### Select a design

This is a list of designs. Each list item contains the name of the design, and the name of the author separated by the word "by". 

This could benefit from giving the name and author different styles. Which is not easily done without carefully considering your selectors! 

### Archives 

Archives is aother list with two items "Next Designs >" and "View all Designs". 

Again, this might benefit from being styled as a button or using an icon. 

## Styling Strategies

Start large and work into the details. 

It is very important to understand the structure of the Zen Garden page from both the content and the DOM. Read the page and identify sections and subsections. 

Read the source code in the HTML document and identify parents, children, ancestors, and descendents. 

- Pick a font for the entire page
- Think about line height
	- Advanced: Remove margins and set the margins yourself!
- Choose a font and size for the headings
- Pick a forground and background color
- Style the links
	- Think about the color and text decoration

## Rubric 

Assess your work

| Expectations | Does not meet              | Meets                 | Exceeds                          |
|:-------------|:---------------------------|:----------------------|:---------------------------------|
| Completion   | Your Zen Garden Page only some of these styles: font-family, font-size, font-weight, color, line-height | Your Zen Garden page styles all of these properties: font-family, font-size, font-weight, color, line-height | You have carefully consoidered your styles, gotten feedback and acted on that feedback improving your work through iteration |
| Quality      | Your typography does not help convey the message of the page content. | Your typography creates a hierarchy that helps convey the message of the page. | Your styles leads us visually through the content of the page enhacning the message. |
| Comprehension| You're not sure what the style properties you use are doing and would have a hard time making changes. | You can expalain the styles you used to someone else. | You feel you could apply the concepts here to future projects. |
| CSS Selectors | You modified the Zen Garden Markup | You used at least 10 different selectors in your work. | You can think mulitple selectors that could be used to select any element of the Zen Garden Page. |
| CSS Grid | Your Zen Garden Page does not use CSS Grid | Your Zen Garden page uses CSS Grid | You have used grid and can explain how your grid works and could easily modify it. |
| CSS Grid Quality | Your Grid is overly siple or does not work | Your grid system organizes the content on the page into logical easy to read areas. | Your grid imparts a sublime underlying structure enhancing the design of the page. |
| Background images | Your Zen Garden page does not use background images | Your page uses background images. | Your background images enhance the design of the page. |