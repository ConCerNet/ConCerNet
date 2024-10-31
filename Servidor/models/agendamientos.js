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
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'idusuario'
      }
    },
    idpagoagendamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pagosagendamiento',
        key: 'idpagoagendamiento'
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
        name: "fk_idusuario",
        using: "BTREE",
        fields: [
          { name: "idusuario" },
        ]
      },
      {
        name: "fk_idpagoagendamiento",
        using: "BTREE",
        fields: [
          { name: "idpagoagendamiento" },
        ]
      },
    ]
  });
};
