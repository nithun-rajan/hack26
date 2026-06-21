import { SectionHead, SpotCard, Reveal, useCountUp } from './ui'

const STATS = [
  { value: 60, suffix: '+', label: 'Active members' },
  { value: 40, suffix: '+', label: 'Events per year' },
  { value: 12, suffix: '+', label: 'Partner companies' },
  { value: 3,  suffix: 'rd', label: 'Largest AI society in the UK' },
]

const RECAP = [
  { value: 120, suffix: '+', label: 'Participants' },
  { value: 14,  suffix: '',  label: 'Submissions' },
  { value: 6,   suffix: '',  label: 'Mentors' },
  { value: 95,  suffix: '%', label: 'Would return' },
]

function Stat({ value, suffix, label, big }) {
  const { val, ref } = useCountUp(value)
  return (
    <div ref={ref} style={{ textAlign: big ? 'left' : 'center' }}>
      <div style={{
        fontSize: big ? 'clamp(2.4rem, 6vw, 3.6rem)' : 'clamp(1.8rem, 4vw, 2.6rem)',
        fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1,
        color: 'var(--text)', fontVariantNumeric: 'tabular-nums',
      }}>
        <span className="aurora-text">{Math.round(val)}{suffix}</span>
      </div>
      <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginTop: 10, letterSpacing: '0.01em' }}>{label}</div>
    </div>
  )
}

export default function Numbers() {
  return (
    <section id="numbers" className="section">
      <div className="container">
        <SectionHead
          index="05" eyebrow="The society" title="Built by the people" accent="who build."
          lede="A student-led community from Computer Science, Electronics, Mathematics and beyond — united by an obsession with building things using AI."
        />

        <div className="num-split" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 20, alignItems: 'stretch' }}>
          {/* society stats */}
          <SpotCard hoverLift={false} style={{ padding: 'clamp(28px, 4vw, 44px)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.64rem', letterSpacing: '0.2em',
              color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 30 }}>UoS AI Society</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '34px 24px' }}>
              {STATS.map(s => <Stat key={s.label} {...s} big />)}
            </div>
          </SpotCard>

          {/* 2024 recap */}
          <SpotCard hoverLift={false} style={{ padding: 'clamp(28px, 4vw, 44px)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.64rem', letterSpacing: '0.2em',
              color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 30 }}>Hack//2024 · recap</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 16px', marginBottom: 'auto' }}>
              {RECAP.map(s => <Stat key={s.label} {...s} />)}
            </div>
            <blockquote style={{ marginTop: 34, paddingLeft: 16, borderLeft: '2px solid rgba(122,162,255,0.4)',
              color: 'var(--text-2)', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 300 }}>
              “Easily the best weekend of my degree.”
              <span style={{ display: 'block', fontStyle: 'normal', fontSize: '0.72rem',
                color: 'var(--text-3)', marginTop: 8 }}>— Suleyman Cagatay · Winner, 2024</span>
            </blockquote>
          </SpotCard>
        </div>
      </div>
      <style>{`@media (max-width: 820px) { .num-split { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
