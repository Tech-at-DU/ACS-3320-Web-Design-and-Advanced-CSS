# Fix and Redesign the AI Page

Your AI-generated page looks good at first glance. Look closer and you'll find low-contrast text, small inconsistencies, and a layout that looks like every other AI page.

Today has two parts:

1. **Fix:** use tools to find real problems, then fix them.
2. **Redesign:** give one section a layout that fits your design brief.

## How this works

- Work **at your own pace**, top to bottom. Each step ends with **Done when**.
- **Never edit `before/index.html`.** All changes go in `after/index.html`, so anyone can compare the two.
- Each part takes about **45 minutes**. If you finish early, do the **Stretch** challenges.
- Stuck for 10 minutes? Ask a classmate or your instructor.

## Setup (5 min)

1. Copy `before/index.html` to `after/index.html` (skip this if you already did it).
2. Open both files in Chrome, in two tabs.
3. Install the [WAVE extension](https://wave.webaim.org/extension/) for Chrome or Firefox. If you open your pages as files (the URL starts with `file://`), go to the extension's settings and turn on **Allow access to file URLs**.
4. In `CRITIQUE.md`, add this table at the bottom:

```markdown
## Fixes

| # | Problem | Where | Found with | Fix | Fixed? |
|:-:|:--|:--|:--|:--|:-:|
| 1 | | | | | |
```

**Done when:** both pages are open, WAVE is installed, and the table is in `CRITIQUE.md`.

---

## Part 1: Find and fix (45 min)

### Step 1: Get a baseline (5 min)

1. Open `before/index.html` and click the **WAVE** icon in the toolbar.
2. The **Summary** panel shows counts for **Errors**, **Contrast Errors**, and **Alerts**.
3. Write them at the top of your Fixes table: `WAVE before: 2 errors, 14 contrast errors, 6 alerts`

**Done when:** the before counts are recorded.

### Step 2: Find problems (15 min)

Use each tool below on `before/index.html`. Add every problem you find as a row in your Fixes table.

| Tool | How | What it finds |
|:--|:--|:--|
| **WAVE** | The **Details** tab lists every problem. Click one to jump to it on the page. The **Contrast** tab shows each failing color pair and its ratio. | Low contrast, missing labels, missing alt text, skipped heading levels |
| **Contrast checker** | Inspect any gray or light text → click the color swatch in the Styles panel. Look for the ✓ or ✗ next to "Contrast ratio". | Text below **4.5:1** (fails WCAG AA) |
| **CSS Overview** | DevTools → ⋮ menu → More tools → **CSS Overview** → Capture overview | Too many colors, too many font sizes, contrast issues |
| **Keyboard** | Click the address bar, then press **Tab** through the whole page. | Missing or invisible focus styles |
| **Your eyes** | Compare things that should match: all the buttons, all the cards, all the section headings. | Inconsistent padding, radius, sizes, and colors |

Common AI problems to look for:

- light gray text on white, or white text on a light gradient
- placeholder text too faint to read
- nearly identical colors that should be the same (`#6b7280` and `#64748b`)
- 10 or more different font sizes
- buttons or cards with slightly different padding or border-radius
- hover effects with no matching focus style
- Style inconsistencies. Hover states that that are different for similar elements. 

**Done when:** your table has at least **6 problems**, each with a **Where** (the selector or section) and a **Found with**.

### Step 3: Fix them (20 min)

Work through your table in `after/index.html`. For each problem:

1. Fix it in the CSS.
2. Check it with the same tool that found it.
3. Fill in the **Fix** column (for example, `color #9ca3af → #4b5563, now 7.1:1`) and mark it ✅.

Tips:

- **Contrast:** in WAVE's **Contrast** tab, click a contrast error and use the **lightness slider** to find the nearest color that passes. Copy that color into your CSS. You can also drag the DevTools color picker until the ✗ turns into ✓.
- **Too many colors or sizes:** pick one value and use it everywhere. Search the CSS for the others and replace them.
- **Focus:** add a style everyone can see:
  ```css
  a:focus-visible, button:focus-visible, input:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 3px;
  }
  ```

**Done when:** at least **6 rows** are marked ✅.

### Step 4: Measure again (5 min)

Run WAVE on `after/index.html`. Add the counts below the first line: `WAVE after: 0 errors, 0 contrast errors, 3 alerts`

**Done when:** **Errors** and **Contrast Errors** are both **0**. Alerts are warnings to review, not failures.

---

## Part 2: Redesign one section (45 min)

AI pages all use the same layouts: a centered hero and three equal cards with icons. Change one section so its layout fits your brief.

### Step 5: Choose (10 min)

1. Reread the **Feel** line of the brief in `DESIGN-LOG.md`.
2. Pick **one** section: the **hero** or the **features**.
3. Pick the layout that best matches your feel words. For more ideas, browse the [Layout Formulas](layout-formulas.md) page and its list of real sites.

| Layout | Looks like | Feels |
|:--|:--|:--|
| **Split** | Text on one side, image or form on the other | Direct, practical |
| **Editorial** | Big left-aligned headline, narrow text, lots of space | Calm, confident, bookish |
| **Label + content** | Heading in a narrow left column, content on the right | Organized, catalog-like |
| **Ruled list** | Rows separated by lines instead of cards | Plain, honest, no fluff |
| **Feature + supporting** | One big item, the others smaller beside it | Clear priority |

**Done when:** you can say: *"I'm changing my **[section]** to **[layout]** because my brief says **[feel word]**."*

### Step 6: Build it (25 min)

Add your rules at the **bottom** of the `<style>` tag. Copy the recipe for your layout, then change the class names to match your HTML.

```css
/* Split: put this on the element that holds the text and the image */
.hero .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(22rem, 100%), 1fr));
  gap: 3rem;
  align-items: center;
  text-align: left;
}

/* Editorial */
.hero { text-align: left; }
.hero h1 { font-size: clamp(2.5rem, 7vw, 5rem); max-width: 14ch; }
.hero p { max-width: 45ch; }

/* Label + content: the section's two children are the heading and a wrapper div */
@media (width >= 48rem) {
  .features .container { display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; }
}

/* Ruled list */
.features-grid { display: grid; grid-template-columns: 1fr; gap: 0; }
.feature-card {
  display: grid;
  grid-template-columns: 3rem 1fr;   /* icon | text */
  gap: 1.5rem;
  text-align: left;
  padding-block: 1.5rem;
  border-bottom: 1px solid currentColor;
  background: none; box-shadow: none; border-radius: 0;
}

/* Feature + supporting */
@media (width >= 48rem) {
  .feature-card:first-child { grid-column: span 2; grid-row: span 2; }
}
```

**If a rule doesn't work:** inspect the element. A crossed-out rule in the Styles panel has lost to a more specific one. Copy the winning rule's selector into your rule.

**Done when:** at **1280px**, the section uses your new layout and no longer looks like the AI default.

### Step 7: Check and record (10 min)

1. In device mode, check **375px**. Nothing should scroll sideways or be squeezed. Drag up to 1280px and fix anything that breaks.
2. Save screenshots of the full page as `after/mobile.png` (375px) and `after/desktop.png` (1280px).
3. Add an entry to `DESIGN-LOG.md`:
   ```markdown
   ### Layout: [section]
   - **What:** [AI layout] → [new layout]
   - **Why:** my brief says "[feel word]"
   - **Verified:** checked at 375px and 1280px
   ```
4. Commit and push.

**Done when:** your screenshots and log entry are pushed. **You're finished.** 🎉

---

## Stretch challenges

- **More fixes:** review every WAVE **Alert** and fix the ones that are real problems, then fix **4 more** consistency problems.
- **Second section:** redesign another section with a **different** layout.
- **Container query:** make a card change its layout based on its own width. The assignment requires one.
  ```css
  .card-wrapper { container-type: inline-size; }
  @container (width >= 24rem) { .card { display: grid; grid-template-columns: 4rem 1fr; } }
  ```
- **One focal point:** if the hero has two equal buttons, make one primary and turn the other into a text link.

## After Class

Continue [Fix the AI Page]: Step 4 (tokens) and Step 5 (redesign the rest of the page). Due Thursday, Nov 12.

## Resources

- [WAVE browser extension](https://wave.webaim.org/extension/)
- [Layout Formulas](layout-formulas.md): patterns, few edges, focal point, `clamp()`, container queries
- [Chrome DevTools: CSS Overview](https://developer.chrome.com/docs/devtools/css-overview)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Every Layout](https://every-layout.dev)
- [MDN: Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)

[Fix the AI Page]: ../assignments/fix-the-ai-page.md
