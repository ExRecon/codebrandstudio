import { founder } from '../../../data/site'
import ceoFounderWebp from '../../../assets/ceo-founder.webp'
import ceoFounderPng from '../../../assets/ceo-founder.png'
import { MagneticButton } from '../../ui/MagneticButton'
import { Reveal } from '../../ui/Reveal'
import { TiltCard } from '../../ui/TiltCard'
import { ParallaxLayer } from '../../ui/ParallaxLayer'

export function FounderSection() {
  return (
    <section id="founder" className="section-shell" aria-label="Meet the founder">
      <Reveal>
        <p className="section-kicker">Meet the founder</p>
        <h2 className="section-title max-w-2xl">
          The person behind every pixel.
        </h2>
      </Reveal>

      <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02]">
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full opacity-15 blur-[120px]"
          aria-hidden="true"
          style={{ background: 'radial-gradient(circle, rgba(103,232,249,0.6), transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 h-[360px] w-[360px] rounded-full opacity-10 blur-[100px]"
          aria-hidden="true"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.6), transparent 70%)' }}
        />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:p-12 p-6 md:p-10">
          <Reveal delay={0.05}>
            <ParallaxLayer speed={-0.015}>
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-300/10 via-transparent to-violet-400/10 blur-lg" aria-hidden="true" />
                <TiltCard className="relative" intensity={6}>
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
                    <picture>
                      <source srcSet={ceoFounderWebp} type="image/webp" />
                      <source srcSet={ceoFounderPng} type="image/png" />
                      <img
                        src={ceoFounderPng}
                        alt={`${founder.name} — CEO & Founder of Code Brand Studio`}
                        className="w-full object-cover aspect-[4/5]"
                        loading="eager"
                        width={1086}
                        height={1448}
                      />
                    </picture>
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <p className="font-display text-2xl tracking-[-0.04em] text-white md:text-3xl">
                        {founder.name}
                      </p>
                      <p className="mt-1 text-sm text-white/65">{founder.role}</p>
                      <div className="mt-3 h-px w-12 bg-gradient-to-r from-cyan-300/60 to-transparent" aria-hidden="true" />
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-ink/60 px-3 py-1.5 backdrop-blur-sm border border-white/[0.06]">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                      <span className="text-[11px] text-white/65 tracking-wide">Available</span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </ParallaxLayer>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-col justify-center space-y-8">
              <p className="text-xl leading-10 text-white/80 md:text-2xl md:leading-10">
                {founder.headline}
              </p>

              <div className="space-y-5">
                {founder.bio.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-white/65">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6">
                {founder.highlights.map((item) => (
                  <div key={item.label}>
                    <p className="font-display text-2xl tracking-[-0.04em] text-cyan-300/90 md:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs text-white/55">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="h-px bg-gradient-to-r from-white/[0.06] to-transparent" aria-hidden="true" />

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/55">Core expertise</p>
                <div className="flex flex-wrap gap-3">
                  {founder.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-white/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <MagneticButton href="#contact">Work with {founder.name}</MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
