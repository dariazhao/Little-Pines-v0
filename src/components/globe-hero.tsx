'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Globe } from './globe'

/* ─── Scoped CSS ─────────────────────────────────────────────── */
const GH_CSS = `
  @keyframes gh-fade-up {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes gh-glow {
    0%, 100% { opacity: 0.55; transform: scale(1);    }
    50%       { opacity: 0.88; transform: scale(1.03); }
  }
  @keyframes gh-bob {
    0%, 100% { transform: translateX(-50%) translateY(0);  }
    50%       { transform: translateX(-50%) translateY(5px); }
  }
  @keyframes gh-wave-slide {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes gh-ray-in {
    from { opacity: 0; transform: translate(-0.5px, -0.5px) scale(0.5); }
    to   { opacity: 1; transform: translate(-0.5px, -0.5px) scale(1);   }
  }
`

/* ─── Rotating quotes ────────────────────────────────────────── */
const QUOTES = [
  {
    city:  'Portland, OR',
    quote: `I\u2019ve spent years worrying about screen time. This is the first thing that addresses the actual problem.`,
    attr:  'M.R. \u2014 Parent of a 4-year-old',
  },
  {
    city:  'San Francisco, CA',
    quote: `A friend that never speaks first, that waits for the child \u2014 that is the deepest kind of respect.`,
    attr:  'K.L. \u2014 Montessori educator, 18 years',
  },
  {
    city:  'Boston, MA',
    quote: `The link between emotional vocabulary and self-regulation is one of the most replicated findings we have.`,
    attr:  'Dr. A.T. \u2014 Developmental psychologist',
  },
  {
    city:  'Amsterdam',
    quote: `Waldorf has always known that imagination is not a luxury \u2014 it is a developmental necessity.`,
    attr:  'H.B. \u2014 Waldorf class teacher',
  },
  {
    city:  'New York, NY',
    quote: `It takes real courage to build something whose entire purpose is to give that attention back.`,
    attr:  'R.K. \u2014 Head of children\u2019s content',
  },
  {
    city:  'Copenhagen',
    quote: `The evidence on emotional vocabulary in early childhood is clear. The question is whether a product respects it.`,
    attr:  'S.P. \u2014 Pediatric therapist',
  },
]

/* ─── Bear illustrations (one per quote, cycles through 5) ──── */
const BEARS = [
  '/bear_sits.png',
  '/bear_sleeps.png',
  '/bear_eats.png',
  '/bear_plays.png',
  '/bear_runs.png',
  '/bear_sits.png',   // 6th quote wraps back
]

/* ─── Promise tape items ─────────────────────────────────────── */
const PROMISE_ITEMS = [
  'The friend waits \u2014 never speaks first',
  'Voice data never leaves the plush',
  'No engagement metrics \u2014 ever',
  'A friend, not a therapist or authority',
  'Open-source: software, research, and safety',
  'Not an AI company',
]

/* ─── Curved promise tape ────────────────────────────────────── */
function PromiseTape() {
  const segment = PROMISE_ITEMS.map(p => `${p}   \u00b7   `).join('')
  const text    = segment.repeat(4)

  /*
   * Wave: 2 oscillations across W=1600 units.
   * amplitude ±50, centre y=80, viewBox height H=160.
   * Ribbon = thick SVG stroke — bigger amplitude = more dramatic curves.
   */
  const W = 1600
  const H = 160
  const d = `M0,80 C200,30 600,130 800,80 C1000,30 1400,130 ${W},80`

  /*
   * CSS mask on the tape layer:
   *   left zone  (0–44%)  → bright  — text has "exited" the box
   *   right zone (56–100%) → dim    — text is still "approaching"
   * The waveform widget sits outside this masked layer at 50%.
   */
  const mask = `linear-gradient(to right,
    transparent                 0%,
    rgba(255,255,255,0.92)      6%,
    rgba(255,255,255,0.92)     44%,
    rgba(255,255,255,0.20)     56%,
    rgba(255,255,255,0.20)     94%,
    transparent               100%)`

  const tapeStyle: React.CSSProperties = { display: 'block', flexShrink: 0 }
  const textAttrs = {
    fontSize: '13.5' as unknown as number,
    fill: 'rgba(250,247,242,0.9)',
    fontFamily: "'Source Serif 4','Source_Serif_4',Georgia,serif",
    letterSpacing: '1.4',
    fontStyle: 'italic',
    dy: '5',
  }

  return (
    <div
      aria-hidden="true"
      style={{
        width: 'calc(100% + 4rem)', marginLeft: '-2rem',
        height: `${H}px`, position: 'relative', flexShrink: 0,
      }}
    >
      {/* ── Masked scrolling tape ── */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        maskImage:       mask,
        WebkitMaskImage: mask,
      }}>
        <div style={{
          display: 'flex',
          animation: 'gh-wave-slide 58s linear infinite',
          willChange: 'transform',
        }}>
          {/* Copy A */}
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={tapeStyle}>
            <defs><path id="lp-wave-a" d={d} /></defs>
            {/* Curved ribbon — the stroke IS the background band */}
            <path d={d} fill="none"
              stroke="rgba(8,24,18,0.90)" strokeWidth="52" strokeLinecap="round" />
            <text {...textAttrs}>
              <textPath href="#lp-wave-a" startOffset="2%">{text}</textPath>
            </text>
          </svg>
          {/* Copy B — identical, provides seamless loop */}
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={tapeStyle}>
            <defs><path id="lp-wave-b" d={d} /></defs>
            <path d={d} fill="none"
              stroke="rgba(8,24,18,0.90)" strokeWidth="52" strokeLinecap="round" />
            <text {...textAttrs}>
              <textPath href="#lp-wave-b" startOffset="2%">{text}</textPath>
            </text>
          </svg>
        </div>
      </div>

    </div>
  )
}

