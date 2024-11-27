import React from "react";
import { Bed, Bath, Square } from "lucide-react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import {viviendas} from "../Components/data"; // Asegúrate de importar correctamente los datos
import "../Styles/ViviendasGrid.css";
import "../Styles/Viviendas.css";

const ViviendasPage = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="container-viviendas">
        <h1 className="text-center text-3xl font-bold my-6">Viviendas Disponibles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {viviendas.map((vivienda) => (
            <div
              key={vivienda.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={vivienda.ImagenVivienda}
                  alt={vivienda.direccion}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      (vivienda.estado === "En Venta" || vivienda.estado === "En Arriendo")
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {vivienda.estado}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {vivienda.direccion}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {vivienda.precio.toLocaleString("es-ES")}$ 
                  </span>
                </div>
                <div className="flex justify-between text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span className="text-sm">{vivienda.metrosCuadrados}m²</span>
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span className="text-sm">{vivienda.habitaciones}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{vivienda.baños}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default ViviendasPage;
