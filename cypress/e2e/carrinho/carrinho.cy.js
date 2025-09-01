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
})