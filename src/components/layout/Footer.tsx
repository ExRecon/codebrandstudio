import React, { useRef, useEffect } from 'react'
import { contact, founder, socialLinks } from '../../data/site'
import { AnimatedSocialIcon } from '../ui/AnimatedSocialIcon'

/* ── Reactive Grid Canvas ───────────────────────────────────────── */
function ReactiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ripplesRef = useRef<Array<{ x: number; y: number; time: number }>>([])
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Faint grid
      ctx.strokeStyle = 'rgba(255,255,255,0.015)'
      ctx.lineWidth = 0.5
      const spacing = 40
      for (let gx = 0; gx <= rect.width; gx += spacing) {
        ctx.beginPath()
        ctx.moveTo(gx, 0)
        ctx.lineTo(gx, rect.height)
        ctx.stroke()
      }
      for (let gy = 0; gy <= rect.height; gy += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, gy)
        ctx.lineTo(rect.width, gy)
        ctx.stroke()
      }

      // Animate ripples
      const now = performance.now()
      ripplesRef.current = ripplesRef.current.filter((r) => now - r.time < 2000)

      for (const ripple of ripplesRef.current) {
        const age = (now - ripple.time) / 2000
        const radius = age * 120
        const opacity = (1 - age) * 0.12

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(139, 233, 253, ${opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const onClick = (e: React.MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    ripplesRef.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      time: performance.now(),
    })
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
      onClick={onClick}
      aria-hidden="true"
    />
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]" aria-label="Site footer">
      {/* Reactive grid background */}
      <ReactiveGrid />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left — Brand + founder */}
          <div>
            <a href="#hero" className="group inline-flex items-center gap-2" aria-label="Code Brand Studio — Home">
              <div className="relative flex h-8 w-8 items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan/20 to-violet/10" />
                <span className="relative text-sm font-semibold tracking-tight text-white">C</span>
              </div>
              <span className="text-sm font-medium tracking-wide text-white/70">
                Code Brand Studio
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
              AI-native engineering studio building systems that scale. Multi-agent architectures, SaaS platforms, and developer infrastructure.
            </p>
            <div className="mt-6 flex items-center gap-5">
              {socialLinks.map((item) => (
                <AnimatedSocialIcon key={item.label} href={item.href} label={item.label} icon={<SocialIcon label={item.label} />} />
              ))}
            </div>
          </div>

          {/* Right — Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">Navigate</p>
              <ul className="mt-4 space-y-3">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Work', href: '#work' },
                  { label: 'Process', href: '#process' },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm text-white/55 transition-colors hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">Contact</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href={`mailto:${contact.email}`} className="text-sm text-white/55 transition-colors hover:text-white">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-white/55 transition-colors hover:text-white">
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-6 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Code Brand Studio. All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            {founder.name} — {founder.role}
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ── Minimal social icons ──────────────────────────────────────── */
function SocialIcon({ label }: { label: string }) {
  const icons: Record<string, React.ReactNode> = {
    GitHub: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    LinkedIn: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M7 11v5" /><path d="M7 7v.01" /><path d="M11 16v-5" /><path d="M11 13a2 2 0 1 0 4 0v-2" />
      </svg>
    ),
    Twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  }
  return icons[label] || null
}
