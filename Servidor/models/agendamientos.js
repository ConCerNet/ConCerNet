const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agendamientos', {
    idagendamiento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idespacio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'espacios',
        key: 'idespacio'
      }
    },
    fechaagendamiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    horaInicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    horaFin: {
      type: DataTypes.TIME,
      allowNull: false
    },
    idpagoagendamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pagosagendamiento',
        key: 'idpagoagendamiento'
      }
    },
    nodocumento: {
      type: DataTypes.STRING(12),
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'nodocumento'
      }
    }
  }, {
    sequelize,
    tableName: 'agendamientos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idagendamiento" },
        ]
      },
      {
        name: "fk_idespacio",
        using: "BTREE",
        fields: [
          { name: "idespacio" },
        ]
      },
      {
        name: "fk_agendamientos_idpagoagendamiento",
        using: "BTREE",
        fields: [
          { name: "idpagoagendamiento" },
        ]
      },
      {
        name: "fk_nodocumento",
        using: "BTREE",
        fields: [
          { name: "nodocumento" },
        ]
      },
    ]
  });
};
