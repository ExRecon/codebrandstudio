import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { getLenis } from '../../hooks/useLenis'

type NavLinkProps = {
  href: string
  children: ReactNode
  className?: string
  active?: boolean
  onClick?: () => void
}

export function NavLink({ href, children, className = '', active = false, onClick }: NavLinkProps) {
  const [hovered, setHovered] = useState(false)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // For hash links, use Lenis smooth scroll
      if (href.startsWith('#')) {
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
    },
    [href, onClick],
  )

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative inline-block ${className}`}
    >
      <motion.span
        className="inline-block text-sm tracking-wide transition-colors duration-300"
        animate={{
          color: active
            ? 'rgba(255,255,255,1)'
            : hovered
              ? 'rgba(255,255,255,1)'
              : 'rgba(255,255,255,0.55)',
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
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
