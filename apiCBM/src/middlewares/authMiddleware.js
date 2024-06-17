// Importa a biblioteca jsonwebtoken para lidar com tokens JWT
const jwt = require('jsonwebtoken');

// Define a chave secreta utilizada para assinar e verificar os tokens JWT
const secretKey = 'your_secret_key';

// Middleware de autenticação que verifica a presença e validade do token JWT na requisição
function authMiddleware(req, res, next) {
    // Obtém o token JWT do cabeçalho 'Authorization' da requisição
    const token = req.header('Authorization');
    
    // Se o token não estiver presente na requisição, retorna um status 401 (Unauthorized) com uma mensagem de erro
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        // Verifica se o token é válido e decodifica suas informações utilizando a chave secreta
        const decoded = jwt.verify(token, secretKey);
        
        // Adiciona as informações decodificadas do token ao objeto 'user' na requisição
        req.user = decoded;
        
        // Chama a próxima função de middleware na pilha de middleware
        next();
    } catch (err) {
        // Se o token for inválido, retorna um status 400 (Bad Request) com uma mensagem de erro
        res.status(400).json({ message: 'Invalid token.' });
    }
}

// Exporta o middleware de autenticação para ser utilizado em outros arquivos
module.exports = authMiddleware;
