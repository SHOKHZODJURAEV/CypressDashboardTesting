

describe('Drag and drop feature', ()=> {

    it('Drag and drop using data trasfer', ()=> {


        cy.visit('http://practice.cybertekschool.com/drag_and_drop')

        drag_and_drop()

    })
})

const dataTransfer = new DataTransfer;  // to move one element to another element we use DataTrasfer

function drag_and_drop(){

cy.get('#column-a').should('be.visible').trigger('dragstart')
cy.wait(500)

cy.get('#column-b').should('be.visible').trigger('drop', {DataTransfer})
cy.wait(500)

cy.get('#column-b').should('be.visible').trigger('dragend')
}