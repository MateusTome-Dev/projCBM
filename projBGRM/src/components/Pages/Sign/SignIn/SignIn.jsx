import "./index.css";
import Logo from "/public/img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import { toast } from "react-toastify";

function SignIn() {
  // Declara o estado formData para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Função para lidar com a mudança de valor nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página

    // Verifica se os campos email e password estão preenchidos
    if (formData.email === '' || formData.password === '') {
      toast.info('Preencha os campos'); // Exibe um alerta se algum campo estiver vazio
      return; // Sai da função se algum campo estiver vazio
    }

    // Faz uma requisição POST para a URL de login
    fetch("http://localhost:3000/login", {
      method: "POST", // Define o método HTTP como POST
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(formData), // Converte os dados do formulário para JSON
    })
      .then((response) => {
        if(response.status === 401){
          toast.error('Senha ou Email incorreto')
        }
        return  response.json();
      }) // Converte a resposta para JSON
      .then((data) => {
        // Verifica se a resposta contém um token
        if (data.token) {
          localStorage.setItem('token', data.token); // Armazena o token no localStorage
          console.log(localStorage.getItem('token')); // Exibe o token no console
          window.location.href = `/instrucoes`; // Redireciona para a página de instruções
        } else {
          toast.error('Acesso Negado'); // Exibe um alerta se não houver token na resposta
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error); // Exibe o erro no console
        toast.error("Erro ao fazer login. Por favor, tente novamente."); // Exibe um alerta em caso de erro
      });
  };

  return (
    <div className="login-form">
      <div className="containerSign">
        <div className="main">
          <div className="contentSign">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit} method="post" className="formSign">
              <input
                className="inputSign"
                type="email"
                name="email"
                placeholder="User Email"
                required
                autoFocus
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="inputSign"
                type="password"
                name="password"
                placeholder="User Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <button className="btn">Entrar</button>
            </form>
            <p className="account">
              Não tem uma conta?
              <Link to="/signup" className="link">
                Registre-se
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
