import { SectionHead, SpotCard, Reveal } from './ui'

const SPEAKERS = [
  { name: 'Prof Sebastian Stein', role: 'Professor · UoS ECS', area: 'AI & Multi-agent Systems', initials: 'SS',
    tags: ['IoT & Pervasive Systems', 'Royal Society Open Science', 'Citizen-Centric AI'] },
  { name: 'Prof Stuart Middleton', role: 'Professor · UoS ECS', area: 'Machine Learning', initials: 'SM',
    tags: ['Alan Turing Institute Fellow', 'EPSRC Member', 'Machine Intelligence'] },
  { name: 'Dr Leonardo Aniello', role: 'Associate Professor · UoS ECS', area: 'Cybersecurity & AI Safety', initials: 'LA',
    tags: ['Cyber Security Academy', 'Democratic Futures', 'AI Safety'] },
  { name: 'Dr Hikmat Farhat', role: 'Senior Teaching Fellow · UoS ECS', area: 'Classical ML & Statistics', initials: 'HF',
    tags: ['Classical ML', 'Feature Engineering', 'School of ECS'] },
]

export default function Speakers() {
  return (
    <section id="speakers" className="section">
      <div className="container">
        <SectionHead
          index="04" eyebrow="Knowledge transfer" title="Speakers &" accent="mentors."
          lede="World-class researchers, founders and engineers. Real signal — no slide padding."
        />
        <div className="spk-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {SPEAKERS.map((s, i) => (
            <SpotCard key={s.name} style={{ padding: '28px 24px' }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14, marginBottom: 20,
                display: 'grid', placeItems: 'center', fontSize: '1.1rem', fontWeight: 600,
                color: 'var(--text)', letterSpacing: '0.02em',
                background: 'linear-gradient(150deg, rgba(122,162,255,0.22), rgba(157,140,255,0.08))',
                border: '1px solid rgba(122,162,255,0.25)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
              }}>{s.initials}</div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 600, lineHeight: 1.3, marginBottom: 5 }}>{s.name}</h3>
              <p style={{ fontSize: '0.74rem', color: 'var(--accent)', marginBottom: 2 }}>{s.role}</p>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-3)', marginBottom: 16 }}>{s.area}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {s.tags.map(t => <span key={t} className="chip" style={{ fontSize: '0.58rem', padding: '3px 8px' }}>{t}</span>)}
              </div>
            </SpotCard>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div style={{ marginTop: 24, padding: '22px 28px', textAlign: 'center',
            borderRadius: 16, background: 'rgba(122,162,255,0.04)',
            border: '1px dashed rgba(122,162,255,0.2)' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.16em',
              color: 'var(--text-3)', textTransform: 'uppercase' }}>
              + Industry founders · Frontier-lab engineers · VC investors · More to be announced
            </span>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 900px) { .spk-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px) { .spk-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
