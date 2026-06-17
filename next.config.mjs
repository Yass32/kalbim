/** @type {import('next').NextConfig} */

const remotePatterns = [];
if (process.env.DIRECTUS_URL) {
  try {
    const u = new URL(process.env.DIRECTUS_URL);
    remotePatterns.push({
      protocol: u.protocol.replace(':', ''),
      hostname: u.hostname,
      port: u.port || '',
      pathname: '/assets/**',
    });
  } catch {
    // Ignore malformed DIRECTUS_URL at build time.
  }
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns,
  },
};

export default nextConfig;
