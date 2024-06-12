// Importa o Router do Express para criar rotas
const { Router } = require('express');

// Importa os controllers para lidar com as requisições
const controller = require('../controller/occurrenceController'); // Controller das ocorrências
const userController = require('../controller/userController'); // Controller dos usuários

// Cria um novo objeto Router para definir as rotas
const router = Router();

// Rotas para manipulação de ocorrências
router.post("/ocorrencia", controller.createOccurrence); // Rota para criar uma nova ocorrência
router.get("/ocorrencia", controller.listAllOccurrences); // Rota para listar todas as ocorrências
router.get("/ocorrencia/:id", controller.getOccurrenceById); // Rota para obter uma ocorrência por ID
router.put("/ocorrencia/:id", controller.updateOccurrence); // Rota para atualizar uma ocorrência por ID
router.delete("/ocorrencia/:id", controller.deleteOccurrence); // Rota para excluir uma ocorrência por ID

// Rotas para autenticação e cadastro de usuários
router.post('/login', userController.authenticateUser); // Rota para autenticar usuários
router.post('/cadastro', userController.createUser); // Rota para criar um novo usuário
router.get('/users', userController.listAllUsers); // Rota para listar todos os usuários

// Exporta as rotas configuradas para serem utilizadas em outros arquivos
module.exports = router;
