// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://christinabeaumier.com',
  output: 'static',
  redirects: {
    '/bio': '/',
    '/about': '/resume',
    '/new-page': '/panels',
    '/images': '/interviews',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
