import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService()
  },
  output: 'server',
  integrations: [tailwind(), mdx()],
  adapter: vercel()
});