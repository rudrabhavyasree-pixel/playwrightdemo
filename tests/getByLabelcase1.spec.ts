import { test, expect } from '@playwright/test';

// Correct URL declaration
const URL = 'https://www.playwrightautomation.com/practice.html';

// CASE 1: Using getByLabel()
// Select Male, enter Name, Email, Address and click Reset
// Verify fields are reset

test('Case 1 - Male using getByLabel', async ({ page }) => {

    // Open webpage
    await page.goto('https://www.playwrightautomation.com/practice.html');

    // Select Male
    // await page.getByLabel('Male').check();
    await page.waitForTimeout(5000);
    // Enter Name
    await page.getByLabel('Name').first().fill('Rahul');

    // Enter Email
    await page.getByLabel('Email').fill('rahul@gmail.com');

    // Enter Address
    await page.getByLabel('Address').fill('Hyderabad, Telangana');

    // Click Reset button
    await page.getByRole('button', { name: 'Reset' }).click();

    // Verify fields are reset
    await expect(page.getByLabel('Name')).toHaveValue('');
    await expect(page.getByLabel('Email')).toHaveValue('');
    await expect(page.getByLabel('Address')).toHaveValue('');

});