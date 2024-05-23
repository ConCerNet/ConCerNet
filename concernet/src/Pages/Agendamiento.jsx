import NavBar from "../Components/NavBar";
import piscina from '../Images/piscina.jpg';
import cancha from '../Images/cancha.jpg';
import salon from '../Images/salonSocial.jpeg';

const Agendamiento = () => {
  return (
    <div className="agendamiento">
      <NavBar />
      <div className="contenedorAgendamiento">
        <form action="#">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required/>

            <label for="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" required/>

            <label for="hora">Hora:</label>
            <input type="time" id="hora" name="hora" required/>

            <button type="submit">Agendar</button>
        </form>
      </div>
    </div>
  );
};

export default Agendamiento;
