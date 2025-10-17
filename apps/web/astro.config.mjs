import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [sentry(), spotlightjs()],

  vite: {
    plugins: [tailwindcss()],
  },
});
