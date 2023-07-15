/// <reference types="cypress"/>

it("Google Search", function(){
    cy.visit("https://google.com")
    cy.get('#APjFqb',{timeout:10000}).type("Automation step by step{Enter}")
})