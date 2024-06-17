import React from "react";
import NavBar from "../Components/NavBar";
import '../Styles/Agendamiento.css';
import { useParams } from "react-router-dom";
import espacios from "../EspaciosData";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";

const Agendamiento = () => {
  const { id } = useParams();
  const espacio = espacios.find((espacio) => espacio.id === parseInt(id));
  const [PreferenceId, setPreferenceId] = useState('');
  const [idusuario, setIdUsuario] = useState('');
  const [fechaagendamiento, setFechaAgendamiento] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');

  //Mercado Pago

  initMercadoPago('TEST-a751f345-e325-4c90-af00-c74ae88d6d3d', {
      locale: "es-CO",
  });

  const crearPreferenciaAgendamiento = async () => {
      try {
          const response = await axios.post("http://localhost:4000/crear-Preferencia-Agendamiento", {
              title: "Agendamiento",
              quantity: 1,
              price: 5000,
          });

          const {id} = response.data;
          return id;
      } catch (error) {
          console.log(error);
      }
  };

  const agendarEspacio = async (e) => {
    e.preventDefault();
    const fechaActual = new Date().toISOString().split('T')[0];
    const horaActual = new Date().toTimeString().split(' ')[0];
    //const cedula = document.getElementById('cedula').value;

    if (fechaagendamiento < fechaActual){
      alert("No puedes agendar con una fecha que ya pasó");
      return;
      
    };
    
    if (horaInicio <= horaActual){
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

      const response = await axios.post('http://localhost:4000/agendamiento/agendar', {
        idespacio: id,
        idusuario,
        fechaagendamiento,
        horaInicio,
        horaFin,
        idpagoagendamiento: 1
      });
      console.log(response.data);
      <Link to="/Dashboard">{alert("Agendamiento creado con éxito")}</Link>
    } catch (error) {
      console.error('Error al agendar', error);
    }
  };

  const handleBuy = async () => {
      const id = await crearPreferenciaAgendamiento();
      if (id) {
          setPreferenceId(id);
      }
  };

  //Mercado Pago

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
              <button className="agendar" type="submit" onClick={handleBuy} >Agendar</button>
              <Link className="cancelar" to="/Espacios">Cancelar</Link>
              <button className="Pagar" onClick={handleBuy}>Pago</button>
              <div className="mercadoPago">
                {PreferenceId && <Wallet initialization={{ preferenceId: PreferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
              </div>
            </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Agendamiento;