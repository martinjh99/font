// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
//import { provider } from 'astro/assets/fonts/providers/google';

// https://astro.build/config
export default defineConfig({
      fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Comfortaa",
        cssVariable: "--font-play"
      },
      {
        provider: fontProviders.google(),
        name: "Qwigley",
        cssVariable: "--font-q"
      }
    ],
  

  vite: {
    plugins: [tailwindcss()]
  }
});
