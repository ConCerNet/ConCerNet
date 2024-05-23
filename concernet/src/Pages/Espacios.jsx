import NavBar from "../Components/NavBar";
import piscina from '../Images/piscina.jpg';
import cancha from '../Images/cancha.jpg';
import salon from '../Images/salonSocial.jpeg';
import '../Styles/Espacios.css';

const Espacios = ()=>{
    return (
        <div className="espacio">
            <NavBar />
            <div>
                <div className="contenedorEspacios">
                    <img src={piscina} alt="Piscina" title="PISCINA"/>
                    <img src={cancha} alt="Cancha" title="CANCHA"/>
                    <img className="salon" src={salon} alt="Salon" title="SALON SOCIAL"/>
                </div>
                <span></span>
            </div>
        </div>
    );
};
export default Espacios;
/*
<label htmlFor="agenda">Agendar Espacio</label>
<input type="date" id="agenda"/>
*/