import "cypress-iframe";

describe("Handling web tables", () => {
  beforeEach("visit page", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });
  /*it("select child", () => {
    cy.get("tr td:nth-child(2").each(($el, index, $list) => {
      const item = $el.text();
      if (item.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      } else if (item.includes("Maven")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const priceText = price.text();
            expect(priceText).to.equal("20");
          });
      }
    });
  });

  it("Mouse hover", () => {
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });*/

  it("Handling Frames", () => {
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find('a[href="mentorship"]').eq(0).click();
  });
});
