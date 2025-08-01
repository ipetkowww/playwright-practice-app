import { expect, Locator, test } from '@playwright/test';
import { FormLayoutsPage } from '../pages/form-layouts-page/formLayoutsPage';
import { UsingTheGridForm } from '../pages/form-layouts-page/using-the-grid-form-component/usingTheGridForm';

let formLayoutsPage: FormLayoutsPage;

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    formLayoutsPage = new FormLayoutsPage(page);
    await formLayoutsPage.open();
})

test("Radio buttons", async () => {
    const usingTheGridForm: UsingTheGridForm = formLayoutsPage.usingTheGridForm;
    await usingTheGridForm.checkRadio("Option 2");

    await expect(usingTheGridForm.elements.radioButton("Option 2")).toBeChecked();
})