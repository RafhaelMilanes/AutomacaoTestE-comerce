/// <reference types="Cypress"/>
describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
    it('Fluxo da compra de produtos', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

        cy.get('.title').should("contain", "Products")

        // Ordenação dos produtos do menor para o maior
        cy.get('[data-test="product_sort_container"]').select("Price (low to high)")
        
        // Validação da ordenação de produtos
        cy.get(':nth-child(1) > .inventory_item_description').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_description').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_description').should('contain', 'Sauce Labs Bolt T-Shirt')
        
        // Adicionando produtos ao carrinho
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        // Adicionando produtos ao carrinho
        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        // Adicionando produtos ao carrinho
        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        // Checando a quantidade de itens no carrinho
        cy.get('.shopping_cart_badge').should('have.text','3')

        // Checando instens no carrinho
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
        cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        cy.get('.cart_list > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Checkout
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Primeiro nome')
        cy.get('[data-test="lastName"]').type('Ultimo nome')
        cy.get('[data-test="postalCode"]').type('72602208')
        cy.get('[data-test="continue"]').click()

        // Verificando produtos no checkout
        cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
        cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        cy.get('.cart_list > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Checando o valor Total
        cy.get('.summary_total_label').should('have.text', 'Total: $36.69')
        
        cy.get('[data-test="finish"]').click()

        cy.get('.complete-header').should('have.text', 'Thank you for your order!' )

    }); 


});