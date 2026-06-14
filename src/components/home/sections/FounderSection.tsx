import { founder } from '../../../data/site'
import { MagneticButton } from '../../ui/MagneticButton'
import { Reveal } from '../../ui/Reveal'

export function FounderSection() {
  return (
    <section id="founder" className="section-shell" aria-label="Meet the founder">
      <Reveal>
        <p className="section-kicker">Founder</p>
        <h2 className="section-title max-w-2xl">
          {founder.headline}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        {/* Left — Photo + identity */}
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface">
              <div className="aspect-[3/4] bg-gradient-to-br from-cyan/[0.08] via-surface to-violet/[0.06]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-6">
                <p className="text-2xl font-bold tracking-tight text-white">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm text-white/60">{founder.role}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span className="text-xs text-white/50">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right — Bio + stats */}
        <Reveal delay={0.1}>
          <div className="flex flex-col justify-center space-y-6">
            {founder.bio.map((paragraph) => (
              <p key={paragraph} className="max-w-[65ch] text-base leading-7 text-white/60">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-6 border-y border-white/[0.06] py-6">
              {founder.highlights.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-bold tracking-tight text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-white/45">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/55">
                Core Expertise
              </p>
              <div className="flex flex-wrap gap-2.5">
                {founder.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.14] bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <MagneticButton href="#contact" variant="secondary">
                Work with {founder.name.split(' ')[0]}
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
