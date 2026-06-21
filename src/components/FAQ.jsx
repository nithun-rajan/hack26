import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHead } from './ui'

const FAQS = [
  { q: 'Who can participate?', a: 'Any student from a UK university or college. All skill levels are welcome — from complete beginners to seasoned ML engineers. If you can open a terminal, you belong here.' },
  { q: 'Do I need to come with a team?', a: 'No. Teams can be formed on Friday night. Teams are 1–4 people for the Technical Challenge and up to 5 for the Creative Ideathon. Solo entry is fine — you’ll meet your team at the kick-off.' },
  { q: 'What is “VC for a Day”?', a: 'Every attendee is handed £200k in virtual capital to allocate across Ideathon pitches after the demos. The team that raises the most virtual investment wins the real prize — cash plus mentorship.' },
  { q: 'Are there prizes?', a: 'Yes — prizes for the Technical Challenge top three, the Creative Ideathon winner (decided by VC for a Day crowd voting), and special category awards from our industry partners.' },
  { q: 'What should I bring?', a: 'Your laptop, charger, student ID, and your best ideas. Food and drinks are provided throughout. If you plan to stay overnight, accommodation info is shared with registered participants.' },
  { q: 'Is it really free?', a: 'Completely free to attend. Food, workshops, talks, compute credits and all activities are covered by our sponsors. We want zero financial barriers to participation.' },
  { q: 'I’m not from Southampton — can I still come?', a: 'Absolutely. We’re targeting 200+ participants from Russell Group, Imperial and Oxbridge universities across the UK. Travel bursaries may be available — register early to stay updated.' },
  { q: 'Technical Challenge vs the Ideathon?', a: 'The Technical Challenge is a classical-ML competition — no LLMs, no foundation models, pure feature engineering and modelling craft. The Creative Ideathon is a vibe-coding free-for-all where you ship any AI-powered product with any tools.' },
]

function Item({ q, a, i }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }}
      className="glass" style={{ borderRadius: 16, overflow: 'hidden' }}
    >
      <button onClick={() => setOpen(v => !v)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        padding: '20px 24px', color: 'var(--text)', fontFamily: 'var(--font)',
        fontSize: '0.98rem', fontWeight: 500, letterSpacing: '-0.01em',
      }}>
        <span>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}
          style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', display: 'grid', placeItems: 'center',
            border: '1px solid var(--hairline)', color: 'var(--accent)', fontSize: '1rem', lineHeight: 1,
            background: open ? 'rgba(122,162,255,0.12)' : 'transparent' }}>+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}>
            <p style={{ padding: '0 24px 22px', color: 'var(--text-2)', fontSize: '0.92rem',
              lineHeight: 1.7, fontWeight: 300 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <SectionHead index="08" eyebrow="Questions" title="Everything you" accent="need to know." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((f, i) => <Item key={f.q} {...f} i={i} />)}
        </div>
      </div>
    </section>
  )
}
