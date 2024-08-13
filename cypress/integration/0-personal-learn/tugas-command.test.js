/// <reference types="cypress"/>
Cypress.config("experimentalSessionSupport",true)

beforeEach( () =>{
    cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

        cy.login(username, password)
    })
})
describe("Tugas Commands", () => {
    it('Visit Website', () => {
        cy.visit('http://zero.webappsecurity.com/bank/account-summary.html') 
    });

    it('fill pay bills', () => {
        cy.visit('http://zero.webappsecurity.com/bank/account-summary.html')
        cy.get('a').contains('Pay Bills').click()
        cy.url().should('include','/bank/pay-bills.html')
        cy.get('select#sp_payee').select('Sprint')
        cy.get('select#sp_account').select('3');
        cy.fixture("paybill").then(paybill => {
            const amount = paybill.amount
            const date = paybill.date
            const description = paybill.description

            
            cy.paybills(amount,date,description)
            cy.get('#pay_saved_payees').click({force:true})
            
        })
        
        cy.url().should('include','/bank/pay-bills-saved-payee.html')
        cy.get('#alert_content').should('have.text','The payment was successfully submitted.')
    });

    

    
})