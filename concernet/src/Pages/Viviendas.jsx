import ViviendasList from "../Components/ViviendasList";
import "../Styles/Viviendas.css"; // Importa el archivo de estilos
import viviendas from "../viviendasData";
import NavBar from "../Components/NavBar";

const Viviendas = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="container-viviendas">
        <h1>Viviendas Disponibles</h1>
        <ViviendasList viviendas={viviendas} />
      </div>
    </div>
  );
};

export default Viviendas;
