import { useParams } from "react-router-dom";
import React, { useState , useEffect } from "react";
import "./index.css";
import logo from "/public/img/logo.png";
import { toast } from "react-toastify";
function Editar() {





  const params = useParams();
  const [formData, setFormData] = useState({
    descricao: "",
    natureza: "",
    grupo: "",
    bairro: "",
    logradouro: "",
    datetime: "",
    subgrupo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.datetime === "" ||
      formData.bairro === "" ||
      formData.descricao === "" ||
      formData.natureza === "" ||
      formData.grupo === "" ||
      formData.subgrupo === "" ||
      formData.logradouro === ""
    ) {
      toast.info("Preencha os Campos");
      return;
    }

    
    fetch(`http://localhost:3000/ocorrencia/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((result) => {
        result.json();
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


  const [occ, setOcc] = useState([]);

  // Usa o hook useEffect para buscar as ocorrências ao montar o componente
  useEffect(() => {
    fetchOcorrencias(); // Chama a função para buscar ocorrências
  }, []);

  // Função para buscar as ocorrências do servidor
  function fetchOcorrencias() {
    fetch(`http://localhost:3000/ocorrencia/${params.id}`, {
      method: "GET", // Define o método HTTP como GET
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
      },
    })
      .then((result) => result.json()) // Converte a resposta para JSON
      .then((data) => {
        setOcc(data); // Define o estado occ com os dados recebidos
      })
      .catch((erro) => console.error("Erro ao buscar dados:", erro)); // Exibe erros no console
  }





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
          <label className="labelEdit" htmlFor="Bairro">
            Bairro
          </label>
          <input
            className="inputEdit"
            type="text"
            name="bairro"
            id="Bairro"
            placeholder={occ.bairro}
            onChange={handleChange}
            value={formData.bairro}
          />
          <label className="labelEdit" htmlFor="Grupo">
            Grupo
          </label>
          <input
            className="inputEdit"
            type="text"
            name="grupo"
            id="grupo"
            placeholder={occ.grupo} 
            onChange={handleChange}
            value={formData.grupo}
          />
          <label className="labelEdit" htmlFor="Descricao">
            Descrição
          </label>
          <input
            className="inputEdit"
            type="text"
            name="descricao"
            id="Descricao"
            placeholder={occ.descricao}
            onChange={handleChange}
            value={formData.descricao}
          />
          <label className="labelEdit" htmlFor="datetime">
            Selecione a data e hora:
          </label>
          <input
            className="inputEdit"
            type="datetime-local"
            id="datetime"
            name="datetime"
            placeholder="{}"
            onChange={handleChange}
            value={formData.datetime}
          />
          <label className="labelEdit" htmlFor="Natureza">
            Natureza
          </label>
          <input
            className="inputEdit"
            type="text"
            name="natureza"
            id="Natureza"
            placeholder={occ.natureza}
            onChange={handleChange}
            value={formData.natureza}
          />
          <label className="labelEdit" htmlFor="Logradouro">
            Logradouro
          </label>
          <input
            className="inputEdit"
            type="text"
            name="logradouro"
            id="Logradouro"
            placeholder={occ.logradouro}
            onChange={handleChange}
            value={formData.logradouro}
          />

          <label htmlFor="subgrupo" className="labelEdit">
            SubGrupo
          </label>
          <input
            type="text"
            name="subgrupo"
            id="subgrupo"
            placeholder={occ.subgrupo}
            value={formData.subgrupo}
            onChange={handleChange}
            className="inputEdit"
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
