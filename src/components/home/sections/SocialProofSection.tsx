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

export function SocialProofSection() {
  return (
    <section className="border-t border-white/[0.06] py-16 md:py-20" aria-label="Trusted by">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.25em] text-white/40">
          Trusted by engineering teams at
        </p>

        {/* Logo grid */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
          {clientLogos.map((name, i) => (
            <motion.span
              key={name}
              className="text-lg font-semibold tracking-tight text-white/20 transition-colors duration-300 hover:text-white/40 md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              {name}
            </motion.span>
          ))}
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
