// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
      fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Podkova",
        cssVariable: "--font-zilla"
      }
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});