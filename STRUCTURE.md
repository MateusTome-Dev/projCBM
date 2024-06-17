# Entendendo decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar o projeto

### Setup de ambiente:
- [Node LTS](https://nodejs.org/en)
- [Visual Studio Code](https://code.visualstudio.com/)

### Como rodar na minha máquina?
1. Clone o projeto: `https://github.com/AnaLouBispo/CBM-Project`

2. Instale as dependências necessárias:
```
   npm i nodemon
   npm i react-router-dom
   npm i toastify
   npm i --save @fortawesome/fontawesome-svg-core
   npm install --save @fortawesome/free-solid-svg-icons
   npm install --save @fortawesome/react-fontawesome
```

3. Navegue até o diretório da API:
```
   cd apiCBM
```   
4. Inicie a API:
```
   npm start
```
5. Volte ao diretório raiz:
 ```
  cd ..
 ```
6. Navegue até o diretório da parte web:
```
  cd webCBM_BGRM
 ```

7. Inicie o servidor de desenvolvimento:
```
 npm run dev 
```
7. Pronto 🎉



## CBM - Site
### Estrutura do Projeto
- `./node_modules`: Diretório onde todas as dependências do projeto são armazenadas. Este diretório é gerenciado pelo npm e contém todos os pacotes necessários para a aplicação funcionar.
- `./public/img`: Diretório destinado ao armazenamento de imagens que serão acessíveis publicamente e utilizadas na interface do usuário. Qualquer arquivo aqui pode ser servido diretamente ao navegador.
- `./src`: Diretório principal para o código-fonte da aplicação, onde a lógica e os componentes do React são implementados.
  - `./src/components`: São todos os pedaços primordiais de interface. Contém todos os componentes reutilizáveis da interface
  - `./src/layout`: Contém os componentes responsáveis pela estrutura e organização da interface do usuário. Esses componentes definem a aparência e o comportamento gerais das páginas da aplicação.
     - `./src/layout/Header`: Contém o código Header.jsx e os arquivos de estilo (.css) para o cabeçalho das páginas /instrucoes, /registrar, /editar, /deletar, e /listar
     - `./src/layout/HeaderHome`:Contém o código HeaderHome.jsx e os arquivos de estilo (.css) para o cabeçalho das páginas /login e /signup.
     - `./src/layout/Navbar`:Contém o código Navbar.jsx e os arquivos de estilo (.css) para a barra de navegação nas páginas /instrucoes, /registrar, /editar, /deletar, e /listar.
     - `./src/App.css`: Contém os estilos globais que redefinem as configurações de estilo padrão para todas as páginas.
     - `./src/App.jsx`:  Estrutura principal do aplicativo que inclui a configuração das páginas, chamadas através do router.
     - `./src/Router.jsx`: Define as rotas de navegação entre as diferentes páginas do projeto.
     - `./src/main.jsx`: Arquivo de entrada principal que renderiza o aplicativo React e o monta no DOM.
 - `./.eslintrc.cjs`: Arquivo de configuração do ESLint para garantir a padronização e a qualidade do código.
 - `./.gitignore`: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.
 - `./index.html`: Arquivo HTML principal que serve como a estrutura básica para a aplicação React.
 - `./package-lock.json`: Arquivo que registra as versões exatas das dependências instaladas para garantir a consistência nas instalações.
 - `./package.json`: Arquivo que gerencia as dependências do projeto e scripts, além de armazenar informações sobre o projeto.
 - `./vite.config.js`: Arquivo de configuração do Vite, que é utilizado para configurar o build e o servidor de desenvolvimento.

## CBM LVDevs API

> A API LVDevs não deve ser usada no ambiente de produção até segunda ordem.

### Como usar?

- Após rodar o projeto você pode alterar os arquivos da pasta `/api_cbm`

### Estrutura do Projeto da API

- `./node_modules`: Diretório onde todas as dependências do projeto são armazenadas. Este diretório é gerenciado pelo npm e contém todos os pacotes necessários para a aplicação funcionar.

- `./src`: Diretório principal para o código-fonte da aplicação, onde a lógica e os componentes da API são implementados.
  - `./src/controllers`: Diretório onde estão os controladores que lidam com as requisições HTTP.
    - `./src/controllers/occurrenceController.js`: Controlador para operações relacionadas a ocorrências.
    - `./src/controllers/userController.js`: Controlador para operações relacionadas a usuários.
  
  - `./src/database`: Diretório onde são armazenados os arquivos JSON simulando um banco de dados.
    - `./src/database/occurrence.json`: Arquivo JSON com dados de ocorrências.
    - `./src/database/user.json`: Arquivo JSON com dados de usuários.
  
  - `./src/middlewares`: Diretório onde estão os middlewares da aplicação.
    - `./src/middlewares/authMiddleware.js`: Middleware para autenticação de usuários.
  
  - `./src/routes`: Diretório onde estão definidas as rotas da API.
    - `./src/routes/router.js`: Arquivo que define as rotas da API e associa cada rota ao seu respectivo controlador.
  
  - `./src/services`: Diretório onde estão os serviços da aplicação.
    - `./src/services/CBMRepository.js`: Serviço para interação com o repositório de ocorrências.
    - `./src/services/userRepository.js`: Serviço para interação com o repositório de usuários.
  
- `./index.js`: Arquivo de entrada principal da aplicação.
- `./package-lock.json`: Arquivo que registra as versões exatas das dependências instaladas para garantir a consistência nas instalações.
- `./package.json`: Arquivo que gerencia as dependências do projeto e scripts, além de armazenar informações sobre o projeto.
