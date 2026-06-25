import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PostureSpotlight } from './components/PostureSpotlight'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Privacy } from './components/Privacy'
import { Download } from './components/Download'
import { FAQ } from './components/FAQ'
import { OpenSource } from './components/OpenSource'
import { Footer } from './components/Footer'
import { PointerAura } from './components/ui/PointerAura'

/** Single-page Stillpoint marketing site. */
function App() {
  return (
    <>
      {/* Cursor-following glow across the whole page */}
      <PointerAura />

      {/* Accessibility: skip straight to content with the keyboard */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-teal-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-950"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <PostureSpotlight />
        <Features />
        <HowItWorks />
        <Privacy />
        <Download />
        <FAQ />
        <OpenSource />
      </main>

      <Footer />
    </>
  )
}

export default App
