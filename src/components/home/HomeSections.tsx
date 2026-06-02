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
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 md:px-8"
    >
      <div className="hero-gradient absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 opacity-60 blur-[2px]" aria-hidden="true">
        <Suspense fallback={<div className="absolute inset-0 bg-black/30" />}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-8">
          <div className="space-y-4">
            {headlineWords.map((line, index) => (
              <motion.h1
                key={line.join('-')}
                className="font-display text-5xl font-semibold leading-[0.85] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[6.2rem]"
                initial={{ opacity: 0, y: 28, filter: 'blur(14px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: index * 0.14 }}
              >
                <span className="inline-flex flex-wrap gap-x-[0.18em]">
                  {line.map((word) => (
                    <span
                      key={word}
                      className={
                        word === 'Premium'
                          ? 'hero-premium-word'
                          : undefined
                      }
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </motion.h1>
            ))}
          </div>
          <motion.p
            className="max-w-xl text-base leading-8 text-white/68 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Code Brand Studio builds premium custom portfolio and business websites that increase authority, trust, and perceived value.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48 }}
          >
            <MagneticButton href="#contact">Start a Project</MagneticButton>
            <MagneticButton href="#projects" variant="secondary">
              View Our Work
            </MagneticButton>
          </motion.div>
        </div>

        <Reveal className="relative lg:justify-self-end">
          <div className="glass-panel mx-auto max-w-lg p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/42">
              <span>Premium web systems</span>
              <span>Realtime authority shift</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Luxury-first branding', 'Editorial structure and cinematic transitions tuned for premium perception.'],
                ['Performance engineering', 'Fast-loading builds with modern motion and resilient frontend architecture.'],
                ['Interactive storytelling', 'Depth, tactility, and motion hierarchy without sacrificing clarity.'],
                ['Business outcomes', 'More trust, stronger inquiries, and sharper brand positioning.'],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="mb-2 text-sm font-medium text-white">{title}</p>
                  <p className="text-sm leading-7 text-white/52">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/50"
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
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
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
          <div className="glass-panel relative p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="font-display text-4xl tracking-[-0.06em] text-white">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/42">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {studioPrinciples.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <div className="glass-card h-full p-6">
              <item.icon className="mb-5 h-6 w-6 text-cyan-300" />
              <h3 className="mb-3 text-xl text-white">{item.title}</h3>
              <p className="leading-7 text-white/58">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <Reveal>
        <p className="section-kicker">Services</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="section-title max-w-2xl">
            A futuristic service system built around premium presentation, technical clarity, and tactile interaction.
          </h2>
          <p className="max-w-md text-sm leading-7 text-white/55">
            Each service is delivered as a bespoke digital product, not a recycled agency package.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 space-y-6">
        {services.map((service) =>
          service.featured ? (
            <Reveal key={service.title}>
              <article className="service-card-featured group relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-12">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-[0.08] transition duration-500 group-hover:opacity-[0.18]`} />
                <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300/70">Featured Service</p>
                    <h3 className="font-display text-3xl tracking-[-0.04em] text-white md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-8 text-white/62">{service.description}</p>
                    <div className="mt-8">
                      <MagneticButton href="#contact">Start a Project</MagneticButton>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="icon-chip-featured">
                      <service.icon className="h-8 w-8 text-cyan-300" />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ) : null,
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {services
            .filter((s) => !s.featured)
            .slice(0, 2)
            .map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="service-card-secondary group relative overflow-hidden rounded-[1.75rem] border border-white/8 p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition duration-500 group-hover:opacity-100`} />
                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <div className="icon-chip-accent" data-accent={service.accent}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-white">{service.title}</h3>
                      <p className="text-sm leading-7 text-white/58">{service.description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services
            .filter((s) => !s.featured)
            .slice(2)
            .map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="service-card-secondary group relative overflow-hidden rounded-[1.75rem] border border-white/8 p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition duration-500 group-hover:opacity-100`} />
                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <div className="icon-chip-accent" data-accent={service.accent}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-white">{service.title}</h3>
                      <p className="text-sm leading-7 text-white/58">{service.description}</p>
                    </div>
                  </div>
                </article>
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
          <article key={`${item}-${index}`} className="why-card">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                0{(index % differentiators.length) + 1}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/46">
                Why us
              </span>
            </div>
            <p className="font-display text-3xl leading-tight tracking-[-0.05em] text-white">
              {item}
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/48">
              <span>Luxury strategy</span>
              <span>Technical precision</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const projectAccents = {
  blue: {
    category: 'text-cyan-300/80',
    border: 'group-hover:border-cyan-300/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(103,232,249,0.06)]',
    metric: 'border-cyan-300/15 bg-cyan-300/[0.04] text-cyan-100/80',
    visual: 'from-cyan-300/8 to-cyan-500/3',
    screen: 'border-cyan-300/10',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(103,232,249,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.35),transparent_28%),linear-gradient(135deg,rgba(103,232,249,0.1),transparent)]',
    dot: ['bg-cyan-300/40', 'bg-cyan-300/25', 'bg-cyan-300/15'],
  },
  green: {
    category: 'text-emerald-300/80',
    border: 'group-hover:border-emerald-300/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(52,211,153,0.06)]',
    metric: 'border-emerald-300/15 bg-emerald-300/[0.04] text-emerald-100/80',
    visual: 'from-emerald-300/8 to-emerald-500/3',
    screen: 'border-emerald-300/10',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(52,211,153,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.35),transparent_28%),linear-gradient(135deg,rgba(52,211,153,0.1),transparent)]',
    dot: ['bg-emerald-300/40', 'bg-emerald-300/25', 'bg-emerald-300/15'],
  },
  purple: {
    category: 'text-violet-300/80',
    border: 'group-hover:border-violet-300/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(167,139,250,0.06)]',
    metric: 'border-violet-300/15 bg-violet-300/[0.04] text-violet-100/80',
    visual: 'from-violet-300/8 to-violet-500/3',
    screen: 'border-violet-300/10',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(167,139,250,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.35),transparent_28%),linear-gradient(135deg,rgba(167,139,250,0.1),transparent)]',
    dot: ['bg-violet-300/40', 'bg-violet-300/25', 'bg-violet-300/15'],
  },
} as const

function ProjectCard({ project, accent }: { project: (typeof projects)[number]; accent: (typeof projectAccents)[ProjectAccent] }) {
  return (
    <Reveal key={project.slug}>
      <Link
        to={`/work/${project.slug}`}
        className={`project-card group block ${accent.border} ${accent.glow}`}
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-6">
            <p className={`text-xs uppercase tracking-[0.28em] ${accent.category}`}>
              {project.category}
            </p>
            <h3 className="font-display text-4xl tracking-[-0.05em] text-white md:text-5xl">
              {project.name}
            </h3>
            <p className="max-w-xl text-base leading-8 text-white/58">{project.summary}</p>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className={`rounded-2xl border p-4 ${accent.metric}`}>
                  <p className="font-display text-2xl tracking-[-0.04em] text-white md:text-3xl">
                    {metric.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-white/50">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`project-visual bg-gradient-to-b ${accent.visual}`}>
            <div className={`project-screen ${accent.screen}`}>
              <div className="mb-8 flex items-center gap-2">
                {accent.dot.map((dotClass: string, i: number) => (
                  <span key={i} className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
                ))}
              </div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/35">
                {project.heroLabel}
              </p>
              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/8 to-transparent p-5">
                  <div className={`h-40 rounded-[1.5rem] ${accent.mockup}`} />
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/34">Challenge</p>
                    <p className="mt-3 text-sm leading-7 text-white/58">{project.challenge}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/34">Solution</p>
                    <p className="mt-3 text-sm leading-7 text-white/58">{project.solution}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-white/65">
                <span>View case study</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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

      <div className="mt-12 space-y-6">
        {/* Featured project — full-width showcase */}
        <Reveal>
          <Link
            to={`/work/${featured.slug}`}
            className={`project-card-featured group block border ${projectAccents[featured.accent].border} ${projectAccents[featured.accent].glow}`}
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
                    <div key={metric.label} className={`rounded-2xl border p-5 ${projectAccents[featured.accent].metric}`}>
                      <p className="font-display text-3xl tracking-[-0.04em] text-white md:text-4xl">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-sm leading-5 text-white/50">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-sm text-white/40 transition group-hover:text-white/70">
                    <span>View full case study</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
              <div className={`project-showcase bg-gradient-to-br ${projectAccents[featured.accent].visual}`}>
                <div className="p-6 md:p-8">
                  {/* Large desktop screenshot */}
                  <div className="project-mockup-screen">
                    <div className="mb-4 flex items-center gap-2">
                      {projectAccents[featured.accent].dot.map((dotClass, i) => (
                        <span key={i} className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
                      ))}
                    </div>
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/35">
                      {featured.heroLabel}
                    </p>
                    <div className={`aspect-[16/10] rounded-[1.5rem] border border-white/10 ${projectAccents[featured.accent].mockup} overflow-hidden`} />
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className={`rounded-xl border border-white/6 bg-white/[0.03] p-4`}>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Challenge</p>
                        <p className="mt-2 text-xs leading-6 text-white/55 line-clamp-3">{featured.challenge}</p>
                      </div>
                      <div className={`rounded-xl border border-white/6 bg-white/[0.03] p-4`}>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Solution</p>
                        <p className="mt-2 text-xs leading-6 text-white/55 line-clamp-3">{featured.solution}</p>
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
      <div className="relative mt-14">
        {/* Vertical connecting line */}
        <div className="absolute left-[1.55rem] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/20 to-transparent md:block" />

        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="group relative grid grid-cols-[auto_1fr] gap-5 md:gap-8">
                {/* Timeline node */}
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-[3.1rem] w-[3.1rem] items-center justify-center rounded-2xl border border-white/10 bg-ink/80 shadow-[0_0_30px_rgba(103,232,249,0.08)] backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_40px_rgba(103,232,249,0.15)]">
                    <span className="font-display text-sm tracking-[-0.02em] text-white/50 transition-colors group-hover:text-cyan-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-6 transition-all duration-500 group-hover:border-white/[0.12] group-hover:bg-white/[0.04] md:px-8 md:py-7">
                  <h3 className="font-display text-2xl tracking-[-0.04em] text-white md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-white/58">{step.description}</p>
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
          <article key={`${item.name}-${index}`} className="testimonial-card">
            <div className="mb-6 flex gap-1 text-cyan-300">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-lg leading-8 text-white/72">“{item.quote}”</p>
            <div className="mt-8">
              <p className="text-sm font-medium text-white">{item.name}</p>
              <p className="text-sm text-white/45">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section id="contact" className="section-shell pb-16 md:pb-20">
      <div className="glass-panel relative overflow-hidden p-8 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,233,255,0.18),transparent_22%),radial-gradient(circle_at_80%_25%,rgba(143,131,255,0.18),transparent_28%)]" />
        <div className="relative">
          <p className="section-kicker">Start your next move</p>
          <h2 className="section-title max-w-3xl">
            Your website should feel like your brand deserves attention.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/58">
            Let’s build a digital presence that sharpens authority, elevates trust, and makes your brand feel impossible to ignore.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/56 transition hover:text-white"
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
            <div className="glass-panel p-6">
              <div className={`rounded-[2rem] border border-white/8 p-8 ${studyAccent.mockup}`}>
                <div className="grid gap-4 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                      <p className={`font-display text-3xl tracking-[-0.04em] ${studyAccent.category}`}>{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-white/50">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-6 md:pt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Problem statement</p>
            <p className="text-base leading-8 text-white/66">{challenge}</p>
          </div>
          <div className="glass-card p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Solution overview</p>
            <p className="text-base leading-8 text-white/66">{solution}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Process breakdown</p>
            <div className="space-y-4">
              {[
                'Narrative positioning and content mapping',
                'Visual direction and premium UI composition',
                'Motion prototyping and interaction tuning',
                'High-performance build and optimization',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/66">
                  <Check className={`mt-1 h-4 w-4 ${studyAccent.category}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Stack</p>
            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span key={item} className={`rounded-full border px-4 py-2 text-sm ${studyAccent.metric}`}>
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
