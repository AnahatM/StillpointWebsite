import { usePointerGlow } from '../../hooks/usePointerGlow'

/**
 * A soft teal radial light that follows the pointer across its parent area.
 * Absolutely positioned — drop it inside a `relative` container. Fades in only
 * while the pointer is over the region (and disables under reduced-motion).
 */
export function CursorGlow({ className = '' }: { className?: string }) {
  const ref = usePointerGlow<HTMLDivElement>()

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 data-[glow=on]:opacity-100 ${className}`}
      style={{
        ['--mx' as string]: '50%',
        ['--my' as string]: '50%',
        background:
          'radial-gradient(360px circle at var(--mx) var(--my), rgba(70,199,182,0.14), transparent 65%)',
      }}
    />
  )
}
