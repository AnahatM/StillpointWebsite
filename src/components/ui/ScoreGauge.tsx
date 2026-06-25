import { useReveal } from '../../hooks/useReveal'

/**
 * Animated 0–100 posture-score ring. Sweeps from 0 to `value` the first time it
 * scrolls into view. Sharp, instrument-like styling.
 */
export function ScoreGauge({ value = 92, size = 132 }: { value?: number; size?: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  const stroke = 8
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const offset = isVisible ? c * (1 - value / 100) : c

  return (
    <div ref={ref} className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-navy-600)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-teal-400)"
          strokeWidth={stroke}
          strokeLinecap="butt"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.4s var(--ease-out-expo)' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-extrabold text-ink-100">{value}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">score</span>
      </div>
    </div>
  )
}
