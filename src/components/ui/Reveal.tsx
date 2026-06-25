import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in milliseconds. */
  delay?: number
  /** Render as a different element (defaults to div). */
  as?: ElementType
  className?: string
}

/**
 * Wraps children in a scroll-triggered fade-up. Honors prefers-reduced-motion
 * via the CSS in index.css.
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: RevealProps) {
  const { ref, isVisible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
