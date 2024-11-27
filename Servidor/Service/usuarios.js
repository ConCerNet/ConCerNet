const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const { where } = require("sequelize");
const models = initModels(sequelize);

async function nuevoUsuario(usuario){
    try{
        const userExistente = await models.usuarios.findOne({
            where: { nodocumento: usuario.nodocumento }
        });
        if(userExistente){
            return { mensaje: "El usuario ya existe", usuario: null };
        }
        const dbUsuario = await models.usuarios.create({...usuario,});
        return {mensaje: "Usuario registrado correctamente", usuario: dbUsuario};
    } catch(error){
        console.log('Error al registrar usuario:', error);
        return { usuario: [] };
    }
}

async function listarUsuarios(){
    try{
        const usuarios = await models.usuarios.findAll();
        return {mensaje: "Usuarios encontrados", usuarios};
        } catch(error){
            return {mensaje: 'Usuarios no encontrados'};
        }
}

async function buscarUsuario(id) {
  try {
    const usuario = await models.usuarios.findOne({
      where: { idusuario: id },
    });
    if (!usuario) {
      return null;
    }
    return usuario;
  } catch (error) {
    throw new Error("Error al buscar usuario");
  }
}


async function buscarUsuarioCedula(cedula) {
    try {
     const usuario = await models.usuarios.findOne({
        where: {
            nodocumento: cedula}
     });
     if(usuario){
        return {mensaje: "El usuario fue encontrado", usuario};
     }
     return {mensaje: "Usuario no encontrado por cédula"};
    } catch (error) {
        return {mensaje: 'Error al encontrar usuario'};
    }
}

async function autenticarUsuario(nombre, contraseña) {
    try {
        const usuario = await models.usuarios.findOne({where: {nombre: nombre}})
        
        if(!usuario){
            return {mensaje: "Usuario no encontrado", autenticado: false}
        }
        if(usuario.contraseña !== contraseña){
            return {mensaje: "Contraseña incorrecta", autenticado: false}
        }

        return {mensaje: "Usuario autenticado correctamente", autenticado: true, usuario}
    } catch (error) {
        console.log("Error al autenticar el usuario", error)
        return {mensaje: "Error al autenticar usuario", autenticado: false}
    }
}

module.exports = {
    nuevoUsuario,
    listarUsuarios,
    buscarUsuario,
    buscarUsuarioCedula,
    autenticarUsuario,
}