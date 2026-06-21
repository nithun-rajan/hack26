import { SectionHead, SpotCard } from './ui'

/* Minimal abstract visuals (no icons/stock) */
function Viz({ kind }) {
  const stroke = 'rgba(122,162,255,0.55)'
  const faint = 'rgba(122,162,255,0.18)'
  if (kind === 'graph') return (
    <svg viewBox="0 0 200 90" width="100%" height="90" fill="none">
      <line x1="40" y1="45" x2="100" y2="22" stroke={faint} /><line x1="40" y1="45" x2="100" y2="68" stroke={faint} />
      <line x1="100" y1="22" x2="160" y2="38" stroke={faint} /><line x1="100" y1="68" x2="160" y2="38" stroke={faint} />
      <line x1="100" y1="22" x2="100" y2="68" stroke={faint} />
      {[[40,45],[100,22],[100,68],[160,38]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={i===1?5:3.5} fill="#0b0d10" stroke={stroke} />
      ))}
      <circle cx="100" cy="22" r="9" stroke={faint} />
    </svg>
  )
  if (kind === 'flow') return (
    <svg viewBox="0 0 200 90" width="100%" height="90" fill="none">
      {[30,80,130].map((x,i)=>(
        <g key={i}>
          <rect x={x} y="30" width="40" height="30" rx="6" stroke={i===1?stroke:faint} />
          {i<2 && <line x1={x+40} y1="45" x2={x+50} y2="45" stroke={faint} />}
          <line x1={x+8} y1="42" x2={x+24} y2="42" stroke={i===1?stroke:faint} />
          <line x1={x+8} y1="49" x2={x+30} y2="49" stroke={faint} />
        </g>
      ))}
    </svg>
  )
  if (kind === 'alloc') return (
    <svg viewBox="0 0 200 90" width="100%" height="90" fill="none">
      {[[40,60],[80,40],[120,52],[160,28]].map(([x,h],i)=>(
        <rect key={i} x={x} y={80-h} width="22" height={h} rx="4"
          fill={i===3?'rgba(122,162,255,0.18)':'transparent'} stroke={i===3?stroke:faint} />
      ))}
      <line x1="30" y1="80" x2="186" y2="80" stroke={faint} />
    </svg>
  )
  if (kind === 'work') return (
    <svg viewBox="0 0 200 90" width="100%" height="90" fill="none">
      <rect x="40" y="22" width="120" height="46" rx="8" stroke={faint} />
      <circle cx="55" cy="32" r="3" fill={stroke} /><circle cx="65" cy="32" r="3" fill={faint} />
      {[40,52].map((y,i)=>(<line key={i} x1="55" y1={y} x2={i?120:140} y2={y} stroke={i?faint:stroke} />))}
      <line x1="55" y1="58" x2="100" y2="58" stroke={faint} />
    </svg>
  )
  return (
    <svg viewBox="0 0 200 90" width="100%" height="90" fill="none">
      {[0,1,2].map(i=>(
        <line key={i} x1="40" y1={28+i*17} x2={150-i*30} y2={28+i*17} stroke={i===0?stroke:faint} />
      ))}
      <circle cx="160" cy="28" r="4" stroke={stroke} />
    </svg>
  )
}

const PILLARS = [
  { n: '01', kind: 'graph', title: 'Technical Challenge',
    desc: 'A classical-ML competition with a held-out test set and live leaderboard. Pure feature-engineering craft and statistical rigour — no LLMs, no foundation models.',
    tags: ['Teams 1–4', '48 hours', 'Kaggle-style', 'Code review counts'], big: true },
  { n: '02', kind: 'flow', title: 'Creative Ideathon',
    desc: 'Open-ended vibe-coding. Pick a problem, ship an AI-powered product in 24 hours. Judged on usefulness and delight — any stack, any tool.',
    tags: ['Cursor', 'Claude Code', 'v0', '3-min demo'], big: true },
  { n: '03', kind: 'alloc', title: 'VC for a Day',
    desc: 'Every attendee is handed £200k in virtual capital to allocate across pitches. The team that raises the most wins a real prize — cash and mentorship.',
    tags: ['£200k virtual', 'Peer voting', 'Real prize'], big: true },
  { n: '04', kind: 'work', title: 'Workshops',
    desc: 'Hands-on sessions from practitioners — LangChain, PyTorch Lightning, Modal, LoRA fine-tuning, evals and safety.',
    tags: ['GenAI apps', 'Fine-tuning', 'Evals & safety'] },
  { n: '05', kind: 'talks', title: 'Talks',
    desc: 'Short, high-signal talks from industry and research. 20 minutes plus Q&A. No slide padding.',
    tags: ['Building AI products', 'Economics of AI', 'How VCs evaluate'] },
]

function Card({ p }) {
  return (
    <SpotCard style={{ padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--text-3)' }}>{p.n}</span>
      </div>
      <div style={{ marginBottom: 22, opacity: 0.9 }}><Viz kind={p.kind} /></div>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{p.title}</h3>
      <p style={{ color: 'var(--text-2)', fontSize: '0.92rem', lineHeight: 1.65, fontWeight: 300, marginBottom: 20, flex: 1 }}>{p.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
    </SpotCard>
  )
}

export default function Format() {
  const big = PILLARS.filter(p => p.big)
  const small = PILLARS.filter(p => !p.big)
  return (
    <section id="format" className="section">
      <div className="container">
        <SectionHead
          index="01" eyebrow="The format" title="Five strands." accent="One weekend."
          lede="Every minute of the festival maps to one of these. Designed to replace a year of theory with a weekend of shipping."
        />
        <div className="fmt-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 18 }}>
          {big.map(p => <Card key={p.n} p={p} />)}
        </div>
        <div className="fmt-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {small.map(p => <Card key={p.n} p={p} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .fmt-grid-3 { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 620px) { .fmt-grid-3, .fmt-grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
