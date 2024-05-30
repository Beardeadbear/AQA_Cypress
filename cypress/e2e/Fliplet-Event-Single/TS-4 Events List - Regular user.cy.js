describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Makeup').click()
        cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Skincare').click()
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log(headerText)
        })
    })

    it("vars", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Makeup').click()
        cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Skincare').click()
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log(headerText)
        })
    })
})
