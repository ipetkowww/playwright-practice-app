import { test } from '@playwright/test';

const url: string = 'http://localhost:4200/';

test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.locator('a[title="Forms"]').click();
    await page.locator('a[title="Form Layouts"]').click();
})

test('Locating parent elements', async ({ page }) => {
    await page.locator('nb-card', { hasText: "Using the Grid" })
        .getByRole('textbox', { name: 'Email' })
        .click();

    await page.locator('nb-card', { has: page.locator('#inputEmail') })
        .getByRole('textbox', { name: 'Email' })
        .click();

    await page.locator('nb-card').filter({ hasText: 'Basic form' })
        .getByRole('textbox', { name: 'Email' })
        .click();
})