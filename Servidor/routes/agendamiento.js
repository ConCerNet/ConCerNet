const express = require("express");
const agendamientoRouter = express.Router();
const agendamientoService = require("../Service/agendamiento.js");

agendamientoRouter.post('/agendar', async function(req, res, next) {
    try {
      res.json(await agendamientoService.registrar(req.body));
    } catch (err) {
      console.error(`Error al agendar`, err.message);
      next(err);
    }
  });

agendamientoRouter.get('/', async function(req, res, next){
  try {
    res.json(await agendamientoService.listaAgendamientos(req.query.page));
    } catch (err) {
      console.error(`Error al obtener los agendamientos`, err.message);
      next(err);
    }
});

 module.exports = agendamientoRouter;