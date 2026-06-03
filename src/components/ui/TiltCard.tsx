import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'

type TiltCardProps = {
  children: ReactNode
  className?: string
  intensity?: number
}

export function TiltCard({ children, className = '', intensity = 8 }: TiltCardProps) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 300 })
  const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 300 })

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget.getBoundingClientRect()
    const relX = event.clientX - target.left - target.width / 2
    const relY = event.clientY - target.top - target.height / 2
    rotateX.set(-relY / target.height * intensity * 2)
    rotateY.set(relX / target.width * intensity * 2)
  }

  const onLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      className={className}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  )
}
