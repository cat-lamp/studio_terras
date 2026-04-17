import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If using a custom domain, use '/'. 
  // If using username.github.io/studio-terras/, use '/studio-terras/'
  base: '/', 
})