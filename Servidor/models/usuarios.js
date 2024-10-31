const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    idusuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'idrol'
      }
    },
    tipodocumento: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "CC"
    },
    nodocumento: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: "idx_nodocumento_unique"
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    'contraseña': {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    fechanacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idusuario" },
        ]
      },
      {
        name: "idx_nodocumento_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nodocumento" },
        ]
      },
      {
        name: "fk_idrol",
        using: "BTREE",
        fields: [
          { name: "idrol" },
        ]
      },
    ]
  });
};
