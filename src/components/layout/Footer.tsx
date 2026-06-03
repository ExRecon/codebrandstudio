import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import type { ReactNode } from 'react'
import { contact, founder, socialLinks, stats } from '../../data/site'
import { MagneticButton } from '../ui/MagneticButton'
import { NavLink } from '../ui/NavLink'
import { AnimatedSocialIcon } from '../ui/AnimatedSocialIcon'
import { Reveal } from '../ui/Reveal'

/* ── Social SVG icons (kept local since they're small) ─────────── */
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

/* ── Trust badge data ──────────────────────────────────────────── */
const trustSignals = [
  { label: 'Awwwards', detail: 'SOTD × 2' },
  { label: 'FWA', detail: 'Site of the Day' },
  { label: 'CSS Design', detail: 'Best UI × 3' },
  { label: 'Lighthouse', detail: '100 avg score' },
]

const techStack = [
  'React', 'TypeScript', 'Three.js', 'GSAP', 'Framer Motion', 'Tailwind',
]

/* ── Main Footer ────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ══════════════════════════════════════════════════════════════
          TOP CTA BAND — The big closing argument
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative border-t border-white/[0.06]">
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(139,233,255,0.04),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <Reveal>
            <div className="text-center">
              {/* Kicker */}
              <p className="section-kicker mx-auto mb-6">Ready toelevate your brand?</p>

              {/* Main headline */}
              <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
                Let's build something{' '}
                <span className="hero-premium-word">premium</span>
                .
              </h2>

              {/* Supporting copy */}
              <p className="mx-auto mt-6 max-w-xl text-lg leading-9 text-white/55">
                Your next project deserves more than a template. A strategic digital product engineered for authority, trust, and conversion.
              </p>

              {/* CTA row */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton href={`mailto:${contact.email}`}>
                  Start a Project
                </MagneticButton>
                <MagneticButton href={`mailto:${contact.email}?subject=Discovery Call`} variant="secondary">
                  {contact.calendarLabel}
                </MagneticButton>
              </div>

              {/* Quick trust snippet — inline, under the CTA */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {trustSignals.map((badge) => (
                  <span key={badge.label} className="flex items-center gap-1.5 text-xs text-white/35">
                    <Star className="h-3 w-3 fill-cyan-300/50 text-cyan-300/50" />
                    <span>{badge.label}</span>
                    <span className="text-white/20">— {badge.detail}</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          FOUNDER SIGNATURE BLOCK — Personal brand + social proof
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative border-t border-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,rgba(143,131,255,0.02),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">

              {/* Left — Founder identity */}
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  {/* Larger, more premium avatar */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="h-20 w-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/20 to-violet-400/10 md:h-24 md:w-24"
                      whileHover={{ scale: 1.04, borderColor: 'rgba(103, 232, 249, 0.25)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex h-full w-full items-center justify-center font-display text-3xl font-semibold tracking-[-0.04em] text-white/70 md:text-4xl">
                        A
                      </div>
                    </motion.div>
                    <div className="absolute -right-0.5 -bottom-0.5 h-4 w-4 rounded-full border-2 border-[#050505] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
                  </div>

                  <div>
                    <p className="font-display text-2xl tracking-[-0.04em] text-white md:text-3xl">
                      {founder.name}
                    </p>
                    <p className="mt-1 text-sm text-white/40">{founder.role}</p>
                    {/* Live stats row — pulled from data */}
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {founder.highlights.map((h) => (
                        <div key={h.label} className="flex items-baseline gap-1.5">
                          <span className="font-display text-sm tracking-[-0.02em] text-cyan-300/80">
                            {h.value}
                          </span>
                          <span className="text-[11px] text-white/30">{h.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Founder quote — the personal closing */}
                <blockquote className="relative border-l-2 border-cyan-300/15 pl-5">
                  <p className="text-base leading-8 text-white/55">
                    {founder.bio[0]}
                  </p>
                  <footer className="mt-3 flex items-center gap-2 text-xs text-white/30">
                    <span className="font-medium text-white/45">— {founder.name}</span>
                    <span>·</span>
                    <span>Founder</span>
                  </footer>
                </blockquote>

                {/* Social links — inline with label */}
                <div className="flex flex-wrap items-center gap-6">
                  {socialLinks.map((item) => (
                    <AnimatedSocialIcon
                      key={item.label}
                      href={item.href}
                      label={item.label}
                      icon={
                        <span className="flex items-center gap-2 text-sm text-white/40">
                          <SocialIcon label={item.label} />
                          <span className="hidden sm:inline">{item.label}</span>
                        </span>
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Right — Selected stats + tech stack + quick links */}
              <div className="space-y-10">
                {/* Impact stats — using same data as About section */}
                <div>
                  <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/30">Track Record</p>
                  <div className="grid grid-cols-2 gap-5">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-3xl tracking-[-0.06em] text-white md:text-4xl">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-white/[0.06] to-transparent" />

                {/* Tech stack */}
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">Core Technology</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs text-white/45 transition-colors duration-300 hover:border-white/10 hover:text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick links — minimal, editorial style */}
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">Explore</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
                    {[
                      { label: 'Studio', href: '#about' },
                      { label: 'Services', href: '#services' },
                      { label: 'Case Studies', href: '#projects' },
                      { label: 'Process', href: '#process' },
                    ].map((item) => (
                      <NavLink
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-2 text-sm text-white/45"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-60" />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM BAR — Copyright, final micro-detail
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} Code Brand Studio. All rights reserved.
            </p>

            {/* Centered craft tagline */}
            <p className="flex items-center gap-2 text-xs text-white/20">
              <span className="inline-block h-1 w-1 rounded-full bg-cyan-300/30" />
              <span>Designed & engineered with obsession</span>
              <span className="inline-block h-1 w-1 rounded-full bg-violet-400/30" />
            </p>

            <p className="text-xs text-white/25">
              {founder.name} — {founder.role}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
