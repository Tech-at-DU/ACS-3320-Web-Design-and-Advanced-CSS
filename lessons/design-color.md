# Design Formulas: Color

Picking colors feels like the most "artistic" part of design, but a working color system is mostly arithmetic. In this lesson you'll build one from a single hue using OKLCH, check it for contrast, and get dark mode almost for free.

## Why you should know this

Bad color is the fastest way to make an app look amateur, and low contrast is the most common accessibility failure on the web. It's also a legal risk for the companies you'll work for. Teams expect front-end developers to turn a brand color into a full, accessible palette and to wire it up as tokens. Design systems at GitHub, Shopify, Adobe, and Google all work this way.

## Learning Objectives

1. Build a neutral ramp and an accent color with `oklch()`
2. Assign colors by **role** (background, text, border, accent), not by name
3. Check contrast against WCAG AA in DevTools
4. Add semantic colors (success, warning, danger) that only carry meaning
5. Create a dark theme with `light-dark()` and `color-scheme`
6. Derive hover and active colors with `color-mix()` and relative colors
7. Translate a mood into a starting hue and chroma

## Warm-up (10 min)

Open GitHub, Stripe, or Linear. Count the distinct colors on one screen, not including images.

- How many are grays?
- How many are "brand" colors?
- Where does the brand color appear? (Usually buttons, links, the selected tab, focus rings. Almost never large areas.)

Most well-designed apps are **90% neutral**. The accent color is rare, so it means "look here" or "click here."

---

## Formula 1: Neutrals + One Accent

```
Neutrals  ███████████████████████████████████  ~90%  backgrounds, text, borders
Accent    ███                                  ~8%   primary buttons, links, focus, selection
Semantic  █                                    ~2%   success, warning, danger, only when meaningful
```

That's the whole strategy. If you're unsure, remove a color.

## Formula 2: Build Ramps in OKLCH

`oklch()` describes a color with three numbers that match how people perceive color:

```css
oklch(L C H)
/*    │ │ └─ Hue: 0–360, position on the color wheel (25 red, 70 orange, 100 yellow, 145 green, 250 blue, 300 purple) */
/*    │ └─── Chroma: 0–0.37, how colorful (0 = gray, 0.1 = calm, 0.2+ = vivid) */
/*    └───── Lightness: 0–1, perceived lightness (0 = black, 1 = white) */
```

Why not hex or HSL? In HSL, `hsl(60 100% 50%)` (yellow) and `hsl(240 100% 50%)` (blue) have the same "lightness" but look completely different. In OKLCH, the same L **looks** equally light across hues. That means you can build a ramp by changing only L, and contrast becomes predictable.

### A neutral ramp

Neutrals don't have to be pure gray. A tiny bit of chroma in your brand hue makes them feel intentional.

```css
:root {
  --hue: 250;           /* change this one number to re-theme everything */

  --gray-50:  oklch(0.98 0.005 var(--hue));
  --gray-100: oklch(0.95 0.01  var(--hue));
  --gray-200: oklch(0.90 0.01  var(--hue));
  --gray-300: oklch(0.82 0.015 var(--hue));
  --gray-400: oklch(0.70 0.015 var(--hue));
  --gray-500: oklch(0.55 0.02  var(--hue));
  --gray-600: oklch(0.45 0.02  var(--hue));
  --gray-700: oklch(0.35 0.02  var(--hue));
  --gray-800: oklch(0.25 0.02  var(--hue));
  --gray-900: oklch(0.18 0.02  var(--hue));
}
```

### An accent

```css
:root {
  --accent-500: oklch(0.55 0.18 var(--hue));  /* buttons, links on light bg */
  --accent-400: oklch(0.70 0.15 var(--hue));  /* links on dark bg */
  --accent-100: oklch(0.95 0.03 var(--hue));  /* subtle highlight backgrounds */
}
```

## Formula 3: Name Colors by Role

Components should never use `--gray-600` directly. They use a **role**. Roles point at ramp values. This one extra layer is what makes theming possible.

```css
:root {
  --color-bg:        var(--gray-50);    /* page */
  --color-surface:   white;             /* cards, inputs */
  --color-fg:        var(--gray-900);   /* primary text */
  --color-fg-muted:  var(--gray-600);   /* secondary text */
  --color-border:    var(--gray-200);   /* dividers, card edges */
  --color-border-strong: var(--gray-500); /* input borders (must meet 3:1) */
  --color-accent:    var(--accent-500);
  --color-on-accent: white;             /* text on top of accent */
  --color-focus:     var(--accent-500);
}
```

### Semantic colors

Use these **only** to mean something. A green button that doesn't mean "success" is confusing.

```css
:root {
  --color-success: oklch(0.55 0.15 145);
  --color-warning: oklch(0.65 0.15 70);   /* dark text on top of this */
  --color-danger:  oklch(0.55 0.20 25);
  --color-info:    oklch(0.55 0.15 250);
}
```

Never rely on color alone to communicate. Pair it with an icon or text ("Error: ...").

---

## Formula 4: Contrast

### The rules (WCAG 2.2 AA)

| What | Minimum contrast |
|:--|:--|
| Body text | **4.5 : 1** |
| Large text (24px+, or 19px+ bold) | **3 : 1** |
| UI parts: input borders, icons, focus rings | **3 : 1** |
| Disabled controls, decoration | no requirement |

### The OKLCH shortcut

Because OKLCH lightness is perceptual, you can estimate contrast from the **gap in L**:

- **Text:** `ΔL ≥ 0.45` (e.g., text at 0.45 on a background at 0.95 ✓)
- **Borders, icons, focus rings:** `ΔL ≥ 0.35`
- This works for backgrounds lighter than about L 0.15. For very dark backgrounds, leave a bigger gap.

