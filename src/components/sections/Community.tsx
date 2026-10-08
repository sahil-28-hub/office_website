'use client'

import { useEffect, useRef, useState } from 'react'
import { useSectionVisible } from '../../hooks/useCourseMotion'
import './Community.css'
import WriteIn from '../common/WriteIn'
import { useCmsList } from '../../hooks/useCms'
import { mapTestimonial } from '../../lib/cms'
import VideoPlayer from '../common/VideoPlayer'
import VideoModal from '../common/VideoModal'
import { GoogleLogo, YouTubeLogo } from '../common/BrandLogos'
import { BRANCH_CITY, GOOGLE_REVIEWS_LINK } from '../../data/branch'

/* ------------------------------------------------------------------
   The fallback wall.

   The live reviews come from the CMS. These are what the section shows
   while that request is in flight, and what it keeps showing if the CMS
   cannot be reached — so they remain PLACEHOLDERS, and replacing them with
   real, consented feedback still matters. The wall re-lays itself out
   automatically for any list length.
------------------------------------------------------------------ */
const FALLBACK_STUDENTS = [
  {
    id: 's1',
    name: 'Harsimran Kaur',
    course: 'Full Stack Development',
    batch: '2024 batch',
    rating: 5,
    quote:
      'I came in knowing only basic HTML. By the end I had built and deployed a full MERN application on my own, and I could explain every line of it in an interview.'
  },
  {
    id: 's2',
    name: 'Arjun Mehta',
    course: 'Data Science',
    batch: '2024 batch',
    rating: 5,
    quote:
      'The classes never stopped at theory. Every concept came with a dataset in front of us, and the doubt sessions after class were where most of my learning actually happened.'
  },
  {
    id: 's3',
    name: 'Navjot Singh',
    course: 'AI & Machine Learning',
    batch: '2023 batch',
    rating: 5,
    quote:
      'Our mentor had shipped real ML systems, so he knew which shortcuts break in production. That perspective is what I use every day now.'
  },
  {
    id: 's4',
    name: 'Simran Bhatia',
    course: 'Digital Marketing',
    batch: '2025 batch',
    rating: 5,
    quote:
      'We ran live campaigns with real budgets instead of imaginary case studies. I walked out with a portfolio of results, not just a certificate.'
  },
  {
    id: 's5',
    name: 'Rohit Verma',
    course: 'Java Development',
    batch: '2024 batch',
    rating: 5,
    quote:
      'Core Java was taught slowly and properly before we touched Spring Boot. That foundation is the reason backend interviews stopped scaring me.'
  },
  {
    id: 's6',
    name: 'Ishita Sharma',
    course: 'Cyber Security',
    batch: '2025 batch',
    rating: 5,
    quote:
      'The lab setup let us break things safely. Doing my first web pentest on a machine I had configured myself made the whole subject click.'
  },
  {
    id: 's7',
    name: 'Gurpreet Sandhu',
    course: 'Cloud & DevOps',
    batch: '2024 batch',
    rating: 5,
    quote:
      'From a plain Linux box to a containerised app running through a CI pipeline — we built the whole chain ourselves rather than watching a demo.'
  },
  {
    id: 's8',
    name: 'Ananya Gupta',
    course: 'Python Programming',
    batch: '2025 batch',
    rating: 5,
    quote:
      'I switched fields after graduation and was worried I would be the slowest in the room. The trainers paced things so nobody got left behind.'
  },
  {
    id: 's9',
    name: 'Karan Malhotra',
    course: 'Full Stack Development',
    batch: '2023 batch',
    rating: 5,
    quote:
      'The mock interviews were harder than the real ones. Uncomfortable at the time, but it meant nothing caught me off guard later.'
  },
  {
    id: 's10',
    name: 'Priya Nair',
    course: 'Data Analytics',
    batch: '2024 batch',
    rating: 5,
    quote:
      'Excel to SQL to Power BI in a sequence that actually made sense. I now build the weekly reporting dashboard for my team.'
  },
  {
    id: 's11',
    name: 'Manav Chopra',
    course: 'AI & Machine Learning',
    batch: '2025 batch',
    rating: 5,
    quote:
      'The GenAI module was current — we worked with the tools that had come out that same year, not a syllabus written three years ago.'
  },
  {
    id: 's12',
    name: 'Jasleen Kaur',
    course: 'Web Development',
    batch: '2024 batch',
    rating: 5,
    quote:
      'Small batch, so the trainer knew exactly where each of us was stuck. That is the difference between a classroom and a video course.'
  }
]

const COLUMNS = 4

/* Each column is rendered twice and the track scrolls -50%, so a
   column only loops seamlessly if it is already taller than the wall.
   Below roughly three cards it comes up short and a gap slides
   through. Course pages only carry four testimonials, so the list is
   cycled up to this minimum before being split into columns. */
