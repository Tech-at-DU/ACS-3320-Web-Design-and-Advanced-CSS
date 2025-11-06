


Mini Hackathon
- book with turning pages
- solar system
- zoetrope
- a forest


---

:is()

:has()

:where()

---

Color 

hex #rgb #rrggbb #rrggbbaa
rgb(r, g, b) rgba(r, g, b, a)
hsl(h, s, l) hsla(h, s, l, a)
hwb(h w b / a)
lab(l, a, b)
oklch(lightness chroma hue / alpha)

color-mix()


CSS provides a variety of color functions that allow developers to define colors in different color spaces, offering more control, predictability, and access to wider color gamuts than traditional hexadecimal or color keywords. 

CSS Color Functions | CSS-Tricks

The main color functions include:

sRGB Color Space (Standard) 
These functions use the standard Red, Green, Blue (sRGB) color space, which is the default for most web displays. 
rgb(): Defines a color using red, green, and blue components. An optional alpha channel can be included for opacity.
Syntax: rgb(red green blue / alpha)
Examples: rgb(255 0 0) (red), rgb(100% 0% 0% / 0.5) (50% opaque red).
Values for red, green, and blue can be integers (0-255) or percentages (0%-100%).
hsl(): Defines a color using the Hue, Saturation, and Lightness model, which is often more intuitive for humans.
Syntax: hsl(hue saturation lightness / alpha)
Examples: hsl(120deg 100% 50%) (green), hsl(0 100% 50% / 25%) (25% opaque red).
Hue: An angle on the color wheel (0-360 degrees, or other angle units).
Saturation: A percentage (0% is grayscale, 100% is full color).
Lightness: A percentage (0% is black, 100% is white, 50% is normal).
hwb(): Defines a color using Hue, Whiteness, and Blackness. This allows you to pick a base hue and mix in amounts of white or black.
Syntax: hwb(hue whiteness blackness / alpha)
Examples: hwb(120deg 0% 0%) (pure green), hwb(0 50% 0%) (pink). 
Wide-Gamut Color Spaces (Modern)
These newer functions (part of CSS Color Module Level 4) enable access to a wider range of colors, including those outside the sRGB gamut, and offer better perceptual uniformity. 
lab(): Specifies colors in the CIELAB color space, using lightness, an a-axis (green to red), and a b-axis (blue to yellow).
Syntax: lab(lightness a-axis b-axis / alpha)
Examples: lab(50% 0 0).
lch(): Specifies colors in the CIELAB color space using the cylindrical coordinates: Lightness, Chroma (color intensity), and Hue.
Syntax: lch(lightness chroma hue / alpha)
Examples: lch(50% 50 150deg).
oklab(): Similar to lab(), but uses an optimized Oklab color space which provides more perceptually uniform results, especially for gradients and color mixing.
Syntax: oklab(lightness a-axis b-axis / alpha)
oklch(): The cylindrical equivalent of oklab(), providing perceptual lightness, chroma, and hue.
Syntax: oklch(lightness chroma hue / alpha)
oklch() is recommended for most modern color work due to its predictability and access to wide gamuts.
color(): This generic function allows you to specify colors within explicit color spaces, such as display-p3, a98-rgb, or rec2020.
Syntax: color(colorspace value1 value2 value3 / alpha)
Examples: color(display-p3 1 0.5 0). 
Utility Functions
color-mix(): Mixes two colors together by a specified amount in a given color space.
light-dark(): Allows specifying two colors, one for light mode and one for dark mode, automatically selecting the appropriate one based on user preference or the color-scheme property.
Relative color syntax: A general syntax using the from keyword that enables taking an existing color, modifying its channels (e.g., lightening, darkening, or changing the hue), and outputting a new color using any of the color functions above. 

