import { stats, studioPrinciples } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'
import { AnimatedCounter } from '../../ui/AnimatedCounter'
import { ParallaxLayer } from '../../ui/ParallaxLayer'

export function AboutSection() {
  return (
    <section id="about" className="section-shell" aria-label="About our studio">
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
            <ParallaxLayer speed={0.015}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {stats.map((stat, i) => (
                  <div key={stat.label}>
                    <AnimatedCounter value={stat.value} delay={0.12 + i * 0.1} />
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ParallaxLayer>

            <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" aria-hidden="true" />

            <div className="space-y-5">
              {studioPrinciples.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/[0.03]">
                    <item.icon className="h-4 w-4 text-cyan-300/80" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/95">{item.title}</p>
                    <p className="mt-1 text-base leading-7 text-white/65">{item.body}</p>
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
