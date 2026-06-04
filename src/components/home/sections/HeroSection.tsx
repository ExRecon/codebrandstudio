import { Suspense, lazy, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { MagneticButton } from '../../ui/MagneticButton'
import { ErrorBoundary } from '../../ui/ErrorBoundary'

const HeroScene = lazy(() =>
  import('../../three/HeroScene').then((module) => ({ default: module.HeroScene })),
)

export function HeroSection() {
  const headlineWords = useMemo(
    () => [
      ['We', 'Build'],
      ['Digital', 'Identities'],
      ['That', 'Feel'],
      ['Premium'],
    ],
    [],
  )

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pt-36 md:px-8"
    >
      <div className="absolute inset-0 opacity-25 blur-[10px]" aria-hidden="true">
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="hero-gradient-subtle absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <div className="space-y-5">
          {headlineWords.map((line, index) => (
            <motion.h1
              key={line.join('-')}
              className="font-display text-5xl font-semibold leading-[0.88] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]"
              initial={{ opacity: 0, y: 32, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex flex-wrap justify-center gap-x-[0.18em]">
                {line.map((word) => (
                  <span
                    key={word}
                    className={word === 'Premium' ? 'hero-premium-word' : undefined}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </motion.h1>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-8 max-w-lg text-base leading-8 text-white/65 md:text-lg md:leading-9"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Premium custom portfolio and business websites that increase authority, trust, and perceived value.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticButton href="#contact">Start a Project</MagneticButton>
          <MagneticButton href="#projects" variant="secondary">
            View Our Work
          </MagneticButton>
        </motion.div>

        <motion.a
          href="#about"
          className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/55 transition-colors hover:text-white/70"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  )
}
