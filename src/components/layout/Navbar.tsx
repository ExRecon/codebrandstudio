import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/site'
import { MagneticButton } from '../ui/MagneticButton'
import { NavLink } from '../ui/NavLink'
import { useActiveSection } from '../../hooks/useActiveSection'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        delay: 0.15 + i * 0.06,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
    exit: {
      opacity: 0,
      y: -12,
      filter: 'blur(4px)',
      transition: { duration: 0.2 },
    },
  }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-6 py-3 transition-all duration-500 md:px-8 md:py-3.5 ${
            mobileOpen
              ? 'pointer-events-none border-transparent bg-transparent opacity-0'
              : scrolled
                ? 'border-white/[0.08] bg-black/70 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl'
                : 'border-white/[0.05] bg-black/30 backdrop-blur-lg'
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5" aria-label="Code Brand Studio — Home">
            {/* Monogram mark */}
            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-300/20 to-violet-400/10 transition-all duration-300 group-hover:from-cyan-300/30 group-hover:to-violet-400/20" />
              <span className="relative font-display text-sm font-semibold tracking-[-0.04em] text-white">
                C
              </span>
            </div>
            <span className="hidden font-display text-sm uppercase tracking-[0.25em] text-white/80 transition-colors duration-300 group-hover:text-white sm:inline">
              Code Brand
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={activeSection === sectionId}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          {/* Right side — CTA + hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MagneticButton href="#contact" variant="secondary">
                Start a Project
              </MagneticButton>
            </div>

            {/* Hamburger — visible below lg */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-white/10 hover:text-white lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE FULL-SCREEN OVERLAY
          ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-ink/95 backdrop-blur-2xl" />

            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
            >
              <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-300/[0.03] blur-[120px]" />
              <div className="absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-violet-400/[0.02] blur-[100px]" />
            </div>

            {/* Content */}
            <div className="relative flex flex-1 flex-col items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
                {navItems.map((item, i) => {
                  const sectionId = item.href.replace('#', '')
                  return (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={mobileLinkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <NavLink
                        href={item.href}
                        active={activeSection === sectionId}
                        onClick={closeMobile}
                        className="text-center"
                      >
                        <span className="font-display text-3xl tracking-[-0.03em] text-white/70 transition-colors duration-300 hover:text-white sm:text-4xl">
                          {item.label}
                        </span>
                      </NavLink>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                className="mt-12 flex flex-col items-center gap-4"
                custom={navItems.length}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <MagneticButton href="#contact" onClick={closeMobile}>
                  Start a Project
                </MagneticButton>
                <MagneticButton href="#contact" variant="secondary" onClick={closeMobile}>
                  Book a Call
                </MagneticButton>
              </motion.div>
            </div>

            {/* Bottom bar */}
            <motion.div
              className="relative border-t border-white/[0.04] px-6 py-5"
              custom={navItems.length + 1}
              variants={mobileLinkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="text-center text-xs text-white/25">
                © {new Date().getFullYear()} Code Brand Studio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
