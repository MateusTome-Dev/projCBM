// Importa o arquivo de estilos CSS
import './index.css';

// Importa a imagem do logo
import Logo from '/public/img/logo.png';

// Importa o ícone do Facebook
import faceIcon from '/public/img/facebook.png';

// Importa o ícone do Instagram
import instaIcon from '/public/img/instagram.png';

// Importa o hook useLocation da biblioteca react-router-dom
import { useLocation } from "react-router-dom";

// Define o componente Header
function Header() {
    // Obtém o objeto location que representa a localização atual
    const location = useLocation();

    // Lista de rotas onde o Navbar deve ser renderizado
    const allowedRoutes = ["/instrucoes", "/registrar", "/listar"];

    // Verifica se a rota atual está na lista de rotas permitidas
    const shouldRenderHeader = allowedRoutes.includes(location.pathname);

    // Renderiza o Navbar somente se a rota atual estiver na lista de rotas permitidas
    return shouldRenderHeader && (
        <header className='header'>
            <div className='titleContainer'>
                {/* Renderiza a imagem do logo */}
                <img className='logo' src={Logo} alt="" />
                <div className='textHeader'>
                    {/* Renderiza o texto do cabeçalho */}
                    <h2>
                        <span>CORPO DE </span> 
                        <br className='br'/>
                        BOMBEIROS 
                        <br className='br'/>
                        MILITAR 
                        <span className='sp'> DE SÃO PAULO</span>
                    </h2>
                </div>
            </div>
            <div className="listContainer">
                <ul>
                    {/* Link para o Instagram */}
                    <li>
                        <a href="https://www.instagram.com/corpodebombeirosdapmesp/" target='_blank'>
                            <img src={instaIcon} alt="" />
                        </a>
                    </li>
                    {/* Link para o Facebook */}
                    <li>
                        <a href="https://www.facebook.com/corpodebombeirosdapmesp" target='_blank'>
                            <img src={faceIcon} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

// Exporta o componente Header como padrão
export default Header;
