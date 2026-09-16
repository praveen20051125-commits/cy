# Treasure Hunt — College Symposium Website

# cy

A clean, mobile-first Treasure Hunt microsite. Participants scan a QR code,
open the site on their phones, and tap the **(i)** icon on any question card
to reveal that question's hint.

---

## 1. Edit the content (the only file you need)

All editable content lives in **`src/data/treasureHunt.ts`**:

- `collegeName` — the college name at the top of the page
- `collegeShortName`, `symposium`, `year`, `department`, `tagline`, `facts`
- `questions` — the list of questions. Every question has its own `hint`.

```ts
export const questions: TreasureQuestion[] = [
  {
    id: 1,                                   // unique number for each question
    question: "Your question goes here.",
    hint: "The hint for this question goes here.",
  },
  // copy/paste the block above to add more questions
];
```

- **Add a question:** copy a block from `{` to `}` and paste it below with the next `id`.
- **Remove a question:** delete its whole block.
- **Change a hint:** edit the text after `hint:`.

The site title / link-preview text is in `index.html` (`<title>` and the
`description` / `og:` tags) — update it once with your event name.

> Do not edit the component files unless you want to change the design.

---

## 2. Run locally

```bash
npm install
npm run dev
```

Open the printed URL (usually `http://localhost:5173`) in your browser.

---

## 3. Publish the site & get your fixed URL

The site is a plain static build, so any static host works:

### Vercel (easiest)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Click **Deploy**.
4. You get a fixed URL like `https://your-project.vercel.app`
   (you can rename it in **Project Settings → Domains**, or attach your own domain).

### Netlify
1. Push to GitHub, then go to [app.netlify.com](https://app.netlify.com) →
   **Add new site → Import an existing project**.
2. Build command: `npm run build` · Publish directory: `dist`.

### GitHub Pages
Build with `npm run build`, then publish the `dist/` folder
(e.g. with the `gh-pages` package).

The URL **never changes** once deployed — every QR code you print stays valid,
and you can update questions/hints anytime by editing
`src/data/treasureHunt.ts` and redeploying.

---

## 4. Generate the QR code

1. Copy your deployed URL (e.g. `https://your-project.vercel.app`).
2. Paste it into any QR generator, e.g.
   [qr-code-generator.com](https://www.qr-code-generator.com/),
   [qrcode.show](https://qrcode.show/), or the built-in one in Canva.
3. Download the QR image and add it to your symposium posters.

Scanning the QR code opens the Treasure Hunt site directly — no login or
registration required.

---

## Tech stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · Lucide icons
