import { test, expect } from "@playwright/test";
import { StaticTablePage } from "../pages/statictablepage";

test("Get sport name using country", async ({ page }) => {

    await page.goto("https://www.playwrightautomation.com/practice.html#section-table-static");

    // Country name provided by user
    const countryName = "India";
    const tablePage = new StaticTablePage(page);

    const sportsName = await tablePage.getSportByCountry("India");
    

    // Locate the row containing the country
    const countryRow = page.getByRole("row").filter({
        has: page.getByRole("cell", { name: countryName, exact: true })
    });

    // Get sport name from second column
    const sportName = await countryRow.getByRole("cell").nth(1).innerText();

    const totalMedal = await countryRow.getByRole("cell").nth(1).innerText();


    console.log("Country:", countryName);
    console.log("Sport:", sportName);

    // Verify expected sport
    expect(sportName).toBe("Shooting");

});