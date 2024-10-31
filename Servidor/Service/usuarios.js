const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function nuevoUsuario(usuario){
    try{
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

async function buscarUsuario(id){
    try{
        const usuario = await models.usuarios.findOne({
            where: {
                idusuario: id
                }
                });
            if(usuario){
                return {mensaje: "Usuario encontrado", usuario};
            }
            return {mensaje: "Usuario no encontrado"};
        } catch(error){
            return {mensaje: 'Error al buscar usuario'};
        }
}

module.exports = {
    nuevoUsuario,
    listarUsuarios,
    buscarUsuario,
}