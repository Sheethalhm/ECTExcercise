describe('Verify that the default Ellipsis Feature is disbaled', () => {
    it('Default ellipsis Feature is off', () => {
        cy.visit('../web/index.html');

        // Assert the value of ellipsis toggle is not checked
        cy.get('#ellipsis-toggle').should('not.be.checked')

    })
})