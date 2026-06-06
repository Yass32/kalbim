import type { Metadata, Viewport } from 'next';
// Self-hosted font (no external network at build/runtime). Includes latin-ext
// for full Turkish glyph coverage (ç, ğ, ı, İ, ö, ş, ü).
import '@fontsource/plus-jakarta-sans/latin-400.css';
import '@fontsource/plus-jakarta-sans/latin-500.css';
import '@fontsource/plus-jakarta-sans/latin-600.css';
import '@fontsource/plus-jakarta-sans/latin-700.css';
import '@fontsource/plus-jakarta-sans/latin-800.css';
import '@fontsource/plus-jakarta-sans/latin-ext-400.css';
import '@fontsource/plus-jakarta-sans/latin-ext-500.css';
import '@fontsource/plus-jakarta-sans/latin-ext-600.css';
import '@fontsource/plus-jakarta-sans/latin-ext-700.css';
import '@fontsource/plus-jakarta-sans/latin-ext-800.css';
import './globals.css';

const SITE_URL = 'https://kalbim.org';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'KALBİM — Kadın Liderliği ve Bilinçlendirme Merkezi',
    template: '%s · KALBİM',
  },
  description:
    'KALBİM, kadınların liderlik potansiyelini keşfetmeleri ve güçlenmeleri için bir topluluk ve öğrenme merkezi. Eğitim, mentorluk ve çevreler — hepsi tek çatı altında.',
  keywords: [
    'kadın liderliği',
    'mentorluk',
    'liderlik eğitimi',
    'kadın girişimci',
    'topluluk',
    'KALBİM',
  ],
  authors: [{ name: 'KALBİM' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: 'KALBİM',
    title: 'KALBİM — Kadın Liderliği ve Bilinçlendirme Merkezi',
    description:
      'Kadınların liderlik potansiyelini destekleyen topluluk ve öğrenme merkezi. Eğitim, mentorluk ve çevreler.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KALBİM — Kadın Liderliği ve Bilinçlendirme Merkezi',
    description:
      'Kadınların liderlik potansiyelini destekleyen topluluk ve öğrenme merkezi.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FEFAEF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {/* Ensure content is visible if JS is disabled or fails to load */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style
            dangerouslySetInnerHTML={{
              __html: '.reveal{opacity:1 !important;transform:none !important;}',
            }}
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
