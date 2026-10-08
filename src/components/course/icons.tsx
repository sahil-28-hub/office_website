/* ------------------------------------------------------------------
   One stroke-based icon set for the whole course page. Inline SVG keeps
   the bundle free of an icon dependency and lets every glyph inherit
   currentColor and the same 1.6 stroke weight.
------------------------------------------------------------------ */

const PATHS = {
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </>
  ),
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
  star: (
    <path d="m12 3.5 2.6 5.5 5.9.8-4.3 4.2 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.5 9.8l5.9-.8L12 3.5Z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  quote: (
    <path d="M9.5 6C6.9 7.3 5.5 9.6 5.5 12.8V18h5.2v-5.2H8.1c0-2 .6-3.4 2.3-4.4L9.5 6Zm9 0c-2.6 1.3-4 3.6-4 6.8V18h5.2v-5.2h-2.6c0-2 .6-3.4 2.3-4.4L18.5 6Z" />
  ),

  /* -------- benefits -------- */
  curriculum: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="m7.5 10 2.5 2.2-2.5 2.2" />
      <path d="M12.5 14.6h4" />
    </>
  ),
  stack: (
    <>
      <path d="m12 3.5 8 4.2-8 4.2-8-4.2 8-4.2Z" />
      <path d="m4 12.2 8 4.2 8-4.2" />
      <path d="m4 16.6 8 4.2 8-4.2" />
    </>
  ),
  mentor: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.8 19.5c.5-3 2.6-4.8 5.2-4.8s4.7 1.8 5.2 4.8" />
      <path d="M16.5 6.5h4.2M16.5 10h4.2M16.5 13.5h2.6" />
    </>
  ),
  career: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.4" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </>
  ),
  support: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.8" y="13" width="4" height="6" rx="1.6" />
      <rect x="17.2" y="13" width="4" height="6" rx="1.6" />
      <path d="M20 19v.6a2.4 2.4 0 0 1-2.4 2.4H13" />
    </>
  ),

  /* -------- careers -------- */
  code: (
    <>
      <path d="m8.5 8-4.5 4 4.5 4" />
      <path d="m15.5 8 4.5 4-4.5 4" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  django: (
    <>
      <path d="M4 6.5h5.5a6 6 0 0 1 0 12H4" />
      <path d="M9.5 3v18" />
      <path d="M17.5 4v2.5" />
      <path d="M17.5 10v8" />
    </>
  ),
  bot: (
    <>
      <rect x="4.5" y="8" width="15" height="11" rx="3" />
      <path d="M12 4.5V8" />
      <circle cx="12" cy="3.4" r="1.2" />
      <path d="M9.5 12.5h.01M14.5 12.5h.01" />
      <path d="M9.8 16h4.4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.5V4.5" />
      <path d="M4 19.5h16" />
      <path d="M8 16v-4" />
      <path d="M12.5 16V8" />
      <path d="M17 16v-6" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3.5 1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5Z" />
      <path d="M18.5 16.5 19.4 19l2.5.9-2.5.9-.9 2.5" opacity="0" />
    </>
  ),

  /* -------- misc -------- */
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  )
}

export default function Icon({ name, size, filled = false, ...rest }) {
  const path = PATHS[name]
  if (!path) return null
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
