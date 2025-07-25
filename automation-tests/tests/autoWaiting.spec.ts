import { expect, Locator, test } from "@playwright/test";

const expectedText: string = "Data loaded with AJAX get request.";

test.beforeEach(async ({ page }) => {
    await page.goto("http://uitestingplayground.com/ajax");
    await page.getByRole("button", { name: "Button Triggering AJAX Request" }).click();
})

test("Auto waiting", async ({ page }) => {
    const successMessage: Locator = page.locator(".bg-success");

    // await successMessage.click(); //auto-wating up to 30 seconds by default

    // const text: string = await successMessage.textContent(); // auto-waiting up to 30 seconds by default

    // await successMessage.waitFor({state: "attached"});
    // const text: Array<string> = await successMessage.allTextContents(); //no auto-waiting and assert fails
    // expect(text).toContain(expectedText);


    // await expect(successMessage).toHaveText(expectedText) // fails because auto-waiting is 5 seconds for locator asserts
    await expect(successMessage).toHaveText(expectedText, { timeout: 20_000 }); // override default auto-waiting time
})

test("Alternative waits", async ({ page }) => {
    const successMessage: Locator = page.locator(".bg-success");

    // Wait for element
    // await page.waitForSelector(".bg-success");

    // Wait for particular response
    await page.waitForResponse("http://uitestingplayground.com/ajaxdata");


    const text: Array<string> = await successMessage.allTextContents(); //no auto-waiting and assert fails
    expect(text).toContain(expectedText);
})