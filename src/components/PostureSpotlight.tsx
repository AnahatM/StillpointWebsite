import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/primitives'
import { SkeletonOverlay } from './ui/SkeletonOverlay'
import { ScoreGauge } from './ui/ScoreGauge'
import { TargetIcon, ScanIcon, BellIcon, CheckIcon, SlidersIcon, PulseIcon } from './icons'

/** Detailed capabilities for the core posture-monitoring feature. */
const CAPABILITIES = [
  {
    icon: TargetIcon,
    title: 'Guided 10-second calibration',
    body: 'Sit how you sit best and Stillpoint captures a personal neutral-posture baseline — so coaching is tuned to you, not a generic template.',
  },
  {
    icon: ScanIcon,
    title: 'Three issues, individually tuned',
    body: 'Detects forward head, shoulder slouch and shoulder tilt. Toggle each one on or off and set sensitivity to Low, Medium or High.',
  },
  {
    icon: PulseIcon,
    title: 'Smoothed 0–100 posture score',
    body: 'A steady, jitter-free score reflects how aligned you are right now, with a live good-posture streak and a session best to beat.',
  },
  {
    icon: BellIcon,
    title: 'Sustained-slouch alerts',
    body: 'Only nudges after bad posture holds for your chosen 15–120 seconds — via notification and optional sound, with repeat reminders if you keep slouching.',
  },
  {
    icon: CheckIcon,
    title: 'Positive recovery confirmation',
    body: 'Straighten up and Stillpoint confirms the fix with a gentle, reassuring cue — coaching, not nagging.',
  },
  {
    icon: SlidersIcon,
    title: 'Presence-aware auto-pause',
    body: 'Leave your seat, turn away, or cover the camera and monitoring pauses automatically — then resumes the moment you return.',
  },
]

/** Primary feature spotlight — leads the feature story because it's the core. */
export function PostureSpotlight() {
  return (
    <section id="features" className="relative scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="01">Posture monitoring</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
            Real-time posture coaching that watches your alignment, not your privacy.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-400">
            Stillpoint tracks your head and shoulders through your webcam with on-device
            pose detection, scores your posture continuously, and steps in only when you
            need it.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
          {/* Live monitor mock */}
          <Reveal>
            <div className="viewfinder relative border border-line-strong bg-navy-850">
              <div className="grid gap-px bg-line sm:grid-cols-[1.4fr_1fr]">
                {/* Camera frame */}
                <div className="relative aspect-[4/3] bg-navy-900">
                  <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
                  <SkeletonOverlay />
                </div>

                {/* Readout panel */}
                <div className="flex flex-col items-center justify-center gap-5 bg-navy-850 p-6">
                  <ScoreGauge value={92} />
                  <div className="w-full space-y-2.5">
                    {[
                      { label: 'Forward head', ok: true },
                      { label: 'Shoulder slouch', ok: true },
                      { label: 'Shoulder tilt', ok: false },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between border border-line bg-navy-800 px-3 py-2"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-300">
                          {row.label}
                        </span>
                        <span
                          className={`h-2 w-2 ${row.ok ? 'bg-teal-400' : 'animate-blink bg-amber-400'}`}
                          aria-label={row.ok ? 'good' : 'watching'}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-between border-t border-line pt-3 font-mono text-[11px] uppercase tracking-wider">
                    <span className="text-ink-500">sensitivity</span>
                    <span className="text-teal-300">Medium</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-line bg-navy-800 px-4 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-500">
                  illustrative · live in-app
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300">
                  ▮ pause / resume
                </span>
              </div>
            </div>
          </Reveal>

          {/* Capability list */}
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="h-full bg-navy-850 p-5 transition-colors duration-200 hover:bg-navy-800">
                  <cap.icon className="h-6 w-6 text-teal-400" />
                  <h3 className="mt-3 text-base font-bold text-ink-100">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{cap.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
