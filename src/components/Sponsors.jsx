import { SectionHead, SpotCard, Reveal } from './ui'

const TIERS = [
  { tier: 'Headline', items: [
    { name: 'IET', desc: 'Institution of Engineering & Technology' },
    { name: 'Barclays Eagle Labs', desc: 'Innovation hub · venue partner' },
  ]},
  { tier: 'Gold', items: [
    { name: 'Deutsche Bank', desc: 'Global investment bank' },
    { name: 'Oracle', desc: 'Cloud infrastructure & database' },
  ]},
  { tier: 'Silver', items: [
    { name: 'Southampton City', desc: 'City Council · community partner' },
    { name: 'TrueMoney', desc: 'Digital payments' },
    { name: 'Carbon GPT', desc: 'Sustainability, simplified' },
  ]},
]

const SIZE = { Headline: '1.15rem', Gold: '1rem', Silver: '0.92rem' }
const COL  = { Headline: 'var(--text)', Gold: '#e9c984', Silver: 'var(--text-2)' }

export default function Sponsors() {
  return (
    <section id="sponsors" className="section">
      <div className="container">
        <SectionHead
          index="06" eyebrow="Partners" title="Backed by" accent="builders of industry."
          lede="Organisations who believe in building the next generation of AI talent."
        />

        {TIERS.map((t, ti) => (
          <div key={t.tier} style={{ marginBottom: 28 }}>
            <Reveal>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.24em',
                color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 14 }}>{t.tier}</div>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${t.tier === 'Silver' ? 200 : 240}px, 1fr))`, gap: 14 }}>
              {t.items.map((s, i) => (
                <SpotCard key={s.name} style={{ padding: '24px 28px' }}>
                  <div style={{ fontSize: SIZE[t.tier], fontWeight: 600, letterSpacing: '-0.01em',
                    color: COL[t.tier], marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{s.desc}</div>
                </SpotCard>
              ))}
            </div>
          </div>
        ))}

        <Reveal delay={0.1}>
          <div className="glass" style={{ marginTop: 18, padding: 'clamp(24px, 3vw, 34px)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 6 }}>Become a partner</h3>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', fontWeight: 300 }}>
                Direct access to 200+ elite student builders. Financial or in-kind — any help appreciated.
              </p>
            </div>
            <a href="mailto:aisoc@soton.ac.uk" className="btn btn-ghost">Get in touch →</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
