'use client'

import { useEffect, useRef, useState } from 'react'
import { useSectionVisible } from '../../hooks/useCourseMotion'
import SmartLink from '../common/SmartLink'
import { getToolIcon } from '../../data/toolIcons'
import { toolCoursePath } from '../../data/toolCourses'
import './Capabilities.css'
import WriteIn from '../common/WriteIn'

/* ------------------------------------------------------------------
   Six service tracks, each a short pitch plus the real tools behind
   it. Icons resolve through the same getToolIcon() lookup Universe.jsx
   uses — real simple-icons marks, lettered chips where a brand
   doesn't ship one. Edit freely; the grid re-lays for any tool count.
------------------------------------------------------------------ */
const CATEGORIES = [
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    blurb: 'Models trained, tuned and shipped — not notebooks that only run once.',
    tools: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn', 'Pandas', 'Keras', 'Jupyter']
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Engineering',
    blurb: 'End-to-end web applications, built on the stack the industry actually hires for.',
    tools: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'Next.js', 'MongoDB', 'Express', 'Docker']
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    blurb: 'Numbers turned into decisions — pipelines and dashboards that hold up.',
    tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'NumPy', 'Google Analytics', 'Google Search Console', 'Jupyter']
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    blurb: 'Infrastructure that scales on its own and deploys without drama.',
    tools: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub', 'Terraform', 'Nginx']
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    blurb: 'Systems tested the way an attacker would test them, before one does.',
    tools: ['Linux', 'Kali Linux', 'Wireshark', 'Burp Suite', 'Metasploit', 'OWASP', 'Splunk', 'Nmap']
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    blurb: 'Search, paid media and storefronts — measured, not guessed at.',
    tools: ['WordPress', 'Shopify', 'Google Ads', 'Google Analytics', 'Mailchimp', 'Figma', 'Semrush', 'Meta Ads']
  }
]

/* Every logo here is something we teach, so every logo is a way in:
   the card links to the course that covers it. A tool with no mapping
   (see data/toolCourses.js) stays a plain <span>, so an unmapped name
   degrades to the old, non-interactive card rather than a dead link. */
function ToolCard({ name }: { name: string }) {
  const icon = getToolIcon(name)
  const href = toolCoursePath(name)
  const Inner = href ? SmartLink : 'span'
  const linkProps = href
    ? { href, 'aria-label': `${name} — see the course`, className: 'cap-tool-link' }
    : { className: 'cap-tool-link' }

  return (
    <li className={`cap-tool${href ? ' is-linked' : ''}`}>
      <Inner {...linkProps}>
      <span className="cap-tool-icon">
        {icon.path ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={icon.path} fill={icon.hex} />
          </svg>
        ) : (
          <span className="cap-tool-mono" style={{ color: icon.hex }}>{icon.mono}</span>
        )}
      </span>
      <span className="cap-tool-name">{name}</span>
      </Inner>
    </li>
  )
}

export default function Capabilities() {
  /* adds `is-visible` once the band is reached — and also if the
     page jumped straight past it; see useSectionVisible. */
  const sectionRef = useSectionVisible(0.12)
  const [active, setActive] = useState(0)


  const category = CATEGORIES[active]

  return (
    <section className="cap" ref={sectionRef}>
      <div className="cap-bg" aria-hidden="true">
        <span className="cap-grid" />
        <svg className="cap-circuit" viewBox="0 0 1200 700" preserveAspectRatio="none" fill="none">
          <path d="M60 210 h180 l40 -40 h260" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
          <path d="M980 90 h-160 l-30 30 h-220" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
          <path d="M760 560 h180 l36 -36 h140" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
          <circle cx="60" cy="210" r="4.5" fill="rgba(255,255,255,0.3)" />
          <circle cx="540" cy="210" r="4.5" fill="rgba(255,255,255,0.3)" />
          <circle cx="820" cy="90" r="4.5" fill="rgba(255,255,255,0.3)" />
          <circle cx="590" cy="120" r="4.5" fill="rgba(255,255,255,0.3)" />
          <circle cx="1116" cy="560" r="4.5" fill="rgba(255,255,255,0.3)" />
          <circle cx="760" cy="560" r="4.5" fill="rgba(255,255,255,0.3)" />
        </svg>
        <span className="cap-glow cap-glow--a" />
        <span className="cap-glow cap-glow--b" />
      </div>

      <div className="shell cap-inner">
        <header className="cap-head">
          <p className="cap-eyebrow">
            <span className="dot" />
            Capabilities
          </p>
          <h2 className="cap-title"><WriteIn>
            Best-in-class technology, <span className="cap-title-accent">engineered into your solution</span>
          </WriteIn></h2>
          <p className="cap-sub">
            Six tracks, one team — the same tools we train on are the ones we build with.
          </p>
        </header>

        <div className="cap-body">
          <ul className="cap-sidebar" role="tablist" aria-label="Capability tracks">
            {CATEGORIES.map((c, i) => {
              const isActive = i === active
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`cap-side-btn${isActive ? ' is-active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    {c.label}
                    {isActive && (
                      <svg className="cap-side-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="cap-panel" key={category.id}>
            <p className="cap-panel-blurb">{category.blurb}</p>
            <ul className="cap-tools">
              {category.tools.map((name) => (
                <ToolCard name={name} key={name} />
              ))}
            </ul>

            <SmartLink className="cap-more" href="/contact">
              Learn more
              <span className="cap-more-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  )
}
