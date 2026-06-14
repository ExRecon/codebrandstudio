import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { MagneticButton } from '../../ui/MagneticButton'
import { stats } from '../../../data/site'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-6 md:px-8"
      aria-label="Hero"
    >
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.03] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-violet/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Terminal-style kicker */}
        <motion.div
          className="mb-8 flex items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-xs text-white/40">codebrandstudio.io</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-display-xl font-bold tracking-[-0.04em] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          We build{' '}
          <span className="accent-gradient">AI-native systems</span>
          <br />
          that scale.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-6 max-w-xl text-lg leading-7 text-white/60 md:text-xl md:leading-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Multi-agent architectures, SaaS platforms, developer infrastructure, and intelligent automation — engineered for production from day one.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticButton href="#contact">
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#work" variant="secondary">
            View Our Work
          </MagneticButton>
        </motion.div>

        {/* Trust stats bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/[0.06] pt-8 md:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/40">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/50"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  )
}
