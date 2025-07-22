import { expect, test } from '@playwright/test';

const url: string = 'http://localhost:4200/';

test.beforeEach(async ({ page }) => {
    console.log(`Running test: ${test.info().title}`);
    await page.goto(url);
    await page.locator('a[title="Forms"]').click();
})

test('Can navigate to Form Layouts page', async ({ page }) => {
    await page.locator('a[title="Form Layouts"]').click();

    await expect(page).toHaveURL(`${url}pages/forms/layouts`);
})

test('Can navigate to Datepicker page', async ({ page }) => {
    await page.locator('a[title="Datepicker"]').click();

    await expect(page).toHaveURL(`${url}pages/forms/datepicker`);
})