import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import type { ReactNode } from 'react'

gsap.registerPlugin(ScrollTrigger)

type ParallaxLayerProps = {
  children: ReactNode
  speed?: number
  className?: string
}

/**
 * Wraps children in a scroll-linked parallax layer using GSAP ScrollTrigger.
 * `speed` controls direction and intensity:
 *   0.02 = subtle background drift (slow)
 *  -0.03 = foreground push (fast, opposite direction)
 */
export function ParallaxLayer({ children, speed = 0.02, className = '' }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return

    const element = ref.current
    const yOffset = speed * 80

    gsap.set(element, { y: -yOffset })

    const tween = gsap.to(element, {
      y: yOffset,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [speed, prefersReducedMotion])

  return (
    <div ref={ref} className={`parallax-gpu ${className}`}>
      {children}
    </div>
  )
}
