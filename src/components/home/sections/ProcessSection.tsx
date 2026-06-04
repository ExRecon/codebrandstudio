import { motion } from 'framer-motion'
import { processSteps } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

export function ProcessSection() {
  return (
    <section id="process" className="section-shell" aria-label="Our process">
      <Reveal>
        <p className="section-kicker">How we work</p>
        <h2 className="section-title max-w-2xl">
          A structured process that protects your time and delivers a premium outcome.
        </h2>
      </Reveal>
      <div className="relative mt-16">
        <motion.div
          className="absolute left-[1.55rem] top-0 hidden w-px origin-top bg-gradient-to-b from-cyan-400/30 via-violet-400/15 to-transparent md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '100%' }}
          aria-hidden="true"
        />

        <div className="space-y-10">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="group relative grid grid-cols-[auto_1fr] gap-6 md:gap-10">
                <div className="relative flex flex-col items-center">
                  <motion.div
                    className="relative z-10 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white/[0.06] transition-colors duration-500 group-hover:bg-cyan-300/10"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="font-display text-sm tracking-[-0.02em] text-white/55 transition-colors group-hover:text-cyan-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                </div>

                <div className="pt-2 md:pt-3">
                  <h3 className="font-display text-2xl tracking-[-0.04em] text-white md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-white/65">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
