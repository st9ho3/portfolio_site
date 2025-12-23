import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "el"]
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte(), icon({
      include: {
        lucide: ['*'], 
      },
    })]
});