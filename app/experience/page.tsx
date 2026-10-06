const experiences = [
  {
    role: 'Senior Web Developer and Leader',
    company: 'Personal Team',
    period: '2024 — present',
    type: 'Private Sector',
    bullets: [
      'Lead a team of 4 developers managing 40+ WordPress multisite networks, Shopify Plus storefronts, and WooCommerce B2B portals.',
      'Architected and executed migrations from legacy WooCommerce stores to Shopify Plus, improving checkout conversion by 18% and reducing page load time by 45%.',
      'Developed custom WordPress plugins and Shopify apps to automate inventory sync, pricing rules, and B2B customer tiering.',
      'Established CMS governance, security hardening, and CI/CD pipelines for theme/plugin deployments using WP-CLI, GitLab CI, and Docker.',
      'Mentored junior developers on WordPress coding standards, Shopify Liquid, and WooCommerce REST API best practices.',
    ],
    stack: ['WordPress Multisite', 'WooCommerce', 'Shopify Plus', 'PHP', 'Liquid', 'JavaScript', 'REST API', 'GraphQL', 'Docker', 'Kubernetes', 'CI/CD', 'Agile', 'Team Leadership', 'Code Review', 'Security Hardening',' Performance Optimization'],
  },
  {
    role: 'Senior Web Developer | Upwork (Freelance)',
    company: 'Upwork / Remote',
    period: '2021 — 2024',
    type: 'Private Sector',
    bullets: [
      'Delivered 50+ CMS projects for international clients, specializing in WordPress, WooCommerce, and Shopify.',
      'Built custom WordPress themes from scratch using ACF, Gutenberg blocks, and page builders like Elementor and Divi.',
      'Developed bespoke plugins for memberships, subscriptions, and multi-vendor marketplaces.',
      'Migrated clients between WooCommerce and Shopify, handling data migration, SEO preservation, and API integrations with Stripe, PayPal, Mailchimp, and ERP systems.',
      'Optimized WooCommerce and Shopify stores for Core Web Vitals, achieving 90+ Lighthouse scores and increasing organic traffic by an average of 35%.',
    ],
    stack: ['WordPress', 'WooCommerce', 'Shopify', 'PHP', 'Liquid', 'ACF', 'Gutenberg', 'Elementor', 'Divi', 'MySQL', 'REST API', 'Stripe', 'PayPal', 'SEO', 'Core Web Vitals', 'Headless CMS', 'React/Next.js'],
  },
  {
    role: 'Web Developer',
    company: 'Realpage, philippines',
    period: '2020 — 2021',
    type: 'Creative',
    bullets: [
      'Developed and maintained custom WordPress themes and plugins for corporate marketing sites and client-facing portals',
      'Integrated WooCommerce for subscription-based services, customizing checkout flows, payment gateways, and automated invoicing.',
      'Collaborated with design and marketing teams to implement responsive, accessible templates using Gutenberg, ACF, and custom post types.',
      'Improved site performance by optimizing database queries, implementing caching (WP Rocket, Redis), and image optimization, reducing load times by 40%.',
      'Participated in Agile sprints, code reviews, and debugging production issues across a multisite WordPress environment.',
    ],
    stack: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'Gutenberg', 'ACF', 'Custom Post Types', 'WP Rocket', 'Redis', 'Git',' Agile/Scrum'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Personal / Freelacer Project',
    period: '2018 — 2020',
    type: 'Creative',
    bullets: [
      'Built and launched 10+ small business websites using WordPress and WooCommerce, including custom themes and basic plugin configurations',
      'Set up Shopify stores for local retailers, customizing themes with Liquid and configuring apps for inventory, shipping, and payments.',
      'Learned core CMS concepts: custom post types, taxonomies, hooks, filters, and template hierarchy.',
      'Provided maintenance, updates, and security hardening for client WordPress sites.',
    ],
    stack: ['WordPress', 'WooCommerce', 'Shopify', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'Liquid', 'Git', 'cPanel', 'Basic SEO', 'Responsive Design'],
  },
]

export default function Experience() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-label">Experience</span>
          <h1>Professional experience.</h1>
        </div>

        <div className="timeline" data-reveal>
          {experiences.map((experience) => (
            <div className="timeline-item" key={`${experience.company}-${experience.role}`}>
              <article className="exp-card">
                <div className="exp-head">
                  <h3>{experience.role}</h3>
                  <span className="exp-period">{experience.period}</span>
                </div>
                <div className="exp-org">{experience.company}</div>
                <ul>
                  {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <ul className="skill-tags" aria-label={`${experience.role} technologies`}>
                  {experience.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </article>
            </div>
          ))}
        </div>

        <div className="hero-cta" style={{ marginTop: '3rem' }} data-reveal>
          <a className="btn btn-primary" href="/#portfolio">View projects</a>
          <a className="btn btn-ghost" href="/#about">About and skills</a>
        </div>
      </div>
    </section>
  )
}
