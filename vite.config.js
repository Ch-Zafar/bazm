import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})