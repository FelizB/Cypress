/// <reference types="cypress" />
import Auth from "../../components/Auth";

describe("Log In", { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  it("Start Log in here", () => {
    cy.session("start session", () => {
      Auth.LinkUrl();
      Auth.LanguageSelection();
      Auth.MicrosoftAuth();
      cy.wait(20000);
      Auth.LanguageSelection();
      cy.wait(4000);
      Auth.DashRedirect();
      cy.wait(60000);
    });
  });
});
