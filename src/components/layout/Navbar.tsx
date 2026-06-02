import { useEffect, useState } from 'react'
import { navItems } from '../../data/site'
import { MagneticButton } from '../ui/MagneticButton'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-6 py-3 transition-all duration-500 md:px-8 md:py-3.5 ${
          scrolled
            ? 'border-white/[0.08] bg-black/70 backdrop-blur-xl'
            : 'border-white/[0.05] bg-black/30 backdrop-blur-lg'
        }`}
      >
        <a href="#hero" className="font-display text-sm uppercase tracking-[0.3em] text-white/80">
          Code Brand Studio
        </a>
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <MagneticButton href="#contact" variant="secondary">
            Start a Project
          </MagneticButton>
        </div>
      </div>
    </header>
  )
}
