// Importa o módulo 'express', que é um framework web para Node.js.
const express = require("express");
// Define a porta na qual o servidor irá escutar as solicitações entrantes.
const port = 3000;
// Cria uma instância da aplicação Express.
const app = express();
// Importa o roteador de rotas definido no arquivo './src/routes/router.js'.
const router = require("./src/routes/router");
// Importa o middleware 'cors' usado para habilitar o intercâmbio de recursos de origem cruzada (CORS).
const cors = require("cors");

// Aplica o middleware 'cors' com uma configuração que permite solicitações com os métodos GET, POST, DELETE e PUT de qualquer origem.
app.use(
  cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT']
  })
);

// Define manualmente os cabeçalhos CORS para permitir solicitações de qualquer origem, com os métodos GET, POST, PUT e DELETE, e especifica os tipos de cabeçalhos permitidos.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Habilita o parseamento do corpo das solicitações no formato JSON.
app.use(express.json());

// Serve arquivos estáticos do diretório 'public'.
app.use(express.static("public"));

// Monta o roteador de rotas no ponto de montagem raiz '/'.
app.use("/", router);

// Inicia o servidor Express para escutar as solicitações entrantes na porta especificada e imprime uma mensagem no console quando o servidor estiver pronto para aceitar conexões.
app.listen(port, () => {
  console.log(`Servidor funcionando! Acesse: http://localhost:${port}`);
});
