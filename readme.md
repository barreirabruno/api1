# In-gaia-backend-challenge-**API1**

## API1

Essa api faz parte do desafio backend da empresa In Gaia

O objetivo dessa api é servir o preço do metro quadrado para o usuário.

## Apis contidas nesse repositório

[meter-price](./requirements/meter-price.md)

## Teste de unidade e testes de integração

A API1 utiliza as seguintes ferramentas para testes

  - Jest: framework de teste
  - Jest-mongodb: executa o  banco de dados Mongo em memória
  - supertest: utilizado nos testes de integração, nas rotas http

Executar testes: 

  - **npm run test:unit**
    - Executa os testes unitários

  - **npm run test:integration**
    - Executa os testes de integração

  - **npm run test:ci**
    - Executa os testes de unidade, testes de integração e cobertura de testes

## Instalação e execução da API1

Comandos para instalar e inicializar

 - **npm install**
   - Instala as dependências da api no seu computador
 
 - **npm run up**
   - Executa a api baseado em uma imagem do node 14.x (ver especificação da engine no package.json)
   - Cria um container para a aplicação com o nome **in-gaia-teste-api1-container**
  
Comandos para finalizar a execução

  - **npm run stop**
    - Para a execução do container **in-gaia-teste-api1-container**, portanto, desliga a aplicação API1

## Construção da aplicação

A construção da api1 foi feita por camadas, conforme o diagrama abaixo: 

[![alt text](./public/img/api1-arch-diagram.png "Veja o diagrama no draw.io")](https://drive.google.com/file/d/1zsaOih1rj_u8vJYxNeGPnNlu8J2ualaG/view?usp=sharing)

  