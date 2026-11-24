
import { test } from '@playwright/test';

test('Print all countries using for loop, if-else and switch', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');

    // Locate country dropdown
    const dropdown = page.getByLabel('Select Country');

    // Get all countries from dropdown in real time
    const countries = await dropdown.locator('option').allTextContents();

    // Using for loop
    for (let i = 0; i < countries.length; i++) {

        const country = countries[i].trim();

        // Using if-else condition
        if (country !== '' && country !== 'Select a country') {

            // Using switch condition
            switch (country) {

                case 'United States':
                    console.log('United States');
                    break;

                case 'Canada':
                    console.log('Canada');
                    break;

                case 'United Kingdom':
                    console.log('United Kingdom');
                    break;

                case 'Germany':
                    console.log('Germany');
                    break;

                case 'France':
                    console.log('France');
                    break;

                case 'Australia':
                    console.log('Australia');
                    break;

                case 'Japan':
                    console.log('Japan');
                    break;

                case 'China':
                    console.log('China');
                    break;

                case 'Brazil':
                    console.log('Brazil');
                    break;

                case 'India':
                    console.log('India');
                    break;

                default:
                    console.log('Country not found:', country);
            }

        } else {

            console.log('Default option skipped');

        }

    }

});
