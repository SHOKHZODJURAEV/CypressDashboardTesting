/// <reference types="cypress" />

// .spec.js -> this help to us run our test in cypress 

describe("First Test Structure", ()=>{  // describe => class
    
    it('First Test', ()=> {  // it => each test 

    })
    it("Second Test", ()=>{

    })

    it("Third Test", ()=> {

    })
} )


describe('Dev-864',()=>{

    before('Before method', ()=> {  // class level
        
    })
    after('After method', ()=> {  // class level

    })
    beforeEach("Before method", ()=> {  // each test level

    })

    it("#AC1 Testing", ()=> {

    })
    it("#AC2 Testing", ()=> {
        
    })
    it("#AC3 Testing", ()=> {
        
    })

    afterEach("After Each method", ()=> {  // each test level 

    })

})