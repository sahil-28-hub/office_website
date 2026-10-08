'use client'

import { useState } from 'react'
import { videoEmbed } from '../../lib/videoEmbed'
import VideoModal from './VideoModal'
import './VideoPlayer.css'

/* ------------------------------------------------------------------
   A video that plays here, on the page.

   NOT A LINK

   The obvious implementation is an anchor to YouTube, and it is the
   wrong one: it takes the visitor off a course page mid-decision and
   hands them a sidebar of somebody else's videos. Everything below
   plays in place and the visitor never leaves.

   CLICK TO PLAY, NOT AUTOLOAD

   A YouTube iframe pulls roughly a megabyte of player before anyone
   has asked to watch anything, and a page can hold several. So until
   it is clicked this is a still image and a button — the same
   reasoning as the contact map, which only mounts its iframe when the
   band comes into view.

   AND IT OPENS OVER THE PAGE

   Playing in place meant playing at the width of whatever held it,
   and the things that hold a video here are review cards about 300px
   wide. So the click opens a dialog instead — see VideoModal, which
   also has to escape the wall's `overflow: hidden` and its columns'
   transforms.

   The still comes from YouTube's own thumbnail endpoint, so there is
   nothing for an editor to upload: pasting the address is the whole
   job.
------------------------------------------------------------------ */
export default function VideoPlayer({
  url,
  title = 'Video',
  className = ''
}: {
  url: string | null | undefined
  title?: string
  className?: string
}) {
  const [playing, setPlaying] = useState(false)
  const embed = videoEmbed(url)

  /* An address from a host this cannot play. Rendering nothing is the
     honest answer — a dead frame or a link that leaves the site are
     both worse than the section simply not being there. */
  if (!embed) return null

  return (
    <>
      <button
        type="button"
        className={`vp ${className}`.trim()}
        onClick={() => setPlaying(true)}
        aria-label={`Play video: ${title}`}
      >
        {embed.thumbnail && (
          <img className="vp-thumb" src={embed.thumbnail} alt="" loading="lazy" decoding="async" />
        )}
        <span className="vp-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
            <path d="M8 5.14v13.72L19 12 8 5.14Z" />
          </svg>
        </span>
      </button>

      {playing && <VideoModal url={url} title={title} onClose={() => setPlaying(false)} />}
    </>
  )
}
