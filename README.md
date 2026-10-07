# Pitter Patter Studio — Standalone Website

A clean, modern, responsive one-page website for a children's play and early learning center. Built entirely with **standard, vanilla web technologies (HTML, CSS, and Vanilla JavaScript)** with **zero frameworks, zero build steps, and zero external backend dependencies**.

---

## 🚀 Free 1-Minute Deployment on GitHub Pages

1. **Create a GitHub Repository**:
   - Create a new repository on [GitHub.com](https://github.com) (e.g. `pitter-patter-studio`).
2. **Upload / Push the Files**:
   - Upload `index.html`, `style.css`, `script.js`, and the `images/` folder directly to the root of your repository.
3. **Enable GitHub Pages**:
   - In your repository, click **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &gt; **Branch**, select `main` (or `master`) and folder `/(root)`.
   - Click **Save**.
4. **Done!** Your website is now live at `https://<your-username>.github.io/<repo-name>/` with free SSL/HTTPS!

---

## 🎨 Central Control Panel: Customizing Colors & Fonts

At the very top of `style.css`, you will find a dedicated `:root` configuration block:

```css
:root {
  /* 🎨 BRAND COLORS (From Brand PDF) */
  --color-rain-blue: #4F9CF8;          /* 🔵 Primary Brand Blue */
  --color-wet-siana: #B8433C;          /* 🔴 Wet Land Siana (Earthy Terracotta) */
  --color-new-green: #48BF7B;          /* 🟢 New Grow Green (Fresh Leaf Green) */
  --color-charcoal: #1E232B;           /* Dark heading color */
  --color-canvas-bg: #F8FAFC;          /* Clean off-white background */

  /* 🔤 GLOBAL FONT SWITCHING CONFIGURATION */
  --font-heading: 'Barlow Condensed', 'Myriad Pro Condensed', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-script: 'Caveat', cursive;    /* Tagline script "learn play explore" */
}
```

### How to Switch Fonts Globally:
1. Go to [Google Fonts](https://fonts.google.com) and pick your favorite fonts.
2. In `style.css`, update the `@import` URL on line 11.
3. Update `--font-heading` or `--font-body` with the new font name. That’s it! The whole site updates instantly.

---

## 🖼️ How to Swap the Logo & Media

In `index.html`, look for the following comment:

```html
<!-- 🔴 CHANGE YOUR LOGO PATH BELOW THIS LINE 🔴 -->
<a href="#" class="brand-link">
  <img src="images/logo.svg" alt="Pitter Patter Studio" class="brand-logo-img">
</a>
<!-- 🔴 END OF LOGO 🔴 -->
```

Simply replace `images/logo.svg` with your own image path (e.g. `images/my-logo.png`).

---

## 📁 File Structure

```text
├── index.html       # Complete semantic, standalone HTML webpage
├── style.css        # Pure CSS with :root Central Control Panel (no Tailwind)
├── script.js        # Pure Vanilla JavaScript (no React, no jQuery)
├── images/
│   ├── logo.svg       # Brand vector logo (Pitter Patter Studio + Tagline)
│   └── logo-mark.svg  # Curled "O" smiling character mark
└── README.md        # Documentation and deployment guide
```
