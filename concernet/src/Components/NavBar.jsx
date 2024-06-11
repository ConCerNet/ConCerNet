import { Link, useLocation, useNavigate } from "react-router-dom";
import React, {useEffect} from "react";
import { useAuth } from "../AuthProvider";
import "../Styles/NavBar.css";

const NavBar = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const handleLogout = () => {
    auth.logOut();
    navigate("/");
  };

  return (
    <body>
      <nav className="NavB">
        <div className="Titulo">
          <h1>ConCerNet</h1>
        </div>
        <ul>
          <li>
            <Link to="/Dashboard">Inicio</Link>
          </li>
          <li>
            <Link to="/Management">Administración</Link>
          </li>
          <li>
            <Link to="/Espacios">Espacios Comunes</Link>
          </li>
          <li>
            <Link to="/Viviendas">Viviendas</Link>
          </li>
          <li>
            {auth.user ? (
              <Link onClick={handleLogout}>Cerrar sesión</Link>
            ) : (
              <Link to="/Login">Iniciar sesión</Link>
            )}
          </li>
        </ul>
      </nav>
    </body>
  );
};
export default NavBar;
