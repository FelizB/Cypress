
it("assertions", function(){
    cy.visit("https://example.cypress.io")
    cy.contains('get').click()

    //implicit assertions
    cy.get('#query-btn')
        .should("contain", "Button")
        .should("have.class", "query-btn")
        .should("be.visible")
        .should("be.enabled")
    
    
    //explicit assertions
    expect(true).to.be.true
 
})