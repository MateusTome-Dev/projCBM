import { useParams } from "react-router-dom";
import React, { useState , useEffect } from "react";
import "./index.css";
import logo from "/public/img/logo.png";
import { toast } from "react-toastify";
function Editar() {




  const params = useParams(); // Busca os parâmetros passados pela URL
 
  // Define o estado formData para armazenar dados do formulário
  const [formData, setFormData] = useState({
    natureza: '',
    grupo:'',
    bairro: '',
    logradouro: '',
    datetime: '',
    subgrupo: '',
  });
 
  // Define o estado de uma ocorrência para armazenar dados futuros
  const [occ, setOcc] = useState({});
 
  // Faz a requisição HTTP para obter os dados de uma ocorrência específica
  useEffect(() => {
    fetchOcorrencias();
  }, []);
 
  function fetchOcorrencias() {
    fetch(` http://localhost:3000/ocorrencia/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        // Define o estado de occ com os dados trazidos pela API
        setOcc(data);
        // Preenche o formulário com os dados da ocorrência para edição
        setFormData({
          natureza: data.natureza,
          grupo: data.grupo,
          bairro: data.bairro,
          logradouro: data.logradouro,
          datetime: data.datetime,
          subgrupo: data.subgrupo
        })
      })
      .catch((erro) => console.error("Erro ao buscar dados:", erro));
  }
 
  // Componente para lidar com as mudanças de informações nos campos de entrada
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
 
  // Componente para lidar com o envio dos dados para a API
  const handleSubmit = (event) => {
    event.preventDefault();
   
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (
      formData.datetime === "" ||
      formData.bairro === "" ||
      formData.natureza === "" ||
      formData.grupo === "" ||
      formData.subgrupo === "" ||
      formData.logradouro === ""
    ) {
      toast.info("Preencha o campo editado");
      return;
    }
 
    // Faz a requisição PUT para atualizar a ocorrência existente
    fetch(` http://localhost:3000/ocorrencia/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((result) => {
        result.json();
        // Lida com possíveis erros retornados pela requisição
        if (result.status === 404) {
          toast.error("Ocorrência Inexistente!");
        } else if (result.ok) {
          toast.success("Ocorrência Editada com Sucesso!");
        } else {
          toast.error("Erro ao Editar a ocorrência!");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
        toast.error("Erro ao editar ocorrência");
      });
  };
  return (
    <section className="editarContainer">
      <h1>
        Editar
        <br className="brTitleEdit" /> ocorrências
      </h1>
      <div className="containerFormEdit">
        <form
          onSubmit={handleSubmit}
          method="POST"
          data-form
          className="formEditar"
        >
          <label className=" idEdit" htmlFor="ID">
            Identificador
          </label>
          <h1 id="h1Style">{params.id}</h1>
          <label className="labelEdit" htmlFor="Natureza">
            Natureza
          </label>
          <input
            className="inputEdit"
            type="text"
            name="natureza"
            id="Natureza"
            placeholder="Natureza"
            onChange={handleChange}
            value={formData.natureza}
          />
          <label className="labelEdit" htmlFor="Grupo">
            Grupo
          </label>
          <input
            className="inputEdit"
            type="text"
            name="grupo"
            id="grupo"
            placeholder="Grupo"
            onChange={handleChange}
            value={formData.grupo}
          />
          <label htmlFor="subgrupo" className="labelEdit">
            SubGrupo
          </label>
          <input
            type="text"
            name="subgrupo"
            id="subgrupo"
            placeholder="SubGrupo"
            value={formData.subgrupo}
            onChange={handleChange}
            className="inputEdit"
          />
          <label className="labelEdit" htmlFor="datetime">
            Selecione a data e hora:
          </label>
          <input
            className="inputEdit"
            type="datetime-local"
            id="datetime"
            name="datetime"
            placeholder="Hora e Data"
            onChange={handleChange}
            value={formData.datetime}
          />
          
          <label className="labelEdit" htmlFor="Bairro">
            Bairro
          </label>
          <input
            className="inputEdit"
            type="text"
            name="bairro"
            id="Bairro"
            placeholder="Bairro"
            onChange={handleChange}
            value={formData.bairro}
          />
          <label className="labelEdit" htmlFor="Logradouro">
            Logradouro
          </label>
          <input
            className="inputEdit"
            type="text"
            name="logradouro"
            id="Logradouro"
            placeholder="Logradouro"
            onChange={handleChange}
            value={formData.logradouro}
          />

          

          <button className="btnEdit" type="submit" data-button>
            Enviar
          </button>
        </form>
        <div className="logoEdit">
            <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Editar;