# Express API 🛠️

## Descrição
Uma API simples para gerenciar de uma loja. Esse projeto foi construido com Node.js, Express e TypeScript.

## Como acessar 🌐
Você pode conferir a API rodando com bugs e tudo mais por esses links 👇
- `Buscar todos os Produtos`: "https://web-store-express-api.vercel.app/api/v1/products"
- `Buscar produto de Id 1`: "https://web-store-express-api.vercel.app/api/v1/products/1"
- `Buscar produto não cadastrado`: "https://web-store-express-api.vercel.app/api/v1/products/a"

## Como instalar localmente 💻

### Pré-requisitos
- É necessário ter o Node.js instalado na versão 18 ou superior. Você pode baixar a versão mais recente [aqui](https://nodejs.org/).

### Obtendo o código
Você pode obter o código baixando o diretório do projeto diretamente no GitHub. Se você já tiver o Git instalado na sua máquina, basta entrar no prompt de comando e rodar este código para clonar o repositório 👇
```bash
git clone https://github.com/AwdreyCandido/express-api.git
```

Se preferir, você também pode baixar o código diretamente do GitHub acessando este link e clicando no botão "Code" e depois em "Download ZIP".

## Instalação
Após obter o código, você precisa abrir o diretório da aplicação em um editor de código ou IDE e entrar em algum terminal. No terminal da IDE ou editor, você vai rodar este comando abaixo para instalar as dependências necessárias 👇
```bash
npm install
```

## Configurando o Banco de dados
Antes de iniciar o servidor, você precisa configurar a conexão com o banco de dados MySQL. Siga os passos abaixo:

* **Instalar o MySQL**: Se você ainda não tiver o MySQL instalado, você pode baixar e instalar a partir deste [link](https://dev.mysql.com/downloads/installer/). É importante que você guarde bem o `nome de usuário ` e `senha` do servidor do banco de dados. (root e 1234 são opções interessantes 🤣)


* **Criar o Banco de Dados**: Após instalar o MySQL, você precisa criar um banco de dados chamado products. Na pasta do aplicativo que você obteve do GitHub tem um arquivo de nome: `POPULATE_SALVUS_DATABASE.sql`.
Esse arquivo contém o script para a criação do banco de dados e as tabelas necessárias.

* **Execute o script**: Copie o conteúdo desse arquivo e cole em uma janela de query no MySQL Workbench. Depois é só clicar num icone de ⚡ o script será executado.

* **Localizando configuração**: Dentro do diretório do projeto, você ira navegar até a pasta `/src/services/database.ts` e nesse arquivo voce vai encontrar esse código: 

```bash

import mysql from "mysql2/promise";

class Database {
  private static instance: mysql.Pool | null = null;

  private constructor() { }

  public static getInstance(): mysql.Pool {
    if (this.instance == null) {
      this.instance = mysql.createPool(MYSQL_WEB_HOST_CONFIG);
    }

    return this.instance;
  }
}

export default Database;

// Conexão com Bando de dados remoto
const MYSQL_WEB_HOST_CONFIG = { 
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10720237',
  password: 'TiPlIASGc5',
  database: 'sql10720237',
  port: 3306,
  charset: 'utf8',
  connectionLimit: 10
}

// Conexão com Bando de dados local
const MYSQL_LOCAL_CONFIG = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "products",
  port: 3306,
  charset: 'utf8',
  connectionLimit: 10
}

```

Nesse arquivo está a implementação de um singleton que permite a conexão com o banco de dados. Você deve substituir o objeto `MYSQL_WEB_HOST_CONFIG` pelo objeto `MYSQL_LOCAL_CONFIG` lembrando de substituir o usuário e senha do objeto pelos que você definiu durante a instalação do MySQL.

Ufa 😮‍💨

## Construção do Projeto
Depois de instalar as dependências e de configurar o banco e se nada tiver explodido, você deve construir o projeto. Para isso, execute o comando abaixo no terminal da IDE ou editor 👇

```bash
npm run build
```

**Obs**: Pode acontecer um problema com a pasta `./api` na raiz do projeto, essa pasta é necessária apenas para o deploy da aplicação, então se necessário você pode excluir.

**Obs 2:** Pode ser necessário também alterar dois campos do arquivo `tsconfig.json`: 

* Alterar ` "rootDir": "./"`  para ` "rootDir": "./src"`
* Excluir `"include": [
    "./api/*.ts"
  ]`

## Inicializando do Servidor
Após a construção do projeto, você pode iniciar o servidor da API com o seguinte comando 👇
```bash
npm start
```
## Acessando a API
Se tudo ocorreu bem, você verá "Server is running" no terminal, então você pode ir na barra de pesquisa do seu navegador e pesquisar por http://localhost:3000/api/v1/products

## Scripts

- **start**: Executa o arquivo do servidor compilado usando Node.js.
- **build**: Compila os arquivos TypeScript para JavaScript usando o compilador TypeScript.

## Dependencies

- **cors**: ^2.8.5
- **express**: ^4.19.2
- **mysql2**: ^3.10.2

## Dev Dependencies

- **@types/express**: ^4.17.21
- **@types/node**: ^20.14.10
- **typescript**: ^5.5.3
