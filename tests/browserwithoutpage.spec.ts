import { test, expect, chromium } from '@playwright/test';

test('Launch browser without page fixture', async () => {

    // Launch browser
    const browser = await chromium.launch({
        headless: false
    });

    // Create context
    const context = await browser.newContext();

    // Create page manually
    const page = await context.newPage();

    // Open website
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    console.log(await page.title());

    await expect(page).toHaveTitle(/OrangeHRM/);

    // Close browser
    await browser.close();

});
