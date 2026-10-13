import { useState, useRef, useEffect } from 'react'
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
  const highlightRef = useRef<HTMLDivElement>(null)

  // Smooth highlight movement via CSS transition
  useEffect(() => {
    if (highlightRef.current && hoveredRow !== null) {
      const rowHeight = 53
      highlightRef.current.style.transform = `translateY(${hoveredRow * rowHeight}px)`
      highlightRef.current.style.height = `${rowHeight}px`
    }
  }, [hoveredRow])

  return (
    <section id="why-us" className="section-shell" aria-label="Why choose us">
      <Reveal delay={0}>
        <p className="section-kicker">Why us</p>
        <h2 className="section-title max-w-2xl">
          Built different. Engineered to last.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((item, index) => (
          <Reveal key={index} delay={index * 60} className="reveal-base">
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
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              Typical Freelancer
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan">
              Code Brand Studio
            </p>
          </div>
        </div>

        <div className="relative divide-y divide-white/[0.04]">
          {/* Highlight pill that tracks hovered row */}
          <div
            ref={highlightRef}
            className="pointer-events-none absolute inset-x-0 z-0 rounded-lg border border-cyan/10 bg-cyan/[0.04] transition-all duration-300 ease-out"
            style={{
              transform: hoveredRow !== null ? `translateY(${hoveredRow * 53}px)` : 'translateY(-100%)',
              height: hoveredRow !== null ? 53 : 0,
              opacity: hoveredRow !== null ? 1 : 0,
            }}
            aria-hidden="true"
          />

          {comparisonRows.map((row, i) => (
            <div
              key={row.typical}
              className="relative z-10 grid grid-cols-2 gap-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              onFocus={() => setHoveredRow(i)}
              onBlur={() => setHoveredRow(null)}
              tabIndex={0}
              role="row"
            >
              <p className="text-sm leading-6 text-white/60 transition-colors duration-200">
                {row.typical}
              </p>
              <p className="text-sm leading-6 text-white/90 transition-colors duration-200 font-medium">
                {row.studio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}