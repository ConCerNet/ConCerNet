var DataTypes = require("sequelize").DataTypes;
var _agendamientos = require("./agendamientos");
var _detallesadmon = require("./detallesadmon");
var _espacios = require("./espacios");
var _pagosadmon = require("./pagosadmon");
var _pagosagendamiento = require("./pagosagendamiento");
var _roles = require("./roles");
var _usuarios = require("./usuarios");
var _viviendas = require("./viviendas");

function initModels(sequelize) {
  var agendamientos = _agendamientos(sequelize, DataTypes);
  var detallesadmon = _detallesadmon(sequelize, DataTypes);
  var espacios = _espacios(sequelize, DataTypes);
  var pagosadmon = _pagosadmon(sequelize, DataTypes);
  var pagosagendamiento = _pagosagendamiento(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var viviendas = _viviendas(sequelize, DataTypes);

  agendamientos.belongsTo(espacios, { as: "idespacio_espacio", foreignKey: "idespacio"});
  espacios.hasMany(agendamientos, { as: "agendamientos", foreignKey: "idespacio"});
  detallesadmon.belongsTo(pagosadmon, { as: "idpagoadmon_pagosadmon", foreignKey: "idpagoadmon"});
  pagosadmon.hasMany(detallesadmon, { as: "detallesadmons", foreignKey: "idpagoadmon"});
  agendamientos.belongsTo(pagosagendamiento, { as: "idpagoagendamiento_pagosagendamiento", foreignKey: "idpagoagendamiento"});
  pagosagendamiento.hasMany(agendamientos, { as: "agendamientos", foreignKey: "idpagoagendamiento"});
  usuarios.belongsTo(roles, { as: "idrol_role", foreignKey: "idrol"});
  roles.hasMany(usuarios, { as: "usuarios", foreignKey: "idrol"});
  agendamientos.belongsTo(usuarios, { as: "idusuario_usuario", foreignKey: "idusuario"});
  usuarios.hasMany(agendamientos, { as: "agendamientos", foreignKey: "idusuario"});
  detallesadmon.belongsTo(usuarios, { as: "idusuario_usuario", foreignKey: "idusuario"});
  usuarios.hasMany(detallesadmon, { as: "detallesadmons", foreignKey: "idusuario"});
  viviendas.belongsTo(usuarios, { as: "idusuario_usuario", foreignKey: "idusuario"});
  usuarios.hasMany(viviendas, { as: "viviendas", foreignKey: "idusuario"});

  return {
    agendamientos,
    detallesadmon,
    espacios,
    pagosadmon,
    pagosagendamiento,
    roles,
    usuarios,
    viviendas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
