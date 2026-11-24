import{test} from "@playwright/test"
import{signIn} from "../pages/signinpage"

test('fasdfasd fas fasd fasd', async({page})=>{
//create obj for signin class
    const sin = new signIn(page);
    await sin.navigateTo("https://www.playwrightautomation.com/login.html?redirect=%2Fpractice.html");
    await sin.enterUsername("chiru");
    await sin.enterPassword("chiru123");
    await sin.clickLogin();
    await page.waitForTimeout(10000);
})