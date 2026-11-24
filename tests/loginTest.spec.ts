import { test, expect } from "@playwright/test";
import { UserLoginPage } from "../pages/LoginPage.ts";

test('practice assertions', async ({ page }) => {

    const login = new UserLoginPage(page);

    // Navigate to application
    await login.navigate();

    // Verify login button is visible
    await expect(login.loginBtn).toBeVisible();

    // Click login
    await login.clickLogin();

    // Enter credentials
    await login.enterUsername("student");
    await login.enterUsername2();
    await login.enterUsername3();
    await login.enterPassword("Password123");

    // Submit login
    await login.clickSubmit();

    // Verify login button visibility
    await expect(login.loginBtn).toBeVisible();

});