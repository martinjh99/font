// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Amaranth",
            cssVariable: "--font-amaranth"
        },
            {
            provider: fontProviders.google(),
            name: "Roboto",
            cssVariable: "--font-roboto"
            },
            {
            provider: fontProviders.google(),
            name: "Imperial Script",
            cssVariable: "--font-imperial"
        }]
    }
});
