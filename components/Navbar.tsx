'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home', route: '/', section: 'home' },
  { href: '/#about', label: 'About', route: '/about', section: 'about' },
  { href: '/#experience', label: 'Experience', route: '/experience', section: 'experience' },
  { href: '/#portfolio', label: 'Projects', route: '/portfolio', section: 'portfolio' },
  { href: '/resume', label: 'Resume', route: '/resume', section: 'resume' },
  { href: '/#contact', label: 'Contact', route: '/contact', section: 'contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-nav-section]')
    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-20% 0px -65% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <Link className="brand" href="/" aria-label="Raven Marciano, home">
            <span className="brand-text">Raven Marciano</span>
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((current) => !current)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
          <ul id="primary-menu" className={`nav-menu${open ? ' open' : ''}`}>
            {links.map((link) => {
              const active = pathname === link.route && (pathname !== '/' || activeSection === link.section)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${active ? 'active ' : ''}${link.href === '/contact' ? 'nav-cta' : ''}`.trim()}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
