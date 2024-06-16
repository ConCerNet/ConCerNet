const express = require("express");
const espaciosRouter = express.Router();
const espaciosService = require("../Service/espacios.js");

espaciosRouter.post('/agregar', async function(req, res, next){
    try {
        res.json(await espaciosService.agregarEspacio(req.body));
        } catch (err) {
            console.error("Error mientras se agregaba el espacio", err.message);
            next(err);
        }
});

module.exports = espaciosRouter;