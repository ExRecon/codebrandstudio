import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, type MotionValue } from 'framer-motion'
import { differentiators } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

const introText = "We're a focused engineering studio that builds production-grade AI systems, SaaS platforms, and developer infrastructure. No agencies, no handoffs — just senior engineers who ship."

const words = introText.split(' ')

function WordSpan({ word, index, scrollProgress }: { word: string; index: number; scrollProgress: MotionValue<number> }) {
  const start = index / words.length
  const end = (index + 1) / words.length
  const opacity = useTransform(scrollProgress, [0, start, end, 1], [0.3, 0.3, 1, 1])

  return (
    <motion.span className="inline-block mr-[0.3em]" style={{ opacity }}>
      {word}
    </motion.span>
  )
}

function ScrollHighlightText() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  })

  return (
    <p ref={ref} className="section-subtitle max-w-[65ch]">
      {words.map((word, i) => (
        <WordSpan key={i} word={word} index={i} scrollProgress={scrollYProgress} />
      ))}
    </p>
  )
}

export function AboutSection() {
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

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
            <ScrollHighlightText />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-[60ch] text-base leading-7 text-white/50">
              Every engagement is led by our founder, Ali Ihtsham, with 6+ years of experience shipping systems that handle real workloads. We work with startups, scale-ups, and engineering teams that need to move fast without sacrificing quality.
            </p>
          </Reveal>
        </div>

        {/* Right — staggered clip-path reveal cards */}
        <div className="space-y-4" ref={cardsRef}>
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={cardsInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <div className="card-surface flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-xs font-semibold text-cyan">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-6 text-white/70">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
