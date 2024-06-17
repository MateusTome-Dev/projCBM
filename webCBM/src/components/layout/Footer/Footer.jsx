import { useLocation } from 'react-router-dom';
import './index.css';
import Logo from '/public/img/logo.png';

function Footer() {
    const location = useLocation();

    // Lista de rotas onde o Footer deve ser renderizado
    const allowedRoutes = ["/instrucoes"];

    // Verifica se a rota atual está na lista de rotas permitidas
    const shouldRenderFooter = allowedRoutes.includes(location.pathname);

    // Renderiza o Footer somente se a rota atual estiver na lista de rotas permitidas
    return shouldRenderFooter ? (
        <footer className='footer'>
            <img src={Logo} alt="" />
        </footer>
    ) : null;
}

export default Footer;
