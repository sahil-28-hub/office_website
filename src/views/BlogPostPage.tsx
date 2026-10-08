'use client'

import { useMemo } from 'react'
import { useFilteredReveal } from '../hooks/usePageMotion'
import { useCmsRecord } from '../hooks/useCms'
import { mapPostDetail } from '../lib/cms'
import Comments from '../components/blog/Comments'
import '../components/kit/page-kit.css'
import '../components/kit/BlogPost.css'
import Cta from '../components/sections/Cta'
/* Notice() closes on this rather than <Cta />: the notice states —
   loading, unreachable, 404 — are short pages, and BLOG_CTA points
   the reader back into the index they were trying to reach. It was
   used below without ever being imported, so all three of those
   states threw "PageCta is not defined" and rendered a blank page.
   The article path never touches it, which is why it went unseen. */
import PageCta from '../components/kit/PageCta'
import SmartLink from '../components/common/SmartLink'
import PageIcon from '../components/kit/icons'
import ArticleToc from '../components/kit/ArticleToc'
import { indexHeadings } from '../lib/articleToc'
import { BLOG_CTA, POSTS } from '../data/blog'

/* ------------------------------------------------------------------
   One article — /blog/<slug>, where every "Read more" on the index
   points.

   THE SHAPE OF THE PAGE

     1  a dark banner   the tag as a pill, the headline, the standfirst
     2  a light body    the article, or a panel saying it is not written
     3  the CTA band    shared with every other page

   The banner is the same construction as the blog index's own — dark
   navy, a glass pill, a display headline, a grey standfirst — so
   clicking through from a card lands somewhere that plainly belongs to
   the same site rather than on a bare document.

   WHERE THE ARTICLE COMES FROM

   The CMS is the source of truth and the bundled list in
   src/data/blog.js is the floor. A slug is looked for in the CMS
   first; if the CMS has nothing to say — not published there yet, or
   simply not running — the bundled post of the same id renders
   instead. That is what makes every card a working link from the day
   it ships rather than from the day the CMS is wired up.

   The three states are kept distinct — loading, found, and genuinely
   nowhere — so a reader is never told a post does not exist when the
   truth is that it exists and the API is down. Only a slug in neither
   place reaches the 404.

   A CMS body is rich text, inserted as HTML. That is a trust boundary
   worth naming: it is safe because only a signed-in administrator can
   write it, the same way any CMS-backed site treats its own editors'
   markup. Nothing a visitor can submit reaches here, and the bundled
   fallback never sets HTML at all.

   Landing at the top of the page is ScrollManager's job, not this
   component's — it already runs on every pathname change.
------------------------------------------------------------------ */

function Shell({ children }) {
  return (
    <div className="tc-page tc-page--post">
      <main id="main">{children}</main>
    </div>
  )
}

/* The banner. `kicker` is the pill, `meta` the date/read line under
   the headline — a notice has neither, and passes nothing. */
function PostHero({ kicker, title, lead, meta }) {
  return (
    <section className="tcp-hero">
      <span className="tcp-hero-grid" aria-hidden="true" />
      <span className="tcp-hero-orb" aria-hidden="true" />

      <div className="shell tcp-hero-inner">
        <SmartLink className="tcp-back" href="/blog">
          <PageIcon name="arrowRight" />
          All articles
        </SmartLink>

        {kicker && <p className="tcp-pill">{kicker}</p>}

        <h1 className="tcp-title">{title}</h1>

        {meta && <p className="tcp-meta">{meta}</p>}
        {lead && <p className="tcp-lead">{lead}</p>}
      </div>
    </section>
  )
}

/* The dashed panel the page falls back to — an article with no body
   yet, and the three ways a slug can fail to resolve. One shape for
   all four, because they are all "there is nothing to read here, and
   here is where to go instead". */
