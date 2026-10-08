'use client'

import SmartLink from '../common/SmartLink'
import { getHeroIcon } from '../../data/heroIcons'
import { BRANCH_CITY, GOOGLE_LINK } from '../../data/branch'
import './Hero.css'

const FEATURES = [
  { title: 'Industry expert mentors', icon: MentorIcon },
  { title: 'Hands-on live projects', icon: ProjectIcon },
  { title: '100% placement assistance', icon: PlacementIcon }
]

/* ------------------------------------------------------------------
   Three concentric rings of real technology marks orbiting the stat.

   Each ring rotates as a whole; every chip on it counter-rotates at
   the same speed, so the logos stay upright the whole way round
   instead of tumbling. `dur` is that shared duration, and the middle
   ring runs in reverse so neighbouring rings never look locked
   together. Angles are explicit rather than computed so the spacing
   can be tuned by eye.
------------------------------------------------------------------ */
/* Two chip-bearing rings, spaced ~80px apart radially. A chip is 46px,
   so its worst case (two chips meeting corner-to-corner at 45°) needs
   46 x sqrt(2) = 65px of separation — 80px clears that with room. The
   third ring carries no chips: it is there for the layered look, and
   keeping it empty is what stops anything colliding with the "20k+"
   stat in the middle. */
const RINGS = [
  {
    id: 'outer',
    size: 100,
    dur: 46,
    reverse: false,
    items: [
      { name: 'React', angle: 15 },
      { name: 'Python', angle: 75 },
      { name: 'Docker', angle: 135 },
      { name: 'Figma', angle: 195 },
      { name: 'TensorFlow', angle: 255 },
      { name: 'MongoDB', angle: 315 }
    ]
  },
  {
    id: 'mid',
    size: 62,
    dur: 38,
    reverse: true,
    items: [
      { name: 'Kubernetes', angle: 40 },
      { name: 'Linux', angle: 130 },
      { name: 'PyTorch', angle: 220 },
      { name: 'Git', angle: 310 }
    ]
  },
  { id: 'inner', size: 34, dur: 30, reverse: false, items: [] }
]

function MentorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="M7 10v4.5c0 1.7 2.2 3 5 3s5-1.3 5-3V10" />
      <path d="M21 7.5V13" />
    </svg>
  )
}

function ProjectIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </svg>
  )
}

function PlacementIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="m9 13 2 2 4-4" />
    </svg>
  )
}

/* a light chip behind every mark: the rings sit on a dark stage, and
   several brand hexes (Git, Linux, Docker) are dark by design */
function Chip({ name }: { name: string }) {
  const icon = getHeroIcon(name)
  return (
    <span className="hero-chip" title={name}>
      {icon.path ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={icon.path} fill={icon.hex} />
        </svg>
      ) : (
        <b style={{ color: icon.hex }}>{icon.mono}</b>
      )}
      <span className="sr-only">{name}</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <span className="tech-texture" />
        <span className="hero-orb hero-orb--violet" />
        <span className="hero-orb hero-orb--blue" />
      </div>

      <div className="shell hero-inner">
        <div className="hero-copy">
          {/* The badge opens the institute on Google — its reviews and the
              listing — rather than being a label that looks pressable
              and is not. The <p> stays the block so the spacing around
              it is unchanged. */}
          <p>
            <a
              className="hero-eyebrow"
              href={GOOGLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`techcadd ${BRANCH_CITY} on Google: reviews and website (opens in a new tab)`}
            >
              <span className="dot" />
              techcadd {BRANCH_CITY} <span className="sep">/</span> AI &amp; Software Training
            </a>
          </p>

          <h1 className="hero-title">
            <span className="word">Learn.</span>
            <span className="word">Build.</span>
            <span className="word word--accent">Innovate.</span>
          </h1>

          <p className="hero-sub">
            Master the technologies shaping tomorrow with practical, industry-focused training
            in {BRANCH_CITY}.
          </p>

          <div className="hero-actions">
            <SmartLink className="btn btn--primary" href="/courses">
              Explore courses
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </SmartLink>
            <SmartLink className="btn btn--ghost" href="#demo">Book a free demo</SmartLink>
          </div>

          <ul className="hero-features">
            {FEATURES.map(({ title, icon: Icon }) => (
              <li key={title}>
                <span className="feature-tile"><Icon /></span>
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit">
            {RINGS.map((ring) => (
              <div
                key={ring.id}
                className={`hero-ring hero-ring--${ring.id}`}
                style={{
                  '--size': `${ring.size}%`,
                  '--dur': `${ring.dur}s`,
                  '--dir': ring.reverse ? 'reverse' : 'normal',
                  /* the chips spin the opposite way to their ring, which
                     is what keeps each logo upright */
                  '--counter-dir': ring.reverse ? 'normal' : 'reverse'
                } as React.CSSProperties}
              >
                {ring.items.map((item) => (
                  <span
                    key={item.name}
                    className="hero-node"
                    style={{ '--angle': `${item.angle}deg` } as React.CSSProperties}
                  >
                    {/* counter-rotates at the ring's own speed, so the
                        logo stays upright while the ring turns */}
                    <span className="hero-node-upright">
                      <Chip name={item.name} />
                    </span>
                  </span>
                ))}
              </div>
            ))}

            <div className="hero-core">
              <b className="hero-core-num">20k+</b>
              <span className="hero-core-label">Learners trained</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
