

var data = require('../../fixtures/states.json')

describe("Dropdown Testing", () => {

    it('State selection', ()=> {

cy.visit('http://practice.cybertekschool.com/dropdown')

cy.get('[id="state"] > option').each((element, index) => {
    const text = element.text()
    expect(text).to.contain(data.states[index])


    cy.get('[id="state"]').select(element.text()).should('be.visible')
})
})
})