import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const location = useLocation();

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }

  const exit = () => {
    // Fecha a barra de navegação
    document.getElementById("myNav").style.width = "0%";
    // Remove o token e o fingerprint do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('fingerprint');
    // Redireciona para a página de login ou página inicial
    window.location.href = '/';
  }

  // Lista de rotas onde a barra de navegação deve ser exibida
  const allowedRoutes = ['/instrucoes', '/registrar', '/listar'];
  
  // Verifica se a rota atual está na lista de rotas permitidas ou se é a rota /editar/:id
  const isAllowedRoute = allowedRoutes.includes(location.pathname) || 
                         location.pathname.startsWith('/editar/');

  if (!isAllowedRoute) {
    return null; // Não renderiza a barra de navegação
  }

  return (
    <div>
      <div id="myNav" className="overlay">
        <span className="closebtn" onClick={closeNav}>&times;</span>
        <div className="overlay-content">
          <Link className="linkNav" to="/instrucoes" onClick={closeNav}>INSTRUÇÕES</Link>
          <Link className="linkNav" to="/registrar" onClick={closeNav}>REGISTRAR OCORRÊNCIA</Link>
          <Link className="linkNav" to="/listar" onClick={closeNav}>LISTAR OCORRÊNCIAS</Link>
          <Link className="linkNav" to="/" onClick={exit}>SAIR</Link>
        </div>
      </div>
      <button className="nav-button" onClick={openNav}>
        <FontAwesomeIcon icon={faBars} className="fa-2x" />
      </button>
    </div>
  );
}

export default NavBar;
