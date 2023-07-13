describe('Example Tests', () => {
    it('Test1', () => {
        cy.visit('https://example.com'); // VERBOSE
        cy.wait(5000); // VERBOSE
        cy.get('body').click(); // VERBOSE
        expect(true).to.be.true; // ASSERT
        cy.log('INFO MESSAGE'); // INFO
    });

    it('Test2', () => {
        cy.visit('https://example.com'); // Standard
        expect(true).to.be.true; // ASSERT
        cy.log('INFO MESSAGE 2'); // INFO
        cy.wait(5000)// VERBOSE
        .then(() => {
            expect(false, 'Expected error').to.be.true; // ASSERT
        });

    });
});
