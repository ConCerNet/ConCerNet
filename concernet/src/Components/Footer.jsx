import "../Styles/Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import youtube from "../Images/youtube.svg";
import instagram from "../Images/instagram.svg";
import whatsapp from "../Images/whatsapp.svg";
import mail from "../Images/mail.svg";


const Footer = () =>{
    return(
        <div className="footer">
            <footer className="footerContainer">
                <ul className="social-icon">
                    <li>
                        <a href="https://www.youtube.com/@FaztCode" className="icon">
                            <img src={youtube} alt="social1" />
                        </a>
                        <a href="https://www.instagram.com/coding_dev_/" className="icon">
                            <img src={instagram} alt="social2" />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=573207388253&text&type=phone_number&app_absent=0" className="icon">
                            <img src={whatsapp} alt="social3" />
                        </a>
                        <a href="mailto:anedgoca2018@gmail.com" className="icon">
                            <img src={mail} alt="social4" />
                        </a>
                    </li>
                </ul>
                <ul className="menu">
                    <li>
                        <Link to="/Dashboard" className="enlace">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Management" className="enlace">Administración</Link>
                    </li>
                    <li>
                        <Link to="/Espacios" className="enlace">Espacios Comunes</Link>
                    </li>
                    <li>
                        <Link to="/Viviendas" className="enlace">Viviendas</Link>
                    </li>
                    <li>
                        <Link to="/Login" className="enlace">Iniciar sesión</Link>
                    </li>
                </ul>
                <p className="text">
                    2024 | Todos los derechos de autor reservados
                </p>
            </footer>
        </div>
    );
};

export default Footer;