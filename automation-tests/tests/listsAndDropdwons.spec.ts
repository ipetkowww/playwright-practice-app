import { expect, Locator, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
})

test("Lists and dropdowns", async ({ page }) => {
    const themeDropdown: Locator = page.locator("ngx-header nb-select");

    const colors: object = {
        "Light": "rgb(255, 255, 255)",
        "Dark": "rgb(34, 43, 69)",
        "Cosmic": "rgb(50, 50, 89)",
        "Corporate": "rgb(255, 255, 255)",
    }

    const themeOptions: Locator = page.locator("nb-option-list nb-option");

    for (const color in colors) {
        await themeDropdown.click();
        await themeOptions.filter({ hasText: color }).click();
        await expect(page.locator("nb-layout-header")).toHaveCSS("background-color", colors[color]);
    }
})