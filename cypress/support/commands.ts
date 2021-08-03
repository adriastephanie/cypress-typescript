import { loginButton, messageLogin, userNameInput, userPasswordInput } from "./locators";

declare namespace Cypress {
  interface Chainable<Subject>{
    login(): Cypress.Chainable<any>;
  }
}

Cypress.Commands.add('login', () => {
  // click sign in button in home page
  cy.visit('/');
  cy.get('[data-test=email]').type('adria@teste.com');
  cy.get('[data-test=passwd]').type('123') //
  cy.get('.btn').click();
  cy.get('.toast').should('contain', 'Bem vindo, Adria!');
})

export function login(): void {
  cy.visit('/');
  cy.get(userNameInput).type('adria@teste.com');
  cy.get(userPasswordInput).type('123') 
  cy.get(loginButton).click();
  cy.get(messageLogin).should('contain', 'Bem vindo, Adria!');
}
