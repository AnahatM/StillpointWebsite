import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/primitives'
import { ChevronIcon } from './icons'
import { GITHUB_URL } from '../lib/site'

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Is it really private?',
    a: 'Yes — completely. All pose detection runs on-device with a bundled model. There are no accounts and no cloud calls; only your settings, baseline and analytics are saved locally on your machine.',
  },
  {
    q: 'Does it record or store video?',
    a: 'No. Stillpoint reads webcam frames in memory only to estimate your posture, then discards them. No image or video is ever written to disk or uploaded anywhere.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes. After install, Stillpoint needs no internet connection — the model and inference engine are bundled and run locally.',
  },
  {
    q: 'Does it need a GPU?',
    a: 'No dedicated GPU is required. Inference is lightweight and runs on the CPU on typical laptops and desktops.',
  },
  {
    q: 'Is it free and open-source?',
    a: (
      <>
        Yes. Stillpoint is free and open-source — browse the code, releases and issues on{' '}
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-teal-300 underline underline-offset-2 hover:text-teal-200">
          GitHub
        </a>
        .
      </>
    ),
  },
  {
    q: 'Which platforms are supported?',
    a: 'Right now Stillpoint ships for Windows 10/11 as an .exe installer. A macOS build isn’t available yet — but since Stillpoint is open source, it can be built from source on macOS or Linux.',
  },
  {
    q: 'Why does my OS show a security warning on first run?',
    a: 'The current build is unsigned, so Windows SmartScreen may flag it once. Choose “More info → Run anyway” to continue.',
  },
]

/** FAQ accordion built on native <details> for full keyboard accessibility. */
export function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center">
              <SectionLabel index="06">FAQ</SectionLabel>
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">Questions, answered.</h2>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-line">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 40}>
              <details className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-semibold text-ink-100 transition-colors group-hover:text-teal-300 sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronIcon className="h-5 w-5 shrink-0 text-teal-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="pb-6 pr-8 text-sm leading-relaxed text-ink-400">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
