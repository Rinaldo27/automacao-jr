class Cart {

    validarProdutoDoCarrinho(name){
          cy.contains(name).should('be.visible')
    }
}

export default new Cart()