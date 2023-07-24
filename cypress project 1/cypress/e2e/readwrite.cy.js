/// <reference types="cypress"/>
it("readfiles using Fixture",()=>{
    cy.fixture("example.json").then((data)=>{
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })
})

it("read file using readfile",()=>{
    cy.readFile("./cypress/fixtures/example.json").then((data)=>{
        cy.log(data.name)
        cy.log(data.email)
    })
})

it("write files ",()=>{
    cy.writeFile("felix.txt","Hello this is Felix \n")
    cy.writeFile("felix.txt","I am learning cypress",{flag:'a+'})
})