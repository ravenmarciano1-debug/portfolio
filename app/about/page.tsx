const skills = {
  WordPress: ['WordPress', 'WooCommerce', 'Gutenberg', 'ACF', 'Elementor'],
  Languages: ['PHP', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'Java', 'Bash'],
  Frontend: ['React', 'Next.js', 'TailwindCSS'],
  Backend: ['WordPress REST API', 'REST APIs', 'Node.js', 'Express.js', 'Laravel'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Linux', 'Nginx', 'Git', 'CI/CD'],
  Specializations: ['SEO', 'Web Performance', 'Core Web Vitals', 'Web Security', 'API Integrations'],
}

const highlights = [
  {
    title: 'Web Development',
    desc: 'From corporate websites to marketing pages and complex platforms, we develop websites for businesses of all types including corporate, eCommerce, portfolio, brochure, and ADA-compliant websites.',
  },
  {
    title: 'Mobile Websites',
    desc: 'The modern world is now mobile and portable. Almost all companies have websites that are optimized for mobile phone or tablet device viewing.',
  },
  {
    title: 'Responsive Websites',
    desc: 'Responsive website developer in the Philippines creating fast, mobile-friendly, and SEO-ready websites for businesses in the Philippines and worldwide.',
  },
  {
    title: 'SEO & Online Marketing',
    desc: 'We help businesses improve their search rankings and increase website traffic through effective SEO and online marketing strategies.',
  },
  {
    title: 'Figma, XD or PSD to HTML',
    desc: 'We convert design files into high-quality HTML5, CSS3, and JavaScript code, ensuring pixel-perfect and responsive websites.',
  },
  {
    title: 'Responsive Email Template',
    desc: 'Convert your XD or PSD designs into responsive email templates. Trusted by Philippine and global brands for high-quality, mobile-ready emailers.',
  },
  {
    title: 'Shopify development',
    desc: 'Professional Shopify store development for businesses looking to launch beautiful and scalable online stores.',
  },
  {
    title: 'Custom JS Animations for Modern Websites',
    desc: 'Expert GSAP JavaScript HTML5 animator in the Philippines creating smooth, engaging website animations for businesses and brands.',
  },
]

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="section-label">About</span>
            <h1>Senior Web Developer</h1>
          </div>

          <div className="about-grid">
            <div className="about-text" data-reveal>
              <p>
                I am Raven Marciano, Senior Web Developer in the Philippines since 2018 and have been helping businesses build modern, high-performing websites that strengthen their online presence and drive business growth.
              </p>
              <p>
                With 8+ years of hands-on experience in web development, I have worked with companies across Southeast Asia and the Australia, delivering professional websites and digital platforms tailored to different industries.
              </p>
              <p>
                For nearly 4 years, I managed a leading web development team in the Philippines, overseeing complex projects and delivering -level websites for international clients. His role involved managing developers, coordinating with stakeholders, and ensuring projects were delivered efficiently and according to global development standards.
              </p>
              <p>
                Today, I lead the team with a clear mission: to help businesses succeed online through SEO-optimized, user-friendly, and performance-driven websites.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="/#portfolio">View projects</a>
                <a className="btn btn-ghost" href="/resume">Resume</a>
              </div>
            </div>

            <dl className="facts" data-reveal aria-label="At a glance">
              <div><dt>Role</dt><dd>Senior Web Developer & Web Designer</dd></div>
              <div><dt>Experience</dt><dd>8+ years</dd></div>
              <div><dt>Based</dt><dd>the Philippines, open to remote work</dd></div>
              <div><dt>Focus</dt><dd>Frontend, WordPress, Shopify, and Elementor</dd></div>
              <div><dt>Cloud</dt><dd>AWS, Docker, Linux, Nginx, CI/CD</dd></div>
              <div><dt>DataBase</dt><dd>MySQL, PostgreSQL, MongoDB, Redis</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="section-label">Tools</span>
            <h2>Technology stack</h2>
          </div>
          <article className="exp-card" data-reveal>
            <dl className="case-dl">
              {Object.entries(skills).map(([category, values]) => (
                <div key={category} className="about-skill-row">
                  <dt>{category}</dt>
                  <dd>{values.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="section-label">Strengths</span>
            <h2>What I will bring</h2>
          </div>
          <div className="skills">
            {highlights.map((item) => (
              <article className="skill-card" key={item.title} data-reveal>
                <div className="skill-head"><h3>{item.title}</h3></div>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
