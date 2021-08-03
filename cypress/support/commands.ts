declare namespace Cypress {
    interface Chainable<Subject> {
      loginUi (user: string, pass: string, message: string): Chainable<Element>;
    }
}

Cypress.Commands.add('loginUi', (user: string, pass: string, message: string) => {
    cy.visit('/');
    cy.get('[data-test=email]').type(user);
    cy.get('[data-test=passwd]').type(pass); 
    cy.get('.btn').click();
    cy.get('.toast').should('contain', message);
  });