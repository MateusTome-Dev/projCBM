import React, { useState } from "react";
import "./index.css";
import { toast } from "react-toastify";
function Form() {
  // Declara o estado formData para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    descricao: "",
    natureza: "",
    grupo: "",
    subgrupo: "",
    bairro: "",
    logradouro: "",
    datetime: "",
  });

  // Função para lidar com a mudança de valor nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
    
    if(formData.datetime === '' || formData.bairro === '' || formData.descricao === ''|| formData.natureza === '' 
      || formData.grupo === '' || formData.subgrupo === '' || formData.logradouro === ''){
        toast.info('Preencha todos os campos')
        return
      }



    // Faz uma requisição POST para a URL de ocorrências
    fetch("http://localhost:3000/ocorrencia", {
      method: "POST", // Define o método HTTP como POST
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(formData), // Converte os dados do formulário para JSON
    })
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        console.log(data); // Exibe a resposta no console
        toast.success("Ocorrência registrada com sucesso!"); // Exibe um alerta indicando sucesso no registro
        // Reinicia os campos do formulário
        setFormData({
          descricao: "",
          natureza: "",
          grupo: "",
          subgrupo: "",
          bairro: "",
          logradouro: "",
          datetime: "",
        });
      })
      .catch((error) => {
        console.error("Erro ao registrar ocorrência:", error); // Exibe o erro no console
        toast.error(
          "Ocorreu um erro ao registrar a ocorrência. Por favor, tente novamente."
        );
      });
  };

  return (
    <section className="registerContainer">
      <h1>REGISTRAR OCORRÊNCIA</h1>
      <div className="containerForm">
        <form
          onSubmit={handleSubmit}
          method="post"
          data-form
          className="formRegister"
        >
          <label htmlFor="bairro" className="labelRegister">
            Bairro
          </label>
          <input
            type="text"
            name="bairro"
            id="bairro"
            placeholder="Digite o bairro..."
            value={formData.bairro}
            onChange={handleChange}
            className="inputRegister"
          />
          <label htmlFor="grupo" className="labelRegister">
            Grupo
          </label>
          <input
            type="text"
            name="grupo"
            id="grupo"
            placeholder="Digite o grupo..."
            value={formData.grupo}
            onChange={handleChange}
            className="inputRegister"
          />
          <label htmlFor="descricao" className="labelRegister">
            Descrição
          </label>
          <input
            type="text"
            name="descricao"
            id="descricao"
            placeholder="Digite a descrição..."
            value={formData.descricao}
            onChange={handleChange}
            className="inputRegister"
          />

          <label htmlFor="datetime" className="labelRegister">
            Selecione a data e hora:
          </label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            className="inputRegister"
          />
          <label htmlFor="natureza" className="labelRegister">
            Natureza
          </label>
          <input
            type="text"
            name="natureza"
            id="natureza"
            placeholder="Digite a natureza..."
            value={formData.natureza}
            onChange={handleChange}
            className="inputRegister"
          />
          <label htmlFor="logradouro" className="labelRegister">
            Logradouro
          </label>
          <input
            type="text"
            name="logradouro"
            id="logradouro"
            placeholder="Digite o logradouro..."
            value={formData.logradouro}
            onChange={handleChange}
            className="inputRegister"
          />
          <label htmlFor="subgrupo" className="labelRegister">
            SubGrupo
          </label>
          <input
            type="text"
            name="subgrupo"
            id="subgrupo"
            placeholder="Digite o SubGrupo..."
            value={formData.subgrupo}
            onChange={handleChange}
            className="inputRegister"
          />

          <button type="submit" data-button className="btnRegister">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
