import { test, expect } from '@playwright/test';

test('Login using getByTestId', async ({ page }) => { await page.goto('https://www.qapractice.com/practice-login-form');

  await page.getByTestId('login-email').fill('user@premiumbank.com');

  await page.getByTestId('login-password').fill('Bank@123');

  await page.getByTestId('login-remember').check();

  await page.getByTestId('login-submit') .click();

  await expect( page.getByTestId('login-success')).toContainText('Login Successful');
  
});


