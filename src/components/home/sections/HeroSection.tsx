import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { MagneticButton } from '../../ui/MagneticButton'
import { RollingCounter } from '../../ui/RollingCounter'
import { NodeNetworkCanvas } from '../NodeNetworkCanvas'
import { stats } from '../../../data/site'
import { Reveal, RevealText } from '../../ui/Reveal'

const headlineWords = ['We', 'build', 'AI-native', 'systems', 'that', 'scale.']

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-6 md:px-8"
      aria-label="Hero"
    >
      {/* Interactive node-network canvas */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <NodeNetworkCanvas />
      </div>

      {/* Subtle ambient overlay to ensure text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Terminal-style kicker */}
        <Reveal delay={200} className="mb-8 flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-xs text-white/60">codebrandstudio.io</span>
        </Reveal>

        {/* Split-text headline reveal */}
        <h1 className="text-display-xl font-bold tracking-[-0.04em] text-white">
          {headlineWords.map((word, i) => (
            <span
              key={word}
              className="inline-block mr-[0.3em] reveal-word"
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              {word === 'AI-native' ? (
                <span className="accent-gradient">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <RevealText delay={900} className="mt-6 max-w-[65ch] text-lg leading-7 text-white/60 md:text-xl md:leading-8">
          Multi-agent architectures, SaaS platforms, developer infrastructure, and intelligent automation — engineered for production from day one.
        </RevealText>

        {/* CTAs */}
        <Reveal delay={1100} className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <MagneticButton href="#contact">
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#work" variant="secondary">
            View Our Work
          </MagneticButton>
        </Reveal>

        {/* Trust stats bar with rolling counters */}
        <Reveal delay={1300} className="mt-16 grid grid-cols-2 gap-6 border-t border-white/[0.06] pt-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="reveal-base" style={{ transitionDelay: `${1400 + i * 150}ms` }}>
              <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                <RollingCounter target={stat.value} delay={1400 + i * 150} />
              </p>
              <p className="mt-1 text-xs text-white/60">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <Reveal delay={2000} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/70"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  )
}