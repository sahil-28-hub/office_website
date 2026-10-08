import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/structuredData'

/* ==================================================================
   robots.txt

   Two rule groups that say the same thing, on purpose.

   The first is for every crawler. The second names the crawlers behind
   the AI assistants and answer engines — ChatGPT, Claude, Perplexity,
   Gemini, Copilot and the rest. A site is only quoted by an assistant
   that was allowed to read it, and several of these bots look for a
   group addressed to them by name before they fall back to `*`. Naming
   them makes the permission explicit rather than inferred.

   /api/ and /_next/ carry no content worth indexing; /preview/ renders
   unsaved drafts for the CMS and must never be crawled.
================================================================== */

const PRIVATE = ['/api/', '/_next/', '/preview/']

const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'Amazonbot',
  'meta-externalagent',
  'cohere-ai',
  'Bytespider',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: PRIVATE },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
