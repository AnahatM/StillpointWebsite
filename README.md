<div align="center">

# Stillpoint — Marketing Website

**Landing page for [Stillpoint](REPLACE_WITH_GITHUB_URL), a local-first desktop wellness &amp; productivity companion built around real-time, on-device posture coaching.**

Sit better. Focus deeper. Stay healthy at your desk.

`Vite` · `React` · `TypeScript` · `Tailwind CSS v4`

</div>

---

This repository contains **only the marketing website** — a fast, static, single-page site whose job is to explain Stillpoint and send visitors to the right download. It has no backend and builds to plain static files you can host anywhere.

## ✨ Highlights

- ⚡️ **Static & fast** — Vite + React, ships as static HTML/CSS/JS. No server required.
- 🎨 **Distinctive design** — a dark "calibration instrument" aesthetic: deep navy, teal accent, sharp corners, viewfinder framing, and an animated pose-landmark hero.
- 📱 **Fully responsive** — mobile → desktop, with a real mobile menu.
- ♿️ **Accessible** — semantic landmarks, skip link, keyboard-friendly FAQ, visible focus rings, alt text, and `prefers-reduced-motion` support.
- 🔍 **SEO-ready** — title, meta description, Open Graph & Twitter cards, theme color, and an SVG favicon.
- 🪶 **Lightweight animations** — CSS keyframes + a tiny `IntersectionObserver` reveal hook. No animation libraries.

## 🚀 Getting started

> Requires **Node.js 18+** (Node 20+ recommended).

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build static files to /dist
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## 🗂 Project structure

```
.
├─ public/
│  ├─ favicon.svg            # Stillpoint mark (viewfinder + still-point node)
│  └─ screenshots/           # ← drop real app screenshots here
├─ src/
│  ├─ components/
│  │  ├─ Header.tsx          # sticky nav + mobile menu
│  │  ├─ Hero.tsx            # headline, CTAs, trust chips, animated mockup
│  │  ├─ PostureSpotlight.tsx   # primary feature (posture monitoring)
│  │  ├─ Features.tsx        # focus / wellness / analytics / themes / config
│  │  ├─ HowItWorks.tsx      # 3-step explainer
│  │  ├─ Privacy.tsx         # local-first / privacy section
│  │  ├─ Download.tsx        # platform cards + requirements + signing note
│  │  ├─ FAQ.tsx             # accessible accordion
│  │  ├─ Footer.tsx
│  │  ├─ icons/              # inline SVG icon set
│  │  └─ ui/                 # Logo, buttons, ScreenshotFrame, overlays, etc.
│  ├─ hooks/useReveal.ts     # scroll-reveal via IntersectionObserver
│  ├─ lib/site.ts            # ← all editable links & config live here
│  ├─ index.css              # design tokens (Tailwind v4 @theme) + utilities
│  └─ App.tsx                # page composition
└─ index.html                # SEO / meta / fonts
```

## 🔧 What to replace (placeholders)

Everything you need to personalize is centralized. Search the codebase for **`REPLACE_WITH_`** to find every spot.

| Placeholder | Where | What to put |
| --- | --- | --- |
| `REPLACE_WITH_GITHUB_URL` | `src/lib/site.ts`, `README.md` | Your public GitHub repo URL |
| `REPLACE_WITH_GITHUB_RELEASE_URL` | `src/lib/site.ts` (`RELEASES_URL`, `DOWNLOADS.*`) | GitHub Releases page + per-platform asset links (`.exe`, `.dmg`, `.AppImage`) |
| `REPLACE_WITH_CONTACT_EMAIL` | `src/lib/site.ts` | Optional contact email |
| `APP_VERSION` | `src/lib/site.ts` | Current release version label (e.g. `v1.0.0`) |
| `REPLACE_WITH_SITE_URL` | `index.html` | The site's public URL (used by canonical + OG/Twitter tags) |
| `og-image.png` | `public/` | A 1200×630 social share image (referenced by OG/Twitter meta) |

### 🖼 Adding real screenshots

1. Drop your images into **`public/screenshots/`** (e.g. `dashboard.png`, `focus.png`, `analytics.png`).
2. In the relevant component, pass the path to `<ScreenshotFrame>`:

   ```tsx
   // Before (labelled placeholder):
   <ScreenshotFrame label="Dashboard" ratio="16 / 11" />

   // After (real image):
   <ScreenshotFrame
     label="Dashboard"
     src="/screenshots/dashboard.png"
     alt="Stillpoint dashboard showing the live posture score and skeleton overlay"
     ratio="16 / 11"
   />
   ```

   Screenshot placeholders live in: `Hero.tsx` (Dashboard) and `Features.tsx` (Focus, Analytics). The placeholder automatically disappears once `src` is provided.

## 🌐 Deploying

The build output in `/dist` is fully static. Pick any host:

### Netlify / Vercel / Cloudflare Pages
- **Build command:** `npm run build`
- **Output / publish directory:** `dist`
- No environment variables needed. Leave `base` as `'/'` in `vite.config.ts`.

### GitHub Pages
- For a **project site** (`username.github.io/your-repo`), set `base: '/your-repo/'` in `vite.config.ts`, then deploy the `dist` folder (e.g. via GitHub Actions or the `gh-pages` branch).
- For a **user/organization site** or a **custom domain**, keep `base: '/'`.
- GitHub Pages note: add an empty `.nojekyll` file to `dist` (or your Pages action) so asset folders starting with `_` are served correctly.

## 🛠 Tech notes

- **Tailwind CSS v4** via `@tailwindcss/vite` — design tokens are defined CSS-first in `src/index.css` under `@theme` (colors, fonts, and the `--radius: 0` that enforces sharp corners).
- **Fonts:** Plus Jakarta Sans (display/body) + JetBrains Mono (technical labels), loaded from Google Fonts in `index.html`.
- **React Compiler** is enabled (via the Vite Babel preset) for automatic memoization.

## 📄 License

Add your license of choice (the Stillpoint app is free & open-source), then reference it here.

---

<div align="center">
<sub>Made with on-device AI · Stillpoint</sub>
</div>
