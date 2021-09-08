describe("Log In google", () => {
    before(() => {
        Cypress.config('chromeWebSecurity', false);
        
    })
    it("Login com google parametros no teste", () => {
        cy.visit('/signup'); 
        cy.wait(2000);
        cy.get('#google').click();
        cy.wait(2000);
        cy.get('#Email').type('adriastephaniecastro@gmail.com');
        cy.get('#next').click();
        cy.get('#password').type('Ascblh2801$');
        cy.wait(1000);
        cy.get('#trustDevice').click();
        cy.get('#submit').click();
    });
});
