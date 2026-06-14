import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'
import { TiltCard } from '../../ui/TiltCard'

function ProjectCard({ project, i }: { project: typeof projects[number]; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Reveal delay={i * 0.08}>
      <TiltCard maxTilt={3}>
        <Link
          to={`/work/${project.slug}`}
          className="card-surface group block"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
            {/* Left — Project info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan">
                {project.category}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-lg text-base leading-7 text-white/55">
                {project.summary}
              </p>

              {/* Metrics */}
              <div className="mt-6 flex flex-wrap gap-8">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-2xl font-bold tracking-tight text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-white/40">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Stack — spring tag spawning */}
              <div className="mt-6 flex flex-wrap gap-2">
                <AnimatePresence>
                  {project.stack.map((tech, ti) => (
                    <motion.span
                      key={tech}
                      className="rounded-full border border-white/[0.14] bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-white/75"
                      initial={{ scale: 0.9, opacity: 0.7 }}
                      animate={hovered ? {
                        scale: [0.9, 1.08, 1],
                        opacity: 1,
                        transition: {
                          type: 'spring',
                          damping: 12,
                          stiffness: 300,
                          delay: ti * 0.06,
                        },
                      } : { scale: 1, opacity: 1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 text-sm text-white/50 transition group-hover:text-white/80">
                View case study
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>

            {/* Right — Challenge/Solution */}
            <div className="flex flex-col justify-center gap-6 border-t border-white/[0.06] pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Challenge</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{project.challenge}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Solution</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{project.solution}</p>
              </div>
            </div>
          </div>
        </Link>
      </TiltCard>
    </Reveal>
  )
}

export function ProjectsSection() {
  return (
    <section id="work" className="section-shell" aria-label="Featured projects">
      <Reveal>
        <p className="section-kicker">Work</p>
        <h2 className="section-title max-w-2xl">
          Systems we&apos;ve shipped.
        </h2>
        <p className="section-subtitle">
          Every project is a production system — not a prototype, not a demo.
        </p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} i={i} />
        ))}
      </div>
    </section>
  )
}
