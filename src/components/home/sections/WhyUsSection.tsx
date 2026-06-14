import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { differentiators } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

const comparisonRows = [
  { typical: 'Generic templates', studio: 'Custom architecture & design' },
  { typical: 'Fast delivery', studio: 'Production-grade engineering' },
  { typical: 'Basic design', studio: 'Systems-level thinking' },
  { typical: 'One-size-fits-all', studio: 'Tailored to your requirements' },
  { typical: 'Add AI later', studio: 'AI-native from day one' },
  { typical: 'Freelancer handoff', studio: 'Dedicated partnership' },
]

export function WhyUsSection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

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

      {/* Comparison table with active column highlight */}
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

        <LayoutGroup>
          <div className="relative divide-y divide-white/[0.04]">
            {/* Highlight pill that tracks hovered row */}
            {hoveredRow !== null && (
              <motion.div
                className="pointer-events-none absolute inset-x-0 z-0 rounded-lg border border-cyan/10 bg-cyan/[0.04]"
                layoutId="highlight"
                style={{
                  top: hoveredRow * 53,
                  height: 53,
                }}
                transition={{
                  type: 'spring',
                  damping: 25,
                  stiffness: 300,
                  mass: 0.6,
                }}
                aria-hidden="true"
              />
            )}

            {comparisonRows.map((row, i) => (
              <div
                key={row.typical}
                className="relative z-10 grid grid-cols-2 gap-6 py-4 cursor-default"
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <p className="text-sm leading-6 text-white/45 transition-colors duration-200">
                  {row.typical}
                </p>
                <p className="text-sm leading-6 text-white/70 transition-colors duration-200">
                  {row.studio}
                </p>
              </div>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  )
}
