class LoginElements {



    static linkPreenchimentoCepJavascrip() {
        return cy.get(':nth-child(15) > :nth-child(4) > a')

    }

    static validarTextoNaTelaDeCadastro() {
        return cy.get('#conteudo > :nth-child(2)')

    }

    static validarEscritaTextoErrado() {
        return cy.get(':nth-child(20)')

    }

    static acessarSiteIBGE() {
        return cy.get('[href="http://www.cidades.ibge.gov.br/"]')

    }

    static validarTextoTitulo() {
        return cy.get('.titulo2')

    }

    static validarTextoFormatoDeRetorno() {
        return cy.get('#conteudo > :nth-child(8)')

    }
    static validarTextoPesquisaCep() {
        return cy.get(':nth-child(17)')

    }

    static validarTextoCampoAtencao() {
        return cy.get('.atencao')

    }

    static linkAcessoSiteIBGE() {
        return cy.get('[href="http://www.cidades.ibge.gov.br/"]')
        
    }

}



export default LoginElements