'use client'

import { useMemo, useState } from 'react'
import { useReveal } from '../hooks/useCourseMotion'
import { useCmsList, listKey } from '../hooks/useCms'
import { mapPost } from '../lib/cms'
import { useFilteredReveal } from '../hooks/usePageMotion'
import '../components/kit/page-kit.css'
import './BlogPage.css'
import PageHero from '../components/kit/PageHero'
import Cta from '../components/sections/Cta'
import SmartLink from '../components/common/SmartLink'
import PageIcon from '../components/kit/icons'
import { BLOG_HERO, POSTS, BLOG_CTA } from '../data/blog'

/* ------------------------------------------------------------------
   Blogs — reachable at #/blog, linked from the Resources menu.

     §1  banner                        dark, photo
     §2  the featured piece            light
     §3  the index, filtered           light tint
     §4  still deciding?               dark, deep

   The posts themselves are still placeholders — see src/data/blog.js.
------------------------------------------------------------------ */

/* The gradient tile is the floor, not the picture. A post that carries
   a cover in the CMS paints it over the top; one that does not — every
   bundled post, and any article published without artwork — keeps the
   tile on its own, which is what the index looked like before covers
   existed. The tag pill sits above either. */
function Cover({ tone, tag, src, alt }) {
  return (
    <div className={`tc-post-cover tc-post-cover--${tone}`}>
      {src && <img className="tc-post-img" src={src} alt={alt || ''} loading="lazy" decoding="async" />}
      <span className="tc-post-tag">{tag}</span>
    </div>
  )
}

/* §2 — the piece we want read first.

   Handed its post rather than picking one itself: the list is fetched once in
   BlogPage and split there, so the index below and this band cannot disagree
   about which article is the latest. */
function Featured({ post }) {
  const ref = useReveal()

  if (!post) return null

  return (
    <section className="ap-light ap-sec" id="featured" ref={ref}>
      <div className="shell">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>Latest</p>
        </div>

        <SmartLink className="tc-feature" href={post.href} data-reveal="rise">
          <Cover tone={post.tone} tag={post.tag} src={post.cover} alt={post.coverAlt} />

          <div>
            <p className="tc-post-meta">
              {post.date} <i aria-hidden="true">•</i> {post.read}
            </p>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="tc-post-more">
              Read the article
              <PageIcon name="arrowRight" />
            </span>
          </div>
        </SmartLink>
      </div>
    </section>
  )
}

/* §3 — the index. Topic chips and a search box filter the grid; the
   reveal is keyed on the filter so freshly shown cards animate in
   rather than appearing fully formed. */
function Index({ posts }) {
  const [topic, setTopic] = useState('All')
  const [query, setQuery] = useState('')

  /* Topics come from the posts on this list rather than from a separate
     constant, so a chip can never offer a filter that matches nothing — and a
     new tag typed in the CMS shows up here on its own. */
  const topics = useMemo(() => [...new Set(posts.map((post) => post.tag))], [posts])

  const active = topic === 'All' || topics.includes(topic) ? topic : 'All'

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return posts.filter((post) => {
      if (active !== 'All' && post.tag !== active) return false
      if (!needle) return true
      return `${post.title} ${post.excerpt} ${post.tag}`.toLowerCase().includes(needle)
    })
  }, [posts, active, query])

  /* Keyed on the list too, not just the filter: when the fetch replaces the
     bundled posts the cards remount, and an observer still watching the old
     nodes would leave the new ones at opacity 0. */
  const ref = useFilteredReveal(`${listKey(posts)}-${active}-${query}`)

  const counts = useMemo(() => {
    const map = { All: posts.length }
    posts.forEach((post) => {
      map[post.tag] = (map[post.tag] || 0) + 1
    })
    return map
  }, [posts])

  return (
    <section className="ap-light ap-light--tint ap-sec" id="all-posts">
      <div className="shell">
        <div className="tc-lede">
          <div className="ap-head">
            <p className="ap-eyebrow">All articles</p>
            <h2 className="ap-title">Browse by topic</h2>
          </div>

          <label className="tc-search">
            <PageIcon name="search" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles"
              aria-label="Search articles"
            />
          </label>
        </div>

        <ul className="tc-filter">
          {['All', ...topics].map((entry) => (
            <li key={entry}>
              <button
                type="button"
                aria-pressed={active === entry}
                onClick={() => setTopic(entry)}
              >
                {entry}
                <b>{counts[entry] || 0}</b>
              </button>
            </li>
          ))}
        </ul>

        {visible.length > 0 ? (
          /* keyed on the filter so the observer re-runs and the new
             set reveals instead of snapping in */
          <ul className="tc-posts" key={`${listKey(posts)}-${active}-${query}`} ref={ref}>
            {visible.map((post, i) => (
              <li key={post.id} data-reveal="rise" style={{ '--d': `${Math.min(i, 8) * 60}ms` }}>
                <SmartLink className="tc-post" href={post.href}>
                  <Cover tone={post.tone} tag={post.tag} src={post.cover} alt={post.coverAlt} />

                  <div className="tc-post-body">
                    <p className="tc-post-meta">
                      {post.date} <i aria-hidden="true">•</i> {post.read}
                    </p>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="tc-post-more">
                      Read more
                      <PageIcon name="arrowRight" />
                    </span>
                  </div>
                </SmartLink>
              </li>
            ))}
          </ul>
        ) : (
          <p className="tc-empty">
            Nothing matches “{query}” under {active}. Try another topic, or clear the search.
          </p>
        )}

        <p className="tc-count">
          {visible.length} of {posts.length} articles
        </p>
      </div>
    </section>
  )
}

/**
 * @param initialPosts already fetched and mapped by src/app/blog/page.tsx,
 *   so the articles are in the HTML rather than fetched after it. `null`
 *   means the server asked and the CMS did not answer; leaving it out
 *   restores the old browser-side fetch.
 */
export default function BlogPage({ initialPosts }: { initialPosts?: any[] | null } = {}) {

  /* One request for the whole page. The API sorts newest first and `mapPost`
     marks the first record featured, which is the same rule the bundled list
     encodes by hand — so the split below works on either source. */
  const { items: posts } = useCmsList('/blogs', { map: mapPost, fallback: POSTS, initial: initialPosts })

  const featured = useMemo(() => posts.find((post) => post.featured) || posts[0], [posts])
  const rest = useMemo(
    () => posts.filter((post) => post.id !== featured?.id),
    [posts, featured]
  )

  return (
    <div className="tc-page tc-page--blog">

      <main id="main">
        <PageHero {...BLOG_HERO} id="blog-top" />
        <Featured post={featured} />
        <Index posts={rest} />
        <Cta />
      </main>
    </div>
  )
}
