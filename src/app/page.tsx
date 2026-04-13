import Image from 'next/image'
import Link from 'next/link'
import { EmailCapture } from '@/components/email-capture'
import { GlobeHero } from '@/components/globe-hero'

const HP_CSS = `
  @keyframes hp-float {
    0%, 100% { transform: translateY(0px); }
    38%       { transform: translateY(-11px); }
    70%       { transform: translateY(-5px); }
  }
  @keyframes hp-breathe {
    0%, 100% { transform: scale(1); opacity: 1; }
    50%       { transform: scale(1.04); opacity: 0.85; }
  }
  @keyframes hp-drift-a {
    0%   { transform: translate(0,0) rotate(-4deg); opacity:0; }
    10%  { opacity:.5; }
    88%  { opacity:.2; }
    100% { transform: translate(-22px,-95px) rotate(26deg); opacity:0; }
  }
  @keyframes hp-drift-b {
    0%   { transform: translate(0,0) rotate(7deg); opacity:0; }
    12%  { opacity:.45; }
    100% { transform: translate(18px,-85px) rotate(-20deg); opacity:0; }
  }
  @keyframes hp-drift-c {
    0%   { transform: translate(0,0) rotate(-1deg); opacity:0; }
    8%   { opacity:.4; }
    100% { transform: translate(-10px,-72px) rotate(22deg); opacity:0; }
  }
  @keyframes hp-fade-up {
    from { opacity:0; transform:translateY(18px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes hp-rule {
    from { transform:scaleX(0); transform-origin:left; }
    to   { transform:scaleX(1); }
  }
  @media (max-width: 700px) {
    .hp-bear-grid    { grid-template-columns: 1fr !important; }
    .hp-bear-col     { order: -1; max-width: 65vw; margin-inline: auto; }
    .hp-promise-prev { grid-template-columns: 1fr !important; }
    .hp-testimonials { grid-template-columns: 1fr !important; }
    .hp-product-grid { grid-template-columns: 1fr !important; }
    .hp-founder-grid { grid-template-columns: 1fr !important; }
    .hp-founder-bear { display: none !important; }
  }
  @media (max-width: 900px) and (min-width: 701px) {
    .hp-testimonials { grid-template-columns: 1fr 1fr !important; }
  }
`

function PineSprig({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true" style={style}>
      <line x1="11" y1="12" x2="11" y2="0"  stroke="#2C4A3E" strokeWidth="1"    strokeLinecap="round" />
      <line x1="11" y1="10" x2="6"  y2="7"  stroke="#2C4A3E" strokeWidth="0.9"  strokeLinecap="round" />
      <line x1="11" y1="10" x2="16" y2="7"  stroke="#2C4A3E" strokeWidth="0.9"  strokeLinecap="round" />
      <line x1="11" y1="6"  x2="4"  y2="3"  stroke="#2C4A3E" strokeWidth="0.9"  strokeLinecap="round" />
      <line x1="11" y1="6"  x2="18" y2="3"  stroke="#2C4A3E" strokeWidth="0.9"  strokeLinecap="round" />
      <line x1="11" y1="2"  x2="7"  y2="0"  stroke="#2C4A3E" strokeWidth="0.85" strokeLinecap="round" />
      <line x1="11" y1="2"  x2="15" y2="0"  stroke="#2C4A3E" strokeWidth="0.85" strokeLinecap="round" />
    </svg>
  )
}

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span style={{
      fontFamily: 'var(--font-source-serif), Georgia, serif',
      fontSize: '0.68rem', letterSpacing: '0.17em', textTransform: 'uppercase',
      color: light ? 'rgba(250,247,242,0.5)' : '#5C5C5C',
      display: 'block', marginBottom: '0.75rem',
    }}>
      {children}
    </span>
  )
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      display: 'flex', gap: '0.75rem', paddingBlock: '0.65rem',
      borderBottom: '1px solid #D9D2C5', alignItems: 'baseline',
    }}>
      <span style={{
        fontFamily: 'var(--font-source-serif), Georgia, serif',
        fontSize: '0.67rem', letterSpacing: '0.13em', textTransform: 'uppercase',
        color: '#5C5C5C', flexShrink: 0, width: '6.5rem',
      }}>{label}</span>
      <span style={{
        fontFamily: 'var(--font-source-serif), Georgia, serif',
        fontSize: '0.96rem', color: '#1A1A1A', lineHeight: 1.5,
      }}>{value}</span>
    </div>
  )
}

