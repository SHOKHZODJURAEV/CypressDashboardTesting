
// visit 

<reference types  = "cypress"/>
// visit 
cy.visit('open url')  // visit url
cy.visit('url',{timeout : 1000}) // wait time manually hard code 

// should is promise

let path = 'https//www.google.com'
cy.url().should('include', path) // assertion 

// finding the element

cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exit')

https://docs.cypress.io/api/table-of-contents
cy.get('h1').should('have.text',"Table of Contents")
cy.get('input').should('have.value',"James")

//traversing

// negative ones 
cy.get(loc).should('not.be.visiable')
cy.get(loc).should('not.be.exist')

cy.get('h1').should('have.length', 3)
cy.get('h1').should('have.text','something')
cy.get('h1').should('have.value', 'cypress')

// parent to child or child to parent
//https://docs:cypress.io/api/table-of-contents 
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(1).click()


cy.get(loc).next().click()
// if you don't use the multiple true it will throw an exception
cy.get('tbody tr').nextAll.click({multiple:true}) // 10 elements 
cy.go('back')

cy.get(loc).prev()
cy.get(loc).prevAll.click({multple:true});

// hover handling 
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click

cy.get('#username').clear().type('username')






