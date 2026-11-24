import { test, expect } from '@playwright/test';

test('to validate table', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html#section-table-static');

    const expectedSportsNames: string[] = [
        'Swimming',
        'Table Tennis',
        'Shooting',
        'Wrestling',
        'Swimming',
        'Cycling'
    ];

    // Locate only the sports table
    const sportsTable = page.locator('#section-table-static table').first();

    // Get second column values
    const actualSportsNames = await sportsTable
        .locator('tbody tr td:nth-child(2)')
        .allTextContents();

    console.log('Actual Sports Names:', actualSportsNames);

    expect(actualSportsNames).toEqual(expectedSportsNames);

});