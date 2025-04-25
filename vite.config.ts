import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/anchaprem_portfolio_new/',
  plugins: [react()],
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    // Compress assets
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5177,
    host: true,
  },
}) 