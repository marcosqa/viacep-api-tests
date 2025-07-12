// cypress/support/commands.js

Cypress.Commands.add('apiGetCep', (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    return cy.request({ // Adicione 'return' aqui
        method: 'GET',
        url: url,
        failOnStatusCode: false
    }).as('response').then((response) => { // Cria um alias para a resposta completa
        if (response.status >= 400) {
            Cypress.log({
                name: 'API Error',
                message: `Requisição falhou para CEP: ${cep} com status: ${response.status} e corpo: ${JSON.stringify(response.body)}`,
                consoleProps: () => {
                    return {
                        CEP: cep,
                        Status: response.status,
                        Body: response.body
                    };
                }
            });
        }
        // Se a resposta for 200 e tiver um 'erro: true' no corpo
        if (response.status === 200 && response.body && response.body.erro === true) {
            Cypress.log({
                name: 'CEP Not Found (Body Error)',
                message: `CEP ${cep} não encontrado ou inválido de acordo com o body da resposta.`,
                consoleProps: () => {
                    return {
                        CEP: cep,
                        Body: response.body
                    };
                }
            });
        }
        return response.body; // Retorna apenas o corpo para as asserções de conteúdo
    });

});