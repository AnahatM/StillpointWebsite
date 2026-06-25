import type { AnchorHTMLAttributes, ReactNode } from 'react'

/**
 * Shared, sharp-cornered UI primitives used across sections.
 */

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  children: ReactNode
}

const buttonBase =
  'group inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400'

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'bg-teal-400 text-navy-950 hover:bg-teal-300 hover:shadow-[0_0_30px_-4px_rgba(70,199,182,0.6)]',
  secondary:
    'border border-line-strong bg-navy-800/60 text-ink-100 hover:border-teal-400 hover:bg-navy-700/60',
  ghost: 'text-ink-300 hover:text-teal-300',
}

/** Anchor styled as a button (this is a static site — all CTAs are links). */
export function ButtonLink({ variant = 'primary', children, className = '', ...rest }: ButtonLinkProps) {
  return (
    <a className={`${buttonBase} ${buttonVariants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}

/** Mono eyebrow label with an index, e.g. "[ 03 ] PRIVACY". */
export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-teal-400">
      <span className="text-ink-500">[ {index} ]</span>
      {children}
    </span>
  )
}

/** Small pill/chip used for trust signals and tags (sharp corners, hairline). */
export function Chip({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-line bg-navy-800/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-300">
      {icon && <span className="text-teal-400">{icon}</span>}
      {children}
    </span>
  )
}
