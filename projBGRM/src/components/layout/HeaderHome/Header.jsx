// Importa o arquivo de estilos CSS
import './index.css';

// Importa a imagem do logo
import Logo from '/public/img/logo.png';

// Importa a biblioteca React
import React from "react";

// Importa os componentes Link e useLocation da biblioteca react-router-dom
import { Link, useLocation } from "react-router-dom";

// Define o componente HeaderHome
function HeaderHome() {
    // Obtém o objeto location que representa a localização atual
    const location = useLocation();

    // Lista de rotas onde o Navbar deve ser renderizado
    const allowedRoutes = ["/", "/signup"];

    // Verifica se a rota atual está na lista de rotas permitidas
    const shouldRenderHeader = allowedRoutes.includes(location.pathname);

    // Renderiza o Navbar somente se a rota atual estiver na lista de rotas permitidas
    return shouldRenderHeader && (
        <header className='headerHome'>
            <div className='titleContainerHome'>
                {/* Renderiza a imagem do logo */}
                <img className='logoHome' src={Logo} alt="" />
                <div className='textHeaderHome'>
                    {/* Renderiza o texto do cabeçalho */}
                    <h2>
                        <span>CORPO DE </span> 
                        <br className='brHome'/>
                        BOMBEIROS 
                        <br className='brHome'/>
                        MILITAR 
                        <span className='sp'> DE SÃO PAULO</span>
                    </h2>
                </div>
            </div>
            <div className="listContainerHome">
                <ul>
                    {/* Link para a página inicial */}
                    <li>
                        <Link className='root' to="/">Entrar</Link>
                    </li>
                    {/* Link para a página de cadastro */}
                    <li>
                        <Link className='root' to="/signup">Cadastrar</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

// Exporta o componente HeaderHome como padrão
export default HeaderHome;
