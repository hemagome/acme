import { expect, test } from "@playwright/test";

// Top-level regex
const homeTitleRegex = /Astro/;

test("home page has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(homeTitleRegex);
});

// Dummy test sin async
test("dummy test passes", () => {
  expect(1 + 1).toBe(2);
});
