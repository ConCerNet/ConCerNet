const express = require("express");
const rolesRouter = express.Router();
const rolesService = require("../Service/roles.js");

rolesRouter.post('/agregar', async function(req, res, next) {
    try {
      res.json(await rolesService.registrar(req.body));
    } catch (err) {
      console.error(`Error al crear rol`, err.message);
      next(err);
    }
  });

rolesRouter.get('/', async function(req, res, next) {
  try {
    res.json(await rolesService.listar(req.query.page));
  } catch (error){
    console.error("Error al conseguir los roles", error.message);
    next(error);
  }
});

rolesRouter.put('/:id', async function(req, res, next) {
  try {
    res.json(await rolesService.modificar(req.params.id, req.body));
    } catch (err) {
      console.error(`Error al modificar rol`, err.message);
      next(err);
    }
});

rolesRouter.delete('/:id', async function(req, res, next) {
  try {
    res.json(await rolesService.eliminar(req.params.id));
    } catch (err) {
      console.error(`Error al eliminar rol`, err.message);
      next(err);
    }
});

  module.exports = rolesRouter;