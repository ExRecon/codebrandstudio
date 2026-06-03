import { motion } from 'framer-motion'

type SectionDividerVariant = 'default' | 'thin' | 'glow'

export function SectionDivider({ variant = 'default' }: { variant?: SectionDividerVariant }) {
  const className = `section-divider${variant === 'thin' ? '-thin' : variant === 'glow' ? '-glow' : ''}`

  return (
    <div className={className} aria-hidden="true">
      <motion.div
        className="h-full w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
