// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: swap for the real domain once it's bought
export default defineConfig({
  site: 'https://www.classicpavingoxford.co.uk',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    sitemap({ filter: (page) => !/privacy-policy|404/.test(page) }),
  ],
});
