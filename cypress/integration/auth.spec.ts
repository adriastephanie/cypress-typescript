describe("Log In google", () => {
    before(() => {
        Cypress.config('chromeWebSecurity', false);
        
    })
    it("Login com google parametros no teste", () => {
        cy.visit('https://trello.com/signup'); 
        cy.wait(2000);
        cy.get('#google').click();
        cy.wait(2000);
        cy.get('#Email').type('xxxxxxx@gmail.com');
        cy.get('#next').click();
        cy.get('#password').type('xxxxxx');
        cy.wait(1000);
        cy.get('#trustDevice').click();
        cy.get('#submit').click();
    });
});
