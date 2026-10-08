'use client'

import './WhyTechCadd.css'
import WriteIn from '../common/WriteIn'
import { usePinnedProgress } from '../../hooks/usePinnedProgress'

function CurriculumIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  )
}
function TrainerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M12 20a7 7 0 0 0-7-7" />
      <path d="M12 20a7 7 0 0 1 7-7" />
      <path d="m15.5 10.5 1.6 1.6 3-3" />
    </svg>
  )
}
function PlacementIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="m9 13 2 2 4-4" />
    </svg>
  )
}
function BatchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v3M16 3v3" />
      <circle cx="15.5" cy="15" r="3" />
      <path d="M15.5 13.5v1.6l1.1.9" />
    </svg>
  )
}

/* ------------------------------------------------------------------
   Four reasons, in two pairs. Pair 1 (l1/r1) arrives, holds, then
   exits upward while pair 2 (l2/r2) arrives in the exact same spot —
   both pairs share the same left/right target slot, only the timing
   window (see WhyTechCadd.css) differs. Content from techcadd's live
   "Why techcadd" section, numbers kept consistent with this site's
   own About stats (15+ / 20,000+ / 40+).
------------------------------------------------------------------ */
const REASONS = [
  {
    id: 'curriculum',
    pos: 'l1',
    icon: CurriculumIcon,
    tone: 'blue',
    title: 'Industry-Built Curriculum',
    text: 'We teach from the same stack we ship client work on — so the syllabus moves the moment the industry does.'
  },
  {
    id: 'trainers',
    pos: 'r1',
    icon: TrainerIcon,
    tone: 'violet',
    title: 'Certified Trainers',
    text: 'Learn from engineers who still write production code, not from career instructors reading a decade-old slide deck.'
  },
  {
    id: 'placement',
    pos: 'l2',
    icon: PlacementIcon,
    tone: 'cyan',
    title: 'Placement Support',
    text: '40+ hiring partners, mock interviews and on-campus drives, run by our own placement cell.'
  },
  {
    id: 'batches',
    pos: 'r2',
    icon: BatchIcon,
    tone: 'warm',
    title: 'Flexible Batches',
    text: '45-day, 6-week, 6-month, weekend and 1-on-1 formats, with fee EMI options so cost never decides it.'
  }
]

export default function WhyTechCadd() {
  /* The shared pin (see hooks/usePinnedProgress.js): position:sticky
     silently never engages on this site, so the stage is toggled
     between position:fixed and position:absolute top/bottom from a
     scroll listener that also drives the --progress custom property
     behind the card choreography — damped, so the cards ease along
     behind the wheel instead of stepping with it.

     Reduced motion gets the same static-stack treatment as mobile (see
     WhyTechCadd.css) with --progress parked at its final frame, rather
     than leaving the pin's tall wrapper standing empty. */
  const [wrapRef, stageRef] = usePinnedProgress({ reducedProgress: '1' })

  return (
    <section className="wt" id="why-techcadd">
      <div className="wt-scroll" ref={wrapRef}>
        <div className="wt-stage" ref={stageRef}>
          <div className="shell wt-heading">
            <p className="wt-eyebrow">
              <span className="dot" />
              Why techcadd
            </p>
            <h2 className="wt-title"><WriteIn>
              The techcadd <span className="wt-title-accent">Difference</span>
            </WriteIn></h2>
            <p className="wt-sub">
              15 years training students in Ludhiana — <b>20,000+ learners trained</b> and a hiring
              network of <b>40+ partners</b> that answers when we call.
            </p>
          </div>

          <div className="wt-cards">
            {REASONS.map(({ id, pos, icon: Icon, tone, title, text }) => (
              <article key={id} className={`wt-card wt-card--${pos}`} data-tone={tone}>
                <span className="wt-card-icon">
                  <Icon />
                </span>
                <h3 className="wt-card-title">{title}</h3>
                <p className="wt-card-text">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
