import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Promise',
  description: 'Six commitments Little Pines Studio makes to the children who will trust us, and the parents who let them.',
}

const PAGE_CSS = `
  @keyframes lp-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

const PROMISES = [
  {
    n: '01',
    title: 'The friend waits for the child, not the other way around.',
    body: `Our plush will never speak first. It will never greet, nudge, remind, or re-engage. The child squeezes the paw, or nothing happens. In a world that has trained children to flee from boredom into the next notification, we are building a friend whose defining trait is patience. Scarcity of attention is not a limitation of our product. It is the product.`,
  },
  {
    n: '02',
    title: 'What a child says to their friend stays with their friend.',
    body: `Voice data never leaves the plush. Not to our servers, not to a model provider, not to a research partner, not to a parent's phone without the parent choosing to look. The microphone is cut at the circuit level by a physical switch. The network is off by default, enabled only when a parent decides to accept an update. We did not choose on-device inference because it was cheaper or faster. We chose it because a child's voice is not a data asset.`,
  },
  {
    n: '03',
    title: 'We do not maximize engagement. We model its healthy limits.',
    body: `When a child is tired, the plush says goodnight. When a child wants to play with a real friend, the plush says have fun. We will never measure success by daily active minutes, session length, or return rate. We will measure it by whether children who live with our plush develop richer emotional vocabulary, calmer nervous systems, and stronger relationships with the humans in their lives. If our product ever competes with a child's real relationships, we have failed.`,
  },
  {
    n: '04',
    title: 'The friend is a friend, not a god, not a therapist, not an authority.',
    body: `When asked a question it cannot answer, the plush says so, and suggests asking a trusted adult together. It does not diagnose. It does not treat. It does not pretend to know more than it does. It sits with the child in a feeling, helps them find words, and then steps back. The work of raising a child belongs to the humans who love them.`,
  },
  {
    n: '05',
    title: 'The field is bigger than our company.',
    body: `We will open-source the things that matter most: the pedagogical framework, the model fine-tuning methodology, the clinical safety and disclosure protocols, and all efficacy research data we generate. Any researcher, educator, nonprofit, or maker community can build on this work without asking us for permission. A child's emotional development is not a competitive moat. The standard for how to build AI for children should belong to the field, not to a single company.`,
  },
  {
    n: '06',
    title: 'We will not market ourselves as an AI company, because we are not one.',
    body: `The word "AI" will not appear on our packaging, our homepage, or the headline of any press release. It will appear only where it is honestly load-bearing: in the technical privacy explanation, where a parent deserves to know exactly what is running on the device in their child's bedroom. We are a children's workshop that uses modern tools the way a good toolmaker uses modern tools — because they let us make better things, not because they are the point.`,
  },
]

