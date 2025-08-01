import { Page } from "@playwright/test";
import { FormLayoutsPage } from "../../pages/form-layouts-page/formLayoutsPage";
import { Elements } from "../left-menu-component/elements";

export class LeftMenuComponent {

    private elements: Elements;

    constructor(private page: Page) {
        this.elements = new Elements(page);
    }

    async openFormLayoutsPage(): Promise<FormLayoutsPage> {
        await this.elements.formsLink.click();
        await this.elements.formLayoutsLink.click();
        return new FormLayoutsPage(this.page);
    }
}