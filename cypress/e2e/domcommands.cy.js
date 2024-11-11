describe ("Cypress Examples",()=> {
 
 
    it("Dom Commands", ()=>{
    cy.visit("https://naveenautomationlabs.com/opencart/")
    cy.get(".image").first().click()     //first() ilkini getirir.
    cy.go("back")
    cy.get(".image").last().click()   //last() ilkini getirir.
    cy.go(-1)
    cy.get(".image").eq(1).click()    //birden fazla elementi için istediğimiz elemente index numarasına göre de tıklayabiliriz.
    //text name içinde contains kullanarak elementi tıklayabilirsin.
    cy.go(-1)
    //cy.contains
    cy.contains('Apple Cinema 30"').click()  

    cy.go("back")
     //find(html adress)
    cy.get("div").find('>a>img[alt="MacBook"]').click()

    cy.go("back")
     //filter
    cy.get("div").find(">a>").filter('img[title="Canon EOS 5D"]').click()
    cy.contains("Product Code: Product 3").should('be.visible')
    cy.go(-1)

 } )

})