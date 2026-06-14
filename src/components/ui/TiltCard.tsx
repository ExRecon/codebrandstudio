import { useRef, useCallback, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export function TiltCard({ children, className = '', maxTilt = 4 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [maxTilt, -maxTilt]), {
    damping: 20,
    stiffness: 300,
  })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-maxTilt, maxTilt]), {
    damping: 20,
    stiffness: 300,
  })

  // Glare position
  const glareX = useTransform(mouseX, [0, 1], ['0%', '100%'])
  const glareY = useTransform(mouseY, [0, 1], ['0%', '100%'])
  const glareOpacity = useSpring(0, { damping: 20, stiffness: 300 })

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
    glareOpacity.set(0.12)
  }, [mouseX, mouseY, glareOpacity])

  const onMouseLeave = useCallback(() => {
    mouseX.set(0.5)
    mouseY.set(0.5)
    glareOpacity.set(0)
  }, [mouseX, mouseY, glareOpacity])

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Glare sheen overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
        style={{
          x: glareX,
          y: glareY,
          opacity: glareOpacity,
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.08) 0%, transparent 60%)',
          backgroundPosition: 'var(--x, 50%) var(--y, 50%)',
        }}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  )
}
