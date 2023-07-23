/// <reference types="cypress" />
describe('Log In',() => { 
    
    
    it("language selection",()=>{
        cy.session("start session",()=>{
            cy.visit("https://servicehub-admin-portal-uat.equitygroupholdings.com/login/login?returnUrl=https:%2F%2Fservicehub-customer-360-uat.equitygroupholdings.com%2Fservices&lang=en-GB&reauth=0") 
            cy.get('.mat-form-field-infix')
                .click()
            
            cy.get('#mat-option-1 > .mat-option-text')
                .should("contain","English, KE")
                .click()
            cy.wait(500)
            cy.contains('Confirm')
                .should("contain","Confirm")
                .click()
            cy.wait(500)
        
            cy.get('.login-container-md > .mat-focus-indicator')
                .should("contain","Sign in with Microsoft")
                .click()
                .debug()

        
            cy.wait(500)
            cy.get("#i0116").type("felix.bosire@equitybank.co.ke") 
            cy.get("#idSIButton9").click() 
            cy.get("#i0118").type("Felantez@123===") 
            cy.get("#idSIButton9").click() 
         
            cy.wait(500)
            cy.get("#signInAnotherWay")
                .click()
        
        
    })
   
})
    
})