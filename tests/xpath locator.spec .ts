import { test, expect } from '@playwright/test';

test('Login using XPath', async ({ page }) => {
  await page.goto('https://www.qapractice.com/practice-login-form' );

  // Email using XPath ID
  await page.locator('//*[@id="login-email"]').fill('user@premiumbank.com');

  // Password using XPath ID
  await page.locator('//*[@id="login-password"]') .fill('Bank@123');

  // Remember me checkbox using XPath
  await page.locator('//*[@id="login-remember"]' ).check();

  // Sign in button using XPath
  await page.locator('//*[@id="login-submit"]' ).click();

  // Verify success message
    await expect(page.locator('//*[@data-testid="login-success"]') ).toContainText('Login Successful');
});

