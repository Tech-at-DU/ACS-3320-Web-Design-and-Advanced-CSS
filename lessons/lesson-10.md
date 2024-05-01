# FEW 2.2 - Advanced CSS - Animation

Making things move.

## Why you should know this

Engagment is important. Things that move are much more interesting. Adding motion adds another dimension to your content. All of your favorite apps probably have little bits of animation.

## Learning Objectives

1. Use `transition`
2. Create interactive animations
3. Use the `:hover` pseudo class
4. Define CSS Custom Properties
5. Use CSS Custom Properties

<!-- ## Slides

https://docs.google.com/presentation/d/1SAP_Xz5_25VRa41kBmzncHtekSXodDt2WGRSjcy7FZI/edit?usp=sharing -->

## Identify some Examples of motion

Look for motion in apps and website that you use. 

Pair and share these with your partner. 

## Initial Exercise

Animation is everywhere on the computer. Even your code editor has some animation. Small animations can be informative and engaging. 

When you see motion on the computer what is happening? Most often that motion is connected to the properties that set the position, scale, rotation, and opacity. 

Explore some CSS animations and identify what properties are being animated.

1. https://codepen.io/FabioG/full/QjLreK
2. https://codepen.io/dsenneff/pen/2d338b0adf97472ebc5d473cf1fa910b
3. https://codepen.io/donovanh/full/pvMeeB
4. https://codepen.io/yoannhel/full/sJpDj
5. https://codepen.io/Manoz/full/pydxK
6. https://codepen.io/Venerons/full/BvHbK
7. https://codepen.io/MarioDesigns/full/woJgeo
8. https://codepen.io/u1tralord/full/pvXwza
9. https://codepen.io/Zaku/full/YjRqzB
10. https://codepen.io/pcameron/pen/rVmera
11. https://codepen.io/valhead/full/rfump
12. https://codepen.io/stefcharle/full/Gydvbx
13. https://codepen.io/nathantaylor/full/PJGqdE
14. https://codepen.io/oliviale/full/jxPgKv
15. https://codepen.io/antho-fsy/pen/wJqWKj

What is happening in these animations? Don't worry about the technical details just _identify which properties are changing_.

## Video lessons 

- https://www.youtube.com/playlist?list=PLoN_ejT35AEg-xKnTgIjE5VU-3IHO2N6i

## Making things move

There are a couple of ways to make things move with CSS. 

- `transition`
- `@keyframe` and `animation`

In a nutshell animation is the changing of property values over time. 

In a nutshell `transition` causes changes to CSS properties to change over time instead of changing instantly, `@keyframe` defines changes that are mapped out over time. Transition animates a change to a property, keyframes map out changes that are then applied to properties. 

## Transition

```CSS
.box {
  width: 100px;
  height: 100px;
  background-color: #f00;
  /* Sets the time to apply changes to this element */
  transition: 400ms;
  /* s = secs ms = milliseconds */
}

.box:hover {
  /* These changes occur over the transition time set above */
  transform: scale(1.25) rotate(12deg);
}
```

The base rule declares a transition of 400 milliseconds. The hover rule changes the scale and rotation. Rather than happening immediately, the change takes 400 milliseconds.

With `transistion` you set the time it should take properties to change. When a rule changes the value of properties this properties change over the set length of the time. 

In this example above, when the hover is in effect scale and rotation change and that change takes 400ms. Whrn the hover effect is removed the values change back to their original values and the transition takes 400ms. 

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

The `transition` property sllows you to set the which properties are transitioned and the time for each. If you don't include this information the time applies to all properties. 

### Ttransition properties

- transition-delay - wait before transition begins
- transition-duration - length of transition
- transition-property - which properties to animate
- transition-timing-function - mathematical function applied to the motion

### What can you animate?

Just about anything. Any property that has a numeric value is a good candisate. Properties that have values like "flex", "grid", "helvetica" don't animate well since they can only step from one value to another with no inbetween state. 

