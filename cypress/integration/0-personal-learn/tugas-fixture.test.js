/// <reference types="cypress"/>

Cypress.config("experimentalSessionSupport",true)


describe("Tugas Fixture", { testIsolation: false }, () => {
    

    before(() => {
        cy.clearLocalStorageSnapshot();
    });
    beforeEach( () =>{
        cy.fixture("usertugas").then(user => {
            const username = user.username
            const password = user.password
            cy.restoreLocalStorage();
            cy.loginsauce(username, password)
            
        })
    })
    afterEach(() => {
        cy.saveLocalStorage();
    });
    
    it('check url', () => {
        cy.visit('https://saucedemo.com/inventory.html',{failOnStatusCode: false});
        cy.url().should('include','inventory.html')
    });

    it('click products, checkout until finish', () => {
        cy.visit('https://saucedemo.com/inventory.html',{failOnStatusCode: false});
        cy.contains('Sauce Labs Backpack').click()
        cy.get('#add-to-cart').click({force:true})
        cy.get('span.shopping_cart_badge').should('have.text','1')
        cy.get('#back-to-products').click()
        cy.contains('Sauce Labs Fleece Jacket').click()
        cy.get('#add-to-cart').click({force:true})
        cy.get('span.shopping_cart_badge').should('have.text','2')
        cy.get('#back-to-products').click()
        cy.contains('Sauce Labs Bike Light').click()
        cy.get('#add-to-cart').click({force:true})
        cy.get('span.shopping_cart_badge').should('have.text','3')
        cy.get('a.shopping_cart_link').click()
        cy.get('button#react-burger-menu-btn').click()
        cy.get('a#logout_sidebar_link').click();
        cy.loginsauce('standard_user', 'secret_sauce')
        cy.visit('https://saucedemo.com/inventory.html',{failOnStatusCode: false});
        //cy.contains('Checkout').click()
        //cy.checkout('Rizal','Baw','61252')
        //cy.contains('Continue').click()
        //cy.contains('Finish').click()
    });


})