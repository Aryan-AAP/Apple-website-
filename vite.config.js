import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    sourcemap: true,
    outDir: 'dist/apple-website/lol', // Specify a different output directory

  }
})
