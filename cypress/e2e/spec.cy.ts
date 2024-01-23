/// <reference types="cypress" />
describe('Just visit e2e test', () => {
  it('should visit pages', () => {
    cy.visit('/');

    cy.contains('Enter your shipment details').should('exist');
  });

  it('should show results', () => {
    cy.visit('/');

    cy.get('.weight').type('341.4');
    cy.contains('Find Offers').click();

    cy.contains('EUR 0.12').should('exist');
  });

  it('should not results', () => {
    cy.visit('/');

    cy.get('.weight').type('1');
    cy.contains('Find Offers').click();
    
    cy.contains('EUR 0.12').should('not.exist');
  });

  it('should show results if url params are present', () => {
    cy.visit('/?weight=&endDate=null&startDate=null&originAirportCode=FRA&destinationAirportCode=');
    
    cy.contains('EUR 0.12').should('exist');
  });
  
})