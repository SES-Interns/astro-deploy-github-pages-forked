import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jcayllahuag.github.io',
  base: '/astro-deploy-github-pages',
  integrations: [tailwind()]
});