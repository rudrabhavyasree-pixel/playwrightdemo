import { test, expect } from "@playwright/test";

test.skip('practice assertions', async ({ page }) => {

    await page.goto("https://www.playwrightautomation.com/practice.html");

    const loginBtn = await page.getByRole('link', { name: "Login" }).first();

    await expect(loginBtn).toBeVisible();

    loginBtn.click();

    await page.waitForTimeout(5000);

    await page.getByLabel("Username or email").fill("student");
    await page.getByLabel("Password").nth(1).fill("Password123");
    // await page.getByTestId("login-submit-button").click();
    await page.getByTestId("login-submit-button").click();

    await page.waitForTimeout(5000);

    await expect(loginBtn).toBeVisible();

    await page.waitForTimeout(5000);


})