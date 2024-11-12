describe("File Upload", () => {

    it.skip("File Upload, METHOD-1", () => {
       cy.visit("https://www.ilovepdf.com/pdf_to_word")
       cy.get('#pickfiles',{includeShadowDom:true}).selectFile('cypress/KiraVergi2.pdf')
    })

    it.only("File Upload, Drag and Drop", () => {
        cy.visit("https://www.ilovepdf.com/pdf_to_word")
        
        cy.get('#pickfiles',{includeShadowDom:true})
        .selectFile("cypress/KiraVergi2.pdf", {action:"drag-drop"})
     })
})