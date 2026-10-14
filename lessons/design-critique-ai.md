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

## In-class activity (60 min)

**Round 1: Generate (10 min).** Use any AI tool with exactly this prompt:

```
Make a landing page for a neighborhood tool-lending library.
Single HTML file with embedded CSS. Make it look modern.
```

**Round 2: Critique (20 min).** In pairs, swap pages. Run the 7 passes on your partner's page. Write at least 8 Observation → Impact → Fix points. Count how many "AI defaults" from Part 2 you find.

**Round 3: Brief (15 min).** Write a full design brief for the same product using Technique 1. Use an analogy from outside software and at least two hard constraints.

**Round 4: Regenerate (15 min).** Run your brief. Compare the two pages side by side. What changed? What didn't? Share the most surprising result with the class.

## After Class

- Continue the [Fix the AI Page] assignment.
- Start your [Design Log](../assignments/design-log.md) for it.

## Additional Resources

- [Refactoring UI](https://www.refactoringui.com): design tactics for developers, very formula-driven
- [Laws of UX](https://lawsofux.com): short, visual summaries of UX principles
- [Nielsen Norman Group: 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Design Formulas cheat sheet](design-formulas.md)

[Fix the AI Page]: ../assignments/fix-the-ai-page.md
