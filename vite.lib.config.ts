import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import vitePluginDTS from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es', 'umd'],
      name: 'VueMark'
    },
    rollupOptions: {
      external: [/node_modules/],
    }
  },
  plugins: [
    vitePluginDTS({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.lib.json'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
