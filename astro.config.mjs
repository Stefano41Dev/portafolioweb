// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://Stefano41Dev.github.io/',
  base: process.env.NODE_ENV === 'production' ? '/portafolioweb/' : '/',
  integrations: [sitemap()]
});