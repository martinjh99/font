// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
import { provider } from 'astro/assets/fonts/providers/google';

// https://astro.build/config
export default defineConfig({
  experimental: {
      fonts: [
      {
        provider: fontProviders.google(),
        name: "Manufacturing Consent",
        cssVariable: "--font-zilla"
      },
      {  
        provider: fontProviders.google(),
        name: "Playfair Display",
        cssVariable: "--font-oswald"
      }
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
