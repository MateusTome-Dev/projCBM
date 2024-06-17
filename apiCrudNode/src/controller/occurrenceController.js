// Importa o módulo CBMRepository que contém as funções para interagir com o banco de dados
const CBMRepository = require("../services/occourenceRepository");

// Função assíncrona para listar todas as ocorrências
exports.listAllOccurrences = async (req, res) => {
  try {
    // Chama a função do repositório para listar todas as ocorrências
    const occurrence = await CBMRepository.listAllOccurrences();
    // Retorna um status 200 (OK) e envia os dados das ocorrências como JSON
    res.status(200).json(occurrence);
  } catch (err) {
    // Se ocorrer um erro, retorna um status 500 (Internal Server Error) e o erro como JSON
    res.status(500).json({ error: err.toString() }, "ERRO DO SERVER");
  }
};

// Função assíncrona para criar uma nova ocorrência
exports.createOccurrence = async (req, res) => {
  try {
    // Chama a função do repositório para criar uma nova ocorrência usando os dados do corpo da requisição (req.body)
    const occurrence = await CBMRepository.createOccurrence(req.body);
    // Retorna um status 201 (Created) e envia os dados da nova ocorrência criada como JSON
    res.status(201).json(occurrence);
  } catch (error) {
    // Se ocorrer um erro, retorna um status 500 (Internal Server Error) e o erro como JSON
    res.status(500).json({ error: err.toString() }, "ERRO DO SERVER");
  }
};

// Função assíncrona para atualizar uma ocorrência existente
exports.updateOccurrence = async (req, res) => {
  try {
    // Chama a função do repositório para atualizar uma ocorrência específica utilizando o ID fornecido nos parâmetros da requisição (req.params.id)
    const occurrence = await CBMRepository.updateOccurrence(
      req.params.id,
      req.body
    );
    // Se não encontrar a ocorrência, retorna um status 404 (Not Found) e uma mensagem de erro
    if (!occurrence) {
      res.status(404).json({ error: "Ocorrência não encontrada" });
    } else {
      // Caso contrário, retorna um status 200 (OK) e envia os dados da ocorrência atualizada como JSON
      res.status(200).json(occurrence);
    }
  } catch (err) {
    // Se ocorrer um erro, retorna um status 500 (Internal Server Error) e o erro como JSON
    res.status(500).json({ error: err.toString() });
  }
};

// Função assíncrona para deletar uma ocorrência existente
exports.deleteOccurrence = async (req, res) => {
  try {
    // Chama a função do repositório para deletar a ocorrência utilizando o ID fornecido nos parâmetros da requisição (req.params.id)
    const occurrence = await CBMRepository.deleteOccurrence(req.params.id);
    console.log(occurrence);

    // Se a ocorrência for nula, significa que não foi encontrada, então retorna um status 404 (Not Found) e uma mensagem de erro
    if (occurrence === null) {
      res.status(404).json({ error: "Ocorrência não encontrada" });
    } else {
      // Caso contrário, retorna um status 200 (OK) e uma mensagem indicando que a ocorrência foi deletada com sucesso
      res.status(200).json({ msg: "Ocorrência deletada com sucesso" });
    }
  } catch (err) {
    // Se ocorrer um erro, retorna um status 500 (Internal Server Error) e o erro como JSON
    res.status(500).json({ error: err.toString() });
  }
};

// Função assíncrona para obter uma ocorrência pelo seu ID
exports.getOccurrenceById = async (req, res) => {
  try {
    // Chama a função do repositório para obter a ocorrência utilizando o ID fornecido nos parâmetros da requisição (req.params.id)
    const occurrence = await CBMRepository.getOccurrenceById(req.params.id);
    // Se não encontrar a ocorrência, retorna um status 404 (Not Found) e uma mensagem de erro
    if (!occurrence) {
      res.status(404).json({ error: "Ocorrência não encontrada" });
    } else {
      // Caso contrário, retorna um status 200 (OK) e envia os dados da ocorrência como JSON
      res.status(200).json(occurrence);
    }
  } catch (err) {
    // Se ocorrer um erro, retorna um status 500 (Internal Server Error) e o erro como JSON
    res.status(500).json({ error: err.toString() });
  }
};
