import { ButtonLink, Chip } from './ui/primitives'
import { ScreenshotFrame } from './ui/ScreenshotFrame'
import { DownloadIcon, GithubIcon, ArrowIcon } from './icons'
import { GITHUB_URL } from '../lib/site'

/**
 * Hero: headline, value prop, primary/secondary CTAs, trust chips, and a large
 * framed dashboard mockup with the live skeleton overlay layered on top.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Atmospheric background: blueprint grid + teal glow */}
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="glow pointer-events-none absolute -top-40 left-1/2 -z-10 h-[640px] w-[900px] -translate-x-1/2" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy column */}
        <div>
          <div className="rise" style={{ animationDelay: '0.05s' }}>
            <Chip>100% on-device · no cloud</Chip>
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
            <Chip>Windows · macOS · Linux</Chip>
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

          {/* Floating privacy badge — always true, reinforces the core message */}
          <div className="absolute -bottom-5 -left-4 hidden items-center gap-2.5 border border-line-strong bg-navy-800/95 px-4 py-3 backdrop-blur-sm sm:flex">
            <span className="h-2.5 w-2.5 animate-blink bg-teal-400" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300">
              on-device · 0 uploads
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
