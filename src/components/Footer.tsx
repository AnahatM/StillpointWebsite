import { Logo } from './ui/Logo'
import { GithubIcon } from './icons'
import { GITHUB_URL, DEVELOPER } from '../lib/site'

const FOOTER_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Open source', href: '#open-source' },
  { label: 'Download', href: '#download' },
]

/** Site footer: wordmark, privacy blurb, nav, GitHub link, and credit line. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="text-teal-400">
              <Logo />
            </span>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Local-first posture coaching, focus and wellness for your desk. Your webcam
              feed never leaves your device — nothing is uploaded.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-line bg-navy-850 px-4 py-2.5 text-sm text-ink-200 transition-colors hover:border-teal-400 hover:text-teal-300"
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">Navigate</span>
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-ink-400 transition-colors hover:text-teal-300">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
            © {year} Stillpoint · Free &amp; open source
          </p>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-500">
            <span className="h-2 w-2 bg-teal-400" aria-hidden="true" />
            Made with on-device AI by{' '}
            <a
              href={DEVELOPER.portfolio}
              target="_blank"
              rel="noreferrer"
              className="text-ink-300 underline-offset-2 hover:text-teal-300 hover:underline"
            >
              {DEVELOPER.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
