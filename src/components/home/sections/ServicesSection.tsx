import { motion } from 'framer-motion'
import { services } from '../../../data/site'
import { MagneticButton } from '../../ui/MagneticButton'
import { Reveal } from '../../ui/Reveal'
import { TiltCard } from '../../ui/TiltCard'
import { ParallaxLayer } from '../../ui/ParallaxLayer'

export function ServicesSection() {
  const featured = services.find((s) => s.featured)
  const secondary = services.filter((s) => !s.featured)

  return (
    <section id="services" className="section-shell" aria-label="Our services">
      <Reveal>
        <p className="section-kicker">Services</p>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="section-title max-w-2xl">
            A futuristic service system built around premium presentation, technical clarity, and tactile interaction.
          </h2>
          <p className="max-w-lg text-lg leading-9 text-white/65">
            Each service is delivered as a bespoke digital product, not a recycled agency package.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 space-y-16">
        {featured && (
          <Reveal>
            <div className="relative">
              <span className="pointer-events-none absolute -top-6 -left-2 font-display text-[8rem] font-bold leading-none text-white/[0.04] select-none md:text-[12rem]" aria-hidden="true">
                01
              </span>
              <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="icon-chip-featured">
                      <featured.icon className="h-8 w-8 text-cyan-300" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                      Featured Service
                    </p>
                  </div>
                  <h3 className="font-display text-3xl tracking-[-0.04em] text-white md:text-5xl">
                    {featured.title}
                  </h3>
                  <p className="max-w-xl text-lg leading-9 text-white/65">
                    {featured.description}
                  </p>
                  <div>
                    <MagneticButton href="#contact">Start a Project</MagneticButton>
                  </div>
                </div>
                <ParallaxLayer speed={-0.025} className="hidden lg:flex lg:items-center lg:justify-center">
                  <div className="relative">
                    <div className={`h-64 w-64 rounded-full bg-gradient-to-br ${featured.accent} opacity-20 blur-3xl`} aria-hidden="true" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className={`h-40 w-40 rounded-3xl bg-gradient-to-br ${featured.accent} opacity-40`}
                        animate={{ rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
                      <p className="text-xs text-white/55">01</p>
                    </div>
                  </div>
                </ParallaxLayer>
              </div>
            </div>
          </Reveal>
        )}

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
                      <h4 className="mb-3 text-xl font-medium text-white">{service.title}</h4>
                      <p className="text-base leading-8 text-white/65">{service.description}</p>
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
                      <h4 className="mb-3 text-xl font-medium text-white">{service.title}</h4>
                      <p className="text-base leading-8 text-white/65">{service.description}</p>
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
