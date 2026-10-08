'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { NAV_ITEMS, MENU_QUOTE } from '../../data/navMenus'
import SmartLink from '../common/SmartLink'
import { OPEN_DEMO_EVENT } from '../common/BookDemoModal'
import './Navbar.css'

const DESKTOP = '(min-width: 1320px)'

/* How far the page has to move before the transparent bar picks up a
   surface and contracts into the pill. Far enough that the see-through
   state over the hero is actually seen, short enough that it happens
   on the first flick of the wheel. */
const SHRINK_AT = 56

/* ---------------------------- icons ---------------------------- */
function Chevron() {
  return (
    <svg className="nav-chevron" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Spark() {
  return (
    <svg className="nav-spark" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M7 0.8 8.3 5.2 12.7 6.5 8.3 7.8 7 12.2 5.7 7.8 1.3 6.5 5.7 5.2Z" fill="currentColor" />
    </svg>
  )
}

function Bolt() {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path d="M7.8 0.6 3 7.6h3.1L5.4 13.4 10.6 6h-3l0.8-5.4Z" fill="currentColor" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* Photo tile that quietly degrades to a brand gradient when the file
   isn't in public/photos/ yet. */
function Thumb({ src, alt, tone }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return <span className={`nav-thumb nav-thumb--${tone || 'blue'}`} aria-hidden="true" />
  }
  return (
    <span className={`nav-thumb nav-thumb--${tone || 'blue'}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
    </span>
  )
}

/* ------------------------- panel layouts ------------------------ */
function FeaturedPanel({ data, onNavigate }) {
  return (
    <div className="mega-featured">
      <div className="mega-cats">
        <p className="mega-label">Categories</p>
        <ul>
          {data.categories.map((c) => (
            <li key={c.label}>
              <SmartLink href={c.href} onClick={onNavigate}>
                {c.label}
                <ArrowIcon />
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="mega-cards">
        <p className="mega-label">Featured</p>
        <div className="mega-cards-row">
          {data.featured.map((f) => (
            <SmartLink className="mega-card" href={f.href} key={f.title} onClick={onNavigate}>
              <Thumb src={f.img} alt="" tone={f.tone} />
              <span className="mega-card-title">{f.title}</span>
              <span className="mega-card-tags">
                {f.tags.map((t, i) => (
                  <em key={t} className={i === 0 ? 'is-lead' : undefined}>{t}</em>
                ))}
              </span>
            </SmartLink>
          ))}
        </div>
      </div>
    </div>
  )
}

function AiPanel({ data, onNavigate }) {
  return (
    <div className="mega-ai">
      <div className="mega-ai-main">
        <h3 className="mega-ai-title">{data.title}</h3>
        <p className="mega-ai-blurb">{data.blurb}</p>

        <div className="mega-ai-groups">
          {data.groups.map((g) => (
            <div className="mega-group" key={g.title}>
              <p className="mega-group-title">
                <span className="mega-group-icon">
                  {g.icon === 'bolt' ? <Bolt /> : <Spark />}
                </span>
                {g.title}
              </p>
              <ul>
                {g.links.map((l) => (
                  <li key={l.label}>
                    <SmartLink href={l.href} onClick={onNavigate}>
                      {l.label}
                      {l.badge && <b className="mega-badge mega-badge--hot">{l.badge}</b>}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <SmartLink className="mega-spotlight" href={data.spotlight.href} onClick={onNavigate}>
        <Thumb src={data.spotlight.img} alt="" tone={data.spotlight.tone} />
        <span className="mega-spotlight-body">
          <em>{data.spotlight.kicker}</em>
          <strong>{data.spotlight.title}</strong>
        </span>
      </SmartLink>

      <SmartLink className="mega-promo" href={data.promo.href} onClick={onNavigate}>
        <span className="mega-promo-text">{data.promo.text}</span>
        <span className="mega-promo-cta">
          {data.promo.cta}
          <ArrowIcon />
        </span>
      </SmartLink>
    </div>
  )
}

function ColumnsPanel({ data, onNavigate }) {
  return (
    <div className="mega-columns-wrap">
      <div className="mega-columns" data-count={data.columns.length}>
        {data.columns.map((col, i) => (
          <div className="mega-col" key={col.title}>
            <span className="mega-col-no">{String(i + 1).padStart(2, '0')}</span>
            {/* A column with a category page of its own names it: the
                heading is the link to "<category> courses in <city>". */}
            <h3 className="mega-col-title">
              {col.href ? (
                <SmartLink href={col.href} onClick={onNavigate}>{col.title}</SmartLink>
              ) : (
                col.title
              )}
            </h3>
            <p className="mega-col-blurb">{col.blurb}</p>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <SmartLink href={l.href || data.footer.href} onClick={onNavigate}>
                    {l.label}
                    {l.badge && <b className={l.badge === 'Hot' ? 'mega-badge mega-badge--hot' : 'mega-badge'}>{l.badge}</b>}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mega-foot">
        <p className="mega-quote">
          <span aria-hidden="true">&ldquo;</span>
          {MENU_QUOTE.text} <b>&mdash; {MENU_QUOTE.by}</b>
        </p>
        <SmartLink className="mega-foot-link" href={data.footer.href} onClick={onNavigate}>
          {data.footer.label}
          <ArrowIcon />
        </SmartLink>
      </div>
    </div>
  )
}

/* Line glyphs for the tile menu, keyed by the `icon` field in
   navMenus. An unknown key falls back to the code brackets. */
const TILE_ICONS = {
  cloud: <path d="M7 18h10.5a4 4 0 0 0 .4-7.98A6 6 0 0 0 6.2 9.1 4.5 4.5 0 0 0 7 18Z" />,
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M11 18.5h2" />
    </>
  ),
  code: <path d="m9 8-4 4 4 4M15 8l4 4-4 4M13.2 6l-2.4 12" />,
  bot: (
    <>
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 4.5V8M9.5 13h.01M14.5 13h.01M9.5 16.2h5M3 12.5v3M21 12.5v3" />
    </>
  ),
  megaphone: <path d="M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1ZM16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" />,
  chart: <path d="M4 20h16M7 16.5V11M12 16.5V6.5M17 16.5v-4" />,
  shield: <path d="M12 3 5 6v5.5c0 4.3 2.9 7.9 7 9.5 4.1-1.6 7-5.2 7-9.5V6l-7-3ZM9 12l2 2 4-4" />,
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8.5 20h7M12 16v4" />
    </>
  ),
  cube: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3ZM4 7.5l8 4.5 8-4.5M12 12v9" />
}

function TileIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {TILE_ICONS[name] || TILE_ICONS.code}
    </svg>
  )
}

function TilesPanel({ data, onNavigate }) {
  return (
    <div className="mega-tiles-wrap">
      <ul className="mega-tiles">
        {data.tiles.map((t) => (
          <li key={t.label}>
            <SmartLink className="mega-tile" href={t.href || data.footer.href} onClick={onNavigate}>
              <span className="mega-tile-icon">
                <TileIcon name={t.icon} />
              </span>
              <span className="mega-tile-label">{t.label}</span>
              {t.badge && <b className="mega-tile-badge">{t.badge}</b>}
            </SmartLink>
          </li>
        ))}
      </ul>

      {data.formats?.length > 0 && (
        <div className="mega-formats">
          <span className="mega-label">Training formats</span>
          <ul>
            {data.formats.map((f) => (
              <li key={f.label}>
                <SmartLink href={f.href} onClick={onNavigate}>{f.label}</SmartLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mega-foot">
        <p className="mega-quote">
          <span aria-hidden="true">&ldquo;</span>
          {MENU_QUOTE.text} <b>&mdash; {MENU_QUOTE.by}</b>
        </p>
        <SmartLink className="mega-foot-link" href={data.footer.href} onClick={onNavigate}>
          {data.footer.label}
          <ArrowIcon />
        </SmartLink>
      </div>
    </div>
  )
}

function Panel({ data, onNavigate }) {
  if (data.kind === 'tiles') return <TilesPanel data={data} onNavigate={onNavigate} />
  if (data.kind === 'featured') return <FeaturedPanel data={data} onNavigate={onNavigate} />
  if (data.kind === 'ai') return <AiPanel data={data} onNavigate={onNavigate} />
  return <ColumnsPanel data={data} onNavigate={onNavigate} />
}

/* A plain dropdown — one narrow list anchored under its own trigger,
   not the wide shared mega-panel the other menus use. Branches is a
   flat list of places, not a category with cards or featured links,
   so it doesn't need the mega treatment. */
function SimpleDropdown({ data, onNavigate, id }) {
  return (
    <ul className="nav-simple" id={id} role="menu">
      {data.links.map((l) => (
        <li key={l.label} role="none">
          <SmartLink href={l.href} onClick={onNavigate} role="menuitem">
            {l.label}
          </SmartLink>
        </li>
      ))}
    </ul>
  )
}

/* ------------------------- mobile drawer ------------------------ */
function DrawerLinks({ data, onNavigate }) {
  if (data.kind === 'simple') {
    return (
      <ul className="drawer-sub">
        {data.links.map((l) => (
          <li key={l.label}>
            <SmartLink href={l.href} onClick={onNavigate}>{l.label}</SmartLink>
          </li>
        ))}
      </ul>
    )
  }

  if (data.kind === 'featured') {
    return (
      <ul className="drawer-sub">
        {data.categories.map((c) => (
          <li key={c.label}>
            <SmartLink href={c.href} onClick={onNavigate}>{c.label}</SmartLink>
          </li>
        ))}
      </ul>
    )
  }

  if (data.kind === 'tiles') {
    return (
      <>
        <ul className="drawer-sub">
          {data.tiles.map((t) => (
            <li key={t.label}>
              <SmartLink href={t.href || data.footer.href} onClick={onNavigate}>
                {t.label}
                {t.badge && <b className="mega-badge">{t.badge}</b>}
              </SmartLink>
            </li>
          ))}
        </ul>
        {data.formats?.length > 0 && (
          <>
            <p className="drawer-group">Training formats</p>
            <ul className="drawer-sub">
              {data.formats.map((f) => (
                <li key={f.label}>
                  <SmartLink href={f.href} onClick={onNavigate}>{f.label}</SmartLink>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    )
  }

  if (data.kind === 'ai') {
    return (
      <>
        {data.groups.map((g) => (
          <div key={g.title}>
            <p className="drawer-group">{g.title}</p>
            <ul className="drawer-sub">
              {g.links.map((l) => (
                <li key={l.label}>
                  <SmartLink href={l.href} onClick={onNavigate}>
                    {l.label}
                    {l.badge && <b className="mega-badge mega-badge--hot">{l.badge}</b>}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    )
  }

  return (
    <>
      {/* The drawer's only route to the index page behind the menu —
          the top row is a toggle here, not a link, so without this
          'Courses' on a phone can reach every individual course but
          never /courses itself. */}
      <ul className="drawer-sub">
        <li>
          <SmartLink href={data.footer.href} onClick={onNavigate}>{data.footer.label}</SmartLink>
        </li>
      </ul>

      {data.columns.map((col) => (
        <div key={col.title}>
          <p className="drawer-group">
            {col.href ? (
              <SmartLink href={col.href} onClick={onNavigate}>{col.title}</SmartLink>
            ) : (
              col.title
            )}
          </p>
          <ul className="drawer-sub">
            {col.links.map((l) => (
              <li key={l.label}>
                <SmartLink href={l.href || data.footer.href} onClick={onNavigate}>
                  {l.label}
                  {l.badge && <b className={l.badge === 'Hot' ? 'mega-badge mega-badge--hot' : 'mega-badge'}>{l.badge}</b>}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

/* ---------------------------- navbar ---------------------------- */
/**
 * @param navPages pages written in the CMS and marked for the header.
 *   Appended to the fixed menu as plain links — a CMS page has no
 *   mega-menu behind it, and the bar's existing items are a designed
 *   set rather than a list an editor should be able to reorder.
 *
 *   Empty in the usual case, so the bar looks exactly as it always
 *   has until somebody marks a page for it.
 */
export default function Navbar({
  navPages = []
}: {
  navPages?: Array<{ slug: string; label: string }>
} = {}) {
  const headerRef = useRef(null)
  const closeTimer = useRef(0)

  const [openMenu, setOpenMenu] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const [expanded, setExpanded] = useState(null)
  /*
    Both start `false`, and both are corrected by their effect below.

    They used to be seeded with `typeof window !== 'undefined' && …`,
    which is a server/client branch and the exact thing React's
    hydration error names. The server has no window, so it always
    rendered `nav-wrap`; the browser evaluated the same initialiser
    against a real `window.scrollY`, and on any page opened
    already-scrolled — a reload part-way down an article, a link to an
    anchor, a restored tab — the first client render produced
    `nav-wrap is-scrolled` instead. React compares the two, finds the
    className different, and warns that it will not patch it up.

    Starting from what the server rendered makes the first client
    render identical by construction. The real value arrives a tick
    later, from the effects, which is the only place it can be read
    honestly.
  */
  const [isDesktop, setIsDesktop] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* at the very top the bar runs edge to edge; scrolling shrinks it
     into the floating pill */
  useEffect(() => {
    let ticking = false
    const read = () => {
      setScrolled(window.scrollY > SHRINK_AT)
      ticking = false
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* track the breakpoint so the two navigation modes never both run */
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP)
    const sync = (e) => {
      setIsDesktop(e.matches)
      setOpenMenu(null)
      setDrawer(false)
    }

    /*
      Read once on mount, not only on `change`.

      The state now starts `false` so hydration matches the server, so
      without this a desktop visitor would sit in mobile mode until
      they happened to resize the window. The scroll effect above does
      the same thing by calling `read()` immediately.
    */
    setIsDesktop(mq.matches)

    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  /* lock the page behind the mobile drawer only */
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer])

  const cancelClose = useCallback(() => {
    window.clearTimeout(closeTimer.current)
  }, [])

  /* a grace period so the pointer can cross the gap from trigger to
     panel without the menu snapping shut underneath it */
  const closeSoon = useCallback(() => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140)
  }, [cancelClose])

  const openNow = useCallback(
    (key) => {
      cancelClose()
      setOpenMenu(key)
    },
    [cancelClose]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (openMenu) {
        const trigger = headerRef.current?.querySelector(`[data-menu="${openMenu}"]`)
        setOpenMenu(null)
        trigger?.focus()
      }
      setDrawer(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openMenu])

  /* pointer or focus leaving the header closes the mega menu */
  useEffect(() => {
    if (!openMenu) return
    const outside = (e) => {
      if (!headerRef.current?.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('focusin', outside)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('focusin', outside)
    }
  }, [openMenu])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  const closeAll = useCallback(() => {
    setOpenMenu(null)
    setDrawer(false)
    setExpanded(null)
  }, [])

  /* "Book Demo" opens the modal instead of scrolling to the old #demo
     section — a window event so BookDemoModal (mounted once in App)
     doesn't need to be threaded through as a prop here. */
  const openDemo = useCallback((event) => {
    event.preventDefault()
    window.dispatchEvent(new Event(OPEN_DEMO_EVENT))
  }, [])

  /*
    The fixed bar, with the CMS's pages folded into Resources.

    They used to be appended to the bar itself, one top-level item per
    page. That is fine for the first page and wrong by the third: the
    bar is a fixed set of destinations sized to fit, and an editor
    publishing pages was silently widening it until it wrapped and
    collapsed. Pages are reference material, which is what Resources
    is for, so they go in that menu's list and the bar stays the bar.

    Built once and used by the desktop list and the drawer below, so
    the two cannot drift.
  */
  const items = navPages.length
    ? NAV_ITEMS.map((item) =>
        /* `'categories' in menu` rather than a cast: the menus are a union
           of panel shapes and only the featured one has a category list. */
        item.key === 'resources' && item.menu && 'categories' in item.menu
          ? {
              ...item,
              menu: {
                ...item.menu,
                categories: [
                  ...item.menu.categories,
                  ...navPages.map((page) => ({
                    label: page.label,
                    href: `/${page.slug}`
                  }))
                ]
              }
            }
          : item
      )
    : NAV_ITEMS

  /* `items`, not NAV_ITEMS: the open panel has to be the one carrying
     the CMS pages, or Resources would render its bundled list only. */
  const active = items.find((i) => i.key === openMenu)

  return (
    <header
      className={[
        'nav-wrap',
        openMenu ? 'has-mega' : '',
        drawer ? 'has-drawer' : '',
        scrolled ? 'is-scrolled' : ''
      ]
        .filter(Boolean)
        .join(' ')}
      ref={headerRef}
    >
      <nav className="nav-bar" aria-label="Main">
        {/* two wordmarks, cross-faded by the bar's state: the white one
            while the bar is transparent over the hero, the indigo one
            once it has a surface under it */}
        <SmartLink className="nav-logo" href="/" aria-label="techcadd — home" onClick={closeAll}>
          <img
            className="nav-logo--dark"
            src="/tece_new_logo.png"
            alt="techcadd, your skill and technology partner"
            width="900"
            height="231"
            fetchPriority="high"
          />
          <img className="nav-logo--light" src="/techcadd-logo-white.png" alt="" aria-hidden="true" width="900" height="231" />
        </SmartLink>

        <ul
          className="nav-links"
          onPointerEnter={cancelClose}
          onPointerLeave={isDesktop ? closeSoon : undefined}
        >
          {items.map((item) => {
            const isOpen = openMenu === item.key
            const classes = ['nav-link', item.highlight ? 'nav-link--ai' : '', isOpen ? 'is-open' : '']
              .join(' ')
              .trim()

            if (!item.menu) {
              return (
                <li key={item.label}>
                  <SmartLink className={classes} href={item.href}>{item.label}</SmartLink>
                </li>
              )
            }

            const isSimple = item.menu.kind === 'simple'
            const controlsId = isSimple ? `nav-simple-${item.key}` : 'nav-mega'

            /* Shared by both trigger shapes below, so a link trigger
               opens its panel on exactly the same gestures a button
               one does. */
            const triggerProps = {
              className: classes,
              'data-menu': item.key,
              'aria-expanded': isOpen,
              'aria-controls': controlsId,
              'aria-haspopup': 'true' as const,
              onPointerEnter: (e) => e.pointerType === 'mouse' && openNow(item.key),
              onFocus: () => openNow(item.key)
            }

            return (
              <li key={item.label} className={isSimple ? 'nav-item--simple' : undefined}>
                {item.navigates ? (
                  /* A real link: hovering still opens the menu, and the
                     click goes to the page behind it — /courses, with
                     every course on it — rather than only toggling the
                     panel the pointer has already opened. */
                  <SmartLink
                    {...triggerProps}
                    href={item.href}
                    onClick={closeAll}
                  >
                    {item.label}
                    {item.highlight ? <Spark /> : <Chevron />}
                  </SmartLink>
                ) : (
                  <button
                    {...triggerProps}
                    type="button"
                    onClick={() => (isOpen ? setOpenMenu(null) : openNow(item.key))}
                  >
                    {item.label}
                    {item.highlight ? <Spark /> : <Chevron />}
                  </button>
                )}

                {isSimple && isDesktop && isOpen && (
                  <SimpleDropdown data={item.menu} onNavigate={closeAll} id={controlsId} />
                )}
              </li>
            )
          })}
        </ul>

        <SmartLink className="nav-cta" href="#demo" onClick={openDemo}>Book Demo</SmartLink>

        <button
          className="nav-burger"
          type="button"
          onClick={() => setDrawer((v) => !v)}
          aria-expanded={drawer}
          aria-controls="nav-drawer"
          aria-label={drawer ? 'Close menu' : 'Open menu'}
        >
          <span className={drawer ? 'burger-bar is-x-top' : 'burger-bar'} />
          <span className={drawer ? 'burger-bar is-hidden' : 'burger-bar'} />
          <span className={drawer ? 'burger-bar is-x-bottom' : 'burger-bar'} />
        </button>
      </nav>

      {isDesktop && active && active.menu.kind !== 'simple' && (
        <div
          className="nav-mega"
          id="nav-mega"
          onPointerEnter={cancelClose}
          onPointerLeave={closeSoon}
        >
          <div className="nav-mega-panel" data-kind={active.menu.kind}>
            <Panel data={active.menu} onNavigate={closeAll} />
          </div>
        </div>
      )}

      <div id="nav-drawer" className={drawer ? 'nav-drawer is-open' : 'nav-drawer'} hidden={!drawer}>
        <ul className="drawer-list">
          {items.map((item) => {
            if (!item.menu) {
              return (
                <li key={item.label}>
                  <SmartLink className="drawer-top" href={item.href} onClick={closeAll}>{item.label}</SmartLink>
                </li>
              )
            }

            const isOpen = expanded === item.key
            return (
              <li key={item.label} className={isOpen ? 'is-open' : undefined}>
                <button
                  className={item.highlight ? 'drawer-top drawer-toggle is-ai' : 'drawer-top drawer-toggle'}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`drawer-${item.key}`}
                  onClick={() => setExpanded(isOpen ? null : item.key)}
                >
                  {item.label}
                  <Chevron />
                </button>

                <div className="drawer-panel" id={`drawer-${item.key}`}>
                  <div className="drawer-panel-inner">
                    <DrawerLinks data={item.menu} onNavigate={closeAll} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <SmartLink
          className="nav-drawer-cta"
          href="#demo"
          onClick={(event) => {
            openDemo(event)
            closeAll()
          }}
        >
          Book Demo
        </SmartLink>
      </div>
    </header>
  )
}
