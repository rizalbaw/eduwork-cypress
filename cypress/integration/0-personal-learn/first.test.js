/// <reference types="cypress" />

describe("My First Test", () =>{
    it("Visit Kitchen Sink",() =>{
        cy.visit("http://example.cypress.io")

        cy.contains("type")
        cy.get("h1").contains("Kitchen Sink")
        cy.contains("get").click()
        cy.url().should("include","commands/querying")
    })
})