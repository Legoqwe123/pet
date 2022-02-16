import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

import postcss from './postcss.config.js';

export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss,
  },
  resolve: {
    alias: {
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
});
