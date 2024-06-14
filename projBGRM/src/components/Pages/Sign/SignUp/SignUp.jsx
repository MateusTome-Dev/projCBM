import "./index.css";
import Logo from "/public/img/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
function SignIn() {
  // Declara o estado formData para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
    codigoHash: "",
  });

  // Declara o estado message para armazenar a mensagem de resposta
  const [message, setMessage] = useState("");

  // Função para lidar com a mudança de valor nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
    fetch("http://localhost:3000/cadastro", {
      method: "POST", // Define o método HTTP como POST
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(formData), // Converte os dados do formulário para JSON
    })
      .then((result) => result.json()) // Converte a resposta para JSON
      .then((data) => {
        setMessage(data.message); // Define a mensagem de resposta no estado
        setFormData({
          nome: "",
          email: "",
          password: "",
          codigoHash: "", // Reinicia os campos do formulário
        });
        toast.success("Cadastro Efetuado!!"); // Exibe um alerta indicando sucesso no cadastro
      })
      .catch((error) => {
        console.log("ERROR: ", error); // Exibe erros no console
      });
  };

  return (
    <div className="login-form">
      <div className="containerSign">
        <div className="main">
          <div className="contentSign">
            <h2>Cadastrar</h2>
            <form onSubmit={handleSubmit} method="post" className="formSign">
              <input
                className="inputSign"
                type="text"
                name="nome"
                placeholder="User Name"
                required
                autoFocus
                value={formData.nome}
                onChange={handleChange}
              />
              <input
                className="inputSign"
                type="email"
                name="email"
                placeholder="User email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="inputSign"
                type="password"
                name="password"
                placeholder="User Password"
                required
                autoFocus
                value={formData.password}
                onChange={handleChange}
              />
              <button className="btn" type="submit">
                Cadastrar
              </button>
            </form>
            <p className="account">
              Já tem uma conta?
              <Link to="/" className="link">
                Entre
              </Link>
            </p>
          </div>
          <div className="form-img">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
