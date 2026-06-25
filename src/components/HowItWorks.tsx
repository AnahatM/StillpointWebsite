import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/primitives'
import { DotField } from './ui/DotField'
import { TargetIcon, ScanIcon, SparkIcon } from './icons'

const STEPS = [
  {
    n: '01',
    icon: TargetIcon,
    title: 'Calibrate',
    time: '~10 seconds',
    body: 'Sit comfortably and let Stillpoint capture your personal neutral-posture baseline. One quick setup, tuned entirely to you.',
  },
  {
    n: '02',
    icon: ScanIcon,
    title: 'Monitor',
    time: 'on-device',
    body: 'Pose detection runs locally and scores your alignment in real time — smoothed, presence-aware, and never leaving your machine.',
  },
  {
    n: '03',
    icon: SparkIcon,
    title: 'Coach',
    time: 'when it matters',
    body: 'Sustained slouching earns a gentle nudge; straightening up earns quiet praise. Encouragement over interruption.',
  },
]

/** Three-step explainer of how the posture loop works. */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="bg-grid-fade pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <DotField gap={28} />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="03">How it works</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
            Calibrate once. Then it just runs in the background.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-px bg-line md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="group relative h-full bg-navy-850 p-7 transition-colors duration-300 hover:bg-navy-800">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-5xl font-bold text-navy-600 transition-colors duration-300 group-hover:text-teal-500">
                    {step.n}
                  </span>
                  <step.icon className="h-7 w-7 text-teal-400" />
                </div>
                <div className="mt-8 flex items-baseline gap-3">
                  <h3 className="text-2xl font-bold text-ink-100">{step.title}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500">{step.time}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 border-l-2 border-teal-400 bg-navy-850 px-5 py-4 text-sm text-ink-300">
            Meanwhile, your focus timer and wellness reminders run right alongside —
            one quiet companion for the whole workday.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
