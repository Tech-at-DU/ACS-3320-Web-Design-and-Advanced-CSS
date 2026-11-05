# Layout: Redesign One Section

Your AI-generated page probably looks good. It also looks like **every other AI page**: a centered hero, three equal cards with icons, sections stacked one after another, everything centered. Nothing is broken. It's just **generic**.

Layout is one of the strongest ways to give a page its own character. Last class you wrote a design brief that says how your page should **feel**. Today you'll make one section's layout match that brief.

**Today's problem:** pick **one section** of your page, replace the AI's default layout with a layout that fits your brief, and make it work on desktop and phone.

## Learning Objectives

1. Recognize the layout patterns an AI uses by default
2. Choose a layout pattern based on a design brief, not habit
3. Override existing CSS by using the cascade
4. Build a layout with grid that works at 375px and 1280px

## How this works

- Work **at your own pace**, top to bottom.
- You'll edit **one file**, `after/index.html`, and add **one entry** to `DESIGN-LOG.md` at the end.
- Each step ends with **Done when**. Don't move on until that's true.
- Steps 1–6 take about **75 minutes**. When you finish, do the **Stretch** challenges.
- Stuck for 10 minutes? Ask a classmate or your instructor.

---

## Setup (5 min)

1. In your Fix the AI Page repo, copy `before/index.html` to `after/index.html`. (Skip this if you already did it.)
2. Open `after/index.html` in your editor and in your browser.
3. Open `DESIGN-LOG.md` and reread your **Brief**, especially the **Feel** line.

**Done when:** your page is open in the browser and you can say your brief's 3 feel words without looking.

---

## Step 1: Map the page (10 min)

Name the pattern the AI used for each section. At the **top** of the `<style>` tag, add this comment and fill it in:

```css
/* LAYOUT MAP
   Header:   
   Hero:     
   Features: 
   Cards:    
   Form:     
   Footer:   
*/
```

Use these names:

| Pattern | Looks like |
|:--|:--|
| **Centered stack** | Everything centered, one item above another |
| **Card grid** | Equal boxes in a row |
| **Split** | Two halves side by side |
| **Sidebar** | A narrow column next to a wide one |
| **Column** | One left-aligned column of content |
| **Cluster** | Items in a row that wrap (nav links, tags, buttons) |

**Done when:** every line has a pattern name. Count how many say **centered stack** or **card grid**. That's the AI default.

---

## Step 2: Choose your section and its new pattern (10 min)

1. Pick **one** section to redesign: the **hero** or the **features** section. These are where the AI default is most obvious.
2. Read the menu below. Pick the option whose **feel** is closest to your brief.

| Option | Layout | Feels | Good for a brief that says... |
|:--|:--|:--|:--|
| **A. Split** | Text on one side, image or form on the other | Direct, practical | "useful", "get to the point" |
| **B. Editorial** | Big left-aligned headline, a narrow text column, lots of empty space | Calm, confident, bookish | "quiet", "literary", "thoughtful" |
| **C. Label + content** | A heading in a narrow left column, content in a wide right column | Organized, catalog-like | "organized", "trustworthy", "like a library catalog" |
| **D. Ruled list** | Items as rows separated by lines instead of cards | Plain, honest, no fluff | "utilitarian", "no-nonsense", "like a hardware store" |
| **E. Feature + supporting** | One large item, with the others smaller beside it | Clear priority | "focused", "one thing matters most" |

3. Sketch your section as rectangles on paper, once at **desktop** width and once at **phone** width. No detail, just boxes.

**Done when:** you can finish this sentence out loud: *"I'm changing my **[section]** from **[AI pattern]** to **[option]**, because my brief says **[feel word]**."*

---

## Step 3: Find the section's code (10 min)

1. In the browser, right-click the section → **Inspect**. Find the section's outer element and its class, for example `<section class="features">`.
2. Click the elements **inside** the section, one at a time. For each one, note in the Styles panel which properties control **layout**:
   - `display`, `grid-template-columns`, `flex-direction`, `justify-content`, `align-items`
   - `text-align: center`
   - `max-width`, `margin: 0 auto`
3. Find those same rules in your `<style>` tag.

**Done when:** you can point to the CSS rules that make the section look the way it does now.

---

## Step 4: Build the new layout (30 min)

You won't delete the AI's CSS. You'll **override** it. Add your new rules at the **very bottom** of the `<style>` tag, using the **same selectors** as the AI. When two rules are equally specific, the one that comes later wins.

```css
/* ===== MY LAYOUT: features → ruled list ===== */
```

Start from the recipe for your option. Change the class names to match your HTML.

> **Which element gets the rule?** A grid arranges an element's **direct children**. Put the rule on the element whose children are the boxes in your sketch. AI pages often wrap a section's contents in a single `<div class="container">`. If yours does, target `.hero .container`, not `.hero`.

### A. Split

```css
.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(22rem, 100%), 1fr));
  gap: 3rem;
  align-items: center;
  text-align: left;
}
```

