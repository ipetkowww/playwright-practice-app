import { test } from '@playwright/test';

const url: string = 'http://localhost:4200/';

test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.locator('a[title="Forms"]').click();
    await page.locator('a[title="Form Layouts"]').click();
})

test('Locator syntax rules', async ({ page }) => {
    //tag name
    page.locator('input');

    //id
    page.locator('#inputEmail1');

    //class
    page.locator('.shape-rectangle');

    //attribute
    page.locator('[placeholder="Email"]');

    //entire class value (full value). provide full class value (all values inside class attribute)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

    //combine different selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //xpath
    page.locator('//input[@id="inputEmail1"]')
})