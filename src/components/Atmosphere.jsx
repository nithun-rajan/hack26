import { useEffect, useRef } from 'react'

/* Fixed cinematic backdrop: aurora light field + grid + grain,
   plus a cursor-following glow that tracks the pointer globally. */
export default function Atmosphere() {
  const glowRef = useRef(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    let raf
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        el.style.opacity = '1'
      })
    }
    const leave = () => { el.style.opacity = '0' }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseout', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseout', leave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="aurora-field" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="gridlines" aria-hidden />
      <div className="cursor-glow" ref={glowRef} style={{ opacity: 0 }} aria-hidden />
      <div className="grain" aria-hidden />
    </>
  )
}
