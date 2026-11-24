import { Page, Locator } from "@playwright/test";

export class signIn {



    page: Page;
    user_name: Locator;
    user_password: Locator;
    login_btn: Locator;

    constructor(page: Page) {
        console.log("I am constructor..")
        this.page = page;
        this.user_name = page.getByLabel("Username or email");
        this.user_password = page.getByLabel("Password").nth(1);
        this.login_btn = page.getByTestId("login-submit-button");
    

    }

    async navigateTo(url:string){
       await this.page.goto(url)
    }
    async enterUsername(uName:string){
        await this.user_name.fill(uName);

    }

    async enterPassword(uPwd:string){
        await this.user_password.fill(uPwd);

    }

    async clickLogin(){
        await this.login_btn.click();
    }


}