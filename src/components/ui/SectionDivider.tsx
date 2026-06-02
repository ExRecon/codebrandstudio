type SectionDividerVariant = 'default' | 'thin' | 'glow'

export function SectionDivider({ variant = 'default' }: { variant?: SectionDividerVariant }) {
  return (
    <div
      className={`section-divider${variant === 'thin' ? '-thin' : variant === 'glow' ? '-glow' : ''}`}
      aria-hidden="true"
    />
  )
}
