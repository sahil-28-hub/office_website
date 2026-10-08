'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useSectionVisible } from '../../hooks/useCourseMotion'
import SmartLink from '../common/SmartLink'
import { getToolIcon } from '../../data/toolIcons'
import './Universe.css'
import WriteIn from '../common/WriteIn'

/* ---------------------------- tab icons ---------------------------- */
function TabCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  )
}
function TabLayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  )
}
function TabSparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3.4M12 17.6V21M3 12h3.4M17.6 12H21" />
      <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z" />
    </svg>
  )
}
function TabShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.2 5 6.1v5.3c0 4.2 2.9 7.6 7 9.4 4.1-1.8 7-5.2 7-9.4V6.1L12 3.2Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  )
}
function TabDbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
      <path d="M4.5 5.5V12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V5.5" />
      <path d="M4.5 12v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V12" />
    </svg>
  )
}
function TabInfinityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 8.5a3.5 3.5 0 1 0 0 7c2.5 0 3.6-1.6 5-3.5s2.5-3.5 5-3.5a3.5 3.5 0 1 1 0 7c-2.5 0-3.6-1.6-5-3.5s-2.5-3.5-5-3.5Z" />
    </svg>
  )
}
function TabCloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 18h10a3.6 3.6 0 0 0 .4-7.2A5.2 5.2 0 0 0 7.4 9.7 3.7 3.7 0 0 0 7 18Z" />
    </svg>
  )
}

/* ------------------------------------------------------------------
   Seven technology tracks, each a ring of the tools taught in it.
   `tagline` is the caption under the ribbon, and changes with the
   active track. Real marks come from getToolIcon() in
   ../data/toolIcons.
------------------------------------------------------------------ */
const CATEGORIES = [
  {
    id: 'programming',
    label: 'Programming',
    tabIcon: TabCodeIcon,
    tagline: 'Logic + Syntax + Problem Solving',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust', 'Kotlin', 'PHP', 'C++', 'C#']
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    tabIcon: TabLayersIcon,
    tagline: 'Frontend + Backend + APIs + Deploy',
    items: ['React', 'Node.js', 'Angular', 'Vue.js', 'Next.js', 'Django', 'Spring Boot', 'Laravel', 'Flutter', 'Express']
  },
  {
    id: 'ai',
    label: 'AI & ML',
    tabIcon: TabSparkIcon,
    tagline: 'Data + Models + Training + GenAI',
    items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Hugging Face', 'OpenAI', 'Jupyter']
  },
  {
    id: 'cyber',
    label: 'Cyber Security',
    tabIcon: TabShieldIcon,
    tagline: 'Recon + Exploit + Defend + Report',
    items: ['Linux', 'Kali Linux', 'Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'Splunk', 'Nessus', 'Snort', 'OWASP']
  },
  {
    id: 'databases',
    label: 'Databases',
    tabIcon: TabDbIcon,
    tagline: 'Model + Query + Scale + Secure',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle DB', 'SQL Server', 'Firebase', 'Cassandra', 'MariaDB']
  },
  {
    id: 'devops',
    label: 'DevOps',
    tabIcon: TabInfinityIcon,
    tagline: 'Build + Ship + Monitor + Repeat',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'Nginx']
  },
  {
    id: 'cloud',
    label: 'Cloud',
    tabIcon: TabCloudIcon,
    tagline: 'Compute + Storage + Network + Scale',
    items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Heroku', 'Cloudflare', 'Vercel', 'Netlify', 'IBM Cloud', 'Alibaba Cloud']
  }
].map((cat) => ({ ...cat, items: cat.items.map((name) => ({ name, icon: getToolIcon(name) })) }))

/* Counted from the rings above rather than typed out, so the caption
   cannot claim a number the section does not actually show — it read
   '0+' because nothing ever wrote to countRef, and a hand-written 70
   would go stale the moment a track gains a tool. */
const TOTAL_TOOLS = CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0)

function Badge({ item }: { item: { name: string; icon: { path?: string; hex: string; mono?: string } } }) {
  if (item.icon.path) {
    return (
      <span className="uni-orbit-badge">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={item.icon.path} fill={item.icon.hex} />
        </svg>
      </span>
    )
  }
  return (
    <span className="uni-orbit-badge uni-orbit-badge--tag" style={{ color: item.icon.hex }}>
      {item.icon.mono}
    </span>
  )
}

/* A figure-8 (lemniscate of Gerono), computed in the container's own
   pixel size so it can double as both the visible ribbon's SVG path
   data AND every badge's CSS offset-path — one shape, one source of
   truth. t=0 sits at the right lobe's tip; the curve crosses dead
   centre (behind the mark) at t=π/2 and 3π/2. */
