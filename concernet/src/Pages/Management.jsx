import NavBar from "../Components/NavBar";
import "../Styles/Management.css";
import pagoimg from "../Images/cash-register.svg";
import Footer from "../Components/Footer";
import { useState } from "react";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Management = () => {
    const [PreferenceId, setPreferenceId] = useState(null);

    initMercadoPago("TEST-a751f345-e325-4c90-af00-c74ae88d6d3d", {
        locale: "es-CO",
    });

    // Datos simulados
    const [payments, setPayments] = useState([
        {
            id: 1,
            usuario: "JJCO10",
            fecha: "2024/06/10",
            numero: 3,
            descripcion: "Pago de Administración del conjunto",
            monto: 10000,
        },
        {
            id: 2,
            usuario: "DPeralta",
            fecha: "2024/05/10",
            numero: 2,
            descripcion: "Pago de Administración del conjunto",
            monto: 10000,
        },
        {
            id: 3,
            usuario: "AGonzalez",
            fecha: "2024/04/10",
            numero: 1,
            descripcion: "Pago de Administración del conjunto",
            monto: 10000,
        },
        
    ]);

    const handleBuy = async (payment) => {
        console.log("Comprar con ID:", payment.id);
        setPreferenceId(payment.id); // Simulación
    };

    return (
        <div className="container">
            <NavBar />
            <br /><br /><br />
            <div className="containerManagement">
                <h2>Lista de Pagos</h2>
                {payments.map((pago) => (
                    <div key={pago.id} className="factura lista">
                        <div className="Usuario">
                            <h3>Usuario</h3>
                            <p>{pago.usuario}</p>
                        </div>
                        <div className="fecha">
                            <h3>Fecha</h3>
                            <p>{pago.fecha}</p>
                        </div>
                        <div className="numero">
                            <h3>N° Factura</h3>
                            <p>{pago.numero}</p>
                        </div>
                        <div className="descripcionFactura">
                            <h3>Descripción</h3>
                            <p>{pago.descripcion}</p>
                        </div>
                        <button className="botonPago" onClick={() => handleBuy(pago)}>
                            <img src={pagoimg} alt="pago" />
                            <p>Pagar</p>

                        </button>
                        {PreferenceId && <Wallet initialization={{ preferenceId: PreferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Management;
