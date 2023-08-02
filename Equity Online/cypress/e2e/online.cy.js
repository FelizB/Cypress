describe("equity online", () => {
  beforeEach("load page", () => {
    cy.visit(
      "https://oneequity-uat.equitygroupholdings.com/en/access/onboarding"
    );
  });
  it("online passes", () => {
    cy.contains("Get started").click();
    cy.get("#accountId")
      .should("have.attr", "placeholder", "Email address or mobile number")
      .type("ugbroker@gmail.com");
    cy.wait(500);
    cy.get("#password")
      .should("have.attr", "placeholder", "Enter password")
      .type("Manual@2022");
    cy.wait(500);
    cy.get('button[type*="submit"]').click({ force: true });
  });
});
