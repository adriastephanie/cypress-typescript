describe("Log In", () => {
    it("Login com paremetros no teste", () => {
        cy.loginUi('adria@teste.com', '123', 'Bem vindo, Adria!')
    });
});


