// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
//import { provider } from 'astro/assets/fonts/providers/google';

// https://astro.build/config
export default defineConfig({
      fonts: [
      {
        provider: fontProviders.google(),
        name: "Courgette",
        cssVariable: "--font-zilla"
      },
    ],
  

  vite: {
    plugins: [tailwindcss()]
  }
});
