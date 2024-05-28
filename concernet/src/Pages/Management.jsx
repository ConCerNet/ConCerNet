import NavBar from "../Components/NavBar";
import "../Styles/Management.css";
import historial from "../Images/receipt.svg";
import pago from "../Images/cash-register.svg";
import Footer from "../Components/Footer";

const Management = () => {
    return(
        <div className="container">
            <NavBar/>

            <div className="containerManagement">
                <div className="factura">
                    <h1>FACTURA</h1>
                    <div className="Usuario">
                        <h2>Usuario</h2>
                        <p>JJCO10</p>
                    </div>
                    <div className="fecha">
                        <h2>Fecha</h2>
                        <p>dd/mm/yy</p>
                    </div>
                    <div className="numero">
                        <h2>N_Factura</h2>
                        <p>0000001</p>
                    </div>
                    <div className="descripcionFactura">
                        <h2>Descripcion</h2>
                        <p>Pago de mantenimientos de espacios comunes</p>
                    </div>
                </div>
                <div className="botones">
                    <div className="botonHistorial">
                        <img src={historial} alt="historial" />
                        <p>Historial</p>
                    </div>
                    <div className="botonPago">
                        <img src={pago} alt="pago" />
                        <p>Pago</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default Management;