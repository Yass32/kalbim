// TypeScript shape of the Directus schema for the KALBİM site.
// Every content collection is scoped to a `kalbim` (site) record via a `site` M2O.

export interface KalbimSite {
  id: number;
  name: string;
  slug: string;
}

export interface Globals {
  id: number;
  site: number | KalbimSite;
  email: string | null;
  phone: string | null;
  address: string | null;
  instagram_url: string | null;
  linkedin_url: string | null;
  x_url: string | null;
  footer_description: string | null;
}

export interface Category {
  id: number;
  site: number | KalbimSite;
  name: string;
  slug: string;
  sort: number | null;
}

export interface Post {
  id: number;
  site: number | KalbimSite;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string | null;
  /** Directus file id (uuid) of the optional cover image. */
  cover: string | null;
  category: Category | number | null;
  read_minutes: number | null;
  published_at: string | null;
}

// Full schema map consumed by the Directus SDK generic.
export interface Schema {
  kalbim: KalbimSite[];
  globals: Globals[];
  categories: Category[];
  posts: Post[];
}

// ── View models used by the UI (decoupled from raw Directus shapes) ──

export interface PostCard {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  coverUrl: string | null;
}
