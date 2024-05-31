import React from "react";
import NavBar from "../Components/NavBar";
import '../Styles/Agendamiento.css';
import { useParams } from "react-router-dom";
import espacios from "../EspaciosData";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Agendamiento = () => {
  const { id } = useParams();
  const espacio = espacios.find((espacio) => espacio.id === parseInt(id));

  if(!espacio){
    return <div>El espacio no existe</div>
  }
  return (
    <div className="agendamiento">
      <NavBar />
      <div className="contenedorAgendamiento">
        <div className="agendaImagen">
          <img src={espacio.imagen} alt={`Imagen del espacio ${espacio.nombre}`} />
        </div>
        <form className="calendario" action="#">
            <label for="nombre"><b>Nombre:</b></label>
            <input type="text" id="nombre" name="nombre" required/>

            <label for="fecha"><b>Fecha:</b></label>
            <input type="date" id="fecha" name="fecha" required/>

            <label for="hora"><b>Hora:</b></label>
            <input type="time" id="hora" name="hora" required/>

            <button type="submit">Agendar</button>
            <Link to="/Espacios" className="botonCancelar"><button id="cancelar">Cancelar</button></Link>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Agendamiento;
/*  const { id } = useParams();
  const espacio = espacios.find((espacio) => espacio.id === parseInt(id));

  if(!espacio){
    return <div>El espacio no existe</div>
  }


<div className="agendaImagen">
          <img src={espacio.imagen} alt={`Imagen del espacio ${espacio.nombre}`} />
        </div> */