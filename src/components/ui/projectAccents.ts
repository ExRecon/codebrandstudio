export const projectAccents = {
  blue: {
    category: 'text-cyan-300/80',
    border: 'group-hover:border-cyan-300/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(103,232,249,0.06)]',
    metric: 'border-cyan-300/15 bg-cyan-300/[0.04] text-cyan-100/80',
    visual: 'from-cyan-300/8 to-cyan-500/3',
    screen: 'border-cyan-300/10',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(103,232,249,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.35),transparent_28%),linear-gradient(135deg,rgba(103,232,249,0.1),transparent)]',
    dot: ['bg-cyan-300/40', 'bg-cyan-300/25', 'bg-cyan-300/15'],
  },
  green: {
    category: 'text-emerald-300/80',
    border: 'group-hover:border-emerald-300/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(52,211,153,0.06)]',
    metric: 'border-emerald-300/15 bg-emerald-300/[0.04] text-emerald-100/80',
    visual: 'from-emerald-300/8 to-emerald-500/3',
    screen: 'border-emerald-300/10',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(52,211,153,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.35),transparent_28%),linear-gradient(135deg,rgba(52,211,153,0.1),transparent)]',
    dot: ['bg-emerald-300/40', 'bg-emerald-300/25', 'bg-emerald-300/15'],
  },
  purple: {
    category: 'text-violet-300/80',
    border: 'group-hover:border-violet-300/25',
    glow: 'group-hover:shadow-[0_0_40px_rgba(167,139,250,0.06)]',
    metric: 'border-violet-300/15 bg-violet-300/[0.04] text-violet-100/80',
    visual: 'from-violet-300/8 to-violet-500/3',
    screen: 'border-violet-300/10',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(167,139,250,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.35),transparent_28%),linear-gradient(135deg,rgba(167,139,250,0.1),transparent)]',
    dot: ['bg-violet-300/40', 'bg-violet-300/25', 'bg-violet-300/15'],
  },
} as const

export type ProjectAccentKey = keyof typeof projectAccents
