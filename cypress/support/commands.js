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
import {url,username,password,wrongpassword,wrongusername,loginpageerormessage} from '../support/authentication.constant'

// require('cypress-downloadfile/lib/downloadFileCommand')

// Cypress.Commands.add('login',()=>{
//     cy.visit('https://www.google.com')
// })

Cypress.Commands.add('login_Positive_Scenarios', () => { 

cy.visit(url)
cy.get('#email').clear().type(username)
cy.get('#pass').clear().type(wrongpassword)
cy.get('[name="login"]').click()

 })


 Cypress.Commands.add('Negative_Password_Testing', () => {
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(password)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')

 })

 Cypress.Commands.add('Negative_Username_Password_Testing', () => {
    cy.visit(url)
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(wrongpassword)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')

 })

