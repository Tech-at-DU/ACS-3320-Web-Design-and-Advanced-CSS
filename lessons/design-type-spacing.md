# Design Formulas: Type & Spacing

Most "this looks unprofessional" problems are type and spacing problems. They're also the easiest to fix. You don't need talent here. You need two scales and a few rules.

## Why you should know this

AI tools and component libraries can generate a page in seconds. They can't tell you whether it reads well, and they rarely make the same choices twice. Developers who can look at a page and say "the body line length is 130 characters and the heading isn't separated from the previous section" can fix things in minutes and direct AI tools precisely.

Type and spacing make up around 90% of what a user sees on most pages. Get these right and almost any color scheme will look decent.

## Learning Objectives

1. Define a spacing scale and a type scale as CSS custom properties
2. Apply the **Inside < Between** rule to group related content
3. Create hierarchy with size, weight, color, and space
4. Set readable body text: size, line height, line length
5. Use `clamp()` to make headings scale with the viewport
6. Use AI to audit CSS for values that aren't on your scales

## Warm-up (10 min)

Open any site you use every day (GitHub, a news site, your bank). Open DevTools and inspect:

- The body text: `font-size`, `line-height`, `font-family`
- The largest heading: `font-size`, `font-weight`, `line-height`
- The space between two cards or sections: `margin`, `padding`, `gap`

Write the numbers down. Do the numbers repeat? Do you see a pattern (4, 8, 16, 24, 32...)? You almost always will. That's the scale.

---

## Formula 1: The Spacing Scale

**Pick values from a scale. Never type a number that isn't on it.**

```css
:root {
  --space-xs:  0.25rem;  /*  4px */
  --space-sm:  0.5rem;   /*  8px */
  --space-md:  1rem;     /* 16px */
  --space-lg:  1.5rem;   /* 24px */
  --space-xl:  2rem;     /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 6rem;     /* 96px */
}
```

Why a scale? With a scale you only choose between "a little more" and "a little less", and that's an easy decision. Free choice ("13px or 14px or 15px?") is hard, and the result looks random.

The steps get bigger as the values grow. The difference between 4px and 8px is obvious. The difference between 64px and 68px is invisible, so the scale jumps to 96px.

### Rule: Inside < Between

Things that belong together sit closer together than things that don't. Designers call this **proximity**. It's the most important layout rule there is.

```
┌──────────────────────┐
│ Card title           │  ← space inside the card: --space-sm / --space-md
│ Card text text text  │
└──────────────────────┘
                          ← space between cards: --space-xl
┌──────────────────────┐
│ Card title           │
│ Card text text text  │
└──────────────────────┘
```

If the space inside a card equals the space between cards, the eye can't tell where one card ends and the next begins.

### Rule: A heading belongs to what follows it

```css
h2 {
  margin-block: var(--space-2xl) var(--space-sm); /* big above, small below */
}
```

The most common spacing bug in AI-generated and beginner CSS is a heading that's the same distance from the section above as from its own paragraph. The heading ends up floating between the two sections.

### The flow pattern

Use this for any stack of content (articles, cards, forms):

```css
.flow > * + * {
  margin-block-start: var(--flow-space, var(--space-md));
}
```

Every child after the first gets space above it. You can change the spacing for one section by setting `--flow-space`.

### Prefer `gap`

For flex and grid, use `gap`, not margins on children:

```css
.card-list {
  display: grid;
  gap: var(--space-xl);
}
```

---

## Formula 2: The Type Scale

**Choose a base size and a ratio. Multiply.**

A ratio of **1.25** (designers call it a "major third") works for almost any app or website.

```css
:root {
  --font-size-sm:  0.8rem;    /* 12.8px  captions, labels */
  --font-size-md:  1rem;      /* 16px    body */
  --font-size-lg:  1.25rem;   /* 20px    h4, lead text */
  --font-size-xl:  1.563rem;  /* 25px    h3 */
  --font-size-2xl: 1.953rem;  /* 31px    h2 */
  --font-size-3xl: 2.441rem;  /* 39px    h1 */
  --font-size-4xl: 3.052rem;  /* 49px    hero / display */
}
```

Need more drama for a marketing page? Use a bigger ratio (1.333 or 1.5). Building a dense dashboard? Use a smaller one (1.2). The method stays the same.

Use **5–6 sizes total**. If you count 9 different font sizes on a page, something is wrong.

### Readable body text

These numbers are well researched. Just use them:

```css
body {
  font-size: var(--font-size-md);   /* 16px minimum, 18px is nice for reading */
  line-height: 1.5;                 /* 1.4–1.6 for body text */
}

p, li {
  max-width: 65ch;                  /* 45–75 characters per line */
}
```

- **Line length** is the most commonly broken rule on the web. Text running the full width of a 1440px screen is exhausting to read. `ch` is the width of the "0" character, so `65ch` is about 65 characters.
- **Line height** shrinks as text gets bigger. Headings look loose at 1.5. Use 1.1–1.25.

