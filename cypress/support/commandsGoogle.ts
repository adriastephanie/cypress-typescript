function google() {
    return cy.visit('https://google.com');
}
  
Cypress.Commands.add('google', google);
  
  declare namespace Cypress {
    interface Chainable<Subject> {
      google: typeof google;
    }
}