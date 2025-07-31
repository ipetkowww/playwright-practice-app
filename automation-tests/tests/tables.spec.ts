import { expect, Locator, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByTitle("Tables & Data").click();
    await page.getByTitle("Smart Table").click();
})

test("Edit age of user found by email", async ({ page }) => {
    const targetRow: Locator = page.getByRole("row", {name: "twitter@outlook.com"});
    await targetRow.locator(".nb-edit").click();
    await page.locator("input-editor").getByPlaceholder("Age").clear();
    await page.locator("input-editor").getByPlaceholder("Age").fill("35");
    await page.locator(".nb-checkmark").click();

    await expect(targetRow.locator("td").nth(6)).toHaveText("35");
})

test("Edit email of user found by ID", async ({ page }) => {
    await page.locator(".ng2-smart-pagination-nav").getByText("2").click();
    const targetRow: Locator =  page.getByRole("row").filter({has: page.locator("td").nth(1).getByText("11")});
    await targetRow.locator(".nb-edit").click();
    await page.locator("input-editor").getByPlaceholder("E-mail").clear();
    await page.locator("input-editor").getByPlaceholder("E-mail").fill("test@test.com");
    await page.locator(".nb-checkmark").click();

    await expect(targetRow.locator("td").nth(5)).toHaveText("test@test.com");
})