// cypress/e2e/viaCep.cy.js

/// <reference types="cypress" />

describe('Validação da API ViaCEP', () => {


  it('Cenario 1 - Deve retornar os dados corretos para um CEP válido (01001-000)', () => {
    const cepValido = '01001-000';
    cy.apiGetCep(cepValido).then((body) => {

      // Asserções para o CEP válido
      expect(body).to.not.have.property('erro');
      expect(body.cep).to.equal('01001-000');
      expect(body.logradouro).to.equal('Praça da Sé');
      expect(body.bairro).to.equal('Sé');
      expect(body.localidade).to.equal('São Paulo');
      expect(body.uf).to.equal('SP');

    });

  });


  it('cenario 2 - Deve indicar erro para um CEP inexistente (99999-999)', () => {
    const cepInexistente = '99999-999';
    cy.apiGetCep(cepInexistente).then((body) => {

      expect(body).to.have.property('erro', true);

    });

  });


  it('Cenario 3 - Deve retornar um erro para um CEP com formato inválido (menos dígitos)', () => {
    const cepCurto = '12345'; // Formato inválido para a ViaCEP
    cy.apiGetCep(cepCurto).then((body) => {

      cy.get('@response').its('status').should('eq', 400);

    });

  });


  it('Cenario 4 - Deve retornar um erro para um CEP com formato inválido (mais dígitos)', () => {
    const cepLongo = '1234567890'; // Formato inválido
    cy.apiGetCep(cepLongo).then((body) => {
      cy.get('@response').its('status').should('eq', 400);

    });

  });


  it('Cenario 5 - Deve lidar com falhas de conexão ou timeouts (conceitual)', () => {

    cy.request({
      method: 'GET',
      url: 'https://viacep.com.br/ws/url_inexistente/json/',
      failOnStatusCode: false,
      timeout: 10000
    }).then((response) => {

      expect(response.status).to.be.oneOf([400, 404]);
    });

  });

});
