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

  // Lista de rotas onde a barra de navegação deve ser exibida
  const allowedRoutes = ['/instrucoes', '/registrar', '/listar',"/editar/:id"];

  // Verifique se a rota atual está na lista de rotas permitidas
  if (!allowedRoutes.includes(location.pathname)) {
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
        </div>
      </div>
      <button className="nav-button" onClick={openNav}>
        <FontAwesomeIcon icon={faBars} className="fa-2x" />
      </button>
    </div>
  );
}

export default NavBar;