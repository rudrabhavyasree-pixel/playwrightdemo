import { test, expect } from '@playwright/test';

test('Verify login messages using getByText', async ({ page }) => {await page.goto('https://www.qapractice.com/practice-login-form');

  // Fill the fields using CSS
  await page.locator('#login-email').fill('user@premiumbank.com');
    
    await page.locator('#login-password').fill('Bank@123');

  // Click using visible button text

  // await page.getByText('Sign in', { exact: true }).click();

  // Verify success text
  await expect( page.getByText(/Login Successful/)).toBeVisible();

});
