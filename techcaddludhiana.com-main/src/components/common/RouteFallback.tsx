'use client'

import Skeleton, { SkeletonLines } from './Skeleton'
import './RouteFallback.css'

/* Suspense fallback for lazy-loaded routes — appears the first time a
   visitor navigates to a page whose chunk hasn't downloaded yet.

   Shaped like the page that is coming rather than a spinner: every
   route on this site opens with a dark banner (eyebrow, title, lead,
   a rail of figures) over a light body. Matching that means the swap
   is a fill-in rather than a flash of completely different layout. */
export default function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-label="Loading page">
      <div className="route-fallback-hero">
        <div className="shell route-fallback-head">
          <Skeleton variant="pill" tone="ink" width="180px" />
          <Skeleton variant="title" tone="ink" width="min(560px, 82%)" height="2.6em" />
          <SkeletonLines lines={2} tone="ink" width="min(480px, 70%)" />
          <div className="route-fallback-rail">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="route-fallback-stat">
                <Skeleton variant="text" tone="ink" width="70%" />
                <Skeleton variant="title" tone="ink" width="90%" height="1.3em" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="route-fallback-body">
        <div className="shell route-fallback-body-inner">
          <Skeleton variant="pill" width="140px" />
          <Skeleton variant="title" width="min(460px, 70%)" />
          <div className="route-fallback-grid">
            {Array.from({ length: 3 }, (_, i) => (
              <Skeleton key={i} variant="card" height="210px" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
