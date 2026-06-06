# KALBİM — Landing Page

A faithful, production-ready reproduction of the **KALBİM — Kadın Liderliği ve Bilinçlendirme Merkezi** landing page, built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## ✨ Highlights

- **Pixel-faithful** recreation of every section: header, hero, impact stats, programs, community circles, testimonials, blog & resources, final CTA, and footer.
- **Fully responsive** — mobile, tablet, and desktop layouts.
- **Animations** — staggered hero load-in, scroll-triggered reveals, floating badges, slow-rotating decorative rings, and hover micro-interactions. All respect `prefers-reduced-motion`.
- **Accessibility** — semantic HTML, ARIA labels, keyboard-accessible mobile menu, visible focus rings, and a skip-to-content link.
- **SEO** — rich `metadata` (Open Graph, Twitter cards, canonical), `Organization` JSON-LD, `robots.txt`, and locale set to `tr_TR`.
- **Performance** — statically prerendered, self-hosted font (no external font requests), optimized SVG illustrations, ~109 kB First Load JS.
- **Self-hosted typography** — *Plus Jakarta Sans* via Fontsource with full Turkish (`latin-ext`) glyph coverage, so the build needs no network access.

## 🧱 Tech Stack

| Layer       | Choice                          |
| ----------- | ------------------------------- |
| Framework   | Next.js 15 (App Router)         |
| Language    | TypeScript 5                    |
| Styling     | Tailwind CSS 3.4                |
| Fonts       | @fontsource/plus-jakarta-sans   |
| Runtime     | React 19                        |

## 🚀 Getting Started

Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm start
```

Other scripts:

```bash
npm run lint     # ESLint (next/core-web-vitals)
```

## 📁 Project Structure

```
kalbim-landing/
├── app/
│   ├── globals.css        # Tailwind layers, design tokens, reveal animation
│   ├── layout.tsx         # Root layout, font imports, SEO metadata
│   └── page.tsx           # Page composition + JSON-LD
├── components/
│   ├── ui/
│   │   ├── Button.tsx     # Variant-based button/link
│   │   ├── Container.tsx  # Max-width page container
│   │   ├── Logo.tsx       # Brand mark
│   │   └── Reveal.tsx     # Scroll-reveal wrapper (IntersectionObserver)
│   ├── icons.tsx          # Inline SVG icon set
│   ├── Header.tsx         # Sticky nav + responsive mobile menu
│   ├── Hero.tsx           # Hero copy, CTAs, stats, illustration card
│   ├── HeroIllustration.tsx
│   ├── Impact.tsx         # 2025 impact stats
│   ├── Programs.tsx       # Three colored program cards
│   ├── Circles.tsx        # Community circles (Çevreler) 2×2 grid
│   ├── Testimonials.tsx   # Scrollable testimonial carousel
│   ├── Blog.tsx           # Featured resource + article cards
│   ├── CTA.tsx            # Final call to action
│   └── Footer.tsx         # Footer with link columns + socials
├── lib/
│   ├── content.ts         # All copy/data, centralized & typed
│   └── utils.ts           # cn() className helper
├── public/
│   └── robots.txt
├── tailwind.config.ts     # Custom palette, fonts, keyframes
├── next.config.mjs
├── tsconfig.json
└── postcss.config.mjs
```

## 🎨 Design Tokens

The warm editorial palette is defined in `tailwind.config.ts`:

| Token            | Hex       | Use                          |
| ---------------- | --------- | ---------------------------- |
| `cream`          | `#FEFAEF` | Page background              |
| `cream-100/200`  | `#FBF5E9` / `#F6F0E0` | Alternating sections / cards |
| `ink`            | `#1C1024` | Headings, dark buttons       |
| `crimson`        | `#B83A52` | Primary accent               |
| `forest`         | `#4C7A5D` | Secondary accent             |
| `gold`           | `#D4A849` | Tertiary accent              |
| `blush`          | `#F2B9C2` | Featured blog card           |

## ✏️ Editing Content

All text and structured data live in **`lib/content.ts`** — update copy, stats, programs, circles, testimonials, articles, and footer links there without touching markup.

## 📝 Notes

- Links use placeholder `#` anchors / in-page section hashes; wire them to real routes as needed.
- Replace the `SITE_URL` constant in `app/layout.tsx` and `app/page.tsx` with your production domain, and add an OG image to `public/` referenced from `metadata.openGraph.images`.

---

© 2025 KALBİM — Kadın Liderliği ve Bilinçlendirme Merkezi Derneği. Built as a front-end reproduction.
