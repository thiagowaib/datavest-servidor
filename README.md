# Servidor *DataVest*
<img src="https://png.pngtree.com/background/20210709/original/pngtree-blue-big-data-the-internet-banner-picture-image_929540.jpg" alt="banner"
width="100%" height="200px">

> Bem vind@ ao repositório para o servidor do DataVest, um app de mapeamento das datas dos principais vestibulares.

<br>

## 👨‍💻 Desenvolvido utilizando
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="35px">  •  **NodeJs**: Framework utilizado para desenvolver a API.

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="35px"> • **MongoDB**: Banco de Dados NoSQL

<br>

## 🚀 Inicialização de ambiente
Para configurar e inicializar o ambiente de desenvolvimento do servidor DataVest, é necessário ter instalado o **[Node](https://nodejs.org/en/ "Node")** (> v16.0.0), juntamente com o npm (> v8.0.0).

Na pasta raíz do diretório, execute os scripts abaixo:

    // Instalação de dependências
    npm install
Após feita a instalação, tudo que resta é criar um arquivo **[.env](https://www.freecodecamp.org/portuguese/news/como-usar-variaveis-de-ambiente-do-node-com-um-arquivo-dotenv-para-node-js-e-npm/ ".env")** na raíz do diretório, onde deverão ser criadas as chaves

| Chaves  | Descrição do Valor  |
| :------------: | :------------: |
| `SERVER_PORT` | {String} Porta do Servidor  |
| `DB_URI`  | {String} URI de acesso ao Mongodb  |
| `JWT_ACCESS_TOKEN_SECRET` | {String} Segredo para geração de JWTs  |

Com isso só resta executar o comando abaixo para inicializar o servidor em `http://localhost:SERVER_PORT`

    // Inicializando o servidor
    npm run start

<br>

## 🤝 Colaboradores
<img src="https://avatars.githubusercontent.com/u/61032370?v=4" height="35px"> **[ • Thiago Waib](https://github.com/thiagowaib " • Thiago Waib")**

