# nucleus
A lightweight, mobile-first CSS framework focused on simplicity and speed.

![Nucleus Logo](demo/assets/nucleus.png)

# 🌌 Nucleus CSS

Think of it as **LEGO blocks for the web** 🧱.

---

## 🚀 Features
- 🔄 **Reset Layer** – makes all browsers behave consistently  
- 🧱 **12-Column Grid System** – build layouts like LEGO blocks  
- 📱 **Responsive by Default** – mobile, tablet, desktop covered  
- ⚡ **Lightweight** – no bloat, just clean CSS  

---

## 📦 Installation

Copy the `nucleus.css` file into your project and link it:

```html
<link rel="stylesheet" href="nucleus.css">
````

That’s it! No build tools, no config. Just drop it in.

---

## 🛠 Tutorial – Build Websites Like LEGO

Think of building a web page like building with LEGO:

1. **Container = LEGO baseplate**
   It holds everything together.

   ```html
   <div class="n-container"> ... </div>
   ```

   Or use `.n-container-fluid` if you want it to stretch across the whole screen.

2. **Row = LEGO row**
   Every set of blocks sits inside a row.

   ```html
   <div class="n-row"> ... </div>
   ```

3. **Column = LEGO block**
   Decide how many blocks each piece takes. The grid has **12 slots** per row.

   ```html
   <div class="n-col-6">Takes half the row</div>
   <div class="n-col-6">Takes the other half</div>
   ```

4. **Responsive = LEGO magic**
   Use special classes for tablets & phones.

   * `.n-col-md-*` for medium screens (tablets)
   * `.n-col-sm-*` for small screens (phones)

---

## 👀 Example

```html
<!-- Fixed container -->
<div class="n-container">
  <div class="n-row">
    <div class="n-col-4">.n-col-4</div>
    <div class="n-col-8">.n-col-8</div>
  </div>
</div>

<!-- Fluid container -->
<div class="n-container-fluid">
  <div class="n-row">
    <div class="n-col-6">.n-col-6</div>
    <div class="n-col-6">.n-col-6</div>
  </div>
</div>
```