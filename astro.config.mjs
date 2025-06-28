// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
      fonts: [
      {
        provider: fontProviders.google(),
        name: "Matangi",
        cssVariable: "--font-zilla"
      }
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
