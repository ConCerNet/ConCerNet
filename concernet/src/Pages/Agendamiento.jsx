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
        
        <form className="calendario" action="#">
            <div className="agendaImagen">
              <img src={espacio.imagen} alt={`Imagen del espacio ${espacio.nombre}`} />
            </div>
            <div className="calendarioimputs">
              <label for="nombre"><b>Cedula:</b></label>
              <input type="text" id="cedula" name="cedula" required/>

              <label for="nombre"><b>Nombre:</b></label>
              <input type="text" id="nombre" name="nombre" required/>

              <label for="fecha"><b>Fecha:</b></label>
              <input type="date" id="fecha" name="fecha" required/>

              <label for="horaInicio"><b>Hora Inicio:</b></label>
              <input type="time" id="horaInicio" name="horaInicio" required/>

              <label for="horaFin"><b>Hora Fin:</b></label>
              <input type="time" id="horaFin" name="horaFin" required/>

              <div className="buttonContainer">
                <button type="submit" className="botonAgendar">Agendar</button>
                <Link to="/Espacios" className="botonCancelar">Cancelar</Link>
              </div>
            </div>
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