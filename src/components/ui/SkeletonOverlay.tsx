/**
 * Animated pose-landmark overlay — the signature visual that represents
 * Stillpoint's on-device posture detection. Pure SVG/CSS: pulsing landmark
 * nodes, connecting "bones", a sweeping scan line and a teal vignette. Purely
 * illustrative (no real webcam) and decorative for assistive tech.
 */
export function SkeletonOverlay({ className = '' }: { className?: string }) {
  // Landmark coordinates in a 0–100 viewBox (head, shoulders, elbows, hips).
  const nodes = [
    { cx: 50, cy: 22, r: 3.4 }, // head
    { cx: 35, cy: 40, r: 2.6 }, // left shoulder
    { cx: 65, cy: 40, r: 2.6 }, // right shoulder
    { cx: 28, cy: 60, r: 2.2 }, // left elbow
    { cx: 72, cy: 60, r: 2.2 }, // right elbow
    { cx: 42, cy: 72, r: 2.2 }, // left hip
    { cx: 58, cy: 72, r: 2.2 }, // right hip
  ]

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {/* Scan line */}
      <div
        className="absolute inset-x-0 top-0 h-16"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(70,199,182,0.22), transparent)',
          animation: 'scan 4.5s var(--ease-out-expo, ease) infinite',
        }}
      />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {/* Bones */}
        <g stroke="#46c7b6" strokeWidth="0.7" opacity="0.85" fill="none">
          <line x1="50" y1="22" x2="35" y2="40" />
          <line x1="50" y1="22" x2="65" y2="40" />
          <line x1="35" y1="40" x2="65" y2="40" />
          <line x1="35" y1="40" x2="28" y2="60" />
          <line x1="65" y1="40" x2="72" y2="60" />
          <line x1="35" y1="40" x2="42" y2="72" />
          <line x1="65" y1="40" x2="58" y2="72" />
          <line x1="42" y1="72" x2="58" y2="72" />
        </g>

        {/* Plumb line from head — the "still point" reference */}
        <line x1="50" y1="22" x2="50" y2="78" stroke="#7fe0d3" strokeWidth="0.4" strokeDasharray="1.5 1.5" opacity="0.5" />

        {/* Landmark nodes */}
        {nodes.map((n, i) => (
          <g key={i} style={{ animation: `pulse-node ${2.4 + i * 0.25}s ease-in-out infinite`, transformOrigin: `${n.cx}px ${n.cy}px` }}>
            <circle cx={n.cx} cy={n.cy} r={n.r + 1.6} fill="#46c7b6" opacity="0.18" />
            <circle cx={n.cx} cy={n.cy} r={n.r} fill="#46c7b6" />
          </g>
        ))}
      </svg>

      {/* Tracking HUD chips */}
      <div className="absolute left-3 top-3 flex flex-col gap-1.5">
        <span className="border border-teal-400/40 bg-navy-950/70 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-teal-300">
          ● tracking
        </span>
      </div>
      <div className="absolute bottom-3 right-3 border border-line bg-navy-950/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-ink-400">
        on-device · 0 uploads
      </div>
    </div>
  )
}