## Easing - Timing Function

Easing describes the change in the rate of motion. When things speed up, think of a car starting from a stop sign, we say they are easing in. When things slow down, think of a car slowing as it reaches a stop sign, we say they are easing out. 

Everything in the real world eases in or eases out. You should always apply easing! This will give your motion character and make it more realistic and interesting to watch. 

Play around with: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function

You should always apply easing to your animations it will make them more interesting and fun. 

There are a couple exceptions. Animating color and transparency changes look smoother with linear easing. Animations where it's expected that something moves at a constant rate, like clouds or a plane in the sky, linear easing is best. 

## Using :hover

The `:hover` pseudo class applies when the cursor is over an element. Use it to create animation based on user interaction. You use `:hover` to draw attention to an element that can be interacted with, get a users attention, warn a user that something could happen. 

```CSS
button {
  background-color: #fff; 
}

button:hover {
  background-color: red;
}
```

A simple example. When the curcor is over the element the color changes to red. When cursor moves off the element red is no longer the background color changes back to white. 

### Using :hover on an ancestor

An important strategy with `:hover` is to use it on an ancestor element. Imagine you want to apply some styles ot an element but only when the cursor is over an ancestor of that element. 

Do this by placing `:hover` on the ancestor element you want to initiate the action and follow the selector with a child or descendant selector. 

Here's an example imagine you want to style the heading in a dialog box. But you want the heading to change when the cursor is over the dialog box. 

```HTML
<div class="dialog-box">
  <h1>Delete your account</h1>
  <p>By clicking okay you will delete your account permanently
    <button>Delete</button>
  </p>
</div>

<style>
  .dialog:hover h1 {
    color: red;
  }
</style>
```

This is powerful idea that makes many animations possible with CSS that would not be possible without it! There are several examples in challenge examples for this lesson that use the idea! 

## CSS variables

Other languages have variables CSS has them also but they work a little bit differently. CSS variables are called custom properties and they act like other CSS properties. 

All custom property names must begin with a double hyphen. You can assign any valid CSS value to a custom property. 

Custom properties have scope and their scope is determined by the selector where were declared. Often you'll want to declare variables in `:root`. This is special selector that represents the root of your document. 

```CSS
:root {
  --fg-color: #eee;
  --bg-color: #333;
  --font-name: Helvetica;
  --num-columns: 3;
  --size: 40px;
}
```

These variables would be accessible from anywhere in your CSS document. 

To use a custom property you must use the `var()` function!

```CSS
body {
  color: var(--fg-color);
  background-color: var(--bg-color);
  margin: var(--size);
  display: grid;
  grid-template-columns: repeat(var(--num-columns), 1fr);
}
```

Notice that everywhere you used a custom property as a value you used the `var(--some-prop)`.

This also works with `calc()`.

```CSS
.square {
  --size: 100px;
  --margin: 1rem;
  --padding: 0.5rem;
  width: calc(var(size) - var(--margin) * 2 - var(--padding) * 2);
}
```

As you can see this can be a little awkward. 

### Why use custom properties? 

If you haven't been sold on custom properties yet think about searching through you document looking for values that need to be changed. With custom properties you can declare important values at the top in an easy to identify location for quick editing. 

Custom properties keep your code DRY.

Scope allows custom properties to be overriden in ways that can make your code more flexible. 

```HTML
<style>
:root {
  --primary-color: #f6f;
  --hover-color: #f0f;
}
button {
  background-color: var(--primary-color);
}

button:hover {
  background-color: var(--hover-color);
}
</style>

<button>Normal Button</button>

<button style="--primary-color: #9ff; --hover-color: #0ff;">
  Special Button</button>
```

Here the first button displays as normal. The second button overrides the `--primary-color` and `--hover-color` properties only in the scope of the second button! Setting the valuse here does not affect the first button! 

The example above is very simple but holds a lot of potential! Study it closely!

