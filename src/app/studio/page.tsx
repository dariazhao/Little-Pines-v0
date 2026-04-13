import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Studio',
  description: 'The people building Little Pines Studio, and why.',
}

const PAGE_CSS = `
  @keyframes lp-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

export default function StudioPage() {
  return (
    <>
      <style>{PAGE_CSS}</style>

      {/* ── Banner ─────────────────────────────────────────────── */}
      <div style={{
        background: '#2C4A3E', padding: '4rem 1.5rem 3.5rem',
        animation: 'lp-fade-up 0.6s ease-out both',
      }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <span style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(250,247,242,0.45)', display: 'block', marginBottom: '1.25rem',
          }}>
            The Studio
          </span>
          <h1 style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
            fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em',
            color: '#FAF7F2', margin: '0 0 1.5rem',
          }}>
            A Montessori- and Waldorf-inspired toy studio powered by on-device small models.
          </h1>
          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.075rem)',
            lineHeight: 1.7, color: 'rgba(250,247,242,0.65)',
            margin: 0, maxWidth: '34rem',
          }}>
            We are building slowly and in public — one very good thing, not a unicorn.
          </p>
        </div>
      </div>

      {/* ── Founder note ───────────────────────────────────────── */}
      <div style={{ background: '#FAF7F2', padding: '0 1.5rem 5rem' }}>
        <div style={{
          maxWidth: '52rem', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
          gap: '4rem', alignItems: 'start',
          paddingTop: '3rem',
        }}>
          {/* Text column */}
          <div>
            <span style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#C9A97A', display: 'block', marginBottom: '0.75rem',
            }}>
              Founder
            </span>

            <h2 style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
              fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.01em',
              color: '#1A1A1A', margin: '0 0 1.5rem',
            }}>
              Daria Zhao
            </h2>

            {[
              `I left a career in finance in 2019 because I kept thinking about a different kind of company — one that made things for children with the same care and intentionality that fine instrument makers or furniture makers bring to their work. Objects that respect the intelligence of the child. Objects that last.`,

              `I co-founded Learn With Mochi in 2020, a screen-free coding kit for young children built from wood, plush, and recycled materials. Mochi taught me several things. That parents will pay for quality when they trust it. That educators adopt tools slowly, and that slowness is a feature, not a bug. That making a physical product for children is genuinely hard — the supply chain, the safety certification, the pedagogical co-design — and that the difficulty is part of why it's worth doing.`,

              `Little Pines began as a question I kept returning to: what would an emotional literacy coach for young children actually look like — something that genuinely helped a child develop vocabulary and interior awareness, rather than just keeping them occupied? The behavioral research on emotional vocabulary and self-regulation in early childhood is clear and consistent. Children who can name what they feel develop better outcomes across nearly every dimension that matters — academic, relational, physiological. The tools we give children to practice this are, at present, mostly adult-mediated. A parent, a therapist, a teacher. These relationships are irreplaceable and I am not trying to replace them. I am trying to build something that helps a child in the moment at 2am when no adult is available, or in the moment after a hard day at school when a child needs five minutes to find words before they can be in conversation.`,

              `The technical moment that makes this possible is on-device language models running on consumer hardware. This is new. It means that a genuinely responsive, language-capable plush friend can exist without ever sending a child's voice to a server. We are using this moment carefully.`,

              `I am building this slowly and in public. I am not trying to build a unicorn. I am trying to build one very good thing.`,
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                lineHeight: 1.8, color: '#3A3A3A',
                margin: i < 4 ? '0 0 1.25rem' : 0,
              }}>
                {para}
              </p>
            ))}

            <p style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontStyle: 'italic', fontWeight: 600,
              fontSize: '1rem', color: '#2C4A3E',
              marginTop: '1.75rem', marginBottom: 0,
            }}>
              — Daria Zhao, April 2026
            </p>
          </div>

          {/* Sticky bear */}
          <div style={{
            position: 'sticky', top: '5rem',
            width: '100px', flexShrink: 0,
          }}>
            <Image
              src="/bear_sits.png"
              alt=""
              width={100} height={100}
              style={{ width: '100%', height: 'auto', opacity: 0.55 }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ── Team / Advisors ────────────────────────────────── */}
        <div style={{
          maxWidth: '40rem', margin: '0 auto',
          borderTop: '1px solid #D9D2C5', paddingTop: '3rem',
          marginTop: '3rem',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
            gap: '2.5rem',
          }}>
            {[
              { label: 'The Team', note: 'Coming soon.' },
              { label: 'Advisors', note: 'Coming soon.' },
            ].map(item => (
              <div key={item.label}>
                <span style={{
                  fontFamily: 'var(--font-source-serif), Georgia, serif',
                  fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#C9A97A', display: 'block', marginBottom: '0.6rem',
                }}>
                  {item.label}
                </span>
                <p style={{
                  fontFamily: 'var(--font-source-serif), Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '0.9rem', color: '#7A7A7A',
                  margin: 0, lineHeight: 1.6,
                }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{
            borderTop: '1px solid #D9D2C5', marginTop: '2.5rem', paddingTop: '2rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: '0.875rem', color: '#5C5C5C',
              margin: 0, lineHeight: 1.6,
            }}>
              Reach us at{' '}
              <a href="mailto:hello@littlepines.studio" style={{
                color: '#2C4A3E', textDecoration: 'none',
                borderBottom: '1px solid rgba(44,74,62,0.3)',
              }}>
                hello@littlepines.studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
