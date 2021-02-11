# Aplicação

A aplicação consiste de uma API feita em Node.js que realiza a auntenticação de usuários utilizando [JSON Web Token - JWT](https://jwt.io).

Os dados dos usuários ficam salvos em um Banco de Dados PostgreSQL e é utilizado ORM [Sequelize](https://sequelize.org) para lidar com o Banco e tratar das migrations.

## Rodando a aplicação

O Banco de Dados pode ser rodado utilizando o Docker com o comando:

```shell
docker run --name db-autenticacao-jwt-nodejs -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

Com o container rodando, deve-se clonar o repositório da aplicação e instalar as dependências do projeto:

```shell
git clone https://github.com/pedrovicentesantos/autenticacao-jwt-nodejs
cd autenticacao-jwt-nodejs

npm install

```

Antes de rodar a aplicação, é necessário rodar as migrations para criar as tabelas no BD:

```shell
npx sequelize-cli db:migrate
```

Depois desses passos, pode-se rodar a aplicação usando o comando `npm start`.

## Práticas adotadas

Visando melhorar o uso e segurança na utilização do JWT, são aplicadas as seguintes práticas:

- Remoção de informações sensíveis do payload do JWT;
- Alterar o algoritmo de validação para assimétrico, com uso de chaves pública e privada;
- Definição de tempo de expiração do token.

Dessa forma, o uso do JWT para autenticação passa a ser mais seguro e evita alguns problemas comuns.