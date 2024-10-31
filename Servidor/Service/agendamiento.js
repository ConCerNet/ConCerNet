const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function registrar(agendamiento){
    try {
        const dbAgendamiento = await models.agendamientos.create({...agendamiento,});
        return { mensaje: "agendamiento creado exitosamente", agendamiento: dbAgendamiento };
    } catch (error) {
        console.log(error);
        return { mensaje: "No se pudo crear el agendamiento", agendamiento: [] };
    }
}

async function listaAgendamientos(){
    try {
        const agendamientos = await models.agendamientos.findAll();
        return { mensaje: "agendamientos encontrados", agendamientos};
    } catch (error) {
        console.log(error);
        return { mensaje: "No se encontraron agendamientos"};
    }
}

module.exports = {
    registrar,
    listaAgendamientos,
};