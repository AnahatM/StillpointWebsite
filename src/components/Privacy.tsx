import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/primitives'
import { ShieldIcon, NoCloudIcon, CheckIcon } from './icons'

const KEPT_LOCAL = ['Posture baseline', 'Your settings', 'Analytics history']
const NEVER = ['Webcam images', 'Video recordings', 'Cloud uploads']

/** Privacy section — the #1 selling point, made prominent and reassuring. */
export function Privacy() {
  return (
    <section id="privacy" className="relative scroll-mt-24 overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <SectionLabel index="04">Privacy</SectionLabel>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">
              Your webcam feed <span className="text-gradient">never leaves your device.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              This is the whole point. Stillpoint bundles its pose model and runs inference
              fully on-device with WebAssembly. There are no cloud calls, no accounts, and no
              image or video is ever stored or uploaded — not even to your own disk.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-400">
              The only things written locally are your settings, your calibration baseline,
              and your analytics history — all in plain files you fully control.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 border border-line-strong bg-navy-850 px-5 py-3">
              <NoCloudIcon className="h-6 w-6 text-teal-400" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-300">
                0 network calls for inference
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="viewfinder relative border border-line-strong bg-navy-850 p-8">
              <ShieldIcon className="h-12 w-12 text-teal-400" />
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">
                data boundary
              </p>

              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-bold text-teal-300">Stays on your machine</p>
                  <ul className="mt-3 space-y-2">
                    {KEPT_LOCAL.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-ink-300">
                        <CheckIcon className="h-4 w-4 shrink-0 text-teal-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold text-ink-400">Never captured</p>
                  <ul className="mt-3 space-y-2">
                    {NEVER.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-ink-500 line-through decoration-ink-500/50">
                        <span className="h-4 w-4 shrink-0 border border-ink-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                works fully offline · no GPU required
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
