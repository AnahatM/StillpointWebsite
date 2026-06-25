import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/primitives'
import { WindowsIcon, AppleIcon, LinuxIcon, DownloadIcon, GithubIcon } from './icons'
import { DOWNLOADS, RELEASES_URL, APP_VERSION } from '../lib/site'

const PLATFORMS = [
  {
    name: 'Windows',
    icon: WindowsIcon,
    file: '.exe installer',
    req: 'Windows 10 / 11 (64-bit)',
    href: DOWNLOADS.windows,
  },
  {
    name: 'macOS',
    icon: AppleIcon,
    file: '.dmg',
    req: 'macOS 12 Monterey or newer',
    href: DOWNLOADS.macos,
  },
  {
    name: 'Linux',
    icon: LinuxIcon,
    file: '.AppImage',
    req: 'Most modern distributions',
    href: DOWNLOADS.linux,
  },
]

/** Download section with three platform cards, requirements, and a signing note. */
export function Download() {
  return (
    <section id="download" className="relative scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center">
              <SectionLabel index="05">Download</SectionLabel>
            </div>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Get Stillpoint for your desktop.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-400">
              Free and open-source. Pick your platform — current build{' '}
              <span className="font-mono text-teal-300">{APP_VERSION}</span>.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="group flex h-full flex-col items-center bg-navy-850 p-8 text-center transition-colors duration-300 hover:bg-navy-800">
                <span className="flex h-16 w-16 items-center justify-center border border-line-strong bg-navy-800 text-ink-100 transition-colors duration-300 group-hover:border-teal-400 group-hover:text-teal-300">
                  <p.icon className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink-100">{p.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-500">{p.file}</p>
                <p className="mt-4 text-sm text-ink-400">{p.req}</p>
                <a
                  href={p.href}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-teal-400 px-5 py-3 text-sm font-semibold text-navy-950 transition-all duration-200 hover:bg-teal-300 hover:shadow-[0_0_30px_-4px_rgba(70,199,182,0.6)]"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download for {p.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col items-center gap-5">
            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-400 hover:text-teal-300"
            >
              <GithubIcon className="h-4 w-4" />
              All releases &amp; checksums on GitHub
            </a>
          </div>
        </Reveal>

        {/* Requirements + signing note */}
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
          <Reveal>
            <div className="h-full bg-navy-850 p-7">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-teal-400">
                System requirements
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
                <li>· Windows 10/11, macOS 12+, or a modern Linux distribution</li>
                <li>· A built-in or external webcam</li>
                <li>· No dedicated GPU required — inference runs on the CPU</li>
                <li>· Works fully offline once installed</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full bg-navy-850 p-7">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-amber-300">
                First-run security prompt
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-400">
                Current builds are <span className="text-ink-200">unsigned and not notarized</span>,
                so your OS may warn you the first time you launch:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-300">
                <li>
                  <span className="font-mono text-teal-300">Windows</span> — click
                  &ldquo;More info&rdquo; → &ldquo;Run anyway&rdquo;.
                </li>
                <li>
                  <span className="font-mono text-teal-300">macOS</span> — right-click the app →
                  &ldquo;Open&rdquo;, then confirm.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
