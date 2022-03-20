
/// <reference types="cypress" />

import{URL} from '../../support/authentication'
describe("Radio button Tests", ()=>{

it('Verify All the radio buttons are checked', ()=>{

    cy.visit(URL)
    cy.get('[type="radio"]').then(radioButtons => { // radioButtons  this name , I can change for anything
        cy.wrap(radioButtons).first()  // in this point we have 8 elements, that is why we need to wrap them 
        .check()
        .should('be.checked')
        

        for(var i=0; i<=radioButtons.length-1; i++){
            cy.wrap(radioButtons).eq(i)
            .check({force:true}).should("be.visible")
            cy.wait(500)
            console.log(i)
        }
    })
})

})