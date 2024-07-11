import { BasePage } from './BasePage';
import { Page, expect, Locator } from '@playwright/test';

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await this.page.goto('/home');
    }

    async getUserGreetingBanner(user): Promise<Locator | null> {
        try {
            const userGreetingBannerr = this.page.getByRole('heading', { name: new RegExp(`${user}`) });
            await userGreetingBannerr.waitFor({ state: 'visible' });
            return userGreetingBannerr;
        } catch (error) {
            return null;
        }
    }

    async isUserGreetingMessageDisplayed(user) {
        await expect(this.page.getByRole('heading', { name: new RegExp(`${user}`) })).toBeVisible()
    }
}
