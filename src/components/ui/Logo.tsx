interface LogoProps {
  className?: string
  /** Hide the wordmark, show only the mark. */
  markOnly?: boolean
}

/** Stillpoint wordmark: viewfinder mark + centered "stillpoint" node. */
export function Logo({ className = '', markOnly = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-7 w-7 shrink-0" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
          <path d="M12 22 V12 H22" />
          <path d="M42 12 H52 V22" />
          <path d="M52 42 V52 H42" />
          <path d="M22 52 H12 V42" />
        </g>
        <line x1="32" y1="20" x2="32" y2="44" stroke="currentColor" strokeWidth="3" opacity="0.55" />
        <circle cx="32" cy="32" r="6" fill="currentColor" stroke="none" />
      </svg>
      {!markOnly && (
        <span className="text-[1.05rem] font-extrabold tracking-tight text-ink-100">
          Stillpoint
        </span>
      )}
    </span>
  )
}
