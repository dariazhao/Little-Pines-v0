'use client'

import { useState, useRef } from 'react'

interface EmailCaptureProps {
  dark?: boolean
}

export function EmailCapture({ dark = false }: EmailCaptureProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const email = inputRef.current?.value.trim()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p style={{
        fontFamily: 'var(--font-source-serif), Georgia, serif',
        fontStyle: 'italic',
        fontSize: '1rem',
        color: dark ? 'rgba(250,247,242,0.85)' : '#2C4A3E',
      }}>
        Thank you. We&apos;ll be in touch — quietly.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
      <input
        ref={inputRef}
        type="email"
        required
        placeholder="your@email.com"
        disabled={status === 'loading'}
        style={{
          fontFamily: 'var(--font-source-serif), Georgia, serif',
          fontSize: '1rem',
          color: dark ? '#FAF7F2' : '#1A1A1A',
          background: dark ? 'rgba(255,255,255,0.1)' : '#FAF7F2',
          border: `1px solid ${dark ? 'rgba(250,247,242,0.3)' : '#D9D2C5'}`,
          borderRadius: '2px',
          padding: '0.6rem 0.875rem',
          flexGrow: 1,
          minWidth: '200px',
          outline: 'none',
        }}
        onFocus={e => (e.currentTarget.style.borderColor = dark ? 'rgba(250,247,242,0.7)' : '#2C4A3E')}
        onBlur={e => (e.currentTarget.style.borderColor = dark ? 'rgba(250,247,242,0.3)' : '#D9D2C5')}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 500,
          letterSpacing: '0.04em',
          color: dark ? '#2C4A3E' : '#FAF7F2',
          background: dark ? '#FAF7F2' : '#2C4A3E',
          border: `1px solid ${dark ? '#FAF7F2' : '#2C4A3E'}`,
          borderRadius: '2px',
          padding: '0.6rem 1.25rem',
          cursor: status === 'loading' ? 'wait' : 'pointer',
          whiteSpace: 'nowrap',
          transition: 'opacity 0.15s',
          opacity: status === 'loading' ? 0.65 : 1,
        }}
      >
        {status === 'loading' ? 'Sending…' : 'Follow along'}
      </button>
      {status === 'error' && (
        <p style={{
          width: '100%',
          fontFamily: 'var(--font-source-serif), Georgia, serif',
          fontSize: '0.875rem',
          color: dark ? 'rgba(250,247,242,0.6)' : '#5C5C5C',
          fontStyle: 'italic',
          margin: 0,
        }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
