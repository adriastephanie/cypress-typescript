describe("Log In", () => {
    it("Login", () => {
        // Login
        cy.loginUi('adria@teste.com', '123', 'Bem vindo, Adria!')
    });
});
