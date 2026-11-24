import { test, expect } from '@playwright/test';

test('Edit Alden record', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');

    // Locate Alden's row
    const row = page.getByRole('row').filter({ hasText: 'Alden Cantrell' });

    // Verify the row is visible
    await expect(row).toBeVisible();

    // Click Edit icon
    await row.locator('[title="Edit"]').click();

    // Verify the edit form is displayed
    await expect(page.locator('#edit-record-2')).toBeVisible();

});
