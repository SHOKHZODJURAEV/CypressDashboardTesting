

import{ modelSURL, comparePageUrl} from "../../cypress/support/authentication.constant"
//import{ModelS} from '../fixtures/modelsPage.json'

var data = require("../fixtures/modelsPage.json")
var comparePage = require('../fixtures/comparePageText.json')

export class ModelS{

    urlVerification(){

      cy.wait(500)
      cy.contains('Model S').click()
      cy.url().should('eq', modelSURL)

    }

    privacyPage_Verification(){
    
      cy.scrollTo('bottomLeft')
      cy.get('[class="tds-link tcl-link"]').each((element,index)=> {
      
        const text = element.text()
        expect(text).to.contain(comparePage.comparePageText[index])

      })
    }
    modelScomparePage(){
      cy.wait(5000)
      cy.get('[href="/compare"]').click()
      cy.wait(1000)
      cy.url().should('eq', comparePageUrl)
      cy.scrollTo('bottomLeft')

      cy.get('[class="tds-text--caption tcl-compare-models__item-title"]').each(($el,index)=>{

        const text =$el.text()
        expect(text).to.contain(comparePage.comparePageText[index])
    
    
      })
    }
  //  privacy_Verification(){

     //   cy.scrollTo('bottomLeft')

    //    cy.get('[tds-link tcl-link]').each(($el,index) => {

     //       const text = $el.text()
   //         expect(text).to.contain(data.ModelS[index])


    //   })


    }

//}

export const onModelPage = new ModelS; 
