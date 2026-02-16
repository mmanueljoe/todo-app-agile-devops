import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import path, { resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@component': resolve(__dirname, './src/component'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@models': resolve(__dirname, './src/models'),
      '@test': resolve(__dirname, './src/__test__'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/__test__/',
        '**/*.test.{ts,tsx}',
        '**/*.config.{ts,js}',
        '**/vitest.setup.ts',
      ],
    },
  },

})
