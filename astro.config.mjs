import { defineConfig } from 'astro/config';
import icon from 'astro-icon'; 
import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [
  icon({
      include: {
        lucide: ['*'], 
      },
    }), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});