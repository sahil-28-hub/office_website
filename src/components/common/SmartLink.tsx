'use client'

import { forwardRef, useEffect } from 'react'
import { COURSE_SEO_SLUG } from '../../data/courses/path'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const EXTERNAL = /^(https?:|mailto:|tel:|sms:|wa\.me)/i

function directCourseHref(href: any) {
  if (typeof href !== 'string') return href
  const match = /^\/courses\/([a-z0-9-]+)\/?$/.exec(href)
  const seo = match ? COURSE_SEO_SLUG[match[1]] : undefined
  return seo ? `/${seo}` : href
}

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function scrollToElement(element: HTMLElement) {
  element.scrollIntoView({
    block: 'start',
    behavior: reducedMotion() ? 'auto' : 'smooth',
  })
  if (!element.hasAttribute('tabindex')) element.setAttribute('tabindex', '-1')
  element.focus({ preventScroll: true })
}

function findSection(hash: string): HTMLElement | null {
  if (!hash || hash.length < 2) return null
  try {
    return document.querySelector(hash)
  } catch {
    return null
  }
}

interface SmartLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href?: string
  to?: string
  children?: React.ReactNode
}

const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(function SmartLink(
  { href, to, children, onClick, ...rest },
  ref
) {
  const pathname = usePathname()
  const router = useRouter()

  /* A link written as /courses/<slug> goes straight to the address the
     course is served at now, rather than through the redirect — one
     hop fewer for the visitor, and no chain for a crawler to follow.
     Done here so the links typed into data files, and into the CMS, do
     not each have to be found and rewritten. */
  const target = directCourseHref(to || href)

  if (!target) {
    return (
      <a ref={ref} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  /* ---------------------------------------------- outside the app */
  if (EXTERNAL.test(target)) {
    const newTab = /^https?:/i.test(target)
      ? { target: '_blank' as const, rel: 'noreferrer noopener' }
      : {}
    return (
      <a ref={ref} href={target} onClick={onClick} {...newTab} {...rest}>
        {children}
      </a>
    )
  }

  /* ------------------------------------------- a section, not a page */
  if (target.startsWith('#')) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event)
      if (event.defaultPrevented) return
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return

      event.preventDefault()

      if (target.length < 2) return

      const element = findSection(target)
      if (element) {
        scrollToElement(element)
        return
      }

      if (pathname !== '/') router.push(`/${target}`)
    }

    return (
      <a ref={ref} href={`${pathname}${target}`} onClick={handleClick} {...rest}>
        {children}
      </a>
    )
  }

  /* -------------------------------------------------------- a page */
  return (
    <Link ref={ref} href={target} onClick={onClick} {...rest}>
      {children}
    </Link>
  )
})

export default SmartLink

export function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = findSection(hash)
      if (element) {
        window.requestAnimationFrame(() => scrollToElement(element))
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
