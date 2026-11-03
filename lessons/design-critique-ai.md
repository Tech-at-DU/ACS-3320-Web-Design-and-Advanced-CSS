# Critique & AI as a Design Assistant

AI can generate a complete, working landing page in seconds. It will look... fine. Generic. A lot like every other AI-generated page. The skill that's becoming more valuable is being able to **look at a design, say precisely what's wrong, and direct a fix**, whether you write the fix yourself or prompt an AI to do it.

This lesson gives you a repeatable critique process and a set of prompting techniques for getting AI tools past their default output.

## Why you should know this

- Teams increasingly use AI to generate first drafts of UI. Someone has to judge those drafts, and that someone is often a developer, not a designer.
- "Make it look better" is a useless prompt and a useless code review comment. "The card title and body are the same size and weight, so there's no hierarchy" is useful to a person or a model.
- Design critique is a common part of front-end interviews ("What would you improve about this page?").

## Learning Objectives

1. Critique a page with the 7-pass checklist
2. Write feedback as **Observation → Impact → Fix**
3. Write a design brief that describes mood, audience, and constraints
4. Use prompting techniques that move AI output away from its defaults
5. Verify AI output instead of trusting it
6. Keep a design log of decisions

---

## Part 1: The 7-Pass Critique

Don't try to see everything at once. Make seven quick passes, each looking for one kind of problem.

| Pass | Ask | Tools |
|:--|:--|:--|
| 1. **Squint** | What do I see first, second, third? Is that the right order? | Squint, or `body { filter: blur(4px) }` |
| 2. **Alignment** | How many vertical edges? Does anything almost line up but not quite? | DevTools grid overlay, outlines |
| 3. **Spacing** | Are values on a scale? Is space inside groups smaller than between them? | DevTools computed styles |
| 4. **Type** | How many sizes, weights, families? Body line length? Line height? | DevTools, count them |
| 5. **Color** | How many colors? Does each one mean something? Does contrast pass? | DevTools contrast picker, Lighthouse |
| 6. **States & access** | Tab through everything. Visible focus? Hover/disabled states? Works at 200% zoom? Reduced motion? | Keyboard, zoom, DevTools Rendering panel |
| 7. **Responsive** | Does it hold up at 320, 768, and 1440px? | Device mode, drag slowly |

### Writing it down: Observation → Impact → Fix

Every critique point has three parts:

> **Observation:** what you see, as a fact. No opinions.
> **Impact:** why it matters to the *user*.
> **Fix:** a specific change, using the formula vocabulary.

| ❌ Vague | ✅ Useful |
|:--|:--|
| "The hero looks bad." | **O:** The hero headline is white on a light purple gradient (2.1:1). **I:** Hard to read, fails WCAG AA. **F:** Darken the gradient to L ≤ 0.45 or switch the text to `--color-fg`. |
| "Too cluttered." | **O:** Section padding is 16px, the same as the gap between cards. **I:** Sections blur together, and there's no sense of grouping. **F:** Section padding to `--space-3xl`, card gap `--space-lg`. |
| "Fonts are off." | **O:** 9 different font sizes on the page, from 13px to 54px. **I:** No clear hierarchy, and it looks inconsistent. **F:** Map everything to the 1.25 type scale and use 5 sizes. |

Critique the **work**, not the person. Start with one thing that works well.

### Practice: Find the Problems (25 min)

**1. Fernwood Community Garden (as a class or in pairs, 15 min)**

