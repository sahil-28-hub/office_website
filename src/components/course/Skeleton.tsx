/* ------------------------------------------------------------------
   Skeletons stand in for media that is deliberately mounted late
   (see useInViewOnce), so the shimmer always represents real deferred
   work rather than a decorative delay.
------------------------------------------------------------------ */

export function Skeleton({ w = '100%', h = 16, r = 8, style, className = '' }) {
  return (
    <span
      className={`c-skel ${className}`}
      style={{ display: 'block', width: w, height: h, borderRadius: r, ...style }}
      aria-hidden="true"
    />
  )
}

export function VideoSkeleton() {
  return (
    <div className="skel-video" role="status" aria-label="Loading course preview">
      <Skeleton h="100%" r={24} />
    </div>
  )
}

export function CardSkeleton({ lines = 3 }) {
  return (
    <div className="skel-card" role="status" aria-label="Loading">
      <Skeleton h={132} r={16} />
      <Skeleton w="62%" h={18} style={{ marginTop: 18 }} />
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          w={i === lines - 1 ? '48%' : '100%'}
          h={11}
          style={{ marginTop: 10 }}
        />
      ))}
    </div>
  )
}

export function QuoteSkeleton() {
  return (
    <div className="skel-quote" role="status" aria-label="Loading testimonial">
      <Skeleton w="100%" h={12} />
      <Skeleton w="92%" h={12} style={{ marginTop: 12 }} />
      <Skeleton w="70%" h={12} style={{ marginTop: 12 }} />
      <div className="skel-quote-foot">
        <Skeleton w={44} h={44} r={999} />
        <div style={{ flex: 1 }}>
          <Skeleton w="46%" h={12} />
          <Skeleton w="30%" h={10} style={{ marginTop: 8 }} />
        </div>
      </div>
    </div>
  )
}

export default Skeleton
