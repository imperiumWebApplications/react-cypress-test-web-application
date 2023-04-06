/// <reference types="cypress" />

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/"); // Visit your login page
  });

  it("should display an error toast on incorrect credentials", () => {
    cy.get("#username").type("wrongUsername");
    cy.get("#password").type("wrongPassword");
    cy.get("#submit").click();

    cy.get(".MuiAlert-filledError")
      .should("be.visible")
      .and("contain.text", "Invalid credentials")
      .wait(2000) // Adjust this duration as per the error toast's display time
      .should("not.exist");
  });

  it("should redirect and greet the user on correct credentials", () => {
    cy.get("#username").type("demoUser");
    cy.get("#password").type("demoPassword");
    cy.get("#submit").click();

    cy.location("pathname").should("eq", "/welcome"); // Verify that the user is redirected to the welcome page
    cy.get(".greeting")
      .should("be.visible")
      .and("contain.text", "Welcome, demoUser!");
  });
});
