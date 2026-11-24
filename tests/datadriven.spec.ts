import { test, expect } from "@playwright/test";

const loginData = [
    { username: "student", password: "Password123" },
    { username: "admin", password: "Admin123" },
    { username: "tester", password: "Test123" }
];

for (const data of loginData) {

    test(`Login test for ${data.username}`, async ({ page }) => {

        await page.goto("https://www.playwrightautomation.com/practice.html");

        await page.getByRole("link", { name: "Login" }).first().click();

        await page.getByLabel("Username or email").fill(data.username);

        await page.getByLabel("Password").nth(1).fill(data.password);

        await page.getByTestId("login-submit-button").click();

        // Add assertions based on expected login result.

    });

}