import { motion } from 'framer-motion'

/* Abstract-but-real "Festival OS" control surface used as the hero showpiece.
   Left rail · central build canvas · right context panel. */

const RAIL = ['Build', 'Tracks', 'Mentors', 'Teams', 'Pitch']

const STEPS = [
  { label: 'Team formed',       state: 'done' },
  { label: 'Track selected',    state: 'done' },
  { label: 'Prototype shipping', state: 'live' },
  { label: 'Pitch deck',        state: 'next' },
]

const CONTEXT = [
  ['Goal',    'Ship an AI product in 24h'],
  ['Track',   'Creative Ideathon'],
  ['Capital', '£200k virtual to raise'],
]

function StepRow({ label, state }) {
  const color = state === 'done' ? 'var(--accent)' : state === 'live' ? '#fff' : 'var(--text-4)'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0' }}>
      <span style={{
        width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
        display: 'grid', placeItems: 'center',
        border: `1px solid ${state === 'next' ? 'var(--hairline)' : 'rgba(122,162,255,0.4)'}`,
        background: state === 'done' ? 'rgba(122,162,255,0.16)' : 'transparent',
      }}>
        {state === 'done' && <span style={{ color: 'var(--accent)', fontSize: '0.6rem' }}>✓</span>}
        {state === 'live' && <span className="dot-live" style={{ width: 5, height: 5 }} />}
      </span>
      <span style={{ fontSize: '0.82rem', color, fontWeight: state === 'live' ? 500 : 400 }}>{label}</span>
      {state === 'live' && (
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: '0.58rem',
          letterSpacing: '0.1em', color: 'var(--accent)', opacity: 0.8 }}>NOW</span>
      )}
    </div>
  )
}

export default function FestivalPanel() {
  return (
    <div className="glass" style={{ borderRadius: 22, padding: 0, textAlign: 'left',
      boxShadow: '0 40px 120px -40px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.02)' }}>
      {/* top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 18px',
        borderBottom: '1px solid var(--hairline-2)' }}>
        <span style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => (
            <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.55 }} />
          ))}
        </span>
        <span style={{ marginLeft: 8, fontFamily: 'var(--mono)', fontSize: '0.66rem',
          color: 'var(--text-3)', letterSpacing: '0.05em' }}>hack26 · festival os</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 7 }}
          className="chip chip-accent">
          <span className="dot-live" style={{ width: 5, height: 5 }} /> Live
        </span>
      </div>

      <div className="panel-grid" style={{ display: 'grid', gridTemplateColumns: '120px 1fr 200px' }}>
        {/* left rail */}
        <div className="panel-rail" style={{ borderRight: '1px solid var(--hairline-2)', padding: '16px 12px',
          display: 'flex', flexDirection: 'column', gap: 4 }}>
          {RAIL.map((r, i) => (
            <div key={r} style={{
              fontSize: '0.76rem', padding: '8px 11px', borderRadius: 9,
              color: i === 0 ? 'var(--text)' : 'var(--text-3)',
              background: i === 0 ? 'rgba(122,162,255,0.1)' : 'transparent',
              border: `1px solid ${i === 0 ? 'rgba(122,162,255,0.2)' : 'transparent'}`,
              fontWeight: i === 0 ? 500 : 400,
            }}>{r}</div>
          ))}
        </div>

        {/* central canvas */}
        <div style={{ padding: '20px 22px' }}>
          {/* command input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px',
            borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--hairline)',
            marginBottom: 22 }}>
            <span style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: '0.8rem' }}>›</span>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-2)' }}>What will you ship this weekend?</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.1, repeat: Infinity }}
              style={{ width: 1.5, height: 15, background: 'var(--accent)', marginLeft: -4 }} />
          </div>

          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.18em',
            color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 4 }}>Build timeline</div>
          {STEPS.map(s => <StepRow key={s.label} {...s} />)}

          {/* progress bar */}
          <div style={{ marginTop: 14, height: 4, borderRadius: 100, background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: '0%' }} whileInView={{ width: '64%' }} viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '100%', borderRadius: 100,
                background: 'linear-gradient(90deg, var(--accent-deep), var(--accent))' }} />
          </div>
        </div>

        {/* right context */}
        <div className="panel-context" style={{ borderLeft: '1px solid var(--hairline-2)', padding: '20px 16px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.18em',
            color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 14 }}>Context</div>
          {CONTEXT.map(([k, v]) => (
            <div key={k} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-3)', marginBottom: 3 }}>{k}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text)', lineHeight: 1.4 }}>{v}</div>
            </div>
          ))}
          <div style={{ marginTop: 22, padding: '12px', borderRadius: 11,
            background: 'rgba(122,162,255,0.07)', border: '1px solid rgba(122,162,255,0.18)' }}>
            <div style={{ fontSize: '0.66rem', color: 'var(--accent)', fontWeight: 500, marginBottom: 3 }}>Next action</div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-2)' }}>Demo · 3 min · Sunday 13:30</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .panel-grid { grid-template-columns: 1fr !important; }
          .panel-rail { flex-direction: row !important; flex-wrap: wrap; border-right: none !important;
            border-bottom: 1px solid var(--hairline-2); }
          .panel-context { border-left: none !important; border-top: 1px solid var(--hairline-2); }
        }
      `}</style>
    </div>
  )
}
