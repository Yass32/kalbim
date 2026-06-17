import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * On-demand revalidation endpoint.
 *
 * Point a Directus Flow (trigger: items.create / items.update / items.delete on
 * `posts`, `categories`, `globals`) at this URL via a "Webhook / Request URL"
 * operation, sending header `x-revalidate-secret: <REVALIDATE_SECRET>`.
 *
 * Example (manual):
 *   curl -X POST https://kalbim.org/api/revalidate \
 *     -H "x-revalidate-secret: <secret>" \
 *     -H "content-type: application/json" \
 *     -d '{"path":"/blog"}'
 */
export async function POST(request: Request) {
  const secret =
    request.headers.get('x-revalidate-secret') ??
    new URL(request.url).searchParams.get('secret');

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: 'Invalid secret' }, { status: 401 });
  }

  let path: string | undefined;
  try {
    const body = await request.json();
    path = body?.path;
  } catch {
    // No/invalid JSON body — fall back to revalidating the common paths.
  }

  const paths = path ? [path] : ['/', '/blog'];
  paths.forEach((p) => revalidatePath(p));

  return NextResponse.json({ revalidated: true, paths, now: Date.now() });
}
