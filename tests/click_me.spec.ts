import { test, expect } from "@playwright/test";

const url = "https://demoqa.com/buttons";

test('verify click me button', async ({ page }) => {

    await page.goto(url);

    // Locate and click Click Me button
    const clickMeButton = page.getByRole("button", { name: "Click Me", exact: true });
    await page.waitForTimeout(2000);
    await clickMeButton.click();
    await page.waitForTimeout(2000);
    // Verify the displayed message
    const displayText = page.locator("#dynamicClickMessage");
    await page.waitForTimeout(2000);
    await expect(displayText).toHaveText("You have done a dynamic click");
    await page.waitForTimeout(2000);
    console.log("DisplayText: " + await displayText.textContent());

});
