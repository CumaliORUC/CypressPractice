describe ("View Port test", ()=>{
    it("Test case-1 default screen",()=>{
        cy.visit("https://www.amazon.com.tr")
    })

    it("Test case-2 View Port dimension",()=>{
        cy.viewport(700, 800)
        cy.visit("https://www.amazon.com.tr")
    })

    it("Test case-3 viewport presets",()=>{
        cy.viewport("iphone-8")
        cy.visit("https://www.amazon.com.tr")
    })

    it("Test case-4 landscape",()=>{
        cy.viewport("iphone-8", "landscape")
        cy.visit("https://www.amazon.com.tr")
    })
})