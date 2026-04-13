import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Research',
  description: 'The Little Pines RCT protocol and our commitment to open, pre-registered research.',
}

const PAGE_CSS = `
  @keyframes lp-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

const SECTIONS = [
  {
    label: 'The Study',
    heading: 'We intend to verify the claim.',
    body: [
      `We are designing a product intended to support children's emotional development. That is a meaningful claim.`,
      `The product will be tested in a two-arm randomized controlled trial with 120 families across 12 weeks, conducted in partnership with a leading child-development research laboratory. One group of children will receive the Little Pines plush with full session access. A matched control group will receive a standard plush toy — same material, same size, no interactive capability.`,
      `Outcome measures will include parent-reported emotional vocabulary assessments, validated behavioral observational instruments, and standardized co-regulation measures administered at weeks 0, 6, and 12.`,
    ],
  },
  {
    label: 'Open Science',
    heading: 'Results belong to everyone — including the null ones.',
    body: [
      `The study protocol, instruments, and statistical analysis plan will be pre-registered on the Open Science Framework and published in full before the study begins. We will not begin data collection until the pre-registration is public.`,
      `All anonymized data and final results will be published open-access regardless of outcome. If the study shows no effect, we will publish that result with the same prominence as a positive result. If the study shows a negative effect, we will publish that, too, and consider what it means for the product.`,
    ],
  },
  {
    label: 'Why This Matters',
    heading: 'Publishing the design before results is itself a commitment.',
    body: [
      `It is much harder to quietly abandon a protocol you have already made public. Pre-registration prevents us from changing our hypotheses after we see the data. Open access prevents the results from being available only to researchers at institutions that can afford journal subscriptions.`,
      `We are doing this because parents deserve to know whether the product they are bringing into their home does what we say it does — not because we say so, but because independent evidence says so.`,
    ],
  },
]

const FINDINGS = [
  {
    stat: 'Better outcomes',
    detail: 'Children who can name what they feel develop better outcomes across nearly every dimension — academic, relational, physiological.',
    source: 'Extensive literature review, 2024',
  },
  {
    stat: '3–5 years',
    detail: 'The window in which emotional vocabulary is most readily acquired — and most durably retained.',
    source: 'Developmental psychology consensus',
  },
  {
    stat: 'Pre-registered',
    detail: 'Our RCT will be publicly registered before data collection begins. No changes to hypotheses after we see results.',
    source: 'Open Science Framework, 2026',
  },
]

export default function ResearchPage() {
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
            Our Research
          </span>
          <h1 style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
            fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em',
            color: '#FAF7F2', margin: '0 0 1.5rem',
          }}>
            The behavioral science behind the bear.
          </h1>
          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.075rem)',
            lineHeight: 1.7, color: 'rgba(250,247,242,0.65)',
            margin: 0, maxWidth: '32rem',
          }}>
            The link between emotional vocabulary and self-regulation is one of the most
            replicated findings in developmental psychology. We are building on it carefully,
            and verifying our work in the open.
          </p>
        </div>
      </div>

      {/* ── Key findings strip ─────────────────────────────────── */}
      <div style={{
        background: '#FAF0DC', borderBottom: '1px solid #D9D2C5',
        padding: '2.5rem 1.5rem',
      }}>
        <div style={{
          maxWidth: '52rem', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
          gap: '2rem',
        }}>
          {FINDINGS.map(f => (
            <div key={f.stat} style={{ padding: '0 1rem 0 0' }}>
              <div style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: '1.4rem', fontWeight: 600,
                color: '#2C4A3E', marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
              }}>
                {f.stat}
              </div>
              <p style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.875rem', lineHeight: 1.6,
                color: '#3A3A3A', margin: '0 0 0.4rem',
              }}>
                {f.detail}
              </p>
              <span style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.7rem', letterSpacing: '0.04em',
                color: '#7A7A7A', fontStyle: 'italic',
              }}>
                {f.source}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main sections ──────────────────────────────────────── */}
      <div style={{ background: '#FAF7F2', padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          {SECTIONS.map((s, i) => (
            <div key={s.label} style={{
              borderTop: `1px solid ${i === 0 ? 'transparent' : '#D9D2C5'}`,
              padding: '3rem 0',
              animation: `lp-fade-up 0.5s ${0.1 + i * 0.1}s both ease-out`,
            }}>
              <span style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#C9A97A', display: 'block', marginBottom: '0.75rem',
              }}>
                {s.label}
              </span>

              <h2 style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.01em',
                color: '#1A1A1A', margin: '0 0 1.25rem',
              }}>
                {s.heading}
              </h2>

              {s.body.map((para, j) => (
                <p key={j} style={{
                  fontFamily: 'var(--font-source-serif), Georgia, serif',
                  fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                  lineHeight: 1.75, color: '#3A3A3A',
                  margin: j < s.body.length - 1 ? '0 0 1rem' : 0,
                }}>
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* Footer note */}
          <div style={{
            borderTop: '1px solid #D9D2C5', paddingTop: '2rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontStyle: 'italic',
              fontSize: '0.875rem', lineHeight: 1.7,
              color: '#7A7A7A', margin: 0,
            }}>
              Protocol and pre-registration: forthcoming, 2026.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
