import NavBar from "../Components/NavBar";
import "../Styles/Management.css";
import historial from "../Images/receipt.svg";
import pago from "../Images/cash-register.svg";
import Footer from "../Components/Footer";
import { useState } from "react";

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";

const Management = () => {

    const [PreferenceId, setPreferenceId] = useState(null); 

    initMercadoPago('TEST-a751f345-e325-4c90-af00-c74ae88d6d3d', {
        locale: "es-CO",
    });

    const crearPreferencia = async () => {
        try {
            const response = await axios.post("http://localhost:4000/crear-Preferencia", {
                title: "Administracion",
                quantity: 1,
                price: 10000,
            });

            const {id} = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {
        const id = await crearPreferencia();
        if (id) {
            setPreferenceId(id);
        }
    };

    return(
        <div className="container">
            <NavBar/>
            <br/><br/><br/>
            <div className="containerManagement">
                <div className="factura">
                    <h1>FACTURA</h1>
                    <div className="Usuario">
                        <h2>Usuario</h2>
                        <p>JJCO10</p>
                    </div>
                    <div className="fecha">
                        <h2>Fecha</h2>
                        <p>2024/06/10</p>
                    </div>
                    <div className="numero">
                        <h2>N° Factura</h2>
                        <p>3</p>
                    </div>
                    <div className="descripcionFactura">
                        <h2>Descripcion</h2>
                        <p>Pago de Administración del conjunto</p>
                    </div>
                </div>
                <div className="botones">
                    {/*<div className="botonHistorial">
                        <img src={historial} alt="historial" />
                        <p>Historial</p>
                    </div>*/}
                    

                    <button className="botonPago" onClick={handleBuy}>
                        <img src={pago} alt="pago" />
                        <p>Pago</p>
                    </button>

                    {PreferenceId && <Wallet initialization={{ preferenceId: PreferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
                    
                </div>

            </div>
            <Footer/>
        </div>
    )
};
export default Management;