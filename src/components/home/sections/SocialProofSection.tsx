import { motion } from 'framer-motion'

/* ── Client logos / social proof bar ───────────────────────────── */
const clientLogos = [
  'Lumina AI',
  'Atlas',
  'Orion',
  'Vercel',
  'Stripe',
  'Linear',
  'Raycast',
  'Supabase',
]

/* ── Infinite marquee row ───────────────────────────────────────── */
function LogoRow({ logos, reverse = false }: { logos: string[]; reverse?: boolean }) {
  const doubled = [...logos, ...logos]

  return (
    <div
      className="flex w-max gap-12"
      style={{
        animation: reverse
          ? 'marquee-reverse 35s linear infinite'
          : 'marquee 35s linear infinite',
      }}
    >
      {doubled.map((name, i) => (
        <span
          key={`${name}-${i}`}
          className="shrink-0 text-lg font-semibold tracking-tight text-white/20 transition-colors duration-300 hover:text-white/50 md:text-xl"
        >
          {name}
        </span>
      ))}
    </div>
  )
}

export function SocialProofSection() {
  return (
    <section className="relative border-t border-white/[0.06] py-16 md:py-20" aria-label="Trusted by">
      {/* Bilateral gradient mask */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.25em] text-white/40">
          Trusted by engineering teams at
        </p>

        {/* First row — left to right */}
        <div className="overflow-hidden">
          <LogoRow logos={clientLogos} />
        </div>

        {/* Second row — right to left, offset */}
        <div className="mt-6 overflow-hidden">
          <LogoRow logos={[...clientLogos].reverse()} reverse />
        </div>

        {/* Single powerful testimonial */}
        <motion.blockquote
          className="mx-auto mt-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-8 text-white/70 md:text-xl md:leading-9">
            &ldquo;They didn&apos;t just build what we asked for — they architected a system that anticipated problems we hadn&apos;t even considered.&rdquo;
          </p>
          <footer className="mt-6">
            <cite className="not-italic">
              <span className="font-semibold text-white">Sarah Chen</span>
              <span className="text-white/40"> — CTO, Lumina AI</span>
            </cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
