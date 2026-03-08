// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://saadiq.github.io',
  base: '/christinabeaumier.com',
  output: 'static',
  redirects: {
    '/bio': '/christinabeaumier.com/',
    '/about': '/christinabeaumier.com/resume',
    '/new-page': '/christinabeaumier.com/panels',
    '/images': '/christinabeaumier.com/interviews',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
