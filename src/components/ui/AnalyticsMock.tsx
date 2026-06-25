import { useReveal } from '../../hooks/useReveal'

/** 7-day "good posture %" series for the illustrative trend chart. */
const SERIES = [58, 64, 61, 72, 69, 81, 88]

function buildPath(data: number[], w: number, h: number, pad = 3) {
  const max = 100
  const stepX = (w - pad * 2) / (data.length - 1)
  return data
    .map((v, i) => {
      const x = pad + i * stepX
      const y = h - pad - (v / max) * (h - pad * 2)
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

/**
 * A fabricated "Analytics" panel rendered in the same framed, instrument style
 * as the posture-monitor mock — used in place of a real screenshot until one is
 * available. Purely illustrative.
 */
export function AnalyticsMock() {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  const w = 100
  const h = 46
  const line = buildPath(SERIES, w, h)
  const area = `${line} L${w - 3},${h - 3} L3,${h - 3} Z`

  const stats = [
    { label: 'Good posture', value: '88%', accent: true },
    { label: 'Alerts today', value: '4' },
    { label: 'Corrections', value: '12' },
    { label: 'Focus sessions', value: '5' },
  ]

  return (
    <figure className="viewfinder relative border border-line-strong bg-navy-850 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-navy-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 bg-navy-600" aria-hidden="true" />
        <span className="h-2.5 w-2.5 bg-navy-600" aria-hidden="true" />
        <span className="h-2.5 w-2.5 bg-teal-500" aria-hidden="true" />
        <span className="ml-2 font-mono text-[11px] tracking-wider text-ink-500">stillpoint — analytics</span>
      </div>

      <div ref={ref} className="relative grid gap-px bg-line sm:grid-cols-[1.5fr_1fr]" style={{ aspectRatio: '16 / 10' }}>
        {/* Trend chart */}
        <div className="relative flex flex-col bg-navy-900 p-4">
          <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">good posture %</span>
            <span className="border border-line bg-navy-800 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-teal-300">
              7-day ▾
            </span>
          </div>

          <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="relative mt-3 h-full w-full">
            {[0.25, 0.5, 0.75].map((g) => (
              <line key={g} x1="3" y1={3 + g * (h - 6)} x2={w - 3} y2={3 + g * (h - 6)} stroke="var(--color-line)" strokeWidth="0.3" />
            ))}
            <path d={area} fill="url(#agrad)" opacity={isVisible ? 1 : 0} style={{ transition: 'opacity 1s ease 0.3s' }} />
            <path
              d={line}
              fill="none"
              stroke="var(--color-teal-400)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={isVisible ? 0 : 1}
              style={{ transition: 'stroke-dashoffset 1.4s var(--ease-out-expo)' }}
            />
            <defs>
              <linearGradient id="agrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-teal-400)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--color-teal-400)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative mt-3 flex gap-1.5">
            {['Good %', 'Focus', 'Streak'].map((t, i) => (
              <span
                key={t}
                className={`border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                  i === 0 ? 'border-teal-400/40 bg-teal-400/10 text-teal-300' : 'border-line bg-navy-800 text-ink-500'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 gap-px bg-line">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col justify-center bg-navy-850 p-3">
              <span className={`text-2xl font-extrabold ${s.accent ? 'text-teal-300' : 'text-ink-100'}`}>{s.value}</span>
              <span className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-ink-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-line bg-navy-800 px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500">illustrative · local-only</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300">⤓ export json</span>
      </div>
    </figure>
  )
}
