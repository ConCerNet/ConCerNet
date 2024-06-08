import express from "express";
import cors from "cors";

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
    accessToken: "TEST-5776186423733189-060813-d08dc4ec90a8969d6722fc8d8682e7f5-1847722107",
});

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Soy el server :)");
});

app.post("/crear-Preferencia", async (req, res) => {
    try {
        const body ={
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    price: Number(req.body.price),
                    currency_id: "COP",
                },
            ],
            back_urls: {
                success: "https://www.google.com/?hl=es",
                failure: "https://www.google.com/?hl=es",
                pending: "https://www.google.com/?hl=es",
            },
            auto_return: "Approved",
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