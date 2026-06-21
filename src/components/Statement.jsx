import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* Cinematic full-bleed statement — one or two lines, massive spacing,
   glowing silhouette behind, lines reveal on scroll. */
export default function Statement({ id, lines, sub, glow = 'rgba(122,162,255,0.12)' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.15, 1.4])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2])

  return (
    <section id={id} ref={ref} style={{
      position: 'relative', padding: 'clamp(120px, 22vh, 240px) var(--pad)',
      textAlign: 'center', overflow: 'hidden',
    }}>
      <motion.div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%',
        width: 'min(900px, 90vw)', height: 'min(900px, 90vw)', borderRadius: '50%',
        background: `radial-gradient(circle, ${glow} 0%, transparent 60%)`,
        scale, opacity: glowOpacity, filter: 'blur(30px)', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto' }}>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(2.2rem, 8vw, 5.6rem)', fontWeight: 600,
              letterSpacing: '-0.045em', lineHeight: 1.02,
              color: line.dim ? 'var(--text-3)' : 'var(--text)',
            }}
          >
            {line.accent ? <span className="aurora-text">{line.text}</span> : line.text}
          </motion.div>
        ))}
        {sub && (
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 1, delay: lines.length * 0.18 + 0.2 }}
            className="lede"
            style={{ margin: '36px auto 0', maxWidth: 540, textAlign: 'center' }}
          >{sub}</motion.p>
        )}
      </div>
    </section>
  )
}
