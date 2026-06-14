import { contact } from '../../../data/site'
import { MagneticButton } from '../../ui/MagneticButton'
import { Reveal } from '../../ui/Reveal'

export function CTASection() {
  return (
    <section id="contact" className="section-shell" aria-label="Contact us">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-surface p-8 md:p-16">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan/[0.04] blur-[120px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[300px] rounded-full bg-violet/[0.03] blur-[100px]" aria-hidden="true" />

          <div className="relative mx-auto max-w-xl text-center">
            <p className="section-kicker">Start a project</p>
            <h2 className="section-title">
              Let&apos;s build something that matters.
            </h2>
            <p className="section-subtitle mx-auto">
              Tell us about your project. We&apos;ll respond within 24 hours with a clear plan and honest pricing.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href={`mailto:${contact.email}`}>
                Start a Project
              </MagneticButton>
              <MagneticButton href={`mailto:${contact.email}?subject=${encodeURIComponent('Discovery Call')}`} variant="secondary">
                {contact.calendarLabel}
              </MagneticButton>
            </div>
            <p className="mt-6 text-sm text-white/40">
              Or email us directly at{' '}
              <a href={`mailto:${contact.email}`} className="text-cyan hover:underline">
                {contact.email}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
