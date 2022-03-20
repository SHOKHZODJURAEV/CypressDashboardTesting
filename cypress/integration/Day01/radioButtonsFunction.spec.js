/// <reference types="cypress" />


import{URL} from '../../support/authentication'
import{CNA} from '../../support/CNAtest'
describe('Radio button Tests', ()=> {

    beforeEach('opening the URL', () => {
    cy.visit(URL)  
    })

it('Verify All the radio buttons are checked', () => {

CNA.functionName1()
CNA.functionName2()
})

it('Verify All the radio buttons are checked', () => {

    CNA.functionName1()
    CNA.functionName2()
    })

 it('Verify All the radio buttons are checked', () => {

        CNA.functionName1()
        CNA.functionName2()
        })
})