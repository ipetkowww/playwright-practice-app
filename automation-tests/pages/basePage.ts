import { Page } from "@playwright/test";
import { LeftMenuComponent } from "../components/left-menu-component/leftMenuComponent";

export class WebPage {

    protected readonly leftMenu: LeftMenuComponent;

    constructor(protected readonly page: Page) {
        this.leftMenu = new LeftMenuComponent(this.page);
    }
}