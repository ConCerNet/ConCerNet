import React from "react";
import "../Styles/Viviendas.css"; // Importa el archivo de estilos
import { Link } from "react-router-dom";

const ViviendaItem = ({
  id,
  direccion,
  precio,
  habitaciones,
  enVenta,
  imagen,
}) => (
  <div className="vivienda">
    <img src={imagen} alt={direccion} className="vivienda-imagen" />
    <h3>{direccion}</h3>
    <p>Precio: {precio}</p>
    <p>Habitaciones: {habitaciones}</p>
    <p>Estado: {enVenta ? "En Venta" : "En Arriendo"}</p>
    <Link to={`/viviendas/${id}`}>
      <button className="boton-informacion">Más información</button>
    </Link>
  </div>
);

export default ViviendaItem;
