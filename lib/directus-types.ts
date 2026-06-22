// TypeScript shape of the Directus schema for the KALBİM site.

export interface Globals {
  id: number;
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
  name: string;
  slug: string;
  sort: number | null;
}

export interface Post {
  id: number;
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
  globals: Globals;          
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
