describe('BookMonkey', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open the home page by default', () => {
    cy.get('h1')
      .should('contain', 'Home');
    cy.url()
      .should('contain', '/home');
  });
});
