const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function registrar(rol){
    try {
        const dbRol = await models.roles.create({...rol,});
        return { mensaje: "rol agregado exitosamente", rol: dbRol };
    } catch (error) {
        console.error('Error al registrar rol:', error);
        return { rol: [] };
    }
}

async function listar(){
    try {
        const roles = await models.roles.findAll();
        return {mensaje: "Roles encontrados", roles};
    } catch (error) {
        console.log(error);
        return {mensaje: "Roles no encontrados"}
    }
}

async function modificar(id, nombre){
    try {
        const nombrestr = String(nombre);
        const [rolCambiado] = await models.roles.update(
            {nombrerol: nombrestr},
            {
            where: {
                idrol: id
                }
            });
            if (rolCambiado > 0){
                const rol = await models.roles.findOne({where: {idrol: id}});
                return {mensaje: "Rol modificado exitosamente", rol};
            }
            return {mensaje: "Rol no encontrado"};
        } catch (error){
            console.log(error);
            return {mensaje: "El rol no se pudo modificar"};
        }
}

async function eliminar(id){
    try {
        const rolEliminado = await models.roles.destroy({
            where: {
                idrol: id
                }
                });
            if (rolEliminado > 0){
                return {mensaje: "Rol eliminado exitosamente"};
            }
                return {mensaje: "Rol no encontrado"};
        } catch (error){
            console.log(error);
            return {mensaje: "El rol no se pudo eliminar"};
        }
}

module.exports = {
    registrar,
    listar,
    eliminar
}