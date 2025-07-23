import { Locator, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.locator("a[title='Forms']").click();
    await page.locator("a[title='Form Layouts']").click();
})

test("Reusing locators", async ({ page }) => {
    const basicForm: Locator = page.locator("nb-card").filter({ hasText: "Basic form" });

    await basicForm.getByRole("textbox", { name: "Email" }).fill("test@test.com");
    await basicForm.getByRole("textbox", { name: "Password" }).fill("Welcome13");
    await basicForm.getByRole("button").click();
})