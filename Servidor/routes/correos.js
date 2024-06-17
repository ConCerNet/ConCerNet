import brevo from "@getbrevo/brevo";
import { use } from "./roles";

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    'SjtGNCQLH0P92KXh'
)

async function main(){

    const user = {
        name: "Andres Peralta",
        email: "anedgoca2018@gmail.com",
        fecha: "17/06/24",
        idFactura: "000000001",
        espacio: "cancha"
    }

    try {
        const sendSmtpEmail = brevo.SendSmtpEmail()

        sendSmtpEmail.subject = "ConCerNet"
        sendSmtpEmail.to = [
            {email: user.email, name: user.name}
        ]
        sendSmtpEmail.htmlContent = `
            <html>
                <body>
                    <h1>Agendamiento</h1>
                    <h2>FACTURA</h2>
                    <h3>Usuario</h3>
                    <p>${user.name}</p>
                    <h3>Fecha</h3>
                    <p>${user.fecha}</p>
                    <h3>N_Factura</h3>
                    <p>${user.idFactura}</p>
                    <h3>Descripcion</h3>
                    <p>Pago de mantenimientos de espacios comunes, hecho por ${user.email}</p>
                    <p>Agendamiento de ${user.espacio}</p>
                </body>
            </html>
        `

        sendSmtpEmail.sender = {
            name: "ConCerNet",
            email: "juanjosecarmonaortiz1@gmil.com"
        }

        await apiInstance.sendTransacEmail(sendSmtpEmail)
    } catch (error) {
        console.error(error);
    }
}

main();