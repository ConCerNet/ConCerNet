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
            <Link to="/usuarios_admin">Usuarios</Link>
          </li>
          <li>
            <Link to="/viviendas_admin">Viviendas</Link>
          </li>
          <li>
            <Link to="/reporte_pagos">Pagos</Link>
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
