'use client'

import { useEffect, useRef, useState } from 'react'
import { useSectionVisible } from '../../hooks/useCourseMotion'
import './About.css'
import WriteIn from '../common/WriteIn'

/* ------------------------------------------------------------------
   Drop your real institute photos into  public/photos/
   using these exact file names, and they appear automatically.
   Until then each frame shows a labelled placeholder.
------------------------------------------------------------------ */
const PHOTOS = [
  {
    pos: 'a',
    src: '/gallery/2.png',
    file: 'photos/team.jpg',
    tag: 'Our trainers',
    alt: 'The techcadd training team at the Ludhiana campus'
  },
  {
    pos: 'b',
    src: '/lab-demo.webp',
    file: 'photos/lab.jpg',
    tag: 'Project lab',
    alt: 'Students building live projects in the techcadd lab'
  },
  {
    pos: 'c',
    src: '/gallery/7.png',
    file: 'gallery/7.png',
    tag: 'Placement day',
    alt: 'techcadd students on placement drive day'
  }
]

/* Replace these with your real numbers before going live. */
const PROOF = [
  { value: '15+', label: 'years in Ludhiana' },
  { value: '20,000+', label: 'learners trained' },
  { value: '40+', label: 'hiring partners' }
]

const STAGES = [
  {
    name: 'Student',
    text: 'You start where you are. No prior coding background needed.',
    icon: StudentIcon
  },
  {
    name: 'Skills',
    text: 'Mentor-led training in the stack you choose, taught line by line.',
    icon: SkillsIcon
  },
  {
    name: 'Projects',
    text: 'You build and ship real applications, not tutorial exercises.',
    icon: ProjectsIcon
  },
  {
    name: 'Technology',
    text: 'AI, cloud and security layered on top so your skills stay current.',
    icon: TechIcon
  },
  {
    name: 'Career',
    text: 'Resume reviews, mock interviews and placement support until you sign.',
    icon: CareerIcon
  }
]

/* ---------------------------- icons ---------------------------- */
function StudentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="M7 10v4.6c0 1.6 2.2 2.9 5 2.9s5-1.3 5-2.9V10" />
    </svg>
  )
}
function SkillsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </svg>
  )
}
function ProjectsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7L12 2.8Z" />
      <path d="M3.5 7 12 11.4 20.5 7" />
      <path d="M12 11.4v9.8" />
    </svg>
  )
}
function TechIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="8" height="8" rx="2" />
      <path d="M10 4v4M14 4v4M10 16v4M14 16v4M4 10h4M4 14h4M16 10h4M16 14h4" />
    </svg>
  )
}
function CareerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.5" />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" />
      <path d="m9 13.5 2 2 4-4" />
    </svg>
  )
}
function FrameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <circle cx="8.5" cy="10" r="1.6" />
      <path d="m4 17 4.8-4.4a2 2 0 0 1 2.7 0L20 19.5" />
    </svg>
  )
}

/* ------------------------- photo card -------------------------- */
function PhotoCard({ photo }: { photo: typeof PHOTOS[number] }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className={`about-photo about-photo--${photo.pos}`}>
      <div className="about-photo-frame">
        {failed ? (
          <div className="about-photo-empty">
            <FrameIcon />
            <span>{photo.file}</span>
          </div>
        ) : (
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
        )}
        <span className="about-photo-sheen" aria-hidden="true" />
        <figcaption className="about-photo-tag">
          <i aria-hidden="true" />
          {photo.tag}
        </figcaption>
      </div>
    </figure>
  )
}

/* --------------------------- section --------------------------- */
export default function About() {
  /* adds `is-visible` once the band is reached — and also if the
     page jumped straight past it; see useSectionVisible. */
  const sectionRef = useSectionVisible(0.18)
  const stageRef = useRef(null)

  /* pointer-driven 3D tilt on the photo wall */
  useEffect(() => {
    const host = sectionRef.current
    const stage = stageRef.current
    if (!host || !stage) return

    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    let frame = 0
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }

    const tick = () => {
      current.x += (target.x - current.x) * 0.08
      current.y += (target.y - current.y) * 0.08
      stage.style.setProperty('--mx', current.x.toFixed(4))
      stage.style.setProperty('--my', current.y.toFixed(4))

      const settled =
        Math.abs(target.x - current.x) < 0.0015 && Math.abs(target.y - current.y) < 0.0015
      frame = settled ? 0 : requestAnimationFrame(tick)
    }

    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect()
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      start()
    }

    const onLeave = () => {
      target.x = 0
      target.y = 0
      start()
    }

    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)

    return () => {
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [])


  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-bg" aria-hidden="true">
        <span className="about-orb" />
        <span className="about-mesh" />
      </div>

      <div className="shell about-inner">
        <div className="about-copy">
          <p className="about-eyebrow">
            <span className="dot" />
            About techcadd
          </p>

          <h2 className="about-title">
            <WriteIn>
              From your first line of code to a{' '}
              <span className="about-title-accent">future-ready career</span>.
            </WriteIn>
          </h2>

          <p className="about-lead">
            techcadd Ludhiana is a training campus, not a video library. You learn in a room with a
            mentor who has shipped production software, on the same tools the industry hires for.
          </p>

          <p className="about-body">
            Every course follows one arc: understand the fundamentals, build something real with
            them, then walk into interviews with work you can defend. That arc is the whole point of
            this place.
          </p>

          <dl className="about-proof">
            {PROOF.map((item) => (
              <div className="about-proof-item" key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about-stage" ref={stageRef}>
          <svg className="about-strands" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M74 27 C 68 39, 56 36, 46 44" />
            <path d="M32 74 C 42 82, 52 79, 64 88" />
          </svg>

          {PHOTOS.map((photo) => (
            <PhotoCard key={photo.pos} photo={photo} />
          ))}
        </div>
      </div>

      <div className="shell">
        <hr className="about-rule" />

        <header className="about-journey-head">
          <h3 className="about-journey-title">How it works</h3>
          <p className="about-journey-sub">
            From your first counselling call to your first offer.
          </p>
        </header>

        <ol className="about-journey">
          {STAGES.map(({ name, text, icon: Icon }, index) => (
            <li className="about-step" key={name} style={{ '--i': index } as React.CSSProperties}>
              <span className="about-step-node">
                <Icon />
              </span>
              <h4 className="about-step-name">{name}</h4>
              <p className="about-step-text">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
