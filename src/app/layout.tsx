import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Fraunces, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-fraunces',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '600'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Little Pines Studio',
    template: '%s — Little Pines Studio',
  },
  description:
    'A screen-free plush friend that helps young children notice and name what they feel.',
}

const LAYOUT_CSS = `
  .lp-nav-link {
    transition: color 0.15s ease, border-color 0.15s ease;
    border-bottom: 1px solid transparent;
    padding-bottom: 1px;
  }
  .lp-nav-link:hover {
    color: #2C4A3E !important;
    border-bottom-color: #2C4A3E;
  }
  .lp-wordmark {
    transition: opacity 0.2s;
  }
  .lp-wordmark:hover { opacity: 0.75; }
  .lp-footer-email:hover { border-bottom-color: #D9D2C5 !important; }
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSerif.variable}`}>
      <body>
        <style>{LAYOUT_CSS}</style>

        {/* ── Navigation ─────────────────────────────────────── */}
        <header style={{
          borderBottom: '1px solid #D9D2C5',
          position: 'sticky', top: 0,
          background: 'rgba(250,247,242,0.92)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          zIndex: 40,
        }}>
          <div style={{
            maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '2rem', height: '3.5rem',
          }}>
            <Link href="/" className="lp-wordmark" style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontWeight: 600, fontSize: '0.95rem', color: '#2C4A3E',
              textDecoration: 'none', letterSpacing: '-0.01em',
              display: 'flex', alignItems: 'center', gap: '0.55rem',
              whiteSpace: 'nowrap',
            }}>
              <Image
                src="/logo.png"
                alt=""
                width={32} height={32}
                style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
                aria-hidden="true"
                priority
              />
              Little Pines Studio
            </Link>

            <nav aria-label="Main navigation">
              <ul style={{
                display: 'flex', gap: 'clamp(1rem, 3vw, 2rem)',
                listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap',
              }}>
                {([
                  ['/',         'Home'    ],
                  ['/promise',  'Promise' ],
                  ['/research', 'Research'],
                  ['/studio',   'Studio'  ],
                ] as const).map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="lp-nav-link" style={{
                      fontFamily: 'var(--font-source-serif), Georgia, serif',
                      fontSize: '0.825rem', color: '#5C5C5C',
                      textDecoration: 'none', letterSpacing: '0.01em',
                      display: 'inline-block',
                    }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {/* ── Content ────────────────────────────────────────── */}
        <main>{children}</main>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer style={{ borderTop: '1px solid #D9D2C5', padding: '3rem 1.5rem 2.5rem' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {/* Sleeping bear watermark */}
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <Image
                src="/bear_sleeps.png"
                alt=""
                width={80} height={80}
                style={{ width: '56px', height: 'auto', opacity: 0.11, display: 'inline-block' }}
                aria-hidden="true"
              />
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '0.75rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.75rem', color: '#5C5C5C',
              }}>
                © 2026 Little Pines Studio
              </span>
              <a href="mailto:hello@littlepines.studio" className="lp-footer-email" style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.75rem', color: '#5C5C5C',
                textDecoration: 'none',
                borderBottom: '1px solid transparent',
                transition: 'border-color 0.15s',
              }}>
                hello@littlepines.studio
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
