import { Locator, Page } from "@playwright/test";

export class Elements {

    constructor(private page: Page) { }

    get formsLink(): Locator {
        return this.page.locator('a[title="Forms"]')
    }

    get formLayoutsLink(): Locator {
        return this.page.locator('a[title="Form Layouts"]');
    }
}