```css
h1, h2, h3 {
  line-height: 1.15;
  text-wrap: balance;   /* evens out line lengths in multi-line headings */
}

p {
  text-wrap: pretty;    /* avoids a single orphan word on the last line (progressive enhancement) */
}
```

### Fonts: fewer is better

- **One family** is fine. Two is the maximum: one for headings, one for body.
- The **system font stack** is fast, looks native, and is never wrong:

```css
:root {
  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-serif: ui-serif, Georgia, "Times New Roman", serif;
  --font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
}
```

- Want personality? Use a distinctive font for **headings only** and keep the body on a highly readable one. See [Typography](lesson-02.md) for font stacks, loading custom fonts, and pairing.

---

## Formula 3: Hierarchy

Hierarchy is the order in which the eye reads the page. You control it with four levers, **in this order**:

1. **Size:** the strongest lever
2. **Weight:** 400 for body, 600–700 for headings and labels
3. **Color:** primary text vs. muted text
4. **Space:** more space around something makes it more important

**Rule: change one or two levers at a time, not all four.** A heading that's bigger *and* bolder *and* colored *and* uppercase *and* underlined is shouting.

### Three levels of text

Most interfaces need only three levels:

| Level | Use | Style |
|:--|:--|:--|
| Primary | headings, main content | `--color-fg`, larger or bolder |
| Secondary | descriptions, metadata | `--color-fg-muted`, normal weight |
| Tertiary | timestamps, captions, hints | `--color-fg-muted`, `--font-size-sm` |

```html
<article class="card">
  <h3 class="card__title">Fix login redirect</h3>        <!-- primary -->
  <p class="card__desc">Users bounce back to /home...</p> <!-- secondary -->
  <p class="card__meta">Opened 2 days ago by @ana</p>     <!-- tertiary -->
</article>
```

```css
.card__title { font-size: var(--font-size-lg); font-weight: 600; }
.card__desc  { color: var(--color-fg-muted); }
.card__meta  { color: var(--color-fg-muted); font-size: var(--font-size-sm); }
```

### The squint test

Squint at your page (or blur it in DevTools with `filter: blur(4px)` on `body`). What do you see first? Second? Third? If the answer isn't "the most important thing," adjust size or weight until it is.

---

## Fluid type with `clamp()`

A 49px hero heading is great on desktop and too big on a phone. `clamp()` sets a minimum, a preferred value that scales with the viewport, and a maximum:

```css
h1 {
  /*            min        preferred          max   */
  font-size: clamp(2rem, 1.25rem + 3vw, 3.052rem);
}
```

- The `rem` part keeps text zoomable for accessibility. Never use `vw` alone for font size.
- You don't need to do the math by hand. Use [Utopia's type calculator](https://utopia.fyi/type/calculator/) to generate a whole fluid scale. Spacing can be fluid too: [Utopia space calculator](https://utopia.fyi/space/calculator/).

---

## Using AI here

AI is very good at **mechanical audits**. It's less reliable at taste. Use it for the audit.

**Prompt: find values that aren't on the scale**

```
Here are my design tokens:
[paste your :root block]

Here is my stylesheet:
[paste CSS]

List every font-size, line-height, margin, padding, and gap that uses a
literal value instead of one of my tokens. For each one, suggest the
closest token. Output a table: selector | property | current value | suggested token.
Don't rewrite the file.
```

Check the table yourself and decide which changes to make. Sometimes an off-scale value is intentional (a 1px border, for example).

**Prompt: hierarchy check (attach a screenshot)**

```
This is a screenshot of my page. Describe the order your eye would read
the elements in, from first to last. Then tell me which element seems
more or less important than it should be, given that the main job of
this page is [job]. Use the terms size, weight, color, and space.
```

---

## In-class challenge (40 min)

Use the CSS Zen Garden HTML (you'll use this for your [CSS Zen Garden] assignment).

1. Add the spacing and type scale tokens above to the top of a blank stylesheet.
2. Style **only** type and spacing: no colors except black and a single gray, no backgrounds, no layout.
   - Body text: size, line height, max width
   - `h1`, `h2`, `h3` from the type scale
   - Space between sections and inside sections using Inside < Between
3. Do the squint test. Swap screenshots with a neighbor. Can they tell what's most important?

You'll be surprised how good a page can look with only type and spacing.

## After Class

- Start the [CSS Zen Garden] assignment. Begin with type and spacing, exactly as in the challenge.
- Read [Typography](lesson-02.md) for font stacks and loading custom fonts.

## Additional Resources

- [Practical Typography: Summary of key rules](https://practicaltypography.com/summary-of-key-rules.html), the best short guide there is
- [Every Layout: Modular Scale](https://every-layout.dev/rudiments/modular-scale/)
- [Utopia: fluid type and space](https://utopia.fyi)
- [Type Scale visualizer](https://typescale.com)
- [Refactoring UI](https://www.refactoringui.com), a design book written for developers (not free, but excellent)

[CSS Zen Garden]: ../assignments/css-zen-garden.md
