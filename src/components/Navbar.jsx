import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Format',   href: '#format'   },
  { label: 'Weekend',  href: '#weekend'  },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ',      href: '#faq'      },
]

function Wordmark() {
  return (
    <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 11 }}>
      <span style={{
        width: 26, height: 26, borderRadius: 8,
        display: 'grid', placeItems: 'center',
        background: 'linear-gradient(150deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03))',
        border: '1px solid var(--hairline)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #cdd9ff, var(--accent))',
          boxShadow: '0 0 10px var(--accent-glow)' }} />
      </span>
      <span style={{ fontSize: '0.92rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text)' }}>
        HACK<span style={{ color: 'var(--accent)' }}>//26</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          height: 64, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 var(--pad)',
          background: scrolled ? 'rgba(6,7,11,0.6)' : 'transparent',
          backdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--hairline-2)' : 'transparent'}`,
          transition: 'background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease',
        }}
      >
        <Wordmark />

        <div className="hide-mobile" style={{ alignItems: 'center', gap: 4 }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              textDecoration: 'none', fontSize: '0.82rem', fontWeight: 450,
              color: 'var(--text-2)', padding: '8px 14px', borderRadius: 100,
              transition: 'color 0.25s ease',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
            >{l.label}</a>
          ))}
        </div>

        <div className="hide-mobile">
          <a href="#access" className="btn btn-primary btn-sm">Request Access</a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          className="show-mobile"
          aria-label="Menu"
          style={{ background: 'none', border: 'none', padding: 6, cursor: 'pointer' }}
        >
          <div style={{ width: 22, height: 1.5, background: 'var(--text)', marginBottom: 6, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: 22, height: 1.5, background: 'var(--text)', marginBottom: 6, opacity: open ? 0 : 1, transition: 'opacity 0.3s' }} />
          <div style={{ width: 22, height: 1.5, background: 'var(--text)', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(3,3,5,0.94)', backdropFilter: 'blur(30px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{ textDecoration: 'none', fontSize: '2rem', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.03em', padding: '8px 0' }}
              >{l.label}</motion.a>
            ))}
            <motion.a
              href="#access" onClick={() => setOpen(false)} className="btn btn-primary"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: LINKS.length * 0.06 }}
              style={{ marginTop: 24 }}
            >Request Access</motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
