'use client'

import { useState } from 'react'
import { coursePath } from '../../data/courses/path'
import SmartLink from '../common/SmartLink'
import './PopularCourses.css'
import '../common/Skeleton.css'
import WriteIn from '../common/WriteIn'
import { usePinnedProgress } from '../../hooks/usePinnedProgress'

/* A card photo that degrades honestly: give a course an `image` and it
   sits behind the scrim; leave it off (or let the file 404) and the
   card falls back to its own `tone` gradient, which is what every card
   without a photo already shows. */
function CardMedia({ src }: { src?: string }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  if (!src || failed) return null
  return (
    <>
      {/* these are ~270KB photographs on a lazy load — a shimmering
          plate under the scrim reads as "arriving", where the bare
          gradient reads as "this card just has no picture" */}
      {!loaded && <span className="sk sk--card sk-media" data-tone="ink" aria-hidden="true" />}
      <img
        className="pc-card-media"
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </>
  )
}

function StackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
    </svg>
  )
}
function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4.2a3.2 3.2 0 0 0-3.2 3.2v.3A2.9 2.9 0 0 0 6 10.5a2.9 2.9 0 0 0 1.4 2.5v.4A3.1 3.1 0 0 0 12 19.8a3.1 3.1 0 0 0 4.6-6.4v-.4A2.9 2.9 0 0 0 18 10.5a2.9 2.9 0 0 0-2.8-2.8v-.3A3.2 3.2 0 0 0 12 4.2Z" />
      <path d="M12 4.2v15.6" />
    </svg>
  )
}
function DataIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V11M9.3 19V6M14.7 19v-6M20 19V9" />
      <path d="M3 21h18" />
    </svg>
  )
}
function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3.5h4a2 2 0 0 1 2 2v3H8v1.5h9a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3h7v-1.5H8a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" />
    </svg>
  )
}
function JavaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 10.5h3.5a2.2 2.2 0 0 1 0 4.4H17" />
      <path d="M6.5 10.5h11v4.4a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-4.4Z" />
      <path d="M10.3 4c-1.5 1.2.4 2 .7 2.9" />
      <path d="M13.2 5.5c1 .8.3 1.6-.2 2.1" />
      <path d="M5.5 20c5 1.1 8.5 1.1 13 0" />
    </svg>
  )
}
function MarketingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9.5v5h3l6 3.5V6L7 9.5H4Z" />
      <path d="M17 9.2a4 4 0 0 1 0 5.6" />
      <path d="M19.6 6.6a7.6 7.6 0 0 1 0 10.8" />
    </svg>
  )
}
function MlIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="7" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="14" cy="12" r="2" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="20" cy="18" r="2" />
      <path d="M7.7 8.2 12.3 11M7.7 15.8 12.3 13M15.7 11 18.3 7.4M15.7 13l2.6 3.6" />
    </svg>
  )
}
function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M6.5 6.75h.01M9 6.75h.01" />
    </svg>
  )
}
function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3.4M12 17.6V21M3 12h3.4M17.6 12H21" />
      <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z" />
    </svg>
  )
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.3-4.3" />
    </svg>
  )
}

/* ------------------------------------------------------------------
   Ten real, live course pages — every card links to an actual
   /courses/<slug> route. No stock photography exists in this repo,
   so each "poster" is a rich gradient tone + icon, matching the
   convention already used on CourseCategories.
------------------------------------------------------------------ */
/* `image` paths match the files in public/ EXACTLY, including the
   capital A in gen-Ai.jpeg — Vercel serves from a case-sensitive
   filesystem, so "gen-ai.jpeg" resolves fine on Windows but not in
   production. Rename the files and these strings together, or not at
   all. All ten have a photograph now; any card that loses its file
   falls back to the `tone` gradient rather than showing a hole. */
const COURSES = [
  { slug: 'mern-stack', name: 'Full Stack Development', tag: 'Programming', icon: StackIcon, tone: 'blue', image: '/full-stack.jpeg' },
  { slug: 'artificial-intelligence', name: 'Artificial Intelligence', tag: 'AI & Data', icon: AiIcon, tone: 'indigo', image: '/ai.jpeg' },
  { slug: 'data-science', name: 'Data Science', tag: 'AI & Data', icon: DataIcon, tone: 'teal', image: '/data-science.jpeg' },
  { slug: 'python', name: 'Python Programming', tag: 'Programming', icon: PythonIcon, tone: 'warm', image: '/python.jpeg' },
  { slug: 'java', name: 'Java Development', tag: 'Programming', icon: JavaIcon, tone: 'orange', image: '/java.jpeg' },
  { slug: 'digital-marketing', name: 'Digital Marketing', tag: 'Marketing', icon: MarketingIcon, tone: 'pink', image: '/digital-marketing.jpeg' },
  { slug: 'machine-learning', name: 'Machine Learning', tag: 'AI & Data', icon: MlIcon, tone: 'violet', image: '/machine.jpeg' },
  { slug: 'web-development', name: 'Web Development', tag: 'Programming', icon: WebIcon, tone: 'cyan', image: '/webdevelopment.jpeg' },
  { slug: 'generative-ai', name: 'Generative AI', tag: 'AI & Data', icon: SparkIcon, tone: 'purple', image: '/gen-Ai.jpeg' },
  { slug: 'seo', name: 'SEO', tag: 'Marketing', icon: SearchIcon, tone: 'green', image: '/seo.jpeg' }
]

const VISIBLE = 3

export default function PopularCourses() {
  /* The shared pin (see hooks/usePinnedProgress.js) — the stage is
     toggled between position:fixed (inside the scroll range) and
     position:absolute top/bottom (before/after), while a damped
     --progress custom property drives the track's horizontal pan via
     CSS calc(). Reduced motion clears the pin and leaves --progress at
     its CSS default, so the rail simply sits at its first card. */
  const [wrapRef, stageRef] = usePinnedProgress()

  return (
    <section className="pc" id="popular-courses">
      <div className="pc-scroll" ref={wrapRef} style={{ '--steps': COURSES.length - VISIBLE } as React.CSSProperties}>
        <div className="pc-stage" ref={stageRef}>
          <span className="tech-texture" aria-hidden="true" />
          <div className="shell pc-heading">
            <p className="pc-eyebrow">
              <span className="dot" />
              Popular Courses
            </p>
            <h2 className="pc-title"><WriteIn>
              The programs learners <span className="pc-title-accent">choose most</span>
            </WriteIn></h2>

            <SmartLink className="pc-cta" href="/courses">
              View all courses
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </SmartLink>
          </div>

          <div className="pc-cards">
            <div className="pc-viewport">
              <div className="pc-track">
                {COURSES.map(({ slug, name, tag, icon: Icon, tone, image }) => (
                  <SmartLink
                    key={slug}
                    href={coursePath(slug)}
                    className={`pc-card${image ? ' has-media' : ''}`}
                    data-tone={tone}
                  >
                    <CardMedia src={image} />
                    <span className="pc-card-scrim" aria-hidden="true" />
                    <span className="pc-card-tag">{tag}</span>
                    <span className="pc-card-icon">
                      <Icon />
                    </span>
                    <span className="pc-card-name">{name}</span>
                    <span className="pc-card-cta">
                      Explore course
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </SmartLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
