import ViaCepElements from "../elements/ViaCep/ViaCepElements"

class ViaCep {


    static acessarSiteViaCep() {

        cy.visit('https://viacep.com.br/')

        ViaCepElements.validarEscritaTextoErrado()
            .should('contain', '"Porto Algre/RS"')
            .should('not.have.text', '"Porto Alegre/RS"')
        ViaCepElements.validarTextoTitulo()
            .should('contain', 'Consulte CEPs de todo o Brasil')
        ViaCepElements.validarTextoFormatoDeRetorno()
            .should('contain', 'Formatos de Retorno')
        ViaCepElements.validarTextoPesquisaCep()
            .should('contain', 'são necessários três parâmetros obrigatórios')
        ViaCepElements.validarTextoCampoAtencao()
            .should('contain', 'Atenção: Uso massivo')
        cy.wait(5000)
        ViaCepElements.linkAcessoSiteIBGE().click()
        cy.wait(1000)
        cy.screenshot('ViaCepPage');

    }

}


export default ViaCep