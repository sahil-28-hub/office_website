'use client'

import { useState } from 'react'
import SmartLink from '../common/SmartLink'
import './CourseCategories.css'
import WriteIn from '../common/WriteIn'
import { useReveal } from '../../hooks/useCourseMotion'

function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4.2a3.2 3.2 0 0 0-3.2 3.2v.3A2.9 2.9 0 0 0 6 10.5a2.9 2.9 0 0 0 1.4 2.5v.4A3.1 3.1 0 0 0 12 19.8a3.1 3.1 0 0 0 4.6-6.4v-.4A2.9 2.9 0 0 0 18 10.5a2.9 2.9 0 0 0-2.8-2.8v-.3A3.2 3.2 0 0 0 12 4.2Z" />
      <path d="M12 4.2v15.6" />
    </svg>
  )
}
function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </svg>
  )
}
function DataIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V11M9.3 19V6M14.7 19v-6M20 19V9" />
      <path d="M3 21h18" />
    </svg>
  )
}
function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3.5h4a2 2 0 0 1 2 2v3H8v1.5h9a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3h7v-1.5H8a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" />
    </svg>
  )
}
function MarketingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9.5v5h3l6 3.5V6L7 9.5H4Z" />
      <path d="M17 9.2a4 4 0 0 1 0 5.6" />
      <path d="M19.6 6.6a7.6 7.6 0 0 1 0 10.8" />
    </svg>
  )
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.2 4.8 6v5.4c0 4.2 2.9 7.7 7.2 9.4 4.3-1.7 7.2-5.2 7.2-9.4V6L12 3.2Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  )
}

/* ------------------------------------------------------------------
   Six real course categories, three to a row, each backed by a live
   /courses/<slug> page — no placeholder links.

   Every tile is a flat brand card at rest: accent chip on top, name
   and one line of copy at the bottom. Hovering one widens it inside
   its row (its two neighbours give up the space) and the photograph
   unfolds down the right-hand side. `tone` picks the accent pair; the
   photograph is optional, and a tile whose file is missing simply
   never opens a media panel.
------------------------------------------------------------------ */
const CATEGORIES = [
  {
    id: 'fullstack',
    label: 'Full Stack Development',
    blurb: 'HTML to a deployed MERN application.',
    href: '/courses/mern-stack',
    icon: StackIcon,
    tone: 'blue',
    image: '/findtrack/fullstack.jpeg'
  },
  {
    id: 'data',
    label: 'Data Science',
    blurb: 'Python, statistics and real datasets.',
    href: '/courses/data-science',
    icon: DataIcon,
    tone: 'teal',
    image: '/findtrack/data-science-tile.jpeg'
  },
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    blurb: 'From the fundamentals to Generative AI.',
    href: '/courses/artificial-intelligence',
    icon: AiIcon,
    tone: 'indigo',
    image: '/findtrack/aitrack-tile.jpeg'
  },
  {
    id: 'python',
    label: 'Python Programming',
    blurb: 'The language behind AI and automation.',
    href: '/courses/python',
    icon: PythonIcon,
    tone: 'warm',
    image: '/findtrack/pythontrack-tile.jpeg'
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    blurb: 'SEO, paid ads and analytics that convert.',
    href: '/courses/digital-marketing',
    icon: MarketingIcon,
    tone: 'pink',
    image: '/findtrack/digital-tile.jpeg'
  },
  {
    id: 'cyber',
    label: 'Cyber Security',
    blurb: 'Networks, ethical hacking and defence.',
    href: '/courses/cybersecurity',
    icon: ShieldIcon,
    tone: 'green',
    image: '/courses/cybersecurity-hero.webp'
  }
]

/* three to a row, so each row is its own flex track — a hovered card
   can only ever borrow width from the two cards beside it */
const ROWS = [CATEGORIES.slice(0, 3), CATEGORIES.slice(3, 6)]

/* Same contract as the home page's course cards: if the file 404s the
   card keeps its accent wash and never opens a media panel. */
function TileMedia({ src }: { src?: string }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return null
  return (
    <span className="cc-card-media" aria-hidden="true">
      <span className="cc-card-frame">
        <img src={src} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)} />
      </span>
    </span>
  )
}

function TrackCard({ data, index }: { data: typeof CATEGORIES[number]; index: number }) {
  const { label, blurb, href, icon: Icon, tone, image } = data
  return (
    <div className="cc-cell" data-reveal style={{ '--i': index } as React.CSSProperties}>
      <SmartLink className="cc-card" href={href} data-tone={tone}>
        <span className="cc-card-body">
          <span className="cc-card-icon">
            <Icon />
          </span>
          <span className="cc-card-text">
            <span className="cc-card-label">{label}</span>
            <span className="cc-card-blurb">{blurb}</span>
            <span className="cc-card-cta">
              Explore course
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        </span>
        <TileMedia src={image} />
      </SmartLink>
    </div>
  )
}

export default function CourseCategories() {
  /* one observer for the section; every [data-reveal] cell rises in
     once, staggered by its --i */
  const revealRef = useReveal()

  return (
    <section className="cc" id="tracks">
      <span className="tech-texture" aria-hidden="true" />

      <div className="shell cc-inner" ref={revealRef}>
        <div className="cc-heading" data-reveal>
          <p className="cc-eyebrow">
            <span className="dot" />
            Course Categories
          </p>
          <h2 className="cc-title"><WriteIn>
            Find Your <span className="cc-title-accent">Track</span>
          </WriteIn></h2>
          <p className="cc-lede">
            Six directions, one campus. Hover a track to look inside it.
          </p>
        </div>

        <div className="cc-tray">
          {ROWS.map((row, r) => (
            <div className="cc-row" key={r}>
              {row.map((item, i) => (
                <TrackCard key={item.id} data={item} index={r * 3 + i} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
