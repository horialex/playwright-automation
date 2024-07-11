import { test as base, Page } from '@playwright/test';
import { LoginSteps } from '../steps/LoginSteps';

type MyFixtures = {
    page: Page;
    loginSteps: LoginSteps;
}

export const test = base.extend<MyFixtures>({
    page: async ({ browser }, use) => {
        let context = await browser.newContext({});
        const page = await context.newPage();
        await use(page);
        await page.close();
    },
    loginSteps: async ({ page }, use) => {
        const loginSteps = new LoginSteps(page);
        await use(loginSteps);
    },

});