import "cypress-localstorage-commands"

declare namespace Cypress {
    interface Chainable<Subject>{
      login(): Cypress.Chainable<any>;
    }
  }