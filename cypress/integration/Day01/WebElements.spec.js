

describe('Web elements', ()=> {


// Tage name 
cy.get('input')

// by ID
cy.get('#radio1')

// by class name 
cy.get('.icheck-helper')

//by attribute name 
cy.get('[type]')
cy.get('[placeholder]')

//by attribute name and value 
cy.get('[name="abuse"]')
cy.get('[placeholder=Email]')

// by class value 
cy.get('[class = "iCheck-helper"]')

// by tag name and attribute with value 
cy.get('input #radio1').eq(0)  // if there are more elements we can use eq(index)


//by two different  attributes 
cy.get('[name="abuse"][class="iCheck-helper"][style = "position absolute; opacity: 0;"]')


cy.contains("Blue").click()




})