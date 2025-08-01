import { Locator, Page } from "@playwright/test";

export class Elements {

    constructor(private page: Page) { }

    private get usingTheGridForm(): Locator {
        return this.page.locator("nb-card", { hasText: "Using the Grid" });
    }

    radioButton(text: string): Locator {
        return this.usingTheGridForm.getByRole("radio", { name: text })
    }
}