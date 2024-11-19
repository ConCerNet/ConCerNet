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
  const [nombreusuario, setNombreUsuario] = useState('');
  const [fechaagendamiento, setFechaAgendamiento] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const navigate = useNavigate();

  const handleChangeCedula = async (valor) => {

    setIdUsuario(valor);

    if(valor === ''){
      setNombreUsuario('');
      return;
    }

    try {

      const responseComplete = await axios.get(`http://localhost:4000/usuarios/${valor}`);
      const user = responseComplete.data;

      setNombreUsuario(user.nombre);

    } catch (error) {
      
      console.error("Error al buscar usuario:", error);
      setNombreUsuario('Usuario no encontrado');
    }
  }

  const agendarEspacio = async (e, valor) => {
    e.preventDefault();
    try {
      
      const responseUsuario = await axios.get(`http://localhost:4000/usuarios/${idusuario}`);
      if(responseUsuario.data.mensaje === "Usuario no encontrado"){
        alert('El usuario no existe');
        return;
      }

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
        <form className="calendario" onSubmit={agendarEspacio}>
         <div className="agendaImagen">
           <img src={espacio.imagen} alt={`Imagen del espacio ${espacio.nombre}`} />
          </div>
          <div className="calendarioimputs">
            <label for="cedula"><b>Cédula:</b></label>
            <input type="number" id="cedula" name="cedula" value={idusuario} onChange={(e) => handleChangeCedula(e.target.value)} required/>

            <label for="nombre"><b>Nombre:</b></label>
            <input type="text" disabled id="nombre" name="nombre" value={nombreusuario} required/>
            
            <label for="fecha"><b>Fecha:</b></label>
            <input type="date" id="fecha" name="fecha" value={fechaagendamiento} onChange={(e) => setFechaAgendamiento(e.target.value)} required/>

            <label for="horaInicio"><b>Hora Inicio:</b></label>
            <input type="time" id="horaInicio" name="horaInicio" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} required/>

            <label for="horaFin"><b>Hora Fin:</b></label>
            <input type="time" id="horaFin" name="horaFin" value={horaFin} onChange={(e) => setHoraFin(e.target.value)} required/>
            
            <div className="buttonContainer">
              <button className="botonAgendar" type="submit">Agendar</button>
              <Link className="botonCancelar" to="/Espacios">Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Agendamiento;