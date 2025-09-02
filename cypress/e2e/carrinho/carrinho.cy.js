import header from "../../pages/header"
import inventory from "../../pages/inventory"
import login from "../../pages/login"
import cart from "../../pages/cart"

describe('Carrinho', () => {

    beforeEach(() => {
        login.visitarPagina()
        login.preencherCredenciaisValidas()
    })

    it('Adicionarproduto ao carrinho com sucesso', () => {
        //
        const quantidadeDeItensAdicionados = 1
        inventory.adicionarProduto('Sauce Labs Backpack');
        header.validarQueCarrinhoPossuiItens(quantidadeDeItensAdicionados);
        header.navegarParaCarrinho();
        cart.validarProdutoDoCarrinho('Sauce Labs Backpack')
    
    })
    it('Remover produto do carrinho', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.screenshot('produto-removido')

    })

    

})