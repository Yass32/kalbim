/**
 * One-shot bootstrap for the KALBİM Directus schema + seed data.
 *
 * Creates collections: kalbim (site), globals, categories, posts
 * with the `site` relation on every content collection, plus the
 * posts→categories and posts→cover (file) relations, then seeds
 * a site record, globals, categories and a few posts.
 *
 * Run from the PROJECT ROOT (so it can resolve @directus/sdk):
 *   DIRECTUS_URL=http://localhost:8055 \
 *   ADMIN_EMAIL=admin@kalbim.org \
 *   ADMIN_PASSWORD=yourpassword \
 *   node directus/bootstrap.mjs
 *
 * Safe to re-run: "already exists" errors are ignored.
 * Tested against Directus 11. If an API field differs on your version,
 * the equivalent can be created by hand in the admin UI (see directus/README.md).
 */
import {
  createDirectus,
  rest,
  authentication,
  createCollection,
  createField,
  createRelation,
  createItem,
  createItems,
  readItems,
} from '@directus/sdk';

const URL = process.env.DIRECTUS_URL || 'http://localhost:8055';
const EMAIL = process.env.ADMIN_EMAIL;
const PASSWORD = process.env.ADMIN_PASSWORD;

if (!EMAIL || !PASSWORD) {
  console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD env vars.');
  process.exit(1);
}

const client = createDirectus(URL).with(rest()).with(authentication('json'));

const ok = (label) => console.log(`  ✓ ${label}`);
async function attempt(label, fn) {
  try {
    await fn();
    ok(label);
  } catch (err) {
    const msg = err?.errors?.[0]?.message || err?.message || String(err);
    if (/exist|unique|duplicate/i.test(msg)) console.log(`  • ${label} (already present)`);
    else console.warn(`  ! ${label}: ${msg}`);
  }
}

const pk = {
  field: 'id',
  type: 'integer',
  meta: { hidden: true, interface: 'input', readonly: true },
  schema: { is_primary_key: true, has_auto_increment: true },
};

async function m2o(collection, field, related, { interface: iface = 'select-dropdown-m2o', special = ['m2o'] } = {}) {
  await attempt(`field ${collection}.${field}`, () =>
    client.request(
      createField(collection, {
        field,
        type: related === 'directus_files' ? 'uuid' : 'integer',
        meta: { interface: iface, special },
        schema: {},
      })
    )
  );
  await attempt(`relation ${collection}.${field} → ${related}`, () =>
    client.request(
      createRelation({
        collection,
        field,
        related_collection: related,
        schema: { on_delete: 'SET NULL' },
        meta: {},
      })
    )
  );
}

const field = (collection, def) =>
  attempt(`field ${collection}.${def.field}`, () => client.request(createField(collection, def)));

