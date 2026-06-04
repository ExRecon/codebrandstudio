import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../../data/site'
import type { AccentStyle } from '../../../data/accents'
import { projectAccents } from '../../../data/accents'
import { Reveal } from '../../ui/Reveal'
import { TiltCard } from '../../ui/TiltCard'
import { ProjectVideoPreview } from '../../ui/ProjectVideoPreview'

function ProjectCard({ project, accent }: { project: (typeof projects)[number]; accent: AccentStyle }) {
  return (
    <Reveal>
      <Link
        to={`/work/${project.slug}`}
        className="project-card-showcase group block"
      >
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <p className={`text-xs uppercase tracking-[0.28em] ${accent.category}`}>
              {project.category}
            </p>
            <h3 className="font-display text-4xl tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
              {project.name}
            </h3>
            <p className="max-w-lg text-lg leading-9 text-white/65">{project.summary}</p>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-3xl tracking-[-0.04em] text-white md:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/55">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-base text-white/55 transition group-hover:text-white/80">
                <span>View full case study</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </div>

          <TiltCard intensity={4}>
            <div className={`project-showcase bg-gradient-to-br ${accent.visual}`}>
              <div className="flex items-center gap-2 px-2 pt-3 md:px-4 md:pt-4">
                {accent.dot.map((dotClass, i) => (
                  <span key={i} className={`h-2 w-2 rounded-full md:h-2.5 md:w-2.5 ${dotClass}`} />
                ))}
              </div>
              <p className="mt-3 px-2 text-[10px] uppercase tracking-[0.3em] text-white/50 md:px-4 md:mt-4 md:text-xs">
                {project.heroLabel}
              </p>
              <ProjectVideoPreview
                slug={project.slug}
                mockupClass={accent.mockup}
                heroLabel={project.heroLabel}
              />
              <div className="mt-3 grid grid-cols-2 gap-4 px-2 pb-3 md:px-4 md:pb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Challenge</p>
                  <p className="mt-2 text-xs leading-6 text-white/60 line-clamp-3">{project.challenge}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Solution</p>
                  <p className="mt-2 text-xs leading-6 text-white/60 line-clamp-3">{project.solution}</p>
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
    <section id="projects" className="section-shell-wide" aria-label="Featured projects">
      <Reveal>
        <p className="section-kicker">Featured projects</p>
        <h2 className="section-title max-w-2xl">
          Premium case studies designed to feel like digital products, not static portfolio entries.
        </h2>
      </Reveal>

      <div className="mt-16 space-y-16">
        <Reveal>
          <Link
            to={`/work/${featured.slug}`}
            className="project-card-showcase group block"
          >
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <p className={`text-xs uppercase tracking-[0.28em] ${featuredAccent.category}`}>
                  {featured.category}
                </p>
                <h3 className="font-display text-4xl tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
                  {featured.name}
                </h3>
                <p className="max-w-lg text-lg leading-9 text-white/65">{featured.summary}</p>
                <div className="grid grid-cols-3 gap-4">
                  {featured.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display text-3xl tracking-[-0.04em] text-white md:text-4xl">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/55">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-base text-white/55 transition group-hover:text-white/80">
                    <span>View full case study</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              <TiltCard intensity={4}>
                <div className={`project-showcase bg-gradient-to-br ${featuredAccent.visual}`}>
                  <div className="flex items-center gap-2 px-3 pt-4 md:px-5 md:pt-5">
                    {featuredAccent.dot.map((dotClass: string, i: number) => (
                      <span key={i} className={`h-2 w-2 rounded-full md:h-2.5 md:w-2.5 ${dotClass}`} />
                    ))}
                  </div>
                  <p className="mt-3 px-3 text-[10px] uppercase tracking-[0.3em] text-white/50 md:px-5 md:mt-4 md:text-xs">
                    {featured.heroLabel}
                  </p>
                  <ProjectVideoPreview
                    slug={featured.slug}
                    mockupClass={featuredAccent.mockup}
                    heroLabel={featured.heroLabel}
                  />
                  <div className="mt-3 grid grid-cols-2 gap-4 px-3 pb-4 md:px-5 md:pb-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Challenge</p>
                      <p className="mt-2 text-xs leading-6 text-white/60 line-clamp-3">{featured.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Solution</p>
                      <p className="mt-2 text-xs leading-6 text-white/60 line-clamp-3">{featured.solution}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </Link>
        </Reveal>

        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} accent={projectAccents[project.accent]} />
        ))}
      </div>
    </section>
  )
}
