import { useState } from 'react'
import { testimonials } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'

export function TestimonialsSection() {
  const [paused, setPaused] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const items = prefersReducedMotion ? testimonials : [...testimonials, ...testimonials]

  return (
    <section className="section-shell overflow-hidden" aria-label="Client testimonials">
      <Reveal>
        <p className="section-kicker">Testimonials</p>
        <h2 className="section-title max-w-2xl">
          What our clients say.
        </h2>
      </Reveal>

      <div
        className="relative mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="flex gap-6"
          style={{
            animation: paused ? 'none' : 'marquee 30s linear infinite',
            width: 'max-content',
          }}
          role="list"
          aria-label="Client testimonials"
        >
          {items.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="card-surface w-[340px] shrink-0 md:w-[400px]"
              role="listitem"
            >
              <p className="text-base leading-7 text-white/70 md:text-lg md:leading-8">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/[0.06] pt-5">
                <cite className="not-italic">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="mt-0.5 text-sm text-white/45">{item.role}</p>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
