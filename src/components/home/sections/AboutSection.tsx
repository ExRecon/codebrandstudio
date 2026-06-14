import { differentiators } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

export function AboutSection() {
  return (
    <section id="about" className="section-shell" aria-label="About our studio">
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
        {/* Left */}
        <div>
          <Reveal>
            <p className="section-kicker">About</p>
            <h2 className="section-title">
              Engineering studio for the AI era.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle">
              We&apos;re a focused engineering studio that builds production-grade AI systems, SaaS platforms, and developer infrastructure. No agencies, no handoffs — just senior engineers who ship.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/50">
              Every engagement is led by our founder, Ali Ihtsham, with 6+ years of experience shipping systems that handle real workloads. We work with startups, scale-ups, and engineering teams that need to move fast without sacrificing quality.
            </p>
          </Reveal>
        </div>

        {/* Right */}
        <div className="space-y-4">
          {differentiators.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card-surface flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-xs font-semibold text-cyan">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-6 text-white/70">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
