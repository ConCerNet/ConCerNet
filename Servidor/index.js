import express from "express";
import cors from "cors";

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
    accessToken: "TEST-1093804644654154-060417-f65d2f086f9e17547d6312dc6ec83601-1841777517",
});

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Soy el server de ConCerNet :)");
});

app.post("/crear-Preferencia", async (req, res) => {
    try {
        const body ={
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "COP",
                },
            ],
            back_urls: {
                success: "https://github.com/ConCerNet/ConCerNet",
                failure: "https://github.com/ConCerNet/ConCerNet",
                pending: "https://github.com/ConCerNet/ConCerNet",
            },
            auto_return: "approved",
        };

        const Preferencia = new Preference(client);
        const result = await Preferencia.create({body});
        res.json({
            id: result.id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        });
    }
});

app.listen(port, ()=>{
    console.log(`El servidor está corriendo en el puerto ${port}`);
})