function Panel({ title, children, action, showRetry = false }) {
  return (
    <section className="tcp-body">
      <div className="shell">
        <div className="tcp-empty">
          <h2>{title}</h2>
          <p>{children}</p>

          <div className="tcp-empty-actions">
            <SmartLink className="ap-btn ap-btn--dark" href={action.href}>
              {action.label}
              <PageIcon name="arrowRight" />
            </SmartLink>

            {showRetry && (
              <button
                className="ap-btn ap-btn--ghost"
                type="button"
                onClick={() => window.location.reload()}
              >
                Try again
                <PageIcon name="arrowRight" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Notice({ kicker, title, lead, body, action, showRetry }) {
  return (
    <Shell>
      <PostHero kicker={kicker} title={title} lead={lead} />
      <Panel title={title} action={action} showRetry={showRetry}>
        {body}
      </Panel>
      <PageCta {...BLOG_CTA} />
    </Shell>
  )
}

/**
 * @param initialPost,initialState the article as src/app/blog/[slug]/page.tsx
 *   already fetched it. `initialState` carries WHY there is no record when
 *   there is none — 'missing' (no such published slug) and 'error' (the CMS
 *   did not answer) get different words below, so the reason has to travel
 *   with the record rather than be inferred from its absence.
 */
export default function BlogPostPage({
  slug,
  initialPost,
  initialState
}: { slug: string; initialPost?: any; initialState?: string }) {

  const path = useMemo(() => `/blogs/${encodeURIComponent(slug || '')}`, [slug])
  const { item: cmsPost, state } = useCmsRecord(path, {
    map: mapPostDetail,
    initial: initialPost,
    initialState
  })

  /* The bundled post of the same id, shaped like a CMS one so the
     article below does not have to know which it got. `body` is empty
     because a bundled post is a summary — the panel says that plainly
     rather than leaving the reader on a blank page. */
  const bundled = useMemo(() => {
    const found = POSTS.find((entry) => entry.id === slug)
    if (!found) return null
    return { ...found, body: '', metaTitle: found.title, metaDescription: found.excerpt }
  }, [slug])

  const post = cmsPost || bundled

  /* Not a plain useReveal(). On the first render this component returns
     a Notice — the article is not mounted yet, because the CMS record
     is still in flight — so useReveal finds no [data-reveal] nodes and
     its effect, which depends only on its options, never runs again.
     The cover and the body then mount already-observed by nobody and
     sit at opacity 0 for good: a banner with a blank page under it.

     Keying the reveal on the record rebuilds the observer the moment
     the article actually exists. Same fix, and same reason, as the
     filtered grids on the index pages. */
  const ref = useFilteredReveal(`${state}:${post?.id ?? post?.slug ?? ''}`)

  /* Only wait on the CMS when there is nothing to show meanwhile. */
  if (state === 'loading' && !bundled) {
    return (
      <Notice
        kicker="One moment"
        title="Fetching the article"
        lead="Pulling this piece from the newsroom."
        body="This takes a second. If it stays here, the newsroom is not answering — the article itself is fine."
        action={{ label: 'All articles', href: '/blog' }}
      />
    )
  }

  if (state === 'error' && !post) {
    return (
      <Notice
        kicker="Not right now"
        title="This article could not be loaded"
        lead="Something between here and our newsroom is not answering."
        body="The article is fine — this is a connection problem at our end. Try again in a moment, or read the rest of the index in the meantime."
        action={{ label: 'All articles', href: '/blog' }}
        showRetry
      />
    )
  }

  if (!post) {
    return (
      <Notice
        kicker="404"
        title="No article at this address"
        lead="It may have been unpublished, or the link may have a typo in it."
        body="The index has everything we have written. If you followed a link from somewhere else, it may be pointing at an older address."
        action={{ label: 'All articles', href: '/blog' }}
      />
    )
  }

  const meta = [post.date, post.read].filter(Boolean).join(' · ')

  /* The index down the left. One heading is not worth a rail, so a
     short post keeps the single centred column it always had. */
  const indexed = indexHeadings(post.body)
  const toc = indexed.toc.length > 1 ? indexed.toc : []

  return (
    <Shell>
      <PostHero kicker={post.tag} title={post.title} lead={post.excerpt} meta={meta} />

      <article className="tcp-body" ref={ref}>
        <div className={toc.length ? 'shell tcp-shell--toc tc-legal-shell' : 'shell'}>
          {toc.length > 0 && <ArticleToc toc={toc} />}

          <div>
          {post.cover && (
            <figure className="tc-article-cover" data-reveal="scale">
              <img src={post.cover} alt={post.coverAlt} />
            </figure>
          )}

          {/* Authored in the CMS by a signed-in administrator — see the
              note at the top of this file.

              A post can be published with only a summary — every
              bundled one is — so an empty body says so plainly instead
              of leaving the reader on a blank page wondering whether
              something failed to load. */}
          {post.body.trim() ? (
            <div
              className="tc-article-body"
              data-reveal
              dangerouslySetInnerHTML={{ __html: indexed.html }}
            />
          ) : (
            <div className="tcp-empty" data-reveal>
              <h2>The full piece is not published yet.</h2>
              <p>
                Our trainers are writing it now — the summary above is all of it for the
                moment. In the meantime, the course pages carry the same detail on
                syllabus, tools and placement support.
              </p>

              <div className="tcp-empty-actions">
                <SmartLink className="ap-btn ap-btn--dark" href="/courses">
                  Browse courses
                  <PageIcon name="arrowRight" />
                </SmartLink>
              </div>
            </div>
          )}
          </div>
        </div>
      </article>

      {/*
        The discussion, from the CMS's own comment module.

        Only under a CMS article. A bundled post has no record in the
        CMS for a comment to hang off, so the thread would have nothing
        to read and a submitted comment nothing to attach to — the API
        matches on the blog slug and would reject it.
      */}
      {state === 'ready' && post.slug && <Comments slug={post.slug} />}

      <Cta />
    </Shell>
  )
}
