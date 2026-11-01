import { test, expect } from '@playwright/test';

test('Login using getByRole', async ({ page }) => {
  await page.goto('https://www.qapractice.com/practice-login-form' );

  // Fill email using accessible label
  await page.getByRole('textbox', {name: 'Email Address'}).fill('user@premiumbank.com');

  // Fill password
  await page.getByRole('textbox', {name: 'Password'}).fill('Bank@123');

  // Check Remember me
  await page.getByRole('checkbox', {name: 'Remember me'}).check();

  // Click Sign in
  await page.getByRole('button', {name: 'Sign in'}).click();

  // Verify successful login
  await expect(page.getByText(/Login Successful/)).toBeVisible();
});



