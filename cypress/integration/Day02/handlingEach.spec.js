
var data = require('../../fixtures/staging.json')


describe('Handling each function', ()=> {


    before(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name="txtUsername"]').clear().type('Admin')
    cy.get('#txtPassword').clear().type('admin123')
    cy.get('[type="submit"]').click()

    })
    it('Testing each text ', ()=> {

        cy.get('.quickLinkText').each((element, index)=> {

        cy.log('element: ', element.text())
        const text = element.text()

        expect(text).to.contain(data.quickLaunch[index])

        })
    })

})

