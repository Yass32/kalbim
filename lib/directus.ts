import 'server-only';
import {
  createDirectus,
  rest,
  staticToken,
  readItems,
  readSingleton,
} from '@directus/sdk';
import type { Schema, Globals, Category, Post, PostCard } from './directus-types';

const DIRECTUS_URL = process.env.DIRECTUS_URL?.replace(/\/$/, '');
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

/**
 * Singleton Directus client.
 * Returns null when DIRECTUS_URL is not configured so the app still builds
 * and renders (with fallbacks) in environments without a CMS connection.
 */
function getClient() {
  if (!DIRECTUS_URL) return null;
  let client = createDirectus<Schema>(DIRECTUS_URL).with(rest());
  if (DIRECTUS_TOKEN) {
    client = createDirectus<Schema>(DIRECTUS_URL).with(staticToken(DIRECTUS_TOKEN)).with(rest());
  }
  return client;
}

/** Wrap a request so transient/offline failures never crash a render. */
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[directus] request failed, using fallback:', (err as Error)?.message);
    }
    return fallback;
  }
}

/** Build a public asset URL for a Directus file id, with optional transforms. */
export function assetUrl(
  fileId: string | null | undefined,
  params?: Record<string, string | number>
): string | null {
  if (!fileId || !DIRECTUS_URL) return null;
  const qs = params
    ? '?' +
      Object.entries(params)
        .map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`)
        .join('&')
    : '';
  return `${DIRECTUS_URL}/assets/${fileId}${qs}`;
}

// ─────────────────────────────── Globals ───────────────────────────────

export async function getGlobals(): Promise<Globals | null> {
  const client = getClient();
  if (!client) return null;
  return safe(
    () =>
      client.request(
        readSingleton('globals', {
          fields: [
            'id', 'email', 'phone', 'address',
            'instagram_url', 'linkedin_url', 'x_url', 'footer_description',
          ],
        })
      ) as Promise<Globals>,
    null
  );
}

// ────────────────────────────── Categories ─────────────────────────────

export async function getCategories(): Promise<Category[]> {
  const client = getClient();
  if (!client) return [];
  return safe(
    () =>
      client.request(
        readItems('categories', {
          sort: ['sort', 'name'],
          fields: ['id', 'name', 'slug', 'sort'],
          limit: -1,
        })
      ) as Promise<Category[]>,
    []
  );
}

// ──────────────────────────────── Posts ────────────────────────────────

const POST_FIELDS = [
  'id',
  'title',
  'slug',
  'excerpt',
  'body',
  'cover',
  'read_minutes',
  'published_at',
  { category: ['id', 'name', 'slug'] },
] as const;

export async function getPosts(): Promise<Post[]> {
  const client = getClient();
  if (!client) return [];
  return safe(
    async () =>
      (await client.request(
        readItems('posts', {
          sort: ['-published_at'],
          fields: POST_FIELDS,
          limit: -1,
        })
      )) as unknown as Post[],
    []
  );
}

export async function getLatestPosts(count = 2): Promise<Post[]> {
  const client = getClient();
  if (!client) return [];
  return safe(
    async () =>
      (await client.request(
        readItems('posts', {
          sort: ['-published_at'],
          fields: POST_FIELDS,
          limit: count,
        })
      )) as unknown as Post[],
    []
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const client = getClient();
  if (!client) return null;
  return safe(async () => {
    const rows = (await client.request(
      readItems('posts', {
        limit: 1,
        fields: POST_FIELDS,
      })
    )) as unknown as Post[];
    return rows[0] ?? null;
  }, null);
}

export async function getPostSlugs(): Promise<string[]> {
  const client = getClient();
  if (!client) return [];
  return safe(async () => {
    const rows = (await client.request(
      readItems('posts')
    )) as Array<{ slug: string }>;
    return rows.map((r) => r.slug);
  }, []);
}

// ─────────────────────────────── Helpers ───────────────────────────────

const trDate = new Intl.DateTimeFormat('tr-TR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export function formatDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '' : trDate.format(d);
}

/** Map a raw Directus post into the UI card view-model. */
export function toPostCard(post: Post): PostCard {
  const category =
    post.category && typeof post.category === 'object' ? post.category.name : '';
  return {
    slug: post.slug,
    title: post.title,
    tag: category ? category.toLocaleUpperCase('tr') : 'YAZI',
    date: formatDate(post.published_at),
    readTime: post.read_minutes ? `${post.read_minutes} dk okuma` : '',
    coverUrl: assetUrl(post.cover, { width: 600, height: 300, fit: 'cover' }),
  };
}

export const cmsConfigured = Boolean(DIRECTUS_URL);
