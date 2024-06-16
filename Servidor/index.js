const express = require("express");
const cors = require("cors");
const rolesRouter = require("./routes/roles.js");
const agendamientoRouter = require("./routes/agendamiento.js");
const usuarioRouter = require("./routes/usuarios.js");
const espaciosRouter = require("./routes/espacios.js");

// SDK de Mercado Pago
const { MercadoPagoConfig, Preference } = require("mercadopago");

const client = new MercadoPagoConfig({
    accessToken: "TEST-5776186423733189-060813-d08dc4ec90a8969d6722fc8d8682e7f5-1847722107",
});

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) =>{
    res.send("El servidor está funcionando correctamente");
});

app.use("/agendamiento", agendamientoRouter);
app.use("/roles", rolesRouter);
app.use("/usuarios", usuarioRouter);
app.use("/espacios", espaciosRouter);

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
                success: "https://github.com/ConCerNet/ConCerNet.git",
                failure: "https://github.com/ConCerNet/ConCerNet.git",
                pending: "https://github.com/ConCerNet/ConCerNet.git",
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

app.post("/crear-Preferencia-Agendamiento", async (req, res) => {
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
                success: "https://github.com/ConCerNet/ConCerNet.git",
                failure: "https://github.com/ConCerNet/ConCerNet.git",
                pending: "https://github.com/ConCerNet/ConCerNet.git",
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