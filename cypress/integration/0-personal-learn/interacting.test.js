/// <reference types="cypress"/>

describe("Browser Actions", () => {
    it('Should load books website', () => {
        cy.visit("https://books.toscrape.com/index.html", {timeout: 30000})
        cy.url().should("include", "index.html")

    });

    it('Should click travel category', () => {
        cy.get("a").contains("Travel").click()
        cy.get("h1").should("have.text","Travel")
    });
})