import { loginButton, messageLogin, userNameInput, userPasswordInput } from "./locators";

declare namespace Cypress {
  interface Chainable<Subject>{
    login(): Cypress.Chainable<any>;
  }
}

export function login(): void {
  cy.visit('/');
  cy.get(userNameInput).type('adria@teste.com');
  cy.get(userPasswordInput).type('123') 
  cy.get(loginButton).click();
  cy.get(messageLogin).should('contain', 'Bem vindo, Adria!');
}
