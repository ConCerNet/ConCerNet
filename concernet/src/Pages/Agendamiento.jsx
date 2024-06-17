import React from "react";
import NavBar from "../Components/NavBar";
import '../Styles/Agendamiento.css';
import { useNavigate, useParams } from "react-router-dom";
import espacios from "../EspaciosData";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Agendamiento = () => {
  const { id } = useParams();
  const espacio = espacios.find((espacio) => espacio.id === parseInt(id));
  const [idusuario, setIdUsuario] = useState('');
  const [fechaagendamiento, setFechaAgendamiento] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const navigate = useNavigate();

  const agendarEspacio = async (e) => {
    e.preventDefault();
    const fechaActual = new Date().toISOString().split('T')[0];
    const horaActual = new Date().toTimeString().split(' ')[0];

    if (fechaagendamiento < fechaActual){
      alert("No puedes agendar con una fecha que ya pasó");
      return;
      
    };
    
    if (fechaagendamiento === fechaActual && horaInicio <= horaActual){
        alert("El horario ya no está disponible");
        return;
    };

    if (horaInicio >= horaFin){
      alert("Los horarios no son correctos");
      return;
    }

    const horaInicioDate = new Date(`1970-01-01T${horaInicio}:00`);
    const horaFinDate = new Date(`1970-01-01T${horaFin}:00`);

    const diferenciaHoras = (horaFinDate - horaInicioDate) / (1000 * 60 * 60);

    if (diferenciaHoras < 1) {
      alert('La diferencia entre la hora de inicio y la hora de fin debe ser de al menos 1 hora');
      return;
    }

    try {
      const responseUsuario = await axios.get(`http://localhost:4000/usuarios/${idusuario}`);
      if(responseUsuario.data.mensaje === "Usuario no encontrado"){
        alert('El usuario no existe');
        return;
      }

      const response = await axios.post('http://localhost:4000/agendamiento/agendar', {
        idespacio: id,
        idusuario,
        fechaagendamiento,
        horaInicio,
        horaFin,
        idpagoagendamiento: 1
      });
      console.log(response.data);
      alert("Agendamiento creado con éxito");
      navigate("/Dashboard");
    } catch (error) {
      console.error('Error al agendar', error);
    }
  };

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
        <form className="calendario" onSubmit={agendarEspacio}>
          <div className="campos">
            <label for="cedula"><b>Cédula:</b></label>
            <input type="number" id="cedula" name="cedula" value={idusuario} onChange={(e) => setIdUsuario(e.target.value)} required/>

            <label for="fecha"><b>Fecha:</b></label>
            <input type="date" id="fecha" name="fecha" value={fechaagendamiento} onChange={(e) => setFechaAgendamiento(e.target.value)} required/>

            <label for="horaInicio"><b>Hora Inicio:</b></label>
            <input type="time" id="horaInicio" name="horaInicio" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} required/>

            <label for="horaFin"><b>Hora Fin:</b></label>
            <input type="time" id="horaFin" name="horaFin" value={horaFin} onChange={(e) => setHoraFin(e.target.value)} required/>

          </div>
            <div className="desicion">
              <button className="agendar" type="submit">Agendar</button>
              <Link className="cancelar" to="/Espacios">Cancelar</Link>
            </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Agendamiento;