const TESTIMONIALS = [
  {
    quote: `I\u2019ve spent years worrying about screen time. This is the first thing that addresses the actual problem \u2014 whether my daughter has the words for what\u2019s hard.`,
    name: 'M.R.', role: 'Parent of a 4-year-old', location: 'Portland, OR',
  },
  {
    quote: `A friend that never speaks first, that waits for the child \u2014 that is extraordinarily well-conceived. Montessori has always understood that restraint is a form of deep respect.`,
    name: 'K.L.', role: 'Montessori lead teacher, 18 years', location: 'San Francisco, CA',
  },
  {
    quote: `The link between emotional vocabulary and self-regulation in early childhood is one of the most replicated findings we have. A product that takes this seriously, with open-source research, is something I haven\u2019t seen before.`,
    name: 'Dr. A.T.', role: 'Developmental psychologist', location: 'Boston, MA',
  },
  {
    quote: `Waldorf education has always known that imagination is not a luxury \u2014 it is a developmental necessity. What Little Pines is building is deeply compatible with that tradition.`,
    name: 'H.B.', role: 'Waldorf class teacher', location: 'Amsterdam',
  },
  {
    quote: `Everything in children\u2019s media is designed to keep the child\u2019s attention. It takes real courage to build something whose entire purpose is to give that attention back.`,
    name: 'R.K.', role: 'Head of children\u2019s content, streaming platform', location: 'New York, NY',
  },
  {
    quote: `I see children every week who can\u2019t name what they feel. Most products ignore this entirely. The emphasis on vocabulary and co-regulation here is clinically meaningful.`,
    name: 'S.P.', role: 'Pediatric occupational therapist', location: 'Boston Children\u2019s Hospital',
  },
]

/* Three promise previews shown on homepage — odd numbers for variety */
const PROMISE_PREVIEW = [
  { n: '01', title: 'The friend waits for the child, not the other way around.' },
  { n: '03', title: 'We do not maximize engagement. We model its healthy limits.' },
  { n: '05', title: 'The field is bigger than our company.' },
]

