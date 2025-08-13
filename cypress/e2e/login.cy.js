describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/'); 

    })

    it('Realizar login com sucesso', () => {
        
        //act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click('')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    });
    
    it('Realizar login com credenciais invalidas', () => {
        
        
        //act
        cy.get('[data-test="username"]').type('user.invalid')
        cy.get('[data-test=password]').type('senha')
        cy.get('[data-test=login-button]').click('')
        
        //Assert
        cy.get('[data-test="error"]')
         .should(
          'contain.text',
          'Username and password do not match any user in this service'
        )
    })
});
