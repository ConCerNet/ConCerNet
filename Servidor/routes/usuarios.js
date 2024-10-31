const express = require("express");
const usuarioRouter = express.Router();
const usuarioService = require("../Service/usuarios.js");

usuarioRouter.post('/registrar', async function(req, res, next){
    try{
        res.json(await usuarioService.nuevoUsuario(req.body));
    } catch(err){
        console.error("Error mientras se registraba el usuario", err.message);
        next(err);
    }
});

usuarioRouter.get('/', async function(req, res, next){
    try{
        res.json(await usuarioService.listarUsuarios(req.query.page));
        } catch(err){
            console.error("Error mientras se obtenian usuarios", err.message);
            next(err);
        }
});

usuarioRouter.get('/:id', async function(req, res, next){
    try {
        res.json(await usuarioService.buscarUsuario(req.params.id, req.body));
        } catch (err) {
            console.error("Error mientras se buscaba el usuario", err.message);
            next(err);
        }
});

module.exports = usuarioRouter;