Open [critique-sample/index.html](critique-sample/index.html) in your browser. (Clone or download the course repo, then open the file. GitHub won't render it.) This page has **at least 3 problems for every one of the 7 passes**.

Work through the passes **in order**, spending about 2 minutes on each. Write each problem you find as Observation → Impact → Fix. Use the tools in the table: DevTools, the contrast picker, the Tab key, and device mode.

Then open the answer key below and compare. What did you miss? Which pass found the most problems?

<details>
<summary><strong>Answer key: Fernwood Community Garden</strong> (try first!)</summary>

**1. Squint**
- The red script "Grow Together" is the loudest thing on the page, but the main job is reserving a plot.
- Three equally loud buttons (green, orange, purple) compete. There's no primary action.
- The tagline is a long paragraph in ALL CAPS, which is hard to read and shouts.
- Prices are the smallest text in the plot cards (13px), even though they're the key decision info.

**2. Alignment**
- At least 6 different left edges: header (1000px centered), hero (centered text), about (60px padding), plots (120px padding), workshops (900px centered), footer (30px padding).
- Hero text, plot cards, and the signup form are centered; everything else is left-aligned.
- Plot card text is centered while the section heading above it is left-aligned.

**3. Spacing**
- `h2` has `margin: 30px 0`, the same space above and below, so headings float between sections.
- Plot cards have `padding: 24px` and `gap: 24px`, so space inside equals space between (breaks Inside < Between).
- Off-scale values everywhere: 6, 7, 10, 18, 22, 28, 45, 50, 70px.

**4. Type**
- **4 font families:** Arial, Georgia, Brush Script, Courier New.
- **12 font sizes:** 10, 11, 12, 13, 14, 15, 16, 17, 19, 26, 30, 64px.
- Body `line-height: 1.2` is too tight for paragraphs.
- The About paragraph has no `max-width`. At 1440px it runs well past 75 characters per line.
- Plot `h3` is `font-weight: normal`, so titles barely differ from body text.

**5. Color**
- White on yellow announcement bar: about **1.3:1**.
- About paragraph `#b0b0b0` on white: about **2.2:1**.
- Fine print `#ccc` on light purple: about **1.3:1**. Table headers `#bbb` on white: about **1.9:1**.
- White on orange buttons: about **2.4:1**. White on green: about **3.3:1**, failing at this size.
- **Red headings**: red usually means error or danger, and here it's used for normal headings.
- Green, orange, and purple buttons don't mean anything different. That's three accents and no system.

**6. States & Access**
- `outline: none` on links, buttons, and inputs, with no replacement. Keyboard users can't see focus.
- Hero buttons and "Subscribe" are `div`s with `onclick`. You can't Tab to them or activate them with a keyboard.
- Links have no underline and the same color as body text. You can't tell they're links.
- No hover states anywhere.
- Inputs have placeholders but no `<label>`s.
- "Composting 101" has **0 spots left** but its Sign up button is still enabled.
- Table buttons are 11px text with 3px padding, far below a 44px touch target.
- The announcement bar scrolls forever with no `prefers-reduced-motion` alternative.

**7. Responsive**
- `header { width: 1000px }`, `.workshops` and `table { width: 900px }` all overflow on phones.
- The plot grid is `repeat(4, 230px)` plus 120px padding, so it needs about 1230px and scrolls horizontally on most laptops.
- `nav { white-space: nowrap }`: six links won't wrap.
- `.announce { white-space: nowrap }` plus the animation causes horizontal overflow.

</details>

**2. Real sites (10 min, pick one)**

Real sites are messier: problems are mixed together and there's no answer key. Run the 7 passes and see how many you can find.

| Site | What it's good for |
|:--|:--|
| [W3C BAD demo: "before" version](https://www.w3.org/WAI/demos/bad/before/home.html) | A site built badly **on purpose** by the W3C to teach accessibility. Strong on passes 5–6. When you're done, compare it with the [fixed version](https://www.w3.org/WAI/demos/bad/after/home.html). W3C's own reports on both are linked from the demo. |
| [Arngren.net](https://arngren.net) | A real Norwegian store famous for extreme density. Great for passes 1–4: try the squint test and count edges. |
| [User Inyerface](https://userinyerface.com) | A game built to be frustrating on purpose. Every UI convention is broken. Good for pass 6. Try to fill out the form, then list every state and convention it breaks. |


---

## Part 2: Recognizing the AI Default

Ask most AI tools for "a modern landing page" and you'll get something like this:

- Inter or system sans-serif everywhere
- Purple/indigo/blue gradient hero with centered white text
- Headline + subhead + two buttons, centered
- Three-column "features" grid of rounded cards with a soft shadow and an emoji or icon
- Testimonial cards, a pricing table, a gradient call-to-action
- Everything rounded (`border-radius: 12px`+), everything with a shadow
- Lots of near-identical grays, spacing that's *almost* consistent

None of it is wrong, exactly. But it's **average**: literally the average of the training data. If your product should feel different, you have to ask for something different, specifically.

AI output also has common **quality** problems you should check for every time:

- Low-contrast gray text and text on gradients
- `outline: none` with no replacement focus style
- Missing hover, focus, disabled, and empty states
- Off-scale spacing and font sizes (`13px`, `15px`, `22px`...)
- Fixed widths that overflow on mobile
- Animations with no `prefers-reduced-motion` alternative
- `div`s with click handlers instead of `button`s

---

## Part 3: Prompting for Design

### Technique 1: Write a design brief, not a request

A one-line request gets the default. A brief gets a design.

```
Product:     A blogging app for people who write long-form essays
Audience:    Writers, 25–60, who find most editors distracting
Job:         Write for 2 hours without thinking about the interface
Feel:        Calm, focused, uncluttered.
             It should feel like a good paper notebook, not a dashboard.
Avoid:       Gradients, cards, drop shadows, icons where text works, purple,
             centered layouts, more than one accent color
Constraints: Serif for the writing area, sans for UI chrome.
             Use my tokens (below). The text column is max 65ch.
Output:      First, a written design spec: type choices, color roles,
             spacing, layout at 375px and 1280px, and what makes it
             feel calm. NO CODE yet.

[paste your tokens]
```

Why each part matters:

- **Job** gives the AI (and you) a way to decide what's most important.
- **Feel** with an **analogy from outside software** ("a paper notebook," "airport signage," "a field guide," "a museum placard") pulls the output away from the average web page. This is the single most effective technique.
- **Avoid** names the defaults so they don't sneak back in.
- **Constraints** turn taste into rules the model can follow.
- **Spec first, code second.** Reviewing and changing a written spec is fast. Changing 300 lines of generated CSS is slow.

### Technique 2: Name the defaults and ban them

Models drift back toward the average, so be blunt:

```
Do not use: Inter, gradients, rounded cards with shadows, emoji,
a centered hero with two buttons, or a 3-column feature grid.
If you're about to use one of these, choose something else and tell me what.
```

### Technique 3: Hard constraints create distinctive design

Constraints force choices the model wouldn't make on its own. Try one or two:

- "Only two colors: near-black and one accent. Everything else comes from type and space."
- "No `border-radius` anywhere. Separate sections with 1px rules, not boxes."
- "Monospace font only."
- "No cards. Use whitespace and alignment to group content."
- "Asymmetric layout: content starts at column 3 of a 12-column grid."
- "Type does the work: no icons, no illustrations."

### Technique 4: Borrow a style with concrete traits

Name a design style **and** list its traits. The name alone is often too vague.

| Style | Traits to list in your prompt |
|:--|:--|
| Swiss / International | Strict grid, flush-left ragged-right text, big sans headings, lots of whitespace, red + black + white |
| Editorial / magazine | Serif headings, multi-column text, drop caps, thin horizontal rules, pull quotes |
| Brutalist | System or mono fonts, visible borders, no radius, no shadows, raw HTML feel, high contrast |
| Neo-brutalist | Thick black borders, hard offset shadows (`4px 4px 0 black`), flat bright fills |
| Japanese minimal | Huge whitespace, small type, muted earthy colors, thin lines, asymmetry |
| Terminal / dev tool | Mono font, dark background, one bright accent, dense info, keyboard hints |

### Technique 5: Diverge, then converge

```
Give me 3 design directions for this brief. Make them genuinely different:
1. The safe, conventional option
2. An editorial / print-inspired option
3. Something a typical SaaS site would never do
For each: a 3-sentence description, a font pairing, an accent color in OKLCH,
and the one layout idea that defines it.
```

Pick one (or combine two) and **write down why** in your design log. That decision is your design work.

### Technique 6: Iterate with design vocabulary

Once you have a draft, use the formula language. One change per prompt works better than five.

| ❌ | ✅ |
|:--|:--|
| "Make it pop" | "Increase contrast between the h1 and body: h1 to `--font-size-3xl`, weight 700" |
| "Too busy" | "Remove the shadows from cards. Group with spacing only: inside `--space-md`, between `--space-xl`" |
| "Make it more professional" | "Reduce to 5 font sizes from my scale. Replace all grays with my neutral ramp" |
| "Fix mobile" | "At 375px the feature grid overflows. Use `repeat(auto-fit, minmax(min(16rem, 100%), 1fr))`" |

### Technique 7: Show, don't tell

- **Attach a screenshot** of your current page when asking for critique. Models can describe hierarchy and alignment from an image much better than from code.
- **Attach a reference** you like and say what to take from it: "Use the spacing and type hierarchy from this screenshot, not its colors."
- **Sketch it.** A photo of a 30-second pencil sketch beats a paragraph of layout description.

### Technique 8: Make the AI critique itself

```
Review the page you just generated against this checklist:
[paste the 7 passes]
List every problem as Observation → Impact → Fix. Don't fix anything yet.
```

Then **you** choose which fixes to apply.

### Technique 9: Keep your tokens in a file, not in the chat

Long conversations drift. Keep your tokens and design brief in files in your repo and paste them in (or attach them) at the start of each session. This also means your design decisions are versioned in git.

---

## Part 4: Verify Everything

AI is confident and frequently wrong about visual things it can't measure. **Never** submit AI output without checking:

| Claim | How to verify |
|:--|:--|
| "This meets WCAG AA" | DevTools contrast picker, Lighthouse |
| "This is responsive" | Drag 320 → 1440px, 200% zoom |
| "Focus states are included" | Tab through the page with the keyboard |
| "Respects reduced motion" | DevTools → Rendering → emulate `prefers-reduced-motion: reduce` |
| "Uses your tokens" | Search the CSS for `px`, `#`, `rgb(` |
| "Semantic HTML" | DevTools Accessibility tree; can you reach every control with Tab? |

And **you must be able to explain every line** of CSS you submit. If you can't, either learn it or remove it.

---

## Part 5: The Design Log

For every assignment in this course, you keep a short [Design Log](../assignments/design-log.md). It records:

- The decisions you made and **which formula or critique point** each one came from
- The AI prompts you used, what you **kept**, what you **rejected**, and why
- How you **verified** the result

The log is where your design thinking becomes visible. A polished page with no reasoning behind it earns less than a decent page with clear, justified decisions.

---

## In-class activity (75 min)

Today you'll start the [Fix the AI Page] assignment. You'll generate a generic page, critique it, then practice steering AI away from the generic look. By the end of class you'll have assignment Steps 1–3 mostly done.

| Round | Time | What you do | Techniques |
|:--|:--|:--|:--|
| 1. Generate | 10 min | Make your "before" page | — |
| 2. Critique | 20 min | Find what's wrong with it | 7 passes |
| 3. Brief | 15 min | Describe what it *should* be | 1, 2, 3, 9 |
| 4. Explore | 15 min | Try 3 directions, pick one, regenerate | 4, 5 |
| 5. Compare | 15 min | Judge the new version | 7, 8 |

Technique 6 (iterate with design vocabulary) is for after class, when you build your real "after" page.

### Round 1: Generate (10 min)

**Goal:** a generic AI page to work on.

1. Create a new repo for the assignment with a `before/` folder.
2. Pick a product from the list in [Step 1](../assignments/fix-the-ai-page.md#step-1-generate-the-before-page) of the assignment.
3. Paste the Step 1 prompt into any AI tool **exactly as written**, filling in your product. Don't add anything, and don't regenerate.
4. Save the result as `before/index.html` and open it in your browser.
5. Take screenshots at **375px** and **1280px** wide (DevTools device mode). Save them as `before/mobile.png` and `before/desktop.png`.

**Done when:** `before/` has `index.html` and two screenshots.

### Round 2: Critique (20 min)

**Goal:** a list of what's wrong, in your own words. **No AI in this round.**

1. Create `CRITIQUE.md`. At the top, write **2 things that work well** on the page.
2. Run the 7 passes from [Part 1](#part-1-the-7-pass-critique), **in order**, about 2 minutes each. Write each problem as Observation → Impact → Fix.
3. Under a heading `## AI Defaults`, list every default from [Part 2](#part-2-recognizing-the-ai-default) you can spot.
4. **Partner check (last 4 min):** show your page to the person next to you. They add **2 problems** you missed, marked `(found by partner)`.

**Done when:** `CRITIQUE.md` has 8+ problems and an AI Defaults list. (You'll finish the full 12+ after class.)

### Round 3: Brief (15 min)

**Goal:** a description of what the page *should* feel like, before anyone writes code.

Use **Techniques 1, 2, 3, and 9**:

1. Create `DESIGN-LOG.md` from the [Design Log template](../assignments/design-log.md). Fill in the **Brief** section (Technique 1):
   - Product, audience, and the **one job** a visitor should do
   - **Feel:** 3 adjectives + "it should feel like ___", using something **outside software**
2. Add an **Avoid** line (Technique 2): copy at least 4 items from your `## AI Defaults` list.
3. Add a **Constraints** line (Technique 3): pick at least 2 hard constraints from the Technique 3 list, or invent your own.
4. Keep the brief in the file, not just in the chat (Technique 9). You'll paste it into every AI conversation from now on.
5. Paste the full brief into your AI tool and end with: *"Output a written design spec only: type, color roles, spacing, and layout at 375px and 1280px. No code."*
6. Read the spec. Does it follow your Avoid and Constraints lines? If not, tell it which line it broke and ask again.

**Done when:** `DESIGN-LOG.md` has a complete brief, and you have a spec that respects it.

### Round 4: Explore (15 min)

**Goal:** see more than one possibility, then make a real choice.

Use **Techniques 4 and 5**:

1. Pick a style from the [Technique 4 table](#technique-4-borrow-a-style-with-concrete-traits) that could fit your brief.
2. Send this (Technique 5), with your brief pasted above it:
   ```
   Give me 3 design directions for this brief. Make them genuinely different:
   1. The safe, conventional option
   2. A [style from step 1] option. Use these traits: [paste its traits]
   3. Something a typical site for this product would never do
   For each: 3 sentences, a font pairing, an accent color in OKLCH,
   and the one layout idea that defines it. No code.
   ```
3. **Choose one direction**, or combine two. In `DESIGN-LOG.md`, add a decision entry: which one, and **why** it fits your brief's job and feel.
4. Ask the AI to build it: *"Build direction [N] as a single HTML file with embedded CSS. Follow the brief's Avoid and Constraints lines."*
5. Save it as `experiments/regenerated.html`. This is **not** your "after" page; you'll build that yourself.

**Done when:** your log records a chosen direction and why, and `experiments/regenerated.html` exists.

### Round 5: Compare (15 min)

**Goal:** judge the AI's second attempt as critically as its first.

Use **Techniques 7 and 8**:

1. Open `before/index.html` and `experiments/regenerated.html` side by side at 1280px.
2. Take a screenshot of the regenerated page. Attach it (Technique 7) and ask the AI to critique its own work (Technique 8):
   ```
   Here is a screenshot of the page you built, and my brief.
   Review it with these passes: squint, alignment, spacing, type, color,
   states & accessibility, responsive. List problems as
   Observation → Impact → Fix. Also list anything that breaks my brief.
   Don't fix anything.
   ```
3. Check at least **2 of its claims yourself** (contrast in DevTools, press Tab, drag to 375px). Was the AI right?
4. In `DESIGN-LOG.md`, under **AI Use**, answer:
   - What got better compared with the "before" page?
   - Which AI defaults crept back in anyway?
   - What did the AI's self-critique miss, or get wrong?
5. **Share:** each table shows its before and regenerated pages to the class (1 minute per table). Which brief made the biggest difference?

**Done when:** your log has the three answers from step 4.

## After Class

- Finish `CRITIQUE.md`: **12+ problems** covering all 7 passes, with 3+ measurements (assignment Step 2).
- Copy `before/index.html` to `after/index.html`. Next class you'll fix its layout **by hand**.
- When you start refining your "after" page, use **Technique 6**: one change per prompt, in design vocabulary.
- Keep logging in `DESIGN-LOG.md` as you go.

## Additional Resources

- [Refactoring UI](https://www.refactoringui.com): design tactics for developers, very formula-driven
- [Laws of UX](https://lawsofux.com): short, visual summaries of UX principles
- [Nielsen Norman Group: 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Design Formulas cheat sheet](design-formulas.md)

[Fix the AI Page]: ../assignments/fix-the-ai-page.md
