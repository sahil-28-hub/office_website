'use client'

import { Component } from 'react'
import './ErrorBoundary.css'

/* A chunk that fails to download is not a bug in the page — it means
   the file the browser was told to fetch is no longer on the server.
   That happens routinely: every deploy re-hashes the lazy route
   chunks, so anyone with the site already open is still holding the
   previous build's filenames, and the next navigation 404s. It also
   happens on a flaky connection, or when a dev server is restarted.

   The fix in every case is the same — reload and pick up the current
   build — so do it automatically rather than showing a dead end. */
const CHUNK_ERROR = /Loading chunk|Loading CSS chunk|dynamically imported module|Importing a module script failed|ChunkLoadError/i

/* At most one automatic reload per window. The stamp is a time, not a
   boolean, and is never cleared on mount: the boundary itself mounts
   fine on the retry, so clearing it there would re-arm the retry and
   a genuinely missing chunk would reload forever. Storing the time
   instead means a permanent failure falls through to the error card
   after one attempt, while a stale deploy later in the same session
   still gets its own retry. */
const RELOAD_FLAG = 'tc:chunk-reload-at'
const RETRY_WINDOW_MS = 15000

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, recovering: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    const message = `${error?.name || ''} ${error?.message || ''}`
    let lastTry = 0
    try { lastTry = Number(sessionStorage.getItem(RELOAD_FLAG)) || 0 } catch { /* private mode */ }

    if (CHUNK_ERROR.test(message) && Date.now() - lastTry > RETRY_WINDOW_MS) {
      try { sessionStorage.setItem(RELOAD_FLAG, String(Date.now())) } catch { /* private mode */ }
      this.setState({ recovering: true })
      window.location.reload()
      return
    }

    console.error('Unhandled error in route tree:', error, info?.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    /* mid-reload: say what is happening rather than flashing an error
       the visitor never needed to see */
    if (this.state.recovering) {
      return (
        <div className="rb-boundary" role="status">
          <p className="rb-boundary-title">Updating to the latest version…</p>
          <p className="rb-boundary-text">One moment.</p>
        </div>
      )
    }

    return (
      <div className="rb-boundary" role="alert">
        <p className="rb-boundary-title">Something went wrong.</p>
        <p className="rb-boundary-text">
          Please reload the page. If this keeps happening, let us know through the contact page.
        </p>
        <button type="button" className="rb-boundary-btn" onClick={() => window.location.reload()}>
          Reload page
        </button>
      </div>
    )
  }
}
