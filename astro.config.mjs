// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      name: "Cormorant Garamond",
      cssVariable: "--font-cormorant-garamond",
      provider: fontProviders.fontsource(),
    },
    {
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
      provider: fontProviders.fontsource(),
    },
  ],

  adapter: netlify(),
  integrations: [sitemap()],
});
