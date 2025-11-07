import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ADD or MODIFY this 'build' block
  build: {
    outDir: '../server/public', 
    emptyOutDir: true,
  },
})
