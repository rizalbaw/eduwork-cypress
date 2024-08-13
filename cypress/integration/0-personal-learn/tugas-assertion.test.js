/// <reference types="cypress"/>

describe("Tugas Assertion", () => {
    it('Clicking "type" shows the right heading', () => {
        cy.visit('https://example.cypress.io');
        cy.pause();
        cy.contains("type").click();
        cy.url().should("include","/commands/actions");
        cy.get('.action-email').type("baw.ganteng@email.com")
          .should("have.value","baw.ganteng@email.com")
    });
})