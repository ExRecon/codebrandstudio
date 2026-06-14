import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'
import { getLenis } from '../../hooks/useLenis'

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  to?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}

export function MagneticButton({
  children,
  href,
  to,
  variant = 'primary',
  onClick,
  className = '',
}: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 18, stiffness: 160, mass: 0.4 })
  const springY = useSpring(y, { damping: 18, stiffness: 160, mass: 0.4 })

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget.getBoundingClientRect()
    const relativeX = event.clientX - target.left - target.width / 2
    const relativeY = event.clientY - target.top - target.height / 2
    x.set(relativeX * 0.15)
    y.set(relativeY * 0.15)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseClass = variant === 'primary' ? 'button-primary' : 'button-secondary'

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault()
      const lenis = getLenis()
      const targetId = href.slice(1)
      const target = document.getElementById(targetId)
      if (target) {
        if (lenis) {
          lenis.scrollTo(target, { offset: 0, duration: 1.2 })
        } else {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    onClick?.()
  }

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      className={`${baseClass} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.span>
  )

  if (to) {
    return <a href={to}>{content}</a>
  }

  return (
    <a href={href} onClick={handleClick}>
      {content}
    </a>
  )
}
