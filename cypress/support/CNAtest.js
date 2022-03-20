export class functions{


functionName1(){
    cy.get('[type="radio"]').then(radioButtons => {

        for(var i=0; i<=radioButtons.length-1; i++){
            cy.wrap(radioButtons).eq(i)
            .check({force:true}).should("be.visible")
            cy.wait(500)
            console.log(i)
        }
    })

}

functionName2(){
    cy.get('[type="radio"]').then(radioButtons => {

        for(var i=0; i<=radioButtons.length-1; i++){
            cy.wrap(radioButtons).eq(i)
            .check({force:true}).should("be.visible")
            cy.wait(500)
            console.log(i)
        }
    })

}

}

export const CNA = new functions; 