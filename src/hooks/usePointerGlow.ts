import { useEffect, useRef } from 'react'

/**
 * Tracks the pointer relative to an element and writes its position to CSS
 * custom properties (`--mx`, `--my` in px; `--mxp`, `--myp` as 0–1 fractions).
 * It also toggles a `data-glow="on"` attribute while the pointer is over the
 * element's box, so effects can fade in/out.
 *
 * Listens on `window` (not the element) so it keeps working even when the
 * target is `pointer-events-none` — which the glow/backdrop layers are. Updates
 * are throttled to one animation frame and never trigger a React re-render.
 *
 * Disables itself for reduced-motion users and on touch-only devices.
 */
export function usePointerGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduce || !fine) return

    let frame = 0
    let clientX = 0
    let clientY = 0

    const apply = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height
      node.style.setProperty('--mx', `${x}px`)
      node.style.setProperty('--my', `${y}px`)
      node.style.setProperty('--mxp', `${(x / rect.width).toFixed(3)}`)
      node.style.setProperty('--myp', `${(y / rect.height).toFixed(3)}`)
      if (inside) node.setAttribute('data-glow', 'on')
      else node.removeAttribute('data-glow')
    }

    const onMove = (e: PointerEvent) => {
      clientX = e.clientX
      clientY = e.clientY
      if (!frame) frame = requestAnimationFrame(apply)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return ref
}
