import test, { expect } from "@playwright/test";

test('to verify dropdown list', async ({ page }) => {

    const expectedCountries = [
        'Select a country…',
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
    
    await page.goto("https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com")

    const countryList = await page.getByRole('combobox', { name: 'Select Country' });
    const count = await countryList.locator('option').count();
    const countries = await countryList.locator('option').allInnerTexts();
    
    expect(countries).toEqual(expectedCountries);
})
