# CSS Specificity

CSS specificity determines which styles apply to an element when multiple rules could be applied. Specificity is calculated based on the types of selectors used, and the rule with higher specificity overrides others with lower specificity. Here’s a breakdown of examples with explanations:

## Examples

### 1. Inline Styles (Highest Specificity)
```html
<div style="color: red;">This text will be red.</div>
```
**Explanation**: Inline styles have the highest specificity (higher than any selector), so `color: red` is applied directly to this element, overriding any external or internal CSS.

### 2. ID Selector
```css
#header {
  color: blue;
}
```
```html
<div id="header">This text will be blue.</div>
```
**Explanation**: ID selectors (`#header`) are highly specific and will override class, attribute, or tag selectors. They’re used sparingly due to their high specificity.

(Best practice: avoid id names for CSS, save these for JS.)

### 3. Class Selector vs. Tag Selector
```css
p {
  color: green;
}
.text {
  color: purple;
}
```
```html
<p class="text">This text will be purple.</p>
```
**Explanation**: Class selectors (`.text`) have higher specificity than tag selectors (`p`), so the `color: purple` from the `.text` class is applied, overriding the `color: green` from the `p` tag selector.

### 4. Attribute Selector with Class and Tag
```css
a[href] {
  color: orange;
}
a.button {
  color: pink;
}
```
```html
<a href="#" class="button">This link will be pink.</a>
```
**Explanation**: The combination of a class and tag (`a.button`) is more specific than just an attribute selector (`a[href]`), so `color: pink` overrides `color: orange`.

### 5. Combining Specificity with Descendant Selectors
```css
/* Less specific */
.section p {
  color: brown;
}

/* More specific */
.section .highlight p {
  color: black;
}
```
```html
<div class="section">
  <div class="highlight">
    <p>This text will be black.</p>
  </div>
</div>
```
**Explanation**: The rule `.section .highlight p` is more specific than `.section p`, so `color: black` takes precedence over `color: brown`.

### Specificity Order
1. Inline styles: `style=""` in HTML have the highest specificity.
2. IDs: `#id` (e.g., `#header`) are next.
3. Classes, attributes, and pseudo-classes: `.class`, `[type="text"]`, `:hover`.
4. Tag selectors: `p`, `div`, `span`.
   
Specificity helps CSS decide which styles to apply in case of conflicts, ensuring the most relevant styles override less specific ones.

Generally speaking more "detailed" selectors will have a higher specificity but, you must keep the rules in mind. For example consider the previous example.  

```CSS
div.highlight { ... }

.highlight { ... }

div .hightlight { ... }
```

1. **`div.highlight`** – This is the most specific because it combines a tag selector (`div`) and a class selector (`.highlight`). Specificity score: **0-1-1** (one class and one tag).

2. **`.highlight`** – This selector only has a class, so it's less specific than `div.highlight`. Specificity score: **0-1-0** (one class).

3. **`div .highlight`** – This is the least specific because it's a descendant selector, where `div` is an ancestor of `.highlight`. It only has a single class and a space-separated tag, so it has the lowest specificity among these. Specificity score: **0-1-1** (one class and one tag, but separated).

### Explanation
Even though `div .highlight` also has a class and tag, they are separated, which reduces the overall specificity compared to `div.highlight` where both are combined directly.

Last, order always matters! Rules that come later in your stylesheet will overwrite rules that came earlier with the same specificty!

Read about the [rules of specificity here](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). 

CSS specificity is scored based on the types of selectors used in a rule, according to a four-part system:

1. **Inline styles** (inside an element’s `style=""` attribute) score highest with **1-0-0-0**.
2. **ID selectors** (`#id`) score **0-1-0-0**.
3. **Class selectors** (`.class`), **attribute selectors** (`[type="text"]`), and **pseudo-classes** (`:hover`) score **0-0-1-0**.
4. **Tag selectors** (like `div`, `p`, `h1`) and **pseudo-elements** (`::before`) score lowest with **0-0-0-1**.

Add up the specificity scores for each part of the selector to determine the total score. Higher scores take precedence over lower ones.

Here are some specificity problems to solve! 

### Problem 1
Score the specificity of each selector and determine which one has the highest specificity.

1. `#header .nav-item.active`
2. `.header .nav-item.active:hover`
3. `ul li a.nav-link`

**Questions**:  
- Which selector is the most specific?
- What are the specificity scores for each selector?

### Problem 2
Determine the specificity scores and order the selectors from most to least specific.

1. `section .content p.title`
2. `#main .content`
3. `article[data-type="feature"] .highlight`
4. `div p span`

**Questions**:  
- Which selector will apply if there’s a conflict?
- What are the specificity scores for each selector?

### Problem 3
Score the specificity for these selectors, then determine which style would apply if each were targeting the same element.

1. `#primary-header`
2. `header .logo img`
3. `header.logo img`
4. `img.logo`

**Questions**:  
- Which rule will apply if there is a style conflict on an `<img>` element with a class of `logo` inside a header?
- What are the specificity scores for each selector?

