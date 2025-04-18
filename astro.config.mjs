// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
      fonts: [
          {
              provider: fontProviders.google(),
              name: "Comic Neue",
              cssVariable: "--font-comic"
          },
          {
              provider: fontProviders.google(),
              name: "Audiowide",
              cssVariable: "--font-audiowide"
          },
          {
              provider: fontProviders.google(),
              name: "Quantico",
              cssVariable: "--font-quantico"
      }]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});