const LinkUrl = () => {
  //beforeEach("start here",()=>{
  cy.visit(Cypress.env("URL"));
  //})
};

const LanguageSelection = () => {
  if (cy.get(".fw-500")) {
    cy.get(
      "#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper"
    ).click();

    cy.get("#mat-option-1 > .mat-option-text")
      .should("contain", "English, KE")
      .click();

    cy.contains("Confirm").should("contain", "Confirm").click();
  } else {
    cy.skip();
  }
};

const MicrosoftAuth = () => {
  cy.wait(500);

  cy.get(".login-container-md > .mat-focus-indicator")
    .should("contain", "Sign in with Microsoft")
    .click();

  cy.wait(500);

  cy.origin(Cypress.env("ORIGINURL"), () => {
    cy.get("#i0116").type(Cypress.env("USERNAME"));

    cy.wait(500);

    cy.get("#idSIButton9").click();
    cy.get("#i0118").type(Cypress.env("PASSWORD"));

    cy.wait(500);
    cy.get("#idSIButton9").click();

    /*cy.get("#signInAnotherWay")
            .click()*/
  });
};

const DashRedirect = () => {
  if (cy.contains("Return to dashboard")) {
    cy.contains("Return to dashboard").click({ force: true });
  } else {
    cy.skip();
  }
};

export default { LinkUrl, LanguageSelection, MicrosoftAuth, DashRedirect };

/*<a _ngcontent-tcb-c51="" class="color-primary fw-400" style="text-decoration: none;" href="/dashboard">Return to dashboard&nbsp;»</a>
cy.get(".login-container-md > .mt-15 > .color-primary");
cy.contains("Return to dashboard");*/
