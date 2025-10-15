import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [sentry(), spotlightjs()],
});