### Another Button with custom properties example

```HTML
<style>
  :root {
    --color-a: #9424d9;
  }

  button {
    --color-fg: #fff;
    --color-bg: #3083d5;

    color: var(--color-fg);
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: var(--color-bg);
    border-width: 2px;
    background-color: var(--color-bg);
    transition: 200ms;
  }

  button:hover {
    color: var(--color-bg);
    background-color: var(--color-fg);
  }
</style>

<div>
  <button>Hello</button>
  <button 
    style="--color-bg: #47a624">World</button>
  <button 
    style="--color-fg: #000">Foo</button>
  <button 
    style="--color-bg: #c1241c">Delete</button>
  <button 
    style="--color-bg: var(--color-a)">Bar</button>
</div>
```

Similar to the first example. Notice that the custom properties are used in a few places.

## Challenges

Try and recreate at least four of the examples here: 

https://tech-at-du.github.io/ACS-3320-Web-Design-and-Advanced-CSS/lessons/lesson-02-example.html

Try not to look at the source code! You can peak if you get stuck! Feel free to modify the example to suit your preference. 

Use custom properties as you work! Apply custom properties where you can to your advantage!

## Combine transistion with ::before and ::after

You can apply animation to pseudo elements! Keep in mind to animate some properties your pseudo element will have to be `display: block` or `display: inline-block`, and you will only be able to create two pseudo elements, one with `::before` and the other with `::after`. 

### Fancy Underline

The goal here is to make a line that draws itself under a word. To do this we need another new element to appear. This would be a difficult addiction to existing markup and as a visual effect should not part of that markup, remember the separation of concerns. 

The solution is to generate the extra element with ::after. 

```HTML
<style>
	.add-box {
		display: inline-block;
		color: tomato;
	}
	.add-box::after {
		content: "";
		display: block;
		width: 0;
		height: 3px;
		background-color: tomato;
		transition: 400ms;
	}
	.add-box:hover::after {
		width: 100%;
	}
</style>

<blockquote>
	If you set your goals <span class="add-box">ridiculously</span> high and it's a failure, you will fail above everyone else's <span class="add-box">success</span>. 
</blockquote>
-James Cameron
```

![fancy hover](images/hover-effecft.gif)

Here the class `.add-box` adds a new pseudo-element with `::after`. That element is styled with a `display: block`, `width`, `height`, and `background-color`. It also has a `transition`, so changes to these properties will be animated. 

Notice the last rule: `.add-box:hover::after`. This selector applies to the `::after` element when its parent is in the `:hover` state. Changing the width here starts the animation. 

## Making things move with CSS

Pair up with someone you haven't paired with in-class before and take a look at these tutorials. The idea is to find some things you can incorporate into your logo/icon. 

- https://css-tricks.com/almanac/properties/a/animation/
- https://thoughtbot.com/blog/css-animation-for-beginners

## Quick look at some sample code

See the [example](lesson-02-example.html)

## After Class

Follow these video tutorials. These videos walk through how to solve all of the challenges in the homework. These also cover ideas that go beyond what's in the homework. 

https://www.youtube.com/watch?v=9UeVeH5ZzP0&list=PLoN_ejT35AEg-xKnTgIjE5VU-3IHO2N6i

Recreate (at least 6 of) the animations here using CSS transitions. Use CSS custom properties in your solutions!

- [CSS Animation Challenges](https://tech-at-du.github.io/ACS-3320-Web-Design-and-Advanced-CSS/lessons/lesson-02-example.html)

Add some animation to the project you are redesigning. 

## Additional Resources

1. https://www.youtube.com/watch?v=9UeVeH5ZzP0&list=PLoN_ejT35AEg-xKnTgIjE5VU-3IHO2N6i
1. https://css-tricks.com/almanac/properties/a/animation/
1. https://www.mockplus.com/blog/post/css-animation-examples
1. https://uicookies.com/css-animation-examples/
1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations

