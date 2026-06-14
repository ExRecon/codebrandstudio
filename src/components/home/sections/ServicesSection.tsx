import { services } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

export function ServicesSection() {
  const featured = services.find((s) => s.featured)
  const rest = services.filter((s) => !s.featured)

  return (
    <section id="services" className="section-shell" aria-label="Services">
      <Reveal>
        <p className="section-kicker">Services</p>
        <h2 className="section-title">What we build.</h2>
        <p className="section-subtitle">
          From AI systems to developer infrastructure — we engineer the full stack.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((service, i) => {
          const Icon = service.icon
          return (
            <Reveal key={service.title} delay={i * 0.06}>
              <div className="card-surface group">
                <Icon className="h-5 w-5 text-cyan/70 transition-colors group-hover:text-cyan" />
                <h3 className="mt-4 text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {service.description}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* Featured service banner */}
      {featured && (
        <Reveal>
          <div className="mt-6 card-surface flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10">
                <featured.icon className="h-6 w-6 text-cyan" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan">Core Focus</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{featured.title}</h3>
                <p className="mt-1 max-w-md text-sm leading-6 text-white/50">{featured.description}</p>
              </div>
            </div>
            <a href="#contact" className="button-secondary shrink-0">
              Discuss Your Project
            </a>
          </div>
        </Reveal>
      )}
    </section>
  )
}
