import { Suspense, lazy, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Check, ChevronRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  contact,
  differentiators,
  processSteps,
  projects,
  services,
  stats,
  studioPrinciples,
  testimonials,
} from '../../data/site'
import type { ProjectAccent } from '../../data/site'
import { MagneticButton } from '../ui/MagneticButton'
import { Reveal } from '../ui/Reveal'
import { ProjectVideoPreview } from '../ui/ProjectVideoPreview'
const HeroScene = lazy(() =>
  import('../three/HeroScene').then((module) => ({ default: module.HeroScene })),
)

export function HeroSection() {
  const headlineWords = useMemo(
    () => [
      ['We', 'Build'],
      ['Digital', 'Identities'],
      ['That', 'Feel'],
      ['Premium'],
    ],
    [],
  )

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 md:px-8"
    >
      <div className="absolute inset-0 opacity-25 blur-[10px]" aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="hero-gradient-subtle absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <div className="space-y-5">
          {headlineWords.map((line, index) => (
            <motion.h1
              key={line.join('-')}
              className="font-display text-5xl font-semibold leading-[0.88] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]"
              initial={{ opacity: 0, y: 32, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex flex-wrap justify-center gap-x-[0.18em]">
                {line.map((word) => (
                  <span
                    key={word}
                    className={word === 'Premium' ? 'hero-premium-word' : undefined}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </motion.h1>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-8 max-w-lg text-base leading-8 text-white/60 md:text-lg md:leading-9"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Premium custom portfolio and business websites that increase authority, trust, and perceived value.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticButton href="#contact">Start a Project</MagneticButton>
          <MagneticButton href="#projects" variant="secondary">
            View Our Work
          </MagneticButton>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-white/60"
      >
        <span>Scroll to explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      {/* Two-column: text left, stats right — no card wrapper */}
      <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <Reveal>
          <p className="section-kicker">About the studio</p>
          <h2 className="section-title max-w-xl">
            Custom websites engineered to elevate personal brands and businesses through modern design, motion, and premium digital experiences.
          </h2>
          <p className="section-copy max-w-xl">
            We design digital identities that feel composed, expensive, and unmistakably intentional. Every visual decision is connected to authority, trust, differentiation, and the way your market perceives value.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-8">
            {/* Stats — clean horizontal layout, no card */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl tracking-[-0.06em] text-white md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

            {/* Principles — horizontal icon + text rows */}
            <div className="space-y-5">
              {studioPrinciples.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/[0.03]">
                    <item.icon className="h-4 w-4 text-cyan-300/70" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/90">{item.title}</h3>
                    <p className="mt-1 text-base leading-7 text-white/50">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const featured = services.find((s) => s.featured)
  const secondary = services.filter((s) => !s.featured)

  return (
    <section id="services" className="section-shell">
      <Reveal>
        <p className="section-kicker">Services</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="section-title max-w-2xl">
            A futuristic service system built around premium presentation, technical clarity, and tactile interaction.
          </h2>
          <p className="max-w-md text-base leading-8 text-white/55">
            Each service is delivered as a bespoke digital product, not a recycled agency package.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 space-y-16">
        {/* Featured service — full-width editorial, no card */}
        {featured && (
          <Reveal>
            <div className="relative">
              {/* Large background number */}
              <span className="pointer-events-none absolute -top-6 -left-2 font-display text-[8rem] font-bold leading-none text-white/[0.02] select-none md:text-[12rem]">
                01
              </span>
              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="icon-chip-featured">
                      <featured.icon className="h-8 w-8 text-cyan-300" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                      Featured Service
                    </p>
                  </div>
                  <h3 className="font-display text-3xl tracking-[-0.04em] text-white md:text-5xl">
                    {featured.title}
                  </h3>
                  <p className="max-w-xl text-lg leading-9 text-white/60">
                    {featured.description}
                  </p>
                  <div>
                    <MagneticButton href="#contact">Start a Project</MagneticButton>
                  </div>
                </div>
                {/* Large visual accent */}
                <div className="hidden lg:flex lg:items-center lg:justify-center">
                  <div className="relative">
                    <div className={`h-48 w-48 rounded-full bg-gradient-to-br ${featured.accent} opacity-20 blur-3xl`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`h-32 w-32 rounded-2xl bg-gradient-to-br ${featured.accent} opacity-40`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Secondary services — clean 2-column grid, minimal cards */}
        <div className="grid gap-px bg-white/[0.04] md:grid-cols-2">
          {secondary.slice(0, 2).map((service) => (
            <Reveal key={service.title}>
              <div className="group bg-ink p-8 transition-colors duration-500 hover:bg-white/[0.02]">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div>
                    <div className="icon-chip-accent mb-6">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-xl font-medium text-white">{service.title}</h3>
                    <p className="text-base leading-8 text-white/55">{service.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-px bg-white/[0.04] md:grid-cols-2 xl:grid-cols-3">
          {secondary.slice(2).map((service) => (
            <Reveal key={service.title}>
              <div className="group bg-ink p-8 transition-colors duration-500 hover:bg-white/[0.02]">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div>
                    <div className="icon-chip-accent mb-6">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-xl font-medium text-white">{service.title}</h3>
                    <p className="text-base leading-8 text-white/55">{service.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyHireUsSection() {
  return (
    <section id="why-us" className="section-shell overflow-hidden">
      <Reveal>
        <p className="section-kicker">Why hire us</p>
        <h2 className="section-title max-w-2xl">
          Premium brands choose Code Brand Studio for clarity, craft, and digital execution that feels different immediately.
        </h2>
      </Reveal>
      <div className="marquee-track mt-12">
        {[...differentiators, ...differentiators].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="why-card-editorial"
          >
            <span className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-cyan-300/60">
              0{(index % differentiators.length) + 1}
            </span>
            <p className="font-display text-2xl leading-snug tracking-[-0.04em] text-white/90 md:text-3xl">
              {item}
            </p>
            <div className="mt-8 h-px w-12 bg-cyan-300/20" />
          </div>
        ))}
      </div>
    </section>
  )
}

const projectAccents = {
  blue: {
    category: 'text-cyan-300/80',
    visual: 'from-cyan-300/8 to-cyan-500/3',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(103,232,249,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.35),transparent_28%),linear-gradient(135deg,rgba(103,232,249,0.1),transparent)]',
    dot: ['bg-cyan-300/40', 'bg-cyan-300/25', 'bg-cyan-300/15'],
  },
  green: {
    category: 'text-emerald-300/80',
    visual: 'from-emerald-300/8 to-emerald-500/3',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(52,211,153,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.35),transparent_28%),linear-gradient(135deg,rgba(52,211,153,0.1),transparent)]',
    dot: ['bg-emerald-300/40', 'bg-emerald-300/25', 'bg-emerald-300/15'],
  },
  purple: {
    category: 'text-violet-300/80',
    visual: 'from-violet-300/8 to-violet-500/3',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(167,139,250,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.35),transparent_28%),linear-gradient(135deg,rgba(167,139,250,0.1),transparent)]',
    dot: ['bg-violet-300/40', 'bg-violet-300/25', 'bg-violet-300/15'],
  },
} as const

function ProjectCard({ project, accent }: { project: (typeof projects)[number]; accent: (typeof projectAccents)[ProjectAccent] }) {
  return (
    <Reveal>
      <Link
        to={`/work/${project.slug}`}
        className="project-card-showcase group block"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center space-y-6 py-2">
            <p className={`text-xs uppercase tracking-[0.28em] ${accent.category}`}>
              {project.category}
            </p>
            <h3 className="font-display text-4xl tracking-[-0.05em] text-white md:text-6xl">
              {project.name}
            </h3>
            <p className="max-w-xl text-lg leading-9 text-white/60">{project.summary}</p>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-3xl tracking-[-0.04em] text-white md:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/45">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-base text-white/40 transition group-hover:text-white/70">
                <span>View full case study</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </div>
          <div className={`project-showcase bg-gradient-to-br ${accent.visual}`}>
            <div className="p-6 md:p-8">
              <div className="project-mockup-screen">
                <div className="mb-4 flex items-center gap-2">
                  {accent.dot.map((dotClass: string, i: number) => (
                    <span key={i} className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
                  ))}
                </div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/35">
                  {project.heroLabel}
                </p>
                <ProjectVideoPreview
                  slug={project.slug}
                  mockupClass={accent.mockup}
                  heroLabel={project.heroLabel}
                />
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Challenge</p>
                    <p className="mt-2 text-xs leading-6 text-white/50 line-clamp-3">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Solution</p>
                    <p className="mt-2 text-xs leading-6 text-white/50 line-clamp-3">{project.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export function ProjectsSection() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <p className="section-kicker">Featured projects</p>
        <h2 className="section-title max-w-2xl">
          Premium case studies designed to feel like digital products, not static portfolio entries.
        </h2>
      </Reveal>

      <div className="mt-12 space-y-8">
        {/* Featured project */}
        <Reveal>
          <Link
            to={`/work/${featured.slug}`}
            className="project-card-showcase group block"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-center space-y-6 py-2">
                <p className={`text-xs uppercase tracking-[0.28em] ${projectAccents[featured.accent].category}`}>
                  {featured.category}
                </p>
                <h3 className="font-display text-4xl tracking-[-0.05em] text-white md:text-6xl">
                  {featured.name}
                </h3>
                <p className="max-w-xl text-lg leading-9 text-white/60">{featured.summary}</p>
                <div className="grid grid-cols-3 gap-4">
                  {featured.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display text-3xl tracking-[-0.04em] text-white md:text-4xl">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/45">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-base text-white/40 transition group-hover:text-white/70">
                    <span>View full case study</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
              <div className={`project-showcase bg-gradient-to-br ${projectAccents[featured.accent].visual}`}>
                <div className="p-6 md:p-8">
                  <div className="project-mockup-screen">
                    <div className="mb-4 flex items-center gap-2">
                      {projectAccents[featured.accent].dot.map((dotClass: string, i: number) => (
                        <span key={i} className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
                      ))}
                    </div>
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/35">
                      {featured.heroLabel}
                    </p>
                    <ProjectVideoPreview
                      slug={featured.slug}
                      mockupClass={projectAccents[featured.accent].mockup}
                      heroLabel={featured.heroLabel}
                    />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Challenge</p>
                        <p className="mt-2 text-xs leading-6 text-white/50 line-clamp-3">{featured.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Solution</p>
                        <p className="mt-2 text-xs leading-6 text-white/50 line-clamp-3">{featured.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Remaining projects */}
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} accent={projectAccents[project.accent]} />
        ))}
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section id="process" className="section-shell">
      <Reveal>
        <p className="section-kicker">How we work</p>
        <h2 className="section-title max-w-2xl">
          A structured process that protects your time and delivers a premium outcome.
        </h2>
      </Reveal>
      <div className="relative mt-16">
        {/* Vertical connecting line */}
        <div className="absolute left-[1.55rem] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/30 via-violet-400/15 to-transparent md:block" />

        <div className="space-y-10">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="group relative grid grid-cols-[auto_1fr] gap-6 md:gap-10">
                {/* Timeline node */}
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white/[0.06] transition-colors duration-500 group-hover:bg-cyan-300/10">
                    <span className="font-display text-sm tracking-[-0.02em] text-white/40 transition-colors group-hover:text-cyan-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content — no card, just text on the page */}
                <div className="pt-2 md:pt-3">
                  <h3 className="font-display text-2xl tracking-[-0.04em] text-white md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-white/55">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
    <section className="section-shell overflow-hidden">
      <Reveal>
        <p className="section-kicker">Testimonials</p>
        <h2 className="section-title max-w-2xl">
          Trust built through premium execution, strategic clarity, and the feeling that every pixel has been considered.
        </h2>
      </Reveal>
      <div className="marquee-track mt-12">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div key={`${item.name}-${index}`} className="testimonial-editorial">
            <div className="mb-6 flex gap-1 text-cyan-300/60">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xl leading-9 text-white/75 md:text-2xl">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <div className="text-right">
                <p className="text-base font-medium text-white/80">{item.name}</p>
                <p className="text-xs text-white/40">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section id="contact" className="section-shell pb-16 md:pb-20">
      {/* Full-width editorial CTA — no card */}
      <div className="relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,rgba(139,233,255,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_70%_45%,rgba(143,131,255,0.03),transparent)]" />

        <div className="relative px-8 py-16 text-center md:px-16 md:py-24">
          <p className="section-kicker">Start your next move</p>
          <h2 className="section-title mx-auto max-w-3xl">
            Your website should feel like your brand deserves attention.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/55">
            Let&apos;s build a digital presence that sharpens authority, elevates trust, and makes your brand feel impossible to ignore.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href={`mailto:${contact.email}`}>Start a Project</MagneticButton>
            <MagneticButton href={`mailto:${contact.email}?subject=Discovery Call`} variant="secondary">
              {contact.calendarLabel}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CaseStudyLayout({
  name,
  category,
  summary,
  challenge,
  solution,
  metrics,
  stack,
  accent,
}: {
  name: string
  category: string
  summary: string
  challenge: string
  solution: string
  metrics: { value: string; label: string }[]
  stack: string[]
  accent: string
}) {
  const studyAccent = projectAccents[accent as keyof typeof projectAccents] ?? projectAccents.blue

  return (
    <main className="min-h-screen bg-ink text-frost">
      <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: studyAccent.mockup.replace('bg-[', '').replace(']', ''),
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-base text-white/56 transition hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className={`section-kicker ${studyAccent.category}`}>{category}</p>
              <h1 className="font-display text-5xl leading-none tracking-[-0.06em] text-white md:text-7xl">
                {name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">{summary}</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className={`font-display text-3xl tracking-[-0.04em] ${studyAccent.category}`}>{metric.value}</p>
                  <p className="mt-2 text-base leading-6 text-white/50">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-6 md:pt-8">
        <div className="grid gap-px bg-white/[0.04] lg:grid-cols-2">
          <div className="bg-ink p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Problem statement</p>
            <p className="text-base leading-8 text-white/66">{challenge}</p>
          </div>
          <div className="bg-ink p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Solution overview</p>
            <p className="text-base leading-8 text-white/66">{solution}</p>
          </div>
        </div>
        <div className="mt-px grid gap-px bg-white/[0.04] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-ink p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Process breakdown</p>
            <div className="space-y-4">
              {[
                'Narrative positioning and content mapping',
                'Visual direction and premium UI composition',
                'Motion prototyping and interaction tuning',
                'High-performance build and optimization',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/66">
                  <Check className={`mt-1 h-4 w-4 flex-shrink-0 ${studyAccent.category}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-ink p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Stack</p>
            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span key={item} className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-white/60">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