export default function HomePage() {
  return (
    <div>
      <style>{HP_CSS}</style>

      {/* ════════════════════════════════════════════════════════
          GLOBE HERO
      ════════════════════════════════════════════════════════ */}
      <GlobeHero />

      {/* ════════════════════════════════════════════════════════
          THE BEAR — product intro
      ════════════════════════════════════════════════════════ */}
      <section style={{ padding: '0 2rem', background: '#FAF7F2' }}>
        <div
          className="hp-bear-grid"
          style={{
            maxWidth: '1100px', marginInline: 'auto',
            minHeight: '90vh', display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            alignItems: 'center', gap: '3rem',
          }}
        >
          <div>
            <span style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#2C4A3E', display: 'block', marginBottom: '2.75rem',
              animation: 'hp-fade-up 0.6s 0.1s both ease-out',
            }}>
              Little Pines Studio · Est. 2026
            </span>

            <h2 style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontOpticalSizing: 'auto',
              fontSize: 'clamp(2.6rem, 4.5vw, 4.2rem)',
              fontWeight: 600, lineHeight: 1.0, letterSpacing: '-0.03em',
              color: '#1A1A1A', marginBottom: '2rem',
              animation: 'hp-fade-up 0.7s 0.2s both ease-out',
            }}>
              A handcrafted<br />
              emotional literacy<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#2C4A3E' }}>coach for early</em><br />
              childhood.
            </h2>

            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: 'clamp(1.0rem, 1.6vw, 1.1rem)',
              lineHeight: 1.7, color: '#3C3C3C', marginBottom: '1rem',
              maxWidth: '40ch',
              animation: 'hp-fade-up 0.7s 0.32s both ease-out',
            }}>
              Nine inches tall. Fine Peruvian alpaca, sourced from Andean family
              farms, RAS certified. Organic cotton lining. Embroidered face.
              Designed to outlast childhood, not the season.
            </p>

            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: 'clamp(1.0rem, 1.6vw, 1.1rem)',
              lineHeight: 1.7, color: '#3C3C3C', marginBottom: '2.25rem',
              maxWidth: '40ch',
              animation: 'hp-fade-up 0.7s 0.42s both ease-out',
            }}>
              A child squeezes the paw and the bear listens. Four conversation
              types — a daily check-in, a big-feelings session, a curiosity
              exploration, and a wind-down — co-designed with child psychologists
              and Montessori and Waldorf educators. Everything runs on the bear
              itself. Voice data never leaves the plush.
            </p>

            <div style={{ borderTop: '1px solid #D9D2C5', marginBottom: '2.5rem', animation: 'hp-fade-up 0.7s 0.5s both ease-out' }}>
              <SpecRow label="Age"       value="3–7 years" />
              <SpecRow label="Materials" value="Peruvian alpaca, organic cotton, wool felt" />
              <SpecRow label="Price"     value="$129 — no subscription required" />
              <SpecRow label="Privacy"   value="On-device — voice never leaves the plush" />
              <SpecRow label="Retail"    value="Holiday 2027" />
            </div>

            <div style={{
              display: 'flex', gap: '2.25rem', flexWrap: 'wrap',
              animation: 'hp-fade-up 0.7s 0.58s both ease-out',
            }}>
              <Link href="/promise" style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.875rem', letterSpacing: '0.03em', color: '#2C4A3E',
                textDecoration: 'none', borderBottom: '1.5px solid #2C4A3E',
                paddingBottom: '2px', display: 'inline-block',
              }}>
                The Promise →
              </Link>
              <Link href="/studio" style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.875rem', letterSpacing: '0.03em', color: '#5C5C5C',
                textDecoration: 'none', borderBottom: '1px solid #D9D2C5',
                paddingBottom: '2px', display: 'inline-block',
              }}>
                The Studio →
              </Link>
            </div>
          </div>

          <div
            className="hp-bear-col"
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBlock: '3rem' }}
          >
            <div style={{
              position: 'absolute', width: '340px', height: '380px', borderRadius: '50%',
              background: 'radial-gradient(ellipse at 50% 60%, #E8EFE9 0%, #F2EDE3 48%, transparent 72%)',
              animation: 'hp-breathe 6.5s ease-in-out infinite', pointerEvents: 'none',
            }} />
            <div style={{ position: 'absolute', bottom: '18%', left: '8%', animation: 'hp-drift-a 8s ease-in infinite' }}>
              <PineSprig />
            </div>
            <div style={{ position: 'absolute', bottom: '35%', right: '6%', animation: 'hp-drift-b 9.5s ease-in infinite', animationDelay: '2.8s' }}>
              <PineSprig />
            </div>
            <div style={{ position: 'absolute', bottom: '10%', right: '32%', animation: 'hp-drift-c 8.5s ease-in infinite', animationDelay: '5.5s' }}>
              <PineSprig />
            </div>
            <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '420px', animation: 'hp-float 7.5s ease-in-out infinite' }}>
              <Image
                src="/bear_sits.png"
                alt="Little Pines bear, sitting patiently"
                width={600} height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PULL QUOTE
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#F0E8DA', padding: '5.5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '44ch', marginInline: 'auto' }}>
          <div style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontSize: '5rem', fontWeight: 300, color: '#2C4A3E',
            opacity: 0.18, lineHeight: 0.6, marginBottom: '1.25rem', userSelect: 'none',
          }}>
            &ldquo;
          </div>
          <p style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontStyle: 'italic', fontSize: 'clamp(1.35rem, 3.5vw, 1.95rem)',
            fontWeight: 300, lineHeight: 1.5, color: '#1A1A1A',
            letterSpacing: '-0.01em', margin: 0,
          }}>
            There is a child somewhere right now, trying to find the word for what they feel.
          </p>
        </div>
        <div style={{ marginTop: '3rem', opacity: 0.18 }}>
          <Image src="/bear_runs.png" alt="" width={80} height={80}
            style={{ width: '52px', height: 'auto', display: 'inline-block' }} aria-hidden="true" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          COMMUNITY VOICES — testimonials
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#FAF7F2', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', marginInline: 'auto' }}>
          <div style={{ marginBottom: '3.5rem', borderTop: '1px solid #D9D2C5', paddingTop: '3.5rem' }}>
            <Label>What the community is saying</Label>
            <h2 style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontOpticalSizing: 'auto',
              fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
              fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em',
              color: '#1A1A1A', marginBottom: 0,
            }}>
              Parents. Educators. Researchers.
            </h2>
          </div>

          <div
            className="hp-testimonials"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                padding: '2rem 2rem 2rem 0',
                borderTop: i < 3 ? '2px solid #2C4A3E' : '1px solid #D9D2C5',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid #D9D2C5' : 'none',
                paddingRight: (i + 1) % 3 !== 0 ? '2rem' : '0',
                paddingLeft: i % 3 !== 0 ? '2rem' : '0',
              }}>
                <div style={{
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  fontSize: '2.5rem', fontWeight: 300, color: '#2C4A3E',
                  opacity: 0.2, lineHeight: 0.8, marginBottom: '0.875rem', userSelect: 'none',
                }}>
                  &ldquo;
                </div>
                <p style={{
                  fontFamily: 'var(--font-source-serif), Georgia, serif',
                  fontStyle: 'italic', fontSize: '0.975rem',
                  lineHeight: 1.72, color: '#2A2A2A', marginBottom: '1.5rem',
                }}>
                  {t.quote}
                </p>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                    fontSize: '0.8rem', fontWeight: 600, color: '#1A1A1A',
                    display: 'block', marginBottom: '0.15rem',
                  }}>{t.name}</span>
                  <span style={{
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                    fontSize: '0.72rem', letterSpacing: '0.01em',
                    color: '#5C5C5C', display: 'block',
                  }}>{t.role} · {t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          THE PROMISE — preview
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: '#F5F0E7', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', marginInline: 'auto' }}>
          <div style={{ maxWidth: '54ch', marginBottom: '4rem' }}>
            <Label>The Little Pines Promise</Label>
            <h2 style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontOpticalSizing: 'auto',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
              fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em',
              color: '#1A1A1A', marginBottom: '1rem',
            }}>
              Six commitments, made in writing,<br />before we build anything.
            </h2>
            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontStyle: 'italic', fontSize: '1.05rem',
              lineHeight: 1.65, color: '#5C5C5C', margin: 0,
            }}>
              Made to the children who will trust us, and the parents who let us in.
            </p>
          </div>

          <div
            className="hp-promise-prev"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}
          >
            {PROMISE_PREVIEW.map(({ n, title }) => (
              <div key={n} style={{
                padding: '2.25rem 2.5rem 2.25rem 0',
                borderTop: '2px solid #2C4A3E',
                borderRight: n !== '05' ? '1px solid #C8C0B5' : 'none',
                paddingRight: n !== '05' ? '2.5rem' : '0',
                paddingLeft: n !== '01' ? '2.5rem' : '0',
              }}>
                <span style={{
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  fontSize: '2.8rem', fontWeight: 300, color: '#2C4A3E',
                  opacity: 0.18, lineHeight: 1, display: 'block',
                  marginBottom: '0.75rem', letterSpacing: '-0.03em',
                }}>{n}</span>
                <p style={{
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  fontSize: '1.05rem', fontWeight: 600,
                  lineHeight: 1.4, color: '#1A1A1A', margin: 0,
                  letterSpacing: '-0.01em',
                }}>{title}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid #C8C0B5' }}>
            <Link href="/promise" style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: '0.875rem', letterSpacing: '0.03em', color: '#2C4A3E',
              textDecoration: 'none', borderBottom: '1.5px solid #2C4A3E',
              paddingBottom: '2px', display: 'inline-block',
            }}>
              Read all six promises →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FOUNDER NOTE
      ════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '68ch', marginInline: 'auto', padding: '6rem 1.5rem' }}>
        <div style={{ height: '1px', background: '#D9D2C5', marginBottom: '3.5rem', animation: 'hp-rule 1.1s ease-out both' }} />
        <Label>From the studio</Label>

        <div
          className="hp-founder-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 9.5rem', gap: '2.5rem', alignItems: 'start' }}
        >
          <div>
            <h2 style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontOpticalSizing: 'auto',
              fontSize: 'clamp(1.65rem, 3vw, 2.1rem)',
              fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em',
              color: '#1A1A1A', marginBottom: '1.25rem',
            }}>
              A note from<br />the founder
            </h2>
            <p style={{ fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '1.05rem', lineHeight: 1.74, color: '#2A2A2A', marginBottom: '1.4rem' }}>
              I&apos;m Daria. I quit finance in 2019 to co-found Learn With Mochi, a screen-free
              coding kit for young children built from wood, plush, and recycled materials.
              Mochi has sold tens of thousands of units into 62 countries. Little Pines is
              the product I wish I could have built the first time, now that the technical
              moment is here.
            </p>
            <p style={{ fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '1.05rem', lineHeight: 1.74, color: '#2A2A2A', marginBottom: '2rem' }}>
              I am building it slowly, publicly, and in good company. If you are a child
              psychologist, a Montessori or Waldorf educator, a voice director, or a parent
              who wants to help shape this — I would love to hear from you.
            </p>
            <Link href="/studio" style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: '0.875rem', letterSpacing: '0.03em', color: '#2C4A3E',
              textDecoration: 'none', borderBottom: '1.5px solid #2C4A3E',
              paddingBottom: '2px', display: 'inline-block',
            }}>
              More about the Studio →
            </Link>
          </div>

          <div
            className="hp-founder-bear"
            style={{ position: 'sticky', top: '5.5rem', animation: 'hp-float 9s 2s ease-in-out infinite' }}
          >
            <Image src="/bear_sits.png" alt="" width={260} height={260}
              style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.88 }} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          EARLY ACCESS — footer CTA
      ════════════════════════════════════════════════════════ */}
      <section id="early-access" style={{ background: '#2C4A3E', padding: '6.5rem 2rem' }}>
        <div style={{ maxWidth: '44ch', marginInline: 'auto', textAlign: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(250,247,242,0.45)', display: 'block', marginBottom: '1.5rem',
          }}>
            Early Access
          </span>

          <h2 style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontOpticalSizing: 'auto',
            fontSize: 'clamp(2.4rem, 5.5vw, 3.6rem)',
            fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.025em',
            color: '#FAF7F2', marginBottom: '1.5rem',
          }}>
            Be first to<br />bring him home.
          </h2>

          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: '1rem', lineHeight: 1.7,
            color: 'rgba(250,247,242,0.62)', marginBottom: '2.5rem',
          }}>
            A quiet note when the bear is ready.<br />
            No countdown timer. No launch fanfare.
          </p>

          <EmailCapture dark />

          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: '0.78rem', fontStyle: 'italic',
            color: 'rgba(250,247,242,0.32)',
            marginTop: '1.1rem', marginBottom: 0,
          }}>
            No spam. Unsubscribe whenever. We write only when there is something worth saying.
          </p>
        </div>
      </section>

    </div>
  )
}
