

import{github} from '../../support/authentication.constant'
import { githubPage } from '../../support/github'

describe('Github test cases', ()=> {
beforeEach('Navigate to page github.com', ()=> {

    cy.visit(github)


})

it('Login to the github', ()=> {

    githubPage.verifySignInUrl

})

it('Navigate to page back',()=> {

githubPage.navigatePage()

})
})