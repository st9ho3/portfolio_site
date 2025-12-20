import { defineConfig } from 'astro/config';
import icon from 'astro-icon'; // 1. Import
import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [// 2. Make sure the parentheses () are there!
  icon(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});