A split needs **two children** inside the section. If your hero has only text, add a second element: an image, the sign-up form moved up from below, or a short list of facts.

### B. Editorial

```css
.hero {
  text-align: left;
}

.hero h1 {
  font-size: clamp(2.5rem, 7vw, 5rem);
  max-width: 14ch;      /* a few words per line, set big */
}

.hero p {
  max-width: 45ch;      /* a narrow text column */
}
```

### C. Label + content

```css
.features {
  display: grid;
  gap: 2rem;
}

@media (width >= 48rem) {
  .features {
    grid-template-columns: 1fr 2fr;   /* heading left, content right */
  }
}
```

The section needs **two children**: the heading, and a wrapper around everything else. Add a `<div>` around the content if there isn't one.

### D. Ruled list

```css
.features-grid {
  display: grid;
  grid-template-columns: 1fr;   /* one item per row */
  gap: 0;
}

.feature-card {
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1.5rem;
  text-align: left;
  padding-block: 1.5rem;
  border-bottom: 1px solid currentColor;
  /* remove the card look */
  background: none;
  box-shadow: none;
  border-radius: 0;
}
```

The `3rem` column holds the icon or a number. Put the icon in its own column so the text lines up.

### E. Feature + supporting

```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  gap: 1.5rem;
}

@media (width >= 48rem) {
  .feature-card:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }
}
```

Make the first card the most important one: move it to the top of the HTML, and give it a larger heading or more text.

---

**If your new rule doesn't work:** inspect the element. In the Styles panel, a rule that's **crossed out** has lost to another rule. Look at which rule won. Usually the AI's selector is more specific (`.features .grid` beats `.grid`). Copy the AI's exact selector into your rule.

**Done when:** at **1280px**, the section uses the pattern you chose, and it no longer looks like the AI default.

---

## Step 5: Check it on a phone (10 min)

1. Turn on DevTools device mode and set the width to **375px**.
2. Check that:
   - nothing scrolls sideways
   - text isn't squeezed into 3–4 words per line
   - the order still makes sense (heading first, then content)
3. Drag slowly from 375px to 1280px. Fix anything that breaks along the way.

**Done when:** your section looks intentional at **375px** and at **1280px**, and at every width in between.

---

## Step 6: Record your decision (5 min)

Take a screenshot of the section at 1280px and save it as `after/section-layout.png`. Then add this entry to the Decisions section of `DESIGN-LOG.md`:

```markdown
### Layout: [section]
- **What:** changed from [AI pattern] to [option]
- **Why:** my brief says "[feel word]" because [one sentence]
- **Verified:** checked at 375px and 1280px, no sideways scroll
- Screenshot: after/section-layout.png
```

Commit and push.

**Done when:** the entry is in your log and your work is pushed.

**You've finished the lesson.** 🎉

---

## Stretch challenges

Do these in any order.

**A. A second section.** Redesign another section with a **different** option from the menu. Two sections with the same pattern will look generic again.

**B. Few edges.** At 1280px, hold a ruler against the screen and count the distinct left edges where content starts, across the whole page. Get it down to **3 or fewer** by giving every section the same container and left-aligning paragraphs.

**C. One focal point.** Does your hero have two buttons with equal weight? Make one the primary button and turn the other into a text link.

**D. Container query.** Make one card or list item change its layout based on its **own** width, not the screen's:

```css
.feature-card-wrapper { container-type: inline-size; }

@container (width >= 24rem) {
  .feature-card { grid-template-columns: 4rem 1fr; }
}
```

A container query can only style the container's **children**, so you may need to add a wrapper `<div>` in the HTML. The assignment requires one container query, so this one is worth doing.

**E. Ask for options, not code.** Paste your brief and your page's section list into an AI tool:

```
Here is my design brief and my page's sections. Propose 3 different
layouts for my [section], using only these patterns: split, editorial,
label + content, ruled list, feature + supporting. For each, describe
it at 375px and 1280px in words, and explain how it fits my brief.
No code.
```

Do you agree with its choice? Log the prompt in your design log.

---

## Quick reference

| Pattern | Core CSS |
|:--|:--|
| Container | `width: min(100% - 2rem, 72rem); margin-inline: auto` |
| Card grid | `repeat(auto-fit, minmax(min(18rem, 100%), 1fr))` |
| Split | `repeat(auto-fit, minmax(min(22rem, 100%), 1fr))` |
| Label + content / sidebar | `grid-template-columns: 1fr 2fr` inside a media query |
| Stack | `display: flex; flex-direction: column; gap` |
| Cluster | `display: flex; flex-wrap: wrap; gap` |
| Fluid size | `clamp(min, preferred, max)` |

## After Class

- Continue [Fix the AI Page]: Step 4 (tokens) and Step 5 (redesign the rest of the page). Due Thursday, Nov 12.

## Additional Resources

- [Every Layout](https://every-layout.dev): layout primitives explained brilliantly
- [MDN: Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [MDN: clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [CSS Grid Garden](https://cssgridgarden.com), a game for practicing grid

[Fix the AI Page]: ../assignments/fix-the-ai-page.md
