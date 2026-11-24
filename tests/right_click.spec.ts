import { test, expect} from "@playwright/test";

const url = "https://demoqa.com/buttons";

test ('verify right click button', async ({ page }) => {
await page.goto(url);
await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
const rightClickButton = page.locator('#rightClickBtn');
const displayText = await page.locator("[id='rightClickMessage']").textContent();
console.log("DisplayText: " + displayText);
await rightClickButton.click({ button: 'right' });

})