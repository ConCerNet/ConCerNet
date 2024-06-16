const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagosagendamiento', {
    idpagoagendamiento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    entidaddepago: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    valoragendamiento: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pagosagendamiento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpagoagendamiento" },
        ]
      },
    ]
  });
};
