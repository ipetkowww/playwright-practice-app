import { Page } from "@playwright/test";
import { WebPage } from "../basePage";
import { Elements } from "../form-layouts-page/elements";
import { UsingTheGridForm } from "./using-the-grid-form-component/usingTheGridForm";

export class FormLayoutsPage extends WebPage {

    private readonly _elements: Elements;

    constructor(protected readonly page: Page) {
        super(page);
        this._elements = new Elements(page);
    }

    async open() {
        await this.leftMenu.openFormLayoutsPage();
    }

    get usingTheGridForm(): UsingTheGridForm {
        return new UsingTheGridForm(this.page);
    }




}