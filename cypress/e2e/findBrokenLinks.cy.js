describe("Finding Broken Links", () => {

    it('Broken Links', () => {
        let brokenlink = 0
        let activelink = 0
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33")

         cy.get("a").each(($linkpage, index) => {
            const link=$linkpage.attr("href")
            
            if (link) {
                cy.request({ url:link, failOnStatusCode: false }).then((response) => {

                    if (response.statusCode >= 400) {
                        cy.log(`${index + 1} is broken : ${link}`)
                        brokenlink++
                    } else {
                        cy.log(`${index + 1} is active`)
                        activelink++
                    }
                })
            }
        }).then((linkpage) => {
            const totalnumber = linkpage.lenght
            cy.log(`Broken link number is ${brokenlink}`)
            cy.log(`Active link number is ${brokenlink}`)
            cy.log(`Total link number is ${brokenlink}`)

        })
    })
})