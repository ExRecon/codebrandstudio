import { contact } from '../../../data/site'
import { MagneticButton } from '../../ui/MagneticButton'
import { ParallaxLayer } from '../../ui/ParallaxLayer'

export function CTASection() {
  return (
    <section id="contact" className="section-shell pb-16 md:pb-20" aria-label="Contact us">
      <div className="relative overflow-hidden">
        <ParallaxLayer speed={0.01} className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,rgba(139,233,255,0.04),transparent)]" />
        </ParallaxLayer>
        <ParallaxLayer speed={-0.015} className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_40%_35%_at_70%_45%,rgba(143,131,255,0.03),transparent)]" />
        </ParallaxLayer>

        <div className="relative px-8 py-16 text-center md:px-16 md:py-24">
          <p className="section-kicker">Start your next move</p>
          <h2 className="section-title mx-auto max-w-3xl">
            Your website should feel like your brand deserves attention.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/65">
            Let&apos;s build a digital presence that sharpens authority, elevates trust, and makes your brand feel impossible to ignore.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href={`mailto:${contact.email}`}>Start a Project</MagneticButton>
            <MagneticButton href={`mailto:${contact.email}?subject=${encodeURIComponent('Discovery Call')}`} variant="secondary">
              {contact.calendarLabel}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
