'use client'

import { useEffect, useState } from 'react'

const phrases = [
  'Software Engineer',
  'Full-Stack Developer',
  'Systems Architect',
  'API & Backend Engineer',
  'Cloud & DevOps Engineer',
  'Systems Automation Expert',
]

const TYPE_SPEED = 80
const DELETE_SPEED = 45
const PAUSE_AFTER_TYPE = 1800
const PAUSE_AFTER_DELETE = 400

export default function TypewriterText() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [pausing, setPausing] = useState(false)

  useEffect(() => {
    if (pausing) return

    const current = phrases[phraseIdx]

    if (!deleting) {
      // Typing
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
        }, TYPE_SPEED)
        return () => clearTimeout(t)
      } else {
        // Finished typing — pause then start deleting
        setPausing(true)
        const t = setTimeout(() => {
          setPausing(false)
          setDeleting(true)
        }, PAUSE_AFTER_TYPE)
        return () => clearTimeout(t)
      }
    } else {
      // Deleting
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1))
          setCharIdx((c) => c - 1)
        }, DELETE_SPEED)
        return () => clearTimeout(t)
      } else {
        // Finished deleting — pause then move to next phrase
        setPausing(true)
        const t = setTimeout(() => {
          setDeleting(false)
          setPhraseIdx((i) => (i + 1) % phrases.length)
          setPausing(false)
        }, PAUSE_AFTER_DELETE)
        return () => clearTimeout(t)
      }
    }
  }, [charIdx, deleting, pausing, phraseIdx])

  return (
    <span
      style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
        fontWeight: 600,
        color: 'var(--accent)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2px',
        minHeight: '1.8em',
      }}
    >
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          background: 'var(--accent)',
          marginLeft: '3px',
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
          borderRadius: '1px',
          boxShadow: '0 0 6px var(--accent)',
        }}
      />
    </span>
  )
}
