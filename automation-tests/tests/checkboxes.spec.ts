import { expect, Locator, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByTitle("Modal & Overlays").click();
    await page.getByTitle("Toastr").click();
})

test("Checkboxes", async ({ page }) => {
    // const hideOnClickCheckbox: Locator = page.getByRole("checkbox", {name: "Hide on click"});

    await page.getByRole("checkbox", { name: "Hide on click" }).uncheck({ force: true });
    await page.getByRole("checkbox", { name: "Prevent arising of duplicate toast" }).check({ force: true });

    const allBoxes: Locator[] = await page.getByRole("checkbox").all();

    for (const box of allBoxes) {
        await box.uncheck({ force: true });
        expect(await box.isChecked()).toBeFalsy();   
    }
})