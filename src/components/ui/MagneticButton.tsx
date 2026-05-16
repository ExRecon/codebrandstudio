import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  to?: string
  variant?: 'primary' | 'secondary'
}

export function MagneticButton({
  children,
  href,
  to,
  variant = 'primary',
}: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 18, stiffness: 160, mass: 0.4 })
  const springY = useSpring(y, { damping: 18, stiffness: 160, mass: 0.4 })

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget.getBoundingClientRect()
    const relativeX = event.clientX - target.left - target.width / 2
    const relativeY = event.clientY - target.top - target.height / 2
    x.set(relativeX * 0.18)
    y.set(relativeY * 0.18)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const className =
    variant === 'primary'
      ? 'button-primary'
      : 'button-secondary'

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      className={`${className} group inline-flex items-center gap-2`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} aria-label={`${children} page`}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} aria-label={String(children)}>
      {content}
    </a>
  )
}
