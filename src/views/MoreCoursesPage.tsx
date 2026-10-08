'use client'

import { useState } from 'react'
import { useReveal } from '../hooks/useCourseMotion'
import { useSpotlight } from '../hooks/useAboutMotion'
import '../components/kit/page-kit.css'
import './MoreCoursesPage.css'
import PageHero from '../components/kit/PageHero'
import Accordion from '../components/kit/Accordion'
import Cta from '../components/sections/Cta'
import SmartLink from '../components/common/SmartLink'
import PageIcon from '../components/kit/icons'
import { OPEN_DEMO_EVENT } from '../components/common/BookDemoModal'
import { courseImage } from '../data/courseImages'
import {
  COURSES,
  categoryCourseCount,
  moreCourseHref,
  type MoreCategory,
  type MoreCourse,
  type MoreGroup
} from '../data/moreCourses'

/* ------------------------------------------------------------------
   A "More Courses" category page — /courses/category/<slug>.

   The content lives in data/moreCourses.ts; this only lays it out.

     §1  banner                        dark, photo
     §2  why this category, here       light
     §3  one band per group of cards   light / tint, alternating
     §4  where it leads                dark
     §5  questions                     light
     §6  call the campus               the site's shared Cta
------------------------------------------------------------------ */

/* Two letters for the card's artwork when a course has no picture —
   "AutoCAD Civil" → "AC", "SEO" → "SE". */
function monogram(name: string) {
  const words = name.replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean)
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase()
  return words[0]?.slice(0, 2).toUpperCase() ?? ''
}

function CardArt({ course }: { course: MoreCourse }) {
  const src = course.slug ? courseImage(course.slug) : null
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div className="tc-course-art">
      {showImage ? (
        <img
          src={src as string}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="mc-mark" aria-hidden="true">{monogram(course.name)}</span>
      )}
      <span className="tc-course-scrim" aria-hidden="true" />
    </div>
  )
}

function CourseCard({ course, tone }: { course: MoreCourse; tone: MoreGroup['tone'] }) {
  const href = moreCourseHref(course)

  return (
    <article className={`tc-course mc-course tone-${tone}`}>
      <CardArt course={course} />

      <div className="tc-course-body">
        <h3>{course.name}</h3>
        <p>{course.blurb}</p>

        <ul className="tc-course-chips">
          <li>
            <PageIcon name="clock" />
            {course.duration}
          </li>
          <li>
            <PageIcon name="layers" />
            {course.level}
          </li>
        </ul>

        <ul className="mc-topics">
          {course.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>

        {href ? (
          <SmartLink className="tc-course-more" href={href}>
            View course
          </SmartLink>
        ) : (
          <button
            type="button"
            className="tc-course-more"
            onClick={() => window.dispatchEvent(new Event(OPEN_DEMO_EVENT))}
          >
            Enquire about this course
          </button>
        )}
      </div>
    </article>
  )
}

/* §2 */
function Intro({ intro }: { intro: MoreCategory['intro'] }) {
  const ref = useReveal()

  return (
    <section className="ap-light ap-sec" id="why" ref={ref}>
      <div className="shell mc-intro">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>{intro.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' } as any}>
            {intro.title} <span className="ap-accent">{intro.accent}</span>
          </h2>
          {intro.body.map((para, i) => (
            <p className="ap-lead" key={i} data-reveal style={{ '--d': `${150 + i * 60}ms` } as any}>
              {para}
            </p>
          ))}
        </div>

        <ul className="mc-points" data-reveal style={{ '--d': '220ms' } as any}>
          {intro.points.map((point) => (
            <li key={point}>
              <PageIcon name="check" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* The row of chips under the intro, one per group. */
function JumpBar({ groups }: { groups: MoreGroup[] }) {
  return (
    <nav className="mc-jump" aria-label="Course groups">
      <div className="shell">
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              <a className="ap-chip" href={`#${group.id}`}>
                {group.title}
                <b>{group.courses.length}</b>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

/* §3 */
function Group({ group, index }: { group: MoreGroup; index: number }) {
  const revealRef = useReveal()
  const spotRef = useSpotlight('.tc-course')

  return (
    <section
      className={`ap-light ap-sec mc-group ${index % 2 ? '' : 'ap-light--tint'}`.trim()}
      id={group.id}
      ref={revealRef}
    >
      <div className="shell" ref={spotRef}>
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>
            {String(index + 1).padStart(2, '0')} · {group.courses.length} courses
          </p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' } as any}>{group.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' } as any}>{group.blurb}</p>
        </div>

        <ul className="tc-courses">
          {group.courses.map((id, i) => {
            const course = COURSES[id]
            if (!course) return null
            return (
              <li key={id} data-reveal="rise" style={{ '--d': `${Math.min(i, 8) * 45}ms` } as any}>
                <CourseCard course={course} tone={group.tone} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* §4 */
function Careers({ careers }: { careers: MoreCategory['careers'] }) {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec" id="careers" ref={ref}>
      <div className="shell">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>{careers.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' } as any}>
            {careers.title}
            <br />
            <span className="ap-accent">{careers.accent}</span>
          </h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' } as any}>{careers.lead}</p>
        </div>

        <ul className="tc-grid tc-grid--4">
          {careers.items.map((item, i) => (
            <li className="tc-card" key={item.title} data-reveal="rise" style={{ '--d': `${i * 80}ms` } as any}>
              <span className="ap-ico">
                <PageIcon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* §5 */
function Questions({ faqs }: { faqs: MoreCategory['faqs'] }) {
  const ref = useReveal()

  return (
    <section className="ap-light ap-light--tint ap-sec" id="faq" ref={ref}>
      <div className="shell mc-faq">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>Questions</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' } as any}>
            Before you <span className="ap-accent">enrol.</span>
          </h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' } as any}>
            Durations on this page are typical. Fees and current batch timings are confirmed by the
            Ludhiana campus — call or book a free demo class.
          </p>
        </div>

        <Accordion items={faqs} initial={faqs[0]?.id ?? null} />
      </div>
    </section>
  )
}

export default function MoreCoursesPage({ category }: { category: MoreCategory }) {
  const hero = {
    ...category.hero,
    stats: [
      { to: categoryCourseCount(category), suffix: '', label: 'Courses' },
      { to: category.groups.length, suffix: '', label: 'Tracks' },
      { to: 15, suffix: 'K+', label: 'Learners trained' }
    ],
    actions: [
      { label: 'Book a free demo', href: '/contact' },
      { label: 'All courses', href: '/courses', kind: 'ghost' }
    ]
  }

  return (
    <div className="tc-page tc-page--more-courses">
      <main id="main">
        <PageHero {...(hero as any)} id="category-top" />
        <Intro intro={category.intro} />
        <JumpBar groups={category.groups} />
        {category.groups.map((group, i) => (
          <Group group={group} index={i} key={group.id} />
        ))}
        <Careers careers={category.careers} />
        <Questions faqs={category.faqs} />
        <Cta />
      </main>
    </div>
  )
}
