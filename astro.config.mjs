// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: 'https://carolina.psipleno.com.br',
  integrations: [mdx(), sitemap(), react()],
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: {
        '@': '/src',
        ...(import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      })},
    },
  },
});