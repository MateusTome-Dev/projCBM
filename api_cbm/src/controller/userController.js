// Importa as bibliotecas necessárias
const bcrypt = require("bcrypt"); // Para criptografar senhas
const jwt = require("jsonwebtoken"); // Para gerar e verificar tokens de autenticação
const userRepository = require("../services/userRepository"); // Importa o repositório de usuários
const secretKey = "your_secret_key"; // Chave secreta para assinar e verificar tokens JWT

// Classe UserController contendo métodos estáticos para lidar com operações relacionadas a usuários
class UserController {
  // Método estático assíncrono para autenticar usuários
  static async authenticateUser(req, res) {
    // Extrai email e senha do corpo da requisição
    const { email, password } = req.body;
    try {
      // Obtém todos os usuários do banco de dados
      const users = await userRepository.getUsers();
      // Encontra o usuário com o email fornecido
      const user = users.find((u) => u.email === email);

      // Se o usuário não existir, retorna status 401 (Unauthorized) com uma mensagem de erro
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Compara a senha fornecida com a senha armazenada no banco de dados
      const isMatch = await bcrypt.compare(password, user.password);

      // Se as senhas não corresponderem, retorna status 401 (Unauthorized) com uma mensagem de erro
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Gera um token JWT contendo o email do usuário e assina-o com uma chave secreta
      const token = jwt.sign({ email: user.email }, secretKey, {
        expiresIn: "24h", // Define o tempo de expiração do token (24 horas)
      });

      // Retorna o token JWT
      res.json({ token });
    } catch (error) {
      // Se ocorrer um erro durante a autenticação, loga o erro e retorna status 500 (Internal Server Error) com uma mensagem de erro
      console.error("Error authenticating user:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // Método estático assíncrono para criar um novo usuário
  static async createUser(req, res) {
    // Extrai email e senha do corpo da requisição
    const { email, password } = req.body;

    try {
      // Hash da senha usando bcrypt
      const hashedPassword = await bcrypt.hash(password, 5); // O segundo parâmetro é o saltRounds
      // Cria um novo objeto de usuário com a senha hasheada
      const newUser = {
        email,
        password: hashedPassword,
      };
      // Cria o novo usuário no banco de dados
      const user = await userRepository.createUser(newUser);
      // Retorna o novo usuário criado
      res.status(201).json(user);
    } catch (error) {
      // Se ocorrer um erro durante a criação do usuário, loga o erro e retorna status 500 (Internal Server Error) com uma mensagem de erro
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Error creating user" });
    }
  }

  // Método estático assíncrono para listar todos os usuários
  static async listAllUsers(req, res) {
    try {
      // Obtém todos os usuários do banco de dados
      const users = await userRepository.listAllUsers();
      // Retorna os usuários como JSON
      res.json(users);
    } catch (err) {
      // Se ocorrer um erro ao listar os usuários, retorna status 500 (Internal Server Error) com uma mensagem de erro
      res.status(500).json({ message: "Error listing users" });
    }
  }
}

// Exporta a classe UserController para ser utilizada em outros arquivos
module.exports = UserController;
