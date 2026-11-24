import { test, expect } from '@playwright/test';

test('Select India if available', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');

    // Locate country dropdown
    const dropdown = page.getByLabel('Select Country');

    // Get all available country options
    const countries = await dropdown.locator('option').allTextContents();

    // Check whether India is available
    if (countries.includes('India')) {

        await dropdown.selectOption({ label: 'India' });

        console.log('India is available and selected');

        await expect(dropdown).toHaveValue('india');
        await page.waitForTimeout(10000);

    } else {

        console.log('India is not available in the dropdown');
        await page.waitForTimeout(10000);
    }

});
