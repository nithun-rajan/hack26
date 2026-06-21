import { SectionHead, SpotCard, Reveal } from './ui'

const FRAMES = [
  { step: 'Friday',   tag: 'Kick-off',  title: 'Arrive & form',
    desc: 'Doors open, teams come together, and the opening keynote sets the weekend in motion. The Technical Challenge and Ideathon briefings drop, then night hacking begins.' },
  { step: 'Saturday', tag: 'Build day', title: 'Build & learn',
    desc: 'Parallel workshop tracks, two blocks of industry talks, mentor check-ins, and focused hacking. The day everything starts to take shape.' },
  { step: 'Sunday',   tag: 'Demo day',  title: 'Demo & raise',
    desc: 'Final polish, Ideathon demos, Technical Challenge finals, then VC for a Day — allocate your virtual capital. Awards close the festival.' },
]

const DAYS_DATA = [
  { day: 'Friday', label: 'Kick-off', events: [
    ['17:00', 'Doors open · Team forming'],
    ['17:30', 'Opening keynote — why this weekend matters'],
    ['18:00', 'VIP talks & speeches'],
    ['18:30', 'Technical Challenge opens · Ideathon briefing'],
    ['19:30', 'Dinner · Networking mixer'],
    ['20:30', 'Night hacking — mentors on call'],
  ]},
  { day: 'Saturday', label: 'Build day', events: [
    ['09:00', 'Breakfast · Standups'],
    ['10:30', 'Workshop Track A / B (parallel)'],
    ['12:30', 'Lunch · Sponsor booths'],
    ['14:00', 'Workshop Track C / D (parallel)'],
    ['15:30', 'Industry talks · block 1'],
    ['16:30', 'Focused hacking · mentor check-ins'],
    ['17:30', 'Industry talks · block 2'],
    ['18:30', 'Dinner · Networking mixer'],
    ['20:30', 'Night hacking — mentors on call'],
  ]},
  { day: 'Sunday', label: 'Demo day', events: [
    ['08:00', 'Breakfast · Blockers clinic'],
    ['09:00', 'Workshop Track E / F (parallel)'],
    ['11:00', 'Technical Challenge leaderboard freezes'],
    ['12:00', 'Lunch · Final polishing'],
    ['13:30', 'Ideathon demos — 3 min per team'],
    ['15:00', 'Technical Challenge finalists present'],
    ['16:00', 'VC for a Day — allocation opens'],
    ['17:00', 'Awards · Closing · Group photo'],
    ['18:00', 'After-party (sponsor-hosted)'],
  ]},
]

export default function Weekend() {
  return (
    <section id="weekend" className="section">
      <div className="container">
        <SectionHead
          index="02" eyebrow="The weekend" title="Three days." accent="One trajectory."
          lede="From a messy idea to a funded pitch. Every hour is intentional — here is how it unfolds."
        />

        {/* 3 cinematic frames */}
        <div className="wk-frames" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 80 }}>
          {FRAMES.map((f, i) => (
            <SpotCard key={f.step} style={{ padding: 'clamp(24px, 3vw, 34px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>0{i + 1}</span>
                <span className="chip">{f.tag}</span>
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', letterSpacing: '0.2em',
                color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 8 }}>{f.step}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 12 }}>{f.title}</h3>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.65, fontWeight: 300 }}>{f.desc}</p>
            </SpotCard>
          ))}
        </div>

        {/* detailed timeline */}
        <Reveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', letterSpacing: '0.22em',
            color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 22 }}>
            Tentative schedule · subject to change
          </div>
        </Reveal>
        <div className="wk-frames" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {DAYS_DATA.map((d, di) => (
            <Reveal key={d.day} delay={di * 0.08} className="glass" style={{ padding: 0 }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--hairline-2)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.2em',
                  color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 5 }}>{d.label}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '-0.02em' }}>{d.day}</div>
              </div>
              <div style={{ padding: '8px 24px 22px' }}>
                {d.events.map(([time, title], ei) => (
                  <div key={time + ei} style={{ display: 'flex', gap: 14, padding: '11px 0',
                    borderBottom: ei < d.events.length - 1 ? '1px solid var(--hairline-2)' : 'none' }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--accent)',
                      minWidth: 38, flexShrink: 0, paddingTop: 1 }}>{time}</span>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-2)', lineHeight: 1.5 }}>{title}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p style={{ marginTop: 28, textAlign: 'center', fontFamily: 'var(--mono)',
            fontSize: '0.68rem', color: 'var(--text-4)', letterSpacing: '0.06em' }}>
            ** Friday may include a VIP opening with Dame Wendy Hall and the Mayor of Southampton.
          </p>
        </Reveal>
      </div>
      <style>{`@media (max-width: 820px) { .wk-frames { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
