import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'

type AnimatedCounterProps = {
  value: string
  delay?: number
}

/**
 * Parses a stat value like "100+" or "98%" or "3x" into
 * numeric target + suffix, then animates the count-up.
 */
export function AnimatedCounter({ value, delay = 0 }: AnimatedCounterProps) {
  const numericMatch = value.match(/^(\d+)(.*)$/)
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0
  const suffix = numericMatch ? numericMatch[2] : value

  const { ref, display } = useCountUp({
    target,
    delay,
    suffix,
  })

  return (
    <p ref={ref} className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
      <motion.span>{display}</motion.span>
    </p>
  )
}
