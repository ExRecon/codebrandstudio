/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        graphite: '#111111',
        charcoal: '#171717',
        frost: '#f5f7fb',
        glow: '#53c3f5',
        cyan: '#8be9ff',
        violet: '#8f83ff',
      },
      fontFamily: {
        sans: ['"General Sans"', '"Inter Variable"', 'sans-serif'],
        display: ['"Clash Display"', '"Satoshi"', '"Inter Variable"', 'sans-serif'],
      },
      boxShadow: {
        panel:
          '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        noise:
          'radial-gradient(circle at top, rgba(139, 233, 255, 0.16), transparent 30%), radial-gradient(circle at 70% 10%, rgba(143, 131, 255, 0.14), transparent 28%)',
      },
    },
  },
  plugins: [],
}
