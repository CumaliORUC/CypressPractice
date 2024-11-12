
describe("Data Drive Test", ()=>{
const testData=require("../fixtures/example.json")
    it("Data Driven Test", ()=>{
     cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get("#input-firstname").type(testData.name.first_name)
        cy.get("#input-lastname").type(testData.name.last_name)
        cy.get("#input-email").type(Math.random().toString(15).substring(2,10)+"@email.com")
        cy.get("#input-telephone").type(testData.phoneNumbner)
        cy.get("#input-password").type(testData.password)
        cy.get("#input-confirm").type(testData.password)
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[type="checkbox"]').check()
        cy.get(".btn.btn-primary").click()
        cy.get('h1').should("have.text", "Your Account Has Been Created!")
    })
})