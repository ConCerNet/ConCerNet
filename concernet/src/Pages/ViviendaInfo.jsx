import React from "react";
import { useParams } from "react-router-dom";
import viviendas from "../viviendasData"; // Importa los datos de las viviendas
import "../Styles/ViviendaInfo.css"; // Importa el archivo de estilos
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const ViviendaInfo = () => {
  const { id } = useParams();
  const vivienda = viviendas.find((vivienda) => vivienda.id === parseInt(id));

  if (!vivienda) {
    return <div>No se encontró la vivienda.</div>;
  }

  return (
    <div className="container">
      <NavBar />
      <div className="container-vivenda-info">
        <div className="vivienda-info">
          <h2>{vivienda.direccion}</h2>
          <img
            src={vivienda.imagen}
            alt={`Imagen de ${vivienda.direccion}`}
            className="vivienda-imagen-detalle"
          />
          <div className="parrafos-viviendas">
            <p>Precio: {vivienda.precio}</p>
            <p>Habitaciones: {vivienda.habitaciones}</p>
            <p>Estado: {vivienda.enVenta ? "En Venta" : "En Arriendo"}</p>
            <p>Descripción: {vivienda.descripcion}</p>
            <Link to={``}>
              <button className="boton-contactar">Contactar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViviendaInfo;