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
                    <li><Link to="/Dashboard">Principal</Link></li>
                    <li><Link to="/Login">Cerrar sesión</Link></li>
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