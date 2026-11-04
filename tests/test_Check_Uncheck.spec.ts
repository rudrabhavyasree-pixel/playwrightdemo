import test from "@playwright/test";


test('how to use check and uncheck', async ({ page }) => {

    await page.goto('https://www.qapractice.com/practice-login-form');

    const chckBoxIsChecked_before_Check = await page.getByTestId('login-remember').isChecked();
    console.log('chckBoxIsChecked_before_Check :' + chckBoxIsChecked_before_Check);
    await page.waitForTimeout(2000);
    await page.getByTestId('login-remember').check();
    await page.waitForTimeout(2000);
    const chckBoxIsChecked_after_Check = await page.getByTestId('login-remember').isChecked();
    console.log('chckBoxIsChecked_after_Check :' + chckBoxIsChecked_after_Check);
    await page.waitForTimeout(2000);


    await page.getByTestId('login-remember').uncheck();
    const chckBoxIsChecked_after_uncheck = await page.getByTestId('login-remember').isChecked();
    console.log('chckBoxIsChecked_after_uncheck :' + chckBoxIsChecked_after_uncheck);
    await page.waitForTimeout(2000);

})