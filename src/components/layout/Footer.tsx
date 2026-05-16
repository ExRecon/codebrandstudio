import { socialLinks, contact, navItems } from '../../data/site'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 px-4 py-16 md:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-2xl tracking-[0.18em] text-white">Code Brand Studio</p>
          <p className="max-w-md text-sm leading-7 text-white/58">
            Premium websites for creative founders and businesses that want their digital presence to feel intentional, luxurious, and technically elite.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/35">Navigation</p>
          <div className="space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-sm text-white/62 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/35">Connect</p>
          <a href={`mailto:${contact.email}`} className="mb-4 block text-sm text-white">
            {contact.email}
          </a>
          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-white/55 transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
