import Link from 'next/link'
import About from './about/page'
import Experience from './experience/page'
import Portfolio from './portfolio/page'
import Contact from './contact/page'

export default function Home() {
  return (
    <>
      <div className="single-screen" id="home" data-nav-section>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div data-reveal>
                <h1>Raven Marciano</h1>
                <p className="lede">
                  Senior Web Developer with 8+ years of experience building modern, high-performing websites for businesses across Southeast Asia and the Australia. Experienced in leading web development teams, managing complex projects, and delivering SEO-friendly, user-focused, and performance-driven websites that help businesses grow online.
                </p>
                <div className="hero-cta">
                  <Link className="btn btn-primary" href="/portfolio">
                    View projects
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <Link className="btn btn-ghost" href="/resume">Resume</Link>
                </div>

                <dl className="hero-meta">
                  <div><dt>Role</dt><dd>Senior Web Developer</dd></div>
                  <div><dt>Experience</dt><dd>8 years</dd></div>
                  <div><dt>Location</dt><dd>the Philippines · Remote</dd></div>
                </dl>

                <div className="social" aria-label="Profiles">
                  <a href="https://www.linkedin.com/in/ra-marciano-889949439/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25h4.5V24H.25V8.25zM9.5 8.25h4.31v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.16V24H9.5V8.25z" /></svg>
                  </a>
                  <a href="https://github.com/ravenmarciano1-debug" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.27.73-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.79 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56C20.22 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z" /></svg>
                  </a>
                  <a href="mailto:ravenmarciano1@gmail.com" aria-label="Email Martin">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </a>
                </div>
              </div>

              <div data-reveal>
                <figure className="hero-portrait">
                  <img src="/images/raven.png" width="460" height="575" alt="Raven Marciano" />
                  <figcaption className="portrait-tag">Senior Web Developer</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="section-anchor" id="about" data-nav-section><About /></div>
      <div className="section-anchor" id="experience" data-nav-section><Experience /></div>
      <div className="section-anchor" id="portfolio" data-nav-section><Portfolio /></div>
      <div className="section-anchor" id="contact" data-nav-section><Contact /></div>
    </>
  )
}
