import { Loginpage } from "./pages/login"

const loginpage = new Loginpage()

describe("All log in tests", ()=>{
    it("login test 1",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
        
        loginpage.enterUsername("Admin")
        loginpage.emterPassword("admin123")
        loginpage.clicklogin()
        loginpage.clickprofile()
        
      
    })
    
    it("login test 2",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
        
        loginpage.enterUsername("Admin2")
        loginpage.emterPassword("admin123")
        loginpage.clicklogin()
        loginpage.clickprofile()
        
      
    })

})
