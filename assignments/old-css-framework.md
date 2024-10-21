# CSS Framework

What is a CSS framework? A framework is a library of code that has opinion about how things should be done. Your CSS framework should supply basic styles and take an opinion about what looks good on the web and how styles should be applied. 

### Why this assignment?

You might work on a larger scale project in the future. In a larger project you migth not know what needs to be styled in advance. Instead you'll want to make some general styles that can be used by your team to style pages that they will be creating.

## Project requirements

You should create a new Repo that will host your CSS framework.

You will test your work against two sample files. The first file is the sample markup here: 

https://github.com/Make-School-Labs/css-framework-starter

Find a past project or other web page you can test your framework against. This can be any HTML page. Remove any styles this page previouly used. 

Think of a name for your CSS framework. Seriously, it needs a name, it's a product, no really it is and like any other product it needs a name. 

- Frmwrk
- Framwërk
- Ninja CSS
- Chonky CSS
- CSSS - Chonky Styles Solidly Served
- CSSSS - CSS Served with Solid Sagacious Style 
- CSSSSS - Colorful Simple Seamless and Safely Served Styles 

Seriously, your CSS framework needs a name. Make up a name. 

Name your CSS file after your framework. **The framework CSS should not be named: style.css!**

Copy your sample HTML files into the folder with your framework css repo and link them to your CSS files. 

Add some styles! 

What will your CSS framework look like? Your CSS framework will be a CSS file. Yep, it will be a single CSS file. 

You can build your CSS file from SASS, break this up inot several .scss files but it should compile to a single .css file. 

Anyone who wants to use your CSS framework should only have to download the .css file and link to it in head of their HTML document. 

### Styles covered

Start by styling type. Set a default font style for your framework. Follow these steps: 

- [x] Named your CSS framework
- [ ] Made a Repo
  - [ ] Copied Sample files into Repo
- [ ] Choose a font 
  - It's probably best to use a system font. See the notes in lesson 4. 
  - The big decision here is choose between a serif or sans-serif font family. 
- [ ] Set a default font style on thhe body element. 
  - Define your default font style by styling the body tag. 
  - Set the font-family
  - Set the font-size
  - Set the line-height
  - Set the fore ground color 
  - Set the background color
- [ ] Set a style for the headings h1-6
  - [ ] Set the sizes of each of these. 
  - [ ] Set other styles to get a look that you like. Consider these: 
    - margin-top and margin-bottom
    - color 
    - font-weight
    - letter-spacing
- [ ] Style other text elements 
  - [ ] strong
  - [ ] em
  - [ ] a
  - [ ] abbr
  - [ ] code (this might use a different font - probably a fixed width font)
- [ ] Controls - form elements
  - [ ] input[text], input[email], input[password]
  - [ ] button
  - [ ] input[checkbox], input[radio]

### Challenges

To advance your CSS skills you should be sure ti include the following: 

- You CSS framework uses CSS custom properties. 
  - Place these at the top of your main style sheet to allow for easy modification. Choose elements to use these variables so that we can make broad adjustments to the framework easily. 
  - Use local scope to allow for adjusting importstn individual elements like buttons. 
- Write your source code in Sass and compile your library from this. 
  - This allows for automating repeated code. CSS tends to be repetitive might as automate. 
- Use the ::before and ::after pseudo elements add things should exist but don't. This simplifies the use of your framework. 
  - Blockquotes could be use ::before and ::after to display quotation marks at the beginning and end. 
  - Buttons could add icons
  - Radio buttons and checkboxes could use this for custom appearance. 
- Add some motion to your framework. Use Transition and or Animation. 
  - Buttons are an easy place to make this happen. 

### Deliverable

A Github repo contianing your CSS framework. 

## Assessing the assignment

| Expectations | Does not meet              | Meets                 | Exceeds                          |
|:-------------|:---------------------------|:----------------------|:---------------------------------|
| Completion   | You have not styled all of the elemnts listed. | Everything listed above looks styled. | You have paid close attention to the properties styled and adjusted them to refine their appearance further. |
| Quality      | The style of the work doesn't look too much different from the default html styles. | You're work looks better than the default HTML styles. | People can't help but offer comments about how amazing and professional your work looks. |
| Comprehension | Can't explain the the styles that you have used. | You could explain the styles you've used. | You can explain the styles and provide deeper insight into the properties. |
| Work ethic   | few massive commits | Commits outline progress | Clearly show progression of the work |
| Code | You're code is sloppy and unformatted | You're code is well formatted and uses best coding prctices. | You've used CSS custom properties. |
