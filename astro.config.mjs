import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://alter216.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
