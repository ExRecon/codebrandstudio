import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

/** Access the global Lenis instance for programmatic scrolling. */
export function getLenis(): Lenis | null {
  return lenisInstance
}

export function useLenis(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.2,
    })

    lenisInstance = lenis

    let frame = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisInstance = null
    }
  }, [enabled])
}
