export type ProjectAccent = 'blue' | 'green' | 'purple'

export type AccentStyle = {
  category: string
  visual: string
  mockup: string
  dot: readonly [string, string, string]
}

export const projectAccents: Record<ProjectAccent, AccentStyle> = {
  blue: {
    category: 'text-cyan-300/90',
    visual: 'from-cyan-300/8 to-cyan-500/3',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(103,232,249,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.35),transparent_28%),linear-gradient(135deg,rgba(103,232,249,0.1),transparent)]',
    dot: ['bg-cyan-300/40', 'bg-cyan-300/25', 'bg-cyan-300/15'],
  },
  green: {
    category: 'text-emerald-300/90',
    visual: 'from-emerald-300/8 to-emerald-500/3',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(52,211,153,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.35),transparent_28%),linear-gradient(135deg,rgba(52,211,153,0.1),transparent)]',
    dot: ['bg-emerald-300/40', 'bg-emerald-300/25', 'bg-emerald-300/15'],
  },
  purple: {
    category: 'text-violet-300/90',
    visual: 'from-violet-300/8 to-violet-500/3',
    mockup:
      'bg-[radial-gradient(circle_at_20%_30%,rgba(167,139,250,0.5),transparent_22%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.35),transparent_28%),linear-gradient(135deg,rgba(167,139,250,0.1),transparent)]',
    dot: ['bg-violet-300/40', 'bg-violet-300/25', 'bg-violet-300/15'],
  },
}
