import type { Metadata } from 'next'
import SmartLink from '@/components/common/SmartLink'
import PageHero from '@/components/kit/PageHero'
import PageCta from '@/components/kit/PageCta'
import { cmsFetchList } from '@/lib/cms.server'
import '@/components/kit/page-kit.css'
import './pages-index.css'

/* ------------------------------------------------------------------
   /pages — everything written in the CMS's Pages module.

   WHY THIS EXISTS

   Editor-authored pages used to reach the site only through the
   navbar: each one marked "header" became another top-level item, and
   a handful of them widened the bar until it wrapped. They now live
   under Resources, and this is the destination that menu entry points
   at — a plain index, so a page is reachable even when an editor has
   not marked it for the menu at all.

   NO BUNDLED FALLBACK

   Unlike courses or the FAQ, there is nothing sensible to invent here:
   these pages exist only because somebody wrote them. A CMS that is
   down or empty gets an honest empty state.
------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: 'Pages',
  description: 'Reference pages published by techcadd Ludhiana.',
}

type NavPage = { slug: string; label: string; placement?: string }

export default async function PagesIndex() {
  const pages = (await cmsFetchList<NavPage>('/nav-pages', { limit: 100 })) ?? []

  return (
    <div className="tc-page tc-page--pages">
      <main id="main">
        <PageHero
          eyebrow="Resources"
          title="Pages"
          accent="everything else worth reading."
          lead="Reference material published by the team — policies, guides and the pages that do not belong to a course."
          image="/lab-demo.webp"
          stats={undefined}
          facts={undefined}
          actions={undefined}
          id="pages-top"
        />

        <section className="ap-light ap-sec" id="listing">
          <div className="shell">
            {pages.length ? (
              <ul className="pgx-grid">
                {pages.map((page) => (
                  <li key={page.slug}>
                    <SmartLink className="pgx-card" href={`/${page.slug}`}>
                      <span className="pgx-card-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                          <path d="M14 3v5h5" />
                          <path d="M9 13h6M9 17h4" />
                        </svg>
                      </span>
                      <span className="pgx-card-title">{page.label}</span>
                      <span className="pgx-card-arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </SmartLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="tc-empty">
                No pages have been published yet. Anything written in the CMS&rsquo;s Pages
                section appears here.
              </p>
            )}
          </div>
        </section>

        <PageCta
          eyebrow="Looking for something else?"
          title="Ask us directly."
          lead="If what you need is not written down yet, the counselling desk can answer it."
          primary={{ label: 'Contact us', href: '/contact' }}
          secondary={{ label: 'Browse courses', href: '/courses' }}
        />
      </main>
    </div>
  )
}
