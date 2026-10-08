/* ==================================================================
   The campus photographs, in one place.

   Gallery.jsx renders them — the drifting wall, on the home page and
   on /gallery. It deals this whole list across however many columns
   fit the screen, five down to two, so every photograph here is on
   the wall at every width. Adding one to this list puts it on the
   wall; there is nowhere else to add it.

   `src` is a path from the site root. Anything under public/ is
   served from the root, so `/gallery/1.png` is public/gallery/1.png.

   THE SPACES IN THE FILENAMES

   Seven of these are called "N copy.png". A space is not legal in a
   URL, so it is written here already encoded as %20. It works without
   encoding in most browsers, which is exactly what makes it a bad bug
   to ship: it survives local testing and fails on the one host or
   proxy that follows the spec. Renaming the files — "1-portrait.png"
   and so on — and updating these paths would be tidier still.

   THE SHAPES

   These are fourteen files but seven photographs: each was saved
   twice, once cropped square and once cropped portrait. `ratio`
   matches the crop, so the frames are `object-fit: cover` over an
   image of the same shape and almost nothing is cut off.

   The squares are listed first and the portraits second, deliberately.
   The wall deals photographs across the columns one at a time, so a
   photograph and its own other crop land several columns apart rather
   than side by side.

   `tone` is the gradient a tile shows before its file loads, and
   keeps showing if a file goes missing.

   `alt` is the only text these carry. Nothing is printed over a
   photograph — no caption, no label — so the wall is photographs and
   nothing else; the alt text is for people who cannot see them.
================================================================== */

export const PORTRAIT = '3 / 4'
export const SQUARE = '1 / 1'
export const LANDSCAPE = '4 / 3'
export const WIDE = '16 / 9'

export const GALLERY_PHOTOS = [
  /* ------------------------- the square crops ------------------------ */
  {
    src: '/gallery/1.png',
    tone: 'violet',
    ratio: SQUARE,
    alt: 'A trainer walking a student through a video edit, two editing timelines open side by side'
  },
  {
    src: '/gallery/2.png',
    tone: 'blue',
    ratio: SQUARE,
    alt: 'A full classroom working through a session, the screen at the front in use'
  },
  {
    src: '/gallery/3.png',
    tone: 'cyan',
    ratio: SQUARE,
    alt: 'Two students working through an SEO dashboard in the digital marketing room'
  },
  {
    src: '/gallery/4.png',
    tone: 'blue',
    ratio: SQUARE,
    alt: 'Students at their machines on the lab floor with a trainer alongside'
  },
  {
    src: '/gallery/5.png',
    tone: 'violet',
    ratio: SQUARE,
    alt: 'A student reading a web analytics report on their laptop'
  },
  {
    src: '/gallery/6.png',
    tone: 'cyan',
    ratio: SQUARE,
    alt: 'A student setting up a campaign in an advertising dashboard'
  },
  {
    src: '/gallery/7.png',
    tone: 'blue',
    ratio: SQUARE,
    alt: 'A trainer reviewing work with students at their desktops'
  },

  /* ------------------------ the portrait crops ----------------------- */
  {
    src: '/gallery/1%20copy.png',
    tone: 'blue',
    ratio: PORTRAIT,
    alt: 'Two editing timelines side by side as a trainer talks a student through a cut'
  },
  {
    src: '/gallery/2%20copy.png',
    tone: 'cyan',
    ratio: PORTRAIT,
    alt: 'The classroom seen from the back, every seat taken and the front screen running'
  },
  {
    src: '/gallery/3%20copy.png',
    tone: 'violet',
    ratio: PORTRAIT,
    alt: 'The digital marketing room, two students at a shared workstation'
  },
  {
    src: '/gallery/4%20copy.png',
    tone: 'cyan',
    ratio: PORTRAIT,
    alt: 'The lab floor during a working session'
  },
  {
    src: '/gallery/5%20copy.png',
    tone: 'blue',
    ratio: PORTRAIT,
    alt: 'Reading a traffic report on screen during an analytics session'
  },
  {
    src: '/gallery/6%20copy.png',
    tone: 'violet',
    ratio: PORTRAIT,
    alt: 'Building an ad campaign on screen during a paid media session'
  },
  {
    src: '/gallery/7%20copy.png',
    tone: 'cyan',
    ratio: PORTRAIT,
    alt: 'A trainer going through a student’s work at their desk'
  }
]
