import AboutIcon from '../about/icons'

/* ------------------------------------------------------------------
   The glyphs the new pages need that the About set does not carry —
   stars, a search lens, a handshake, and so on. Same 24-unit grid and
   1.6 stroke as every other icon on the site.

   Any name this file does not know is handed straight to the About
   set, so a component can ask for 'rocket' or 'star' without caring
   which file it lives in.
------------------------------------------------------------------ */
const PATHS = {
  star: <path d="m12 3.6 2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 16.9l-5.25 2.75 1-5.85L3.5 9.75l5.9-.85L12 3.6Z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3.5V6.5M16 3.5V6.5" />
    </>
  ),
  handshake: (
    <>
      <path d="m3.5 11 3-3 3.2 3.2a2 2 0 0 0 2.8 0L14 10l4.5 4.5" />
      <path d="M20.5 11 17 7.5l-3 1-3-1L7.5 11" />
      <path d="m10 15.5 1.6 1.6a1.6 1.6 0 0 0 2.3 0" />
    </>
  ),
  building: (
    <>
      <path d="M4 20.5V6.2a1.5 1.5 0 0 1 1-1.4l6-2a1.5 1.5 0 0 1 2 1.4V20.5" />
      <path d="M13 10h5.5a1.5 1.5 0 0 1 1.5 1.5v9" />
      <path d="M2.5 20.5h19M7.5 9h2M7.5 13h2M7.5 17h2M16 14h1.5M16 17.5h1.5" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 12c0 4-3.8 7.2-8.5 7.2a10 10 0 0 1-2.6-.34L4.5 20.5l1.2-3.4A6.9 6.9 0 0 1 3.5 12c0-4 3.8-7.2 8.5-7.2s8.5 3.2 8.5 7.2Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10.4 9.2 15 12l-4.6 2.8V9.2Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 7.1 5.2a1.5 1.5 0 0 0 1.8 0L20 7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.4 6-7.7 6-10a6 6 0 1 0-12 0c0 2.3 2 5.6 6 10Z" />
      <circle cx="12" cy="11" r="2.4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9.5" r="5.5" />
      <path d="m8.6 14.2-1.1 6.3 4.5-2.4 4.5 2.4-1.1-6.3" />
    </>
  ),
  layers: (
    <>
      <path d="M4 8.5h16M4 12h16M4 15.5h16" />
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
    </>
  ),
  tag: (
    <>
      <path d="M11.2 3.5H19a1.5 1.5 0 0 1 1.5 1.5v7.8a2 2 0 0 1-.6 1.4l-6.2 6.2a1.6 1.6 0 0 1-2.3 0l-7.3-7.3a1.6 1.6 0 0 1 0-2.3l6.2-6.2a2 2 0 0 1 1.4-.6Z" />
      <path d="M16 8h.01" />
    </>
  ),
  document: (
    <>
      <path d="M6.5 3.5h7.6L18.5 8v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-15.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4.5M8.5 12h7M8.5 15h7M8.5 18h4" />
    </>
  ),
  cookie: (
    <>
      <path d="M20.5 12.8a8.5 8.5 0 1 1-9.3-9.3c-.2 1.4.9 2.7 2.3 2.7a2.3 2.3 0 0 0 2.3-2.4c1.7 1 2.7 2.9 2.5 4.9a2.6 2.6 0 0 0 2.2 4.1Z" />
      <circle cx="9.2" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="15.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="8.8" cy="15.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 7.2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9.6a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7.2Z" />
      <path d="M3.5 10.2h16.3M15 14.3h2.2" />
    </>
  )
}

/*
  `size = undefined` rather than a number.

  Most callers pass no size and let CSS do it — `width={undefined}`
  omits the attribute, which is the behaviour every one of them was
  written against. The default exists only so the prop is optional to
  TypeScript; giving it a real number here would silently pin ~50
  icons to a fixed size.
*/
export default function PageIcon({ name, size = undefined, filled = false, ...rest }) {
  const path = PATHS[name]
  if (!path) return <AboutIcon name={name} size={size} filled={filled} {...rest} />

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {path}
    </svg>
  )
}
