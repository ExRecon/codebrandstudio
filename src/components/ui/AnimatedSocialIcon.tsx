import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type AnimatedSocialIconProps = {
  href: string
  label: string
  icon: ReactNode
}

export function AnimatedSocialIcon({ href, label, icon }: AnimatedSocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex text-white/35 transition-colors duration-300 hover:text-cyan-300"
      aria-label={label}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      {icon}
    </motion.a>
  )
}
