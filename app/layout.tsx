import type { Metadata } from 'next'
import './globals.css'
import './reference.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export const metadata: Metadata = {
  title: 'Raven Marciano | Senior Software Engineer',
  description: 'Software Engineer with 7+ years of experience delivering scalable web, mobile, and cloud-based systems across government and private-sector environments.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'the Philippines', 'Raven Marciano', 'Next.js', 'React'],
  authors: [{ name: 'Raven Marciano' }],
  openGraph: {
    title: 'Raven Marciano | Senior Software Engineer',
    description: 'Scalable web, mobile, and cloud-based systems across government and private-sector environments.',
    url: 'https://martmbithi.github.io',
    siteName: 'Raven Marciano Portfolio',
    locale: 'en_KE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RevealObserver />
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
