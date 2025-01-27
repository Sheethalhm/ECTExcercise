describe('Verify Toggle Functionality- Disable Ellipsis Feature', () => {
    it('Disabling ellipsis Feature', () => {
        
        cy.visit('../web/index.html');
  
        cy.get('#word-count').type('1');
  
        cy.get('#input-text').type('Lorem ipsum dolor sit amet ');
  
        cy.get('#output-text').invoke('text').as('textFunction');
  
        // Locate the div element and extract its text
        cy.get('#output-text').invoke('text').then((text) => {
        
            const actualOutputText = text;
            expect(actualOutputText).to.equal('Lorem ipsum dolor sit amet ');
            
        });
    })
  })