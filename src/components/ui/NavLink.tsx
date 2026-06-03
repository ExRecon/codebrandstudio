import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type NavLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`group relative inline-block ${className}`}
    >
      <span className="text-sm text-white/55 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <motion.span
        className="absolute -bottom-0.5 left-0 right-0 h-px origin-left bg-gradient-to-r from-cyan-300/60 to-violet-400/40"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </a>
  )
}
