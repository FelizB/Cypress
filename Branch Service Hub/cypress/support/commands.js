// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginToMicrosoft", (username, password) => { 
    // visit the Microsoft login page 
    cy.origin("https://login.microsoftonline.com", () => { 
        // enter the username 
        cy.get("#i0116").type(username) 
        // click on the next button 
        cy.get("#idSIButton9").click() 
        // enter the password 
        cy.get("#i0118").type(password) 
        // click on the sign in button 
        cy.get("#idSIButton9").click() 
        // optionally, handle any additional prompts or verifications 
    }) 
})