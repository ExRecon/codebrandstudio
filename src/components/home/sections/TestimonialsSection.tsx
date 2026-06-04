import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'

export function TestimonialsSection() {
  const [marqueePaused, setMarqueePaused] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const items = prefersReducedMotion ? testimonials : [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="section-shell overflow-hidden" aria-label="Client testimonials">
      <Reveal>
        <p className="section-kicker">Testimonials</p>
        <h2 className="section-title max-w-2xl">
          Trust built through premium execution, strategic clarity, and the feeling that every pixel has been considered.
        </h2>
      </Reveal>
      <ul
        className="marquee-track mt-12"
        style={{ animationPlayState: marqueePaused ? 'paused' : 'running' }}
        onMouseEnter={() => setMarqueePaused(true)}
        onMouseLeave={() => setMarqueePaused(false)}
        onFocus={() => setMarqueePaused(true)}
        onBlur={() => setMarqueePaused(false)}
        aria-label="Client testimonials"
      >
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`}>
            <motion.article
              className="testimonial-editorial"
              whileHover={{
                borderColor: 'rgba(103, 232, 249, 0.25)',
                backgroundColor: 'rgba(255, 255, 255, 0.01)',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 flex gap-1 text-cyan-300/70" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote>
                <p className="text-xl leading-9 text-white/80 md:text-2xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/[0.06]" aria-hidden="true" />
                <cite className="not-italic text-right">
                  <p className="text-base font-medium text-white/90">{item.name}</p>
                  <p className="text-xs text-white/55">{item.role}</p>
                </cite>
              </div>
            </motion.article>
          </li>
        ))}
      </ul>
    </section>
  )
}
