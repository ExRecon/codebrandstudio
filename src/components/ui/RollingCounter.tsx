import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface RollingCounterProps {
  target: string
  duration?: number
  delay?: number
}

/* ── Extract numeric and non-numeric parts ─────────────────────── */
function parseValue(value: string) {
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/)
  if (match) {
    return {
      prefix: match[1],
      numeric: parseFloat(match[2]),
      suffix: match[3],
      decimals: match[2].includes('.') ? match[2].split('.')[1].length : 0,
    }
  }
  return { prefix: '', numeric: parseFloat(value) || 0, suffix: '', decimals: 0 }
}

export function RollingCounter({ target, duration = 800, delay = 0 }: RollingCounterProps) {
  const { prefix, numeric, suffix, decimals } = parseValue(target)
  const isNonNumeric = numeric === 0 && target !== '0'

  const [display, setDisplay] = useState(isNonNumeric ? target : `${prefix}0${suffix}`)
  const hasAnimated = useRef(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || hasAnimated.current || isNonNumeric) return
    hasAnimated.current = true

    const startTime = performance.now() + delay

    let frame: number
    const tick = (now: number) => {
      if (now < startTime) {
        frame = requestAnimationFrame(tick)
        return
      }

      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = numeric * eased

      const formatted = decimals > 0
        ? current.toFixed(decimals)
        : Math.round(current).toString()

      setDisplay(`${prefix}${formatted}${suffix}`)

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDisplay(target)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, delay, prefersReducedMotion, isNonNumeric, numeric, prefix, suffix, decimals])

  return <>{display}</>
}
