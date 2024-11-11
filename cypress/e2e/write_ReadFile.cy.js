describe("write and Read File", () => {

    it("write", () => {
        cy.writeFile("firstWrite.txt", "Hello World \n");
        cy.writeFile('firstWrite.txt', "This is for second line", { flag: "a+" });
        cy.writeFile("firstJsonFile.json", {
            "name": "Cumali",
            "last name": "Oruc"
        })

        cy.writeFile("cypress/fixtures/example.json", {
            "name":"Gulce",
            "last name":"Oruc",
        }, {flag:" a+"})

        cy.readFile("firstWrite.txt").then((data)=>{
            cy.log("Dokumanın içindeki veriler:", data)
        })

        cy.readFile("firstJsonFile.json").then((data)=>{
            cy.log("Data json name:", data.name)
        })
    })

})