/* ─── Quote overlay ──────────────────────────────────────────── */
function QuoteOverlay({ idx, visible }: { idx: number; visible: boolean }) {
  const q = QUOTES[idx]
  const fade: React.CSSProperties = { opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease' }

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      paddingInline: '16%',
      pointerEvents: 'none',
    }}>
      {/* Quote — backdrop matches globe fill #EBE8E0 at 70% */}
      <div style={{
        ...fade, textAlign: 'center',
        background: 'rgba(235, 232, 224, 0.70)',
        borderRadius: '10px',
        padding: '0.8rem 1.1rem',
      }}>
        <div style={{
          fontFamily: 'var(--font-source-serif), Georgia, serif',
          fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#2C4A3E', fontWeight: 600, marginBottom: '0.5rem',
        }}>
          {q.city}
        </div>
        <p style={{
          fontFamily: 'var(--font-fraunces), Georgia, serif',
          fontStyle: 'italic', fontWeight: 600,
          fontSize: 'clamp(0.95rem, 1.4vw, 1.18rem)',
          lineHeight: 1.48, color: '#1A1A1A',
          margin: '0 auto 0.45rem', maxWidth: '22ch',
        }}>
          &ldquo;{q.quote}&rdquo;
        </p>
        <div style={{
          fontFamily: 'var(--font-source-serif), Georgia, serif',
          fontSize: '0.7rem', letterSpacing: '0.03em',
          color: '#3A3A3A', fontWeight: 400,
        }}>
          {q.attr}
        </div>

        {/* Dots */}
        <div style={{
          display: 'flex', gap: '0.38rem',
          alignItems: 'center', justifyContent: 'center',
          marginTop: '0.55rem',
        }}>
          {Array.from({ length: QUOTES.length }, (_, i) => (
            <div key={i} style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background:  i === idx ? 'rgba(44,74,62,0.65)' : 'transparent',
              border: `1.5px solid ${i === idx ? 'rgba(44,74,62,0.65)' : 'rgba(44,74,62,0.32)'}`,
              transition: 'background 0.4s ease, border-color 0.4s ease',
            }} />
          ))}
        </div>
      </div>

      {/* Bear — 33% of globe width (22% × 1.5) */}
      <div style={{ ...fade, width: '33%', marginTop: '0.9rem', flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BEARS[idx]}
          alt=""
          draggable={false}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </div>
  )
}

