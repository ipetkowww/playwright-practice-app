import { test } from '@playwright/test';
import { FormLayoutsPage } from '../pages/form-layouts-page/formLayoutsPage';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    const formLayoutsPage: FormLayoutsPage = new FormLayoutsPage(page);
    await formLayoutsPage.open();
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