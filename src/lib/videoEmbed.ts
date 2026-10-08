/* ==================================================================
   Turning a pasted video address into something the page can play.

   Editors paste whatever the share button gave them — a youtu.be
   short link with a tracking suffix, a full watch URL, a Shorts
   address, occasionally a Vimeo link. All of those describe the same
   thing and none of them can be dropped into an <iframe> as-is.

   ONE IMPLEMENTATION, NOT FOUR

   Course pages, testimonials, events and CMS page blocks all hold a
   video field. Parsing the URL separately in each is how one of them
   ends up not recognising `youtu.be` six months from now, and the
   symptom — a video that silently does not appear — is the kind
   nobody reports.

   ONLY HOSTS WE RECOGNISE

   An arbitrary URL an editor mistyped must never end up framed on the
   site: an <iframe> hands that origin a window inside our page. Only
   YouTube and Vimeo are converted; anything else returns nothing and
   the caller decides what to do with a link it cannot play.
================================================================== */

export type VideoEmbed = {
  /** the src for the <iframe> */
  src: string
  /** a still to show before the visitor asks to play it */
  thumbnail?: string
  provider: 'youtube' | 'vimeo'
}

/**
 * A watchable embed, or `null` for anything unrecognised.
 *
 * `youtube-nocookie.com` rather than `youtube.com`: it is the same
 * player without the tracking cookies set on load, which matters on a
 * page that also shows a cookie banner.
 */
export function videoEmbed(url: string | null | undefined): VideoEmbed | null {
  if (!url || typeof url !== 'string') return null

  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|live\/|shorts\/)|youtu\.be\/)([\w-]{6,})/i
  )
  if (youtube) {
    const id = youtube[1]
    return {
      src: `https://www.youtube-nocookie.com/embed/${id}`,
      /* hqdefault exists for every video; maxres does not, and a
         missing one renders as a grey placeholder. */
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      provider: 'youtube'
    }
  }

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i)
  if (vimeo) {
    /* Vimeo's thumbnail needs an API call to resolve, so there is
       none here — the facade falls back to its own placeholder. */
    return { src: `https://player.vimeo.com/video/${vimeo[1]}`, provider: 'vimeo' }
  }

  return null
}
