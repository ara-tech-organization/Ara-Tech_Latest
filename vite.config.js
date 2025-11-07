import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://ara-tech-organization.github.io/Ara-Tech/',
  plugins: [react()],
})
