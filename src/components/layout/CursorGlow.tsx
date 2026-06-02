import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function CursorGlow() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const springX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 })
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 })

  useEffect(() => {
    if (prefersReducedMotion) return

    // Only show on non-touch devices
    const mql = window.matchMedia('(pointer: fine)')
    if (!mql.matches) return

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [prefersReducedMotion, visible, mouseX, mouseY])

  if (prefersReducedMotion) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}
    >
      <motion.div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: springX,
          y: springY,
          background:
            'radial-gradient(circle, rgba(103,232,249,0.06) 0%, rgba(139,233,255,0.03) 30%, rgba(143,131,255,0.015) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </motion.div>
  )
}
