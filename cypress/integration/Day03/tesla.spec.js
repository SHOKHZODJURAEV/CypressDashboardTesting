
import {teslaURL} from '../../support/authentication.constant'
import { onModelPage } from '../../support/models'


describe('Tesla.com automation testing',()=> {

    beforeEach("Navigate to page to tesla.com",()=> {
    cy.visit(teslaURL)

    })
    it("ModelS page Testing",()=> {
    
       onModelPage.urlVerification()
       onModelPage.privacyPage_Verification()
       onModelPage.modelScomparePage()


    })
})