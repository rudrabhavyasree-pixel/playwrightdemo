import { test, expect } from '@playwright/test';

test('Print all table rows', async ({ page }) => {

    // Open DemoQA Web Tables
    await page.goto('https://demoqa.com/webtables');

    // Locate all employee rows
    const rows = page.getByRole('row');

    // Get total number of rows
    const rowCount = await rows.count();
    console.log('Total rows:', rowCount);

    // Print all employee details
    for (let i = 1; i < rowCount; i++) {
        const rowText = await rows.nth(i).innerText();
        console.log(rowText);
    }
});
