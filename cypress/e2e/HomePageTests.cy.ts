describe('Teams Page Test', () => {
  beforeEach(() => {
   
    cy.visit('http://localhost:3000/teams');
  });

  it('should have 6 DivisionColumn components', () => {
    cy.get('[data-testid="division-column"]').should('have.length', 6);
  });

});
