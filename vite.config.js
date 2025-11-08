import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: for Project Site hosting, set base to '/jithin-portfolio/'
// For User Site root hosting, set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/jithin-portfolio/'
})

