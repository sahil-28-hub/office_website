'use client'

import { useMemo } from 'react'
import { useReveal } from '../../hooks/useCourseMotion'
import { GET_IN_TOUCH } from '../../data/contact'
import type { SiteSettings } from '../../lib/siteSettings'
import ContactIcon from './icons'
import './GetInTouch.css'

/* ------------------------------------------------------------------
   The card that rides up over the banner.

   It holds the addresses only — the message form was removed, so the
   three blocks spread across the full width of the card rather than
   sitting in a column beside it. Anyone wanting to start a
   conversation does it from the desks in the next section, which put
   the call, WhatsApp and email actions on one button row.
------------------------------------------------------------------ */
/**
 * Substitutes the CMS's contact details into the bundled blocks.
 *
 * Line-by-line rather than block-by-block: the CMS settings row holds
 * ONE phone and ONE email, and the card shows two of each — a main and
 * an alternate. Replacing the whole block would drop the alternate,
 * which is a real number the CMS has no field for.
 *
 * The structure, the icons and the headings stay bundled. Only the
 * values the CMS actually holds are swapped in.
 */
function blocksFrom(settings?: SiteSettings) {
  if (!settings) return GET_IN_TOUCH.blocks

  return GET_IN_TOUCH.blocks.map((block) => {
    if (block.icon === 'mail') {
      return {
        ...block,
        lines: block.lines.map((line, i) =>
          i === 0 ? { text: settings.email, href: `mailto:${settings.email}` } : line
        )
      }
    }

    if (block.icon === 'phone') {
      return {
        ...block,
        lines: block.lines.map((line, i) =>
          i === 0
            ? { text: `Phone : ${settings.phoneDisplay}`, href: `tel:${settings.phoneDial}` }
            : line
        )
      }
    }

    if (block.icon === 'pin') {
      /* The address is one string in the CMS and three lines here. It
         is only substituted when the CMS actually carries one —
         otherwise the bundled street/locality/postcode lines stand,
         which is the case today. */
      const address = settings.address?.trim()
      if (!address || address === block.lines.slice(1).map((l) => l.text).join(', ')) return block
      return { ...block, lines: [block.lines[0], { text: address }] }
    }

    return block
  })
}

/**
 * @param settings the CMS settings row, from src/app/contact/page.tsx.
 *
 * Without this the contact page printed the bundled phone number while
 * the footer printed the CMS's — two different numbers on one site,
 * which is the first thing that goes wrong when only half a page is
 * connected to the CMS.
 */
export default function GetInTouch({ settings }: { settings?: SiteSettings }) {
  const ref = useReveal()

  const blocks = useMemo(() => blocksFrom(settings), [settings])

  /*
    The real profile URLs, or none.

    These were four more `href="#"` links, like the footer's five. The
    CMS settings row is where they are set now, and a profile with no
    URL simply has no icon rather than a link that jumps to the top of
    the page.
  */
  const socials = useMemo(
    () =>
      (settings?.socials ?? [])
        /* ContactIcon knows this set by name and returns null for
           anything else — which would render an empty, clickable
           square. 'x' is drawn by the 'twitter' glyph here; the CMS
           accepts either key. */
        .map((social) => ({ ...social, icon: social.key === 'x' ? 'twitter' : social.key }))
        .filter((social) =>
          ['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'].includes(social.icon)
        ),
    [settings]
  )

  return (
    <section className="git" id="get-in-touch" ref={ref}>
      <div className="shell">
        <div className="git-card" data-reveal="scale">
          <header className="git-head">
            <h2 className="git-title">{GET_IN_TOUCH.title}</h2>
            <p className="git-blurb">{GET_IN_TOUCH.blurb}</p>
          </header>

          <ul className="git-blocks">
            {blocks.map((block, i) => (
              <li key={block.title} data-reveal style={{ '--d': `${120 + i * 90}ms` }}>
                <span className="git-badge">
                  <ContactIcon name={block.icon} />
                </span>

                <div className="git-block-body">
                  <h3>{block.title}</h3>
                  {block.lines.map((line) => (
                    <p key={line.text}>
                      {line.href ? <a href={line.href}>{line.text}</a> : line.text}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <hr className="git-rule" />

          {socials.length > 0 && (
            <footer className="git-foot">
              <h3 className="git-social-title">{GET_IN_TOUCH.socialTitle}</h3>

              <ul className="git-socials">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <ContactIcon name={social.icon} size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          )}
        </div>
      </div>
    </section>
  )
}
