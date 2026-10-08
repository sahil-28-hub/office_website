'use client'

import { useReveal } from '../hooks/useCourseMotion'
import { useSpotlight } from '../hooks/useAboutMotion'
import '../components/kit/page-kit.css'
import './MoreCoursesPage.css'
import './TrainingPages.css'
import PageHero from '../components/kit/PageHero'
import Accordion from '../components/kit/Accordion'
import Cta from '../components/sections/Cta'
import SmartLink from '../components/common/SmartLink'
import PageIcon from '../components/kit/icons'
import {
  FORMATS,
  buildPlan,
  domainFaqs,
  planProjects,
  trainingPath,
  type TrainingDomain,
  type TrainingFormat
} from '../data/trainingTracks'

/* ------------------------------------------------------------------
   The Internship & Training pages. Content: data/trainingTracks.ts.

   TrainingDomainPage    /training/<domain>
     banner · the three durations · what you learn · tools ·
     where it leads · questions · call the campus

   TrainingDurationPage  /training/<domain>/<duration>
     banner · overview · the plan · projects & tools ·
     what you receive · the other durations · questions · call
------------------------------------------------------------------ */

const d = (ms: number) => ({ '--d': `${ms}ms` }) as any

/* The three duration cards — on the domain page all three, on a
   duration page the other two. */
function DurationCards({ domain, formats }: { domain: TrainingDomain; formats: TrainingFormat[] }) {
  const spotRef = useSpotlight('.tr-format')

  return (
    <ul className={`tr-formats tr-formats--${formats.length}`} ref={spotRef}>
      {formats.map((format, i) => (
        <li key={format.key} data-reveal="rise" style={d(i * 90)}>
          <article className="tr-format" data-spot>
            <span className="tr-format-badge">{format.badge}</span>
            <p className="tr-format-len">{format.short}</p>
            <h3>
              {format.short} {domain.name} Training
            </h3>
            <p className="tr-format-sum">{format.summary}</p>

            <ul className="tr-format-points">
              {format.highlights.map((point) => (
                <li key={point}>
                  <PageIcon name="check" />
                  {point}
                </li>
              ))}
            </ul>

            <p className="tr-format-for">
              <b>Best for:</b> {format.bestFor}
            </p>

            <SmartLink className="tr-format-cta" href={trainingPath(domain.slug, format.key)}>
              View {format.short.toLowerCase()} plan
              <PageIcon name="arrowRight" />
            </SmartLink>
          </article>
        </li>
      ))}
    </ul>
  )
}

function Questions({ faqs }: { faqs: { id: string; q: string; a: string }[] }) {
  const ref = useReveal()

  return (
    <section className="ap-light ap-light--tint ap-sec" id="faq" ref={ref}>
      <div className="shell mc-faq">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>Questions</p>
          <h2 className="ap-title" data-reveal style={d(80)}>
            Before you <span className="ap-accent">join.</span>
          </h2>
          <p className="ap-lead" data-reveal style={d(150)}>
            Fees and batch dates are confirmed by the Ludhiana campus — call us or book a free demo
            class.
          </p>
        </div>
        <Accordion items={faqs} initial={faqs[0]?.id ?? null} />
      </div>
    </section>
  )
}

