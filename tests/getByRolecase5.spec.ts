import { test, expect } from '@playwright/test';

// Correct URL declaration
const URL = ' https://www.playwrightautomation.com';

// CASE 5: Using getByRole()
// Select Non-binary, enter Name, Email, Address and click Reset

test('Case 5 - Non-binary using getByRole', async ({ page }) => {

await page.goto('https://www.playwrightautomation.com');
    await page.goto(URL);

    // Select Non-binary
    const gender = page.getByRole('radio', {
    name: 'Non-binary / Prefer not to say'
});

await gender.check();
await expect(gender).toBeChecked();


    // Enter Name
    await page.getByRole('textbox', {name: 'Name'}).fill('Arun');

    // Enter Email
    await page.getByRole('textbox', { name: 'Email' }).fill('arun@gmail.com');

    // Enter Address
    await page.getByRole('textbox', {name: 'Address' }).fill('Chennai, Tamil Nadu');

    // Click Reset
    await page.getByRole('button', {name: 'Reset' }).click();

});
