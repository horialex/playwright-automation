import { BasePage } from './BasePage';
import { Page, Locator } from '@playwright/test';

export class LoginPage extends BasePage {
    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameField = page.getByRole('textbox', { name: 'Your username' });
        this.passwordField = page.getByRole('textbox', { name: 'Your password' });
        this.loginButton = page.getByRole('button', { name: 'Log in' })
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async isLoginButtonVisible() {
        return await this.loginButton.isVisible();
    }
}
