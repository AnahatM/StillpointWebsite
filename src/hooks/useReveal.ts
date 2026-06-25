import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once it scrolls into view.
 *
 * Returns a ref to attach to the target and a boolean that flips to `true` the
 * first time the element intersects the viewport. Pair with the `.reveal` /
 * `.is-visible` CSS classes for a staggered fade-up.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
) {
  const ref = useRef<T>(null)
  // If IntersectionObserver is unavailable (old/SSR environments), start visible
  // so content is never hidden behind a reveal that can't fire.
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // options is intentionally treated as stable on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, isVisible }
}
