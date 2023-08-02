describe("testing file", () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min));
  }

  it("passes", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    /*cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".search-button").click();

    cy.get(".product:visible").should("have.length", 4);*/
    cy.wait(2000);
    cy.get(".products")
      .find(".product")
      .then((listing) => {
        const randomNumber = getRandomInt(0, listing.length);
        cy.log(randomNumber);
        cy.get(".products")
          .find(".product")
          .eq(randomNumber)
          .contains("ADD TO CART")
          .click();
      });
  });
});
