'use client'

import { useState } from 'react'
import CourseBreadcrumb from './CourseBreadcrumb'
import Icon from './icons'
import { useCourse } from './CourseContext'
import CourseHeroArt from './CourseHeroArt'
import BrochureGate from './BrochureGate'
import './CourseHero.css'
import SmartLink from '../common/SmartLink'
import WriteIn from '../common/WriteIn'

/* The hero's right-hand side is a picture, and only a picture.

   A course shows one when its seed carries `heroArt` — a path to a
   file in public/ — and CourseHeroArt renders it. A course without
   one shows nothing there and the copy takes the full width, which is
   deliberate: an empty column is honest about a missing picture in a
   way a stand-in graphic is not.

   To give a course its artwork: drop the file in public/, then add

     heroArt: '/your-file.png',
     heroArtAlt: 'what the picture shows',

   to that course's seed in src/data/courses/*.js. Nothing else.

   The animated dot field that used to fill this column for every
   course but Digital Marketing has been removed. */

export default function CourseHero() {
  const course = useCourse()
  const [brochureOpen, setBrochureOpen] = useState(false)

  return (
    <section className="chero" id="course-top">
      {/* The hero band is the same surface as the dark sections below
          it — flat ink under the shared diagonal weave, which
          .chero-bg::after paints. The grid overlay and the two
          drifting glows that used to sit here are gone: they made the
          top of the page a visibly different colour from the
          eligibility band. See CourseHero.css. */}
      <div className="chero-bg" aria-hidden="true">
        <span className="c-noise" />
      </div>

      {/* one column until the course has a picture to put beside the
          copy — otherwise the headline is set to half the width of
          the page against an empty half */}
      {/* Home / Courses / category / this course — sits in the hero's own
          top padding, and gives every course page real links back up
          the tree. */}
      <CourseBreadcrumb />

      <div className={`shell chero-inner${course.heroArt ? '' : ' chero-inner--solo'}`}>
        <div className="chero-copy">
          {/*
            The label and the badge above the headline.

            Both are CMS fields (`eyebrow`, `badge`) that were stored,
            validated and edited but never rendered — so an editor
            filling them in saw no change on the page. The badge is a
            single word by schema ("New", "Popular"); the label is the
            line of context above the title.
          */}
          {(course.eyebrow || course.badge) && (
            <p className="chero-kicker">
              {course.eyebrow && <span className="chero-eyebrow">{course.eyebrow}</span>}
              {course.badge && <span className="chero-badge">{course.badge}</span>}
            </p>
          )}

          <h1 className="chero-title">
            <WriteIn>
              {course.headline.map((line, i) => (
                <span
                  key={line}
                  className={i === 0 ? 'chero-line' : 'chero-line chero-line--accent'}
                >
                  {line}
                </span>
              ))}
            </WriteIn>
          </h1>

          {/*
            The standfirst.

            It was removed once, on the reasoning that the headline
            could hand straight to the chips. That left the CMS's hero
            paragraph (`intro`, falling back to `tagline` and then the
            short description) with nowhere to appear — an editor could
            write it and never see it. It is back, and it is the only
            place those three fields surface.
          */}
          {/* The tagline, when it is not already the standfirst — a
              course with only one of the two fields filled in shows it
              as the paragraph below rather than twice. */}
          {course.tagline && course.tagline !== course.sub && (
            <p className="chero-tagline">{course.tagline}</p>
          )}

          {course.sub && <p className="chero-sub">{course.sub}</p>}

          <div className="chero-meta">
            <span className="c-chip">
              <Icon name="clock" size={14} /> &nbsp;{course.duration}
            </span>
            <span className="c-chip">{course.mode}</span>
            <span className="c-chip">{course.level}</span>
          </div>

          <div className="chero-actions">
            {/*
              The primary button, from the CMS when it names one.

              `ctaPrimary` has been an editable object on the course
              record all along and nothing read it, so both buttons
              were fixed no matter what an editor set. The old wording
              and target remain the fallback, which is what every
              hand-written seed still uses.
            */}
            <SmartLink
              className="c-btn c-btn--primary"
              href={course.ctaPrimary?.url || '#course-roadmap'}
            >
              {course.ctaPrimary?.text || 'Explore course'}
              <Icon name="arrowRight" />
            </SmartLink>
            {/* The brochure is gated behind the short form in
                BrochureGate - a name and a number. It used to say
                "Download curriculum" and scroll to the enquiry
                section, which downloaded nothing. */}
            {/*
              The secondary button.

              A CMS `ctaSecondary` with a URL becomes a link; without
              one it stays the brochure gate, which is a dialog rather
              than a destination and so cannot be an anchor.
            */}
            {course.ctaSecondary?.url ? (
              <SmartLink className="c-btn c-btn--ghost" href={course.ctaSecondary.url}>
                {course.ctaSecondary.text || 'Learn more'}
                <Icon name="arrowRight" size={18} />
              </SmartLink>
            ) : (
              <button
                className="c-btn c-btn--ghost"
                type="button"
                onClick={() => setBrochureOpen(true)}
              >
                {course.ctaSecondary?.text || 'Download brochure'}
                <Icon name="download" />
              </button>
            )}
          </div>

          <dl className="chero-metrics">
            {course.metrics.map((m) => (
              <div className="chero-metric" key={m.label}>
                <dt>{m.value}</dt>
                <dd>{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {course.heroArt && (
          <CourseHeroArt
            src={course.heroArt}
            alt={course.heroArtAlt || ''}
            width={course.heroArtWidth}
            height={course.heroArtHeight}
          />
        )}
      </div>

      <BrochureGate
        course={course}
        open={brochureOpen}
        onClose={() => setBrochureOpen(false)}
      />
    </section>
  )
}
