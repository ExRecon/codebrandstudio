import { useEffect, useState, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { navItems } from '../../data/site'
import { MagneticButton } from '../ui/MagneticButton'
import { NavLink } from '../ui/NavLink'
import { useActiveSection } from '../../hooks/useActiveSection'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()
  const menuRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen || !menuRef.current) return

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const onTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    first?.focus()
    const menuElement = menuRef.current
    menuElement.addEventListener('keydown', onTab)
    return () => menuElement?.removeEventListener('keydown', onTab)
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen && previousFocusRef.current) {
      previousFocusRef.current.focus()
      previousFocusRef.current = null
    }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const openMobile = useCallback(() => {
    previousFocusRef.current = document.activeElement as HTMLElement
    setMobileOpen(true)
  }, [])

  // Close mobile menu on route change
  const prevPathRef = useRef(location.pathname)
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname
      setMobileOpen(false)
    }
  }, [location.pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 md:px-6 ${
            mobileOpen
              ? 'pointer-events-none border-transparent bg-transparent opacity-0'
              : scrolled
                ? 'border-white/[0.08] bg-ink/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl'
                : 'border-transparent bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2" aria-label="Code Brand Studio — Home">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan/20 to-violet/10 transition-all duration-300 group-hover:from-cyan/30 group-hover:to-violet/20" />
              <span className="relative text-sm font-semibold tracking-tight text-white">C</span>
            </div>
            <span className="hidden text-sm font-medium tracking-wide text-white/70 transition-colors group-hover:text-white sm:inline">
              Code Brand
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
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

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MagneticButton href="#contact" variant="primary">
                Start a Project
              </MagneticButton>
            </div>

            <button
              onClick={() => mobileOpen ? closeMobile() : openMobile()}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/70 transition-all duration-300 hover:border-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan/70 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            className="fixed inset-0 z-[60] flex flex-col lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="absolute inset-0 bg-ink/98 backdrop-blur-2xl" />

            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan/[0.02] blur-[120px]" />
            </div>

            <div className="relative flex flex-1 flex-col items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
                {navItems.map((item, i) => {
                  const sectionId = item.href.replace('#', '')
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                    >
                      <NavLink
                        href={item.href}
                        active={activeSection === sectionId}
                        onClick={closeMobile}
                        className="text-center"
                      >
                        <span className="text-3xl font-medium tracking-tight text-white/80 transition-colors hover:text-white sm:text-4xl">
                          {item.label}
                        </span>
                      </NavLink>
                    </motion.div>
                  )
                })}
              </nav>

              <motion.div
                className="mt-12 flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <MagneticButton href="#contact" onClick={closeMobile}>
                  Start a Project
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div
              className="relative border-t border-white/[0.04] px-6 py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-center text-xs text-white/35">
                © {new Date().getFullYear()} Code Brand Studio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
