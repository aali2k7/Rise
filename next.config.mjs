/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  // Static export for Hostinger shared hosting
  output: 'export',

  // Required for static export — disables Next.js image optimization
  // (images are served as-is from the /public folder)
  images: {
    unoptimized: true,
  },

  // NOTE: headers(), redirects(), rewrites() are NOT supported with output:'export'
  // Security headers for static hosting must be set via Hostinger's .htaccess file instead
};

export default nextConfig;
