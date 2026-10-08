'use client'

import Icon from './icons'
import RichText, { emphasise } from './RichText'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import SmartLink from '../common/SmartLink'
import './WhoCanJoin.css'

/* ==================================================================
   Who can join this course.

   The first question of every counselling call, and the one most
   course pages answer with "anyone can join" - which tells a B.Com
   graduate nothing about whether they will be the only person in the
   room without a coding background.

   Six groups, each with what they arrive with and what the course
   does for them, then the honest list of what you actually need
   before day one. Someone should be able to find themselves in it in
   about five seconds, which is why the group titles are people and
   not adjectives.

   Sits where the technology-ecosystem orbit used to be. The orbit
   showed tools; the hero already does that, and rather better.
================================================================== */
export default function WhoCanJoin() {
  const course = useCourse()
  const sectionRef = useReveal()
  const { joiners } = course

  if (!joiners) return null

  return (
    <section className="c-sec c-sec--dark cwho" id="course-who" ref={sectionRef}>
      <span className="c-grid-bg" aria-hidden="true" />
      <span className="cwho-glow" aria-hidden="true" />

      <div className="shell">
        <div className="c-head c-head--center" data-reveal>
          <p className="c-eyebrow">{joiners.eyebrow}</p>
          <h2 className="c-title">{joiners.title}</h2>
          {/* through RichText from here down: a course that writes its
              own groups may mark the terms its page ranks for, and the
              generic ones carry no marks so they render unchanged */}
          <RichText className="c-lead" text={joiners.lead} />
        </div>

        {/* ----------------------------- the groups ----------------------------- */}
        <ul className="cwho-grid">
          {joiners.groups.map((group, i) => (
            <li key={group.title} data-reveal style={{ '--d': `${80 + i * 70}ms` }}>
              <span className="cwho-icon" aria-hidden="true">
                <Icon name={group.icon} size={20} />
              </span>

              <h3>{group.title}</h3>
              <RichText text={group.text} />

              {group.tag && (
                <span className="cwho-tag">
                  <Icon name="check" size={13} />
                  {group.tag}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* -------------------------- what you need ---------------------------- */}
        <div className="cwho-need" data-reveal style={{ '--d': '220ms' }}>
          <div className="cwho-need-head">
            <h3>{joiners.requirementsTitle}</h3>
            <p className="cwho-need-meta">
              <Icon name="clock" size={14} />
              {course.duration} &middot; {course.mode}
            </p>
          </div>

          <ul>
            {joiners.requirements.map((item) => (
              <li key={item}>
                <Icon name="check" size={15} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="cwho-note" data-reveal style={{ '--d': '280ms' }}>
          {emphasise(joiners.note)}{' '}
          <SmartLink href="#course-enquire">
            Ask about {course.short}
            <Icon name="arrowRight" size={15} />
          </SmartLink>
        </p>
      </div>
    </section>
  )
}
