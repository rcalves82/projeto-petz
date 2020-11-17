# projeto-petz
Esse projeto tem como objeto realizar um teste pratico para petz


## Pré Requisitos

- Ter o node e o cypress instalado na máquina.
- Link de instalação:
    - https://nodejs.org/en/download/
    - https://docs.cypress.io/guides/getting-started/installing-cypress.html#Direct-download

## Como executar

- Abra o terminal service
- Acesse o diretório do projeto de teste e execute os testes com os comandos abaixo:
   * npm install --save-dev cypress
   * npx cypress open
   * "npx cypress run -b (chrome, firefox, edge)" para execução no navegador desejado.
   * "npx cypress run" para execução o headless no Electron (navegador de testes do Cypress).
   * "npx cypress run --headless -b (chrome, firefox, edge)" para execução o headless no navegador desejado.

## Estrutura dos testes

- Os testes estão no caminho cypress/integration/ 
- No arquivo support/commands.js estão os comandos com os código dos testes, esses comandos são chamados nos testes.