const MIN_CARDS = COLUMNS * 3

function fill(items: StudentReview[]) {
  if (items.length === 0) return items
  const out = []
  while (out.length < MIN_CARDS) out.push(...items)
  return out
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

/* sequential chunks, so each column reads as its own uninterrupted set */
function chunk(items: StudentReview[], cols: number) {
  const size = Math.ceil(items.length / cols)
  return Array.from({ length: cols }, (_, c) => items.slice(c * size, c * size + size))
}

function StarRow({ count, size = 'md' }: { count: number; size?: string }) {
  return (
    <span className={`cm-stars cm-stars--${size}`} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true" className={i < count ? 'is-on' : ''}>
          <path d="m10 1.8 2.4 5 5.5.8-4 3.9.95 5.5L10 14.4l-4.85 2.6.95-5.5-4-3.9 5.5-.8L10 1.8Z" />
        </svg>
      ))}
    </span>
  )
}

/* the classic four-colour "G" mark, used to attribute the reviews to Google */
function VerifiedBadge() {
  return (
    <span className="cm-verified">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#34a853"
          d="m12 2.5 2.32 1.36 2.7-.34 1.06 2.5 2.5 1.06-.34 2.7L21.6 12l-1.36 2.32.34 2.7-2.5 1.06-1.06 2.5-2.7-.34L12 21.6l-2.32-1.36-2.7.34-1.06-2.5-2.5-1.06.34-2.7L2.4 12l1.36-2.32-.34-2.7 2.5-1.06L7 3.42l2.7.34L12 2.5Z"
        />
        <path d="m8.4 12.2 2.4 2.4 4.8-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      Google Verified
    </span>
  )
}

function TestimonialCard({ student, duplicate }: { student: StudentReview; duplicate: boolean }) {
  /*
    The video plays inside the card rather than replacing the page or
    opening a tab. Per card, so opening one leaves the rest alone.

    `duplicate` cards are the cycled copies the wall uses to loop; they
    are aria-hidden, so their controls leave the tab order too.
  */
  const [playing, setPlaying] = useState(false)

  return (
    <article className="cm-card" aria-hidden={duplicate || undefined}>
      <header className="cm-card-head">
        <span className="cm-card-avatar">{initials(student.name)}</span>
        <div className="cm-card-who">
          <p className="cm-card-name">{student.name}</p>
          <p className="cm-card-role">
            {/* home reviews carry `batch`, a course's own carry `detail` */}
            {student.course} <span>/</span> {student.batch || student.detail}
          </p>
        </div>
      </header>

      <StarRow count={student.rating} size="sm" />

      <p className="cm-card-quote">{student.quote}</p>

      {/*
        Attribution follows the review's own `source`.

        A CMS review carries where it was actually left, and stamping the
        Google mark on one that came through the website's own form would
        tell the visitor something specific and untrue. The bundled entries
        below have no source and keep the original footer — they are
        placeholders either way.
      */}
      {/* Opened over the page rather than inside the card — a wall
          card is about 300px wide, which is no size to watch anything
          at. See VideoModal. */}
      {playing && student.videoUrl && (
        <VideoModal
          url={student.videoUrl}
          title={`${student.name} on their course`}
          onClose={() => setPlaying(false)}
        />
      )}

      <footer className="cm-card-foot">
        {/*
          Where this was left, and what else there is of it.

          The Google mark is a link when the record carries an address
          — `mapReview` used to drop the `googleUrl` the CMS stores, so
          the mark claimed a source it could not show. A review with no
          address keeps the mark and loses the link: it is still
          genuinely from Google, it just cannot be deep-linked.
        */}
        {student.source && student.source !== 'google' ? (
          <span>{student.source === 'walk-in' ? 'Shared at the centre' : 'Posted on our website'}</span>
        ) : student.googleUrl ? (
          <a
            className="cm-card-source"
            href={student.googleUrl}
            target="_blank"
            rel="noreferrer noopener"
            tabIndex={duplicate ? -1 : undefined}
          >
            <GoogleLogo className="cm-card-google" />
            Read on Google
          </a>
        ) : (
          <span className="cm-card-source">
            <GoogleLogo className="cm-card-google" />
            Posted on Google
          </span>
        )}

        {/* A recorded testimonial. The CMS has stored `video_url` since
            the table was created and nothing showed it. */}
        {student.videoUrl && (
          <button
            type="button"
            className="cm-card-source cm-card-video-btn"
            onClick={() => setPlaying(true)}
            tabIndex={duplicate ? -1 : undefined}
          >
            <YouTubeLogo className="cm-card-yt" />
            Watch
          </button>
        )}
      </footer>
    </article>
  )
}

