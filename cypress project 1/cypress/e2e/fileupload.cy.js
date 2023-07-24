///<reference types="cypress"/>
///<reference types="cypress-downloadfile"/>
it("File upload",()=>{
    cy.visit("https://trytestingthis.netlify.app")

    cy.get('#myfile').attachFile("example.json")
})

it("file download test",()=>{
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',  'mydownloads' ,'demo.jpg')
})