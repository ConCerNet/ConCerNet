import NavBar from '../Components/NavBar';
import piscina from '../Images/piscina.jpg';
import cancha from '../Images/cancha.jpg';
import salon from '../Images/salonSocial.jpeg';
import '../Styles/Espacios.css';
import { Link } from "react-router-dom";
import React from 'react';
import Footer from "../Components/Footer";

const Espacios = ()=>{
    const espacios = [
        { id: 1, imagen: piscina, nombre: 'piscina' },
        { id: 2, imagen: cancha, nombre: 'cancha' },
        { id: 3, imagen: salon, nombre: 'salon' },
      ];
    return (
        <div className="espacio">
            <NavBar />
                <div className="pista">
                    <h2>Presiona el espacio que deseas agendar</h2>
                </div>
                <div className='espaciosList'>
                        {espacios.map((espacio) => (
                            <Link key={espacio.id} to={`/Espacios/${espacio.id}`}>
                                <div className='contenedorEspacio'>
                                    <img id={espacio.nombre} src={espacio.imagen} alt={espacio.nombre} title={espacio.nombre} />
                                    {/*<h3 className={espacio.nombre}>{espacio.nombre}</h3>*/}
                                </div>
                            </Link>
                        ))}
                </div>
            <Footer/>
        </div>
    );
};
export default Espacios;
