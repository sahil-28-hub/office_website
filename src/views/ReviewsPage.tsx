'use client'

import { useMemo, useRef, useState } from 'react'
import { useReveal } from '../hooks/useCourseMotion'
import { useCmsList, listKey } from '../hooks/useCms'
import VideoPlayer from '../components/common/VideoPlayer'
import VideoModal from '../components/common/VideoModal'
import { GoogleLogo, YouTubeLogo } from '../components/common/BrandLogos'
import { breakdownFrom, mapReview } from '../lib/cms'
import { useSpotlight } from '../hooks/useAboutMotion'
import { useSectionProgress, useFilteredReveal } from '../hooks/usePageMotion'
import '../components/kit/page-kit.css'
import './ReviewsPage.css'
import PageHero from '../components/kit/PageHero'
import Cta from '../components/sections/Cta'
import Marquee from '../components/kit/Marquee'
import PageIcon from '../components/kit/icons'
import { RV_HERO, REVIEWS, RV_BREAKDOWN, RV_THEMES, RV_STORIES, RV_CTA } from '../data/reviews'

/* ------------------------------------------------------------------
   Reviews — reachable at #/reviews, linked from the Resources menu.

     §1  banner                        dark, photo
     §2  two rails of quotes           light
     §3  the rating breakdown          dark
     §4  the recurring themes          light tint
     §5  three longer stories          dark
     §6  every review, filtered        light
     §7  your turn                     dark, deep

   Every quote is still a placeholder — see src/data/reviews.js.
------------------------------------------------------------------ */

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function Stars({ rating }) {
  return (
    <div className="tc-stars" role="img" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <PageIcon name="star" key={i} filled={i < rating} style={{ opacity: i < rating ? 1 : 0.28 }} />
      ))}
    </div>
  )
}

/**
 * @param duplicate the rails render each list twice to loop seamlessly;
 *   the second copy is decorative, so its link leaves the tab order.
 */
function Review({ review, className = '', duplicate = false, showVideo = false }) {
  /* The dialog is portalled to <body>, so it escapes the marquee's
     clipping and its columns' transforms — which is why a card in the
     rails can open one at all. */
  const [open, setOpen] = useState(false)

  return (
    <figure className={`tc-review ${className}`.trim()}>
      <Stars rating={review.rating} />
      <blockquote>“{review.quote}”</blockquote>

      <figcaption>
        <span className="tc-avatar" aria-hidden="true">{initials(review.name)}</span>
        <span className="tc-review-who">
          <b>{review.name}</b>
          {/*
            The separator only when there is something after it.

            A testimonial carries `detail` where a review carries
            `batch`, and may carry neither — which rendered as
            "techcadd ·" with a dangling middot and nothing following.
          */}
          <span>
            {review.course}
            {(review.batch || review.detail) && ` · ${review.batch || review.detail}`}
          </span>
        </span>
      </figcaption>

      {/*
        The address this review can be read at, when the CMS holds one.

        `google_url` has existed on the reviews table since migration
        015 for exactly this, and nothing rendered it — so the page
        carried the Google mark while offering no way to check a single
        review against its source. Shown only when there is a real
        address: a review typed up from a walk-in has none, and
        inventing a link would be worse than omitting it.
      */}
      {/*
        The large preview, in the grid only.

        A 16:9 thumbnail inside a rail card would dwarf the quote, and
        the rails duplicate every card to loop. The mark below is what
        carries the video in the rails instead — it opens the same
        dialog without taking the space.
      */}
      {showVideo && review.videoUrl && (
        <VideoPlayer
          url={review.videoUrl}
          title={`${review.name} on their techcadd course`}
          className="tc-review-video"
        />
      )}

      {/*
        The marks under a review: where it was left, and whether there
        is a recording of it.

        The Google one was text-only, which read as a plain link rather
        than a verifiable source — the mark is what tells a visitor
        this can be checked on a profile they already trust.
      */}
      {(review.googleUrl || review.videoUrl) && (
        <p className="tc-review-marks">
          {review.googleUrl && (
            <a
              className="tc-review-source"
              href={review.googleUrl}
              target="_blank"
              rel="noreferrer noopener"
              tabIndex={duplicate ? -1 : undefined}
            >
              <GoogleLogo className="tc-review-google" />
              Read on Google
            </a>
          )}

          {/*
            The video, wherever the card appears.

            This used to be gated on `showVideo` alongside the preview,
            which meant the rails at the top of the page — the first
            thing anyone sees — showed the Google mark and no sign of a
            video at all. The rails pause on hover, so the button is
            reachable there.
          */}
          {review.videoUrl && (
            <button
              type="button"
              className="tc-review-source tc-review-watch"
              onClick={() => setOpen(true)}
              tabIndex={duplicate ? -1 : undefined}
            >
              <YouTubeLogo className="tc-review-yt" />
              Watch video
            </button>
          )}
        </p>
      )}

      {open && review.videoUrl && (
        <VideoModal
          url={review.videoUrl}
          title={`${review.name} on their techcadd course`}
          onClose={() => setOpen(false)}
        />
      )}
    </figure>
  )
}

