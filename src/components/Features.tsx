import type { ComponentType, ReactNode, SVGProps } from 'react'
import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/primitives'
import { ScreenshotFrame } from './ui/ScreenshotFrame'
import { AnalyticsMock } from './ui/AnalyticsMock'
import { TimerIcon, BellIcon, ChartIcon, SlidersIcon } from './icons'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

interface Shot {
  src?: string
  alt?: string
  label: string
  ratio?: string
}

interface FeatureRowProps {
  n: string
  icon: IconType
  eyebrow: string
  title: string
  body: string
  /** A framed screenshot — or omit and pass `mock` for a fabricated UI. */
  shot?: Shot
  /** A custom media node (e.g. AnalyticsMock) shown in place of a screenshot. */
  mock?: ReactNode
  /** Which side the media sits on (alternates down the page). */
  side: 'left' | 'right'
  /** Extra classes on the row wrapper (used to overlap rows). */
  className?: string
  children?: ReactNode
}

/**
 * One feature presented as a zigzag row: copy on one side, an angled,
 * depth-stacked screenshot on the other that straightens and lifts on hover.
 */
function FeatureRow({ n, icon: Icon, eyebrow, title, body, shot, mock, side, className = '', children }: FeatureRowProps) {
  const tilt = side === 'left' ? '-rotate-3' : 'rotate-3'

  const media = (
    <Reveal className="lg:w-[52%]">
      <div className="group/shot relative px-2 sm:px-4">
        {/* Stacked back card for depth */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-4 inset-y-0 -z-10 border border-line bg-navy-800/50 ${
            side === 'left' ? 'rotate-2' : '-rotate-2'
          }`}
        />
        <div
          className={`relative origin-center transition-all duration-500 ease-out ${tilt} group-hover/shot:rotate-0 group-hover/shot:scale-[1.02] group-hover/shot:shadow-[0_40px_80px_-30px_rgba(70,199,182,0.5)]`}
        >
          {mock ?? <ScreenshotFrame label={shot!.label} src={shot!.src} alt={shot!.alt} ratio={shot!.ratio ?? '16 / 10'} />}
        </div>
      </div>
    </Reveal>
  )

  const copy = (
    <Reveal className="lg:w-[48%]">
      <div className="flex items-center gap-3">
        <span className="font-mono text-4xl font-bold text-navy-600">{n}</span>
        <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-navy-800 text-teal-400">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">{eyebrow}</span>
      </div>
      <h3 className="mt-5 text-2xl font-bold text-ink-100 sm:text-3xl">{title}</h3>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-400">{body}</p>
      {children}
    </Reveal>
  )

  return (
    <div className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-12 ${className}`}>
      {side === 'left' ? (
        <>
          {media}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {media}
        </>
      )}
    </div>
  )
}

const THEMES = [
  { name: 'Midnight', colors: ['#071019', '#46c7b6'] },
  { name: 'Nord', colors: ['#2e3440', '#88c0d0'] },
  { name: 'Graphite', colors: ['#1c1c1e', '#9ca3af'] },
  { name: 'Aurora', colors: ['#0b132b', '#6fffe9'] },
  { name: 'Daylight', colors: ['#eef2f3', '#0ea5a0'] },
]

/** The rest of the feature set, presented as an angled zigzag showcase. */
export function Features() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="02">Everything else on your desk</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
            A full focus &amp; wellness toolkit around the posture engine.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-12 sm:mt-16 sm:space-y-14 lg:space-y-0">
          <FeatureRow
            n="01"
            side="left"
            icon={TimerIcon}
            eyebrow="Focus"
            title="Pomodoro, tasks &amp; sticky notes"
            body="A configurable Pomodoro timer — focus, breaks, long breaks and cycle length, with auto-start, a progress ring and notifications — beside a task list and colored sticky notes for stray thoughts."
            shot={{
              src: '/screenshots/Stillpoint-Screenshot_FocusAndToDoPage.png',
              alt: 'Stillpoint Focus page with a 25-minute Pomodoro timer, task list, and colored sticky notes',
              label: 'Focus',
            }}
          />

          <FeatureRow
            n="02"
            side="right"
            className="lg:-mt-16 xl:-mt-20"
            icon={BellIcon}
            eyebrow="Wellness · opt-in"
            title="Reminders that fit your day"
            body="Movement, hydration, eye care (20-20-20), stretch and posture-reset nudges — each with its own interval and a live countdown, running in the background and coordinated with your Pomodoro long break."
            shot={{
              src: '/screenshots/Stillpoint-Screenshot_WellnessReminders.png',
              alt: 'Stillpoint Wellness page with toggleable movement, hydration, eye care, stretch and posture-reset reminders, each showing a countdown',
              label: 'Wellness',
            }}
          />

          <FeatureRow
            n="03"
            side="left"
            className="lg:-mt-16 xl:-mt-20"
            icon={ChartIcon}
            eyebrow="Analytics · local-only"
            title="See your trends, kept on-device"
            body="Daily good/bad posture %, an issue breakdown, alerts, corrections and focus sessions — plus a switchable trend chart for good-posture %, focus sessions or best streak. Export everything to JSON anytime."
            mock={<AnalyticsMock />}
          />

          <FeatureRow
            n="04"
            side="right"
            className="lg:-mt-16 xl:-mt-20"
            icon={SlidersIcon}
            eyebrow="Make it yours"
            title="Five themes and configurable everything"
            body="Choose which issues to monitor, alert timing and repeat, sound, notifications, pose overlay, camera mirror and theme. Midnight, Nord, Graphite, Aurora and a light Daylight theme all apply instantly."
            shot={{
              src: '/screenshots/Stillpoint-Screenshot_SettingsPage.png',
              alt: 'Stillpoint Settings page: theme picker, which posture issues to monitor, coaching sensitivity and alert timing',
              label: 'Settings',
              ratio: '16 / 11',
            }}
          >
            <div className="mt-6 grid max-w-md grid-cols-5 gap-2">
              {THEMES.map((t) => (
                <div key={t.name} className="border border-line">
                  <div className="flex h-12" style={{ background: t.colors[0] }}>
                    <span className="m-auto h-4 w-4" style={{ background: t.colors[1] }} aria-hidden="true" />
                  </div>
                  <p className="border-t border-line bg-navy-800 py-1 text-center font-mono text-[9px] uppercase tracking-wider text-ink-400">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </FeatureRow>
        </div>
      </div>
    </section>
  )
}