### Problem 4
Analyze the specificity of these selectors and explain which one will take precedence.

1. `body .main-content #unique-section h2`
2. `#container .main-content h2`
3. `.main-content h2`
4. `h2`

**Questions**:  
- Which selector has the highest specificity and why?
- If all these selectors target the same `<h2>` element, which style will apply?

### Problem 5
Calculate the specificity scores and explain which style will be applied if all of these target the same element.

1. `a:focus`
2. `a.button:hover`
3. `#menu a.button:hover`
4. `nav .menu a.button:hover`

**Questions**:  
- What are the specificity scores for each selector?
- Which selector has the highest specificity?

### Problem 6
Each selector below targets a `p` element. Order them by specificity from highest to lowest, and explain why.

1. `.content p.special`
2. `#main p`
3. `body div p`
4. `p.special`
5. `#main .content p`

**Questions**:  
- What are the specificity scores?
- Which selector is the least specific, and why?

-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-

Here are the answers and explanations for each of the specificity problems.

---

### Problem 1
**Selectors**:
1. `#header .nav-item.active` → **0-1-2-0**
2. `.header .nav-item.active:hover` → **0-0-3-0**
3. `ul li a.nav-link` → **0-0-1-3**

**Answers**:
- Specificity scores:
  - `#header .nav-item.active`: **0-1-2-0**
  - `.header .nav-item.active:hover`: **0-0-3-0**
  - `ul li a.nav-link`: **0-0-1-3**
- **Most specific**: `#header .nav-item.active` (because of the ID selector).
  
---

### Problem 2
**Selectors**:
1. `section .content p.title` → **0-0-2-2**
2. `#main .content` → **0-1-1-0**
3. `article[data-type="feature"] .highlight` → **0-0-2-1**
4. `div p span` → **0-0-0-3**

**Answers**:
- Specificity scores:
  - `section .content p.title`: **0-0-2-2**
  - `#main .content`: **0-1-1-0**
  - `article[data-type="feature"] .highlight`: **0-0-2-1**
  - `div p span`: **0-0-0-3**
- **Order from most to least specific**:
  1. `#main .content` (has the highest specificity because of the ID selector).
  2. `section .content p.title`
  3. `article[data-type="feature"] .highlight`
  4. `div p span`

---

### Problem 3
**Selectors**:
1. `#primary-header` → **0-1-0-0**
2. `header .logo img` → **0-0-2-1**
3. `header.logo img` → **0-0-2-1**
4. `img.logo` → **0-0-1-1**

**Answers**:
- Specificity scores:
  - `#primary-header`: **0-1-0-0**
  - `header .logo img`: **0-0-2-1**
  - `header.logo img`: **0-0-2-1**
  - `img.logo`: **0-0-1-1**
- **Most specific**: `#primary-header` (because of the ID selector).
- If all target the same element, **`#primary-header`** will apply due to its highest specificity.

---

### Problem 4
**Selectors**:
1. `body .main-content #unique-section h2` → **0-1-2-1**
2. `#container .main-content h2` → **0-1-1-1**
3. `.main-content h2` → **0-0-1-1**
4. `h2` → **0-0-0-1**

**Answers**:
- Specificity scores:
  - `body .main-content #unique-section h2`: **0-1-2-1**
  - `#container .main-content h2`: **0-1-1-1**
  - `.main-content h2`: **0-0-1-1**
  - `h2`: **0-0-0-1**
- **Most specific**: `body .main-content #unique-section h2` because it has the most selectors and includes an ID.

---

### Problem 5
**Selectors**:
1. `a:focus` → **0-0-1-1**
2. `a.button:hover` → **0-0-2-1**
3. `#menu a.button:hover` → **0-1-2-1**
4. `nav .menu a.button:hover` → **0-0-3-1**

**Answers**:
- Specificity scores:
  - `a:focus`: **0-0-1-1**
  - `a.button:hover`: **0-0-2-1**
  - `#menu a.button:hover`: **0-1-2-1**
  - `nav .menu a.button:hover`: **0-0-3-1**
- **Most specific**: `#menu a.button:hover` due to the ID selector.

---

### Problem 6
**Selectors**:
1. `.content p.special` → **0-0-2-1**
2. `#main p` → **0-1-0-1**
3. `body div p` → **0-0-0-3**
4. `p.special` → **0-0-1-1**
5. `#main .content p` → **0-1-1-1**

**Answers**:
- Specificity scores:
  - `.content p.special`: **0-0-2-1**
  - `#main p`: **0-1-0-1**
  - `body div p`: **0-0-0-3**
  - `p.special`: **0-0-1-1**
  - `#main .content p`: **0-1-1-1**
- **Order from highest to lowest specificity**:
  1. `#main .content p`
  2. `#main p`
  3. `.content p.special`
  4. `p.special`
  5. `body div p`

The most specific is **`#main .content p`** due to the combination of ID, class, and tag selectors. The least specific is **`body div p`** with only tag selectors.
