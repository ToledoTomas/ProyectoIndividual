const { DataTypes } = require('sequelize');
const { toDefaultValue } = require('sequelize/lib/utils');

module.exports = sequelize => {
  sequelize.define('genre', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
