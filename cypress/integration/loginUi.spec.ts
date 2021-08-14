describe("Log In", () => {
    it("Login com parametros no teste", () => {
        cy.loginUi('adria@teste.com', '123', 'Bem vindo, Adria!')
    });
});


