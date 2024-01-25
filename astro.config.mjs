import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService()
  },
  output: 'server',
  integrations: [tailwind(), mdx(), react()],
  adapter: vercel({
    maxDuration: 10,
  })
});
