import type { ReactNode } from 'react'
import { contact, navItems, socialLinks } from '../../data/site'
import { MagneticButton } from '../ui/MagneticButton'
import { NavLink } from '../ui/NavLink'
import { AnimatedSocialIcon } from '../ui/AnimatedSocialIcon'

const techStack = [
  { name: 'React', icon: '⚛' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Framer Motion', icon: 'FM' },
  { name: 'Three.js', icon: '3D' },
  { name: 'Tailwind', icon: 'TW' },
  { name: 'GSAP', icon: 'GS' },
]

const awards = [
  { label: 'Awwwards', detail: 'SOTD × 2' },
  { label: 'FWA', detail: 'Site of the Day' },
  { label: 'CSS Design', detail: 'Best UI × 3' },
  { label: 'Lighthouse', detail: '100 avg score' },
]

function SocialIcon({ label }: { label: string }) {
  const icons: Record<string, ReactNode> = {
    Instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    Behance: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M3 18V6h4.5a3.5 3.5 0 0 1 .313 6.986A3.5 3.5 0 0 1 9.5 18H3z" />
        <path d="M3 12h5.5" />
        <path d="M14 18h6" />
        <path d="M14 6h6" />
        <path d="M14 12h4" />
        <path d="M14 6.5A3.5 3.5 0 1 1 14 13" />
      </svg>
    ),
    LinkedIn: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M7 11v5" />
        <path d="M7 7v.01" />
        <path d="M11 16v-5" />
        <path d="M11 13a2 2 0 1 0 4 0v-2" />
      </svg>
    ),
  }
  return icons[label] || null
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      {/* Background ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,233,255,0.03),transparent)]" />

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 md:px-8 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {/* Founder avatar */}
              <div className="relative">
                <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-300/20 to-violet-400/10">
                  <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-white/70">
                    CB
                  </div>
                </div>
                <div className="absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#050505] bg-emerald-400" />
              </div>
              <div>
                <p className="font-display text-lg tracking-[-0.02em] text-white">Code Brand Studio</p>
                <p className="text-xs text-white/40">Premium Digital Experiences</p>
              </div>
            </div>
            <p className="max-w-md text-base leading-8 text-white/50">
              We craft cinematic digital products for founders and brands that refuse to look like everyone else. Every pixel earns its place.
            </p>
            {/* Social icons */}
            <div className="flex gap-5">
              {socialLinks.map((item) => (
                <AnimatedSocialIcon
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  icon={<SocialIcon label={item.label} />}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/30">Navigate</p>
            <div className="space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className="block text-sm"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/30">Contact</p>
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="block text-sm text-white/55 transition-colors duration-300 hover:text-cyan-300"
              >
                {contact.email}
              </a>
              <a
                href={`mailto:${contact.email}?subject=Discovery Call`}
                className="block text-sm text-white/55 transition-colors duration-300 hover:text-cyan-300"
              >
                {contact.calendarLabel}
              </a>
            </div>
            <div className="mt-6">
              <MagneticButton href={`mailto:${contact.email}`} variant="secondary">
                Start a Project
              </MagneticButton>
            </div>
          </div>

          {/* Awards & Tech */}
          <div className="space-y-8">
            {/* Awards — inline list */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">Recognition</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {awards.map((award) => (
                  <span key={award.label} className="text-sm text-white/50">
                    {award.label} <span className="text-white/30">— {award.detail}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Tech stack — comma-separated */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">Tech Stack</p>
              <p className="text-sm text-white/40">
                {techStack.map((tech) => tech.name).join(' · ')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Code Brand Studio. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Designed & engineered with obsession.
          </p>
        </div>
      </div>
    </footer>
  )
}
