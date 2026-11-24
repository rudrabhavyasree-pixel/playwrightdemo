import { Page } from "@playwright/test";

export class StaticTablePage {
    constructor(private page: Page) {}

    async getSportByCountry(countryName: string): Promise<string> {

        const countryRow = this.page.getByRole("row").filter({
            has: this.page.getByRole("cell", {
                name: countryName,
                exact: true
            })
        });

        return await countryRow.getByRole("cell").nth(1).innerText();
    }
}