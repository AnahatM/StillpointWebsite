import { useMemo } from 'react'
import { usePointerGlow } from '../../hooks/usePointerGlow'

const GLYPHS = '01<>/\\[]{}=+*·:.—|⌁⎈◇△▷'

/** Deterministic pseudo-random so the field is stable across renders. */
function buildField(rows: number, cols: number) {
  let seed = 1337
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  const lines: string[] = []
  for (let r = 0; r < rows; r++) {
    let line = ''
    for (let c = 0; c < cols; c++) {
      line += rand() > 0.55 ? GLYPHS[Math.floor(rand() * GLYPHS.length)] : ' '
    }
    lines.push(line)
  }
  return lines.join('\n')
}

/**
 * A decorative monospace character field that sits behind content. It drifts
 * gently and lights up in teal around the pointer (driven by CSS vars from
 * usePointerGlow). Purely decorative and inert for assistive tech.
 */
export function AsciiBackdrop({ className = '' }: { className?: string }) {
  const ref = usePointerGlow<HTMLDivElement>()
  const field = useMemo(() => buildField(42, 220), [])

  const base =
    'pointer-events-none absolute inset-0 select-none whitespace-pre font-mono text-[13px] leading-[1.45] tracking-[0.18em]'

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ ['--mx' as string]: '50%', ['--my' as string]: '-300px' }}
    >
      {/* Faint, slowly drifting base layer */}
      <div className={`${base} animate-ascii-drift text-ink-100/[0.05]`}>{field}</div>

      {/* Bright teal layer, revealed only near the cursor via a radial mask */}
      <div
        className={`${base} text-teal-400/70`}
        style={{
          WebkitMaskImage:
            'radial-gradient(circle 150px at var(--mx) var(--my), #000 0%, rgba(0,0,0,0.35) 45%, transparent 72%)',
          maskImage:
            'radial-gradient(circle 150px at var(--mx) var(--my), #000 0%, rgba(0,0,0,0.35) 45%, transparent 72%)',
        }}
      >
        {field}
      </div>
    </div>
  )
}
