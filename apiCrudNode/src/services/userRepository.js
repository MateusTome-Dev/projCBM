// Importa o módulo 'fs' para operações de sistema de arquivos e o módulo 'path' para manipulação de caminhos de arquivo
const fs = require("fs");
const path = require("path");

// Define o nome do arquivo e o caminho do arquivo com base no diretório atual
const fileName = "user.json";
const filePath = path.join(__dirname, "..", "database", fileName);

// Classe que define métodos para interagir com o arquivo de usuários
class userRepository {
  // Método para escrever no arquivo de usuários
  static async writeUserFile(users) {
    // Retorna uma Promise que escreve os dados no arquivo e resolve com a lista de usuários
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.error(`Error writing to file: ${err}`); // Registra no console se houver um erro ao escrever no arquivo
          reject(err); // Se houver um erro, rejeita a Promise
        } else {
          console.log(`Data written to file: ${filePath}`); // Registra no console que os dados foram escritos com sucesso
          resolve(users); // Resolve a Promise com a lista de usuários
        }
      });
    });
  }

  // Método para listar todos os usuários
  static async listAllUsers() {
    try {
      const users = await this.getUsers();
      return users; // Retorna a lista de usuários obtida
    } catch (err) {
      console.error(`Error listing users: ${err}`); // Registra no console se houver um erro ao listar os usuários
      throw err; // Lança o erro para ser tratado pelo código que chama o método
    }
  }

  // Método para obter todos os usuários do arquivo
  static async getUsers() {
    // Retorna uma Promise que lê os dados do arquivo e resolve com a lista de usuários
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", async (err, data) => {
        if (err) {
          if (err.code === "ENOENT") { // Se o arquivo não existir, inicializa um novo arquivo com uma lista vazia de usuários
            await this.writeUserFile([]);
            resolve([]);
          } else {
            console.error(`Error reading file: ${err}`); // Registra no console se houver um erro ao ler o arquivo
            reject(err); // Se houver um erro, rejeita a Promise
          }
        } else {
          resolve(JSON.parse(data)); // Se os dados forem lidos com sucesso, resolve a Promise com a lista de usuários
        }
      });
    });
  }

  // Método para criar um novo usuário
  static async createUser(user) {
    try {
      const users = await this.getUsers();
      user.id = users.length + 1; // Define um ID único para o novo usuário
      users.push(user); // Adiciona o novo usuário à lista de usuários
      await this.writeUserFile(users); // Escreve os dados atualizados no arquivo
      return user; // Retorna o novo usuário criado
    } catch (err) {
      console.error(`Error creating user: ${err}`); // Registra no console se houver um erro ao criar o usuário
      throw err; // Lança o erro para ser tratado pelo código que chama o método
    }
  }

  // Método para obter um usuário pelo ID
  static async getUserById(id) {
    try {
      const users = await this.getUsers();
      const user = users.find((u) => u.id === parseInt(id)); // Encontra o usuário com o ID fornecido
      return user; // Retorna o usuário encontrado
    } catch (err) {
      console.error(`Error getting user by id ${id}: ${err}`); // Registra no console se houver um erro ao obter o usuário
      throw err; // Lança o erro para ser tratado pelo código que chama o método
    }
  }
}

// Exporta a classe userRepository para ser utilizada em outros arquivos
module.exports = userRepository;
