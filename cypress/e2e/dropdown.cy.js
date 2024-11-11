describe("Dropdown",()=>{
    it.skip("Dropdown",()=>{
       cy.visit("https://www.amazon.com.tr")
       //select tag i olmasını bekliyoruz
       //3 yol var
       //index, value ve text
       cy.get('#searchDropdownBox').select(2).should('have.value', 'search-alias=warehouse-deals')

       cy.get('#searchDropdownBox').select('Kitaplar')

       cy.get('#searchDropdownBox option:selected').should('have.text', 'Kitaplar')
       
       //cy.get('[aria-describedby="searchDropdownDescription"]').select('Ev')
       //cy.get('[aria-describedby="searchDropdownDescription"]').select("value","Kitaplar")
    })

    it("Multi Select", ()=>{
        cy.visit("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
        //multi select için select(["..", "..",".." ]) ile yapabiliriz.
        cy.get('#multi-select').select(['California','Florida','Washington']).should('have.length', 1)
    })
       
    it.only("Select from search bar", ()=>{
        cy.visit("https://www.amazon.com/")
        cy.get("#twotabsearchtextbox").type("nutella")
        //search box içindekiler için find ile bir alt tag bulup ardından istediğimizi tıklayabiliriz.
        cy.get(".left-pane-results-container").find(">div").contains("nutella biscuits").click()
        cy.get("#twotabsearchtextbox").should("have.value","nutella biscuits")
    })
})