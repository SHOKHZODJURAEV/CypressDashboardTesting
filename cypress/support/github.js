
import { githubloginUrl } from "./authentication.constant"


export class github{

verifySignInUrl(){

cy.contains('Sign in').click()
cy.url().should('eq',githubloginUrl)

}

navigatePage(){

    cy.go('back')
}

}

export const githubPage = new github
