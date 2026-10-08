'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import SmartLink from '../common/SmartLink'
import './Blog.css'
import WriteIn from '../common/WriteIn'
import { useSectionVisible } from '../../hooks/useCourseMotion'
import { useCmsList, listKey } from '../../hooks/useCms'
import { mapPost } from '../../lib/cms'

/* ------------------------------------------------------------------
   The fallback cards.

   The live posts come from the CMS, newest first, and link to the article
   itself. These stand in while that request is in flight and if it fails —
   note their hrefs only reach the index, which is the best a bundled card
   can honestly offer. `tone` picks the cover gradient: blue | violet |
   cyan | indigo.
------------------------------------------------------------------ */
const FALLBACK_POSTS = [
  {
    id: 'ai-course',
    tag: 'AI & Data',
    tone: 'blue',
    date: 'Jul 28, 2026',
    read: '6 min read',
    title: 'Which AI course should you actually take after B.Tech?',
    excerpt:
      'Machine learning, deep learning or generative AI — the three tracks overlap far less than the course names suggest. Here\u2019s how to pick.',
    href: '/blog'
  },
  {
    id: 'mern-mean',
    tag: 'Full-Stack',
    tone: 'violet',
    date: 'Jul 14, 2026',
    read: '8 min read',
    title: 'MERN vs MEAN in 2026: what Ludhiana employers are hiring for',
    excerpt:
      'We pulled the stack requirements from every drive our placement cell ran last quarter. The gap between the two is smaller than you think.',
    href: '/blog'
  },
  {
    id: 'training',
    tag: 'Careers',
    tone: 'cyan',
    date: 'Jun 30, 2026',
    read: '5 min read',
    title: 'How to make your 6-month industrial training actually count',
    excerpt:
      'Most students treat training as a formality for their university file. The ones who get placed treat it as their first job.',
    href: '/blog'
  },
  {
    id: 'cloud-first',
    tag: 'Cloud',
    tone: 'indigo',
    date: 'Jun 12, 2026',
    read: '7 min read',
    title: 'Docker before Kubernetes: the order most self-taught engineers get wrong',
    excerpt:
      'Orchestration makes no sense until containers do. A sequence for learning the deployment stack without skipping the part that matters.',
    href: '/blog'
  },
  {
    id: 'first-project',
    tag: 'Projects',
    tone: 'blue',
    date: 'May 26, 2026',
    read: '6 min read',
    title: 'Your first real project should be boring, and that is the point',
    excerpt:
      'A working CRUD app you can explain beats an ambitious half-finished one. What interviewers actually probe when they open your repo.',
    href: '/blog'
  },
  {
    id: 'security-basics',
    tag: 'Cyber',
    tone: 'violet',
    date: 'May 09, 2026',
    read: '9 min read',
    title: 'Learn networking before you learn hacking',
    excerpt:
      'Every security course that starts with tools produces students who cannot debug their own lab. Start where the packets are.',
    href: '/blog'
  }
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** @param initialPosts server-fetched by src/app/page.tsx; see useCms. */
export default function Blog({ initialPosts }: { initialPosts?: any[] | null } = {}) {
  /* adds `is-visible` once the rail is reached — and also if the page
     jumped straight past it. See useSectionVisible; this section used
     to carry its own observer, which never fired on a jump and left
     the whole rail blank until a reload. */
  const sectionRef = useSectionVisible(0.12)
  const trackRef = useRef(null)

  /* The rail shows the most recent handful, not the whole index — the page
     links through to /blog for that. */
  const { items: posts } = useCmsList('/blogs', {
    map: mapPost,
    fallback: FALLBACK_POSTS,
    limit: 6,
    initial: initialPosts
  })

  const key = listKey(posts)

  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    setAtStart(track.scrollLeft <= 8)
    setAtEnd(track.scrollLeft >= max - 8)
  }, [])

  const page = useCallback((direction: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.blog-card')
    const gap = parseFloat(getComputedStyle(track).columnGap) || 24
    const step = card ? card.offsetWidth + gap : track.clientWidth * 0.8
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({ left: direction * step, behavior: reduced ? 'auto' : 'smooth' })
  }, [])

  /* `posts` is in the deps, not just `sync`: swapping the bundled cards for
     the CMS ones changes the rail's scrollWidth but not the track's own box,
     so the ResizeObserver never fires and the arrows would stay disabled on a
     list that has since become scrollable. */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    sync()
    track.addEventListener('scroll', sync, { passive: true })
    const ro = new ResizeObserver(sync)
    ro.observe(track)
    return () => {
      track.removeEventListener('scroll', sync)
      ro.disconnect()
    }
  }, [sync, key])

  return (
    <section className="blog" id="blog" ref={sectionRef}>
      <div className="shell blog-inner">
        <header className="blog-head">
          <div className="blog-head-copy">
            <p className="blog-badge">Blogs</p>
            <h2 className="blog-title"><WriteIn>Notes from the classroom and the codebase</WriteIn></h2>
          </div>

          <SmartLink className="blog-all" href="/blog">
            Read all posts
            <span className="blog-all-icon" aria-hidden="true">
              <ArrowIcon />
            </span>
          </SmartLink>
        </header>

        <ul className="blog-track" ref={trackRef}>
          {posts.map((post) => (
            <li className="blog-card" key={post.id}>
              <SmartLink className="blog-card-link" href={post.href}>
                {/* The gradient is the base; a post with a cover in the CMS
                    paints it over the top, same as the /blog index. The
                    bundled fallback cards carry none and keep the gradient. */}
                <div className={`blog-cover blog-cover--${post.tone}${post.cover ? ' blog-cover--photo' : ''}`}>
                  {post.cover && (
                    <img
                      className="blog-cover-img"
                      src={post.cover}
                      alt={post.coverAlt || ''}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <span className="blog-cover-tag">{post.tag}</span>
                </div>

                <div className="blog-body">
                  <p className="blog-meta">
                    {post.date} <i aria-hidden="true">•</i> {post.read}
                  </p>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
              </SmartLink>
            </li>
          ))}
        </ul>

        <div className="blog-nav">
          <button
            className="blog-arrow"
            type="button"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label="Previous posts"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M16 10H5m0 0 4.2-4.2M5 10l4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            className="blog-arrow"
            type="button"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label="More posts"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
