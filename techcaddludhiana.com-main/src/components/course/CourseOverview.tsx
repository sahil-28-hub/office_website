'use client'

import { useState } from 'react'
import Icon from './icons'
import RichText from './RichText'
import { VideoSkeleton } from './Skeleton'
import { useCourse } from './CourseContext'
import { useInViewOnce, useReveal } from '../../hooks/useCourseMotion'
import './CourseOverview.css'
import VideoPlayer from '../common/VideoPlayer'

export default function CourseOverview() {
  const course = useCourse()
  const sectionRef = useReveal()
  const [stageRef, ready] = useInViewOnce('120px')
  const [playing, setPlaying] = useState(false)

  return (
    <section className="c-sec c-sec--paper covw" id="course-overview" ref={sectionRef}>
      {/* Two columns: the copy reads down the left, the preview sits
          on the right and follows it while it scrolls. They stack on
          narrow screens, copy first. */}
      <div className="shell covw-split">
        <div className="covw-copy">
          <div className="c-head" data-reveal>
            <p className="c-eyebrow">Course overview</p>
            <h2 className="c-title">{course.overviewTitle}</h2>
            <RichText className="c-lead" text={course.overviewLead} />
          </div>

          {/* the courses that carry long-form copy open with it here,
              under the lead — the rest of them have no overviewBody and
              this renders nothing */}
          {course.overviewBody?.length > 0 && (
            <div className="covw-body" data-reveal style={{ '--d': '60ms' }}>
              {course.overviewBody.map((para, i) => (
                <RichText key={i} text={para} />
              ))}
            </div>
          )}

          <ul className="covw-highlights" data-reveal style={{ '--d': '80ms' }}>
            {course.highlights.map((h) => (
              <li key={h}>
                <span className="covw-tick" aria-hidden="true">
                  <Icon name="check" size={14} />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Two elements on purpose: the outer one stretches to the full
            height of the copy beside it, and the inner one is what
            sticks. A sticky element can only travel inside its own
            containing block, so it needs a taller parent to travel in —
            sticking the column itself would give it nowhere to go. */}
        <div className="covw-stage" ref={stageRef} data-reveal style={{ '--d': '140ms' }}>
          <div className="covw-sticky">
            {!ready ? (
              <VideoSkeleton />
            ) : course.videoUrl ? (
              /*
                The real video, where the mock-up used to be.

                A course whose CMS record names a walkthrough gets it in
                this slot — the widest, most visible frame on the page,
                and the one a visitor already reads as "the video". It
                was previously dropped into the copy column on the left
                at whatever width that column happened to be, beside a
                stage still showing the fake one, so a course with a
                real video appeared to have two.

                It plays in a dialog over the page rather than linking
                out; see VideoPlayer.
              */
              <figure className="covw-player">
                <div className="covw-player-frame">
                  <VideoPlayer
                    url={course.videoUrl}
                    title={course.videoTitle || `${course.name} at techcadd`}
                  />
                </div>

                {/* Under the frame, not over it.

                    The stand-in's caption is an overlay because what it
                    captions is a drawing this file controls. A real
                    video's still is a YouTube thumbnail — often already
                    carrying its own large title text — and a line laid
                    over that is unreadable at best and invisible at
                    worst. Below the frame it is always legible. */}
                <figcaption className="covw-player-cap">
                  {course.videoTitle || 'Course walkthrough'}
                </figcaption>
              </figure>
            ) : (
              /*
                No video on the record: a drawn stand-in rather than an
                empty column. Nothing here plays — the button only
                animates — so it must never appear beside a course that
                has a real video to show.
              */
              <figure className={`covw-video${playing ? ' is-playing' : ''}`}>
                <div className="covw-thumb" aria-hidden="true">
                  <span className="covw-thumb-grid" />
                  <span className="covw-thumb-glow" />
                  <pre className="covw-thumb-code">
{`>>> from techcadd import ${course.slug.replace(/-/g, '_')}
>>> ${course.slug.replace(/-/g, '_')}.start(city="${course.city}")
Session 01 — ${course.modules[0]?.title || 'Fundamentals'}`}
                  </pre>
                </div>

                <button
                  type="button"
                  className="covw-play"
                  data-cursor="Play"
                  aria-label={playing ? 'Pause course preview' : 'Play course preview'}
                  onClick={() => setPlaying((v) => !v)}
                >
                  <span className="covw-play-ring" aria-hidden="true" />
                  <Icon name="play" filled size={26} />
                </button>

                <figcaption className="covw-meta">
                  <span>Course preview</span>
                  <span className="covw-time">02:34</span>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
