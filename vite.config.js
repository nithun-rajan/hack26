import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works when served from a GitHub Pages
  // project subpath (e.g. nithun-koios.github.io/hack26/).
  base: './',
  plugins: [react()],
})
