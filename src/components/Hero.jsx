import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import FestivalPanel from './FestivalPanel'

const TARGET = new Date('2026-10-16T17:00:00')

function useCountdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const tick = () => {
      const d = TARGET - Date.now()
      if (d <= 0) return setT({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setT({
        days:    Math.floor(d / 86400000),
        hours:   Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000) / 60000),
        seconds: Math.floor((d % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
})

function CountUnit({ value, label }) {
  return (
    <div style={{ textAlign: 'center', minWidth: 54 }}>
      <div style={{
        fontSize: 'clamp(1.5rem, 4vw, 2.3rem)', fontWeight: 600,
        letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--text)',
        fontVariantNumeric: 'tabular-nums',
      }}>{String(value).padStart(2, '0')}</div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.28em',
        color: 'var(--text-3)', textTransform: 'uppercase', marginTop: 9 }}>{label}</div>
    </div>
  )
}

export default function Hero() {
  const t = useCountdown()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, 140])
  const y = useSpring(yRaw, { stiffness: 70, damping: 22 })
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="top" ref={ref} style={{
      position: 'relative', minHeight: '100vh', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '120px var(--pad) 80px', overflow: 'hidden',
    }}>
      {/* spotlight behind hero */}
      <div aria-hidden style={{
        position: 'absolute', top: '30%', left: '50%', width: 1000, height: 1000,
        transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(122,162,255,0.10) 0%, transparent 60%)',
        filter: 'blur(10px)', zIndex: 0,
      }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1, width: '100%', maxWidth: 980 }}>
        <motion.div {...fade(0.25)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 38,
          padding: '7px 16px', borderRadius: 100,
          background: 'rgba(255,255,255,0.04)', border: '1px solid var(--hairline)',
          backdropFilter: 'blur(12px)',
        }}>
          <span className="dot-live" />
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', letterSpacing: '0.22em',
            color: 'var(--text-2)', textTransform: 'uppercase' }}>
            Early access · 16–18 Oct 2026 · Southampton
          </span>
        </motion.div>

        <motion.p {...fade(0.4)} className="eyebrow" style={{ marginBottom: 26 }}>
          University of Southampton AI Society
        </motion.p>

        <motion.h1 {...fade(0.5)} style={{
          fontSize: 'clamp(2.6rem, 8.5vw, 6.4rem)', fontWeight: 600,
          letterSpacing: '-0.045em', lineHeight: 0.98, color: 'var(--text)',
          margin: '0 auto 28px', maxWidth: 16 + 'ch',
        }}>
          A weekend that feels<br />
          <span className="aurora-text">impossibly alive.</span>
        </motion.h1>

        <motion.p {...fade(0.62)} className="lede" style={{
          margin: '0 auto', maxWidth: 600, fontSize: 'clamp(1.02rem, 1.7vw, 1.22rem)',
        }}>
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}>HACK//26</strong> is a 2.5-day applied
          AI festival — part hackathon, part ideathon, part venture-capital
          simulation. From a messy idea to a funded pitch, without the friction.
        </motion.p>

        <motion.div {...fade(0.78)} style={{
          display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', margin: '40px 0 52px',
        }}>
          <a href="#access" className="btn btn-primary">Request Access</a>
          <a href="#weekend" className="btn btn-ghost">
            <span>See the weekend</span>
            <span aria-hidden>↓</span>
          </a>
        </motion.div>

        {/* countdown */}
        <motion.div {...fade(0.9)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 'clamp(8px, 3vw, 22px)',
          padding: '18px clamp(18px, 4vw, 34px)', borderRadius: 18,
          background: 'rgba(255,255,255,0.03)', border: '1px solid var(--hairline-2)',
          backdropFilter: 'blur(16px)', marginBottom: 8,
        }}>
          <CountUnit value={t.days} label="Days" />
          <span style={{ color: 'var(--text-4)', fontWeight: 300, fontSize: '1.4rem' }}>:</span>
          <CountUnit value={t.hours} label="Hrs" />
          <span style={{ color: 'var(--text-4)', fontWeight: 300, fontSize: '1.4rem' }}>:</span>
          <CountUnit value={t.minutes} label="Min" />
          <span style={{ color: 'var(--text-4)', fontWeight: 300, fontSize: '1.4rem' }}>:</span>
          <CountUnit value={t.seconds} label="Sec" />
        </motion.div>
      </motion.div>

      {/* floating glass festival panel */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 940, marginTop: 56 }}
      >
        <div style={{ animation: 'floaty 8s ease-in-out infinite' }}>
          <FestivalPanel />
        </div>
        {/* soft reflection */}
        <div aria-hidden style={{
          height: 120, marginTop: -1,
          background: 'linear-gradient(180deg, rgba(122,162,255,0.06), transparent 70%)',
          filter: 'blur(20px)', transform: 'scaleY(-1)', opacity: 0.5,
          maskImage: 'linear-gradient(180deg, #000, transparent)',
        }} />
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)',
          width: 1, height: 46, overflow: 'hidden', background: 'rgba(255,255,255,0.08)' }}
      >
        <div style={{ width: '100%', height: 14, background: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent)', animation: 'scrollcue 2.4s ease-in-out infinite' }} />
      </motion.div>
    </section>
  )
}
