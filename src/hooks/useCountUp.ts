import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useSpring, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type CountUpOptions = {
  target: number
  delay?: number
  enabled?: boolean
  suffix?: string
  prefix?: string
}

export function useCountUp({
  target,
  delay = 0,
  enabled = true,
  suffix = '',
  prefix = '',
}: CountUpOptions) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const shouldAnimate = enabled && isInView && !prefersReducedMotion

  const spring = useSpring(0, { damping: 20, stiffness: 60 })
  const display = useTransform(spring, (value) => {
    const rounded = Math.round(value)
    return `${prefix}${rounded}${suffix}`
  })

  useEffect(() => {
    if (!shouldAnimate) {
      spring.set(target)
      return
    }

    const timeout = setTimeout(() => {
      spring.set(target)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [shouldAnimate, target, delay, spring])

  return { ref, display }
}
