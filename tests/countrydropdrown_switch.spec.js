import { test } from '@playwright/test';

test('Print all countries using switch', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');

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

        switch (countries[i]) {

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
                console.log('Country not found');
        }

    }

});