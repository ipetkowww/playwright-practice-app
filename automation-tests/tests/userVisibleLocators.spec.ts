import { test } from '@playwright/test';

const url: string = 'http://localhost:4200/';

test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.getByTitle('Forms').click();
    await page.getByTitle('Form Layouts').click();
})

test('User visible locators', async ({ page }) => {
    await page.getByRole('textbox', { name: "Email" }).first().click();
    await page.getByRole('button', { name: "Sign in" }).first().click();

    await page.getByLabel('Email').first().click();

    await page.getByPlaceholder('Recipients').click();

    await page.getByText('Block form').click();

    await page.getByTitle('Auth').click();

    await page.getByTestId('signIn').click();
})