import test from "@playwright/test";

test('how to use press sequentially', async ({ page }) => {

await page.goto('https://www.qapractice.com/practice-login-form');
await page.getByPlaceholder("Enter your email").fill('rudra');
await page.waitForTimeout(2000);
await page.getByPlaceholder("Enter your email").clear();
await page.waitForTimeout(2000);
await page.getByPlaceholder("Enter your email").fill('hello');
await page.waitForTimeout(2000);
// await page.getByPlaceholder("Enter yourr email").fill('');
await page.waitForTimeout(2000);
await page.getByPlaceholder("Enter your email").fill('hi');
await page.waitForTimeout(2000);
await page.getByPlaceholder("Enter your email").pressSequentially('good morning');
await page.waitForTimeout(2000);
// await page.getByPlaceholder("Enter yourr email").fill('');
await page.waitForTimeout(2000);
await page.getByPlaceholder("Enter your email").pressSequentially('rudra@gmail.com');
await page.waitForTimeout(5000);
})
