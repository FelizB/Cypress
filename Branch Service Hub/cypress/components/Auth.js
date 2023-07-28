const LinkUrl =()=>{
    //beforeEach("start here",()=>{
        cy.visit(Cypress.env("URL")) 
    //})
}

const LanguageSelection =()=>{
    cy.get('#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper')
        .click()

    cy.get('#mat-option-1 > .mat-option-text')
        .should("contain","English, KE")
        .click()
    
    cy.contains('Confirm')
        .should("contain","Confirm")
        .click()
}

const MicrosoftAuth =()=>{
    cy.wait(500)

    cy.get('.login-container-md > .mat-focus-indicator')
        .should("contain","Sign in with Microsoft")
        .click()

    cy.wait(500)
    
    cy.origin(Cypress.env("ORIGINURL"),()=>{
        cy.get("#i0116").type(Cypress.env('USERNAME')) 
       
        cy.wait(500)

        cy.get("#idSIButton9").click() 
        cy.get("#i0118").type(Cypress.env("PASSWORD")) 
        
        cy.wait(500)
        cy.get("#idSIButton9").click() 

        /*cy.get("#signInAnotherWay")
            .click()*/
    })
    
    
}

export default {LinkUrl,LanguageSelection, MicrosoftAuth}