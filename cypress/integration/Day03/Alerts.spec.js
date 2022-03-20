

describe("JavaScript Alerts Testing", ()=> {

    beforeEach('Login The Page', ()=> {

        cy.visit('http://practice.cybertekschool.com/javascript_alerts')

    })

it('Handling JS Aler -Validate Aler text and Click OK', ()=> {


cy.get('[onclick="jsAlert()"]').click()

cy.on('window:alert',(str)=> {

    expect(str).to.equal('I am a JS Alert')
})

cy.on('window:confirm',() => true)
cy.get('#result').should('have.text','You successfully clicked an alert')
})

it('Handling JS Confirm -Click OK', ()=> {

    cy.get('[onclick="jsConfirm()"]').click()

    cy.on('window:confirm',(str)=> {
        expect(str).to.equal("I am a JS Confirm")
    })

    cy.on('window:confirm',()=>true)
    cy.get('#result').should('have.text', 'You clicked: Ok')
    })

 it('Handling JS Confirm -Click Cancel', ()=> {
        
        cy.get('[onclick="jsConfirm()"]').click()
    
        cy.on('window:confirm',(str)=> {
            expect(str).to.equal("I am a JS Confirm")
        })
    
        cy.on('window:confirm',()=>false)
        cy.get('#result').should('have.text', 'You clicked: Cancel')
        })



    it('Handling JS Prompt - Input text in prompt, Click Ok and Validate the input Text', ()=>{
        
            cy.window().then(($win)=> {
                cy.stub($win,'prompt').returns('this is a test text')
                cy.get('[onclick="jsPrompt()"]').click()
            })
            cy.get('#result').should('have.text','You entered: this is a test text')
    })

})