import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type NavLinkProps = {
  href: string
  children: ReactNode
  className?: string
  active?: boolean
  onClick?: () => void
}

export function NavLink({ href, children, className = '', active = false, onClick }: NavLinkProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative inline-block ${className}`}
    >
      <motion.span
        className="inline-block text-sm tracking-wide transition-colors duration-300"
        animate={{
          letterSpacing: hovered ? '0.10em' : 'normal',
          color: active
            ? 'rgba(255,255,255,1)'
            : hovered
              ? 'rgba(255,255,255,1)'
              : 'rgba(255,255,255,0.55)',
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ marginRight: '-0.10em' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </motion.span>
      {/* Underline — visible when active or hovered */}
      <motion.span
        className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-cyan-300/60 to-violet-400/40"
        initial={false}
        animate={{ scaleX: active || hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
      />
    </a>
  )
}
