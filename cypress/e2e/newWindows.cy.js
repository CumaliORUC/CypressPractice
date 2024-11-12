describe("Open new tabs", () => {
    beforeEach(function () {
        cy.visit("https://selectorshub.com/xpath-practice-page/")
    })
    
    it("Open new tabs, method-1", () => {
        //removing target attribute
        cy.contains("Garry.White").invoke("removeAttr", "target").click()
    })

    it.only("Opens new tab method-2: _self", ()=>{
        //changing target "_blank" attribute with "_self"
        cy.get(".learningHub", {includeShadowDom:true}).invoke("attr", "target","_self").click()
    }) 
})