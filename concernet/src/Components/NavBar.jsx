import { Link } from "react-router-dom";
import React from 'react';
import "../Styles/NavBar.css";


const NavBar = () => {
    return (
        <body>
            <nav className="NavB">
                <div className="Titulo">
                    <h1>ConCerNet</h1>
                </div>
                <ul>
<<<<<<< HEAD
                    <li><Link to="/Dashboard">Principal</Link></li>
                    <li><Link to="/Management">Administración</Link></li>
                    <li><Link to="/Login">Cerrar sesión</Link></li>
=======
                    <li><Link to="/Dashboard">Inicio</Link></li>
                    <li><Link to="/Login">Iniciar sesión</Link></li>
>>>>>>> a4162216c767b35c8ad1f9192691e11a094d586f
                </ul>
                <div class="busqueda-bar">
                    <input type="text" placeholder="Buscar..."/>
                    <button type="submit">Buscar</button>
                </div>
            </nav>
        </body>
    );
}
export default NavBar;