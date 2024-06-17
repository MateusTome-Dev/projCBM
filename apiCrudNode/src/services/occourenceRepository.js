// Importa o módulo 'fs' para operações de sistema de arquivos e o módulo 'path' para manipulação de caminhos de arquivo
const fs = require("fs");
const path = require("path");

// Define o nome do arquivo e o caminho do arquivo com base no diretório atual
const fileName = "occourence.json";
const filePath = path.join(__dirname, "..", "database", fileName);

// Classe que define métodos para interagir com o arquivo de ocorrências
class OccurrenceRepository {
  // Método para escrever no arquivo de ocorrências
  static async writeCBMFile(occurrences) {
    // Retorna uma Promise que escreve os dados no arquivo e resolve com a lista atualizada de ocorrências
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, JSON.stringify(occurrences, null, 2), (err) => {
        if (err) return reject(err); // Se houver um erro ao escrever no arquivo, rejeita a Promise
        console.log(`data written to file: ${filePath}`); // Registra no console que os dados foram escritos com sucesso
        resolve(this.listAllOccurrences()); // Resolve a Promise com a lista atualizada de ocorrências
      });
    });
  }

  // Método para listar todas as ocorrências
  static async listAllOccurrences() {
    // Obtém todas as ocorrências do arquivo e retorna a lista de ocorrências
    const occurrences = await this.getOccurrences();
    return occurrences;
  }

  // Método para obter todas as ocorrências do arquivo
  static async getOccurrences() {
    // Retorna uma Promise que lê os dados do arquivo e resolve com a lista de ocorrências
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          if (err.code === "ENOENT") { // Se o arquivo não existir, inicializa um novo arquivo com uma lista vazia de ocorrências
            this.writeCBMFile([]);
            return [];
          } else {
            reject(err); // Se houver outro erro ao ler o arquivo, rejeita a Promise
          }
        } else {
          resolve(JSON.parse(data)); // Se os dados forem lidos com sucesso, resolve a Promise com a lista de ocorrências
        }
      });
    });
  }

  // Método para criar uma nova ocorrência
  static async createOccurrence(occurrence) {
    // Obtém todas as ocorrências do arquivo
    const occurrences = await this.getOccurrences();
    // Define um ID único para a nova ocorrência
    occurrence.id = await this.getNextId();

    // Adiciona a nova ocorrência à lista de ocorrências e escreve os dados atualizados no arquivo
    occurrences.push(occurrence);
    const insertDB = await this.writeCBMFile(occurrences);

    return insertDB; // Retorna a lista de ocorrências atualizada
  }

  // Método para obter o próximo ID disponível
  static async getNextId() {
    // Obtém todas as ocorrências do arquivo
    const occurrences = await this.getOccurrences();
    let maxId = 0;
    // Itera sobre as ocorrências para encontrar o ID máximo
    occurrences.forEach((occ) => {
      if (occ.id > maxId) {
        maxId = occ.id;
      }
    });
    return maxId + 1; // Retorna o próximo ID disponível
  }

  // Método para obter uma ocorrência por ID
  static async getOccurrenceById(id) {
    // Obtém todas as ocorrências do arquivo e retorna a ocorrência correspondente ao ID fornecido
    const occurrences = await this.getOccurrences();
    return occurrences.find((occurrence) => occurrence.id === parseInt(id));
  }

  // Método para atualizar uma ocorrência por ID
  static async updateOccurrence(id, updatedOccurrence) {
    // Obtém todas as ocorrências do arquivo
    const occurrences = await this.getOccurrences();
    // Encontra o índice da ocorrência a ser atualizada
    const index = occurrences.findIndex((p) => p.id === parseInt(id));
    if (index === -1) {
      return null; // Se a ocorrência não for encontrada, retorna null
    }
    // Atualiza a ocorrência com os novos dados e escreve os dados atualizados no arquivo
    occurrences[index] = { ...occurrences[index], ...updatedOccurrence };
    const updateDB = await this.writeCBMFile(occurrences);
    return updateDB; // Retorna a lista de ocorrências atualizada
  }

  // Método para excluir uma ocorrência por ID
  static async deleteOccurrence(id) {
    // Obtém todas as ocorrências do arquivo
    const occurrences = await this.getOccurrences();
    // Encontra o índice da ocorrência a ser excluída
    const index = occurrences.findIndex((p) => p.id === parseInt(id));
    if (index === -1) {
      return null; // Se a ocorrência não for encontrada, retorna null
    }
    // Remove a ocorrência da lista e escreve os dados atualizados no arquivo
    occurrences.splice(index, 1);
    await this.writeCBMFile(occurrences);
    return index; // Retorna o índice da ocorrência excluída
  }
}

// Exporta a classe OccurrenceRepository para ser utilizada em outros arquivos
module.exports = OccurrenceRepository;
