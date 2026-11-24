import{test} from "@playwright/test"

test('get the cell value based on given cell value', async({page})=>{


    await page.goto("https://www.playwrightautomation.com/practice.html#section-table-static");
    const countryLocator =   await page.getByRole("row").filter({
            has: await page.getByRole("cell", {
                name: "India",
                exact: true
            })
        });

        const sprotname = await countryLocator.nth(1).innerText();
        console.log("sprotname: "+sprotname);


})