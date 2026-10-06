'use client'

import { useState } from 'react'

const projects = [
  { title: 'BCA, a disability service provider', url: 'https://bcaplus.com.au/', category: 'Websites', img: '/images/portfolio/bcaplus.png' },
  { title: 'TRICON LINE PRODUCTION', url: 'https://triconlineproducts.com', category: 'Websites', img: '/images/portfolio/triconlineproducts.png' },
  { title: 'STD OverSeas', url: 'https://stdoverseas.com/', category: 'Websites', img: '/images/portfolio/stdoverseas.png' },
  { title: 'CDI CEBU', url: 'https://cebudreaminvestment.com/', category: 'Websites', img: '/images/portfolio/cebudreaminvestment.png' },
  { title: 'The Reflection Journal', url: 'https://refleq.com/', category: 'Websites', img: '/images/portfolio/refleq.png' },
  { title: 'Central Bookkeeping Station', url: 'https://www.centralbookkeepingstation.com/', category: 'Websites', img: '/images/portfolio/centralbookkeepingstation.png' },
  { title: 'The Philinter Academy', url: 'https://philinter.com/', category: 'Websites', img: '/images/portfolio/philinter.png' },
  { title: 'Agenture Corporation', url: 'https://agenturecorp.com/', category: 'Websites', img: '/images/portfolio/agenturecorp.png' },
  // { title: "Mwaani Girls' High School", url: 'https://mwaanigirls.sc.ke/', category: 'Websites', img: '/images/portfolio/mwaani_girls.webp' },
  // { title: 'St Martin Kathonzweni Boys', url: 'https://stmartinkathonzweni.sc.ke/', category: 'Websites', img: '/images/portfolio/kathonzweni_boys.webp' },
  // { title: 'Ukamba Bible College', url: 'https://ubc.co.ke', category: 'Websites', img: '/images/portfolio/ubc.webp' },
  // { title: 'InterlPro LTD', url: 'https://intelproltd.com', category: 'Websites', img: '/images/portfolio/intel_pro_ltd.webp' },
  // { title: 'Tana Solutions LTD', url: 'https://tanasolutions.co.ke', category: 'Websites', img: '/images/portfolio/tana_solutions_ltd.webp' },
  // { title: 'Native Beecare LTD', url: 'https://nativebeecare.co.ke/', category: 'Websites', img: '/images/portfolio/native_beecare.webp' },
  // { title: 'CIFMIS', url: 'https://cifmis.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/cifmis.webp' },
  // { title: 'IVAs', url: 'https://ivas.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/ivamis.webp' },
  // { title: 'Umanyi Center', url: 'https://umanyi.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/umanyi_center.webp' },
  // { title: 'Projects Monitoring & Tracking System', url: 'https://pmts.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/pmts.webp' },
  // { title: 'Supplier Registration Portal', url: 'https://procurement.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/iSupplier.webp' },
  // { title: 'Destination Makueni', url: 'https://destinationmakueni.com', category: 'Government Systems', img: '/images/portfolio/destination-makueni.webp' },
  // { title: 'CIC MIS', url: 'https://cic.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/makueni_cic_mis.webp' },
  // { title: 'ECDE MIS', url: 'https://ecde.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/ecde_database.webp' },
  // { title: 'Kilimo Makueni', url: 'https://kilimo.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/kilimo_makueni.webp' },
  // { title: 'Wanarika Makueni', url: 'https://youth.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/makueni_youth.webp' },
  // { title: 'Michezo Makueni', url: 'https://sports.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/makueni_sports.webp' },
  // { title: 'Makueni VTC', url: 'https://vtc.makueni.go.ke', category: 'Government Systems', img: '/images/portfolio/vtc.webp' },
  // { title: 'NCA — Assets & Inventory MIS', url: 'https://nca.go.ke/', category: ' SaaS Platforms', img: '/images/portfolio/nca_aims.webp' },
  { title: 'Ukamba Bible College ERP', url: 'https://www.manginasal.ph/', category: ' SaaS Platforms', img: '/images/portfolio/ubc_erp.webp' },
  { title: 'Makueni Crestwood College MIS', url: '#', category: ' SaaS Platforms', img: '/images/portfolio/college_erp.webp' },
  { title: 'Lite Inventory MIS', url: '#', category: ' SaaS Platforms', img: '/images/portfolio/LiteInventory.webp' },
  { title: 'Crib360 Rental MIS', url: 'https://makaziproperties.com', category: ' SaaS Platforms', img: '/images/portfolio/crib360.webp' },
]

const filters = ['All', 'Websites', ' SaaS Platforms']
const filterId = (filter: string) => `tab-${filter.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((project) => project.category === active)

  return (
    <section className="section">
      <div className="container">
        <div className="section-head center" data-reveal>
          <span className="section-label">Projects</span>
          <h1>Systems in production.</h1>
          <p>A selection of websites, and  platforms.</p>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Filter projects by category" data-reveal>
          {filters.map((filter) => (
            <button
              className={`filter-btn${active === filter ? ' active' : ''}`}
              key={filter}
              id={filterId(filter)}
              type="button"
              role="tab"
              aria-selected={active === filter}
              aria-controls="case-grid"
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="case-list" id="case-grid" role="tabpanel" aria-labelledby={filterId(active)} aria-live="polite" data-reveal>
          {filtered.map((project) => (
            <article className="case" key={project.title}>
              <div className="case-media">
                <span className="case-badge">{project.category}</span>
                <img src={project.img} alt={project.title} loading="lazy" />
              </div>
              <div className="case-body">
                <span className="case-eyebrow">Portfolio project</span>
                <h3>{project.title}</h3>
                <div className="case-org">{project.category}</div>
                <div className="case-foot">
                  {project.url === '#' ? (
                    <span className="case-private">Details available on request</span>
                  ) : (
                    <a className="case-link" href={project.url} target="_blank" rel="noopener noreferrer">
                      Visit project
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hero-cta" style={{ justifyContent: 'center', marginTop: '3rem' }} data-reveal>
          <a className="btn btn-primary" href="/#contact">Get in touch</a>
          <a className="btn btn-ghost" href="/resume">Resume</a>
        </div>
      </div>
    </section>
  )
}
