'use client'

import { useState, type FormEvent } from 'react'

const contactMethods = [
  { label: 'Phone', value: '+63 924 461 2725', href: 'tel:+254740847563', icon: 'phone' },
  { label: 'Email', value: 'ravenmarciano1@gmail.com', href: 'mailto:ravenmarciano1@gmail.com', icon: 'email' },
  { label: 'LinkedIn', value: 'linkedin.com/in/ra-marciano-889949439', href: 'https://www.inkedin.com/in/ra-marciano-889949439-6626b617a/', icon: 'linkedin' },
  { label: 'GitHub', value: 'github.com/ravenmarciano1-debug', href: 'https://github.com/ravenmarciano1-debug', icon: 'github' },
  { label: 'Resume', value: 'View online or download PDF', href: '/resume', icon: 'resume' },
]

const subjects = ['Software Development', 'Systems Integration', 'Cloud & DevOps', 'Government ICT', 'Consulting & Mentorship', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Portfolio Enquiry')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:ravenmarciano1@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-label">Contact</span>
          <h1>Get in touch.</h1>
        </div>

        <div className="contact-grid" data-reveal>
          {contactMethods.map((method) => (
            <a
              className="contact-card"
              href={method.href}
              key={method.label}
              target={method.href.startsWith('https:') ? '_blank' : undefined}
              rel={method.href.startsWith('https:') ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {method.icon === 'email' ? <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></> : null}
                  {method.icon === 'phone' ? <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 2 2.3Z" /> : null}
                  {method.icon === 'linkedin' ? <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> : null}
                  {method.icon === 'github' ? <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13.3 13.3 0 0 0-6.9 0C5.5 1.2 4.3 1.6 4.3 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 8 18v4" /><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" /></> : null}
                  {method.icon === 'resume' ? <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></> : null}
                </svg>
              </span>
              <div className="contact-card-body">
                <div className="contact-card-label">{method.label}</div>
                <div className="contact-card-value">{method.value}</div>
              </div>
            </a>
          ))}
          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
            </span>
            <div className="contact-card-body">
              <div className="contact-card-label">Location</div>
              <div className="contact-card-value">the Philippines · GMT+8</div>
            </div>
          </div>
        </div>

        <div className="contact-details" data-reveal>
          <dl className="facts" aria-label="Availability">
            <div><dt>Status</dt><dd>Open to opportunities</dd></div>
            <div><dt>Engagements</dt><dd>Full-time, contract, consulting</dd></div>
            <div><dt>Work setup</dt><dd>Remote or hybrid</dd></div>
            <div><dt>Focus</dt><dd>Backend and API development, systems integration, cloud infrastructure, secure systems</dd></div>
          </dl>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <div className="section-head">
            <span className="section-label">Message</span>
            <h2>Send an enquiry.</h2>
          </div>
          {sent ? (
            <p className="form-status" role="status">Your email client should have opened with your message.</p>
          ) : (
            <>
              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>Name</span>
                  <input name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} autoComplete="name" />
                </label>
                <label className="contact-field">
                  <span>Email</span>
                  <input name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} autoComplete="email" />
                </label>
                <label className="contact-field contact-field-wide">
                  <span>Subject</span>
                  <select name="subject" value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })}>
                    <option value="">Select an engagement type</option>
                    {subjects.map((subject) => <option key={subject}>{subject}</option>)}
                  </select>
                </label>
                <label className="contact-field contact-field-wide">
                  <span>Message</span>
                  <textarea name="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} rows={6} />
                </label>
              </div>
              <button className="btn btn-primary" type="submit">Send message</button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
