/// <reference types="Cypress"/>

describe('Teste autenticação', () => {
    it('Deve ser autenticado', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

        cy.get('.title').should("contain", "Products")

    });

    it('Validando Autenfificação Incorreta', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user1")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
        cy.get('[data-test="error"]').should("contain", "Epic sadface: Username and password do not match any user in this service")

        

    });

    it('Validando Senha Incorreta', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce1")
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should("contain", "Epic sadface: Username and password do not match any user in this service")

        

    });
});