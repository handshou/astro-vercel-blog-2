import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

const tina = ({
  directiveName = 'tina'
} = {}) => ({
  name: 'tina-cms',
  hooks: {
    'astro:config:setup': ({
      addClientDirective,
      opts
    }) => {
      addClientDirective({
        name: directiveName,
        entrypoint: './client-directives/tina.mjs'
      });
    }
  }
});

// https://astro.build/config
export default defineConfig({
  site: 'https://hansel.co',
  image: {
      domains: ['res.cloudinary.com'],
  },
  integrations: [mdx({}), react(), tina()],
  output: "server",
  adapter: vercel(),
});
