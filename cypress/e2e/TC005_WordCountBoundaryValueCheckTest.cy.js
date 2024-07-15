describe('Verify the Boundary value conditions for Word Count field', () => {
    it('Word Count Field Validation with Value 0', () => {
        
        cy.visit('../web/index.html');

        cy.get('#ellipsis-toggle').click();
  
        cy.get('#word-count').type('0');
  
        cy.get('#input-text').type('Lorem ipsum dolor sit amet it');
  
        cy.get('#output-text').invoke('text').as('textFunction');
  
        // Locate the div element and extract its text
        cy.get('#output-text').invoke('text').then((text) => {
        
            const actualOutputText = text;
            expect(actualOutputText).to.equal('');
            
        });
    })

    it('Word Count Field Validation with value 1000', () => {
        
        cy.visit('../web/index.html');

        cy.get('#ellipsis-toggle').click();
  
        cy.get('#word-count').type('1000');
  
        cy.get('#input-text').type('Lorem ipsum dolor sit amet it');
  
        cy.get('#output-text').invoke('text').as('textFunction');
  
        // Locate the div element and extract its text
        cy.get('#output-text').invoke('text').then((text) => {
        
            const actualOutputText = text;
            expect(actualOutputText).to.equal('Lorem ipsum dolor sit amet it...');
            
        });
    })
  })