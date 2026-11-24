import { Page, Locator } from "@playwright/test";

export class UserLoginPage {

    page: Page;
    loginBtn: Locator;
    username: Locator;
    password: Locator;
    submitBtn: Locator;

    constructor(page: Page) {

        this.page = page;

        this.loginBtn = page.getByRole('link', { name: "Login" }).first();

        this.username = page.getByLabel("Username or email");

        this.password = page.getByLabel("Password").nth(1);

        this.submitBtn = page.getByTestId("login-submit-button");
    }

    async navigate() {
        await this.page.goto("https://www.playwrightautomation.com/practice.html");
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    async enterUsername(username: string) {
        await this.username.fill(username);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickSubmit() {
        await this.submitBtn.click();
    }
    //optional parameter
    async enterUsername2(username?: string) {
        await this.username.fill(username ?? "student");
    }

    //default paramter
    async enterUsername3(username: string = "student") {
        await this.username.fill(username);
    }
}