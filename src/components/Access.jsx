import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from './ui'

const STATS = [
  ['200+', 'Target participants'],
  ['10+',  'Partner universities'],
  ['30%',  'First-time hackers'],
  ['Free', 'To attend'],
]

const INCLUDES = ['All workshops & talks', 'Mentor access all weekend', 'Food & drinks throughout',
  'Compute credits', 'Three competition tracks', 'VC for a Day · £200k virtual']

export default function Access() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    window.location.href = `mailto:aisoc@soton.ac.uk?subject=Request Access — HACK//26&body=${encodeURIComponent(`I'd like to request access for HACK//26.\n\nEmail: ${email}`)}`
    setSent(true)
  }

  return (
    <section id="access" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '40%', left: '50%', width: 900, height: 600,
        transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(122,162,255,0.14), transparent 65%)', filter: 'blur(20px)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 22 }}>07 — Early access</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 6.5vw, 4.4rem)', fontWeight: 600,
            letterSpacing: '-0.04em', lineHeight: 1.02, marginBottom: 22 }}>
            Build at the speed<br /><span className="aurora-text">of your ambition.</span>
          </h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            Join the early-access list and help shape the future of AI-native work.
            200+ students. 2.5 days. 16–18 October 2026 · Eagle Labs, Southampton.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="glass" style={{
          maxWidth: 720, margin: '0 auto', padding: 'clamp(28px, 4vw, 48px)' }}>
          <div className="acc-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 4vw, 48px)', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: 4 }}>
                Free <span style={{ fontSize: '1rem', color: 'var(--text-3)', fontWeight: 400 }}>to attend</span>
              </div>
              <p style={{ color: 'var(--text-3)', fontSize: '0.84rem', marginBottom: 22 }}>
                Zero financial barriers. Everything is covered by our sponsors.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {INCLUDES.map(x => (
                  <div key={x} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.86rem', color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>✓</span> {x}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {!sent ? (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <label style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.18em',
                    color: 'var(--text-3)', textTransform: 'uppercase' }}>Your email</label>
                  <input
                    type="email" required placeholder="you@university.ac.uk"
                    value={email} onChange={e => setEmail(e.target.value)}
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--hairline)',
                      borderRadius: 12, padding: '14px 16px', fontSize: '0.9rem', color: 'var(--text)',
                      fontFamily: 'var(--font)', outline: 'none', transition: 'border-color 0.25s' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(122,162,255,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--hairline)')}
                  />
                  <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                    Request Access
                  </button>
                  <a href="mailto:aisoc@soton.ac.uk?subject=HACK//26 — Sales" className="btn btn-ghost" style={{ justifyContent: 'center', width: '100%' }}>
                    Contact the team
                  </a>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: '28px 20px', borderRadius: 14, textAlign: 'center',
                    background: 'rgba(122,162,255,0.08)', border: '1px solid rgba(122,162,255,0.3)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>✓</div>
                  <div style={{ color: 'var(--text)', fontWeight: 500, marginBottom: 4 }}>Opening your email client</div>
                  <div style={{ color: 'var(--text-3)', fontSize: '0.82rem' }}>See you in Southampton.</div>
                </motion.div>
              )}
              <p style={{ marginTop: 16, fontSize: '0.74rem', color: 'var(--text-4)', textAlign: 'center' }}>
                Or email <a href="mailto:aisoc@soton.ac.uk" style={{ color: 'var(--accent)', textDecoration: 'none' }}>aisoc@soton.ac.uk</a>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="acc-stats" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
          gap: 'clamp(28px, 6vw, 64px)', marginTop: 56 }}>
          {STATS.map(([n, l]) => (
            <Reveal key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 600, letterSpacing: '-0.03em' }}>
                <span className="aurora-text">{n}</span>
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-3)', marginTop: 6 }}>{l}</div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .acc-split { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
