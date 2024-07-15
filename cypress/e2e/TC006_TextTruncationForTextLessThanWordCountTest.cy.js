describe('Verify that text shorter than the Word Count is not truncated.', () => {
    it('Text Truncation functionality', () => {
        
        cy.visit('../web/index.html');
  
        cy.get('#ellipsis-toggle').click();
        
        cy.get('#word-count').type('10');
  
        cy.get('#input-text').type('Good morning !! Have a nice day.');
  
        cy.get('#output-text').invoke('text').as('textFunction');
  
        // Locate the div element and extract its text
        cy.get('#output-text').invoke('text').then((text) => {
        
            const actualOutputText = text;
            expect(actualOutputText).to.equal('Good morning !! Have a nice day....');
            
        });
    })
  })
    