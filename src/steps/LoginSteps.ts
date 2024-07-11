import { expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

export class LoginSteps {
    protected page;
    protected loginPage: LoginPage;
    protected homePage: HomePage;

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
    }
    async goToLoginPage() {
        await this.loginPage.goto();
        await this.loginPage.handleCookiesPopup()
    }
    async login(username, password) {
        await this.loginPage.login(username, password)
    }

    async assertUserIsLoggedIn(user) {
        const authenticatedUserBanner = await this.homePage.getUserGreetingBanner(user)
        expect(authenticatedUserBanner, 'User authenticated banner should be displayed but it is not!').toBeTruthy();
    }

}