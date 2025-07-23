import { expect, Locator, test } from '@playwright/test';

const url: string = 'http://localhost:4200/';

test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.getByTitle("Forms").click();
    await page.getByTitle("Form Layouts").click();
})

test("Getting text from web element", async ({ page }) => {
    //single text value
    const basicForm: Locator = page.locator('nb-card').filter({ hasText: "Basic form" });
    const buttonText: string = await basicForm.locator("button").textContent();

    expect(buttonText).toEqual("Submit");

    //all text values
    const allRadioButtonsText: Array<string> = await page.locator("nb-radio").allTextContents();
    expect(allRadioButtonsText).toContain("Option 1")

    //input value
    const expectedEmail = "test@test.com";
    const emailField: Locator = basicForm.getByRole("textbox", { name: "Email" });

    await emailField.fill(expectedEmail)
    const actualEmail: string = await emailField.inputValue();

    expect(actualEmail).toEqual(expectedEmail);

    //value of attribute
    const placeholderValue: string = await emailField.getAttribute("placeholder");
    expect(placeholderValue).toEqual("Email");
})