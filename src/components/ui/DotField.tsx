import { usePointerGlow } from '../../hooks/usePointerGlow'

/**
 * A decorative dot grid that lights up — the dots near the pointer grow and
 * glow teal, revealed through a radial mask driven by usePointerGlow. Sits
 * behind content; inert for assistive tech and disabled under reduced motion /
 * touch (the mask simply never moves into view).
 */
export function DotField({ className = '', gap = 24 }: { className?: string; gap?: number }) {
  const ref = usePointerGlow<HTMLDivElement>()

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ ['--mx' as string]: '50%', ['--my' as string]: '-300px' }}
    >
      {/* Faint base dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(120,200,188,0.10) 1.3px, transparent 1.5px)',
          backgroundSize: `${gap}px ${gap}px`,
        }}
      />
      {/* Brighter, slightly larger dots revealed around the cursor */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-teal-400) 1.8px, transparent 2.1px)',
          backgroundSize: `${gap}px ${gap}px`,
          WebkitMaskImage: 'radial-gradient(circle 140px at var(--mx) var(--my), #000 0%, rgba(0,0,0,0.4) 45%, transparent 72%)',
          maskImage: 'radial-gradient(circle 140px at var(--mx) var(--my), #000 0%, rgba(0,0,0,0.4) 45%, transparent 72%)',
        }}
      />
    </div>
  )
}
