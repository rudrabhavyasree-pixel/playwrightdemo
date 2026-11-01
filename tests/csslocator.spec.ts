import { test, expect } from '@playwright/test';

test('Login using CSS selectors', async ({ page }) => {
  await page.goto('https://www.qapractice.com/practice-login-form');

  // Email using CSS ID selector
  await page.locator('#login-email')
    .fill('user@premiumbank.com');

  // Password using CSS ID selector
  await page.locator('#login-password')
    .fill('Bank@123');

  // Remember me checkbox using CSS attribute selector
  await page.locator('[data-testid="login-remember"]')
    .check();

  // Sign in using CSS ID selector
  await page.locator('#login-submit').click();

  // Verify success message using CSS
  await expect( page.locator('[data-testid="login-success"]') ).toContainText('Login Successful');
});


