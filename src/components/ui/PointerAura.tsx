import { useEffect, useRef } from 'react'

/**
 * A site-wide light that follows the cursor everywhere: a soft teal glow plus a
 * small precise dot, blended with `screen` so it only lightens. Mounted once at
 * the app root. Listens on `window`, updates transforms in an animation frame,
 * and never re-renders React. Disabled for reduced-motion and touch-only users.
 */
export function PointerAura() {
  const wrap = useRef<HTMLDivElement>(null)
  const glow = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduce || !fine) return

    let frame = 0
    let x = 0
    let y = 0
    let shown = false

    const apply = () => {
      frame = 0
      const t = `translate3d(${x}px, ${y}px, 0)`
      if (glow.current) glow.current.style.transform = t
      if (dot.current) dot.current.style.transform = t
      if (!shown && wrap.current) {
        wrap.current.style.opacity = '1'
        shown = true
      }
    }

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (!frame) frame = requestAnimationFrame(apply)
    }

    const onLeave = () => {
      if (wrap.current) wrap.current.style.opacity = '0'
      shown = false
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={wrap}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[55] opacity-0 mix-blend-screen transition-opacity duration-300"
    >
      <div
        ref={glow}
        className="absolute left-0 top-0 -ml-[260px] -mt-[260px] h-[520px] w-[520px]"
        style={{ background: 'radial-gradient(circle, rgba(70,199,182,0.10), transparent 60%)' }}
      />
      <div ref={dot} className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 bg-teal-300/90" />
    </div>
  )
}
