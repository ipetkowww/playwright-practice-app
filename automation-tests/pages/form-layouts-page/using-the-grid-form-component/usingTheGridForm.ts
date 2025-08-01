import { Page } from "@playwright/test";
import { Elements } from "../using-the-grid-form-component/Elements";

export class UsingTheGridForm {

    private readonly _elements: Elements;

    constructor(private readonly page: Page) {
        this._elements = new Elements(page);
    }

    async checkRadio(text: string): Promise<void> {
        await this.elements.radioButton(text).check({ force: true });
    }

    get elements(): Elements {
        return this._elements;
    }
}