import { ButtonLink, Chip } from './ui/primitives'
import { ScreenshotFrame } from './ui/ScreenshotFrame'
import { AsciiBackdrop } from './ui/AsciiBackdrop'
import { CursorGlow } from './ui/CursorGlow'
import { DownloadIcon, GithubIcon, ArrowIcon } from './icons'
import { GITHUB_URL } from '../lib/site'

/**
 * Hero: headline, value prop, primary/secondary CTAs, trust chips, and a large
 * framed dashboard mockup with floating stat readouts. The background carries a
 * pointer-reactive ASCII field and a cursor-following glow.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Atmospheric, pointer-reactive background */}
      <div className="bg-grid-fade pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <AsciiBackdrop />
        <CursorGlow />
      </div>
      <div className="glow pointer-events-none absolute -top-40 left-1/2 -z-10 h-[640px] w-[900px] -translate-x-1/2" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy column */}
        <div>
          <div className="rise" style={{ animationDelay: '0.05s' }}>
            <Chip>100% on-device · free &amp; open source</Chip>
          </div>

          <h1
            className="rise mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.12s' }}
          >
            Sit better. <span className="text-gradient">Focus deeper.</span>
            <br className="hidden sm:block" /> Stay healthy at your desk.
          </h1>

          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed text-ink-300"
            style={{ animationDelay: '0.2s' }}
          >
            Stillpoint is a local-first desktop companion that coaches your posture in
            real time using on-device pose detection — wrapped in focus timers and
            wellness reminders. Your webcam feed never leaves your machine.
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.28s' }}>
            <ButtonLink href="#download" variant="primary">
              <DownloadIcon className="h-4 w-4" />
              Download Stillpoint
            </ButtonLink>
            <ButtonLink href={GITHUB_URL} variant="secondary" target="_blank" rel="noreferrer">
              <GithubIcon className="h-4 w-4" />
              View on GitHub
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </ButtonLink>
          </div>

          <div className="rise mt-9 flex flex-wrap gap-2.5" style={{ animationDelay: '0.36s' }}>
            <Chip>100% local</Chip>
            <Chip>No sign-up</Chip>
            <Chip>Open source</Chip>
            <Chip>Windows</Chip>
          </div>
        </div>

        {/* Visual column */}
        <div className="rise relative" style={{ animationDelay: '0.3s' }}>
          <div className="animate-float-slow">
            <ScreenshotFrame
              label="Dashboard"
              src="/screenshots/Stillpoint-Screenshot_CameraPostureMonitor.png"
              alt="Stillpoint dashboard: camera posture monitor with streak, best, and a guided calibration coach"
              ratio="16 / 11"
              eager
            />
          </div>

          {/* Floating posture-score readout */}
          <div className="absolute -bottom-6 -left-4 hidden border border-line-strong bg-navy-800/95 px-4 py-3 backdrop-blur-sm sm:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">posture score</p>
            <p className="mt-1 flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-teal-300">92</span>
              <span className="font-mono text-xs text-ink-400">/ 100</span>
            </p>
          </div>

          {/* Floating streak readout */}
          <div className="absolute -right-3 top-8 hidden border border-line-strong bg-navy-800/95 px-4 py-3 backdrop-blur-sm sm:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">good streak</p>
            <p className="mt-1 text-xl font-bold text-ink-100">
              48<span className="ml-1 font-mono text-xs font-normal text-ink-400">min</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
