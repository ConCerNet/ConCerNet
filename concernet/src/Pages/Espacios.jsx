import NavBar from '../Components/NavBar';
import '../Styles/Espacios.css';
import { Link } from "react-router-dom";
import React from 'react';
import Footer from "../Components/Footer";
import espacios from "../EspaciosData";
import { useState } from 'react';

const Espacios = ()=>{
    const [seleccionImg, setSeleccionImg] = useState(null);

    const handleMouseOver = (nombre)=>{
        setSeleccionImg(nombre);
    }
    const handleMouseOut = ()=>{
        setSeleccionImg(null);
    }
    return (
        <div className="espacio">
            <NavBar />
                <div className="pista">
                    <h2>Selecciona el espacio que deseas agendar</h2>
                </div>
                <div className='espaciosList'>
                    <section>
                        {espacios.map((espacio) => (
                            <img key={espacio.id} id={espacio.nombre} src={espacio.imagen} alt={espacio.nombre}
                                title={espacio.nombre} 
                                className={seleccionImg === espacio.nombre ? 'hovered' : ''}/>
                        ))}
                    </section>
                    <div className='botonesList'>
                        {espacios.map((espacio) =>(
                            <Link key={espacio.id} to={`/Espacios/${espacio.id}`}>
                                <button onMouseOver={()=>{handleMouseOver(espacio.nombre)}} onMouseOut={handleMouseOut} 
                                    className={espacio.nombre}>{espacio.nombre}</button>
                            </Link>
                        ))}
                    </div>
                </div>
            <Footer/>
        </div>
    );
};
export default Espacios;
