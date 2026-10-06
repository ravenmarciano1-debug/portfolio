'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    document.documentElement.classList.add('js')

    const revealAll = () => revealElements.forEach((element) => element.classList.add('in'))
    if (!('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' })

    revealElements.forEach((element) => observer.observe(element))
    const fallback = window.setTimeout(revealAll, 2000)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
      document.documentElement.classList.remove('js')
    }
  }, [pathname])

  return null
}