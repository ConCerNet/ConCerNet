const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detallesadmon', {
    idpagoadmon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pagosadmon',
        key: 'idpagoadmon'
      }
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'idusuario'
      }
    },
    fechapago: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaplazo: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'detallesadmon',
    timestamps: false,
    indexes: [
      {
        name: "fk_detallesadmon_idpagoadmon",
        using: "BTREE",
        fields: [
          { name: "idpagoadmon" },
        ]
      },
      {
        name: "fk_detallesadmon_idusuario",
        using: "BTREE",
        fields: [
          { name: "idusuario" },
        ]
      },
    ]
  });
};
