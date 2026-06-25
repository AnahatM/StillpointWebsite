import type { SVGProps } from 'react'

/**
 * Inline icon set. All icons use `currentColor`, a 1.6 stroke and square caps to
 * match Stillpoint's sharp, technical look. Size via `className` (defaults 24px).
 */
type IconProps = SVGProps<SVGSVGElement>

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

/** Posture / spine alignment */
export const PostureIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="5" r="2.4" />
    <path d="M12 7.4V14" />
    <path d="M7 11h10" />
    <path d="M12 14l-3 6" />
    <path d="M12 14l3 6" />
  </Base>
)

/** Focus / timer */
export const TimerIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 2.5h6" />
    <circle cx="12" cy="14" r="7.5" />
    <path d="M12 14V9.5" />
    <path d="M18 6l1.5-1.5" />
  </Base>
)

/** Wellness / heartbeat */
export const PulseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 12h4l2-5 3 10 2-7 1.5 2H21" />
  </Base>
)

/** Analytics / bar chart */
export const ChartIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 3v18h17" />
    <path d="M8 16v-4" />
    <path d="M13 16V8" />
    <path d="M18 16v-7" />
  </Base>
)

/** Themes / palette */
export const PaletteIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" />
    <rect x="13.5" y="3.5" width="7" height="7" />
    <rect x="3.5" y="13.5" width="7" height="7" />
    <rect x="13.5" y="13.5" width="7" height="7" />
  </Base>
)

/** Configurable / sliders */
export const SlidersIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 6h10" />
    <path d="M18 6h2" />
    <circle cx="16" cy="6" r="2" />
    <path d="M4 14h2" />
    <path d="M10 14h10" />
    <circle cx="8" cy="14" r="2" />
  </Base>
)

/** Privacy / shield-lock */
export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2.5l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6l8-3z" />
    <path d="M9.5 12h5v4h-5z" />
    <path d="M10.5 12v-1.5a1.5 1.5 0 0 1 3 0V12" />
  </Base>
)

/** Calibrate / target */
export const TargetIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
  </Base>
)

/** Monitor / eye-scan */
export const ScanIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 8V4h4M21 8V4h-4M3 16v4h4M21 16v4h-4" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M5 12h2M17 12h2" />
  </Base>
)

/** Coach / sparkle nudge */
export const SparkIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
  </Base>
)

/** Bell / reminder */
export const BellIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </Base>
)

/** Note / sticky */
export const NoteIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4h16v11l-5 5H4z" />
    <path d="M15 20v-5h5" />
  </Base>
)

/** Check */
export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12.5l5 5L20 6" />
  </Base>
)

/** Lock (no-cloud) */
export const NoCloudIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 3l18 18" />
    <path d="M7 18h9a4 4 0 0 0 .9-7.9A6 6 0 0 0 7.2 7.4" />
    <path d="M5.5 9.5A4 4 0 0 0 6 18" />
  </Base>
)

/** Arrow-right */
export const ArrowIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </Base>
)

/** Download */
export const DownloadIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v11" />
    <path d="M7 10l5 5 5-5" />
    <path d="M4 20h16" />
  </Base>
)

/** GitHub mark */
export const GithubIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 1.5A10.5 10.5 0 0 0 8.7 22c.5.1.7-.2.7-.5v-2c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.6-1.2-1.6-.9-.6 0-.6 0-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.7 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5z" />
  </svg>
)

/** Windows */
export const WindowsIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M3 5.5l7.5-1v7.2H3zM11.3 4.4L21 3v9.2h-9.7zM3 12.7h7.5v7.2L3 18.6zM11.3 12.7H21V21l-9.7-1.3z" />
  </svg>
)

/** Apple / macOS */
export const AppleIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.3 2.8 2.3 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7 2-1.1 2.7-2.1c.9-1.3 1.2-2.5 1.2-2.6 0 0-2.3-.9-2.3-3.4zM13.8 5.4c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2-.5 2.7-1.1z" />
  </svg>
)

/** Linux / Tux-ish glyph */
export const LinuxIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2c-2.2 0-3.6 1.8-3.6 4.2 0 1.5.2 2.3-.6 3.6-.9 1.4-2.8 3.5-2.8 6 0 .9.4 1.5 1 1.9-.2.6-.3 1.2 0 1.7.5.9 1.9.9 3.2 1 1 .1 1.9.6 2.8.6s1.8-.5 2.8-.6c1.3-.1 2.7-.1 3.2-1 .3-.5.2-1.1 0-1.7.6-.4 1-1 1-1.9 0-2.5-1.9-4.6-2.8-6-.8-1.3-.6-2.1-.6-3.6C15.6 3.8 14.2 2 12 2zm-1.6 4.1c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zm3.2 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zM12 9.4c.9 0 2 .5 2 1 0 .3-.5.5-1 .8-.4.2-.7.5-1 .5s-.6-.3-1-.5c-.5-.3-1-.5-1-.8 0-.5 1.1-1 2-1z" />
  </svg>
)

/** Plus/minus chevron for FAQ */
export const ChevronIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 9l7 7 7-7" />
  </Base>
)
