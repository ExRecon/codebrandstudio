import { differentiators } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

const introText = "We're a focused engineering studio that builds production-grade AI systems, SaaS platforms, and developer infrastructure. No agencies, no handoffs — just senior engineers who ship."

const words = introText.split(' ')

export function AboutSection() {
  return (
    <section id="about" className="section-shell" aria-label="About our studio">
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
        {/* Left */}
        <div>
          <Reveal delay={0} className="mb-4">
            <p className="section-kicker">About</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title">
              Engineering studio for the AI era.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="section-subtitle max-w-[65ch]">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.3em] reveal-word"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {word}
                </span>
              ))}
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-4 max-w-[60ch] text-base leading-7 text-white/50">
            Every engagement is led by our founder, Ali Ihtsham, with 6+ years of experience shipping systems that handle real workloads. We work with startups, scale-ups, and engineering teams that need to move fast without sacrificing quality.
          </Reveal>
        </div>

        {/* Right — staggered clip-path reveal cards */}
        <div className="space-y-4">
          {differentiators.map((item, i) => (
            <Reveal key={i} delay={i * 120} className="reveal-base">
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