import { comparison, differentiators } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'
import { TiltCard } from '../../ui/TiltCard'

export function WhyUsSection() {
  return (
    <section id="why-us" className="section-shell" aria-label="Why choose us">
      <Reveal>
        <p className="section-kicker">Why us</p>
        <h2 className="section-title max-w-2xl">
          Premium brands choose Code Brand Studio for clarity, craft, and digital execution that feels different immediately.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-px bg-white/[0.04] md:grid-cols-2">
        {differentiators.map((item, index) => (
          <Reveal key={item} delay={index * 0.08}>
            <TiltCard className="h-full" intensity={6}>
              <div className="group relative h-full bg-ink p-8 transition-colors duration-500 hover:bg-white/[0.02]">
                <span className="pointer-events-none absolute -top-2 -left-1 font-display text-[6rem] font-bold leading-none text-white/[0.04] select-none md:text-[8rem]" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="relative">
                  <p className="font-display text-xl leading-snug tracking-[-0.04em] text-white/90 md:text-2xl">
                    {item}
                  </p>
                  <div className="mt-6 h-px w-10 bg-gradient-to-r from-cyan-300/30 to-transparent transition-all duration-500 group-hover:w-16 group-hover:from-cyan-300/50" aria-hidden="true" />
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-16 mb-12 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="overflow-hidden">
        <div className="grid grid-cols-2 gap-6 border-b border-white/[0.06] pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">
              Typical Freelancer
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">
              Code Brand Studio
            </p>
          </div>
        </div>

        <div className="divide-y divide-white/[0.03]">
          {comparison.map((row) => (
            <div key={row.typical} className="grid grid-cols-2 gap-6 py-5">
              <p className="text-base leading-7 text-white/55 md:text-lg md:leading-8">
                {row.typical}
              </p>
              <p className="text-base leading-7 text-white/80 md:text-lg md:leading-8">
                {row.studio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
