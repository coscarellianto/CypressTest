import { loginPageLocators } from "../locators/login_page_locator.cy"
let login_page_locators=new loginPageLocators()

export class loginPage{


    navigate(){
        cy.visit(login_page_locators.loginPage_url)
    }

    enterUserName(loginPage_username){
        cy.get(login_page_locators.loginPage_username).type(loginPage_username)
    }

    enterPassword(loginPage_password){
        cy.get(login_page_locators.loginPage_password).type(loginPage_password)
    }

    clickLoginButton(){
        cy.get(login_page_locators.loginPage_loginButton).click()
    }

    validateLoginMessage(){
        cy.contains(login_page_locators.loginPage_successfulLoginMessage)
    }
}