export default function Resume() {
  return (
    <section className="section resume-section">
      <div className="container">
        <div className="resume-actions">
          <p>Resume · Updated September 2026</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="/resume/Raven-Marciano.pdf" download>Download PDF</a>
            <a className="btn btn-ghost" href="/resume/Raven-Marciano.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a>
          </div>
        </div>
        <div className="resume-sheet">
          <iframe src="/resume/Raven-Marciano.pdf" title="Raven Marciano" />
        </div>
      </div>
    </section>
  )
}
