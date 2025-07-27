import { expect, Locator, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByTitle("Modal & Overlays").click();
    await page.getByTitle("Tooltip").click();
})

test("Tooltip Placement", async ({ page }) => {
    const tooltipPlacementsSection: Locator = page.locator("nb-card", { hasText: "Tooltip Placements" });

    await tooltipPlacementsSection.getByRole("button", { name: "Top" }).hover();
    await expect(page.locator("nb-tooltip")).toHaveText("This is a tooltip");
})