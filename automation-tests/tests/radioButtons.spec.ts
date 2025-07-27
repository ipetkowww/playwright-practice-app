import { expect, Locator, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByTitle("Forms").click();
    await page.getByTitle("Form Layouts").click();
})

test("Radio buttons", async ({ page }) => {
    const usingTheGridForm: Locator = page.locator("nb-card", { hasText: "Using the Grid" });

    // await usingTheGridForm.getByLabel("Option 1").check({force: true});
    const option1RadioButton: Locator = usingTheGridForm.getByRole("radio", {name: "Option 1"});
    const option2RadioButton: Locator = usingTheGridForm.getByRole("radio", {name: "Option 2"});

    await option2RadioButton.check({force: true});

    const option1isChecked: boolean = await option1RadioButton.isChecked();
    const option2isChecked: boolean = await option2RadioButton.isChecked();

    //Generic Assertion
    expect(option1isChecked).toBeFalsy();
    expect(option2isChecked).toBeTruthy();
    expect
    //Locator Assertion
    await expect(option2RadioButton).toBeChecked();
})