This is a starting point. **Always verify.**

### How to verify

1. In Chrome DevTools, select an element and click the color swatch next to `color` in the Styles pane. The picker shows the **contrast ratio** with ✓ or ✗ for AA and AAA.
2. Run DevTools → **Lighthouse** → Accessibility to find every failing pair on the page.
3. Or paste values into [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or [oklch.com](https://oklch.com).

> Don't trust an AI's contrast claims. Language models regularly report wrong contrast ratios. Measure.

---

## Formula 5: Dark Mode with `light-dark()`

Dark mode isn't "invert the colors." You **flip the ramp**: backgrounds come from the dark end, text from the light end, and the accent gets lighter so it stays readable.

```css
:root {
  color-scheme: light dark;   /* follow the user's OS setting */

  --color-bg:       light-dark(var(--gray-50),  var(--gray-900));
  --color-surface:  light-dark(white,           var(--gray-800));
  --color-fg:       light-dark(var(--gray-900), var(--gray-50));
  --color-fg-muted: light-dark(var(--gray-600), var(--gray-400));
  --color-border:   light-dark(var(--gray-200), var(--gray-700));
  --color-accent:   light-dark(var(--accent-500), var(--accent-400));
  --color-on-accent: light-dark(white, var(--gray-900));
}

/* Let the user override the OS setting */
:root[data-theme="light"] { color-scheme: light; }
:root[data-theme="dark"]  { color-scheme: dark; }
```

Because components use roles (`--color-fg`), not ramp values, **no component CSS changes** for dark mode.

Dark mode tips:
- Avoid pure black backgrounds. `L ≈ 0.15–0.2` is easier on the eyes.
- Shadows barely show on dark backgrounds. Use a slightly lighter surface to show elevation instead.
- Lower the chroma of large colored areas in dark mode. Saturated colors "glow" on dark backgrounds.

---

## Formula 6: Derive States, Don't Pick Them

Don't hand-pick a hover color for every button. Derive it:

```css
.button {
  background: var(--color-accent);
}
.button:hover {
  /* mix 15% black in */
  background: color-mix(in oklch, var(--color-accent), black 15%);
}
.button:active {
  /* relative color syntax: same color, lightness minus 0.1 */
  background: oklch(from var(--color-accent) calc(l - 0.1) c h);
}
```

Subtle tinted backgrounds work the same way:

```css
.alert--danger {
  background: color-mix(in oklch, var(--color-danger) 12%, var(--color-surface));
  border-color: var(--color-danger);
}
```

---

## Formula 7: Mood → Starting Point

If someone gives you a feeling instead of a brand color, start here. Then adjust.

| Mood | Hue | Chroma | Notes |
|:--|:--|:--|:--|
| Calm, trustworthy | 220–260 (blue) | 0.08–0.14 | Banks, health, productivity |
| Fresh, natural | 140–170 (green) | 0.08–0.14 | Wellness, sustainability |
| Warm, friendly | 40–80 (orange/amber) | 0.12–0.18 | Food, community, education |
| Energetic, bold | 20–35 (red) | 0.18–0.25 | Sports, sales, alerts |
| Creative, playful | 290–340 (purple/pink) | 0.15–0.25 | Consumer apps, games |
| Premium, quiet | any | 0.00–0.04 | Mostly near-black and off-white, one muted accent |
| Focused, uncluttered | any | 0.00–0.02 on neutrals | Writing and reading apps. Almost no color, so the content is the design |

Chroma controls **intensity** more than hue does. "Calm" mostly means low chroma; "energetic" mostly means high chroma.

---

## Using AI here

AI is a good palette **brainstorming** partner and a bad contrast **checker**.

**Prompt: palette from mood**

```
I'm building [product] for [audience]. It should feel [adjective, adjective, adjective].
Propose 3 different accent hues in OKLCH with a one-sentence reason for each.
For each, give me a 10-step neutral ramp (lightness 0.98 down to 0.18) tinted
with that hue at chroma ≤ 0.02, as CSS custom properties.
Don't use purple or indigo unless it fits the mood better than anything else.
```

Then **you**:
1. Paste each option into your tokens and look at the real page.
2. Pick one and write down why in your design log.
3. Verify every text/background pair in DevTools.

**Prompt: role mapping review**

```
Here are my color tokens. Check that:
- every role used for text sits at least 0.45 lightness away from the backgrounds it appears on
- the dark theme flips the ramp correctly
- semantic colors are only used for meaning
List problems only. Don't rewrite the file.
```

---

## In-class challenge (40 min)

1. Copy the neutral ramp, accent, and role tokens above into your Zen Garden stylesheet.
2. Replace every color in your CSS with a **role** token.
3. Change `--hue` to three different values. Does your page still look intentional each time?
4. Add `color-scheme: light dark` and the `light-dark()` roles. Toggle dark mode in DevTools (Rendering panel → "Emulate CSS media feature prefers-color-scheme").
5. Check three text pairs in the DevTools contrast picker. Fix any that fail.

## After Class

- Apply the color system to your [CSS Zen Garden] project.
- Play with [oklch.com](https://oklch.com) until the L/C/H sliders feel intuitive.

## Additional Resources

- [OKLCH in CSS: why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (Evil Martians)
- [oklch.com](https://oklch.com), a color picker and converter
- [Huetone](https://huetone.ardov.me), a tool for building accessible color ramps
- [MDN: light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
- [MDN: color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG 2.2: Understanding Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

[CSS Zen Garden]: ../assignments/css-zen-garden.md
