describe('Verify that the Word Count field only accepts valid input.', () => {
    it('Word Count Field Validation', () => {
        
        cy.visit('../web/index.html');

        cy.get('#ellipsis-toggle').click();
  
        cy.get('#word-count').type('5');
  
        cy.get('#input-text').type('Lorem ipsum dolor sit amet it');
  
        cy.get('#output-text').invoke('text').as('textFunction');
  
        // Locate the div element and extract its text
        cy.get('#output-text').invoke('text').then((text) => {
        
            const actualOutputText = text;
            expect(actualOutputText).to.equal('Lorem ipsum dolor sit amet...');
            
        });
    })
  })