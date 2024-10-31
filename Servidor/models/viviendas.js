const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('viviendas', {
    numerovivienda: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'idusuario'
      }
    },
    estadovivienda: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'viviendas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numerovivienda" },
        ]
      },
      {
        name: "fk_viviendas_idusuario",
        using: "BTREE",
        fields: [
          { name: "idusuario" },
        ]
      },
    ]
  });
};
