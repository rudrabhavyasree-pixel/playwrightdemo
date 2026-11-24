import { test, expect } from '@playwright/test';

test('Select each country using for loop', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');

    // Locate country dropdown
    const dropdown = page.getByLabel('Select Country');

    // Store country names in an array
    const countries = [
        'United States',
        'Canada',
        'United Kingdom',
        'Germany',
        'France',
        'Australia',
        'Japan',
        'China',
        'Brazil',
        'India'
    ];

    // Select each country using for loop
    for (let i = 0; i < countries.length; i++) {

        await dropdown.selectOption({
            label: countries[i]
        });

        console.log('Selected Country:', countries[i]);

        // Verify selected country
        await expect(dropdown.locator('option:checked'))
            .toHaveText(countries[i]);
    }
    
});
