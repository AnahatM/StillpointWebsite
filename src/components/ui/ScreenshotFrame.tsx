import type { ReactNode } from 'react'

interface ScreenshotFrameProps {
  /** Label shown on the placeholder, e.g. "Dashboard". */
  label: string
  /**
   * Path to the real screenshot once available (drop files in /public/screenshots).
   * When provided, the image replaces the placeholder automatically.
   */
  src?: string
  /** Descriptive alt text for the screenshot (required for accessibility). */
  alt?: string
  /** Aspect ratio of the frame, e.g. "16 / 10". */
  ratio?: string
  /** Optional overlay (used by the hero to layer the skeleton animation). */
  children?: ReactNode
  /** Load eagerly instead of lazily — use for above-the-fold images (the hero). */
  eager?: boolean
  className?: string
}

/**
 * A framed app screenshot with viewfinder corner brackets and a faux window
 * chrome bar. Until a real `src` is supplied it renders a clearly-labelled
 * placeholder so the layout is final before assets arrive.
 */
export function ScreenshotFrame({
  label,
  src,
  alt,
  ratio = '16 / 10',
  children,
  eager = false,
  className = '',
}: ScreenshotFrameProps) {
  return (
    <figure
      className={`viewfinder group relative border border-line-strong bg-navy-850 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ${className}`}
    >
      {/* Faux frameless-window chrome — mirrors the app's custom titlebar */}
      <div className="flex items-center gap-2 border-b border-line bg-navy-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 bg-navy-600" aria-hidden="true" />
        <span className="h-2.5 w-2.5 bg-navy-600" aria-hidden="true" />
        <span className="h-2.5 w-2.5 bg-teal-500" aria-hidden="true" />
        <span className="ml-2 font-mono text-[11px] tracking-wider text-ink-500">
          stillpoint — {label.toLowerCase()}
        </span>
      </div>

      <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
        {src ? (
          <img
            src={src}
            alt={alt ?? `Stillpoint ${label} screen`}
            className="h-full w-full object-cover"
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        ) : (
          <div className="bg-grid flex h-full w-full flex-col items-center justify-center gap-3 bg-navy-850 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-teal-400">
              screenshot
            </span>
            <span className="text-lg font-semibold text-ink-300">{label}</span>
            <span className="font-mono text-[11px] text-ink-500">
              drop image in /public/screenshots
            </span>
          </div>
        )}
        {children}
      </div>
    </figure>
  )
}
