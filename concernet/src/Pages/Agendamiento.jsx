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
  const [PreferenceId, setPreferenceId] = useState(null); 

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
        <form className="calendario" action="#">
          <div className="campos">
            <label for="nombre"><b>Nombre:</b></label>
            <input type="text" id="nombre" name="nombre" required/>

            <label for="fecha"><b>Fecha:</b></label>
            <input type="date" id="fecha" name="fecha" required/>

            <label for="horaInicio"><b>Hora Inicio:</b></label>
            <input type="time" id="horaInicio" name="horaInicio" required/>

            <label for="horaFin"><b>Hora Fin:</b></label>
            <input type="time" id="horaFin" name="horaFin" required/>

          </div>
            <div className="desicion">
              <button className="agendar" type="submit">Agendar</button>
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