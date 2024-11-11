beforeEach(function (){
    cy.log("before each outside is runnig")
})
before(function (){
    cy.log("===Before ALL is runnig==============")
})

after(function (){
    cy.log("==========After ALL is runnig==========")
})

afterEach(function (){
    cy.log("after each outside is runnig")
})
describe("Test Suite name",()=> {
    afterEach(function (){
        cy.log("after each inside is runnig")
    })
    it("Test case-1", ()=> {
        cy.log('Test Case TestSuite 1, Test case 1')
      }),
      it("Test case-2", ()=> {
        cy.log('Test Case TestSuite 1, Test case 2')
      })
}) 


describe("TestSuite 2 name",()=> {
    beforeEach(function (){
        cy.log("before each is runnig")
    })
    it("Test case-1", ()=> {
      cy.log('Test Case TestSuite 2, Test case 1')
    }),
    it("Test case-2", ()=> {
        cy.log('Test Case TestSuite 2, Test case 2')
      })
  }) 
