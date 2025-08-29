import login from '../pages/login'
import inventory from '../pages/inventory'


describe('Login', () => {

    beforeEach(() => {
        login.visitarPagina()
    })

    it('Realizar login com sucesso', () => {
        login.preencherCredenciaisValidas();               
        inventory.validarAcessoAPagina();
    })
    
    it('Realizar login com credenciais invalidas', () => {
        login.preencherCredenciaisInvalidas()
        login.validarErroCredenciaisInvalidas()

    })
})
