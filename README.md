﻿<p align ="center">
  <img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/>
</p>

<p align="center">
  <a href="https://on.cypress.io">Documentação</a> |
  <a href="https://on.cypress.io/changelog">Changelog</a>

<p>

<h4> O que é?</h4>

O cypress.io é um framework utilizado na automação de testes, que vamos utilizar em nosso projeto.

</p>

<p>

🚀 <h4>Teste Automatizado de API – ViaCEP com Cypress</h4>

📝 <h4>Sobre o Projeto</h4>
Este projeto consiste em um conjunto de testes automatizados desenvolvido para validar a API pública do ViaCEP (https://viacep.com.br). Nosso principal objetivo é garantir a integridade e a conformidade das respostas recebidas de requisições GET, assegurando que os dados de endereçamento fornecidos pela API estejam sempre corretos e no formato esperado.

A automação é construída utilizando o Cypress, um framework de testes moderno e robusto, que facilita a escrita, execução e depuração de testes de API, proporcionando alta confiabilidade e feedback rápido sobre a qualidade da integração.

🛠️ <h4>Tecnologias Utilizadas</h4>
Para rodar este projeto, você precisará das seguintes ferramentas:

Node.js: versão 18 ou superior

Cypress: versão 12 ou superior

💻 <h4>Pré-requisitos</h4>
Para configurar e executar o projeto em sua máquina, certifique-se de ter os seguintes pré-requisitos instalados:

Node.js e npm
É essencial ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados.

Para verificar se já estão instalados, abra seu terminal e execute:
node -v && npm -v

Caso não estejam instalados, baixe o pacote correspondente ao seu sistema operacional através do link: Download Node.js. Após a instalação, execute novamente o comando acima para validar.

Visual Studio Code (Opcional, mas Recomendado)
Embora não seja obrigatório, o Visual Studio Code é um editor de código altamente recomendado para este projeto devido à sua integração com o terminal, suporte a extensões e recursos de depuração.

Você pode baixá-lo e instalá-lo de acordo com seu sistema operacional através do link: Download VS Code.

⚙️ <h4>Como Rodar os Testes</h4>
Siga os passos abaixo para clonar o repositório, instalar as dependências e executar os testes:

1. <h4>Clonar o Repositório</h4>
Você pode optar por clonar diretamente ou fazer um Fork do projeto:

Opção 1: Clonar Diretamente (Recomendado para uso)

git clone https://github.com/marcosqa/viacep-api-tests.git

Opção 2: Fazer um Fork (Recomendado para contribuição)

No GitHub, clique no botão "Fork" no canto superior direito deste repositório.

Com o fork criado em sua conta, clone o seu novo repositório para sua máquina local:

git clone https://github.com/marcosqa/viacep-api-tests.git 

2. <h4>Abrir o Projeto no VS Code (Se aplicável)</h4>
Abra o Visual Studio Code.

Vá em "File" (Arquivo) > "Open Folder" (Abrir Pasta) e selecione a pasta viacep-api-tests
que você acabou de clonar.

No terminal integrado do VS Code (você pode abri-lo via Terminal > New Terminal), execute ls para confirmar que os arquivos do projeto estão presentes.

3. <h4>Instalar as Dependências do Projeto</h4>
As dependências do projeto, como Cypress e outras bibliotecas de teste precisam ser instaladas.

No terminal do VS Code (ou qualquer terminal na pasta raiz do projeto), execute o comando pwd para validar que você está na pasta correta do projeto.

Execute no terminal o comando para instalar as dependências:
npm install

Aguarde até que todas as ferramentas sejam instaladas com sucesso.

Se ocorrer algum erro informando que o Cypress não está instalado, você pode tentar reinstalá-lo especificamente com:
npm install cypress --save-dev

4. <h4>Executar os Testes</h4>
Com as dependências instaladas, você pode executar os testes das seguintes formas:

Modo Interativo (UI do Cypress):
Este modo abre a interface gráfica do Cypress, permitindo que você visualize os testes e depure-os passo a passo.

No terminal digite o comando abaixo para inciar o projeto:
npx cypress open

Modo Headless (Linha de Comando):
Ideal para execuções rápidas e integrações em ambientes de CI/CD, pois os testes rodam em segundo plano no terminal.

npx cypress run --spec "cypress/e2e/viacep.cy.js" # Ajuste o caminho se seu arquivo de teste tiver outro nome

🤝 <h4>Contribuição</h4>
Contribuições são sempre bem-vindas! Se você tiver sugestões de melhorias, encontrar algum bug ou quiser adicionar novas funcionalidades, sinta-se à vontade para:

Abrir uma Issue para relatar problemas ou sugerir ideias.

Criar um Pull Request com suas alterações.

👨‍💻 <h4>Autor</h4>
Marcos Oliveira

Analista de Qualidade de Software (QA)

</p>

Boa automação!
