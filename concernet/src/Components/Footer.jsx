import "../Styles/Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className="footer">
            <footer className="footerContainer">
                <ul className="social-icon">
                    <li className="icon-img">
                        <a href="">
                            <img src="" alt="" />
                        </a>
                        <a href="">
                            <img src="" alt="" />
                        </a>
                        <a href="">
                            <img src="" alt="" />
                        </a>
                        <a href="">
                            <img src="" alt="" />
                        </a>
                    </li>
                </ul>
                <ul className="menu">
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
            </footer>
        </div>
    );
};

export default Footer;