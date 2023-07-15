export class Loginpage{
    enterUsername(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should("be.visible")
        .should("be.enabled")
        .type(username)
    }
    emterPassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should("be.visible")
        .should("be.enabled")
        .type(password)
    }
    clicklogin(){
        cy.get('.oxd-button')
        .should("contain", "Login")
        .should("be.visible")
        .should("be.enabled")
        .click()
    }
    clickprofile(){
        cy.get('.oxd-userdropdown-img')
        .click()
    }
}