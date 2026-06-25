import type { ReactNode } from 'react'
import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/primitives'
import { ScreenshotFrame } from './ui/ScreenshotFrame'
import { TimerIcon, BellIcon, ChartIcon, PaletteIcon, SlidersIcon } from './icons'

/** A single bento cell with a hairline frame. */
function Cell({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`group relative flex flex-col border border-line bg-navy-850 p-6 transition-colors duration-300 hover:border-line-strong sm:p-7 ${className}`}
    >
      {children}
    </div>
  )
}

function CellHeader({ icon, eyebrow, title }: { icon: ReactNode; eyebrow: string; title: string }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-navy-800 text-teal-400 transition-colors duration-300 group-hover:bg-teal-400 group-hover:text-navy-950">
          {icon}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">{eyebrow}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-ink-100">{title}</h3>
    </>
  )
}

const THEMES = [
  { name: 'Midnight', colors: ['#071019', '#46c7b6'] },
  { name: 'Nord', colors: ['#2e3440', '#88c0d0'] },
  { name: 'Graphite', colors: ['#1c1c1e', '#9ca3af'] },
  { name: 'Aurora', colors: ['#0b132b', '#6fffe9'] },
  { name: 'Daylight', colors: ['#eef2f3', '#0ea5a0'] },
]

/** The rest of the feature set, laid out as a bento grid. */
export function Features() {
  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="02">Everything else on your desk</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
            A full focus &amp; wellness toolkit around the posture engine.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px bg-line md:grid-cols-6">
          {/* Focus tools */}
          <Reveal as="div" className="md:col-span-3">
            <Cell className="h-full">
              <CellHeader icon={<TimerIcon className="h-5 w-5" />} eyebrow="Focus" title="Pomodoro, tasks &amp; sticky notes" />
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                A configurable Pomodoro timer — focus, breaks, long breaks and cycle length,
                with auto-start, a progress ring and notifications — beside a task list and
                colored sticky notes for stray thoughts.
              </p>
              <div className="mt-6">
                <ScreenshotFrame
                  label="Focus"
                  src="/screenshots/Stillpoint-Screenshot_FocusAndToDoPage.png"
                  alt="Stillpoint Focus page with a 25-minute Pomodoro timer, task list, and colored sticky notes"
                  ratio="16 / 10"
                />
              </div>
            </Cell>
          </Reveal>

          {/* Wellness reminders */}
          <Reveal as="div" className="md:col-span-3">
            <Cell className="h-full">
              <CellHeader icon={<BellIcon className="h-5 w-5" />} eyebrow="Wellness · opt-in" title="Reminders that fit your day" />
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                Movement, hydration, eye care (20-20-20), stretch and posture-reset nudges —
                each with its own interval and a live countdown, running in the background and
                coordinated with your Pomodoro long break.
              </p>
              <div className="mt-6">
                <ScreenshotFrame
                  label="Wellness"
                  src="/screenshots/Stillpoint-Screenshot_WellnessReminders.png"
                  alt="Stillpoint Wellness page with toggleable movement, hydration, eye care, stretch and posture-reset reminders, each showing a countdown"
                  ratio="16 / 10"
                />
              </div>
            </Cell>
          </Reveal>

          {/* Analytics — no screenshot yet, keeps the labelled placeholder */}
          <Reveal as="div" className="md:col-span-3">
            <Cell className="h-full">
              <CellHeader icon={<ChartIcon className="h-5 w-5" />} eyebrow="Analytics · local-only" title="See your trends, kept on-device" />
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                Daily good/bad posture %, an issue breakdown, alerts, corrections and focus
                sessions — plus a switchable trend chart for good-posture %, focus sessions or
                best streak. Export everything to JSON anytime.
              </p>
              <div className="mt-6">
                <ScreenshotFrame label="Analytics" ratio="16 / 10" />
              </div>
            </Cell>
          </Reveal>

          {/* Themes */}
          <Reveal as="div" className="md:col-span-3">
            <Cell className="h-full">
              <CellHeader icon={<PaletteIcon className="h-5 w-5" />} eyebrow="Polish" title="Five themes, instant switch" />
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                Midnight, Nord, Graphite, Aurora and a light Daylight theme apply instantly. A
                frameless custom window, keyboard shortcuts, toast feedback and visible focus
                rings round out the experience.
              </p>
              <div className="mt-auto grid grid-cols-5 gap-2 pt-6">
                {THEMES.map((t) => (
                  <div key={t.name} className="border border-line">
                    <div className="flex h-14" style={{ background: t.colors[0] }}>
                      <span className="m-auto h-5 w-5" style={{ background: t.colors[1] }} aria-hidden="true" />
                    </div>
                    <p className="border-t border-line bg-navy-800 py-1 text-center font-mono text-[9px] uppercase tracking-wider text-ink-400">
                      {t.name}
                    </p>
                  </div>
                ))}
              </div>
            </Cell>
          </Reveal>

          {/* Configurable everything — full width with the Settings screenshot */}
          <Reveal as="div" className="md:col-span-6">
            <Cell className="h-full lg:flex-row lg:items-center lg:gap-10">
              <div className="lg:max-w-md lg:shrink-0">
                <CellHeader icon={<SlidersIcon className="h-5 w-5" />} eyebrow="Control" title="Configurable, with an explicit Apply" />
                <p className="mt-3 text-sm leading-relaxed text-ink-400">
                  Choose which issues to monitor, alert timing and repeat, sound, notifications,
                  overlay, mirror and theme. Changes stage as &ldquo;unsaved&rdquo; until you
                  Apply — so nothing shifts under you mid-session.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-amber-300">
                    ● unsaved changes
                  </span>
                  <span className="bg-teal-400 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-navy-950">
                    apply
                  </span>
                </div>
              </div>
              <div className="mt-6 w-full lg:mt-0">
                <ScreenshotFrame
                  label="Settings"
                  src="/screenshots/Stillpoint-Screenshot_SettingsPage.png"
                  alt="Stillpoint Settings page: theme picker, which posture issues to monitor, coaching sensitivity, alert timing, and an Apply Changes flow"
                  ratio="16 / 11"
                />
              </div>
            </Cell>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
