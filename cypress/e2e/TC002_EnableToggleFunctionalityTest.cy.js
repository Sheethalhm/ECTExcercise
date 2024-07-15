describe('Verify Toggle Functionality- Enable Ellipsis Feature', () => {
  it('Enabling ellipsis Feature', () => {
      
      //Open web page
      cy.visit('../web/index.html');

      //Set Ellipsis Toggle button
      cy.get('#ellipsis-toggle').click();
      
      //Enter the word count that needs to be truncated
      cy.get('#word-count').type('1');

      //Input Text
      cy.get('#input-text').type('Lorem ipsum dolor sit amet ');

      //Output truncated Test
      cy.get('#output-text').invoke('text').as('textFunction');

      // Locate the div element and extract its text
      cy.get('#output-text').invoke('text').then((text) => {
      
          const actualOutputText = text;
          //Assert the outcome with expected result
          expect(actualOutputText).to.equal('Lorem...');
          
      });
  })
})
  