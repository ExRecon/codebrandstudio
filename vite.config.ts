import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/codebrandstudio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three'
            }
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'motion'
            }
            if (id.includes('react-router-dom')) {
              return 'router'
            }
            if (id.includes('react')) {
              return 'react'
            }
          }
        },
      },
    },
  },
})
