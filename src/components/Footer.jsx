const COLS = [
  { head: 'Festival', links: [
    ['Format', '#format'], ['Weekend', '#weekend'], ['Speakers', '#speakers'], ['FAQ', '#faq'],
  ]},
  { head: 'Partners', links: [
    ['Sponsors', '#sponsors'], ['Become a partner', 'mailto:aisoc@soton.ac.uk'],
  ]},
  { head: 'Contact', links: [
    ['aisoc@soton.ac.uk', 'mailto:aisoc@soton.ac.uk'], ['Ivan Ling', 'mailto:Ivan.ling@soton.ac.uk'],
  ]},
]

export default function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid var(--hairline-2)',
      padding: 'clamp(56px, 8vw, 88px) 0 40px' }}>
      <div className="container">
        <div className="ft-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, marginBottom: 56 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
              <span style={{ width: 26, height: 26, borderRadius: 8, display: 'grid', placeItems: 'center',
                background: 'linear-gradient(150deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03))',
                border: '1px solid var(--hairline)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, #cdd9ff, var(--accent))' }} />
              </span>
              <span style={{ fontSize: '0.92rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                HACK<span style={{ color: 'var(--accent)' }}>//26</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-3)', fontSize: '0.86rem', lineHeight: 1.6, fontWeight: 300, maxWidth: 280 }}>
              A 2.5-day applied AI festival by the University of Southampton AI Society.
            </p>
          </div>
          {COLS.map(c => (
            <div key={c.head}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.2em',
                color: 'var(--text-4)', textTransform: 'uppercase', marginBottom: 16 }}>{c.head}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.links.map(([label, href]) => (
                  <a key={label} href={href} style={{ fontSize: '0.84rem', color: 'var(--text-2)',
                    textDecoration: 'none', transition: 'color 0.2s', width: 'fit-content' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
                  >{label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="rule" />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 14, paddingTop: 26 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text-4)', letterSpacing: '0.05em' }}>
            © 2026 UoS AI Society · All rights reserved
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text-4)', letterSpacing: '0.08em' }}>
            16–18 OCT 2026 · EAGLE LABS, SOUTHAMPTON
          </span>
        </div>
      </div>
      <style>{`@media (max-width: 720px) { .ft-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </footer>
  )
}
