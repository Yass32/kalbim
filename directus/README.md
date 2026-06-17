# KALBİM × Directus — Self-Host Guide

This folder contains everything to run Directus on your VPS and connect it to the
Next.js site. Scope: **posts**, **categories**, and **globals**, all linked to a
`kalbim` site record.

## 1. Run Directus on the VPS

Prerequisites: Docker + Docker Compose.

```bash
cd directus
cp .env.example .env
# Edit .env — set strong DB_PASSWORD/ADMIN_PASSWORD and random KEY/SECRET:
#   openssl rand -hex 32   (run twice, for DIRECTUS_KEY and DIRECTUS_SECRET)
docker compose up -d
```

Directus is now on `http://<vps-ip>:8055`. Put it behind your reverse proxy
(Caddy/Nginx) with TLS at e.g. `https://cms.kalbim.org`, and set that as
`PUBLIC_URL` in `.env`. Make sure `CORS_ORIGIN` includes your website origin.

<details>
<summary>Minimal Caddy example</summary>

```
cms.kalbim.org {
    reverse_proxy localhost:8055
}
```
</details>

## 2. Create the schema

**Option A — bootstrap script (fastest).** From the **project root**:

```bash
DIRECTUS_URL=https://cms.kalbim.org \
ADMIN_EMAIL=admin@kalbim.org \
ADMIN_PASSWORD=yourpassword \
node directus/bootstrap.mjs
```

It creates all collections/fields/relations and seeds a site, globals, five
categories and six posts. It's safe to re-run.

**Option B — by hand** in the admin UI, using the data model below.

## 3. Grant read access

The website reads published content. Either (recommended for a public site):

- **Settings → Access Policies → Public →** add **Read** permission on
  `kalbim`, `globals`, `categories`, `posts`, and `directus_files`
  (the last one is required for cover images to load), **or**
- create a **read-only static token** (Settings → Access Tokens / a user with a
  read-only policy) and set `DIRECTUS_TOKEN` in the Next.js env. If you go
  token-only, also keep `directus_files` readable so `next/image` can fetch covers.

## 4. Point the website at Directus

In the Next.js project root `.env` (or `.env.local`):

```bash
DIRECTUS_URL=https://cms.kalbim.org
DIRECTUS_TOKEN=            # leave empty if Public has read access
DIRECTUS_SITE=kalbim       # matches the kalbim record's slug
REVALIDATE_SECRET=some-long-random-string
```

Rebuild/redeploy. Pages use ISR (`revalidate = 60`), so edits appear within a
minute. For **instant** updates, see step 6.

## 5. Data model

Every content collection has a `site` Many-to-One → `kalbim`.

### `kalbim` (site)
| Field | Type | Notes |
|-------|------|-------|
| id | integer (PK) | auto |
| name | string | "KALBİM" |
| slug | string (unique) | `kalbim` — referenced by `DIRECTUS_SITE` |

### `globals`
| Field | Type | Notes |
|-------|------|-------|
| id | integer (PK) | |
| site | M2O → kalbim | which site these settings belong to |
| email | string | shown on İletişim + mailto |
| phone | string | İletişim + tel |
| address | text | İletişim + footer office |
| instagram_url | string | footer + İletişim social |
| linkedin_url | string | " |
| x_url | string | " |
| footer_description | text | footer brand paragraph |

One row per site. (Modeled as a normal collection rather than a Directus
singleton precisely so it can hang off the `kalbim` relation.)

### `categories`
| Field | Type | Notes |
|-------|------|-------|
| id | integer (PK) | |
| site | M2O → kalbim | |
| name | string | shown as the filter label + post tag |
| slug | string | |
| sort | integer | ordering of filter tabs |

### `posts`
| Field | Type | Notes |
|-------|------|-------|
| id | integer (PK) | |
| site | M2O → kalbim | |
| title | string | |
| slug | string | URL: `/blog/<slug>` |
| excerpt | text | card + lede + meta description |
| body | text (WYSIWYG) | rendered as HTML on the detail page |
| cover | M2O → directus_files | **optional**; falls back to decorative art |
| category | M2O → categories | drives the tag + filter |
| read_minutes | integer | shown as "{n} dk okuma" |
| published_at | timestamp | display date + sort (newest first) |

> No `status` field by design — every row is considered published.

## 6. Instant publish (optional webhook)

The site exposes `POST /api/revalidate` (guarded by `REVALIDATE_SECRET`).
In Directus: **Settings → Flows → Create Flow**, trigger **Event Hook →
items.create/update/delete** on `posts`, `categories`, `globals`; add a
**Webhook / Request URL** operation:

- Method: `POST`
- URL: `https://kalbim.org/api/revalidate`
- Headers: `x-revalidate-secret: <your REVALIDATE_SECRET>`
- Body (JSON): `{ "path": "/blog" }` (omit `path` to refresh `/` and `/blog`)

Now publishing in Directus refreshes the affected pages immediately.

## What the website reads

| Page / component | Directus source |
|------------------|-----------------|
| `/blog` list + category filter | `posts`, `categories` |
| `/blog/[slug]` detail | `posts` (by slug) |
| Home blog teaser | latest 2 `posts` |
| Footer (socials, brand text) | `globals` |
| İletişim (email/phone/address, socials) | `globals` |

Everything else (programs, circles, team, events, FAQ, stats, nav, layout)
stays in `lib/content.ts` for now — easy to migrate later with the same pattern.
