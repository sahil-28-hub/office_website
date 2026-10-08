import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* Skip TypeScript errors during build — the codebase was converted
     from JSX and needs incremental type-fixing. Remove this once all
     types are clean. */
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    /* An optimised image is kept for 30 days rather than Next's default
       of 60 seconds, after which every variant was being re-encoded on
       the next request. The artwork here changes with a deploy or a new
       upload — which gets a new address — not minute to minute. */
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.techcadd.com',
      },
      {
        protocol: 'https',
        hostname: '*.techcadd.com',
      },
      {
        protocol: 'https',
        hostname: 'cms.techcaddludhiana.com',
      },
      {
        protocol: 'https',
        hostname: '*.techcaddludhiana.com',
      },
    ],
  },

  /* The address the group's other sites use for the privacy policy, and
     the one people type. This site's lives at /privacy. */
  async redirects() {
    return [{ source: '/privacy-policy', destination: '/privacy', permanent: true }]
  },

  /* Turbopack for faster dev builds */
  // turbopack: {},

  /* The Express server is replaced by Next.js API routes, so the
     standalone output is all that is needed for deployment. */
  output: 'standalone',
}

export default nextConfig