/* `items`, `title` and `sub` let a course page reuse this exact wall
   with its own reviews. Everything defaults to the home-page content,
   so <Community /> with no props is unchanged. */
interface StudentReview {
  id?: string
  name: string
  course: string
  batch?: string
  detail?: string
  rating: number
  quote: string
  source?: string
  /** where a Google review can be read — see the card footer */
  googleUrl?: string
  /** a recorded testimonial, played inside the card */
  videoUrl?: string
}

/**
 * @param items          a course page hands in its own reviews
 * @param initialTestimonials what src/app/page.tsx already fetched — see
 *   the note there for why testimonials, not reviews, fill this wall.
 */
export default function Community({
  items,
  title,
  sub,
  videoUrl,
  initialTestimonials
}: {
  items?: StudentReview[]
  title?: React.ReactNode
  sub?: string
  /** a course's own reviews video, from the CMS */
  videoUrl?: string
  initialTestimonials?: any[] | null
}) {
  /* adds `is-visible` once the band is reached — and also if the page
     jumped straight past it, which is the case this section used to
     miss. Its own copy of the observer only fired on a threshold
     CROSSING, so a jump to the foot of the page left the whole wall of
     quotes rendered at full height with nothing in it, until a reload.
     See useSectionVisible. */
  const sectionRef = useSectionVisible(0.15)

  /* A course page hands its own reviews in through `items`; the home page does
     not, and gets the CMS list instead. Passing `null` as the path skips the
     request entirely rather than fetching a list that would be thrown away.

     TESTIMONIALS, NOT REVIEWS

     This wall used to read /reviews, which was the wrong table for it. A
     review is a rating attached to a course and is counted into the
     breakdown on /reviews; a testimonial is a quote with a face on it that
     any page may show, which is exactly what this section is. The CMS keeps
     them apart for that reason, and `mapTestimonial` — written for this and
     unused until now — is the mapper that belongs here.

     The server falls back to /reviews when there are no testimonials yet,
     so a CMS filled in only one of the two still fills this wall. */
  const { items: published } = useCmsList(items?.length ? null : '/testimonials', {
    map: mapTestimonial,
    fallback: FALLBACK_STUDENTS,
    limit: 24,
    initial: items?.length ? undefined : initialTestimonials
  })

  const columns = chunk(fill(items?.length ? items : published), COLUMNS)

  return (
    <section className="cm" id="reviews" ref={sectionRef}>
      <div className="cm-bg" aria-hidden="true">
        <span className="tech-texture" />
        <span className="cm-orb cm-orb--blue" />
        <span className="cm-orb cm-orb--violet" />
      </div>

      <div className="shell cm-inner">
        <header className="cm-head">
          <p className="cm-eyebrow">
            <span className="dot" />
            Student Voices
          </p>
          <h2 className="cm-title">
            <WriteIn>
              {title || (
                <>Voices From The <span className="cm-title-accent">techcadd Community</span></>
              )}
            </WriteIn>
          </h2>
          <p className="cm-sub">
            {sub || 'Thousands of learning journeys. Hundreds of stories. One growing technology community.'}
          </p>
        </header>

        <div className="cm-body">
          {/* The whole card opens the institute's reviews on Google: a
              rating that cannot be checked is only a claim. */}
          <a
            className="cm-trust"
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read techcadd ${BRANCH_CITY}'s reviews on Google (opens in a new tab)`}
          >
            <span className="cm-trust-google">
              <GoogleLogo />
              Google Reviews
            </span>
            <span className="cm-trust-rating">
              <b>4.8</b>
              <StarRow count={5} />
            </span>
            <span className="cm-trust-count">from 181 Google reviews</span>
            <VerifiedBadge />
          </a>

          {/* The course's reviews video, where the CMS holds one.
              `reviews_video_url` has been in the schema since the
              course media migrations and nothing read it, so a course
              that had one showed no sign of it. Plays in place. */}
          {videoUrl && (
            <div className="cm-video">
              <VideoPlayer url={videoUrl} title="What our students say" />
            </div>
          )}

          <div className="cm-wall">
            {columns.map((col, i) => (
              <div className="cm-col" key={i}>
                <div className={`cm-track${i % 2 ? ' cm-track--rev' : ''}`}>
                  {[...col, ...col].map((student, j) => (
                    <TestimonialCard
                      student={student}
                      duplicate={j >= col.length}
                      /* course reviews have no id, and the cycle-fill
                         means names repeat — index keeps keys unique */
                      key={`${student.id || student.name}-${i}-${j}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="cm-hint">Real, unedited feedback from techcadd learners on Google.</p>
      </div>
    </section>
  )
}
