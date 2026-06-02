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
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-8 py-4 transition-all duration-500 ${
          scrolled
            ? 'border-white/12 bg-black/55 shadow-panel backdrop-blur-2xl'
            : 'border-white/8 bg-white/[0.03] backdrop-blur-md'
        }`}
      >
        <a href="#hero" className="font-display text-sm uppercase tracking-[0.35em] text-white">
          Code Brand Studio
        </a>
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/65 transition hover:text-white"
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
