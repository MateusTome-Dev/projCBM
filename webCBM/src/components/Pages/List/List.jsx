import editIcon from "/public/img/editar.png";
import delIcon from "/public/img/lixeira.png";
import React, { useEffect, useState } from "react";
import "./index.css";
function List() {
  // Declara o estado occ para armazenar a lista de ocorrências
  const [occ, setOcc] = useState([]);

  // Usa o hook useEffect para buscar as ocorrências ao montar o componente
  useEffect(() => {
    fetchOcorrencias(); // Chama a função para buscar ocorrências
  }, []);

  // Função para buscar as ocorrências do servidor
  function fetchOcorrencias() {
    fetch("http://localhost:3000/ocorrencia", {
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

  // Função para deletar uma ocorrência pelo ID
  function deleteOccurrence(id) {
    fetch(`http://localhost:3000/ocorrencia/${id}`, {
      method: "DELETE", // Define o método HTTP como DELETE
    })
      .then((result) => result.json()) // Converte a resposta para JSON
      .then((data) => {
        console.log(data); // Exibe a resposta no console
        fetchOcorrencias(); // Atualiza a lista de ocorrências após a exclusão
      })
      .catch((erro) => console.error("Erro ao excluir ocorrência:", erro)); // Exibe erros no console
  }

  return (
    <section className="containerList">
    
      <h1 className="listTitle">Listar</h1>
      
        <table className="list">
          <thead className="listHead">
            <tr>
              <th className="listTh">DATA/HORA</th>
              <th className="listTh">NATUREZA</th>
              <th className="listTh">GRUPO</th>
              <th className="listTh">SUBGRUPO</th>
              <th className="listTh">BAIRRO</th>
              <th className="listTh">LOGRADOURO</th>
              <th className="listTh">ID</th>
              <th className="listTh">AÇÃO</th>
            </tr>
          </thead>
          <tbody className="listBody">
            {occ.map((ocorrencia) => (
              <tr key={ocorrencia.id} className="line">
                <td className="listTd">{ocorrencia.datetime}</td>
                <td className="listTd">{ocorrencia.natureza}</td>
                <td className="listTd">{ocorrencia.grupo}</td>
                <td className="listTd">{ocorrencia.subgrupo}</td>
                <td className="listTd">{ocorrencia.bairro}</td>
                <td className="listTd">{ocorrencia.logradouro}</td>
                <td className="listTd">{ocorrencia.id}</td>
                <td className="listTd"><div className="linkIcon">
                  <img src={editIcon} alt="" onClick={() =>(window.location.href = `/editar/${ocorrencia.id}`)}/>
                  <img src={delIcon} alt="" onClick={() => deleteOccurrence(ocorrencia.id)}/>
                </div></td>

                
              </tr>
            ))}
          </tbody>
        </table>
      
    </section>
  );
}
export default List;