function Tools({ tools }: { tools: string[] }) {
  return (
    <ul className="tr-tools">
      {tools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>
  )
}

/* ================================================================
   /training/<domain>
================================================================ */
export function TrainingDomainPage({ domain }: { domain: TrainingDomain }) {
  const formatsRef = useReveal()
  const learnRef = useReveal()
  const careersRef = useReveal()

  const hero = {
    eyebrow: `${domain.name} Training · Ludhiana`,
    title: `${domain.name} industrial training`,
    accent: 'in Ludhiana.',
    lead: domain.lead,
    image: '/gallery/2.png',
    facts: [
      { k: 'Durations', v: '45 days · 6 weeks · 6 months' },
      { k: 'Mode', v: 'Classroom, hands-on lab' },
      { k: 'Certificate', v: 'Training letter & certificate' },
      { k: 'Campus', v: 'Bharat Nagar Chowk, Ludhiana' }
    ],
    actions: [
      { label: 'Choose a duration', href: '#durations' },
      { label: 'Book a free demo', href: '/contact', kind: 'ghost' }
    ]
  }

  return (
    <div className="tc-page tc-page--training">
      <main id="main">
        <PageHero {...(hero as any)} id="training-top" />

        <section className="ap-light ap-sec" id="durations" ref={formatsRef}>
          <div className="shell">
            <div className="ap-head ap-head--center">
              <p className="ap-eyebrow" data-reveal>Choose your duration</p>
              <h2 className="ap-title" data-reveal style={d(80)}>
                {domain.name} training, <span className="ap-accent">three ways.</span>
              </h2>
              <p className="ap-lead" data-reveal style={d(150)}>{domain.tagline}</p>
            </div>
            <DurationCards domain={domain} formats={FORMATS} />
          </div>
        </section>

        <section className="ap-light ap-light--tint ap-sec" id="learn" ref={learnRef}>
          <div className="shell">
            <div className="mc-intro">
              <div className="ap-head">
                <p className="ap-eyebrow" data-reveal>Why {domain.name} in Ludhiana</p>
                <h2 className="ap-title" data-reveal style={d(80)}>
                  What you will <span className="ap-accent">learn.</span>
                </h2>
                <p className="ap-lead" data-reveal style={d(150)}>{domain.local}</p>
              </div>
              <div data-reveal style={d(220)}>
                <p className="tr-side-label">Tools you will use</p>
                <Tools tools={domain.tools} />
              </div>
            </div>

            <ol className="tr-stages">
              {domain.stages.map((stage, i) => (
                <li className="tc-card" key={stage.title} data-reveal="rise" style={d(i * 60)}>
                  <span className="tc-card-no">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{stage.title}</h3>
                  <ul className="tc-card-list">
                    {stage.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ap-dark ap-sec" id="careers" ref={careersRef}>
          <div className="shell">
            <div className="ap-head">
              <p className="ap-eyebrow" data-reveal>Where it leads</p>
              <h2 className="ap-title" data-reveal style={d(80)}>
                Roles this training <span className="ap-accent">prepares you for.</span>
              </h2>
              <p className="ap-lead" data-reveal style={d(150)}>{domain.eligibility}</p>
            </div>
            <ul className="tc-grid tc-grid--4">
              {domain.roles.map((role, i) => (
                <li className="tc-card" key={role} data-reveal="rise" style={d(i * 80)}>
                  <span className="ap-ico">
                    <PageIcon name="career" />
                  </span>
                  <h3>{role}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Questions faqs={domainFaqs(domain)} />
        <Cta />
      </main>
    </div>
  )
}

/* ================================================================
   /training/<domain>/<duration>
================================================================ */
export function TrainingDurationPage({ domain, format }: { domain: TrainingDomain; format: TrainingFormat }) {
  const overviewRef = useReveal()
  const planRef = useReveal()
  const projectsRef = useReveal()
  const receiveRef = useReveal()
  const othersRef = useReveal()

  const plan = buildPlan(domain, format.key)
  const projects = planProjects(domain, format.key)
  const others = FORMATS.filter((f) => f.key !== format.key)

  const hero = {
    eyebrow: `${format.label} · ${domain.name}`,
    title: `${format.short} ${domain.name} training`,
    accent: 'in Ludhiana.',
    lead: format.summary,
    image: '/gallery/4.png',
    facts: [
      { k: 'Duration', v: format.length },
      { k: 'Domain', v: domain.name },
      { k: 'You receive', v: format.deliverables[0] },
      { k: 'Campus', v: 'Bharat Nagar Chowk, Ludhiana' }
    ],
    actions: [
      { label: 'Book a free demo', href: '/contact' },
      { label: `All ${domain.name} durations`, href: trainingPath(domain.slug), kind: 'ghost' }
    ]
  }

  return (
    <div className="tc-page tc-page--training">
      <main id="main">
        <PageHero {...(hero as any)} id="training-top" />

        <section className="ap-light ap-sec" id="overview" ref={overviewRef}>
          <div className="shell mc-intro">
            <div className="ap-head">
              <p className="ap-eyebrow" data-reveal>Overview</p>
              <h2 className="ap-title" data-reveal style={d(80)}>
                {format.length} of {domain.name},{' '}
                <span className="ap-accent">planned day by day.</span>
              </h2>
              <p className="ap-lead" data-reveal style={d(150)}>{format.overview}</p>
              <p className="ap-lead" data-reveal style={d(210)}>{domain.local}</p>
            </div>

            <ul className="mc-points" data-reveal style={d(220)}>
              {format.highlights.map((point) => (
                <li key={point}>
                  <PageIcon name="check" />
                  {point}
                </li>
              ))}
              <li>
                <PageIcon name="check" />
                Best for: {format.bestFor}
              </li>
            </ul>
          </div>
        </section>

        <section className="ap-light ap-light--tint ap-sec" id="plan" ref={planRef}>
          <div className="shell">
            <div className="ap-head">
              <p className="ap-eyebrow" data-reveal>The plan</p>
              <h2 className="ap-title" data-reveal style={d(80)}>
                How the {format.length} <span className="ap-accent">are spent.</span>
              </h2>
            </div>

            <ol className="tr-plan">
              {plan.map((step, i) => (
                <li key={step.tag} data-reveal="rise" style={d(i * 70)}>
                  <span className="tr-plan-tag">{step.tag}</span>
                  <div className="tr-plan-body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    <ul>
                      {step.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ap-light ap-sec" id="projects" ref={projectsRef}>
          <div className="shell tr-two">
            <div>
              <p className="ap-eyebrow" data-reveal>Projects</p>
              <h2 className="ap-title" data-reveal style={d(80)}>What you will build</h2>
              <ul className="tr-projects">
                {projects.map((project, i) => (
                  <li key={project} data-reveal="rise" style={d(120 + i * 60)}>
                    <PageIcon name="layers" />
                    {project}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="ap-eyebrow" data-reveal>Tools</p>
              <h2 className="ap-title" data-reveal style={d(80)}>What you will use</h2>
              <div data-reveal style={d(150)}>
                <Tools tools={domain.tools} />
              </div>
            </div>
          </div>
        </section>

        <section className="ap-dark ap-sec" id="receive" ref={receiveRef}>
          <div className="shell">
            <div className="ap-head">
              <p className="ap-eyebrow" data-reveal>At the end</p>
              <h2 className="ap-title" data-reveal style={d(80)}>
                What you <span className="ap-accent">receive.</span>
              </h2>
              <p className="ap-lead" data-reveal style={d(150)}>
                <b>Who can join:</b> {domain.eligibility}
              </p>
            </div>
            <ul className="tc-grid tc-grid--4">
              {format.deliverables.map((item, i) => (
                <li className="tc-card" key={item} data-reveal="rise" style={d(i * 80)}>
                  <span className="ap-ico">
                    <PageIcon name="award" />
                  </span>
                  <h3>{item}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ap-light ap-sec" id="other-durations" ref={othersRef}>
          <div className="shell">
            <div className="ap-head">
              <p className="ap-eyebrow" data-reveal>Other durations</p>
              <h2 className="ap-title" data-reveal style={d(80)}>
                {domain.name} training is <span className="ap-accent">also available as</span>
              </h2>
            </div>
            <DurationCards domain={domain} formats={others} />
          </div>
        </section>

        <Questions faqs={domainFaqs(domain)} />
        <Cta />
      </main>
    </div>
  )
}
