# Animation

Making things move.

## Why you should know this

Engagment is important. Things that move are much more interesting. They attract attract attention and lead the eye. Adding motion adds another dimension to your content. All of your favorite apps probably have little bits of animation.

Use caution, some users find animation hard to follow or distracting! Use `@media (prefers-reduced-motion: reduce)` to define alternatives to motion. 

## Learning Objectives

1. Use `transition`
2. Create interactive animations
3. Use the `:hover` pseudo class
4. Animate children with a `:hover` on parent
5. Use `:has()` as a parent selector

## Identify some Examples of motion

Animation is everywhere on the computer. Even your code editor has some animation. Small animations can be informative and engaging. 

When you see motion on the computer what is happening? Most often that motion is connected to the properties that set the position, scale, rotation, and opacity. 

Explore some CSS animations and identify what properties are being animated.

Transition Examples: 
1. https://codepen.io/dsenneff/pen/2d338b0adf97472ebc5d473cf1fa910b
2. https://codepen.io/stefcharle/full/Gydvbx
3. https://codepen.io/valhead/full/rfump
4. https://codepen.io/Noor_Spoty/pen/pooyOgd
5. https://codepen.io/lisilinhart/pen/OJRoRJe
6. https://codepen.io/t_afif/pen/PoEebrz
7. https://codepen.io/pcameron/pen/rVmera
8. https://codepen.io/xx_uan/pen/JmYMEy
9. https://codepen.io/nathantaylor/full/PJGqdE
10. https://codepen.io/oliviale/full/jxPgKv

What is happening in these animations? Don't worry about the technical details just _identify which CSS properties are changing_. For example: scale, rotation, background-color, etc. 

## Example Code and Challenge problems

Download this repo and take a look at the examples here: https://github.com/Tech-at-DU/transition-examples

Look at the code samples here. Start with example-1.html. Look for the `TODO`s and follow the instructions. 

There are three challenge problems in the readme. Solve these and submit your work to gradescope. 

## Video lessons 

- https://www.youtube.com/playlist?list=PLoN_ejT35AEg-xKnTgIjE5VU-3IHO2N6i

## Making things move

There are a couple of ways to make things move with CSS. 

- `transition`
- `@keyframe` and `animation`

Motion is the changing of property values over time. Most often the values are numeric. 

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

The `transition: [property] [duration] [timing-function] [delay];` property sllows you to set the which properties are transitioned and the time for each. If you don't include this information the time applies to all properties. 

### Ttransition properties

- transition-delay - wait before transition begins
- transition-duration - length of transition
- transition-property - which properties to animate
- transition-timing-function - mathematical function applied to the motion

### Multiple Transitions

Transition is a property that can "stack" values, like border, background, and box-shadow. Each new value is separated by a comma. 

```CSS
transition-property: color, border-radius;
transition-duration: 400ms, 800ms;
transition-timing-function: linear, ease-out;
transition-delay: 0ms, 500ms;
```

In the example above, `color` and `border-radius` are transitioned. Color has a duration of `400ms` and border-radius has a duration of `800ms`. They each use a different easing, different delay. 

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
  .dialog:hover h1 { /* The h1 transitions when the parent div.dialog is hovered */
    color: red;
  }
</style>
```

This is powerful idea that makes many animations possible with CSS that would not be possible without it! There are several examples in challenge examples for this lesson that use the idea! 

## Combine transistion with ::before and ::after

You can apply animation to pseudo elements! Keep in mind to animate some properties your pseudo element will have to be `display: block` or `display: inline-block`, and you will only be able to create two pseudo elements, one with `::before` and the other with `::after`. 

```CSS
.box-10 {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 900;
  position: relative;
  overflow: hidden;
  transition: 200ms linear 200ms;

  /* Create an extra element and animate it */
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: red;
    position: absolute;
    z-index: -1;
    left: 100%;
    transition: 200ms ease-out;
  }
    
  &:hover { /* Hover the parent */
    color: white;
    &::before { /* animate the ::before element */
      left: 0;
    }
  }
}
```

See Example 10. 

### Transitioning a Parent using :has()

You can use `:has()` as a parent selector. 

```CSS
label:has(> input:checked) {
  background-color: yellowgreen;
}
```

In the example above the marke up might look like this: 

```HTML
<label>
  <input type="checkbox">
</label>
```

In this case, the selector `label:has(> input:checked)` applies when the label has a child input that is in the "checked" state. This would apply to radio buttons and check boxes that are nested in a label element. **!important, its color of the label that changes!**  

See Example 14

## Additional Resources

- https://css-tricks.com/almanac/properties/a/animation/
- https://thoughtbot.com/blog/css-animation-for-beginners
1. https://www.youtube.com/watch?v=9UeVeH5ZzP0&list=PLoN_ejT35AEg-xKnTgIjE5VU-3IHO2N6i
1. https://css-tricks.com/almanac/properties/a/animation/
1. https://www.mockplus.com/blog/post/css-animation-examples
1. https://uicookies.com/css-animation-examples/
1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
1. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations

