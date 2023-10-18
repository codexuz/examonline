import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  publicDir: 'public',
  cacheDir: './node_modules/.astro',
  compressHTML: true,
  output: 'server',
  build: {
    server: './server'
  },
  adapter: vercel()
});