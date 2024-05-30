import { Link } from "react-router-dom";
import React from "react";
import "../Styles/NavBar.css";

const recargar = () => {
  window.location.recargar(true);
}

const NavBar = () => {
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
            <Link to="/Login">Iniciar sesión</Link>
          </li>
        </ul>
      </nav>
    </body>
  );
};
export default NavBar;
