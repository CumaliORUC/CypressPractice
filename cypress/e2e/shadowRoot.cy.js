describe('Shadow', () => {


    it.skip('Shadow-1', () => {
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        // cy.get("#pizza").type("Pizza") it couldn't find
        cy.get("#userName")
        .shadow()
        .find("#app2")
        .shadow()
        .find("#pizza")
        .type("Testing Shadow")
    });

    it.skip('Shadow-2, global configuration in cypress.config.js', () => {
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        // cy.get("#pizza").type("Pizza") it couldn't find
        cy.get("#pizza").type("Testing Shadow")
    });

    it('Shadow-3, writing in the locators', () => {
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        // sadece ilgili locator için burada bir shadow var diyoruz.
        cy.get("#pizza", {includeShadowDom:true}).type("Testing Shadow")
    });
})