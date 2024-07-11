import { type Locator, type Page } from '@playwright/test';

export class BasePage {

    protected page: Page;
    private acceptCookiesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptCookiesButton = page.getByRole('button', { name: 'Accept All' })
    }

    async waitABit(numberOfMiliseconds: number) {
        await this.page.waitForTimeout(numberOfMiliseconds);
    }

    async refreshPage() {
        await this.page.reload();
    }

    async handleCookiesPopup() {
        await this.acceptCookiesButton.click()
    }

}