export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-meta">
            <strong>© {year} Raven Marciano</strong> · Software Engineer · the Philippines
          </div>
          <ul className="footer-nav">
            <li><a href="/about">About</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/portfolio">Projects</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="https://www.inkedin.com/in/ra-marciano-889949439-6626b617a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
