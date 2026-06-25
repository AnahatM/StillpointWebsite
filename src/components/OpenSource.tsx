import { Reveal } from './ui/Reveal'
import { SectionLabel, ButtonLink } from './ui/primitives'
import { AsciiBackdrop } from './ui/AsciiBackdrop'
import { GithubIcon, GlobeIcon, StarIcon, ForkIcon, HeartIcon, ArrowIcon } from './icons'
import { GITHUB_URL, DEVELOPER } from '../lib/site'

/**
 * Open-source callout + a short "about the developer" card, with links out to
 * the project's GitHub and the developer's portfolio.
 */
export function OpenSource() {
  return (
    <section id="open-source" className="relative scroll-mt-24 overflow-hidden border-t border-line py-24 sm:py-32">
      {/* Pointer-reactive ASCII field, kept subtle behind the content */}
      <div className="bg-grid-fade pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true">
        <AsciiBackdrop />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          {/* Open source */}
          <Reveal>
            <div className="flex h-full flex-col">
              <SectionLabel index="07">Open source</SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">
                Free, <span className="text-gradient">open source</span>, and yours to inspect.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
                Stillpoint is free and fully open source. Because it claims to keep everything
                on your device, you shouldn&rsquo;t have to take that on faith — read the code,
                audit the data flow, build it yourself, or open an issue. No telemetry to hide.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
                {[
                  { icon: StarIcon, label: 'Star it', sub: 'Show support' },
                  { icon: ForkIcon, label: 'Fork it', sub: 'Make it yours' },
                  { icon: GithubIcon, label: 'Audit it', sub: 'Read every line' },
                ].map((item) => (
                  <div key={item.label} className="bg-navy-850 p-4">
                    <item.icon className="h-5 w-5 text-teal-400" />
                    <p className="mt-2 text-sm font-semibold text-ink-100">{item.label}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-500">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ButtonLink href={GITHUB_URL} variant="primary" target="_blank" rel="noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  Star on GitHub
                  <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* About the developer */}
          <Reveal delay={120}>
            <aside className="viewfinder relative flex h-full flex-col border border-line-strong bg-navy-850 p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">Built by</p>

              <div className="mt-5 flex items-center gap-4">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center bg-teal-400 text-xl font-extrabold text-navy-950"
                  aria-hidden="true"
                >
                  {DEVELOPER.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')}
                </span>
                <div>
                  <p className="text-xl font-bold text-ink-100">{DEVELOPER.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-teal-300">
                    Developer &amp; designer
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-ink-400">
                Stillpoint is an independent project — designed and built end to end, from the
                on-device pose pipeline to this landing page. It started as a simple idea: that a
                tool watching you work should never have to phone home.
              </p>

              <div className="mt-7 flex flex-col gap-px border border-line bg-line">
                <a
                  href={DEVELOPER.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 bg-navy-850 px-4 py-3.5 transition-colors hover:bg-navy-800"
                >
                  <span className="flex items-center gap-3 text-sm text-ink-200">
                    <GlobeIcon className="h-5 w-5 text-teal-400" />
                    Portfolio &amp; other projects
                  </span>
                  <ArrowIcon className="h-4 w-4 text-ink-500 transition-all group-hover:translate-x-1 group-hover:text-teal-300" />
                </a>
                <a
                  href={DEVELOPER.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 bg-navy-850 px-4 py-3.5 transition-colors hover:bg-navy-800"
                >
                  <span className="flex items-center gap-3 text-sm text-ink-200">
                    <GithubIcon className="h-5 w-5 text-teal-400" />
                    GitHub profile
                  </span>
                  <ArrowIcon className="h-4 w-4 text-ink-500 transition-all group-hover:translate-x-1 group-hover:text-teal-300" />
                </a>
              </div>

              <p className="mt-7 flex items-center gap-2 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                <HeartIcon className="h-4 w-4 text-teal-400" />
                Built with on-device AI
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
