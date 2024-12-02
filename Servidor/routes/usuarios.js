const express = require("express");
const usuarioRouter = express.Router();
const usuarioService = require("../Service/usuarios.js");

usuarioRouter.post('/registrar', async function(req, res, next){
    try{
        const resultado = await usuarioService.nuevoUsuario(req.body);
        if (!resultado.usuario) {
            return res.status(400).json({mensaje: resultado.mensaje});
        }
        return res.status(200).json({mensaje: resultado.mensaje, usuario: resultado.usuario});
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

usuarioRouter.get('/:nodocumento', async function (req, res, next) {
  try {
    const usuario = await usuarioService.buscarUsuarioCedula(req.params.nodocumento);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (err) {
    console.error("Error mientras se buscaba el usuario", err.message);
    next(err);
  }
});


// usuarioRouter.get('/buscarCedula', async function(req, res, next) {
//     try {
//         const {cedula} = req.query;
//         if(!cedula){
//             return res.status(400).json({error: "Falta el parametro cedula"});
//         }
//         const resultado = await usuarioService.buscarUsuarioCedula(cedula);

//         if(resultado.usuario){
//             res.status(200).json(resultado.usuario);
//         }
//         res.status(404).json({ mensaje: resultado.mensaje });

//     } catch (err) {
//         console.error("Error mientras se buscaba el usuario por cédula", err.message);
//         next(err);
//     }
// });

usuarioRouter.post('/login', async function(req, res, next) {
    try {
        const {username, password} = req.body;
        const nombre = username || req.body.nombre;
        const contraseña = password || req.body.contraseña;
        const resultado = await usuarioService.autenticarUsuario(nombre, contraseña);
        
        if (!resultado.autenticado) {
            return res.status(401).json({ mensaje: resultado.mensaje });
        }

        res.status(200).json({ mensaje: resultado.mensaje, usuario: resultado.usuario });
    } catch (err) {
        console.error("Error mientras se autenticaba el usuario", err.message);
        next(err);
    }
});

module.exports = usuarioRouter;