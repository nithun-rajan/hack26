import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/* ---- Scroll reveal ----------------------------------------- */
export function Reveal({ children, delay = 0, y = 28, className, style, as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  )
}

/* ---- Section heading --------------------------------------- */
export function SectionHead({ index, eyebrow, title, accent, lede, center }) {
  return (
    <Reveal
      className="section-head"
      style={center ? { marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' } : undefined}
    >
      <span className="eyebrow">{index ? `${index} — ` : ''}{eyebrow}</span>
      <h2 className="section-title">
        {title} {accent && <span className="aurora-text">{accent}</span>}
      </h2>
      {lede && <p className="lede" style={center ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}>{lede}</p>}
    </Reveal>
  )
}

/* ---- Glass card with cursor-follow glow -------------------- */
export function SpotCard({ children, className = '', style, hoverLift = true, ...rest }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      className={`glass spot ${className}`}
      style={style}
      whileHover={hoverLift ? { y: -5 } : undefined}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* ---- Count-up on view -------------------------------------- */
export function useCountUp(target, duration = 1900) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return
      done.current = true
      const start = performance.now()
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - t, 4)
        setVal(target * ease)
        if (t < 1) requestAnimationFrame(step)
        else setVal(target)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.4 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [target, duration])
  return { val, ref }
}
