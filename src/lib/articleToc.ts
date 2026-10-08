/* ------------------------------------------------------------------
   The "On this page" index for CMS-written prose.

   A blog post or a CMS page arrives as HTML somebody typed in the
   editor, so its headings carry no ids and there is nothing for an
   index to link to. This reads the h2s and h3s out of that HTML, gives
   each one an id, and returns both the patched HTML and the list.

   Done on the string rather than on the DOM after mount so the index
   is in the server-rendered HTML — it does not pop in, and the column
   it sits in is there from the first paint.
------------------------------------------------------------------ */

export type TocItem = { id: string; label: string; level: 2 | 3 }

const ENTITIES: Record<string, string> = {
  '&nbsp;': ' ',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&rsquo;': '’',
  '&lsquo;': '‘',
  '&ndash;': '–',
  '&mdash;': '—'
}

function plain(html: string) {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z]+;|&#39;/gi, (entity) => ENTITIES[entity.toLowerCase()] ?? ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(text: string) {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 60) || 'section'
  )
}

/**
 * Hands out ids that are unique across everything it is asked about, so
 * a page built from several blocks of HTML can share one.
 */
export function createTocIds() {
  const used = new Map<string, number>()

  return (text: string) => {
    const base = slugify(text)
    const count = used.get(base) || 0
    used.set(base, count + 1)
    return count ? `${base}-${count + 1}` : base
  }
}

/**
 * @param html   the editor's HTML
 * @param nextId from `createTocIds` — pass the same one for every block
 *   on a page
 */
export function indexHeadings(html: string | null | undefined, nextId = createTocIds()) {
  const toc: TocItem[] = []

  const patched = String(html || '').replace(
    /<h([23])\b([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (match, level: string, attrs: string, inner: string) => {
      const label = plain(inner)
      /* An empty heading is an editor's stray line break, not a section. */
      if (!label) return match

      const own = attrs.match(/\bid\s*=\s*["']([^"']+)["']/i)?.[1]
      const id = own || nextId(label)
      toc.push({ id, label, level: Number(level) as 2 | 3 })

      return own ? match : `<h${level}${attrs} id="${id}">${inner}</h${level}>`
    }
  )

  return { html: patched, toc }
}