/* ─── Hero text ──────────────────────────────────────────────── */
function HeroText() {
  const em: React.CSSProperties = { color: '#C9A97A', fontStyle: 'inherit', whiteSpace: 'nowrap' }

  return (
    <div style={{ textAlign: 'center', animation: 'gh-fade-up 0.7s 0.15s both ease-out' }}>
      <span style={{
        fontFamily: 'var(--font-source-serif), Georgia, serif',
        fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(250,247,242,0.5)', display: 'block', marginBottom: '1.5rem',
      }}>
        Emotional Literacy Coach · For ages 3–7
      </span>

      <h1 style={{
        fontFamily: 'var(--font-fraunces), Georgia, serif',
        fontOpticalSizing: 'auto',
        fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
        fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.025em',
        color: '#FAF7F2', marginBottom: '1.25rem',
        maxWidth: 'none',
      }}>
        Building for the moments in{' '}
        <span style={em}>early childhood</span>
        {' '}when{' '}
        <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
          <span style={em}>big feelings</span>
          {/* Hand-drawn wavy underline — stays within text bounds, no bleed */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 7"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              left: '2%', bottom: '-4px',
              width: '96%', height: '7px',
              pointerEvents: 'none',
              animation: 'gh-ray-in 0.5s 0.9s both ease-out',
            }}
          >
            <path
              d="M0,5 C8,1.5 16,6 25,3.5 C34,1 43,6 52,3.5 C61,1 70,6 79,3.5 C88,1 95,5.5 100,4"
              fill="none"
              stroke="#C9A97A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
          </svg>
        </span>
        {' '}<span style={{ whiteSpace: 'nowrap' }}>are hard to hold alone.</span>
      </h1>

      <p style={{
        fontFamily: 'var(--font-source-serif), Georgia, serif',
        fontSize: '1rem', lineHeight: 1.65,
        color: 'rgba(250,247,242,0.62)',
        marginBottom: '1.75rem', maxWidth: '44ch', marginInline: 'auto',
      }}>
        A quiet plush friend your child can turn to — anytime, screen-free, on-device.
      </p>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/promise" style={{
          fontFamily: 'var(--font-source-serif), Georgia, serif',
          fontSize: '0.875rem', letterSpacing: '0.03em',
          color: '#FAF7F2', textDecoration: 'none',
          borderBottom: '1.5px solid rgba(250,247,242,0.55)',
          paddingBottom: '2px', display: 'inline-block',
        }}>
          The Promise →
        </Link>
        <Link href="/research" style={{
          fontFamily: 'var(--font-source-serif), Georgia, serif',
          fontSize: '0.875rem', letterSpacing: '0.03em',
          color: 'rgba(250,247,242,0.5)', textDecoration: 'none',
          borderBottom: '1px solid rgba(250,247,242,0.22)',
          paddingBottom: '2px', display: 'inline-block',
        }}>
          The research →
        </Link>
      </div>
    </div>
  )
}

/* ─── Main component ─────────────────────────────────────────── */
export function GlobeHero() {
  const [quoteIdx,     setQuoteIdx    ] = useState(0)
  const [quoteVisible, setQuoteVisible] = useState(true)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null
    const interval = setInterval(() => {
      setQuoteVisible(false)
      timeout = setTimeout(() => {
        setQuoteIdx(i => (i + 1) % QUOTES.length)
        setQuoteVisible(true)
      }, 450)
    }, 5500)
    return () => { clearInterval(interval); if (timeout) clearTimeout(timeout) }
  }, [])

  return (
    <section style={{
      background: '#2C4A3E', minHeight: '100vh',
      position: 'relative', padding: '0 2rem', overflow: 'hidden',
    }}>
      <style>{GH_CSS}</style>

      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        minHeight: '100vh', paddingBlock: '5rem 3rem', gap: '0',
      }}>
        {/* Text */}
        <div style={{ width: '100%', maxWidth: 'min(92vw, 720px)', marginBottom: '2.5rem' }}>
          <HeroText />
        </div>

        {/* Curved promise tape */}
        <PromiseTape />

        {/* Globe — pulled up to overlap the tape; tape runs behind it */}
        <div style={{
          position: 'relative',
          width: '100%', maxWidth: 'min(60vw, 588px)',
          marginTop: 'calc(-80px - min(15vw, 147px))',
        }}>
          <div style={{
            position: 'absolute', inset: '-6%', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 65%)',
            animation: 'gh-glow 7s ease-in-out infinite',
            pointerEvents: 'none', zIndex: 0,
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Globe />
            <QuoteOverlay idx={quoteIdx} visible={quoteVisible} />
          </div>
        </div>

        {/* Caption */}
        <p style={{
          fontFamily: 'var(--font-source-serif), Georgia, serif',
          fontStyle: 'italic', fontSize: '0.7rem',
          color: 'rgba(250,247,242,0.28)', textAlign: 'center',
          margin: '0.75rem 0 0',
        }}>
          Educators, parents, and researchers in 30+ countries. Drag to explore.
        </p>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: '1.75rem', left: '50%',
        transform: 'translateX(-50%)',
        animation: 'gh-fade-up 0.5s 1.8s both ease-out', pointerEvents: 'none',
      }}>
        <svg width="20" height="11" viewBox="0 0 20 11" fill="none" aria-hidden="true"
          style={{ animation: 'gh-bob 2.5s 2.2s ease-in-out infinite' }}>
          <path d="M1 1L10 10L19 1" stroke="rgba(250,247,242,0.32)"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
