import NavBar from '../Components/NavBar';
import piscina from '../Images/piscina.jpg';
import cancha from '../Images/cancha.jpg';
import salon from '../Images/salonSocial.jpeg';
import '../Styles/Espacios.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Espacios = ()=>{
    return (
        <div className="espacio">
            <NavBar />
            <div>
                <div className="contenedorEspacios">
                    <Link to="/Agendamiento"><img src={piscina} alt="Piscina" title="PISCINA"/></Link>
                    <Link to="/Agendamiento"><img src={cancha} alt="Cancha" title="CANCHA"/></Link>
                    <Link to="/Agendamiento"><img id="salon" src={salon} alt="Salon" title="SALON SOCIAL"/></Link>
                </div>
                <div className="pista">
                    <p>Presiona el espacio que deseas agendar</p>
                </div>
            </div>
        </div>
    );
};
export default Espacios;
/*
<label htmlFor="agenda">Agendar Espacio</label>
<input type="date" id="agenda"/>
*/