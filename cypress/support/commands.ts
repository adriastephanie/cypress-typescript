import { locators } from "./locatorsLoginUi";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            loginUi (user: string, pass: string, message: string):  Cypress.Chainable<void>;
        }
    }
}

Cypress.Commands.add('loginUi', (user: string, pass: string, message: string) => {
    cy.visit('/');
    cy.get(locators.userName).type(user);
    cy.get(locators.userPassword).type(pass); 
    cy.get(locators.btnLogin).click();
    cy.get(locators.message).should('contain', message);
});