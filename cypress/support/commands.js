// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-localstorage-commands"

Cypress.Commands.add('login',(username, password) => {
    cy.session([username, password], () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        cy.contains('Sign in').click()
      })
    
    
    
})

Cypress.Commands.add('loginsauce',(username, password) => {
    cy.session([username, password], () => {
        cy.visit('https://saucedemo.com/');
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.contains("Login").click();
        cy.url().should("include", "inventory.html")
      })
})

Cypress.Commands.add('checkout',(firstname,lastname,postalcode) => {
    cy.get('#first-name').type(firstname)
        cy.get('#last-name').type(lastname)
        cy.get('#postal-code').type(postalcode)
})
Cypress.Commands.add('paybills', (amount, date, description) => {
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').type(date)
    cy.get('#sp_description').type(description, { force: true })
})