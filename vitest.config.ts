/// <reference types="vitest" />

import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      include: [
        './src/stores/tests/*.{spec,test}.ts',
        './src/tests/**/*.{spec,test}.ts',
      ],
    },
  }),
)
