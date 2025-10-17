import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e", // Carpeta donde estarán los tests
  timeout: 30_000, // Timeout por test en ms
  expect: {
    timeout: 5000, // Timeout de assertions
  },
  fullyParallel: true, // Ejecutar tests en paralelo
  forbidOnly: !!process.env.CI, // Falla si hay tests marcados con .only en CI
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", { open: "never" }]], // List + HTML report
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    baseURL: "http://localhost:3000", // Ajusta según tu dev server
    trace: "on-first-retry", // Genera trace si falla test
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    { name: "Desktop Chrome", use: { ...devices["Desktop Chrome"] } },
    { name: "Desktop Firefox", use: { ...devices["Desktop Firefox"] } },
  ],
});
