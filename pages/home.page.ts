import { Page, Locator } from '@playwright/test'

export class HomePage {
    readonly page: Page;
    readonly searchTab: Locator

    constructor(page: Page) {
        this.page = page;
        this.searchTab = page.getByRole('link', {name: 'Search', exact: true});
    }

    async clickSearchTab() {
        await this.searchTab.click();
    }


}