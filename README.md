## Fullstack - Developer 
PoC (Prova de Conceito) de um e-commerce, basicamente o sistema consiste na criação de Pedidos (cliente + produtos + frete).

## Requisitos

JDK = jdk 11

AngularCli >= @angular/cli: 8.3.4

Node >= node: 10.15.3

NPM >= 6.4.1

MVN >= apache-maven-3.6.0

**1. Clone o repositório**

```bash
git clone https://github.com/ErickHMT/Fullstack-Developer.git
```

**2. Configure o PostgreSQL**

Primeiramente, crie um banco com o nome `maximatech`. Se necessário acesse `src/main/resources/application.properties` e altere o datasource.username e datasource.password de acordo com sua instalação do PostgreSQL.

Caso não possua o PostgreSQL instalado localmente, você pode optar por executá-lo utilizando o docker-compose. Dentro do diretório pedidos-backend/pedidos execute:

```bash
docker-compose -f stack.yml up
```

**3. Run the app**

1. Execute o seguinte comando nos diretórios 'discovery', 'gateway', 'frete' e 'pedidos' localizados na pasta pedidos-backend.

```bash
mvn spring-boot:run
```
2. Execute o comando `npm install` na pasta pedidos-frontend para baixar as dependências.
3. Para rodar a aplicação Angular utilizar o comando `ng s` ou `npm start` na pasta pedidos-frontend.

**GET Request -> Dados do Cliente e Produtos**

	URL : https://api.myjson.com/bins/tnjfr
  
**Design Mockup**

	URL : https://bit.ly/2P0cw5l
