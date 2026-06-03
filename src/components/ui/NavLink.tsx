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
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-block ${className}`}
    >
      <motion.span
        className={`inline-block text-sm tracking-wide transition-colors duration-300 ${
          active ? 'text-white' : 'text-white/55 group-hover:text-white'
        }`}
        whileHover={{ letterSpacing: '0.10em' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginRight: '-0.10em' }}
      >
        {children}
      </motion.span>
      {/* Underline — always visible when visible, full width when active */}
      <motion.span
        className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-cyan-300/60 to-violet-400/40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </a>
  )
}
