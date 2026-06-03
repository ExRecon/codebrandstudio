import { Suspense, lazy, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Check, ChevronRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  comparison,
  contact,
  differentiators,
  founder,
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
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { TiltCard } from '../ui/TiltCard'
import { ParallaxLayer } from '../ui/ParallaxLayer'
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

        <motion.a
          href="#about"
          className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-white/60"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: 3, transition: { duration: 0.3 } }}
        >
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
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
            {/* Stats — animated counter with parallax */}
            <ParallaxLayer speed={0.015}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {stats.map((stat, i) => (
                  <div key={stat.label}>
                    <AnimatedCounter value={stat.value} delay={0.12 + i * 0.1} />
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/40">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ParallaxLayer>

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

export function FounderSection() {
  return (
    <section id="founder" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* Left — Avatar + highlights */}
        <Reveal>
          <div className="space-y-8">
            {/* Avatar — parallax + tilt */}
            <ParallaxLayer speed={-0.02}>
              <TiltCard className="relative inline-flex" intensity={10}>
                <div className="h-28 w-28 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/20 to-violet-400/10 md:h-32 md:w-32">
                  <div className="flex h-full w-full items-center justify-center font-display text-3xl font-semibold tracking-[-0.04em] text-white/70 md:text-4xl">
                    A
                  </div>
                </div>
                <div className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full border-2 border-ink bg-emerald-400" />
              </TiltCard>
            </ParallaxLayer>

            <div>
              <h3 className="font-display text-2xl tracking-[-0.04em] text-white md:text-3xl">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm text-white/40">{founder.role}</p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {founder.highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-xl tracking-[-0.04em] text-cyan-300/80 md:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-white/35">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right — Bio + stack */}
        <Reveal delay={0.1}>
          <div className="space-y-8">
            <div>
              <p className="section-kicker">Meet the founder</p>
              <p className="mt-4 text-xl leading-10 text-white/70 md:text-2xl md:leading-10">
                {founder.headline}
              </p>
            </div>

            <div className="space-y-5">
              {founder.bio.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-white/55">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stack */}
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/30">Core expertise</p>
              <div className="flex flex-wrap gap-3">
                {founder.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-white/55"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <MagneticButton href="#contact">Work with {founder.name}</MagneticButton>
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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="section-title max-w-2xl">
            A futuristic service system built around premium presentation, technical clarity, and tactile interaction.
          </h2>
          <p className="max-w-lg text-lg leading-9 text-white/60">
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
              <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
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
                {/* Visual accent — parallax depth */}
                <ParallaxLayer speed={-0.025} className="hidden lg:flex lg:items-center lg:justify-center">
                  <div className="relative">
                    <div className={`h-64 w-64 rounded-full bg-gradient-to-br ${featured.accent} opacity-20 blur-3xl`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className={`h-40 w-40 rounded-3xl bg-gradient-to-br ${featured.accent} opacity-40`}
                        animate={{ rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
                      <p className="text-xs text-white/40">01</p>
                    </div>
                  </div>
                </ParallaxLayer>
              </div>
            </div>
          </Reveal>
        )}

        {/* Secondary services — tilt cards */}
        <div className="grid gap-px bg-white/[0.04] md:grid-cols-2">
          {secondary.slice(0, 2).map((service) => (
            <Reveal key={service.title}>
              <TiltCard className="h-full" intensity={6}>
                <div className="group h-full bg-ink p-8 transition-colors duration-500 hover:bg-white/[0.02]">
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
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-px bg-white/[0.04] md:grid-cols-2 xl:grid-cols-3">
          {secondary.slice(2).map((service) => (
            <Reveal key={service.title}>
              <TiltCard className="h-full" intensity={6}>
                <div className="group h-full bg-ink p-8 transition-colors duration-500 hover:bg-white/[0.02]">
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
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyUsSection() {
  return (
    <section id="why-us" className="section-shell">
      <Reveal>
        <p className="section-kicker">Why us</p>
        <h2 className="section-title max-w-2xl">
          Premium brands choose Code Brand Studio for clarity, craft, and digital execution that feels different immediately.
        </h2>
      </Reveal>

      {/* Differentiators — tilt cards */}
      <div className="mt-14 grid grid-cols-1 gap-px bg-white/[0.04] md:grid-cols-2">
        {differentiators.map((item, index) => (
          <Reveal key={item} delay={index * 0.08}>
            <TiltCard className="h-full" intensity={6}>
              <div className="group relative h-full bg-ink p-8 transition-colors duration-500 hover:bg-white/[0.02]">
                {/* Large background number */}
                <span className="pointer-events-none absolute -top-2 -left-1 font-display text-[6rem] font-bold leading-none text-white/[0.02] select-none md:text-[8rem]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="relative">
                  <p className="font-display text-xl leading-snug tracking-[-0.04em] text-white/85 md:text-2xl">
                    {item}
                  </p>
                  <div className="mt-6 h-px w-10 bg-gradient-to-r from-cyan-300/30 to-transparent transition-all duration-500 group-hover:w-16 group-hover:from-cyan-300/50" />
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Divider between blocks */}
      <div className="mx-auto mt-16 mb-12 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Comparison table */}
      <div className="overflow-hidden">
        {/* Column headers */}
        <div className="grid grid-cols-2 gap-6 border-b border-white/[0.06] pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/25">
              Typical Freelancer
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/60">
              Code Brand Studio
            </p>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="divide-y divide-white/[0.03]">
          {comparison.map((row) => (
            <div key={row.typical} className="grid grid-cols-2 gap-6 py-5">
              <p className="text-base leading-7 text-white/35 md:text-lg md:leading-8">
                {row.typical}
              </p>
              <p className="text-base leading-7 text-white/75 md:text-lg md:leading-8">
                {row.studio}
              </p>
            </div>
          ))}
        </div>
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
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          {/* Left — text info */}
          <div className="flex flex-col justify-center space-y-6">
            <p className={`text-xs uppercase tracking-[0.28em] ${accent.category}`}>
              {project.category}
            </p>
            <h3 className="font-display text-4xl tracking-[-0.05em] text-white md:text-6xl">
              {project.name}
            </h3>
            <p className="max-w-lg text-lg leading-9 text-white/60">{project.summary}</p>
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

          {/* Right — tilt card showcase */}
          <TiltCard intensity={4}>
            <div className={`project-showcase bg-gradient-to-br ${accent.visual}`}>
            <div className="flex items-center gap-2 px-2 pt-3 md:px-4 md:pt-4">
              {accent.dot.map((dotClass: string, i: number) => (
                <span key={i} className={`h-2 w-2 rounded-full md:h-2.5 md:w-2.5 ${dotClass}`} />
              ))}
            </div>
            <p className="mt-3 px-2 text-[10px] uppercase tracking-[0.3em] text-white/30 md:px-4 md:mt-4 md:text-xs">
              {project.heroLabel}
            </p>
            <ProjectVideoPreview
              slug={project.slug}
              mockupClass={accent.mockup}
              heroLabel={project.heroLabel}
            />
            <div className="mt-3 grid grid-cols-2 gap-4 px-2 pb-3 md:px-4 md:pb-4">
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
          </TiltCard>
        </div>
      </Link>
    </Reveal>
  )
}

export function ProjectsSection() {
  const [featured, ...rest] = projects
  const featuredAccent = projectAccents[featured.accent]

  return (
    <section id="projects" className="section-shell-wide">
      <Reveal>
        <p className="section-kicker">Featured projects</p>
        <h2 className="section-title max-w-2xl">
          Premium case studies designed to feel like digital products, not static portfolio entries.
        </h2>
      </Reveal>

      <div className="mt-16 space-y-16">
        {/* Featured project — full bleed, no card wrapper */}
        <Reveal>
          <Link
            to={`/work/${featured.slug}`}
            className="project-card-showcase group block"
          >
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
              {/* Left — text info */}
              <div className="flex flex-col justify-center space-y-6">
                <p className={`text-xs uppercase tracking-[0.28em] ${featuredAccent.category}`}>
                  {featured.category}
                </p>
                <h3 className="font-display text-4xl tracking-[-0.05em] text-white md:text-6xl">
                  {featured.name}
                </h3>
                <p className="max-w-lg text-lg leading-9 text-white/60">{featured.summary}</p>
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

              {/* Right — parallax showcase with tilt */}
              <TiltCard intensity={4}>
                <div className={`project-showcase bg-gradient-to-br ${featuredAccent.visual}`}>
                  <div className="flex items-center gap-2 px-3 pt-4 md:px-5 md:pt-5">
                    {featuredAccent.dot.map((dotClass: string, i: number) => (
                      <span key={i} className={`h-2 w-2 rounded-full md:h-2.5 md:w-2.5 ${dotClass}`} />
                    ))}
                  </div>
                  <p className="mt-3 px-3 text-[10px] uppercase tracking-[0.3em] text-white/30 md:px-5 md:mt-4 md:text-xs">
                    {featured.heroLabel}
                  </p>
                  <ProjectVideoPreview
                    slug={featured.slug}
                    mockupClass={featuredAccent.mockup}
                    heroLabel={featured.heroLabel}
                  />
                  <div className="mt-3 grid grid-cols-2 gap-4 px-3 pb-4 md:px-5 md:pb-5">
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
              </TiltCard>
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
        {/* Vertical connecting line — draws on scroll */}
        <motion.div
          className="absolute left-[1.55rem] top-0 hidden w-px origin-top bg-gradient-to-b from-cyan-400/30 via-violet-400/15 to-transparent md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '100%' }}
        />

        <div className="space-y-10">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="group relative grid grid-cols-[auto_1fr] gap-6 md:gap-10">
                {/* Timeline node — scale up + glow on reveal */}
                <div className="relative flex flex-col items-center">
                  <motion.div
                    className="relative z-10 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white/[0.06] transition-colors duration-500 group-hover:bg-cyan-300/10"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="font-display text-sm tracking-[-0.02em] text-white/40 transition-colors group-hover:text-cyan-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
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
  const [marqueePaused, setMarqueePaused] = useState(false)

  return (
    <section className="section-shell overflow-hidden">
      <Reveal>
        <p className="section-kicker">Testimonials</p>
        <h2 className="section-title max-w-2xl">
          Trust built through premium execution, strategic clarity, and the feeling that every pixel has been considered.
        </h2>
      </Reveal>
      <motion.div
        className="marquee-track mt-12"
        style={{ animationPlayState: marqueePaused ? 'paused' : 'running' }}
        onHoverStart={() => setMarqueePaused(true)}
        onHoverEnd={() => setMarqueePaused(false)}
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <motion.div
            key={`${item.name}-${index}`}
            className="testimonial-editorial"
            whileHover={{
              borderColor: 'rgba(103, 232, 249, 0.25)',
              backgroundColor: 'rgba(255, 255, 255, 0.01)',
            }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export function CTASection() {
  return (
    <section id="contact" className="section-shell pb-16 md:pb-20">
      {/* Full-width editorial CTA — no card */}
      <div className="relative overflow-hidden">
        {/* Background accents — parallax depth */}
        <ParallaxLayer speed={0.01} className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,rgba(139,233,255,0.04),transparent)]" />
        </ParallaxLayer>
        <ParallaxLayer speed={-0.015} className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_40%_35%_at_70%_45%,rgba(143,131,255,0.03),transparent)]" />
        </ParallaxLayer>

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
        <div className="relative z-10 mx-auto max-w-[1440px]">
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
            <p className="max-w-2xl text-base leading-8 text-white/66">{challenge}</p>
          </div>
          <div className="bg-ink p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Solution overview</p>
            <p className="max-w-2xl text-base leading-8 text-white/66">{solution}</p>
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
