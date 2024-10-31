const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function agregarEspacio(espacio){
    try{
        const nuevoEspacio = await models.espacios.create({...espacio,});
        return { mensaje: "Nuevo espacio agregado", espacio: nuevoEspacio };
    } catch (error){
        console.log('Error al agregar espacio', error);
        return { espacio: []};
    }
}

module.exports = {
    agregarEspacio,
}