import React from "react";
import ViviendaItem from "./ViviendaItem";
import "../Styles/Viviendas.css";

const ViviendasList = ({ viviendas }) => (
  <div className="viviendas-list">
    {viviendas.map((vivienda) => (
      <ViviendaItem key={vivienda.id} {...vivienda} />
    ))}
  </div>
);

export default ViviendasList;