/* §2 — two rails running against each other, paused on hover. */
function Rails({ reviews }) {
  const ref = useReveal()

  return (
    <section className="ap-light ap-sec tc-rv-rails" id="voices" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>In their words</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>
            {reviews.length} learners, one page
          </h2>
        </div>
      </div>

      <div data-reveal="scale" style={{ '--d': '140ms' }}>
        <Marquee
          key={listKey(reviews)}
          items={reviews}
          speed={62}
          render={(review, _i, duplicate) => <Review review={review} duplicate={duplicate} />}
        />
      </div>
    </section>
  )
}

/* §3 — the breakdown. The bars grow with the section's scroll.

   Counted from the reviews on the page when they come from the CMS: quoting a
   distribution the visible list does not support is the kind of thing that
   gets noticed. The bundled figures stand in only while the CMS is
   unreachable, which is also when the bundled reviews are what is shown. */
function Breakdown({ breakdown }) {
  const revealRef = useReveal()
  const progressRef = useSectionProgress('enter')

  return (
    <section className="ap-dark ap-sec" id="rating" ref={progressRef}>
      <div className="shell" ref={revealRef}>
        <div className="tc-split tc-rv-breakdown">
          <div className="ap-head">
            <p className="ap-eyebrow" data-reveal>The rating</p>

            <div className="tc-score" data-reveal style={{ '--d': '90ms' }}>
              <strong>{breakdown.score}</strong>
              <span>{breakdown.outOf}</span>
            </div>

            <div data-reveal style={{ '--d': '140ms' }}>
              <Stars rating={5} />
            </div>

            <p className="ap-note tc-rv-total" data-reveal style={{ '--d': '190ms' }}>
              {breakdown.total}
            </p>
          </div>

          <ul className="tc-bars" data-reveal="right">
            {breakdown.rows.map((row) => (
              <li className="tc-bar" key={row.stars} style={{ '--v': row.pct / 100 }}>
                <span>{row.stars} star</span>
                <i aria-hidden="true" />
                <b>{row.pct}%</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* §4 — what reviewers keep saying, in four cards. */
function Themes() {
  const revealRef = useReveal()
  const spotRef = useSpotlight('.tc-card')

  return (
    <section className="ap-light ap-light--tint ap-sec" id="themes" ref={revealRef}>
      <div className="shell">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>{RV_THEMES.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{RV_THEMES.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{RV_THEMES.lead}</p>
        </div>

        <ul className="tc-grid tc-grid--4" ref={spotRef}>
          {RV_THEMES.themes.map((theme, i) => (
            <li
              className="tc-card"
              key={theme.no}
              data-spot
              data-reveal="rise"
              style={{ '--d': `${i * 80}ms` }}
            >
              <div className="tc-card-head">
                <span className="ap-ico">
                  <PageIcon name={theme.icon} />
                </span>
                <span className="tc-card-no">{theme.no}</span>
              </div>
              <h3>{theme.title}</h3>
              <p>{theme.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* §5 — three before/after stories, on a rail that fills with scroll. */
function Stories() {
  const revealRef = useReveal()
  const progressRef = useSectionProgress()

  return (
    <section className="ap-dark ap-sec" id="stories" ref={revealRef}>
      <div className="shell">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>{RV_STORIES.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{RV_STORIES.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{RV_STORIES.lead}</p>
        </div>

        <ol className="tc-steps" ref={progressRef}>
          {RV_STORIES.stories.map((story, i) => (
            <li
              className="tc-step"
              key={story.id}
              data-reveal="right"
              style={{ '--d': `${i * 90}ms` }}
            >
              <p className="tc-step-tag">{story.course}</p>
              <h3>{story.name}</h3>

              <div className="tc-rv-arc">
                <span>{story.before}</span>
                <PageIcon name="arrowRight" />
                <span>{story.after}</span>
              </div>

              <p>“{story.text}”</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* §6 — everything, filtered by course and paged six at a time. */
const PER_PAGE = 6

function All({ reviews }) {
  const [course, setCourse] = useState('All')
  const [page, setPage] = useState(1)
  const sectionRef = useRef(null)

  const courses = useMemo(
    () => ['All', ...[...new Set(reviews.map((r) => r.course))].sort()],
    [reviews]
  )

  /* A course chosen from the bundled list may not exist once the CMS answers,
     which would otherwise leave the reader on an empty filter. */
  const active = courses.includes(course) ? course : 'All'

  const visible = useMemo(
    () => (active === 'All' ? reviews : reviews.filter((r) => r.course === active)),
    [reviews, active]
  )

  const pages = Math.max(1, Math.ceil(visible.length / PER_PAGE))
  /* a filter that shortens the list can strand the reader on a page
     that no longer exists, so the page is clamped on the way out
     rather than corrected in an effect after a blank render */
  const current = Math.min(page, pages)
  const start = (current - 1) * PER_PAGE
  const shown = visible.slice(start, start + PER_PAGE)

  /* the grid is swapped whole on every filter and every page, so the
     reveal observer has to be rebuilt on the same key */
  const ref = useFilteredReveal(`${listKey(reviews)}-${active}-${current}`)

  const goTo = (next) => {
    setPage(next)
    /* bring the top of the list back into view — paging to the next
       six and being left at the foot of the page is disorienting */
    const list = sectionRef.current
    if (!list) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    list.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <section className="ap-light ap-sec" id="all-reviews" ref={sectionRef}>
      <div className="shell">
        <div className="tc-lede">
          <div className="ap-head">
            <p className="ap-eyebrow">Every review</p>
            <h2 className="ap-title">Filter by course</h2>
          </div>

          <label className="tc-select">
            <span className="sr-only">Filter reviews by course</span>

            <PageIcon name="layers" />

            <select
              value={active}
              onChange={(event) => {
                setCourse(event.target.value)
                setPage(1)
              }}
            >
              {courses.map((entry) => (
                <option value={entry} key={entry}>
                  {entry === 'All' ? `All courses (${reviews.length})` : entry}
                </option>
              ))}
            </select>

            <PageIcon name="arrowDown" className="tc-select-caret" />
          </label>
        </div>

        <ul className="tc-rv-grid" key={`${listKey(reviews)}-${active}-${current}`} ref={ref}>
          {shown.map((review, i) => (
            <li key={review.id} data-reveal="rise" style={{ '--d': `${Math.min(i, 8) * 60}ms` }}>
              <Review review={review} className="tc-review--grid" showVideo />
            </li>
          ))}
        </ul>

        {pages > 1 && (
          <nav className="tc-pager" aria-label="Reviews pages">
            <button
              className="tc-pager-step"
              type="button"
              onClick={() => goTo(current - 1)}
              disabled={current === 1}
              aria-label="Previous page"
            >
              <PageIcon name="arrowRight" />
            </button>

            <ul>
              {Array.from({ length: pages }, (_, i) => i + 1).map((number) => (
                <li key={number}>
                  <button
                    type="button"
                    aria-current={number === current ? 'page' : undefined}
                    aria-label={`Page ${number}`}
                    onClick={() => goTo(number)}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>

            <button
              className="tc-pager-step"
              type="button"
              onClick={() => goTo(current + 1)}
              disabled={current === pages}
              aria-label="Next page"
            >
              <PageIcon name="arrowRight" />
            </button>
          </nav>
        )}

        <p className="tc-count" aria-live="polite">
          Showing {shown.length} of {visible.length}
          {course === 'All' ? ' reviews' : ` reviews for ${course}`} · page {current} of {pages}
        </p>
      </div>
    </section>
  )
}

/** @param initialReviews already fetched and mapped by src/app/reviews/page.tsx. */
export default function ReviewsPage({ initialReviews }: { initialReviews?: any[] | null } = {}) {

  /* One request for the three bands that render reviews, so the marquee, the
     rating bars and the grid are always describing the same set. */
  const { items: reviews, state } = useCmsList('/reviews', {
    map: mapReview,
    fallback: REVIEWS,
    initial: initialReviews
  })

  const breakdown = useMemo(
    () => (state === 'cms' && reviews.length ? breakdownFrom(reviews) : RV_BREAKDOWN),
    [state, reviews]
  )

  return (
    <div className="tc-page tc-page--reviews">

      <main id="main">
        <PageHero {...RV_HERO} id="reviews-top" />
        <Rails reviews={reviews} />
        <Breakdown breakdown={breakdown} />
        <Themes />
        <Stories />
        <All reviews={reviews} />
        <Cta />
      </main>
    </div>
  )
}
