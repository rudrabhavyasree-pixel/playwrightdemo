import { test, expect } from '@playwright/test';

// Correct URL declaration
const URL = 'https://www.playwrightautomation.com';

// CASE 3: Using CSS Selector
// Click Auto Save toggle button

test('Case 3 - Auto Save using CSS Selector', async ({ page }) => {

     await page.goto(' https://www.playwrightautomation.com');

    // Locate and click Auto Save label using CSS
    // await page.locator('label:has-text("Auto Save")')

});
