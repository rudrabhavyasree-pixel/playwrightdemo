import { test, expect} from "@playwright/test";

const url = "https://demoqa.com/buttons";

test ('verify double click button', async ({ page }) => {
await page.goto(url);
await page.getByRole("button", { name: 'Double Click Me' }).dblclick();
await page.waitForTimeout(2000);
const doubleClickButton =await page.locator('#doubleClickBtn');
await page.waitForTimeout(2000);
const displayText = await page.locator("[id='doubleClickMessage']").textContent();
await page.waitForTimeout(2000);
console.log("DisplayText: " + displayText);
await doubleClickButton.click({ button: 'right' });
await page.waitForTimeout(2000);

})