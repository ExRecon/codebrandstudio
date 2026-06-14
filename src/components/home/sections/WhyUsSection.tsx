import { differentiators } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

export function WhyUsSection() {
  return (
    <section id="why-us" className="section-shell" aria-label="Why choose us">
      <Reveal>
        <p className="section-kicker">Why us</p>
        <h2 className="section-title max-w-2xl">
          Built different. Engineered to last.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((item, index) => (
          <Reveal key={index} delay={index * 0.06}>
            <div className="card-surface relative overflow-hidden">
              <span className="pointer-events-none absolute -top-2 -right-1 text-[4rem] font-bold leading-none text-white/[0.04] select-none" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="relative text-sm leading-6 text-white/70">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-xl">
        <div className="grid grid-cols-2 gap-6 border-b border-white/[0.06] pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Typical Freelancer
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan">
              Code Brand Studio
            </p>
          </div>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {[
            { typical: 'Generic templates', studio: 'Custom architecture & design' },
            { typical: 'Fast delivery', studio: 'Production-grade engineering' },
            { typical: 'Basic design', studio: 'Systems-level thinking' },
            { typical: 'One-size-fits-all', studio: 'Tailored to your requirements' },
            { typical: 'Add AI later', studio: 'AI-native from day one' },
            { typical: 'Freelancer handoff', studio: 'Dedicated partnership' },
          ].map((row) => (
            <div key={row.typical} className="grid grid-cols-2 gap-6 py-4">
              <p className="text-sm leading-6 text-white/45">{row.typical}</p>
              <p className="text-sm leading-6 text-white/70">{row.studio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
