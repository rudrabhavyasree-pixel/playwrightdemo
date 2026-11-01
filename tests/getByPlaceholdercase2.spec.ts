import { test, expect } from '@playwright/test';

// const URL = 'https://www.playwrightautomation.com/locators-lab.html';
const URL = 'https://www.playwrightautomation.com/practice.html';

test('Case 2 - Unselect all weekdays', async ({ page }) => {

//  await page.goto('https://www.playwrightautomation.com');

    await page.goto(URL);
await page.waitForTimeout(5000);
   // Verify email input
    const emailInput = page.getByPlaceholder('Enter your email');

    await expect(emailInput).toBeVisible();

    // Weekdays
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    // Unselect all weekdays
    for (const day of days) {
        const checkbox = page.getByLabel(day);

        await expect(checkbox).toBeVisible();

        if (await checkbox.isChecked()) {
            await checkbox.uncheck();
        }

        await expect(checkbox).not.toBeChecked();
    }
  await page.waitForTimeout(10000);
  
});