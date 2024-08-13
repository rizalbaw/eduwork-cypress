/// <reference types="cypress"/>

describe("Working with inputs", () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.url().should("include","login.html");
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear();
        cy.get('#user_login').type("username");
    });

    it('Should fill password', () => {
        cy.get('#user_password').clear();
        cy.get('#user_password').type("password");
    });

    it('Should click Keep me signed in', () => {
        cy.get('#user_remember_me').click();
    });

    it('Should click Login', () => {
        cy.get('[name="submit"]').click();
    });

    it('Should click logout', () => {
        cy.get('a').contains("username").click();
        cy.get('#logout_link').click();
    });

    it('Relogin to website', () => {
        cy.get("#signin_button").click()
    });

    it('Should login use fixture and commands', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
        })
    });
})