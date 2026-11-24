import { test, expect } from '@playwright/test';

test('Select countries using if else condition', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');

    const dropdown = page.getByLabel('Select Country');

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

    for (let i = 0; i < countries.length; i++) {

        if (countries[i] === 'United States') {
            await dropdown.selectOption({ label: 'United States' });

        } else if (countries[i] === 'Canada') {
            await dropdown.selectOption({ label: 'Canada' });

        } else if (countries[i] === 'United Kingdom') {
            await dropdown.selectOption({ label: 'United Kingdom' });

        } else if (countries[i] === 'Germany') {
            await dropdown.selectOption({ label: 'Germany' });

        } else if (countries[i] === 'France') {
            await dropdown.selectOption({ label: 'France' });

        } else if (countries[i] === 'Australia') {
            await dropdown.selectOption({ label: 'Australia' });

        } else if (countries[i] === 'Japan') {
            await dropdown.selectOption({ label: 'Japan' });

        } else if (countries[i] === 'China') {
            await dropdown.selectOption({ label: 'China' });

        } else if (countries[i] === 'Brazil') {
            await dropdown.selectOption({ label: 'Brazil' });

        } else if (countries[i] === 'India') {
            await dropdown.selectOption({ label: 'India' });
        }

        console.log('Selected Country:', countries[i]);

        await expect(dropdown.locator('option:checked')).toHaveText(countries[i]);
    }

});