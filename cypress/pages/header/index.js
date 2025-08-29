import { elements as el } from "./elements"

class Header {
    validarQueCarrinhoPossuiItens(quantidade){
        cy.get(el.cartContainer)
        .should('be.visible')
        .and('have.text', quantidade.toString())
    }
    navegarParaCarrinho(){
        cy.get(el.cartContainer).click()
    }
}

export default new Header()