

var data = require ('../../fixtures')

if(url.include('staging')){
    cy.fixture('staging.json').then((url)=>{
     data.username()
     data.url()
     data.password()

    })
}else if(url.include('uat')){
    cy.fixture('uat.json').then((url)=>{

    })
}else if(url.include('prod')){
    cy.fixture('prod.json').then((url) => {

    })
}