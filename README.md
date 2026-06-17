# KALBİM — Landing Page

A faithful, production-ready **multi-page** site for **KALBİM — Kadın Liderliği ve Bilinçlendirme Merkezi**, built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Includes the landing page plus Hakkımızda, Programlar, Topluluk, Blog and İletişim pages, all sharing one design system and a purple brand palette.

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

## 🗂️ Pages / Routes

| Route          | Page         | Highlights                                                                 |
| -------------- | ------------ | -------------------------------------------------------------------------- |
| `/`            | Ana sayfa    | Hero, impact, programs, circles, testimonials, blog teaser, CTA            |
| `/hakkimizda`  | Hakkımızda   | Mission/vision, values, 2022→2025 timeline, impact stats, team grid        |
| `/programlar`  | Programlar   | Program cards, per-program detail breakdown, FAQ accordion                 |
| `/topluluk`    | Topluluk     | Community circles, “how it works” steps, upcoming events, testimonials     |
| `/blog`        | Blog         | Featured resource, **filterable** post grid, newsletter signup            |
| `/iletisim`    | İletişim     | Validated contact form, contact channels, office card, FAQ                 |

`Header`, `Footer`, the skip-link and `Organization` JSON-LD live in `app/layout.tsx`, so every route shares them automatically. The active nav item is highlighted via `usePathname()`.

### Interactive client components
- `components/sections/FaqAccordion.tsx` — accessible expand/collapse (`aria-expanded`).
- `components/sections/BlogGrid.tsx` — category tabs that filter posts client-side.
- `components/sections/ContactForm.tsx` — inline validation, success state (wire to your API where marked).
- `components/sections/Newsletter.tsx` — email capture with validation.

## 🎨 Color Palette (purple brand)

Defined as tokens in `tailwind.config.ts` — change them in one place to re-theme the whole site.

| Token (Tailwind)        | Hex       | Role                                  |
| ----------------------- | --------- | ------------------------------------- |
| `crimson` (primary)     | `#92298E` | Neon pink — accents, buttons, card 1  |
| `forest` (secondary)    | `#BE8FC0` | Matte lavender — card 2, avatars      |
| `gold` (tertiary)       | `#A7A5A7` | Gray — card 3, muted UI               |
| `ink`                   | `#515152` | Dark grey — headings, “Canlı” badge   |
| `muted`                 | `#A7A5A7` | Gray — secondary text                 |
| `cream` / `100` / `200` | `#FEFEFE` / `#F7F5F8` / `#EEECEF` | White + light gray-lavender bands |
| `blush`                 | `#EAD9EC` | Soft lavender — featured surfaces     |
| `lilac`                 | `#CDB0CE` | Light lavender accent                 |

> The token names (`crimson`, `forest`, `gold`) are historical; their **values** now hold the purple palette, so every component recolors consistently.

## 🔁 Re-theming

To shift the whole palette, edit the `colors` block in `tailwind.config.ts`. Because all components reference tokens (never raw hex), the entire multi-page site updates at once. The only inline hex values are inside the decorative SVGs (`HeroIllustration.tsx`, `Blog.tsx`, `BlogGrid.tsx`, `Circles.tsx`) — search for them if you want to fine-tune the illustrations.

## 🧩 Directus (headless CMS)

Blog **posts** + **categories** and site **globals** (email, phone, address,
social links, footer text) are served from a self-hosted Directus instance.
All content collections are scoped to a `kalbim` site record via a `site`
relation, so one Directus can host multiple sites later.

- Self-host stack, schema bootstrap script, and full setup steps:
  see **[`directus/README.md`](./directus/README.md)**.
- Next.js side: typed client + data layer in `lib/directus.ts`
  (`getPosts`, `getPostBySlug`, `getCategories`, `getGlobals`, `assetUrl`),
  schema types in `lib/directus-types.ts`.
- Pages use **ISR** (`revalidate = 60`); `POST /api/revalidate` enables
  instant publishing via a Directus Flow webhook.
- Required env (see `.env.example`): `DIRECTUS_URL`, optional `DIRECTUS_TOKEN`,
  `DIRECTUS_SITE`, `REVALIDATE_SECRET`.

**Builds without a CMS:** all Directus calls fall back gracefully (empty states,
hardcoded defaults), so `npm run build` succeeds even before Directus is reachable.

### Quick start
```bash
# 1) Run Directus on your VPS
cd directus && cp .env.example .env   # edit secrets
docker compose up -d

# 2) Create schema + seed (from project root)
DIRECTUS_URL=https://cms.kalbim.org ADMIN_EMAIL=... ADMIN_PASSWORD=... \
  node directus/bootstrap.mjs

# 3) Grant Public read (or set DIRECTUS_TOKEN), point the site env at Directus, redeploy
```
