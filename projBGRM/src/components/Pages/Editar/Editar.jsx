import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";

function Editar() {
  const params = useParams();
  const [formData, setFormData] = useState({
    descricao: "",
    natureza: "",
    grupo: "",
    bairro: "",
    logradouro: "",
    datetime: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {

    event.preventDefault();


    
    if(formData.datetime === '' || formData.bairro === '' || formData.descricao === ''|| formData.natureza === '' 
      || formData.grupo === '' || formData.subgrupo === '' || formData.logradouro === ''){
        alert('Preencha os Campos')
        return
      }




    fetch(`http://localhost:3000/ocorrencia/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((result) => {
        result.json()
        if(!result.ok) {
        console.log(error);
        }
      }
        
     
    
    )
      .then((data) => {
        console.log(data);
        alert("Ocorrência editada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao editar ocorrência");
      });
  };

  return (
    <section className="editarContainer">
      <h1>
        Editar
        <br className="brTitleEdit" /> ocorrências
      </h1>
      <div className="containerFormEdit">
        <form onSubmit={handleSubmit}  method="POST" data-form className="formEditar">
          <label className="labelEdit" htmlFor="ID">
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
            placeholder="Digite o bairro..."
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
            placeholder="Digite o grupo..."
            onChange={handleChange}
            value={formData.grupo}
          />
          <label
            className="labelEdit"
            htmlFor="Descricao"
          >
            Descrição
          </label>
          <input
            className="inputEdit"
            type="text"
            name="descricao"
            id="Descricao"
            placeholder="Digite a descrição..."
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
            placeholder="Digite a data..."
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
            placeholder="Digite a natureza..."
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
            placeholder="Digite o logradouro..."
            onChange={handleChange}
            value={formData.logradouro}
          />

          <button className="btnEdit" type="submit" data-button>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Editar;
