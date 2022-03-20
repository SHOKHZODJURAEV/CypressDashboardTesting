

describe('File Upload', ()=> {

it('Png file upload', () => {

cy.visit('http://practice.cybertekschool.com/upload')
cy.get('#file-upload').attachFile('images.jpeg')
cy.get('[#file-submit]').click

cy.get('#uploaded-files').invoke('text','images.jpeg').should("be.visible")


})
})