function lemniscatePoint(t: number, w: number, h: number) {
  const cx = w / 2
  const cy = h / 2
  const rx = w * 0.42
  const ry = h * 0.34
  return {
    x: cx + Math.cos(t) * rx,
    y: cy + Math.sin(t) * Math.cos(t) * ry
  }
}

function lemniscatePath(w: number, h: number, steps = 160) {
  let d = ''
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    const p = lemniscatePoint(t, w, h)
    d += `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)} `
  }
  return `${d}Z`
}

/* deterministic sparkle field — same on every load, no layout thrash */
const SPARKS = [
  { x: 30, y: 18, s: 7, d: 0 }, { x: 24, y: 62, s: 5, d: 1.2 },
  { x: 38, y: 80, s: 6, d: 2.1 }, { x: 46, y: 26, s: 5, d: 0.6 },
  { x: 56, y: 70, s: 6, d: 1.8 }, { x: 63, y: 22, s: 6, d: 2.6 },
  { x: 71, y: 74, s: 5, d: 0.9 }, { x: 78, y: 34, s: 7, d: 1.5 },
  { x: 85, y: 60, s: 5, d: 2.3 }, { x: 15, y: 38, s: 6, d: 3.0 }
]

export default function Universe() {
  /* adds `is-visible` once the band is reached — and also if the
     page jumped straight past it; see useSectionVisible. */
  const sectionRef = useSectionVisible(0.15)
  const tabRefs = useRef([])
  const orbitRef = useRef(null)
  const countRef = useRef(null)
  const [activeCat, setActiveCat] = useState(0)
  const [activeTool, setActiveTool] = useState(null)
  const [indicator, setIndicator] = useState(null)
  const [size, setSize] = useState({ w: 0, h: 0 })

  /* measure the ribbon's own pixel box — the lemniscate is built from
     real px so it can drive CSS offset-path directly (that property
     takes plain px, not %), and re-measured on resize. */
  useLayoutEffect(() => {
    const el = orbitRef.current
    if (!el) return
    const measure = () => {
      const rect = el.getBoundingClientRect()
      setSize((prev) =>
        Math.abs(prev.w - rect.width) > 0.5 || Math.abs(prev.h - rect.height) > 0.5
          ? { w: rect.width, h: rect.height }
          : prev
      )
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])


  /* slide the active-tab pill to whichever button is selected */
  useEffect(() => {
    const el = tabRefs.current[activeCat]
    if (!el) return
    const update = () =>
      setIndicator({ left: el.offsetLeft, top: el.offsetTop, width: el.offsetWidth, height: el.offsetHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [activeCat])

  /* switching track clears the selection, so the caption never names a
     tool that is no longer on the ribbon */
  useEffect(() => {
    setActiveTool(null)
  }, [activeCat])

  const category = CATEGORIES[activeCat]
  const count = category.items.length
  const ready = size.w > 0 && size.h > 0

  const pathD = useMemo(() => (ready ? lemniscatePath(size.w, size.h) : ''), [ready, size.w, size.h])

  const BADGE_DURATION = 38

  return (
    <section className="uni" id="courses" ref={sectionRef}>
      <div className="uni-bg" aria-hidden="true">
        <span className="uni-orb uni-orb--a" />
        <span className="uni-orb uni-orb--b" />
      </div>

      <div className="shell uni-inner">
        <div className="uni-content">
          <p className="uni-eyebrow">
            <span className="dot" />
            Technologies
          </p>

          <h2 className="uni-title"><WriteIn>
            Technologies We <span className="uni-title-accent">Master</span>
          </WriteIn></h2>

          <p className="uni-sub">
            From <b>AI</b> to <b>Cloud</b>, from <b>Web Development</b> to <b>Cyber Security</b> — we
            train you on the latest and most in-demand technologies to build a successful career.
          </p>
        </div>

        {/* outside .uni-content on purpose — that wrapper is capped at
            660px for readable line lengths, which is narrower than the
            seven tabs need and was forcing them onto a second row */}
        <div className="uni-tabs" role="tablist" aria-label="Technology categories">
            {indicator && (
              <span
                className="uni-tab-indicator"
                aria-hidden="true"
                style={{
                  transform: `translate(${indicator.left}px, ${indicator.top}px)`,
                  width: indicator.width,
                  height: indicator.height
                }}
              />
            )}
            {CATEGORIES.map((c, i) => (
              <button
                key={c.id}
                ref={(el) => { tabRefs.current[i] = el }}
                type="button"
                role="tab"
                aria-selected={activeCat === i}
                className={`uni-tab${activeCat === i ? ' is-active' : ''}`}
                onClick={() => setActiveCat(i)}
              >
                <c.tabIcon />
                {c.label}
              </button>
            ))}
        </div>

        <div className="uni-orbit-frame">
          <div className="uni-orbit" ref={orbitRef}>
            <div className="uni-orbit-tilt" key={category.id}>
              {/* sparkle field */}
              <div className="uni-sparks" aria-hidden="true">
                {SPARKS.map((s, i) => (
                  <span
                    key={i}
                    className="uni-spark"
                    style={{
                      left: `${s.x}%`,
                      top: `${s.y}%`,
                      width: `${s.s}px`,
                      height: `${s.s}px`,
                      animationDelay: `${s.d}s`
                    }}
                  />
                ))}
              </div>

              {ready && (
                <>
                  <svg
                    className="uni-ribbon"
                    viewBox={`0 0 ${size.w} ${size.h}`}
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      {/* the site's own palette: electric blue at the outer
                          tips, violet through the bends, cyan across the
                          crossing — symmetric, so both lobes read alike */}
                      <linearGradient id="uniRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="24%" stopColor="#1c53d1" />
                        <stop offset="50%" stopColor="#22d3ee" />
                        <stop offset="76%" stopColor="#1c53d1" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>

                      {/* the classic "chrome tube" recipe, and the reason
                          this reads as a solid 3D form rather than a fat
                          line: blur the stroke's own alpha into a height
                          map, light that from above-left with
                          feSpecularLighting, clip the highlight back to the
                          stroke, then add it over the colour. The highlight
                          then curves around every bend the way light on a
                          real tube would. */}
                      <filter id="uniTube3d" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="bump" />
                        <feSpecularLighting
                          in="bump"
                          surfaceScale="6"
                          specularConstant="1.15"
                          specularExponent="24"
                          lightingColor="#ffffff"
                          result="spec"
                        >
                          <feDistantLight azimuth="228" elevation="60" />
                        </feSpecularLighting>
                        <feComposite in="spec" in2="SourceAlpha" operator="in" result="specClip" />
                        <feComposite
                          in="SourceGraphic"
                          in2="specClip"
                          operator="arithmetic"
                          k1="0" k2="1" k3="1" k4="0"
                        />
                      </filter>
                    </defs>

                    {/* 1 — soft cast shadow, dropped down onto the light
                           stage so the tube sits above the surface */}
                    <path className="uni-ribbon-shadow" d={pathD} />
                    {/* 2 — ambient colour bloom */}
                    <path className="uni-ribbon-bloom" d={pathD} />
                    {/* 3 — the lit body: flat gradient in, 3D tube out */}
                    <path
                      className="uni-ribbon-body"
                      d={pathD}
                      stroke="url(#uniRibbon)"
                      filter="url(#uniTube3d)"
                    />
                  </svg>

                  <ul className="uni-orbit-items">
                    {category.items.map((item, i) => {
                      const selected = activeTool === item.name
                      return (
                        <li
                          key={item.name}
                          className={`uni-orbit-node${selected ? ' is-selected' : ''}`}
                          style={{
                            offsetPath: `path("${pathD}")`,
                            offsetDistance: `${((i / count) * 100).toFixed(2)}%`,
                            animationDuration: `${BADGE_DURATION}s`,
                            animationDelay: `${(-(i / count) * BADGE_DURATION).toFixed(2)}s`,
                            '--i': i
                          } as React.CSSProperties}
                        >
                          <button
                            type="button"
                            className="uni-orbit-btn"
                            aria-pressed={selected}
                            onClick={() => setActiveTool(selected ? null : item.name)}
                          >
                            <Badge item={item} />
                            <span className="sr-only">{item.name}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </>
              )}

              {/* the mark sits dead centre, right on the crossing point */}
              <span className="uni-core" aria-hidden="true">
                <span className="uni-core-arc" />
                <b>t</b>
              </span>
            </div>
          </div>

          {/* the caption the centre pill used to carry, moved out from
              under the mark so the two never fight for the middle */}
          <p className="uni-caption" aria-live="polite">
            {activeTool ? (
              <>
                <b className="uni-caption-name">{activeTool}</b>
                <span className="uni-caption-cat">{category.label}</span>
              </>
            ) : (
              <span className="uni-caption-tag">{category.tagline}</span>
            )}
          </p>

          <p className="uni-hint">
            {activeTool ? 'Tap again to clear' : 'Tap any logo to see what it belongs to'}
          </p>
        </div>

        <p className="uni-count">
          <span className="uni-count-num" ref={countRef}>{TOTAL_TOOLS}+</span> technologies taught and growing
        </p>

        <SmartLink className="uni-cta" href="/courses">
          Explore all technologies
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </SmartLink>
      </div>
    </section>
  )
}
