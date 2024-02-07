/// <reference types="cypress" />
describe('Just visit e2e test', () => {
  it('should visit pages', () => {
    cy.visit('/');

    cy.contains('Enter user details').should('exist');
  });

  it('should show results', () => {
    cy.visit('/');

    cy.get('#name').type('gra', {force: true});
    cy.contains('Find Users').click({force: true});

    cy.contains('Leanne Graham').should('exist');
  });

  it('should not show results if there is no match', () => {
    cy.visit('/');

    cy.get('#name').type('whatever', {force: true});
    cy.contains('Find Users').click({force: true});
    
    cy.contains('.user-list-item').should('not.exist');
  });

  it('should show results if url params are present', () => {
    cy.visit('/?name=Gra&email=&company=&zipcode=');
    
    cy.contains('Leanne Graham').should('exist');
  });

  it('should reset everything', () => {
    cy.visit('/');

    cy.get('#name').type('whatever', {force: true});
    
    cy.get('#name').should('have.value', 'whatever');
    cy.contains('Reset').click({force: true});
    
    cy.get('#name').should('have.value', '');
  });
})