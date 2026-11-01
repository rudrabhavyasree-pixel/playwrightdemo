
import { test, expect } from '@playwright/test';


// CASE 4: Using XPath
// Select Female, enter Name, Email, Address and click Reset

test('Case 4 - Female using XPath', async ({ page }) => {

    // Open website
    await page.goto('https://www.playwrightautomation.com/practice.html');

    // Select Female
    await page.locator('xpath=//label[normalize-space(.)="Female"]').click();

    // Enter Name
    await page.locator('xpath=//label[@for="name"]/following-sibling::input' ).fill('Priya');

    // Enter Email
    await page.locator( '//input[@name="email"]').fill('priya@gmail.com');

    // Enter Address
    await page.locator('//textarea[@name="address"]').fill('Bangalore, Karnataka');

    // Verify entered values
    await expect(page.locator('#name')).toHaveValue('Priya');
    await expect(page.locator('#email')).toHaveValue('priya@gmail.com');
    await expect(page.locator('#address')).toHaveValue('Bangalore, Karnataka');

    // Click Reset
    await page.locator('//button[@id="btn-reset-text-inputs"]').click();

    // Verify fields are reset
    await expect(page.locator('#name')).toHaveValue('');
    await expect(page.locator('#email')).toHaveValue('');
    await expect(page.locator('#address')).toHaveValue('');

});