export default function PromisePage() {
  return (
    <>
      <style>{PAGE_CSS}</style>

      {/* ── Banner ─────────────────────────────────────────────── */}
      <div style={{
        background: '#2C4A3E', padding: '4rem 1.5rem 3.5rem',
        animation: 'lp-fade-up 0.6s ease-out both',
      }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(250,247,242,0.45)', display: 'block', marginBottom: '1.25rem',
          }}>
            Version 1.0 · April 2026
          </span>
          <h1 style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
            fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em',
            color: '#FAF7F2', margin: '0 auto 2rem',
          }}>
            The Little Pines Promise
          </h1>

          {/* Opening statement */}
          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.075rem)',
            lineHeight: 1.7, color: 'rgba(250,247,242,0.72)',
            margin: '0 auto', maxWidth: '34rem',
          }}>
            These are the commitments we are making before we build anything, because the time
            to make promises is before you have something to protect. We are a small studio
            making a product for young children. If we cannot state plainly what we will and
            will not do — before the first unit ships, before the first investor writes a check,
            before any of this is financially load-bearing — then we should not be making this
            product.
          </p>
          <p style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontStyle: 'italic', fontWeight: 600,
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: '#C9A97A', marginTop: '1.5rem',
          }}>
            We are stating it plainly.
          </p>
        </div>
      </div>

      {/* ── Promises ───────────────────────────────────────────── */}
      <div style={{ background: '#FAF7F2', padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>

          {PROMISES.map((p, i) => (
            <div key={p.n} style={{
              borderTop: `1px solid ${i === 0 ? 'transparent' : '#D9D2C5'}`,
              padding: '3rem 0',
              animation: `lp-fade-up 0.5s ${0.1 + i * 0.07}s both ease-out`,
            }}>
              {/* Number */}
              <span style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#C9A97A', display: 'block', marginBottom: '0.75rem',
              }}>
                {p.n}
              </span>

              {/* Title */}
              <h2 style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.01em',
                color: '#1A1A1A', margin: '0 0 1rem',
              }}>
                {p.title}
              </h2>

              {/* Body */}
              <p style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                lineHeight: 1.75, color: '#3A3A3A', margin: 0,
              }}>
                {p.body}
              </p>
            </div>
          ))}

          {/* ── Closing signature ───────────────────────────── */}
          <div style={{
            borderTop: '1px solid #D9D2C5',
            paddingTop: '2.5rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontStyle: 'italic',
              fontSize: '0.925rem', lineHeight: 1.7,
              color: '#5C5C5C', margin: '0 0 0.4rem',
            }}>
              Signed, Daria Zhao, on behalf of Little Pines Studio.
            </p>
            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontStyle: 'italic',
              fontSize: '0.925rem', lineHeight: 1.7,
              color: '#5C5C5C', margin: 0,
            }}>
              If we ever revise this document, the revision will be public, dated, and argued
              for in writing. The commitments themselves do not move.
            </p>
          </div>
        </div>
      </div>

      {/* ── Open Framework ─────────────────────────────────────── */}
      <div style={{
        background: '#2C4A3E', padding: '4rem 1.5rem',
      }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <span style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(250,247,242,0.45)', display: 'block', marginBottom: '1.25rem',
          }}>
            Open Framework
          </span>

          <h2 style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)',
            fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.015em',
            color: '#FAF7F2', margin: '0 0 1.5rem',
          }}>
            The platform belongs to the field.
          </h2>

          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
            lineHeight: 1.75, color: 'rgba(250,247,242,0.68)',
            margin: '0 0 1.25rem',
          }}>
            The Little Pines pedagogical framework, on-device model methodology, clinical safety
            protocols, and all research data we generate are published under{' '}
            <span style={{ color: 'rgba(250,247,242,0.85)' }}>CC BY-SA 4.0</span>. Researchers,
            educators, nonprofits, and independent makers can build on this work without asking
            for permission.
          </p>

          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
            lineHeight: 1.75, color: 'rgba(250,247,242,0.68)',
            margin: '0 0 2rem',
          }}>
            A child's emotional development is not a competitive moat. How we build AI for
            children should be a public standard — documented, debated, and improved in the open.
          </p>

          {/* Open source items */}
          <div style={{
            display: 'grid', gap: '0.75rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(17rem, 1fr))',
            marginBottom: '2.5rem',
          }}>
            {[
              'Pedagogical framework',
              'Model fine-tuning methodology',
              'Clinical safety & disclosure protocols',
              'RCT study protocol & data',
              'On-device inference implementation',
              'Hardware schematics',
            ].map(item => (
              <div key={item} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
              }}>
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: '#C9A97A', flexShrink: 0, marginTop: '0.45rem',
                }} />
                <span style={{
                  fontFamily: 'var(--font-source-serif), Georgia, serif',
                  fontSize: '0.875rem', color: 'rgba(250,247,242,0.72)',
                  lineHeight: 1.5,
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link href="https://github.com/littlepinesstudio" style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: '0.875rem', letterSpacing: '0.03em',
            color: '#FAF7F2', textDecoration: 'none',
            borderBottom: '1.5px solid rgba(250,247,242,0.4)',
            paddingBottom: '2px', display: 'inline-block',
          }}>
            View on GitHub →
          </Link>
        </div>
      </div>
    </>
  )
}
