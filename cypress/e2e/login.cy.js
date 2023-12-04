
import { loginPage } from "../pages/login_page.cy"

const login_page=new loginPage()


it('login test', function(){
    login_page.navigate();
    login_page.enterUserName('test');
    login_page.enterPassword('test');
    login_page.clickLoginButton();
    login_page.validateLoginMessage();
})