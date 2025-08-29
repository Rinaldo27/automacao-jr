import { el } from './elements'

class inventory {
    validarAcessoAPagina(){
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    cy.screenshot('login')
}
adicionarProduto(itemName) {
    cy.get(el.addToCart(itemName)).click()


    }
}

export default new inventory()