async function main() {
  console.log(`→ Logging in to ${URL} ...`);
  await client.login(EMAIL, PASSWORD);
  ok('authenticated');

  // ── Collections ─────────────────────────────────────────────
  console.log('\nCollections');
  await attempt('collection kalbim', () =>
    client.request(
      createCollection({
        collection: 'kalbim',
        meta: { icon: 'public', note: 'Sites (one record per site)' },
        schema: { name: 'kalbim' },
        fields: [pk],
      })
    )
  );
  await attempt('collection globals', () =>
    client.request(
      createCollection({
        collection: 'globals',
        meta: { icon: 'settings', note: 'Per-site global settings' },
        schema: { name: 'globals' },
        fields: [pk],
      })
    )
  );
  await attempt('collection categories', () =>
    client.request(
      createCollection({
        collection: 'categories',
        meta: { icon: 'sell', note: 'Blog categories' },
        schema: { name: 'categories' },
        fields: [pk],
      })
    )
  );
  await attempt('collection posts', () =>
    client.request(
      createCollection({
        collection: 'posts',
        meta: { icon: 'article', note: 'Blog posts' },
        schema: { name: 'posts' },
        fields: [pk],
      })
    )
  );

  // ── Fields: kalbim ──────────────────────────────────────────
  console.log('\nFields: kalbim');
  await field('kalbim', { field: 'name', type: 'string', meta: { interface: 'input' } });
  await field('kalbim', { field: 'slug', type: 'string', schema: { is_unique: true }, meta: { interface: 'input' } });

  // ── Fields: globals ─────────────────────────────────────────
  console.log('\nFields: globals');
  await m2o('globals', 'site', 'kalbim');
  await field('globals', { field: 'email', type: 'string', meta: { interface: 'input', options: { iconLeft: 'mail' } } });
  await field('globals', { field: 'phone', type: 'string', meta: { interface: 'input', options: { iconLeft: 'call' } } });
  await field('globals', { field: 'address', type: 'text', meta: { interface: 'input-multiline' } });
  await field('globals', { field: 'instagram_url', type: 'string', meta: { interface: 'input' } });
  await field('globals', { field: 'linkedin_url', type: 'string', meta: { interface: 'input' } });
  await field('globals', { field: 'x_url', type: 'string', meta: { interface: 'input' } });
  await field('globals', { field: 'footer_description', type: 'text', meta: { interface: 'input-multiline' } });

  // ── Fields: categories ──────────────────────────────────────
  console.log('\nFields: categories');
  await m2o('categories', 'site', 'kalbim');
  await field('categories', { field: 'name', type: 'string', meta: { interface: 'input' } });
  await field('categories', { field: 'slug', type: 'string', meta: { interface: 'input' } });
  await field('categories', { field: 'sort', type: 'integer', meta: { interface: 'input', hidden: false } });

  // ── Fields: posts ───────────────────────────────────────────
  console.log('\nFields: posts');
  await m2o('posts', 'site', 'kalbim');
  await field('posts', { field: 'title', type: 'string', meta: { interface: 'input' } });
  await field('posts', { field: 'slug', type: 'string', meta: { interface: 'input', note: 'URL: /blog/<slug>' } });
  await field('posts', { field: 'excerpt', type: 'text', meta: { interface: 'input-multiline' } });
  await field('posts', { field: 'body', type: 'text', meta: { interface: 'input-rich-text-html' } });
  await m2o('posts', 'cover', 'directus_files', { interface: 'file-image', special: ['file'] });
  await m2o('posts', 'category', 'categories');
  await field('posts', { field: 'read_minutes', type: 'integer', meta: { interface: 'input' } });
  await field('posts', { field: 'published_at', type: 'timestamp', meta: { interface: 'datetime' } });

  // ── Seed ────────────────────────────────────────────────────
  console.log('\nSeed');
  let siteId;
  const existingSite = await client.request(readItems('kalbim', { filter: { slug: { _eq: 'kalbim' } }, limit: 1 }));
  if (existingSite[0]) {
    siteId = existingSite[0].id;
    console.log('  • site "kalbim" already exists');
  } else {
    const site = await client.request(createItem('kalbim', { name: 'KALBİM', slug: 'kalbim' }));
    siteId = site.id;
    ok('site "kalbim"');
  }

  const existingGlobals = await client.request(readItems('globals', { filter: { site: { _eq: siteId } }, limit: 1 }));
  if (!existingGlobals[0]) {
    await client.request(
      createItem('globals', {
        site: siteId,
        email: 'merhaba@kalbim.org',
        phone: '+90 212 000 00 00',
        address: 'Maslak Mah. No:1, Sarıyer / İstanbul',
        instagram_url: 'https://instagram.com/',
        linkedin_url: 'https://linkedin.com/',
        x_url: 'https://x.com/',
        footer_description:
          'Kadın Liderliği ve Bilinçlendirme Merkezi. Türkiye’de kadınların liderlik potansiyelini destekleyen bağımsız bir topluluk.',
      })
    );
    ok('globals');
  } else {
    console.log('  • globals already exist');
  }

  const categoryDefs = [
    { name: 'Liderlik', slug: 'liderlik', sort: 1 },
    { name: 'Mentorluk', slug: 'mentorluk', sort: 2 },
    { name: 'Kariyer', slug: 'kariyer', sort: 3 },
    { name: 'Girişimcilik', slug: 'girisimcilik', sort: 4 },
    { name: 'Finans', slug: 'finans', sort: 5 },
  ];
  const catMap = {};
  const existingCats = await client.request(readItems('categories', { filter: { site: { _eq: siteId } }, limit: -1 }));
  for (const ec of existingCats) catMap[ec.slug] = ec.id;
  const toCreate = categoryDefs.filter((c) => !catMap[c.slug]).map((c) => ({ ...c, site: siteId }));
  if (toCreate.length) {
    const created = await client.request(createItems('categories', toCreate));
    for (const c of created) catMap[c.slug] = c.id;
    ok(`${toCreate.length} categories`);
  } else {
    console.log('  • categories already exist');
  }

  const existingPosts = await client.request(readItems('posts', { filter: { site: { _eq: siteId } }, limit: 1 }));
  if (!existingPosts[0]) {
    const body = (p) => `<p>${p}</p><p>Bu yazı KALBİM topluluğundan deneyimlerle hazırlandı. Daha fazlası için topluluğa katılabilirsin.</p>`;
    const posts = [
      { title: 'Ekibinde ilk kez yönetici olan kadınlara 7 not', slug: 'ilk-kez-yonetici', cat: 'liderlik', read: 6, days: 5, excerpt: 'İlk yöneticilik döneminde işine yarayacak, sahadan gelen yedi pratik not.' },
      { title: 'İyi bir mentor–menti ilişkisini sürdürmenin üç anahtarı', slug: 'mentor-menti-uc-anahtar', cat: 'mentorluk', read: 4, days: 17, excerpt: 'Verimli bir mentorluk ilişkisini uzun vadede ayakta tutan üç temel.' },
      { title: 'Geri dönüş: Aradan sonra iş hayatına dönmenin yolları', slug: 'is-hayatina-geri-donus', cat: 'kariyer', read: 7, days: 28, excerpt: 'Kariyer arasından sonra özgüvenle geri dönmek için somut bir yol haritası.' },
      { title: 'İlk yatırımını ararken bilmen gereken 5 şey', slug: 'ilk-yatirim-5-sey', cat: 'girisimcilik', read: 9, days: 41, excerpt: 'Yatırımcıyla ilk görüşmeden önce hazırlanman gereken beş başlık.' },
      { title: 'Kadınlar için finansal bağımsızlık rehberi', slug: 'finansal-bagimsizlik-rehberi', cat: 'finans', read: 5, days: 55, excerpt: 'Bütçeden yatırıma, finansal bağımsızlığa giden ilk adımlar.' },
      { title: 'Toplantılarda sesini duyurmanın pratik yolları', slug: 'toplantida-sesini-duyur', cat: 'liderlik', read: 4, days: 70, excerpt: 'Fikirlerinin toplantıda duyulmasını sağlayan küçük ama etkili taktikler.' },
    ];
    const now = Date.now();
    await client.request(
      createItems(
        'posts',
        posts.map((p) => ({
          site: siteId,
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          body: body(p.excerpt),
          category: catMap[p.cat] ?? null,
          read_minutes: p.read,
          published_at: new Date(now - p.days * 86400000).toISOString(),
        }))
      )
    );
    ok(`${posts.length} posts`);
  } else {
    console.log('  • posts already exist');
  }

  console.log('\n✅ Done. Next: open Settings → Access Policies → Public and grant');
  console.log('   READ on: kalbim, globals, categories, posts, directus_files');
  console.log('   (or create a read-only static token and set DIRECTUS_TOKEN).');
}

main().catch((e) => {
  console.error('\nBootstrap failed:', e?.errors?.[0]?.message || e?.message || e);
  process.exit(1);
});
