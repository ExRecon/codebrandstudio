import { processSteps } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

export function ProcessSection() {
  return (
    <section id="process" className="section-shell" aria-label="Our process">
      <Reveal>
        <p className="section-kicker">Process</p>
        <h2 className="section-title max-w-2xl">
          How we work.
        </h2>
        <p className="section-subtitle">
          A structured process that protects your time and delivers production-ready systems.
        </p>
      </Reveal>

      <div className="relative mt-14">
        {/* Vertical line */}
        <div className="absolute left-[1.15rem] top-0 hidden h-full w-px bg-gradient-to-b from-cyan/20 via-white/[0.06] to-transparent md:block" aria-hidden="true" />

        <div className="space-y-10">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="group relative grid grid-cols-[auto_1fr] gap-6 md:gap-10">
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-white/[0.08] bg-surface transition-colors duration-300 group-hover:border-cyan/30 group-hover:bg-cyan/[0.05]">
                      <Icon className="h-4 w-4 text-white/50 transition-colors group-hover:text-cyan" />
                    </div>
                  </div>

                  <div className="pt-1">
                    <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                      <span className="mr-3 text-white/30">{String(index + 1).padStart(2, '0')}</span>
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-white/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
